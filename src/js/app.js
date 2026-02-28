import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------
    // Header blur effect
    // -------------------------
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.9)';
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.85)';
                header.style.boxShadow = 'none';
            }
        });
    }

    // -------------------------
    // Mobile Menu
    // -------------------------
    const btn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (btn && nav) {
        btn.addEventListener('click', function () {
            const open = nav.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // -------------------------
    // Hero Animations (Complex 3D & GSAP)
    // -------------------------
    const tlHero = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Setup CTA default
    gsap.set('.hero-cta', { opacity: 0, y: 30 });

    // Hero Text Intro
    tlHero.from('.js-title-line', { y: 40, opacity: 0, duration: 1.2, stagger: 0.15 })
        .from('.js-lead-line', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .to('.hero-cta', { y: 0, opacity: 1 }, "-=0.4")
        .from('.hero-visual-container', { scale: 0.8, opacity: 0, duration: 2, ease: "power2.out" }, "-=1.5");

    // Spin orbit rings infinitely
    gsap.to('.ring-1', { rotationZ: 360, duration: 40, repeat: -1, ease: 'none' });
    gsap.to('.ring-2', { rotationZ: -360, duration: 50, repeat: -1, ease: 'none' });
    gsap.to('.ring-3', { rotationZ: 360, duration: 30, repeat: -1, ease: 'none' });

    // Floating T-Cards in 3D
    const cards = gsap.utils.toArray('.t-card');
    cards.forEach((card, index) => {
        gsap.to(card, {
            y: `+=${15 + index * 10}`,
            x: `+=${10 - index * 5}`,
            rotationX: `+=${5}`,
            rotationY: `+=${8}`,
            rotationZ: `+=${2}`,
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // Glowing nodes pulse
    gsap.to('.node', {
        scale: 1.5, opacity: 0.5,
        duration: 1.5,
        repeat: -1, yoyo: true, stagger: 0.3, ease: 'power2.inOut'
    });

    // Data connecting lines dash drawing
    gsap.from('.js-node-line', {
        strokeDashoffset: 100,
        strokeDasharray: 100,
        duration: 5,
        repeat: -1,
        ease: "linear",
        opacity: 0.5
    });

    // Parallax on mouse move in Hero
    const heroSection = document.querySelector('.hero');
    const visContainer = document.querySelector('.hero-visual-container');
    if (heroSection && visContainer) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;

            gsap.to(visContainer, {
                rotationY: x,
                rotationX: -y,
                duration: 2,
                ease: "power2.out"
            });

            // Additional delicate parallax per card
            gsap.to('.t-card-1', { x: x * 1.5, y: y * 1.5, duration: 2, ease: "power2.out" });
            gsap.to('.t-card-2', { x: x * -1.2, y: y * -1.2, duration: 2, ease: "power2.out" });
            gsap.to('.t-card-3', { x: x * 2, y: y * 2, duration: 2, ease: "power2.out" });
        });

        // Reset parallax on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            gsap.to(visContainer, { rotationY: 0, rotationX: 0, duration: 2, ease: "power2.out" });
            gsap.to('.t-card', { x: 0, y: 0, duration: 2, ease: "power2.out" });
        });
    }


    // -------------------------
    // General Scroll Animations
    // -------------------------

    // Fade up simple elements
    const fadeElements = document.querySelectorAll('.js-fade');
    fadeElements.forEach((el) => {
        gsap.fromTo(el,
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Staggered lists / bento grids
    const staggerWrappers = document.querySelectorAll('.js-stagger');
    staggerWrappers.forEach((wrapper) => {
        const children = wrapper.children;
        gsap.to(children, {
            y: 0, opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: wrapper,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Scale up wrappers
    gsap.fromTo('.js-scale',
        { scale: 0.95, opacity: 0 },
        {
            scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
                trigger: '.js-scale',
                start: "top 80%"
            }
        }
    );

    // Counters
    const counters = document.querySelectorAll('.js-counter');
    counters.forEach((counter) => {
        const endValue = parseInt(counter.innerText, 10);
        counter.innerText = '0';
        gsap.to(counter, {
            innerHTML: endValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: counter,
                start: "top 90%"
            }
        });
    });

    // Torecamob SVG float continuous
    const cardSvg = document.querySelector('.js-card-svg');
    if (cardSvg) {
        gsap.to(cardSvg, {
            y: -15,
            rotationX: 10,
            rotationY: -15,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut"
        });
    }
});
