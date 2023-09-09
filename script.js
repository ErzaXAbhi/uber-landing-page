gsap.from(".info-text h2", {
  duration: 1,
  autoAlpha: 0,
  y: 0,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".info-text h2",
    markers: false,

    // Trigger Scroller

    start: "top 70%",
    end: "bottom 10%",
    scrub: true,
  },
});

ScrollTrigger.create({
  trigger: ".info-text",
  pin: true,
  markers: false,
});
