document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animations
    const heroTl = gsap.timeline();
    
    heroTl.fromTo('header', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
          .fromTo('.hero-content h1 span', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }, '-=0.5')
          .fromTo('.hero-content p', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
          .fromTo('.hero-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
          .fromTo('.hero', { backgroundPosition: '50% 30%' }, { backgroundPosition: '50% 50%', duration: 2, ease: 'power2.out' }, 0);

    // About Section Animations
    gsap.fromTo('.about-image', 
        { x: -100, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 85%',
                once: true
            },
            x: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: 'power3.out' 
        }
    );

    gsap.fromTo('.about-content > *', 
        { x: 100, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 85%',
                once: true
            },
            x: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.2, 
            ease: 'power3.out' 
        }
    );

    // Why Choose Us Section Animations
    gsap.fromTo('.why-us-card', 
        { y: 100, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.why-choose-us',
                start: 'top 80%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: 'power3.out' 
        }
    );

    gsap.fromTo('.why-us-image', 
        { x: 100, opacity: 0, scale: 0.8 },
        { 
            scrollTrigger: {
                trigger: '.why-choose-us',
                start: 'top 70%',
                once: true
            },
            x: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1.5, 
            ease: 'power3.out' 
        }
    );

    gsap.fromTo('.feature-item', 
        { y: 30, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.why-choose-us',
                start: 'top 60%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.3, 
            ease: 'power2.out' 
        }
    );

    // Services Section Animations
    gsap.fromTo('.services-header .header-content', 
        { y: 50, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.services-section',
                start: 'top 85%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power3.out' 
        }
    );

    gsap.fromTo('.service-card', 
        { y: 60, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 90%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: 'back.out(1.7)' 
        }
    );

    // Team Section Animations
    gsap.fromTo('.team-section .section-header', 
        { y: 40, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.team-section',
                start: 'top 85%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power3.out' 
        }
    );

    // Devices Rental Section Animations
    gsap.fromTo('.rental-header .header-content', 
        { y: 60, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.devices-rental-section',
                start: 'top 90%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: 'power4.out' 
        }
    );

    gsap.fromTo('.rental-card', 
        { y: 80, opacity: 0, scale: 0.95 },
        { 
            scrollTrigger: {
                trigger: '.devices-rental-section',
                start: 'top 85%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1, 
            stagger: 0.15, 
            ease: 'back.out(1.4)' 
        }
    );

    // Team Slider Logic
    const slider = document.querySelector('.team-slider');
    const cards = document.querySelectorAll('.team-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slider && cards.length > 0) {
        let currentIndex = 0;
        const cardWidth = 50; // Percent on desktop
        
        function updateSlider() {
            const isMobile = window.innerWidth <= 768;
            const moveAmount = isMobile ? 100 : cardWidth;
            
            slider.style.transform = `translateX(${currentIndex * (moveAmount)}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % (window.innerWidth <= 768 ? cards.length : cards.length - 1);
                updateSlider();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + (window.innerWidth <= 768 ? cards.length : cards.length - 1)) % (window.innerWidth <= 768 ? cards.length : cards.length - 1);
                updateSlider();
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % (window.innerWidth <= 768 ? cards.length : cards.length - 1);
            updateSlider();
        }, 5000);
    }

    // Offers Section Animations
    gsap.fromTo('.offers-section .section-header', 
        { y: 50, opacity: 0 },
        { 
            scrollTrigger: {
                trigger: '.offers-section',
                start: 'top 95%', // Trigger much earlier
                once: true
            },
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power3.out' 
        }
    );

    gsap.fromTo('.offer-card', 
        { y: 60, opacity: 0, scale: 0.95 },
        { 
            scrollTrigger: {
                trigger: '.offers-section',
                start: 'top 85%',
                once: true
            },
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 1, 
            stagger: 0.15, 
            ease: 'power3.out' 
        }
    );

    // Stats Section Animation + Counter
    gsap.fromTo('.stats-title',
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.stats-section',
                start: 'top 80%',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        }
    );

    gsap.fromTo('.stat-item',
        { y: 40, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 85%',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }
    );

    // Counter Animation triggered by ScrollTrigger
    ScrollTrigger.create({
        trigger: '.stats-section',
        start: 'top 80%',
        once: true,
        onEnter: () => {
            document.querySelectorAll('.counter').forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // ms
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 16);
            });
        }
    });

    // Refresh ScrollTrigger to account for new tall section
    ScrollTrigger.refresh();
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 1000);

    // Coverage Section Animations
    gsap.fromTo('.coverage-header',
        { y: 60, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.coverage-section',
                start: 'top 85%',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        }
    );

    gsap.fromTo('.city-item',
        { y: 30, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.coverage-cities',
                start: 'top 90%',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.5)'
        }
    );

    gsap.fromTo('.map-image',
        { scale: 0.85, opacity: 0, y: 40 },
        {
            scrollTrigger: {
                trigger: '.coverage-map',
                start: 'top 90%',
                once: true
            },
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: 'power3.out'
        }
    );

    // DNA Section Animation
    gsap.fromTo('.dna-image',
        { x: -100, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.dna-section',
                start: 'top 90%',
                once: true
            },
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out'
        }
    );

    // Uniqueness Section Animations
    gsap.fromTo('.uniqueness-section .section-header',
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.uniqueness-section',
                start: 'top 85%',
                once: true
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        }
    );

    gsap.fromTo('.uniqueness-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
            scrollTrigger: {
                trigger: '.uniqueness-grid',
                start: 'top 90%',
                once: true
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.4)'
        }
    );

    // CTA Section Animations
    gsap.fromTo('.cta-title',
        { y: 50, opacity: 0 },
        {
            scrollTrigger: { trigger: '.cta-section', start: 'top 85%', once: true },
            y: 0, opacity: 1, duration: 1, ease: 'power3.out'
        }
    );

    gsap.fromTo('.cta-subtitle',
        { y: 30, opacity: 0 },
        {
            scrollTrigger: { trigger: '.cta-section', start: 'top 80%', once: true },
            y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out'
        }
    );

    gsap.fromTo('.cta-btns',
        { y: 30, opacity: 0 },
        {
            scrollTrigger: { trigger: '.cta-section', start: 'top 75%', once: true },
            y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out'
        }
    );

    gsap.fromTo('.cta-contact-item',
        { y: 40, opacity: 0 },
        {
            scrollTrigger: { trigger: '.cta-contact-row', start: 'top 90%', once: true },
            y: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'back.out(1.4)'
        }
    );

    // Footer Animations
    gsap.fromTo('.footer-col',
        { y: 50, opacity: 0 },
        {
            scrollTrigger: { trigger: '.site-footer', start: 'top 90%', once: true },
            y: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power3.out'
        }
    );

    gsap.fromTo('.footer-bottom',
        { opacity: 0 },
        {
            scrollTrigger: { trigger: '.footer-bottom', start: 'top 95%', once: true },
            opacity: 1, duration: 0.8, ease: 'power2.out'
        }
    );

    // ================================================
    // Who We Are Page Animations (weare.html)
    // ================================================
    if (document.body.classList.contains('weare-page')) {
        // Hero
        gsap.fromTo('.weare-hero-title', { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power4.out' });
        gsap.fromTo('.weare-hero-subtitle', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' });

        // About Section
        gsap.fromTo('.about-content > *', 
            { y: 50, opacity: 0 },
            { 
                scrollTrigger: { trigger: '.weare-about', start: 'top 80%', once: true },
                y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' 
            }
        );
        gsap.fromTo('.weare-about-img', 
            { scale: 0.9, opacity: 0 },
            { 
                scrollTrigger: { trigger: '.weare-about', start: 'top 75%', once: true },
                scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' 
            }
        );

        // Mission & Vision
        gsap.fromTo('.weare-mv-header > *', 
            { y: 40, opacity: 0 },
            { 
                scrollTrigger: { trigger: '.weare-mv', start: 'top 85%', once: true },
                y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' 
            }
        );
        gsap.fromTo('.weare-mv-card', 
            { y: 60, opacity: 0 },
            { 
                scrollTrigger: { trigger: '.weare-mv-grid', start: 'top 90%', once: true },
                y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'back.out(1.4)' 
            }
        );

        // Core Values
        gsap.fromTo('.weare-values .weare-mv-header > *', 
            { y: 40, opacity: 0 },
            { 
                scrollTrigger: { trigger: '.weare-values', start: 'top 85%', once: true },
                y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' 
            }
        );
        gsap.fromTo('.weare-value-card', 
            { y: 50, opacity: 0, scale: 0.9 },
            { 
                scrollTrigger: { trigger: '.weare-values-grid', start: 'top 90%', once: true },
                y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' 
            }
        );
    }

    // Services Page Animations (service.html)
    if (document.body.classList.contains('services-page')) {
        gsap.fromTo('.services-hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power4.out' });
        gsap.fromTo('.services-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' });

        // Intro Section
        gsap.fromTo('.intro-collage', 
            { scale: 0.8, opacity: 0 },
            { 
                scrollTrigger: { trigger: '.services-intro', start: 'top 80%', once: true },
                scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' 
            }
        );
        gsap.fromTo('.services-intro-info > *', 
            { y: 40, opacity: 0 },
            { 
                scrollTrigger: { trigger: '.services-intro-info', start: 'top 85%', once: true },
                y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.out' 
            }
        );
    }
});
