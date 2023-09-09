// Hero reveal

const logo = document.querySelector(".logo");
const heading = document.querySelector(".hero-heading");

window.addEventListener("load", reveal);

function reveal() {
  const TLFADE = gsap.timeline();

  TLFADE.from(logo, { autoAlpha: 0, y: -50, delay: 0.2 }).from(
    heading,
    {
      autoAlpha: 0,
      y: -50,
      delay: 0.4,
    },
    "-=0.2"
  );
}

// scroll trigger animation

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
