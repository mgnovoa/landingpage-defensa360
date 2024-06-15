// scripts/scroll.js
function smoothScroll(event, targetId) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    const targetElement = document.querySelector(targetId); // Encuentra el elemento con el ID correspondiente
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
}
  