let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

window.onload = function () {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  if (cartItems && totalEl) {
    let total = 0;
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
      total += item.price;
    });
    totalEl.innerText = total;
  }
};
