import gsap from 'gsap';

const hero = () => {
  const orange = document.querySelector('.hero__orange');
  const path = document.querySelector('path');
  const image = orange.querySelector('img');
  const runes = document.querySelectorAll('.hero__runes-overlay');
  const ornament = document.querySelector('.hero__ornament');
  const font = document.querySelector('.hero__font');
  const lines = document.querySelectorAll('.hero__line');

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  const tl3 = gsap.timeline();
  const tl4 = gsap.timeline();
  const tl5 = gsap.timeline();

  const wrapperWidth = orange.offsetWidth;
  const wrapperHeight = orange.offsetHeight;

  const windowWidth = window.innerWidth;

  let circleScale = 1;
  let circleWidth = 2248;
  let circle2Offset = '160';
  let linesWidth = '100%';

  if (windowWidth > 2000) {
    circleScale = 1.5;
    circleWidth = 2248 * circleScale;
  }

  if (windowWidth < 767) {
    circleScale = 0.5;
    circleWidth = 2248 * circleScale;
  }

  if (windowWidth < 1440) {
    linesWidth = 'calc(100% + 25px)';
  }

  const offsetX = (wrapperWidth - 2248) / 2;
  let offsetY = wrapperHeight - 2248 * 0.45;

  if (windowWidth < 767) {
    offsetY = wrapperHeight - 2248 * 0.5;
    circle2Offset = 130;
  }

  tl.set(path, {
    x: offsetX,
    y: offsetY,
    scale: 0,
    transformOrigin: '50% 50%',
  })
    .set(image, {
      'clip-path': 'url(#svgPath)',
    })
    .to(path, {
      x: offsetX,
      y: offsetY,
      scale: circleScale,
      duration: 2,
      delay: 0.7,
      transformOrigin: '50% 50%',
    })
    .set(path, {
      x: offsetX,
      y: offsetY,
      scale: 0,
      transformOrigin: '50% 50%',
    })
    .to(path, {
      x: offsetX,
      y: offsetY,
      scale: circleScale,
      duration: 2,
      transformOrigin: '50% 50%',
    })
    .set(image, {
      'clip-path': 'circle(0 at 50% 100%)',
    })
    .to(image, {
      'clip-path': `circle(${circleWidth / 2}px at 50% ${circle2Offset}%)`,
      duration: 2,
    });

  tl2.to(orange, {
    opacity: 0.6,
    duration: 0.4,
    delay: 5,
  });

  tl3.to(ornament, {
    rotate: -45,
    duration: 1,
  });

  tl4.to(font, {
    rotate: -180,
    duration: 1,
  }).to(font, {
    rotate: 0,
    duration: 1.4,
  });

  tl5.to(lines, {
    maxWidth: linesWidth,
    duration: 1,
    delay: 1,
  }).to(runes, {
    height: 0,
    delay: 1,
    duration: 0.6,
  });
};

export default hero;
