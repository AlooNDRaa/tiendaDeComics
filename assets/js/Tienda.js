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


// Comienzo de agregar productos al carrito//

/*/const addToShoppingCardButtons = document.querySelectorAll('Button')
addToShoppingCardButtons.forEach(addToCardButton => {
  addToCardButton.addEventListener('click', addToCardClicked)
})

function addToCardClicked(event){
  const button = event.target;
  const Card = button.closest('.card');


  const CardTitle = Card.querySelector('.card-title').textContent;
  const CardPrice = Card.querySelector('.card-price').textContent;
  const CardImage = Card.querySelector('.card-img').src;
  console.log('addToCardClicked -> CardTitle',
  CardTitle,
  CardPrice,
  CardImage)


addCardToShoppingCart(CardTitle, CardPrice, CardImage);
}

function addCardToShoppingCart(CardTitle, CardPrice, CardImage) {
 const ShoppingCartRow = document.createElement('div')
 const ShoppingCartContent = `
 <div class="card">
  <div class="image-container">
  <img src=${CardImage} 
    alt="Jujutsu-kaisen #8"
    class="card-img">
  </div>
  <h4 class="card-title">
    ${CardTitle}
  </h4>
  <div class="prices">
    <span class="before-price" id="before-price">$4.000</span>
    <span class="card-price" id="price">${CardPrice}</span>
  </div>
  <div class="btnn" id="buttn">
  <button class="card-button">
    Añadir al carrito
  </button>
  </div>
</div>
 `

 ShoppingCart.innerHTML = ShoppingCartContent
 ShoppingCartCardsconatiner.append(ShoppingCartRow)
}/*/

