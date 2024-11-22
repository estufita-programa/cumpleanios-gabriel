//Contador main
function animateCounter(id, start, end, duration) {
  const element = document.getElementById(id);
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));

  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
      element.style.transform = "scale(1.1)"; // Efecto de escala al finalizar
      setTimeout(() => (element.style.transform = "scale(1)"), 200); // Vuelve al tamaño normal
    }
  }, stepTime);
}

// Inicia la animación cuando la página se carga
window.onload = function () {
  animateCounter("cont", 0, 22, 3500); // 100 clientes satisfechos en 2 segundos
};
