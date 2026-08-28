import Lenis from 'lenis';

let lenis = null;

export function initLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToId(hash) {
  if (lenis) {
    lenis.scrollTo(hash, { offset: -72, duration: 1.4 });
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  }
}
