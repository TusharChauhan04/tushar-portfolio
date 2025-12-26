document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.innerHTML = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`; // Moon icon
        } else {
            themeIcon.innerHTML = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`; // Sun icon
        }
    }

    // Scroll Header
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('glass', 'border-b', 'shadow-sm');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('glass', 'border-b', 'shadow-sm');
            nav.classList.add('bg-transparent');
        }
    });

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'invisible');
            mobileMenu.classList.add('opacity-100', 'visible');
            mobileMenuBtn.innerHTML = `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`; // X icon
        } else {
            mobileMenu.classList.add('opacity-0', 'invisible');
            mobileMenu.classList.remove('opacity-100', 'visible');
            mobileMenuBtn.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`; // Menu icon
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                if (isMenuOpen) {
                    mobileMenuBtn.click();
                }
            }
        });
    });

    // Reveal Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Typing Effect
    const typingContainer = document.getElementById('typing-text');
    const textSegments = [
        { text: "Hi, I'm ", color: "text-foreground" },
        { text: "Tushar", color: "text-primary" },
        { text: " Chauhan", color: "text-primary" }
    ];

    let segmentIndex = 0;
    let charIndex = 0;
    let currentHtml = "";

    function type() {
        if (segmentIndex < textSegments.length) {
            const segment = textSegments[segmentIndex];
            const colorClass = segment.color === "text-primary" ? "text-[hsl(var(--primary))]" : "";

            if (charIndex < segment.text.length) {
                if (charIndex === 0) {
                    currentHtml += `<span class="${colorClass}">`;
                }
                currentHtml += segment.text[charIndex];
                typingContainer.innerHTML = currentHtml + `<span class="cursor"></span>`;
                charIndex++;
                setTimeout(type, 100);
            } else {
                currentHtml += `</span>`;
                segmentIndex++;
                charIndex = 0;
                setTimeout(type, 300);
            }
        }
    }

    type();
});
