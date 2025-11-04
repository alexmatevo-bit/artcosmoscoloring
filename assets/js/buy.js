document.addEventListener('DOMContentLoaded', () => {
  // 1) Arranca tu módulo (pone listeners y sabe dibujar banderas)
  if (typeof initBuyModule === 'function') initBuyModule();

  const stores   = document.getElementById('stores');
  const flagsBox = document.getElementById('flags');
  const langBtns = document.querySelectorAll('.lang-btn');

  // 2) Fuerza el bloque de tiendas a estar oculto al cargar
  if (stores) {
    stores.hidden = true;           // oculta por atributo
    stores.classList.remove('show'); // vence el CSS que las muestra
  }
  // (Opcional) limpia banderas hasta que el usuario elija idioma
  if (flagsBox) flagsBox.innerHTML = '';

  // quita cualquier "active" por si alguien lo deja puesto
  langBtns.forEach(btn => btn.classList.remove('active'));

  // 3) Al pulsar un idioma -> mostramos el bloque (y tu initBuyModule dibuja banderas)
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (stores) {
        stores.hidden = false;
        stores.classList.add('show');
      }
    });
  });
});
