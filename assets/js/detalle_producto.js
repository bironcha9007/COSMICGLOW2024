
// Función para dar formato al precio
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Obtiene el carrito almacenado en localStorage o inicializa uno nuevo
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Elementos del DOM
const proDetalleCont = document.getElementById('pro-detalle');
const proListContainer = document.getElementById('pro-list-container');

// Obtiene el ID del producto desde la URL
const productId = obtenerProductIdDesdeURL();

// Filtra el producto correspondiente
const selectedProduct = products.find(product => product.id === parseInt(productId));

let showcaseImg;

if (selectedProduct) {
    const proDetalle = document.createElement("div");
    proDetalle.className = "pro";

    const showcaseContainer = document.createElement("div");
    showcaseContainer.className = "showcase";

    const showcaseBanner = document.createElement("div");
    showcaseBanner.className = "showcase-banner";

    // Imagen principal
    showcaseImg = document.createElement("img");
    showcaseImg.src = selectedProduct.img2;
    showcaseImg.alt = selectedProduct.title;
    showcaseBanner.appendChild(showcaseImg);

    // Contenedor para miniaturas
    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.className = "thumbnail-container";

    // Crear miniaturas
    selectedProduct.thumbnails.forEach((thumbnail, index) => {
        const thumbnailImg = document.createElement("img");
        thumbnailImg.src = thumbnail;
        thumbnailImg.alt = `Thumbnail ${index + 1}`;
        thumbnailImg.className = "thumbnail-img";
        thumbnailImg.addEventListener('click', () => changeImage(thumbnail));

        thumbnailContainer.appendChild(thumbnailImg);
    });

    showcaseBanner.appendChild(thumbnailContainer);
    showcaseContainer.appendChild(showcaseBanner);

    const showcaseContent = document.createElement("div");
    showcaseContent.className = "showcase-content";

    const showcaseTitle = document.createElement("h5");
    showcaseTitle.className = "showcase-title";
    showcaseTitle.innerText = selectedProduct.title;

    const showcaseDesc = document.createElement("h4");
    showcaseDesc.className = "showcase-desc";
    showcaseDesc.innerText = selectedProduct.description;

    const category = document.createElement("h6");
    category.innerText = `- Categoria: ${(selectedProduct.category)}`;
    category.style.cursor = 'pointer';
    category.addEventListener('click', function () {
        navigateToCategory(selectedProduct.category);
    });
    showcaseDesc.appendChild(category);

    const priceBox = document.createElement("div");
    priceBox.className = "price-box";
    const price = document.createElement("h4");
    price.innerText = `$${formatPrice(selectedProduct.price)}`;

    priceBox.appendChild(price);

    const buyBtn = document.createElement("button");
    buyBtn.innerHTML = '<h6>Añadir al carrito </h6>';
    buyBtn.addEventListener('click', function () {
        addToCart(selectedProduct);
    });

    showcaseContent.appendChild(showcaseTitle);
    showcaseContent.appendChild(showcaseDesc);
    showcaseContent.appendChild(priceBox);
    showcaseContent.appendChild(buyBtn);

    showcaseContainer.appendChild(showcaseContent);

    proDetalle.appendChild(showcaseContainer);
    proDetalleCont.appendChild(proDetalle);

    // Filtra y muestra la lista de productos con la misma categoría
    const productsSameCategory = products.filter(product => product.category === selectedProduct.category && product.id !== selectedProduct.id);
    displayProductsSameCategory(productsSameCategory);
}

// Función para mostrar productos de la misma categoría
function displayProductsSameCategory(products) {
    const filteredProducts = products.filter(product => product.quanty > 0); // Filtrar productos con quanty > 0

    filteredProducts.forEach(product => {
        const pro = document.createElement("div");
        pro.className = "proc";

        pro.innerHTML = `
                <img src="${product.img2}" alt="">
                <div class="info">
                    <h5>${product.title}</h5>
                    <h4>$ ${formatPrice(product.price)}</h4>
                    <h6 class="category-link">${product.category}</h6>
                </div>`;

        const detailLink = document.createElement("a");
        detailLink.className = "showcase-actions";
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
        proListContainer.append(pro);

        // Evento click para agregar al carrito
        buyBtn.addEventListener('click', function () {
            addToCart(product);
        });

        // Evento click para redirigir a la página de la categoría
        const categoryLink = pro.querySelector('.category-link');
        categoryLink.style.cursor = 'pointer';
        categoryLink.addEventListener('click', function () {
            navigateToCategory(product.category);
        });
    });


}

// Función para obtener el ID del producto desde la URL
function obtenerProductIdDesdeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Función para agregar un producto al carrito
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
            quanty: product.quanty,
            price: product.price,

        });
    }

    // Actualiza el carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Envía un mensaje a la ventana principal para que actualice los contadores
    window.postMessage({ type: 'updateCart' }, '*');
}

// Función para cambiar la imagen principal
function changeImage(newImage) {
    showcaseImg.src = newImage;
}

// Función para redirigir a la página de la categoría seleccionada
function navigateToCategory(category) {
    window.location.href = `categorias.html?category=${category}`;
}

// Función para mostrar los contadores del carrito
function displayCartCounters() {
    const cartCounter = document.getElementById('cart-counter');
    const cartCounter2 = document.getElementById('cart-counter2');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartLength = cart.reduce((suma, el) => suma + el.quanty, 0);

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

// Escucha mensajes de la ventana principal
window.addEventListener('message', function (event) {
    if (event.data.type === 'updateCounters' || event.data.type === 'updateCart') {
        // Lógica para actualizar los contadores en detalle_producto.html

        displayCartCounters();
    }
})

// Mostrar los contadores del carrito al cargar la página
displayCartCounters();

