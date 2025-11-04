// ===== MENÚ STICKY EN TODAS LAS PÁGINAS =====

// Esta función activa el sticky menu
function initStickyMenu() {
  const menu = document.querySelector('.sticky-menu');
  const headerTop = document.querySelector('.header-top');

  if (!menu || !headerTop) return; // si no existe, salir

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerTop.offsetHeight) {
      menu.classList.add('sticky-fixed');
    } else {
      menu.classList.remove('sticky-fixed');
    }
  });
}

// 🔹 Escuchar cuando el header dinámico se cargue
document.addEventListener("headerLoaded", initStickyMenu);

// 🔹 Por si acaso el header ya está en el HTML (ej. index.html sin fetch)
window.addEventListener("DOMContentLoaded", initStickyMenu);
