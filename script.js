const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{
  links?.classList.toggle('open');
  toggle.setAttribute('aria-expanded',links?.classList.contains('open')?'true':'false');
});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

if ('IntersectionObserver' in window) {
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}
  }),{threshold:.12});
  document.querySelectorAll('.project,.skill,.about-copy,.hero-copy').forEach(el=>{
    el.classList.add('reveal');reveal.observe(el);
  });
}
