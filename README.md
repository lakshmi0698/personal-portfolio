# 🌟 Lakshmi Lavanya N - Portfolio Website

A modern, responsive portfolio website featuring **Dark/Light Mode Toggle** with smooth animations and interactive elements.

## 📅 Task Details
- **Date:** 04/02/2026
- **Task:** Add JavaScript functionality (Dark/Light mode toggle)
- **Requirements:** ✅ Separate JS file | ✅ No libraries | ✅ Strong JS fundamentals

## 🎯 Main Feature: Dark/Light Mode Toggle

### How It Works:
1. **Click the sun/moon button** in the top-right corner of navigation
2. Theme instantly switches with smooth color transitions
3. **Your preference is saved** automatically in localStorage
4. **Respects system preference** on first visit
5. Works seamlessly on all devices (desktop, tablet, mobile)

### Technical Implementation:
```javascript
// Key Features:
- localStorage for persistent theme preference
- CSS custom properties for instant theme switching
- Smooth transition animations (0.5s ease)
- System preference detection
- Animated icon rotation
```

## 🚀 Files Included

```
portfolio/
├── index.html      # Updated HTML with theme toggle button
├── style.css       # Enhanced CSS with light theme variables
├── script.js       # Vanilla JavaScript (343 lines, no libraries!)
└── profile.png     # Your profile photo
```

## 💻 JavaScript Features Implemented

### 1. **Dark/Light Mode Toggle** ⭐ (Main Feature)
```javascript
Features:
✅ localStorage persistence
✅ System preference detection
✅ Smooth color transitions
✅ Animated icon switching
✅ Auto-save user preference
```

### 2. **Scroll-Reveal Animations**
- Elements fade in as you scroll
- Staggered timing for visual appeal
- Intersection Observer API for performance

### 3. **Mobile Navigation**
- Responsive hamburger menu
- Smooth open/close animations
- Click-outside-to-close functionality
- Keyboard support (Escape key)
- Prevents body scroll when open

### 4. **Smooth Scroll**
- Anchor links scroll smoothly
- Proper offset for fixed header
- Natural easing animation

### 5. **Parallax Effect**
- Subtle parallax on hero section
- RequestAnimationFrame for 60fps
- Optimized performance

### 6. **Active Nav Highlighting**
- Navigation links highlight based on scroll position
- Smooth transitions
- Automatic section detection

### 7. **Skill Bar Animations**
- Progress bars animate when scrolled into view
- Delayed start for visual impact
- One-time animation

### 8. **Easter Egg**
- Fun console message for developers
- Your contact info in the console

## 🎨 Theme Colors

### 🌙 Dark Theme (Default)
```css
Background:  #0a0c10 (Deep Dark)
Cards:       #161b26 (Dark Blue-Gray)
Accent:      #7dd3fc (Sky Blue)
Text:        #f1f5f9 (Light Gray)
```

### ☀️ Light Theme
```css
Background:  #f8fafc (Soft White)
Cards:       #ffffff (Pure White)
Accent:      #0284c7 (Deep Sky Blue)
Text:        #0f172a (Dark Navy)
```

## 📱 Responsive Design

### Breakpoints:
- **Desktop:** 769px and above
- **Tablet:** 768px - 481px
- **Mobile:** 480px and below

### Mobile Features:
- Theme toggle remains visible on mobile
- Hamburger menu for navigation
- Touch-friendly buttons (42px minimum)
- Optimized font sizes
- Single-column layouts

## 🧠 JavaScript Fundamentals Demonstrated

### Core Concepts:
1. **DOM Manipulation**
   - `querySelector` / `querySelectorAll`
   - `classList` operations
   - Dynamic attribute changes
   - Style manipulation

2. **Event Handling**
   - Click events
   - Scroll events (with throttling)
   - Keyboard events (Escape)
   - Media query listeners

3. **Local Storage API**
   - `localStorage.setItem()`
   - `localStorage.getItem()`
   - Persistent data storage
   - Fallback handling

4. **Intersection Observer API**
   - Scroll-triggered animations
   - Performance optimization
   - Lazy loading technique

5. **Animation Control**
   - `requestAnimationFrame`
   - CSS transitions via JS
   - Staggered animations
   - Transform and opacity

6. **Conditional Logic**
   - Theme detection
   - System preference checks
   - State management
   - Event delegation

7. **Functions & Scope**
   - IIFE pattern
   - Pure functions
   - Closures
   - Event callbacks

## ⚡ Performance Optimizations

- **No external libraries** (pure vanilla JS)
- **RequestAnimationFrame** for smooth animations
- **Passive event listeners** for scroll performance
- **Intersection Observer** for lazy animations
- **CSS variables** for instant theme switching
- **Throttled scroll events** to prevent lag
- **Minimal JavaScript** (~9KB uncompressed)

## 🔧 Installation & Deployment

### Quick Start:
```bash
# 1. Replace your existing files with the new ones
cp index.html style.css script.js /your-portfolio-folder/

# 2. Commit to GitHub
git add index.html style.css script.js
git commit -m "Add dark/light mode toggle with vanilla JS"
git push origin main

# 3. Your site will be live at:
# https://lakshmi0698.github.io/personal-portfolio/
```

### File Structure:
```
your-repository/
├── index.html       ← Upload this
├── style.css        ← Upload this
├── script.js        ← Upload this (NEW!)
└── profile.png      ← Keep your existing photo
```

## 🎯 Task Evaluation Checklist

| Requirement | Status | Details |
|------------|--------|---------|
| **Separate JS file** | ✅ | script.js (343 lines) |
| **No libraries** | ✅ | Pure vanilla JavaScript |
| **Dark/Light mode** | ✅ | Fully functional with persistence |
| **Logic demonstrated** | ✅ | 8+ core JS concepts |
| **JS fundamentals** | ✅ | DOM, Events, Storage, APIs |

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required Browser Features:
- CSS Custom Properties (variables)
- LocalStorage API
- Intersection Observer API
- RequestAnimationFrame
- ES6+ JavaScript

## 📖 Usage Guide

### For Users:
1. **Switch themes:** Click sun/moon button (top-right)
2. **Navigate:** Click menu items or scroll naturally
3. **Mobile:** Tap hamburger icon for menu
4. **Your preference is saved** and persists across visits

### For Developers:
```javascript
// Access current theme
const theme = document.documentElement.getAttribute('data-theme');

// Manually change theme
document.documentElement.setAttribute('data-theme', 'light');

// Check saved preference
const saved = localStorage.getItem('portfolio-theme');
```

## 🐛 Debugging

Open browser console (F12) to see:
- Theme initialization logs
- Current theme state
- Easter egg message
- Any errors (if present)

## 📊 Code Statistics

```
JavaScript:  343 lines
CSS:         902 lines (with light theme)
HTML:        323 lines
Total:       ~1,568 lines of code
```

## 🎓 Learning Resources

This project demonstrates:
- Modern JavaScript (ES6+)
- Web APIs (Storage, Observer, Animation)
- CSS Custom Properties
- Responsive Design
- Performance Optimization
- Accessibility Basics (ARIA labels)

## 📝 Code Quality

- ✅ Clean, commented code
- ✅ Proper variable naming
- ✅ DRY principles
- ✅ Separation of concerns
- ✅ Accessibility considerations
- ✅ Performance best practices

## 🔗 Live Demo

**Visit:** [https://lakshmi0698.github.io/personal-portfolio/](https://lakshmi0698.github.io/personal-portfolio/)

## 👤 Contact

- **Email:** [lakshmilavanya292@gmail.com](mailto:lakshmilavanya292@gmail.com)
- **Phone:** [+91 77959 52603](tel:+917795952603)
- **GitHub:** [@lakshmi0698](https://github.com/lakshmi0698)
- **LinkedIn:** [lakshmi-lavanya](https://www.linkedin.com/in/lakshmi-lavanya-597429259/)

---

## 🎉 Task Completed Successfully!

**Date:** 04/02/2026  
**Feature:** Dark/Light Mode Toggle with Vanilla JavaScript  
**Status:** ✅ Ready for submission  
**Live Link:** https://lakshmi0698.github.io/personal-portfolio/

### What's New:
1. ⭐ **Theme toggle button** (sun/moon icon)
2. 💾 **Persistent theme preference** (localStorage)
3. 🎨 **Complete light theme** colors
4. ⚡ **Smooth transitions** between themes
5. 📱 **Mobile-optimized** theme toggle
6. 🧠 **343 lines of vanilla JS** (no libraries!)
7. 🎯 **Strong JavaScript fundamentals** demonstrated

Ready to deploy! 🚀
