import { addToCart, updateCartCount } from "./cart.js";

// Define an array of products, each product is an object with image, name, and price properties
export const products = [
    {
        id: "01",
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 1',
        price: 2800, // Price in cents
    },
    {
        id: "02",
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 2',
        price: 570,
    },
    {
        id: "03",
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 3',
        price: 6580,
    },
    {
        id: "04",
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 4',
        price: 4790,
    },
    {
        id: "05",
        image: 'images/RX101_Black_FRONT.jpg',
        name: 'product 5',
        price: 1847,
    },
];

// Function to display the products on the webpage
function displayProducts() {
    // Initialize an empty string to store the HTML for all products
    let applyHTML = '';

    // Loop through each product in the products array
    products.forEach((item) => {
        // Create a string of HTML for the current product using template literals
        let html = ` <div class="product">
        <img class="product-image" src="${item.image}" alt="${item.name}">
        <h3 class="product-name">${item.name}</h3>
        <p class="price">$ ${(item.price / 100).toFixed(2)}</p> <!-- Convert price to dollars and format to 2 decimal places -->
        <input type="number" value="1" min="1" max="99" class="product-quantity-box" data-item-quantity="{this.value}">
        <button class="button-add-to-cart" data-item-ide="${item.id}">Add to Cart</button>
        </div> `;
        // Append the current product's HTML to applyHTML
        applyHTML += html;
    });

    // Find the element with class 'products-container'
    const productsContainer = document.querySelector('.products-container');
    // Check if the element exists before trying to set its innerHTML
    if (productsContainer) {
        // Set the inner HTML of the element with class 'products-container' to applyHTML
        productsContainer.innerHTML = applyHTML;

        // Add event listeners to all 'Add to Cart' buttons
        document.querySelectorAll('.button-add-to-cart').forEach((button) => {
            button.addEventListener('click', () => {
                // Get the id of the product from the button's data attribute
                const productID = button.dataset.itemIde;        
                addToCart(productID);
                updateCartCount();
            });
        });
    }
}

// Wait until the DOM content is fully loaded before running the displayProducts function
document.addEventListener('DOMContentLoaded', displayProducts);
