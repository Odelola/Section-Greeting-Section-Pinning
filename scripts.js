const body = document.body;
const html = document.documentElement;
const scrollProgressBar = document.getElementsByClassName("scroll-progress_bar")[0];
const firstSection = document.getElementsByClassName("two")[0];
const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);
console.log(scrollProgressBar)
console.log(height)
console.log(firstSection.offsetWidth)

function updateScrollProgress() {
  // console.log(scrollProgressBar.offsetWidth)
  console.log(window.scrollY)
}

updateScrollProgress();

window.addEventListener("scroll", updateScrollProgress)



  gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".container section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});
