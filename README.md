# Bloggr | Full-Stack Content Publishing & Blogging Platform

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Web%20Framework-darkblue?style=flat-square&logo=express)
![EJS](https://img.shields.io/badge/EJS-Template%20Engine-red?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat-square&logo=javascript)
![Multer](https://img.shields.io/badge/Multer-File%20Upload-blue?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?style=flat-square&logo=css3)

---

## 📌 Project Overview

**Bloggr** is a full-stack content publishing platform that enables users to create, publish, and discover blog articles. Built with Node.js and Express, the application demonstrates practical backend engineering, file handling, dynamic content rendering, and server-side templating for a real-world blogging ecosystem.

**Key Highlights:**
- ✅ **Blog Creation System**: Users create and publish blog posts with featured images
- ✅ **Full-Stack Architecture**: Node.js backend, EJS templating, CSS frontend
- ✅ **File Upload Handling**: Multer-based image uploads for blog headers
- ✅ **Dynamic Content Rendering**: Server-side templating for blog pages
- ✅ **JSON-Based Persistence**: Efficient content storage and retrieval
- ✅ **Responsive Design**: Mobile-friendly blog reading interface
- ✅ **Production-Ready**: Deployable on Render, Railway, or VPS
- ✅ **Portfolio Showcase**: Demonstrates backend engineering expertise

---

## 🎯 Why This Matters

Blogging platforms are **critical for content discovery**:

- **Content Distribution**: Enable creators to share ideas globally
- **Backend Complexity**: File uploads, dynamic rendering, content management
- **Scalability Challenges**: Handling multiple blog posts, images, users
- **User Experience**: Fast loading, responsive design, easy publishing
- **Real-World Problem**: Practical solution for content creators
- **Full-Stack Skills**: Requires frontend + backend + file handling
- **Deployment**: Production hosting and monitoring

This project demonstrates **full-stack web application engineering** with practical content management.

---

## 🚀 Core Features

### 1. **Blog Creation System**
   - Intuitive blog creation form
   - Title, author, content input
   - Rich text editor (Quill.js support)
   - Featured image upload
   - Draft/publish workflow

### 2. **Content Management**
   - Create new blog posts
   - Store blog data as JSON
   - Organize by publish date
   - Manage blog metadata
   - Archive functionality

### 3. **Blog Discovery**
   - Homepage with featured posts
   - Browse all published blogs
   - Blog listing with preview cards
   - Quick navigation
   - Recent posts first

### 4. **Blog Reading**
   - Dedicated article pages
   - Featured image display
   - Author information
   - Publication date
   - Full article content
   - Responsive layout

### 5. **File Upload System**
   - Multer middleware integration
   - Image validation
   - Secure file storage
   - File organization
   - Error handling

### 6. **Server-Side Rendering**
   - EJS template engine
   - Dynamic page generation
   - Data binding
   - Conditional rendering
   - Template reusability

### 7. **User Interface**
   - Clean, modern design
   - Mobile-responsive
   - Easy navigation
   - Form validation
   - Error messages

---

## 🛠️ Tech Stack

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express.js** - Web application framework
- **Body Parser** - Request body parsing
- **Multer** - File upload handling
- **File System (fs)** - File operations
- **Middleware** - Request processing

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Styling & layout
- **JavaScript (ES6)** - Client-side logic
- **Quill Editor** - Rich text editing (optional)

### Templating
- **EJS** - Embedded JavaScript templating
- **Dynamic rendering** - Server-side HTML generation

### Data Storage
- **JSON files** - Content persistence
- **File system** - Blog storage
- **Organized folders** - Content organization

---

## 📊 Application Architecture

### Layered Architecture

```
┌──────────────────────────────────────────┐
│      Frontend Layer (UI)                 │
│  HTML | CSS | JavaScript | Responsive   │
└──────────────────────────────────────────┘
                   │
                   ↓
┌──────────────────────────────────────────┐
│    Express Route Layer                   │
│  GET / POST | Middleware | Controllers   │
└──────────────────────────────────────────┘
                   │
                   ↓
┌──────────────────────────────────────────┐
│  Business Logic Layer                    │
│  Blog processing | File handling         │
│  Content validation | Formatting         │
└──────────────────────────────────────────┘
                   │
                   ↓
┌──────────────────────────────────────────┐
│   Data Layer (File Storage)              │
│  JSON files | Image storage | File ops   │
└──────────────────────────────────────────┘
```

### Request Flow

```
User Input (Create Blog)
       ↓
Express Route Handler
       ↓
Multer Middleware (Image Upload)
       ↓
File Storage
       ↓
Content Validation
       ↓
JSON Persistence
       ↓
EJS Template Rendering
       ↓
Browser Display
```

---

## 📂 Project Structure

```
Bloggr/
│
├── index.js                                # Express server entry point
├── package.json                            # Dependencies & metadata
├── package-lock.json                       # Dependency lock file
│
├── views/                                  # EJS Templates
│   ├── index.ejs                           # Home page
│   ├── create-blog.ejs                     # Blog creation form
│   ├── all-blogs.ejs                       # Blog listing page
│   ├── blog-detail.ejs                     # Individual blog page
│   ├── contact.ejs                         # Contact page
│   ├── header.ejs                          # Header partial
│   └── footer.ejs                          # Footer partial
│
├── blogs/                                  # Blog Data Storage
│   ├── blog-1.json                         # Blog post data (JSON)
│   ├── blog-2.json
│   └── ...
│
├── public/                                 # Static Assets
│   ├── css/                                # Stylesheets
│   │   ├── style.css                       # Main styles
│   │   └── responsive.css                  # Mobile styles
│   ├── js/                                 # Client-side JS
│   │   └── script.js
│   ├── uploads/                            # Blog header images
│   │   ├── blog-1-header.jpg
│   │   ├── blog-2-header.jpg
│   │   └── ...
│   └── images/                             # Site assets
│
├── docs/                                   # Documentation
│   ├── setup-guide.md                      # Setup instructions
│   ├── architecture.md                     # System design
│   └── features.md                         # Feature documentation
│
└── README.md                               # Project documentation
```

---

## 🚀 Installation & Setup

### Prerequisites
```bash
✓ Node.js 18.0+
✓ npm or yarn
✓ Git
```

### Clone Repository
```bash
git clone https://github.com/ManamoyB/Bloggr.git
cd Bloggr
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
node index.js
```

Visit `http://localhost:3000` in your browser.

### Production Build
```bash
# Set environment variable
NODE_ENV=production

# Start server
node index.js
```

---

## 📋 User Workflows

### Content Creator Workflow
```
1. Create Blog Post
   ├─ Navigate to create page
   ├─ Fill blog details (title, author)
   ├─ Write content using editor
   ├─ Upload featured image
   └─ Publish to platform

2. View Published Blog
   ├─ Blog appears on homepage
   ├─ Listed in all blogs page
   ├─ Has dedicated detail page
   └─ Shows author & publish date

3. Share & Discover
   ├─ Other users can find blog
   ├─ Read full article
   ├─ See blog metadata
   └─ Return to listing
```

### Reader Workflow
```
1. Browse Blogs
   ├─ Visit homepage
   ├─ Browse featured posts
   ├─ Click on interesting blog

2. Read Article
   ├─ View blog details
   ├─ Read full content
   ├─ See author information
   ├─ Check publish date

3. Discover More
   ├─ Return to blog list
   ├─ Find other articles
   ├─ Explore different topics
```

---

## 🧠 Key Technical Concepts

### 1. **Express.js Routing**
- GET routes for rendering
- POST routes for form submission
- RESTful conventions
- Route organization

### 2. **Multer File Uploads**
- Single/multiple file handling
- File validation
- Size limits
- Storage configuration
- Error handling

### 3. **EJS Templating**
- Server-side rendering
- Dynamic data binding
- Template partials
- Conditional rendering
- Loop iteration

### 4. **File System Operations**
- Read/write operations
- JSON file handling
- Directory organization
- Error handling
- Synchronous/asynchronous ops

### 5. **Middleware**
- Body parsing
- File upload processing
- Static file serving
- Error handling
- Request logging

### 6. **Form Handling**
- HTML form submission
- Data validation
- Error messages
- Data parsing
- Secure handling

---

## 📈 Development Process

### Phase 1: Planning & Design
- Identified features
- Designed user workflows
- Planned data structure
- Created wireframes

### Phase 2: Backend Setup
- Initialized Node.js project
- Configured Express server
- Set up routing
- Integrated Multer

### Phase 3: Frontend Development
- Created HTML templates (EJS)
- Styled with CSS
- Implemented forms
- Made responsive

### Phase 4: Feature Implementation
- Blog creation endpoint
- Image upload handling
- Blog reading functionality
- Blog listing display

### Phase 5: Testing & Debugging
- Form validation testing
- File upload testing
- Route testing
- Error handling

### Phase 6: Deployment
- Configured for production
- Prepared for hosting
- Created documentation
- Ready for deployment

---

## 🎓 Key Learning Outcomes

This project teaches:

1. **Node.js Fundamentals**: Event-driven architecture, file operations
2. **Express.js**: Routing, middleware, request/response handling
3. **Server-Side Templating**: EJS, dynamic HTML generation
4. **File Upload Handling**: Multer configuration, file validation
5. **Backend Engineering**: Request processing, data management
6. **Full-Stack Development**: Frontend + backend coordination
7. **HTML/CSS/JS**: Frontend development & responsive design
8. **HTTP Concepts**: GET/POST requests, status codes
9. **Data Persistence**: JSON storage, file organization
10. **Error Handling**: Validation, user feedback

---

## 🚀 Future Enhancements

- [ ] **Database Integration** - MongoDB/PostgreSQL for scalability
- [ ] **Authentication** - User accounts & login system
- [ ] **Comments** - Reader comments on blog posts
- [ ] **Likes/Bookmarks** - User engagement features
- [ ] **Search** - Full-text search functionality
- [ ] **Categories** - Blog organization & filtering
- [ ] **Markdown Support** - Better content formatting
- [ ] **Admin Dashboard** - Blog management interface
- [ ] **Edit/Delete** - Content management capabilities
- [ ] **Email Notifications** - Notify readers of new posts
- [ ] **Social Sharing** - Share buttons for articles
- [ ] **Analytics** - Track blog views & engagement

---

## ⚠️ Production Considerations

For production deployment, consider:

- **Database**: Move from JSON to MongoDB/PostgreSQL
- **Authentication**: Implement user login & sessions
- **Security**: CSRF protection, input validation, sanitization
- **Performance**: Caching, image optimization, CDN
- **Scalability**: Load balancing, database indexing
- **Monitoring**: Error tracking, performance monitoring
- **Backup**: Regular database & content backups

---

## 💻 Code Example

```javascript
// Express route for creating blog
const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'public/uploads/' });

// Create blog endpoint
app.post('/create-blog', upload.single('image'), (req, res) => {
  const { title, author, content } = req.body;
  const imagePath = req.file ? req.file.path : null;
  
  // Validation
  if (!title || !author || !content) {
    return res.status(400).send('All fields required');
  }

  // Create blog object
  const blog = {
    id: Date.now(),
    title,
    author,
    content,
    image: imagePath,
    createdAt: new Date()
  };

  // Save to JSON file
  fs.writeFileSync(
    `blogs/blog-${blog.id}.json`,
    JSON.stringify(blog, null, 2)
  );

  res.redirect('/blogs');
});

// GET all blogs
app.get('/blogs', (req, res) => {
  const blogs = fs.readdirSync('blogs/')
    .map(file => JSON.parse(fs.readFileSync(`blogs/${file}`)))
    .sort((a, b) => b.createdAt - a.createdAt);

  res.render('all-blogs', { blogs });
});
```

---

## 📞 Contact & Support

**Author:** Manamoy Banerjee

**Connect:**
- **GitHub**: [@ManamoyB](https://github.com/ManamoyB)
- **LinkedIn**: [Manamoy's Profile](https://linkedin.com/in/your-profile)
- **Email**: [your.email@example.com]

**Questions or Issues:**
- Open a [GitHub Issue](https://github.com/ManamoyB/Bloggr/issues)
- Check documentation in `docs/` folder
- Review code examples in repository

---

## 📄 License

Portfolio and educational project.

---

## ⭐ If This Helped You

If you found this project useful:
- ⭐ **Star** this repository
- 🍴 **Fork** to build your own blogging platform
- 💬 **Share** with your network
- 📧 **Mention** in your portfolio/resume

---

## 🙌 Credits & Acknowledgments

- **Node.js & Express** - Excellent framework & runtime
- **Multer** - File upload middleware
- **EJS** - Templating engine
- **Quill.js** - Rich text editor
- **CSS Community** - Styling approaches

---

**Last Updated:** June 2026 | **Status:** Active Development | **Node.js 18+** | **Express.js**
