// Función para dar formato al precio
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Array que representa el carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Contenedor de productos en la página principal
const proContainer = document.getElementById('pro-container');

// Elemento select para filtrar por categoría
const categorySelect = document.getElementById('category-select');
categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    displayProducts(selectedCategory);
});

document.addEventListener('DOMContentLoaded', function () {
    // Llamar a la función displayProducts con la categoría deseada (por ejemplo, 'todos' inicialmente)
    displayProducts('todos');
});

function displayProducts(category) {
    proContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar productos

    let filteredProducts = products.filter(product => product.quanty > 0);
    if (category !== 'todos') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    filteredProducts = shuffle(filteredProducts);
    const maxProductsToShow = 6;
    const productsToShow = filteredProducts.slice(0, maxProductsToShow);
    productsToShow.forEach(function (product) {
        // Crea la estructura HTML para mostrar el producto
        const pro = createProductElement(product, category);
        proContainer.appendChild(pro);
    });

    // Mostrar el botón "Ver todos" solo si hay más de 9 productos
    if (filteredProducts.length > maxProductsToShow) {
        displayShowAllButton(category, productsToShow.length, filteredProducts.length);
    }
}

function displayShowAllButton(category, displayedCount, totalCount) {
    const showAllButton = document.createElement("button");
    showAllButton.textContent = "Mostrar todos";
    showAllButton.addEventListener('click', function () {
        const buttonText = showAllButton.textContent;
        
        if (buttonText === "Mostrar todos") {
            showAllProducts(category, totalCount);
            
            showAllButton.textContent = "Ver menos";
        } else {
            displayProducts(category);
            
            showAllButton.textContent = "Mostrar todos";
        }
    });

    // Crear un div para contener el botón "Ver todos" y centrarlo horizontalmente
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-containers";
    buttonContainer.appendChild(showAllButton);

    proContainer.appendChild(buttonContainer);
}

function showAllProducts(category, totalCount) {
    proContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar productos

    let filteredProducts = products.filter(product => product.quanty > 0);
    if (category !== 'todos') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    filteredProducts.forEach(function (product) {
        // Crea la estructura HTML para mostrar el producto
        const pro = createProductElement(product, category);
        proContainer.appendChild(pro);
    });

    // Mostrar el botón "Ver menos"
    const showLessButton = document.createElement("button");
    showLessButton.textContent = "Ver menos";
    showLessButton.addEventListener('click', function () {
        const prodContainer = document.getElementById('prod'); // Obtener el contenedor con ID "prod"
        if (prodContainer) {
            prodContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        displayProducts(category);
    });

    // Crear un div para contener el botón "Ver menos" y centrarlo horizontalmente
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-containers";
    buttonContainer.appendChild(showLessButton);

    proContainer.appendChild(buttonContainer);
}

function createProductElement(product, category) {
    const pro = document.createElement("div");
    pro.className = "pro";

    const detailLink = document.createElement("a");
    detailLink.className = "showcase-actions";

    const categoryLink = document.createElement("span");
    categoryLink.className = "category-link";
    categoryLink.textContent = product.category;
    categoryLink.style.cursor = 'pointer';

    pro.innerHTML = `
        <img src="${product.img2}" alt="">
        <div class="info">
            <h5>${product.title}</h5>
            <h4>$ ${formatPrice(product.price)}</h4>
            <div class="category-container"></div> <!-- Mover este div dentro de info -->
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
    pro.querySelector('.category-container').appendChild(categoryLink); // Mover categoryLink dentro de category-container

    // Evento click para agregar al carrito
    buyBtn.addEventListener('click', function () {
        addToCart(product);
    });

    // Evento click para redirigir a la página de la categoría
    categoryLink.addEventListener('click', function() {
        navigateToCategory(product.category);
    });

    return pro;
}

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
            description: product.description, 
            img: product.img,
            quanty: 1, // Se agrega un producto nuevo con cantidad 1
            price: product.price,
        });
    }

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
    // Actualizar los contadores del carrito
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
