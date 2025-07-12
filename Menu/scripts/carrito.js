let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();

  // Mostrar Toast
  showToast(`${name}`);
}

function updateCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';

  let subtotal = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item cart-item';

    // Línea 1: Nombre
    const nameDiv = document.createElement('div');
    nameDiv.className = 'fw-bold mb-1';
    nameDiv.style = 'padding-left: 5px;';
    nameDiv.textContent = item.name;

    // Contenedor general tipo fila
    const rowContainer = document.createElement('div');
  
    // Contenedor izquierdo: texto
    const priceDiv = document.createElement('div');
    priceDiv.innerHTML = `$${item.price} x ${item.quantity} = <span class="fw-bold">$${(item.price * item.quantity).toFixed(2)}</span>`;

    // Contenedor derecho: botones
    const btnRow = document.createElement('div');

    // Botones pequeños
    const minusBtn = document.createElement('button');
    minusBtn.className = 'btn btn-sm btn-outline-secondary';
    minusBtn.innerHTML = '<i class="fas fa-minus"></i>';
    minusBtn.onclick = () => updateQuantity(item.name, -1);

    const plusBtn = document.createElement('button');
    plusBtn.className = 'btn btn-sm btn-outline-secondary';
    plusBtn.innerHTML = '<i class="fas fa-plus"></i>';
    plusBtn.onclick = () => updateQuantity(item.name, 1);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-sm btn-outline-danger';
    removeBtn.style = 'margin-left: 10px;';
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeBtn.onclick = () => removeFromCart(item.name);

    // Agregar botones
    btnRow.appendChild(minusBtn);
    btnRow.appendChild(plusBtn);
    btnRow.appendChild(removeBtn);

    // Agregar texto y botones al contenedor
    rowContainer.appendChild(priceDiv);
    rowContainer.appendChild(btnRow);

    li.appendChild(nameDiv);
    li.appendChild(priceDiv);
    li.appendChild(btnRow);

    cartList.appendChild(li);

    subtotal += item.price * item.quantity;
  });

  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  // Tabla para subtotal, tax y total + botón WhatsApp
  const summaryTable = `
    <table class="table table-bordered text-center mt-3 mb-0">
      <thead>
        <tr>
          <th>Subtotal</th>
          <th>Tax (13%)</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="subtotal">$${subtotal.toFixed(2)}</td>
          <td id="tax">$${tax.toFixed(2)}</td>
          <td id="total">$${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-success w-100" id="orderButton" onclick="sendToWhatsApp()">
      <i class="fab fa-whatsapp me-2"></i> Order via WhatsApp
    </button>
  `;

  // Reemplaza los valores en el DOM
  const summaryDiv = document.getElementById('cartSummary');
  if (summaryDiv) {
    summaryDiv.innerHTML = summaryTable;
  }

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
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  message += `\nSubtotal: $${subtotal.toFixed(2)}\n`;
  message += `Tax (13%): $${tax.toFixed(2)}\n`;
  message += `Total: $${total.toFixed(2)}\n\n`;
  message += 'Thank you!';

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/50662196744?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}

// Mostrar Toast
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast show position-fixed bottom-0 end-0 m-3 bg-success text-white px-3 py-2 rounded shadow';
  toast.style.zIndex = 9999;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}