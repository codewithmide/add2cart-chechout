// Get cart from localStorage or initialize empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display items in cart
let cartItems = document.getElementById("cart-items");
let cartTotal = 0;
cart.forEach(function(item) {
  let row = document.createElement("div");
  row.classList.add("row", "mb-3", "position-relative");

  let imageCell = document.createElement("div");
  imageCell.classList.add("col-md-2");
  let image = document.createElement("img");
  image.src = item.image;
  image.classList.add("img-fluid");
  imageCell.appendChild(image);

  let detailsCell = document.createElement("div");
  detailsCell.classList.add("col-md-10");
  let name = document.createElement("h3");
  name.innerText = item.name;
  let description = document.createElement("p");
  description.innerText = item.description;
  let price = document.createElement("h5");
  price.innerText = "$" + item.price;
  detailsCell.appendChild(name);
  detailsCell.appendChild(description);
  detailsCell.appendChild(price);

  // Create cancel button and add event listener to remove item
  let cancelButton = document.createElement("button");
  cancelButton.classList.add("btn", "btn-danger", "position-absolute", "bottom-0", "end-0", "p-2");
  cancelButton.innerHTML = 'Remove';
  cancelButton.style.padding = "0";
  cancelButton.style.width = "auto";
  cancelButton.addEventListener('click', function() {
    removeItemFromCart(item);
    row.remove();
  });
  row.appendChild(cancelButton);  

  row.appendChild(imageCell);
  row.appendChild(detailsCell);
  cartItems.appendChild(row);

  // Add <hr> between items
  cartItems.appendChild(document.createElement("hr"));

  cartTotal += parseFloat(item.price);
});

// Display cart total
document.getElementById("cart-total").innerText = "$" + cartTotal.toFixed(2);

// Remove item from cart
function removeItemFromCart(item) {
  let index = cart.findIndex(function(cartItem) {
    return cartItem.id === item.id;
  });
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    cartTotal -= parseFloat(item.price); // update cart total
    document.getElementById("cart-total").innerText = "$" + cartTotal.toFixed(2); // update total display
  }
}
