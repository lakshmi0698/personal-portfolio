/**
 * ═══════════════════════════════════════════════════════════
 * LAKSHMI LAVANYA N - PORTFOLIO JAVASCRIPT
 * Features: Dark/Light Mode Toggle, Scroll Reveal, Navigation
 * No external libraries - Pure Vanilla JS
 * ═══════════════════════════════════════════════════════════
 */

(function() {
    'use strict';

    // ═══════════════════════════════════════════════════════════
    // DARK / LIGHT MODE TOGGLE
    // ═══════════════════════════════════════════════════════════

    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const STORAGE_KEY = 'portfolio-theme';

    /**
     * Initialize theme from localStorage or system preference
     */
    function initTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        
        if (savedTheme) {
            // Use saved preference
            html.setAttribute('data-theme', savedTheme);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const defaultTheme = prefersDark ? 'dark' : 'light';
            html.setAttribute('data-theme', defaultTheme);
            localStorage.setItem(STORAGE_KEY, defaultTheme);
        }
        
        updateThemeIcon();
    }

    /**
     * Toggle between dark and light themes
     */
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class for smooth color changes
        html.classList.add('theme-transitioning');
        
        // Update theme
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
        
        // Update icon
        updateThemeIcon();
        
        // Remove transition class after animation
        setTimeout(() => {
            html.classList.remove('theme-transitioning');
        }, 500);
    }

    /**
     * Update theme toggle icon based on current theme
     */
    function updateThemeIcon() {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const sunIcon = themeToggle.querySelector('.sun');
        const moonIcon = themeToggle.querySelector('.moon');
        
        if (currentTheme === 'dark') {
            sunIcon.style.opacity = '0';
            sunIcon.style.transform = 'rotate(180deg) scale(0.5)';
            moonIcon.style.opacity = '1';
            moonIcon.style.transform = 'rotate(0deg) scale(1)';
        } else {
            sunIcon.style.opacity = '1';
            sunIcon.style.transform = 'rotate(0deg) scale(1)';
            moonIcon.style.opacity = '0';
            moonIcon.style.transform = 'rotate(-180deg) scale(0.5)';
        }
    }

    // Initialize theme on load
    initTheme();

    // Add click event listener to toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference recently
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (!savedTheme) {
            const newTheme = e.matches ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            updateThemeIcon();
        }
    });

    // ═══════════════════════════════════════════════════════════
    // SCROLL-TRIGGERED REVEAL ANIMATIONS
    // ═══════════════════════════════════════════════════════════

    const revealElements = document.querySelectorAll(
        '.section, .project-card, .edu-card, .ach-card, .skill-group, .contact-card, .bar-row'
    );

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple elements
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 50); // 50ms stagger between elements
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ═══════════════════════════════════════════════════════════
    // MOBILE NAVIGATION TOGGLE
    // ═══════════════════════════════════════════════════════════

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = navLinks.querySelectorAll('a');

    /**
     * Toggle mobile navigation menu
     */
    function toggleNav() {
        navLinks.classList.toggle('nav-open');
        
        // Update aria-expanded for accessibility
        const isOpen = navLinks.classList.contains('nav-open');
        navToggle.setAttribute('aria-expanded', isOpen);
        
        // Prevent body scroll when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    /**
     * Close mobile nav menu
     */
    function closeNav() {
        navLinks.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // Toggle navigation on button click
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }

    // Close nav when clicking on a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideNav = navLinks.contains(e.target) || navToggle.contains(e.target);
        if (!isClickInsideNav && navLinks.classList.contains('nav-open')) {
            closeNav();
        }
    });

    // Close nav on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('nav-open')) {
            closeNav();
        }
    });

    // ═══════════════════════════════════════════════════════════
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ═══════════════════════════════════════════════════════════

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.topnav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ═══════════════════════════════════════════════════════════
    // PARALLAX EFFECT ON HERO SECTION
    // ═══════════════════════════════════════════════════════════

    const hero = document.querySelector('.hero');
    let ticking = false;

    /**
     * Apply parallax effect to hero section
     */
    function updateParallax() {
        const scrollY = window.pageYOffset;
        
        if (hero && scrollY < window.innerHeight) {
            hero.style.transform = `translateY(${scrollY * 0.3}px)`;
            hero.style.opacity = 1 - (scrollY / window.innerHeight) * 0.5;
        }
        
        ticking = false;
    }

    /**
     * Request animation frame for smooth parallax
     */
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Add scroll listener with requestAnimationFrame for performance
    window.addEventListener('scroll', requestTick, { passive: true });

    // ═══════════════════════════════════════════════════════════
    // ACTIVE NAV LINK HIGHLIGHTING
    // ═══════════════════════════════════════════════════════════

    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));

    /**
     * Highlight active nav link based on scroll position
     */
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Remove active class when at top of page
        if (scrollY < 100) {
            navLinksArray.forEach(link => link.classList.remove('active'));
        }
    }

    // Throttle scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(highlightActiveSection);
    }, { passive: true });

    // ═══════════════════════════════════════════════════════════
    // SKILL BARS ANIMATION ON REVEAL
    // ═══════════════════════════════════════════════════════════

    const skillBars = document.querySelectorAll('.bar-fill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetWidth = fill.style.width;
                
                // Animate from 0 to target width
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = targetWidth;
                }, 100);
                
                skillObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ═══════════════════════════════════════════════════════════
    // PAGE LOAD ANIMATION
    // ═══════════════════════════════════════════════════════════

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // ═══════════════════════════════════════════════════════════
    // CONSOLE EASTER EGG
    // ═══════════════════════════════════════════════════════════

    console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #7dd3fc;');
    console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #8b95a7;');
    console.log('%c📧 lakshmilavanya292@gmail.com', 'font-size: 12px; color: #7dd3fc;');
    console.log('%c🔗 https://github.com/lakshmi0698', 'font-size: 12px; color: #7dd3fc;');

})();
