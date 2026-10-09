// Scroll-reveal for elements marked with data-reveal ("", "zoom", "down").
// Elements already on screen at load are left as they are; everything below
// the fold fades/slides in once. Disabled for prefers-reduced-motion.
export function initReveal(): void {
  const root = document.documentElement;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  root.classList.add('reveal-ready');

  const io = new IntersectionObserver((entries) => {
    let n = 0;
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      el.style.setProperty('--reveal-delay', `${Math.min(n++, 5) * 90}ms`);
      el.classList.add('is-revealed');
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add('is-revealed');
      return;
    }
    el.classList.add('will-reveal');
    io.observe(el);
  });

  // Last strip of the page may never cross the threshold.
  const atBottom = () => {
    if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 4) return;
    targets.forEach((el) => el.classList.add('is-revealed'));
    window.removeEventListener('scroll', atBottom);
  };
  window.addEventListener('scroll', atBottom, { passive: true });

}
