import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const weDo = () => {
  gsap.to('.we-do__animation', {
    scrollTrigger: {
      trigger: '.we-do__animation',
      start: 'top center',
      once: true,
      toggleClass: 'filled',
    },
  });

  const items = document.querySelectorAll('.we-do__item');
  const circle = document.querySelector('.we-do__circle');

  items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      circle.classList.add(`step-${index + 1}`);
    });
    item.addEventListener('mouseleave', () => {
      circle.classList.remove(`step-${index + 1}`);
    });
  });
};

export default weDo;
