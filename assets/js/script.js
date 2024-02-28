'use strict';
// Función para desplazar suavemente el contenedor showcase-wrapper hacia la izquierda




displayCartCounters();


// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
// Obtener referencias a elementos relevantes
const eyeIcons = document.querySelectorAll('.eye-icon');
const popupCloseIcon = document.querySelector('.popup-close');
const popupContainer = document.querySelector('.popup-container');
const popupProductImage = document.querySelector('.popup-product-img');

// Función para mostrar la ventana emergente con la imagen
function showProductPopup(event) {
  const productImg = event.target.closest('.showcase-banner').querySelector('.product-img');
  const imgSrc = productImg.getAttribute('src');
  
  popupProductImage.setAttribute('src', imgSrc);
  popupContainer.style.display = 'block';
}

// Función para ocultar la ventana emergente
function hideProductPopup() {
  popupContainer.style.display = 'none';
}

// Agregar evento de clic a cada icono de ojo para mostrar la ventana emergente
eyeIcons.forEach(icon => {
  icon.addEventListener('click', showProductPopup);
});

// Agregar evento de clic al icono de cerrar para ocultar la ventana emergente


  
const searchInput = document.getElementById('search-input');
const searchButton = document.querySelector('[data-search-button]');

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}



function searchAction() {
  const searchText = searchInput.value.trim().toLowerCase();
  
  // Filtrar productos por nombre
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchText));
  
  // Verificar si se encontraron resultados
  if (filteredProducts.length > 0) {
    // Redireccionar al detalle del primer producto encontrado
    const firstProduct = filteredProducts[0];
    window.location.href = `detalle_producto.html?id=${firstProduct.id}`;
  } else {
    // Mostrar un mensaje de que no se encontraron resultados
    alert('No se encontraron productos con ese nombre.');
  }
}

searchButton.addEventListener('click', searchAction);


function openNewWindow() {
  // URL a la que quieres dirigirte
  const url = '/pages/programacion/login-5/register.html';

  // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

  // Verifica si la ventana emergente se abrió correctamente
  if (newWindow) {
    // La ventana emergente se abrió con éxito
    newWindow.focus(); // Enfoca la nueva ventana
  } else {
    // Es posible que el navegador bloquee la apertura de ventanas emergentes
    alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
  }
}

function openNewWindow2() {
  // URL a la que quieres dirigirte
  const url = '/pages/programacion/cosmic-glow-shop/cosmic_cata.pdf';

  // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

  // Verifica si la ventana emergente se abrió correctamente
  if (newWindow) {
    // La ventana emergente se abrió con éxito
    newWindow.focus(); // Enfoca la nueva ventana
  } else {
    // Es posible que el navegador bloquee la apertura de ventanas emergentes
    alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
  }
}

function openNewWindow3() {
  // Mensaje que deseas agregar al final de la URL
  const mensaje = 'Me%20deseo%20comunicar%20con%20Cosmic%20Glow';

  // URL a la que quieres dirigirte
  const url = `https://wa.me/573214076057?text=${mensaje}`;

  // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

  // Verifica si la ventana emergente se abrió correctamente
  if (newWindow) {
    // La ventana emergente se abrió con éxito
    newWindow.focus(); // Enfoca la nueva ventana
  } else {
    // Es posible que el navegador bloquee la apertura de ventanas emergentes
    alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
  }
}


function displayCartCounters() {
  // Obtén los elementos HTML de los contadores en detalle_producto.html
  const cartCounter = document.getElementById('cart-counter');
  const cartCounter2 = document.getElementById('cart-counter2');

  // Obtén el carrito almacenado en localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

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

// Función para manejar el clic en los elementos del menú de categorías
// Función para redireccionar a la página de la categoría seleccionada
function navigateToCategory(category) {
  window.location.href = `categorias.html?category=${category}`;
}

// Agregar evento de clic a cada enlace de categoría si existe
const categoryEyes = document.getElementById('category-eyes');
if (categoryEyes) {
  categoryEyes.addEventListener('click', function () {
      navigateToCategory('Ojos');
  });
}

const categoryAccessories = document.getElementById('category-accessories');
if (categoryAccessories) {
  categoryAccessories.addEventListener('click', function () {
      navigateToCategory('Accesorios');
  });
}

const categoryBody = document.getElementById('category-body');
if (categoryBody) {
  categoryBody.addEventListener('click', function () {
      navigateToCategory('Corporal');
  });
}

const categorySkincare = document.getElementById('category-skincare');
if (categorySkincare) {
  categorySkincare.addEventListener('click', function () {
      navigateToCategory('Cuidado_Piel');
  });
}

const categoryBrochas = document.getElementById('category-brochas');
if (categoryBrochas) {
  categoryBrochas.addEventListener('click', function () {
      navigateToCategory('Brochas');
  });
}

const categoryLabios = document.getElementById('category-labios');
if (categoryLabios) {
  categoryLabios.addEventListener('click', function () {
      navigateToCategory('Labios');
  });
}

const categoryFacial = document.getElementById('category-facial');
if (categoryFacial) {
  categoryFacial.addEventListener('click', function () {
      navigateToCategory('Facial');
  });
}

// Función para manejar la navegación al detalle de un producto
function navigateToProductDetail(productId) {
  // Redireccionar a la página de detalle del producto con el ID proporcionado
  window.location.href = `detalle_producto.html?id=${productId}`;
}

// Obtener referencias a los elementos relevantes (debes asegurarte de tener los elementos correctos en tu HTML)
const productDetailLinks = document.querySelectorAll('.product-detail-link');

// Agregar evento de clic a cada enlace de detalle de producto
productDetailLinks.forEach(link => {
  link.addEventListener('click', function(event) {
      // Obtener el ID del producto desde el atributo de datos del elemento
      const productId = this.dataset.productId;
      
      // Navegar al detalle del producto utilizando la función
      navigateToProductDetail(productId);
      
      // Evitar que el evento de clic provoque la acción predeterminada (por ejemplo, seguir el enlace)
      event.preventDefault();
  })
})

