function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }

  function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('show');
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Carrossel de patrocinadores
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.patrocinador-item');

  let index = 0;
  const totalItems = items.length;

  function slide() {
    let visibleItems = window.innerWidth >= 768 ? 5 : 1;
    if (visibleItems > totalItems) visibleItems = totalItems;

    const style = getComputedStyle(track);
    const gap = parseInt(style.gap) || 16;
    const itemWidth = items[0].getBoundingClientRect().width + gap;
    const moveX = index * itemWidth;
    const maxIndex = totalItems - visibleItems;

    if (index >= maxIndex) {
      index = 0;
    }

    track.style.transform = `translateX(-${moveX}px)`;
    index++;
  }

  let slideInterval = setInterval(() => {
  slide();
  slideImagemPrincipal();
}, 3000);


  window.addEventListener('resize', () => {
    index = 0;
    track.style.transform = 'translateX(0)';
  });

  // Carrossel de imagens (início do site)
const slideTrack = document.querySelector('.carousel-slides');
const slideImages = document.querySelectorAll('.carousel-slides img');
let slideIndex = 0;
const totalSlides = slideImages.length;

function slideImagemPrincipal() {
  if (!slideTrack) return;
  if (slideIndex >= totalSlides) slideIndex = 0;
  slideTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideIndex++;
}
