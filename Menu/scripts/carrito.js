let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';

  let subtotal = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item cart-item d-flex justify-content-between align-items-center';

    const itemInfo = document.createElement('div');
    itemInfo.innerHTML = `<span class="fw-bold">${item.name}</span><br>
                                     <small class="text-muted">$${item.price} x ${item.quantity}</small>`;

    const itemTotal = document.createElement('span');
    itemTotal.className = 'fw-bold';
    itemTotal.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-sm btn-outline-danger';
    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
    removeBtn.onclick = () => removeFromCart(item.name);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    const minusBtn = document.createElement('button');
    minusBtn.className = 'btn btn-sm btn-outline-secondary';
    minusBtn.innerHTML = '<i class="fas fa-minus"></i>';
    minusBtn.onclick = () => updateQuantity(item.name, -1);

    const plusBtn = document.createElement('button');
    plusBtn.className = 'btn btn-sm btn-outline-secondary';
    plusBtn.innerHTML = '<i class="fas fa-plus"></i>';
    plusBtn.onclick = () => updateQuantity(item.name, 1);

    btnGroup.appendChild(minusBtn);
    btnGroup.appendChild(plusBtn);

    li.appendChild(itemInfo);
    li.appendChild(itemTotal);
    li.appendChild(btnGroup);
    li.appendChild(removeBtn);

    cartList.appendChild(li);

    subtotal += item.price * item.quantity;
  });

  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

function updateQuantity(name, change) {
  const item = cart.find(item => item.name === name);
  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(name);
    } else {
      updateCart();
    }
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');

  if (sidebar.classList.contains('show')) {
    // Ocultar: quitar show, esperar transición, agregar hide
    sidebar.classList.remove('show');
    setTimeout(() => {
      sidebar.classList.add('hide');
    }, 300); // mismo tiempo que la transición CSS
  } else {
    // Mostrar: quitar hide y agregar show
    sidebar.classList.remove('hide');
    // Pequeño delay opcional para asegurar que el navegador renderice el cambio de display
    setTimeout(() => {
      sidebar.classList.add('show');
    }, 10);
  }
}

function sendToWhatsApp() {
  if (cart.length === 0) {
    return;
  }

  let message = 'Hello! I would like to order:\n\n';

  cart.forEach(item => {
    message += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  message += `\nSubtotal: $${subtotal.toFixed(2)}\n`;
  message += `Tax (10%): $${tax.toFixed(2)}\n`;
  message += `Total: $${total.toFixed(2)}\n\n`;
  message += 'Thank you!';

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/50662196744?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}