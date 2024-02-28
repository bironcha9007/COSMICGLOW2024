
// const { response } = require("express");
// const mercadopago = require("mercadopago");

// const mercadopago = require("mercadopago");



const modalOverlay = document.getElementById('modal-overlay');
const modalContainer = document.getElementById('modal-container');


const cartBtn = document.getElementById('cart-btn');
const cartBtn2 = document.getElementById('cart-btn2');
const cartCounter = document.getElementById('cart-counter');
const cartCounter2 = document.getElementById('cart-counter2');


function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{5})+(?!\d))/g, ".");
}
const displayCart = () => {
    modalContainer.innerHTML = "";
    modalOverlay.style.display = "block";
    modalContainer.style.display = "block";

    //Modal Header
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";



    const modalTitle = document.createElement("div");
    modalTitle.innerHTML = `TUS COMPRAS...</i>`
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);
    const modalClose = document.createElement("h2");
    modalClose.innerHTML = `<i class="fa-solid fa-x"></i>`;
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);
    modalContainer.append(modalHeader);

    modalClose.addEventListener('click', () => {
        modalOverlay.style.display = "none";
        modalContainer.style.display = "none";
    })

    //Modal body
    if (cart.length > 0) {
        cart.forEach((product) => {
            const modalBody = document.createElement("div");
            modalBody.className = "modal-body";
            modalBody.innerHTML = ` 
        <div class="product">
            <img src="${product.img}" class="product-img" alt="">
            <div class="product-info">
                <h4>${product.proName}</h4>
            
            <div class="quantity">
            <span class="quantity-btn-input">Unidades: </span>
                <span class="quantity-btn-decrease">-</span>
                <span class="quantity-btn-input">${product.quanty}</span>
                <span class="quantity-btn-increase">+</span>
            </div>
            <div class="price">
            <div class="price">Total: $${formatPrice(product.price * product.quanty)}<div class="price delete-product"><i class="fas fa-trash"></i></div></div>
            </div>
            </div>
        </div>`

            modalContainer.append(modalBody);
            const decrease = modalBody.querySelector('.quantity-btn-decrease');
            decrease.addEventListener('click', function () {
                if (product.quanty !== 1) {
                    product.quanty--;
                    displayCart();
                    displayCartCounter();
                }
            });
            const increase = modalBody.querySelector('.quantity-btn-increase');
            increase.addEventListener('click', function () {
                product.quanty++;
                displayCart();
                displayCartCounter();
            });

            //Delete
            const deleteProduct = modalBody.querySelector('.delete-product');
            deleteProduct.addEventListener('click', () => {
                deleteCartProduct(product.id);
            });

        });
        function formatPrice(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        //Modal footer
        const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footers";
        modalFooter.innerHTML = `
         <div class="total-price">Total: $${formatPrice(total)}</div>
    <button class="btn-primary" id="checkout-btn">Realizar Pedido</button>

    <button class="btn-primary cart-btn">Ir a Carrito</button>
   `;

        modalContainer.append(modalFooter);

        const cartButton = modalFooter.querySelector(".cart-btn");
        cartButton.addEventListener('click', () => navigateToCart());
        const checkoutButton = modalFooter.querySelector("#checkout-btn");

        checkoutButton.addEventListener('click', function () {
            // Obtén el resumen de los productos en el carrito
            const resumenPedido = cart.map(producto => `${producto.proName}: $${formatPrice(producto.price * producto.quanty)}  `).join('-');

            const mensajePedido = `¡Hola! Me gustaría realizar el pedido con los siguientes productos:${resumenPedido}Total Pedido: $${formatPrice(total)}`;
            const telefono = '+573214076057'; // Reemplaza con el número de teléfono deseado

            const mensajeURL = `https://wa.me/${telefono}/?text=${encodeURIComponent(mensajePedido)}`;

            // Abre el enlace de WhatsApp con el mensaje predefinido
            window.open(mensajeURL);
        });



    } else {
        const modalText = document.createElement("h2");
        modalText.className = "modal-body";
        modalText.innerHTML = `No tienes Articulos en tu Carrito!`
        modalContainer.append(modalText);
    }

    saveCartToStorage(cart);
};

cartBtn.addEventListener('click', displayCart);
cartBtn2.addEventListener('click', displayCart);
function navigateToCart() {
    window.location.href = "carro.html";
}

const deleteCartProduct = (id) => {
    const findId = cart.findIndex((element) => element.id === id);
    cart.splice(findId, 1);
    displayCart();
    displayCartCounter();
    displayCartCounter2();
}

function loadCartFromStorage() {
    const cartString = localStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : null;
}

function saveCartToStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const displayCartCounter = () => {
    const cartLenght = cart.reduce((suma, el) => suma + el.quanty, 0);
    if (cartLenght > 0) {
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLenght;
    } else {
        cartCounter.style.display = "none";
    }
}
const displayCartCounter2 = () => {
    const cartLenght = cart.reduce((suma, el) => suma + el.quanty, 0);
    if (cartLenght > 0) {
        cartCounter2.style.display = "block";
        cartCounter2.innerText = cartLenght;
    } else {
        cartCounter2.style.display = "none";
    }
}

cartBtn.addEventListener('click', function () {
    displayCart();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
cartBtn2.addEventListener('click', function () {
    displayCart();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


