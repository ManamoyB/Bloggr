import express from "express";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Multer for handling file uploads (images)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes

// Home page
app.get("/", (req, res) => {
  res.render("fullPages/index.ejs");
});
app.get("/ContactUs", (req, res) => {
  res.render("fullPages/fullContactus.ejs");
});

// Blog posting page
app.get("/createBlog", (req, res) => {
  res.render("fullPages/createBlog");
});

// Handle form submission and save blog with metadata
app.post("/post-blog", upload.single("headerImage"), (req, res) => {
  const { title, author, content } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : "/uploads/default.jpg";
  const uploadedTime = new Date().toLocaleString();

  if (!title || !author || !content) {
    return res.status(400).send("All fields (title, author, content) are required.");
  }

  // Save blog details as a JSON file
  const blogData = {
    title,
    author,
    content,
    imagePath,
    uploadedTime,
  };

  const sanitizedTitle = title.replace(/\s+/g, "_").replace(/[^\w\-]/g, "");
  const filePath = path.join(__dirname, "blogs", `${Date.now()}_${sanitizedTitle}.json`);
  fs.writeFileSync(filePath, JSON.stringify(blogData, null, 2), "utf-8");

  res.redirect("/readblog");
});

// Display all blogs
app.get("/readblog", (req, res) => {
  const blogsDir = path.join(__dirname, "blogs");
  if (!fs.existsSync(blogsDir)) return res.render("blogs", { blogs: [] });

  const blogFiles = fs.readdirSync(blogsDir);
  const blogs = blogFiles.map((file) => {
    const blogData = JSON.parse(fs.readFileSync(path.join(blogsDir, file), "utf-8"));
    return {
      id: file.replace(".json", ""),
      ...blogData,
    };
  });

  res.render("fullPages/readblog", { blogs });
});

// View a single blog
app.get("/blogs/:id", (req, res) => {
  const blogFile = path.join(__dirname, "blogs", `${req.params.id}.json`);
  if (!fs.existsSync(blogFile)) return res.status(404).send("Blog not found.");

  const blogData = JSON.parse(fs.readFileSync(blogFile, "utf-8"));
  res.render("fullPages/fullBlog", { blog: blogData });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
