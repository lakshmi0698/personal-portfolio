# Lakshmi Lavanya N - Portfolio Website

A modern, responsive portfolio website with dark/light theme toggle functionality.

## 🌟 Features

### JavaScript Functionality (script.js)
- **Dark/Light Mode Toggle** - Smooth theme switching with persistent preference storage
- **Scroll-Reveal Animations** - Elements fade in as you scroll with staggered timing
- **Mobile Navigation** - Responsive hamburger menu with smooth transitions
- **Smooth Scroll** - Anchor links scroll smoothly with proper offset
- **Parallax Effect** - Subtle parallax on hero section
- **Active Nav Highlighting** - Navigation links highlight based on scroll position
- **Skill Bar Animations** - Progress bars animate when scrolled into view
- **Console Easter Egg** - Fun message for curious developers

### Design Elements
- Dark/Light theme with custom CSS variables
- Animated gradient background blobs
- Film grain texture overlay
- Frosted glass navigation bar
- Hover effects on all interactive elements
- Fully responsive (mobile, tablet, desktop)
- Smooth transitions between theme changes

### Layout Features
- **Flexbox & Grid** - Modern CSS layouts (21+ instances)
- **Mobile Responsive** - Breakpoints at 768px and 480px
- **Hover Effects** - 12+ hover interactions throughout
- **Clickable Contact Links** - Email, phone, GitHub, LinkedIn all functional

## 📁 Files

```
portfolio/
├── index.html      # Main HTML structure
├── style.css       # All styling & themes
├── script.js       # JavaScript functionality (no libraries!)
└── profile.png     # Profile photo
```

## 🚀 Deployment

### GitHub Pages Setup
1. Push all files to your repository:
   ```bash
   git add index.html style.css script.js
   git commit -m "Add dark/light mode toggle functionality"
   git push origin main
   ```

2. Your site will be live at: `https://lakshmi0698.github.io/personal-portfolio/`

## 🎨 Theme Toggle

The theme toggle button is located in the top-right corner of the navigation bar.

**Features:**
- Remembers your preference (stored in localStorage)
- Respects system preference on first visit
- Smooth color transitions
- Animated icon rotation
- Works on all pages

**Usage:**
- Click the sun/moon button to toggle
- Your preference is saved automatically
- Theme persists across page reloads

## 💻 JavaScript Fundamentals Demonstrated

### Core Concepts Used:
1. **DOM Manipulation**
   - `querySelector`, `querySelectorAll`
   - `classList` operations
   - Dynamic attribute changes

2. **Event Handling**
   - Click events
   - Scroll events with throttling
   - Keyboard events (Escape key)
   - Media query change listeners

3. **Local Storage**
   - Saving theme preference
   - Retrieving saved data
   - Fallback to defaults

4. **Intersection Observer API**
   - Scroll-triggered reveals
   - Lazy animation loading
   - Performance optimization

5. **Animation Control**
   - RequestAnimationFrame
   - Staggered animations
   - Smooth transitions

6. **Conditional Logic**
   - Theme detection
   - System preference checks
   - Mobile menu state

## 🎯 Evaluation Checklist

✅ **Separate JS file** - script.js (no inline scripts)
✅ **No libraries** - Pure vanilla JavaScript (370+ lines)
✅ **Dark/Light mode toggle** - Fully functional with persistence
✅ **Logic & Fundamentals** - Multiple JS concepts demonstrated
✅ **Form validation** - N/A (chose theme toggle instead)

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Features

- Hamburger menu navigation
- Touch-friendly buttons (42px+ touch targets)
- Responsive images and text
- Theme toggle works on mobile
- Prevents body scroll when menu is open

## ⚡ Performance

- No external dependencies (no jQuery, Bootstrap, etc.)
- Optimized scroll listeners with requestAnimationFrame
- Lazy-loaded animations (only trigger when in view)
- Efficient theme switching (CSS variables)
- Minimal JavaScript (~9KB uncompressed)

## 🎨 Color Schemes

### Dark Theme (Default)
- Background: `#0a0c10`
- Cards: `#161b26`
- Accent: `#7dd3fc` (Sky Blue)
- Text: `#f1f5f9`

### Light Theme
- Background: `#f8fafc`
- Cards: `#ffffff`
- Accent: `#0284c7` (Deep Sky)
- Text: `#0f172a`

## 📝 Code Quality

- Clean, commented code
- Proper variable naming
- DRY principles
- Separation of concerns
- Accessibility considerations (ARIA labels)

## 🔗 Live Demo

Visit: [https://lakshmi0698.github.io/personal-portfolio/](https://lakshmi0698.github.io/personal-portfolio/)

## 👤 Contact

- **Email:** lakshmilavanya292@gmail.com
- **Phone:** +91 77959 52603
- **GitHub:** [lakshmi0698](https://github.com/lakshmi0698)
- **LinkedIn:** [lakshmi-lavanya](https://www.linkedin.com/in/lakshmi-lavanya-597429259/)

---

**Date:** 04/02/2026  
**Task Completed:** JavaScript functionality with Dark/Light mode toggle  
**Requirements Met:** ✅ Separate JS file, ✅ No libraries, ✅ JS fundamentals demonstrated
