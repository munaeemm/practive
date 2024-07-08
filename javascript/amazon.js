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

products.forEach((item) => {
let html = ` <div class="product">
<img class="product-image" src="${item.image}" alt="Product 1">
<h3 class="product-name">${item.name}</h3>
<p class="price">$ ${(item.price/100).toFixed(2)}</p>
<input type="number" value="1" min="1" max="99" class="product-quantity-box" data-item-quantity = {this.value}>
<button class="button-add-to-cart" data-item-name = "${item.name}">Add to Cart</button>
</div> `;
applyHTML += html;
});

function displayProduct () {

    document.querySelector('.products-container').innerHTML = applyHTML;

}

displayProduct();

document.querySelectorAll('.button-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {

        const productName = button.dataset.itemName;
        let duplicateItem;

        cart.forEach((item) => {
            if (productName === item.productName) {

                duplicateItem = item;

                console.log(`Duplicate item found: ${item.productName}`);
            }
        });

        cart.push ({
            inCartProductName: productName,
            inCartQuantity:1
        });
console.log(cart);
    });
});


