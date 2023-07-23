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
    carrito.style.right = '-100%';
    carritoVisible = false;
  }
});


// Añadir a carrito por que si no funciona lloro

// Obtener referencia al botón "Añadir al carrito"
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = productosDesdeAPI[index]; // Obtener el producto correspondiente desde la lista de productos
    addToCart(product);
  });
});

// seguir cantidad de productos o lloro si no sirve
const cartItems = {};
let totalValue = 0;

function addToCart(product) {
  // verificar y sumar si ya esta o agregar un nuevo producto al carrito
  const existingProduct = display2Div.querySelector(`.product-container img [src="${product.img}"]`);
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
    productImageElement.src = product.img;
    productImageElement.classList.add('product-image');
    productContainer.appendChild(productImageElement);
    // Crear un elemento de precio para el precio del producto
    const productPriceElement = document.createElement('span');
    productPriceElement.textContent = `$${product.price.toFixed(2)}`;
    productContainer.appendChild(productPriceElement);
    // Crear un elemento de contador e inicializarlo en 1
    const counterElement = document.createElement('span');
    counterElement.classList.add('counter');
    counterElement.textContent = '1';
    productContainer.appendChild(counterElement);
    // Añadir el contenedor del producto al div de display2
    display2Div.appendChild(productContainer);
  }

  addToCart();

  // Actualizar el valor total
  totalValue += product.price; // Sumar el precio al totalValue
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


