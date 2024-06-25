const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});




var tl = gsap.timeline();

tl.from(".nav h1", {
  y:-40,
  opacity:0,
  duration:0.5,
  delay:0.5,
  stagger:0.15

},"a")

tl.from(".indian", {
  x:-30,
  opacity:0,
  duration:0.5,
  delay:0.5,
  

},'a')

tl.from(".box", {
  y:30,
  opacity:0,
  duration:0.5,
  delay:0.5,
  

},'a')