// flecha para arriba 
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// icono desplazable 

const iconoCompraContainer = document.getElementById('icono-compra-container');
const carrito = document.getElementById('panel-carrito');
let carritoVisible = false;

iconoCompraContainer.addEventListener('click', () => {
  if (!carritoVisible) {
    carrito.style.top = '100px'; // Ajusta la posición para mostrar el carrito debajo de la imagen
    carrito.style.height = '150px'; // Ajusta la altura del carrito
    carritoVisible = true;
  } else {
    carrito.style.top = '-200px'; // Oculta el carrito moviéndolo nuevamente hacia arriba
    carrito.style.height = '0';
    carritoVisible = false;
  }
});

