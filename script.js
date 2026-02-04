/* ═══════════════════════════════════════════
   LAKSHMI LAVANYA – PORTFOLIO JAVASCRIPT
   Features: Dark/Light Mode Toggle, Scroll Effects,
   Mobile Navigation, Smooth Scrolling
   ═══════════════════════════════════════════ */

(function() {
    'use strict';

    /* ═══════════════════════════════════════════
       THEME TOGGLE (Dark / Light Mode)
       ═══════════════════════════════════════════ */
    
    // Theme configuration object
    const themes = {
        dark: {
            '--bg-primary': '#0a0c10',
            '--bg-secondary': '#111420',
            '--bg-card': '#161b26',
            '--bg-card-hover': '#1c2333',
            '--accent': '#7dd3fc',
            '--accent-dim': '#38bdf8',
            '--accent-glow': 'rgba(125,211,252,.25)',
            '--text-primary': '#f1f5f9',
            '--text-muted': '#8b95a7',
            '--text-subtle': '#525e70',
            '--border': 'rgba(255,255,255,.06)'
        },
        light: {
            '--bg-primary': '#ffffff',
            '--bg-secondary': '#f8fafc',
            '--bg-card': '#f1f5f9',
            '--bg-card-hover': '#e2e8f0',
            '--accent': '#0284c7',
            '--accent-dim': '#0ea5e9',
            '--accent-glow': 'rgba(2,132,199,.15)',
            '--text-primary': '#0f172a',
            '--text-muted': '#475569',
            '--text-subtle': '#94a3b8',
            '--border': 'rgba(0,0,0,.08)'
        }
    };

    // Get stored theme or default to 'dark'
    function getStoredTheme() {
        return localStorage.getItem('portfolio-theme') || 'dark';
    }

    // Save theme to localStorage
    function saveTheme(themeName) {
        localStorage.setItem('portfolio-theme', themeName);
    }

    // Apply theme to document
    function applyTheme(themeName) {
        const root = document.documentElement;
        const themeColors = themes[themeName];
        
        // Apply each CSS variable
        for (const [property, value] of Object.entries(themeColors)) {
            root.style.setProperty(property, value);
        }
        
        // Update body data attribute for additional CSS targeting if needed
        document.body.setAttribute('data-theme', themeName);
    }

    // Toggle between themes
    function toggleTheme() {
        const currentTheme = getStoredTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);
        saveTheme(newTheme);
        updateThemeButton(newTheme);
        
        // Add smooth transition animation
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // Update theme toggle button icon and aria-label
    function updateThemeButton(themeName) {
        const themeButton = document.getElementById('theme-toggle');
        if (themeButton) {
            const icon = themeName === 'dark' ? '☀️' : '🌙';
            const label = themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
            
            themeButton.textContent = icon;
            themeButton.setAttribute('aria-label', label);
        }
    }

    // Create and insert theme toggle button
    function createThemeToggle() {
        const nav = document.querySelector('.topnav');
        const navLinks = document.querySelector('.nav-links');
        
        if (nav && navLinks) {
            const themeButton = document.createElement('button');
            themeButton.id = 'theme-toggle';
            themeButton.className = 'theme-toggle';
            themeButton.setAttribute('aria-label', 'Toggle theme');
            
            // Insert before mobile toggle button
            const mobileToggle = document.querySelector('.nav-toggle');
            nav.insertBefore(themeButton, mobileToggle);
            
            // Add event listener
            themeButton.addEventListener('click', toggleTheme);
            
            // Set initial icon
            updateThemeButton(getStoredTheme());
        }
    }

    /* ═══════════════════════════════════════════
       INTERSECTION OBSERVER - SCROLL REVEAL
       ═══════════════════════════════════════════ */
    
    function initScrollReveal() {
        const revealElements = document.querySelectorAll(
            '.section, .project-card, .edu-card, .ach-card, .skill-group, .contact-card, .bar-row'
        );
        
        // Observer configuration
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        // Callback function
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Special handling for skill bars
                    if (entry.target.classList.contains('bar-row')) {
                        const barFill = entry.target.querySelector('.bar-fill');
                        if (barFill) {
                            // Trigger width animation by reading the inline width
                            const targetWidth = barFill.style.width;
                            barFill.style.width = '0%';
                            
                            // Use setTimeout to ensure the transition triggers
                            setTimeout(() => {
                                barFill.style.width = targetWidth;
                            }, 100);
                        }
                    }
                    
                    // Unobserve after reveal for performance
                    observer.unobserve(entry.target);
                }
            });
        };
        
        // Create and attach observer
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        revealElements.forEach(element => observer.observe(element));
    }

    /* ═══════════════════════════════════════════
       MOBILE NAVIGATION TOGGLE
       ═══════════════════════════════════════════ */
    
    function initMobileNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (navToggle && navLinks) {
            // Toggle navigation menu
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('nav-open');
                
                // Update aria-expanded attribute
                const isOpen = navLinks.classList.contains('nav-open');
                navToggle.setAttribute('aria-expanded', isOpen);
                
                // Change icon
                navToggle.textContent = isOpen ? '✕' : '☰';
            });
            
            // Close menu when clicking on a link
            const navLinkItems = navLinks.querySelectorAll('a');
            navLinkItems.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.textContent = '☰';
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (event) => {
                const isClickInsideNav = navToggle.contains(event.target) || navLinks.contains(event.target);
                
                if (!isClickInsideNav && navLinks.classList.contains('nav-open')) {
                    navLinks.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.textContent = '☰';
                }
            });
        }
    }

    /* ═══════════════════════════════════════════
       SMOOTH SCROLLING FOR NAVIGATION LINKS
       ═══════════════════════════════════════════ */
    
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                const href = this.getAttribute('href');
                
                // Ignore empty hash
                if (href === '#') return;
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    event.preventDefault();
                    
                    // Calculate offset for fixed navigation
                    const navHeight = document.querySelector('.topnav')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /* ═══════════════════════════════════════════
       PARALLAX EFFECT ON HERO SECTION
       ═══════════════════════════════════════════ */
    
    function initParallax() {
        const heroSection = document.querySelector('.hero');
        
        if (heroSection) {
            let ticking = false;
            
            function updateParallax() {
                const scrolled = window.pageYOffset;
                const heroContent = heroSection.querySelector('.hero-content');
                const heroVisual = heroSection.querySelector('.hero-visual');
                
                // Subtle parallax movement
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
                }
                
                if (heroVisual) {
                    heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
                }
                
                ticking = false;
            }
            
            function requestParallaxUpdate() {
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }
            
            window.addEventListener('scroll', requestParallaxUpdate);
        }
    }

    /* ═══════════════════════════════════════════
       ACTIVE NAVIGATION LINK HIGHLIGHTING
       ═══════════════════════════════════════════ */
    
    function initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        function updateActiveLink() {
            const scrollPosition = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        let scrollTicking = false;
        
        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                window.requestAnimationFrame(() => {
                    updateActiveLink();
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        });
    }

    /* ═══════════════════════════════════════════
       KEYBOARD ACCESSIBILITY
       ═══════════════════════════════════════════ */
    
    function initKeyboardAccessibility() {
        // Enable keyboard navigation for interactive elements
        const interactiveElements = document.querySelectorAll('.project-card, .ach-card, .contact-card, .chip');
        
        interactiveElements.forEach(element => {
            element.setAttribute('tabindex', '0');
            
            element.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    element.click();
                }
            });
        });
    }

    /* ═══════════════════════════════════════════
       PERFORMANCE OPTIMIZATION - DEBOUNCE
       ═══════════════════════════════════════════ */
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /* ═══════════════════════════════════════════
       NAVIGATION BACKGROUND ON SCROLL
       ═══════════════════════════════════════════ */
    
    function initNavScroll() {
        const nav = document.querySelector('.topnav');
        
        if (nav) {
            const handleScroll = debounce(() => {
                if (window.pageYOffset > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }, 10);
            
            window.addEventListener('scroll', handleScroll);
        }
    }

    /* ═══════════════════════════════════════════
       INITIALIZATION
       ═══════════════════════════════════════════ */
    
    function init() {
        // Apply stored theme immediately on load
        applyTheme(getStoredTheme());
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
    }
    
    function initializeApp() {
        // Initialize all features
        createThemeToggle();
        initScrollReveal();
        initMobileNav();
        initSmoothScroll();
        initParallax();
        initActiveNavigation();
        initKeyboardAccessibility();
        initNavScroll();
        
        console.log('Portfolio initialized successfully! 🚀');
    }
    
    // Start the application
    init();

})();
