function createCard(product) {
    return `
    <article class="tarjeta">
      <img 
        class="producto-img"
        src="../images/${product.img}" 
        alt="${product.name}" 
      />
      <div class="producto-descripcion">
        <h2 class="producto-titulo">
          ${product.name}
        </h2>
        <div class="producto-compra">
          <p class="producto-precio">
            $${product.price}
          </p>
          <button class="producto-boton">
            Añadir al carrito
          </button>
        </div> 
      </div>
    </article>
  `
}

export function printCards(products, container) {
    let template = "";

    for (let product of products) {
        template += createCard(product)
    }

    container.innerHTML += template
}