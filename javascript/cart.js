const cart = [];

function updateCartCount () {

  let totalItems = 0;

  cart.forEach ((item) => {

    totalItems = totalItems + item.inCartQuantity;

  });

  document.querySelector('.header-cart-count').innerHTML = totalItems;
  
}

export function addToCart(productID) {

  let duplicateItem;

  // Check if the product is already in the cart
  cart.forEach((item) => {
      if (productID === item.inCartProductID) {
          // If a duplicate is found, store it in duplicateItem
          duplicateItem = item;
      }
  });

  if (duplicateItem) {

      duplicateItem.inCartQuantity++;

  } else {

      cart.push({
          inCartProductID: productID,
          inCartQuantity: 1
      });

      console.log(cart);

  }

}