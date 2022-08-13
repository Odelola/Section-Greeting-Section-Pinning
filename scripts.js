const scrollProgressBarContainer = document.getElementsByClassName("circle-progress-container")[0];
const scrollProgressBar = document.getElementsByClassName("circle-progress-container__progress")[0];

function updateScrollProgress() {
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const hasScrolled = (windowScroll / height) * 100;
  scrollProgressBar.style.strokeDashoffset = 100 - hasScrolled;
}

updateScrollProgress();

window.addEventListener("scroll", updateScrollProgress)

// GSAP EFFECT
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".container section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});
