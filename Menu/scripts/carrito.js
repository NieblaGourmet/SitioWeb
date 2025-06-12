// Usamos Bootstrap para los modales y estilo general
let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
  showNotification("Producto agregado");
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `<span>${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)}</span>`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-sm btn-danger";
    removeBtn.textContent = "x";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      renderCart();
      showNotification("Producto eliminado");
    };

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("El carrito está vacío. Agrega productos antes de enviar el pedido.");
    return;
  }

  const message = cart
    .map(item => `- ${item.name} (x${item.quantity}): $${(item.price * item.quantity).toFixed(2)}`)
    .join("\n");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const fullMessage = `Hola! Me gustaría ordenar:\n${message}\nTotal: $${total.toFixed(2)}`;

  const phoneNumber = "50662196744"; // Número de WhatsApp
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(fullMessage)}`;
  window.open(url, "_blank");
}

function filterMenu() {
  const category = document.getElementById('category').value;
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartToggle = document.getElementById('cartToggle');
  cartSidebar.classList.toggle('open');
  cartToggle.classList.toggle('hidden');
}
