import {cart} from "./cart.js";
import {products} from './amazon.js';

cart.forEach((cartItem) => {

  const productID =cartItem.productID;
  `
  <div class="product">
  <hr style="border-top: 1px solid #ccc; width: 100%; margin: 20px 0;">
  <h3 class="product-name">Item 1</h3>
  <h3 class="inCartQuantity"> Quantity </h3>
  <p class="price">£4545</p> <!-- Convert price to dollars and format to 2 decimal places -->
  <button class="button-remove-from-cart" data-button-remove-item="${item.id}">Remove item</button>
  <hr style="border-top: 1px solid #ccc; width: 100%; margin: 20px 0;">
  </div> 
  <!-- Cart products will be dynamically generated here -->
</div>

  `

});

document.querySelector('.cart-products').innerHTML += '';
