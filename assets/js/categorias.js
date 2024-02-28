// Función para dar formato al precio
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Array que representa el carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Contenedor de productos en la página principal
const proContainer = document.getElementById('pro-container');

// Obtener la categoría seleccionada de la URL
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category');

// Elemento select para filtrar por categoría
const categorySelect = document.getElementById('category-select');
categorySelect.value = selectedCategory; // Establecer el valor del select según la categoría seleccionada en la URL

// Mostrar los productos de la categoría seleccionada inicialmente
displayProducts(selectedCategory);

categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    displayProducts(selectedCategory);
});

function displayProducts(category) {
    proContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar productos

    products.forEach(function (product) {
        if (category === 'todos' || product.category === category) {
            // Verifica si el producto tiene cantidad mayor que cero
            if (product.quanty > 0) {
                // Crea la estructura HTML para mostrar el producto
                const pro = document.createElement("div");
                pro.className = "pro";

                const detailLink = document.createElement("a");
                detailLink.className = "showcase-actions";

                pro.innerHTML = `
                    <img src="${product.img2}" alt="">
                    <div class="info">
                        <h5>${product.title}</h5>
                        <h4>$ ${formatPrice(product.price)}</h4>
                        <h6>${product.category}</h6>
                    </div>`;

                detailLink.href = `detalle_producto.html?id=${product.id}`;
                detailLink.innerHTML = `
                    <button class="btn-action eye-icon">
                        <ion-icon name="eye-outline"></ion-icon>
                    </button>`;

                const buyBtn = document.createElement("button");
                buyBtn.innerHTML = `
                    <ion-icon name="cart-outline" aria-hidden="true" aria-live="polite" class="iconcart"></ion-icon>
                `;

                const buttonContainer = document.createElement("div");
                buttonContainer.className = "button-container";
                buttonContainer.appendChild(detailLink);
                buttonContainer.appendChild(buyBtn);

                pro.appendChild(buttonContainer);
                proContainer.append(pro);

                // Evento click para agregar al carrito
                buyBtn.addEventListener('click', function () {
                    addToCart(product);
                });
            }
        }
    });
}

function addToCart(product) {
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
    if (repeat) {
        cart.map((prod) => {
            if (prod.id === product.id) {
                prod.quanty++;
                displayCartCounters();
            }
        });
    } else {
        cart.push({
            id: product.id,
            proName: product.title,

            img: product.img,
            quanty: product.quanty,
            price: product.price,
        });
        displayCartCounters();
    }

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartCounters();
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
