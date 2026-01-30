window.addEventListener('load', () => {
    // 1. Убираем прелоадер
    gsap.to("#loader", {
        opacity: 0,
        duration: 1.5,
        onComplete: () => document.getElementById("loader").style.display = "none"
    });

    // 2. Анимация появления Hero
    const tl = gsap.timeline();
    tl.from(".sub-title", { opacity: 0, y: 30, duration: 1 })
      .from(".main-title", { opacity: 0, y: 50, duration: 1.2 }, "-=0.5")
      .from(".hero-descr", { opacity: 0, duration: 1 }, "-=0.5");

    // 3. Скролл-анимация для секций
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".img-block img", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            scrub: true
        },
        scale: 1.5,
        opacity: 0
    });

    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 70%"
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    });
});
