gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ scroller: window });

const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation menu' : 'Open navigation menu',
  );
  menuToggle.querySelector('i').className = isOpen
    ? 'ri-close-line'
    : 'ri-menu-line';
});

const smoothEase = 'power3.out';
const motionDuration = 0.8;

const tl = gsap.timeline();

tl.from('.nav h1', {
  y: -30,
  opacity: 0,
  duration: motionDuration,
  ease: smoothEase,
  delay: 0.3,
  stagger: 0.12,
})
  .from('.indian', {
    x: -20,
    opacity: 0,
    duration: motionDuration,
    ease: smoothEase,
    delay: 0.2,
  }, '<')
  .from('.box', {
    y: 20,
    opacity: 0,
    duration: 1.1,
    ease: smoothEase,
    delay: 0.3,
  }, '<');

gsap.to('.box', {
  scale: 0.96,
  duration: 0.9,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.box',
    start: 'top 60%',
    end: 'bottom 30%',
    scrub: 1.2,
    toggleActions: 'play pause resume reset',
  },
});

gsap.to('.box2', {
  scale: 0.98,
  duration: 0.9,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.box2',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1.4,
    toggleActions: 'play pause resume reset',
  },
});

gsap.from('.marque', {
  x: 120,
  duration: 1.1,
  ease: smoothEase,
  delay: 0.4,
  scrollTrigger: {
    trigger: '.box3',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1.3,
  },
});

gsap.to('.box4', {
  scale: 0.97,
  duration: 0.9,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.box4',
    start: 'top 85%',
    end: 'bottom 20%',
    scrub: 1.4,
    toggleActions: 'play pause resume reset',
  },
});

gsap.to('.t1', {
  scale: 0.97,
  duration: 0.9,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.t1',
    start: 'top 90%',
    end: 'bottom 10%',
    scrub: 1.4,
    toggleActions: 'play pause resume reset',
  },
});

ScrollTrigger.refresh();


