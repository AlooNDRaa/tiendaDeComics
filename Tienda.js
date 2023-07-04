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




