// cards dinámicas
const cardContainer = document.querySelector(".contenedor-tarjeta");

function createCard(comic) {
  return `
    <article class="tarjeta">
      <img 
        class="comic-img"
        src="../images/comics/${comic.img}" 
        alt="${comic.name}" 
      />
      <div class="comic-descripcion">
        <h2 class="comic-titulo">
          ${comic.name}
        </h2>
        <div class="comic-compra">
          <p class="comic-precio">
            $${comic.price}
          </p>
          <button class="comic-boton">
            Añadir al carrito
          </button>
        </div> 
      </div>
    </article>
  `
}

function printCards(comics) {
  let template = "";

  for(let comic of comics) {
    template += createCard(comic)
  }

  cardContainer.innerHTML += template
}

printCards(products.comics)

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