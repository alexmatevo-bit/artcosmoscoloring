(function () {
  // Utilidades comunes
  const FOCUSABLE = 'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
  const lockScroll = (on, cls = 'no-scroll') => {
    document.body.classList.toggle(cls, on);
  };

  function trapFocus(container, e) {
    const nodes = container.querySelectorAll(FOCUSABLE);
    if (!nodes.length) return;
    const first = nodes[0];
    const last  = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  // ====== BINDER 1: mi propuesta (#mm-open/#mm-panel) ======
  function bindMM() {
    const openBtn  = document.getElementById('mm-open');
    const panel    = document.getElementById('mm-panel');
    const closeBtn = document.getElementById('mm-close');
    const backdrop = document.getElementById('mm-backdrop');
    if (!openBtn || !panel || !backdrop) return false;

    let lastFocused = null;

    const open = () => {
      lastFocused = document.activeElement;
      document.documentElement.classList.add('mm-open');
      panel.setAttribute('aria-hidden', 'false');
      openBtn.setAttribute('aria-expanded', 'true');
      backdrop.hidden = false;
      lockScroll(true, 'no-scroll');
      const first = panel.querySelector(FOCUSABLE);
      first && first.focus();
    };

    const close = () => {
      document.documentElement.classList.remove('mm-open');
      panel.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');
      backdrop.hidden = true;
      lockScroll(false, 'no-scroll');
      lastFocused && lastFocused.focus();
    };

    openBtn.addEventListener('click', open);
    closeBtn && closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (panel.getAttribute('aria-hidden') === 'true') return;
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') trapFocus(panel, e);
    });

    // Cerrar al hacer click en cualquier enlace del panel
    panel.addEventListener('click', (e) => {
      if (e.target.closest('a')) close();
    });

    return true;
  }

  // ====== BINDER 2: tu estructura actual (.ac-burger/#ac-drawer) ======
  function bindAC() {
    const burger       = document.querySelector('.ac-burger');
    const drawer       = document.getElementById('ac-drawer');
    const closeBtn     = document.querySelector('.ac-close');
    const overlay      = document.querySelector('.ac-drawer-overlay');
    const searchToggle = document.querySelector('.ac-search-toggle');
    const searchBox    = document.getElementById('ac-search');

    if (!burger || !drawer || !overlay) return false;

    let lastFocused = null;

    const open = () => {
      lastFocused = document.activeElement;
      drawer.classList.add('open');
      overlay.hidden = false;
      requestAnimationFrame(() => overlay.classList.add('show'));
      burger.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      lockScroll(true, 'ac-no-scroll');
      const first = drawer.querySelector(FOCUSABLE);
      first && first.focus();
    };

    const close = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('show');
      setTimeout(() => (overlay.hidden = true), 200);
      burger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      lockScroll(false, 'ac-no-scroll');
      lastFocused && lastFocused.focus();
    };

    const toggleSearch = () => {
      if (!searchToggle || !searchBox) return;
      const open = searchBox.hasAttribute('hidden') === false;
      if (open) {
        searchBox.setAttribute('hidden', '');
        searchToggle.setAttribute('aria-expanded', 'false');
      } else {
        searchBox.removeAttribute('hidden');
        searchToggle.setAttribute('aria-expanded', 'true');
      }
    };

    burger.addEventListener('click', open);
    closeBtn && closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      const isOpen = drawer.classList.contains('open');
      if (!isOpen) return;
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') trapFocus(drawer, e);
    });

    drawer.addEventListener('click', (e) => {
      if (e.target.closest('a')) close();
    });

    searchToggle && searchToggle.addEventListener('click', toggleSearch);

    return true;
  }

  // ====== Arranque con soporte a header dinámico ======
  function initBinders() {
    if (bindMM()) return;     // intenta mm-*
    if (bindAC()) return;     // intenta ac-*
  }

  document.addEventListener('DOMContentLoaded', () => {
    initBinders();

    // Si el header se inyecta después, observa y vuelve a intentar
    const host = document.getElementById('header');
    if (!host) return;
    const obs = new MutationObserver(() => {
      initBinders();
      // Si ya está cualquiera de los dos, desconecta
      if (document.getElementById('mm-panel') ||
          document.getElementById('ac-drawer')) {
        obs.disconnect();
      }
    });
    obs.observe(host, { childList: true, subtree: true });
  });
})();
