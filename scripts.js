gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".container section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});
