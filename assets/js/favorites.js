// assets/js/favorites.js
(function () {
  // --------------- Utils ---------------
  function safeGet() {
    try { return JSON.parse(localStorage.getItem("favorites")) || []; }
    catch { return []; }
  }
  function normalize(arr) {
    return (arr || [])
      .map(f => typeof f === "string" ? ({ id: f, title: f, img: "" }) : (f || {}))
      .filter(f => f.id);
  }
  function dedupeById(list) {
    const seen = new Set();
    const out = [];
    for (const f of list) {
      if (!seen.has(f.id)) { seen.add(f.id); out.push(f); }
    }
    return out;
  }
  function save(list) {
    localStorage.setItem("favorites", JSON.stringify(dedupeById(normalize(list))));
  }
  function escapeHtml(s = "") {
    return s.replace(/[&<>"']/g, m =>
      ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m])
    );
  }

  // --------------- Contador robusto (ESCRITORIO + MÓVIL) ---------------
  let counterReady = false;
  let counterObserver = null;

  function getCounterEl() {
    return document.getElementById("favoritesCount");          // escritorio
  }
  function getCounterElMobile() {
    return document.getElementById("favoritesCountMobile");    // móvil
  }

  function updateCounter() {
    const favs = normalize(safeGet());
    const count = String(favs.length);

    const el  = getCounterEl();
    const elM = getCounterElMobile();

    if (el)  el.textContent  = count;
    if (elM) elM.textContent = count;

    // Si existe cualquiera de los dos, ya está listo
    if (el || elM) {
      counterReady = true;
      if (counterObserver) { counterObserver.disconnect(); counterObserver = null; }
      return;
    }

    // Si aún no existen en el DOM, observa hasta que aparezcan
    if (!counterObserver) {
      counterObserver = new MutationObserver(() => {
        const e2 = getCounterEl();
        const m2 = getCounterElMobile();

        if (e2) e2.textContent = count;
        if (m2) m2.textContent = count;

        if (e2 || m2) {
          counterReady = true;
          counterObserver.disconnect();
          counterObserver = null;
        }
      });
      counterObserver.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  // --------------- Corazones en tarjetas ---------------
  function initFavoritesButtons() {
    const favBtns = document.querySelectorAll(".favorite-btn");
    if (!favBtns.length) return;

    let favorites = normalize(safeGet());

    function syncButtons() {
      favBtns.forEach(btn => {
        let container = btn.closest(".cc-card") || btn.closest("#bookPage");
        if (!container) return;
        const id = container.dataset.id;
        btn.classList.toggle("active", favorites.some(f => f.id === id));
      });
    }

    function persist() {
      save(favorites);
      updateCounter();
      syncButtons();
    }

    favBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        let container = btn.closest(".cc-card") || btn.closest("#bookPage");
        if (!container) return;

        const id = container.dataset.id;
        const title = container.dataset.title || id;
        let img = "";

        // en colección → coge el <img> de la card
        if (container.classList.contains("cc-card")) {
          img = container.querySelector("img")?.src || "";
        }
        // en ficha → coge la portada principal
        else {
          img = document.getElementById("bookMain")?.src || "";
        }

        if (favorites.some(f => f.id === id)) {
          favorites = favorites.filter(f => f.id !== id);
        } else {
          favorites.push({ id, title, img });
        }
        persist();
      });
    });

    // Arranque
    syncButtons();
    updateCounter();
  }

  // --------------- Wishlist ---------------
  function renderWishlist() {
    const container = document.getElementById("wishlistContainer");
    if (!container) return;

    let favorites = normalize(safeGet());
    save(favorites); // guarda normalizado/dedupe

    if (favorites.length === 0) {
      container.innerHTML = '<div class="wishlist-empty">No has guardado ningún libro todavía ❤️</div>';
      updateCounter();
      return;
    }

    container.innerHTML = favorites.map(f => `
      <article class="wishlist-item" data-id="${f.id}">
        ${f.img ? `<img class="wishlist-img" src="${f.img}" alt="${escapeHtml(f.title || f.id)}">` : ""}
        <div class="wishlist-body">
          <h3 class="wishlist-title">${escapeHtml(f.title || f.id)}</h3>
          <div class="wishlist-actions">
            <a href="book.html?slug=${encodeURIComponent(f.id)}">Ver detalle</a>
            <button class="wishlist-remove" title="Quitar de favoritos">✕</button>
          </div>
        </div>
      </article>
    `).join("");

    // quitar desde wishlist
    container.querySelectorAll(".wishlist-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".wishlist-item");
        const id = card?.dataset.id;
        if (!id) return;
        let favs = normalize(safeGet());
        favs = favs.filter(f => f.id !== id);
        save(favs);
        renderWishlist();   // repintar
        updateCounter();    // refrescar contador
      });
    });

    updateCounter();
  }

  // --------------- Arranque y eventos ---------------
  document.addEventListener("DOMContentLoaded", () => {
    initFavoritesButtons();
    renderWishlist();
    updateCounter();
  });

  // Cuando el header termine de insertarse (loadComponents.js debe lanzar este evento)
  document.addEventListener("headerLoaded", () => {
    updateCounter();
  });

  // Si vuelves a la pestaña/ventana, refresca contador por si cambió en otra página
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateCounter();
  });

  // 👉 Exportamos funciones al objeto global para usarlas en book.html
  window.initFavoritesButtons = initFavoritesButtons;
  window.updateFavoritesCounter = updateCounter;

})(); // ← muy importante que siga cerrando el IIFE aquí

// ===== Bloque legacy de wishlist-btn (no lo toco) =====
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.wishlist-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');

      // Ejemplo: guardar en localStorage
      const id = button.getAttribute("data-id");
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (button.classList.contains("active")) {
        if (!wishlist.includes(id)) wishlist.push(id);
      } else {
        wishlist = wishlist.filter(item => item !== id);
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });

  // Al cargar la página, marcar los que ya estaban guardados
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.forEach(id => {
    const btn = document.querySelector(`.wishlist-btn[data-id="${id}"]`);
    if (btn) btn.classList.add("active");
  });
});
