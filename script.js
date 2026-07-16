let cartItems = [];

function updateCartCount() {
  const counts = document.querySelectorAll('.cartCount');
  counts.forEach(function (item) {
    item.textContent = cartItems.length;
  });
}

function addToCart(name, price) {
  cartItems.push({ name: name, price: price });
  updateCartCount();
  alert(name + ' added to cart');
  renderCart();
}

function renderCart() {
  const cartItemsElement = document.getElementById('cartItems');
  if (!cartItemsElement) return;

  if (cartItems.length === 0) {
    cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let html = '<ul>';
  let total = 0;

  cartItems.forEach(function (item, index) {
    total += item.price;
    html += '<li>';
    html += '<span>' + item.name + '</span>';
    html += '<span>MWK ' + item.price + ' <button class="button small" onclick="removeItem(' + index + ')">Remove</button></span>';
    html += '</li>';
  });

  html += '</ul>';
  html += '<p><strong>Total: MWK ' + total + '</strong></p>';
  cartItemsElement.innerHTML = html;
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCartCount();
  renderCart();
}

function handleSubscribe(event) {
  event.preventDefault();
  const message = document.getElementById('subscribeMessage');
  if (message) {
    message.textContent = 'Thank you for subscribing!';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateCartCount();
  renderCart();

  document.querySelectorAll('.addToCart').forEach(function (button) {
    button.addEventListener('click', function () {
      addToCart(button.getAttribute('data-name'), Number(button.getAttribute('data-price')));
    });
  });

  const subscribeForm = document.getElementById('subscribeForm');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', handleSubscribe);
  }

  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      nav.classList.toggle('open');
      menuButton.classList.toggle('open');
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
    });
  }
});
