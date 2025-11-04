// Carrusel Portadas Art Cosmos
(function(){
  const track = document.getElementById('acTrack');
  if(!track) return; // No existe el carrusel en esta página

  const prev = document.querySelector('.ac-arrow--left');
  const next = document.querySelector('.ac-arrow--right');

  function stepSize(){
    const card = track.querySelector('.ac-card');
    if(!card) return 300;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || 16);
    return card.getBoundingClientRect().width + gap;
  }

  function updateArrows(){
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    prev.disabled = track.scrollLeft <= 0;
    next.disabled = track.scrollLeft >= maxScroll;
  }

  prev.addEventListener('click', ()=> track.scrollBy({left: -stepSize(), behavior:'smooth'}));
  next.addEventListener('click', ()=> track.scrollBy({left:  stepSize(), behavior:'smooth'}));

  track.addEventListener('scroll', updateArrows, {passive:true});
  window.addEventListener('resize', updateArrows);

  // Accesible con teclado
  track.setAttribute('tabindex','0');
  track.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight'){ track.scrollBy({left: stepSize(), behavior:'smooth'}); }
    if(e.key === 'ArrowLeft'){ track.scrollBy({left: -stepSize(), behavior:'smooth'}); }
  });

  updateArrows();
})();
