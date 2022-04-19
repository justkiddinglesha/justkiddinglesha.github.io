import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statistic = () => {
  gsap.to('.statistic__digital', {
    scrollTrigger: {
      trigger: '.statistic__digital',
      start: 'top center',
      once: true,
      toggleClass: 'animate',
    },
  });
  gsap.to('.statistic__categories', {
    scrollTrigger: {
      trigger: '.statistic__categories',
      start: 'top center',
      once: true,
      toggleClass: 'animate',
    },
  });
};

export default statistic;
