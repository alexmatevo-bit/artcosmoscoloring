// assets/js/loadComponents.js
(function () {
  // ---- Utilidad: actualizar el contador del header ----
  function updateHeaderFavoritesCount() {
    try {
      const favs = JSON.parse(localStorage.getItem("favorites")) || [];
      const el = document.getElementById("favoritesCount");
      if (el) el.textContent = Array.isArray(favs) ? favs.length : 0;
    } catch (_) {
      const el = document.getElementById("favoritesCount");
      if (el) el.textContent = 0;
    }
  }

  // ==== Cargar Header ====
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("header");
      if (header) {
        header.innerHTML = data;

        // Actualiza el contador nada más insertarlo
        updateHeaderFavoritesCount();

        // Avisar al resto de scripts de que el header ya está en el DOM
        document.dispatchEvent(new Event("headerLoaded"));
      }
    });

  // ==== Cargar Footer ====
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.innerHTML = data;
      }
    });

  // ---- Mantener el contador sincronizado ----
  // Si cambias de pestaña/ventana, refresca
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateHeaderFavoritesCount();
  });

  // Si cambia localStorage (misma pestaña o otra), refresca
  window.addEventListener("storage", (e) => {
    if (e.key === "favorites") updateHeaderFavoritesCount();
  });

  // ==== Carrusel de Collection ====
  document.addEventListener("DOMContentLoaded", () => {
    const viewport = document.getElementById("ccViewport");
    const track = document.getElementById("ccTrack");
    const prev = document.querySelector(".cc-prev");
    const next = document.querySelector(".cc-next");

    // Si no estamos en collection.html, salir
    if (!viewport || !track || !prev || !next) return;

    function cardWidth() {
      const first = track.querySelector(".cc-card");
      return first
        ? first.getBoundingClientRect().width +
            parseFloat(getComputedStyle(track).gap || 0)
        : 0;
    }

    function updateNav() {
      prev.disabled = viewport.scrollLeft <= 0;
      const maxScroll = track.scrollWidth - viewport.clientWidth - 2;
      next.disabled = viewport.scrollLeft >= maxScroll;
    }

    function scrollByCards(n) {
      viewport.scrollBy({ left: n * cardWidth(), behavior: "smooth" });
      setTimeout(updateNav, 350);
    }

    prev.addEventListener("click", () => scrollByCards(-1));
    next.addEventListener("click", () => scrollByCards(1));

    viewport.addEventListener("scroll", () => {
      if (updateNav._t) cancelAnimationFrame(updateNav._t);
      updateNav._t = requestAnimationFrame(updateNav);
    });

    viewport.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
        e.preventDefault();
        viewport.scrollLeft += e.deltaX;
      },
      { passive: false }
    );

    window.addEventListener("resize", () => setTimeout(updateNav, 200));
    updateNav();
  });
})();
