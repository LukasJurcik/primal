window.Webflow ||= [];
window.Webflow.push(() => {
  console.log("cursor.js loaded");
  if (!window.gsap) return console.warn("GSAP not found");

  gsap.registerPlugin(ScrollTrigger);
});