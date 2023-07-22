import { printCards } from "./createCards.js"

// cards dinamicas
const cardContainer = document.querySelector(".contenedor-tarjeta");
printCards(products.mangas, cardContainer)

// icono desplazable 

const iconoCompraContainer = document.getElementById('icono-compra-container');
const carrito = document.getElementById('panel-carrito');
let carritoVisible = false;

iconoCompraContainer.addEventListener('click', (event) => {
  event.stopPropagation(); // Evita que el evento se propague al documento y cierre el panel
  if (!carritoVisible) {
    carrito.style.right = '0';
    carritoVisible = true;
  } else {
    carrito.style.right = '-300px';
    carritoVisible = false;
  }
});

document.addEventListener('click', (event) => {
  if (carritoVisible && !event.target.closest('#panel-carrito')) {
    carrito.style.right = '-500px';
    carritoVisible = false;
  }
});