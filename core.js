// Mobile Menu Functionality - Add this at the top of core.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Create hamburger menu button
    function createMobileMenuButton() {
        const nav = document.querySelector('.main-nav');
        const navUl = nav.querySelector('ul');
        
        // Create toggle button if it doesn't exist
        let toggleButton = nav.querySelector('.nav-toggle');
        if (!toggleButton) {
            toggleButton = document.createElement('button');
            toggleButton.className = 'nav-toggle';
            toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
            nav.insertBefore(toggleButton, navUl);
        }

        return { toggleButton, navUl };
    }

    // Initialize mobile menu
    const { toggleButton, navUl } = createMobileMenuButton();
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isActive = navUl.classList.contains('active');
        
        if (isActive) {
            navUl.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        } else {
            navUl.classList.add('active');
            toggleButton.setAttribute('aria-expanded', 'true');
            toggleButton.innerHTML = '<i class="fas fa-times"></i>';
            if (window.innerWidth <= 768) {
                document.body.style.overflow = 'hidden';
            }
        }
    }

    // Event listeners for mobile menu
    toggleButton.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on nav links (mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navUl.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.main-nav');
        const isClickInsideNav = nav.contains(event.target);
        
        if (!isClickInsideNav && navUl.classList.contains('active') && window.innerWidth <= 768) {
            toggleMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navUl.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });

    // Handle escape key to close menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navUl.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    // YOUR EXISTING CODE CONTINUES BELOW...
    // (Keep all your existing JavaScript code after this point)
    
});
// Enhanced Mobile Menu JavaScript for Responsive CV

document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu button
    function createMobileMenuButton() {
        const nav = document.querySelector('.main-nav');
        const navUl = nav.querySelector('ul');
        
        // Create toggle button if it doesn't exist
        let toggleButton = nav.querySelector('.nav-toggle');
        if (!toggleButton) {
            toggleButton = document.createElement('button');
            toggleButton.className = 'nav-toggle';
            toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
            nav.insertBefore(toggleButton, navUl);
        }

        return { toggleButton, navUl };
    }

    // Initialize mobile menu
    const { toggleButton, navUl } = createMobileMenuButton();
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isActive = navUl.classList.contains('active');
        
        if (isActive) {
            navUl.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = ''; // Re-enable scrolling
        } else {
            navUl.classList.add('active');
            toggleButton.setAttribute('aria-expanded', 'true');
            toggleButton.innerHTML = '<i class="fas fa-times"></i>';
            // Prevent body scrolling when menu is open on mobile
            if (window.innerWidth <= 768) {
                document.body.style.overflow = 'hidden';
            }
        }
    }

    // Event listeners
    toggleButton.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on nav links (mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navUl.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.main-nav');
        const isClickInsideNav = nav.contains(event.target);
        
        if (!isClickInsideNav && navUl.classList.contains('active') && window.innerWidth <= 768) {
            toggleMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state on desktop
            navUl.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });

    // Handle escape key to close menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navUl.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    // Existing code for typed.js and other functionality
    // (Keep your existing typed.js code here)
    var typed = new Typed('#typed-title', {
        strings: [
            "CRM & E-mail Marketing Specialist",
            "Digital Marketing Strategist",
            "E-commerce"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });

    // Intersection Observer for scroll-reveal animations
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Active class for nav links based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionRect = section.getBoundingClientRect();
            const offset = window.innerWidth <= 768 ? 60 : 70; // Adjust offset for mobile
            if (sectionRect.top <= offset && sectionRect.bottom > offset) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Skill bar animation and level display
    const skillItems = document.querySelectorAll('.skill-item-list li');
    skillItems.forEach(item => {
        const level = parseInt(item.dataset.level);
        const fillElement = item.querySelector('.skill-level-fill');
        if (fillElement) {
            const widthPercentage = (level / 5) * 100;
            fillElement.style.width = widthPercentage + '%';
        }
    });

    // Certification card logo loading
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach(card => {
        const logoUrl = card.dataset.logoUrl;
        const logoOverlay = card.querySelector('.cert-logo-overlay');
        if (logoOverlay && logoUrl) {
            logoOverlay.style.backgroundImage = `url('${logoUrl}')`;
        }
    });

    // Education card logo loading
    const eduCards = document.querySelectorAll('.education-card');
    eduCards.forEach(card => {
        const logoUrl = card.dataset.logoUrl;
        const logoOverlay = card.querySelector('.edu-logo-overlay');
        if (logoOverlay && logoUrl) {
            logoOverlay.style.backgroundImage = `url('${logoUrl}')`;
        }
    });

    // Smooth scrolling for anchor links (enhanced for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = window.innerWidth <= 768 ? 60 : 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
