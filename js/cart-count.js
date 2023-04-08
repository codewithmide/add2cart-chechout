// Get cart from localStorage or initialize empty array
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add event listener to all "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function(button) {
  var name = button.parentNode.querySelector(".product-name").innerText;
  
  if (cart.some(function(product) { return product.name === name; })) {
    button.disabled = true;
    button.innerText = "Added to Cart";
  }

  button.addEventListener("click", function() {
    // Get current count from the badge
    var count = parseInt(document.getElementById("cart-count").innerHTML);

    // Increment count
    count++;

    // Update badge with new count
    document.getElementById("cart-count").innerHTML = count;

    // Disable button
    button.disabled = true;
    button.innerText = "Added to Cart";

    // Get product information
    var description = button.parentNode.querySelector(".product-description").innerText;
    var price = button.parentNode.querySelector(".product-price").innerText;
    var image = button.parentNode.querySelector(".product-image").getAttribute("src");

    // Add product to cart
    cart.push({
      name: name,
      description: description,
      price: price,
      image: image
    });

    // Store cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  });
});

// Update cart count
document.getElementById("cart-count").innerHTML = cart.length;

// Display cart items
var cartItemsContainer = document.getElementById("cart-items-container");
cart.forEach(function(product) {
  var itemContainer = document.createElement("div");
  itemContainer.classList.add("cart-item");

  var name = document.createElement("div");
  name.classList.add("product-name");
  name.innerText = product.name;
  itemContainer.appendChild(name);

  var image = document.createElement("img");
  image.classList.add("product-image");
  image.setAttribute("src", product.image);
  itemContainer.appendChild(image);

  var description = document.createElement("div");
  description.classList.add("product-description");
  description.innerText = product.description;
  itemContainer.appendChild(description);

  var price = document.createElement("div");
  price.classList.add("product-price");
  price.innerText = product.price;
  itemContainer.appendChild(price);

  cartItemsContainer.appendChild(itemContainer);
});
