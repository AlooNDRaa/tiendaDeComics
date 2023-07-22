// crearcardofer.js
function createCard(product) {
  return `
    <div class="card">
      <div class="image-container">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <h4>${product.name}</h4>
      <div class="prices">
        <span class="before-price">$${product.price}</span>
        <span class="price">$${product.price}</span>
      </div>
      <div class="btnn" id="buttn">
        <button>Añadir al carrito</button>
      </div>
    </div>
  `;
}

export function printCards(products, container) {
  let template = "";

  for (let product of products) {
    template += createCard(product);
  }

  container.innerHTML += template;
}
