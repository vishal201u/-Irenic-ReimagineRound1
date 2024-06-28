const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
});




var tl = gsap.timeline();

tl.from(".nav h1", {
  y: -40,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.15

}, "a")

tl.from(".indian", {
  x: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,


}, 'a')

tl.from(".box", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.5,


}, 'a')

tl.to(".box", {
  scale: 0.5,
  duration: 0.2,
  ease: "power3",
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    start: "top 15%",
    scrub: 2,
    toggleActions: "play pause resume reset"

  }
})

tl.to(".box2", {
  scale: 0.7,
  duration: 0.2,
  ease: "power3",
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    start: "600",
    scrub: 2,
    toggleActions: "play pause resume reset"

  }
})

// tl.to(".box3", {
//   scale:0.5,
//   duration:1,
//   scrollTrigger:{
//     trigger:".box",
//     scroller:"body",
//     markers:true,
//     start:"bottom 50%",
//     scrub:2

//   }
// })

tl.from(".marque", {
  x: 150,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".box3",
    scroller: "body",
    scrub: 2
  }
})


tl.to(".box4", {
  scale: 0.5,
  duration: 0.2,
  ease: "power3",
  scrollTrigger: {
    trigger: ".box4",
    scroller: "body",
    start: "top 95%",
    scrub: 2,
    toggleActions: "play pause resume reset"

  }
}, "b")


tl.to(".t1", {
  scale: 0.5,
  duration: 0.2,
  ease: "power3",
  scrollTrigger: {
    trigger: ".t1",
    scroller: "body",
    start: "top 80%",
    scrub: 2,
    toggleActions: "play pause resume reset"

  }
}, "b")


tl.to(".box5", {
  x: -400,
  stagger: 0.02,
  duration: 0.5,
  ease: "power3",
  scrollTrigger: {
    trigger: ".box5",
    scroller:"body",
    start: "top 70%",  // Adjust the start point as needed
    end: "bottom center",  // Define the end point if needed
    toggleActions: "play none none none",  // Control when the animation plays
    markers: true
  }
});


// tl.to(".box6 h1", {
//   y:-40,
//   stagger:0.02,
//   duration:0.5,
//   ease: "power3",
//   scrollTrigger: {
//     trigger: ".box6 h1",
//     scroller:Element,
//   }
// })

