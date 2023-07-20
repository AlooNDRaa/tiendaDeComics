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
    carrito.style.right = '-50%';
    carritoVisible = false;
  }
});

document.addEventListener('click', (event) => {
  if (carritoVisible && !event.target.closest('#panel-carrito')) {
    carrito.style.right = '-50%';
    carritoVisible = false;
  }
});


//// Añadir a carrito por que si no funciona lloro

// Obtener referencia al botón "Añadir al carrito"
const addToCartButtons = document.querySelectorAll('.btnn button');
// Obtener referencia al div de display2
const display2Div = document.querySelector('.display2');
// Obtener referencia al elemento "valor-total"
const valorTotalElement = document.querySelector('.valor-total');
// Agregar evento click a cada botón "Añadir al carrito"
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// seguir cantidad de productos o lloro si no sirve
const cartItems = {};
let totalValue = 0;

function addToCart(event) {
  const card = event.target.closest('.card'); // Obtener la tarjeta padre del botón que presiono o lloro
  const productImage = card.querySelector('img').src; // Obtener la URL de la imagen del producto
  const productPrice = card.querySelector('.price').innerText; // Obtener el precio del producto

  // verificar y sumar si ya esta o lloro y me arranco los pelos
  const existingProduct = display2Div.querySelector(`.product-container img[src="${productImage}"]`);
  if (existingProduct) {
    // Si el producto ya existe, incrementar el contador en 1
    const counter = existingProduct.parentElement.querySelector('.counter');
    const currentCount = parseInt(counter.textContent);
    counter.textContent = currentCount + 1;
  } else {
    // Si el producto no existe, crear un nuevo contenedor para el producto
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');
    // Crear un elemento de imagen para la imagen del producto
    const productImageElement = document.createElement('img');
    productImageElement.src = productImage;
    productImageElement.classList.add('product-image');
    productContainer.appendChild(productImageElement);
    // Crear un elemento de precio para el precio del producto
    const productPriceElement = document.createElement('span');
    productPriceElement.textContent = productPrice;
    productContainer.appendChild(productPriceElement);
    // Crear un elemento de contador e inicializarlo en 1
    const counterElement = document.createElement('span');
    counterElement.classList.add('counter');
    counterElement.textContent = '1';
    productContainer.appendChild(counterElement);
    // Añadir el contenedor del producto al div de display2
    display2Div.appendChild(productContainer);
  }

  // Actualizar el valor total - analiza el argumento el parse y lo devuelve XD
  totalValue += parseFloat(productPrice.slice(1)); // Convertir el precio a número y sumarlo al totalValue
  valorTotalElement.textContent = `$${totalValue.toFixed(2)}`; // Mostrar el totalValue con dos decimales
}


/// vaciar el carrito y precio
const vaciarCarritoButton = document.querySelector('.borrar-compra');
vaciarCarritoButton.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
  // Vaciar el objeto cartItems
  for (const key in cartItems) {
    delete cartItems[key];
  }
  // Vaciar el contenido del div de display2
  display2Div.innerHTML = '';
  // Limpiar el valor total
  totalValue = 0;
  // Actualizar el contenido del elemento "valor-total" a vacío
  valorTotalElement.textContent = '';
}





