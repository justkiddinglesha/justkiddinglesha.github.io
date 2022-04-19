import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = () => {
  gsap.to('.team__animation', {
    scrollTrigger: {
      trigger: '.team__animation',
      start: 'top center',
      once: true,
      toggleClass: 'filled',
    },
  });
  gsap.to('.team__animation-mobile-first', {
    scrollTrigger: {
      trigger: '.team__animation-mobile-first',
      start: 'top center',
      once: true,
      toggleClass: 'filled',
    },
  });
  gsap.to('.team__animation-mobile-second', {
    scrollTrigger: {
      trigger: '.team__animation-mobile-second',
      start: 'top center',
      once: true,
      toggleClass: 'filled',
    },
  });
  gsap.to('.team__animation-mobile-third', {
    scrollTrigger: {
      trigger: '.team__animation-mobile-third',
      start: 'top center',
      once: true,
      toggleClass: 'filled',
    },
  });
};

export default team;
