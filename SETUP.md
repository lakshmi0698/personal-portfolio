# Setup Guide

This guide will help you set up and customize your personal portfolio website.

## Prerequisites

Before you begin, ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE (VS Code, Sublime Text, Atom, etc.)
- Git (for version control)
- Basic knowledge of HTML, CSS, and JavaScript

## Quick Start

### 1. Clone or Download the Repository

**Option A: Clone with Git**
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

**Option B: Download ZIP**
- Click the "Code" button on GitHub
- Select "Download ZIP"
- Extract the files to your desired location

### 2. Open the Project

Open the project folder in your preferred text editor.

### 3. Customize Your Information

#### Update Personal Details

Edit `index.html` and replace the following placeholders:

**Hero Section:**
```html
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="subtitle">Your Title</p>
<p class="description">Your tagline or brief description</p>
```

**About Section:**
```html
<div class="about-text">
    <p>Write your introduction here...</p>
    <p>Add more details about your background...</p>
</div>
```

**Contact Information:**
```html
<div class="info-item">
    <i class="fas fa-envelope"></i>
    <p>your.email@example.com</p>
</div>
<div class="info-item">
    <i class="fas fa-phone"></i>
    <p>+1 234 567 8900</p>
</div>
<div class="info-item">
    <i class="fas fa-map-marker-alt"></i>
    <p>Your City, Country</p>
</div>
```

#### Add Your Projects

Replace the placeholder projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Brief description of what the project does</p>
        <div class="project-links">
            <a href="https://github.com/yourname/project" class="btn btn-small">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="https://your-demo-url.com" class="btn btn-small">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

#### Update Your Skills

Modify the skills section with your technologies:

```html
<div class="skill-card">
    <i class="fab fa-your-technology"></i>
    <h3>Technology Name</h3>
    <div class="progress-bar">
        <div class="progress" style="width: 90%"></div>
    </div>
</div>
```

**Finding Icons:**
- Visit [Font Awesome](https://fontawesome.com/icons)
- Search for your technology
- Copy the icon class (e.g., `fab fa-react`)

#### Add Social Media Links

Update the social media links in the contact section:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-icon" aria-label="GitHub Profile">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/yourusername" class="social-icon" aria-label="LinkedIn Profile">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://twitter.com/yourusername" class="social-icon" aria-label="Twitter Profile">
        <i class="fab fa-twitter"></i>
    </a>
</div>
```

### 4. Add Your Images

#### Profile/Hero Image (Optional)
If you want to add a profile image:
1. Place your image in the `images/` folder
2. Add it to the hero or about section

#### Project Screenshots
1. Take screenshots of your projects
2. Optimize them (recommended size: 800x600px)
3. Save them in the `images/` folder as `project1.jpg`, `project2.jpg`, etc.

#### Resume
1. Save your resume as PDF
2. Place it in `assets/documents/resume.pdf`

### 5. Customize Colors

Edit `css/style.css` to change the color scheme:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent color */
    --text-color: #333;             /* Main text color */
    --text-light: #666;             /* Light text color */
    --bg-color: #ffffff;            /* Background color */
    --bg-light: #f8f9fa;            /* Light background */
}
```

### 6. Test Locally

#### Method 1: Direct Browser Opening
- Double-click `index.html` to open in your default browser

#### Method 2: Local Server (Recommended)
**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

Visit `http://localhost:8000` (or the port shown) in your browser.

### 7. Deploy Your Portfolio

#### GitHub Pages (Free)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Click on "Pages" in the sidebar
   - Under "Source", select `main` branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/portfolio/`

#### Netlify (Free)

1. Create a [Netlify](https://www.netlify.com/) account
2. Drag and drop your project folder
3. Your site is live!

#### Vercel (Free)

1. Create a [Vercel](https://vercel.com/) account
2. Connect your GitHub repository
3. Deploy with one click

## Customization Tips

### Change Fonts
Add Google Fonts to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Then update in `css/style.css`:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Add Animations
The portfolio already includes smooth animations. To add more:
- Check `js/script.js` for existing animations
- Use CSS transitions and transforms
- Consider libraries like AOS (Animate On Scroll)

### Form Integration
To make the contact form functional:

1. **Using Formspree:**
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. **Using EmailJS:**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Follow their integration guide
   - Update the form handler in `js/script.js`

## Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify file extensions match (case-sensitive on some systems)

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check console for errors (F12)
- Verify CSS file path in `index.html`

### JavaScript Not Working
- Open browser console (F12)
- Look for error messages
- Ensure `script.js` path is correct

## Support

If you encounter any issues:
1. Check the [README.md](README.md) file
2. Review the [CONTRIBUTING.md](CONTRIBUTING.md) guide
3. Create an issue on GitHub
4. Contact via email

## Next Steps

- Add a blog section
- Implement dark mode toggle
- Add more interactive animations
- Integrate a backend for the contact form
- Add testimonials section
- Include certifications or achievements

Happy coding! 🚀
