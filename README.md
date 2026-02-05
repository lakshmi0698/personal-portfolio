# Personal Portfolio Website 🌟

A modern, responsive personal portfolio website showcasing skills, projects, and contact information. Built with HTML5, CSS3, and vanilla JavaScript.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Portfolio+Preview)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Navigation**: Sticky navigation bar with smooth scrolling
- **Skills Showcase**: Animated progress bars to display technical skills
- **Project Gallery**: Grid layout to showcase your best work
- **Contact Form**: Functional contact form for visitor inquiries
- **Social Media Links**: Easy access to your social profiles
- **Cross-browser Compatible**: Works on all modern browsers
- **Performance Optimized**: Fast loading times with minimal dependencies

## 🚀 Demo

Visit the live demo: [Your Portfolio URL](https://yourusername.github.io/personal-portfolio/)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icon library for social media and UI elements
- **Git**: Version control
- **GitHub Pages**: Hosting and deployment

## 📁 Project Structure

```
personal-portfolio/
│
├── index.html              # Main HTML file
├── README.md              # Project documentation
├── .gitignore             # Git ignore file
│
├── css/
│   └── style.css          # Main stylesheet
│
├── js/
│   └── script.js          # JavaScript functionality
│
├── images/
│   ├── project1.jpg       # Project screenshots
│   ├── project2.jpg
│   └── project3.jpg
│
└── assets/
    ├── icons/             # Custom icons
    └── documents/
        └── resume.pdf     # Downloadable resume
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd personal-portfolio
   ```

3. **Open in your browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

4. **Visit** `http://localhost:8000` in your browser

## 💡 Usage

### Running Locally

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Navigate through different sections using the navigation menu

### Viewing the Project

- **Home**: Introduction and call-to-action buttons
- **About**: Brief description about yourself
- **Skills**: Technical skills with progress indicators
- **Projects**: Portfolio of your work
- **Contact**: Get in touch form and contact information

## 🎨 Customization

### Personal Information

Edit `index.html` and update:
- Name in the hero section
- About me description
- Contact information
- Social media links

### Skills

Modify the skills section in `index.html`:
```html
<div class="skill-card">
    <i class="fab fa-your-icon"></i>
    <h3>Your Skill</h3>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
</div>
```

### Projects

Add your projects in the projects section:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Description of your project</p>
        <div class="project-links">
            <a href="github-link" class="btn btn-small">Code</a>
            <a href="demo-link" class="btn btn-small">Demo</a>
        </div>
    </div>
</div>
```

### Colors

Customize the color scheme in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* Add your custom colors */
}
```

### Resume

Replace `assets/documents/resume.pdf` with your own resume.

## 🌐 Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select source branch (usually `main`)
   - Click Save

3. **Access your site** at `https://yourusername.github.io/personal-portfolio/`

### Alternative Hosting Options

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **Surge**: Command-line deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Lakshmi**

- Email: lakshmi@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)
- Portfolio: [Your Website](https://yourwebsite.com)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from various portfolio designs
- The open-source community

---

**Note**: Remember to replace placeholder content with your actual information, projects, and links.

Made with ❤️ by Lakshmi
