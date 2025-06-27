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

  let slideInterval = setInterval(slide, 3000);

  window.addEventListener('resize', () => {
    index = 0;
    track.style.transform = 'translateX(0)';
  });