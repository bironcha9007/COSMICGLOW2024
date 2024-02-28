const orderSummary = document.getElementById('order-summary');
const productList = document.getElementById('product-list');
const customerInfoForm = document.getElementById('customer-info-form');
const checkoutBtnContainer = document.getElementById('checkout-btn-container');

// Función para dar formato al precio
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Cargar los detalles del pedido
function loadOrderDetails(cart) {
    orderSummary.innerHTML = ''; // Limpiar el resumen del pedido

    if (cart.length > 0) {
        const total = cart.reduce((total, product) => total + (product.price * product.quanty), 0);
        orderSummary.innerHTML = `
                <p>Total de productos: ${cart.length}</p>
                <p>Total a pagar: $${formatPrice(total)}</p>
            `;
    } else {
        orderSummary.innerHTML = '<p>No hay productos en el carrito.</p>';
    }
}

// Mostrar la lista de productos en el carrito
function displayCartProducts(cart) {
    productList.innerHTML = ''; // Limpiar la lista de productos

    cart.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
                <div class="product-cont">
                    <img src="${product.img}" alt="${product.proName}" class="product-imgs">
                </div>
                <div class="product-cont2">
                    <h3>${product.proName}</h3>
                    <p class="descrip">${product.description}</p> <!-- Agregar descripción -->
                    <p>Precio unitario: $${formatPrice(product.price)}</p>
                    
                    <div class="quantity">
                        <button class="quantity-btn decrease-btn">-</button>
                        <span class="quantity-value">${product.quanty}</span>
                        <button class="quantity-btn increase-btn">+</button>
                    </div>
                    <p>Total: $${formatPrice(product.price * product.quanty)}</p>
                    <button class="remove-btn">Eliminar del Carrito</button>
                </div>
            `;

        // Agregar eventos para aumentar/disminuir la cantidad y eliminar productos
        const decreaseBtn = productItem.querySelector('.decrease-btn');
        const increaseBtn = productItem.querySelector('.increase-btn');
        const removeBtn = productItem.querySelector('.remove-btn');

        decreaseBtn.addEventListener('click', () => {
            if (product.quanty > 1) {
                product.quanty--;
                updateCart(cart);
            }
        });

        increaseBtn.addEventListener('click', () => {
            product.quanty++;
            updateCart(cart);
        });

        removeBtn.addEventListener('click', () => {
            deleteProductFromCart(product.id, cart);
        });

        productList.appendChild(productItem);
    });
}

// Actualizar el carrito en el almacenamiento local
function updateCart(cart) {
    // Actualizar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
    // Actualizar los contadores del carrito
    displayCartCounters(cart);
    // Cargar nuevamente los detalles del pedido
    loadOrderDetails(cart);
    // Mostrar los productos actualizados en el carrito
    displayCartProducts(cart);
}

// Recopilar información del cliente y manejar el proceso de pago
function handleCheckout(cart) {
    const customerName = customerInfoForm.querySelector('#customer-name').value;
    const customerEmail = customerInfoForm.querySelector('#customer-email').value;
    const paymentMethod = customerInfoForm.querySelector('#payment-method').value;
    const deliveryMethod = customerInfoForm.querySelector('#delivery-method').value;

    // Aquí puedes enviar la información del pedido y del cliente a tu backend para procesar el pago y completar la orden

    // Por ahora, simplemente mostraremos un mensaje de confirmación
    alert('¡Pedido confirmado! Gracias por su compra.');
    // Limpia el carrito después de completar el pedido
    localStorage.removeItem('cart');
    updateCart([]);
}

// Cargar el carrito desde el almacenamiento local
let cart = JSON.parse(localStorage.getItem('cart')) || [];
displayCartProducts(cart);
loadOrderDetails(cart);

// Agregar evento al botón de realizar pedido
checkoutBtnContainer.innerHTML = `
        <button id="checkout-btn" class="btn-primary3">Realizar Pedido</button>
    `;
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', () => handleCheckout(cart));

function addToCart(product) {
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
    if (repeat) {
        cart.map((prod) => {
            if (prod.id === product.id) {
                prod.quanty++;
            }
        });
    } else {
        cart.push({
            id: product.id,
            proName: product.title,
            img: product.img,
            quanty: 1, // Se agrega un producto nuevo con cantidad 1
            price: product.price,
            description: product.description, // Agregar la descripción del producto
        });
    }

    updateCart(cart);
}

function displayCartCounters() {
    // Obtén los elementos HTML de los contadores en detalle_producto.html
    const cartCounter = document.getElementById('cart-counter');
    const cartCounter2 = document.getElementById('cart-counter2');

    // Calcula la cantidad total de productos en el carrito
    const cartLength = cart.reduce((suma, el) => suma + el.quanty, 0);

    // Muestra u oculta los contadores según la cantidad de productos en el carrito
    if (cartLength > 0) {
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;
        cartCounter2.style.display = "block";
        cartCounter2.innerText = cartLength;
    } else {
        cartCounter.style.display = "none";
        cartCounter2.style.display = "none";
    }
}

// Función para eliminar productos del carrito
function deleteProductFromCart(productId, cart) {
    const index = cart.findIndex((element) => element.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart(cart);
    }
}

function handleCheckout(cart) {
    const resumenPedido = cart.map(producto => `${producto.proName}: $${formatPrice(producto.price * producto.quanty)}  `).join('-');
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
    const mensajePedido = `¡Hola! Me gustaría realizar el pedido con los siguientes productos:${resumenPedido}Total Pedido: $${formatPrice(total)}`;
    const telefono = '+573214076057';
    const mensajeURL = `https://wa.me/${telefono}/?text=${encodeURIComponent(mensajePedido)}`;
    window.open(mensajeURL);
}

function navigateToProductDetail(productId) {
    // Redireccionar a la página de detalle del producto con el ID proporcionado
    window.location.href = `detalle_producto.html?id=${productId}`;
}
