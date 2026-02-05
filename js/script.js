// ═══════════════════════════════════════════════════════════
// LAKSHMI LAVANYA - PORTFOLIO JAVASCRIPT
// Features: Dark/Light Mode Toggle, Smooth Scroll, Mobile Nav
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    // ─────────────────────────────────────────────────────────
    // THEME TOGGLE (Dark / Light Mode)
    // ─────────────────────────────────────────────────────────
    
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    
    // Update toggle button icon based on current theme
    function updateThemeIcon() {
        const theme = html.getAttribute('data-theme');
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        }
    }
    
    updateThemeIcon();
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon();
        });
    }

    // ─────────────────────────────────────────────────────────
    // INTERSECTION OBSERVER - Scroll Reveal Animation
    // ─────────────────────────────────────────────────────────
    
    const revealElements = document.querySelectorAll(
        '.section, .project-card, .edu-card, .ach-card, .skill-group, .contact-card, .bar-row'
    );
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(function(element) {
        observer.observe(element);
    });

    // ─────────────────────────────────────────────────────────
    // MOBILE NAVIGATION TOGGLE
    // ─────────────────────────────────────────────────────────
    
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = navLinks.querySelectorAll('a');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-open');
            
            // Update aria-expanded attribute
            const isOpen = navLinks.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }
    
    // Close mobile menu when a link is clicked
    navLinkItems.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('nav-open');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.topnav');
        if (!isClickInsideNav && navLinks.classList.contains('nav-open')) {
            navLinks.classList.remove('nav-open');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // ─────────────────────────────────────────────────────────
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ─────────────────────────────────────────────────────────
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty or just '#' hrefs
            if (!href || href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.topnav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─────────────────────────────────────────────────────────
    // PARALLAX EFFECT ON HERO SECTION
    // ─────────────────────────────────────────────────────────
    
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            // Only apply parallax while hero is visible
            if (scrolled < heroHeight) {
                const parallaxAmount = scrolled * 0.5;
                heroSection.style.transform = `translateY(${parallaxAmount}px)`;
                heroSection.style.opacity = 1 - (scrolled / heroHeight);
            }
        });
    }

    // ─────────────────────────────────────────────────────────
    // ACTIVE NAVIGATION LINK ON SCROLL
    // ─────────────────────────────────────────────────────────
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinkItems.forEach(function(link) {
                    link.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call once on load

    // ─────────────────────────────────────────────────────────
    // SKILL BAR ANIMATIONS
    // ─────────────────────────────────────────────────────────
    
    const skillBars = document.querySelectorAll('.bar-row');
    
    const barObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const barFill = entry.target.querySelector('.bar-fill');
                if (barFill) {
                    // Trigger the animation by adding revealed class
                    setTimeout(function() {
                        entry.target.classList.add('revealed');
                    }, 100);
                }
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(function(bar) {
        barObserver.observe(bar);
    });

    // ─────────────────────────────────────────────────────────
    // TYPING EFFECT FOR HERO SUBTITLE (Optional Enhancement)
    // ─────────────────────────────────────────────────────────
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        const typingSpeed = 50; // milliseconds per character
        const startDelay = 1000; // delay before starting typing
        
        // Clear the text initially
        heroSubtitle.textContent = '';
        heroSubtitle.style.opacity = '1';
        
        setTimeout(function() {
            let charIndex = 0;
            
            function typeNextChar() {
                if (charIndex < originalText.length) {
                    heroSubtitle.textContent += originalText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeNextChar, typingSpeed);
                }
            }
            
            typeNextChar();
        }, startDelay);
    }

    // ─────────────────────────────────────────────────────────
    // CURSOR POSITION TRACKING FOR PROJECT CARDS
    // ─────────────────────────────────────────────────────────
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ─────────────────────────────────────────────────────────
    // SCROLL TO TOP BUTTON
    // ─────────────────────────────────────────────────────────
    
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ─────────────────────────────────────────────────────────
    // CONSOLE MESSAGE (Easter Egg)
    // ─────────────────────────────────────────────────────────
    
    console.log('%c👋 Hello, Developer!', 'color: #7dd3fc; font-size: 24px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repository!', 'color: #8b95a7; font-size: 14px;');
    console.log('%chttps://github.com/lakshmi0698', 'color: #7dd3fc; font-size: 14px;');

    // ─────────────────────────────────────────────────────────
    // INITIALIZATION COMPLETE
    // ─────────────────────────────────────────────────────────
    
    console.log('%c✓ Portfolio initialized successfully', 'color: #34d399; font-size: 12px;');

})();
