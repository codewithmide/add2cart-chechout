// Get cart from localStorage or initialize empty array
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display items in cart
var cartItems = document.getElementById("cart-items");
var cartTotal = 0;
cart.forEach(function(item) {
    var row = document.createElement("div");
    row.classList.add("row", "mb-3", "cart-item");

    var imageCell = document.createElement("div");
    imageCell.classList.add("col-md-2");
    var image = document.createElement("img");
    image.src = item.image;
    image.classList.add("img-fluid");
    imageCell.appendChild(image);

    var detailsCell = document.createElement("div");
    detailsCell.classList.add("col-md-10");
    var name = document.createElement("h3");
    name.innerText = item.name;
    var description = document.createElement("p");
    description.innerText = item.description;
    var price = document.createElement("h5");
    price.innerText = "$" + item.price;
    detailsCell.appendChild(name);
    detailsCell.appendChild(description);
    detailsCell.appendChild(price);

    row.appendChild(imageCell);
    row.appendChild(detailsCell);
    cartItems.appendChild(row);

    cartTotal += parseFloat(item.price);
});

// Display cart total
document.getElementById("cart-total").innerText = "$" + cartTotal.toFixed(2);
