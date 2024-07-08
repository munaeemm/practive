
const products = [
    {
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 2',
        price: 1000,
    },
    {
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 3',
        price: 1000,
    },
    {
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 4',
        price: 1000,
    },
];

let applyHTML = '';

products.forEach((product) => {
let html = ` <div class="product">
<img class="product-image" src="${product.image}" alt="Product 1">
<h3 class="product-name">${product.name}</h3>
<p class="price">$ ${(product.price/100).toFixed(2)}</p>
<input type="number" value="1" min="1" max="99" class="product-quantity-box">
<button>Add to Cart</button>
</div> `;
console.log(html);
applyHTML += html;
});

function displayProduct () {

    document.querySelector('.products-container').innerHTML = applyHTML;

}

displayProduct();
