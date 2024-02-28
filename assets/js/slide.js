document.addEventListener("DOMContentLoaded", function() {
    const showcaseWrapper = document.querySelector(".product-featured .showcase-wrapper");
    const showcaseContainers = document.querySelectorAll(".product-featured .showcase-container");
    let currentIndex = 0;
    let animationInterval;
  
    // Función para mostrar el siguiente contenedor
    function showNextContainer() {
      showcaseWrapper.scrollTo({
        left: showcaseContainers[currentIndex].offsetLeft,
        behavior: "smooth"
      });
      currentIndex = (currentIndex + 1) % showcaseContainers.length;
    }
  
    // Iniciar la animación cada 3 segundos
    animationInterval = setInterval(showNextContainer, 3000);
  
    // Detener la animación al interactuar con el showcase-wrapper
    showcaseWrapper.addEventListener("mouseenter", function() {
      clearInterval(animationInterval);
    });
  
    // Reanudar la animación al dejar de interactuar con el showcase-wrapper
    showcaseWrapper.addEventListener("mouseleave", function() {
      animationInterval = setInterval(showNextContainer, 3000);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const bannerContainer = document.querySelector(".banner .slider-container");
    const bannerItems = document.querySelectorAll(".banner .slider-item");
    let currentIndex = 0;
    let animationInterval;
  
    // Función para mostrar el siguiente ítem del banner
    function showNextItem() {
      bannerContainer.scrollTo({
        left: bannerItems[currentIndex].offsetLeft,
        behavior: "smooth"
      });
      currentIndex = (currentIndex + 1) % bannerItems.length;
    }
  
    // Iniciar la animación cada 3 segundos
    animationInterval = setInterval(showNextItem, 3000);
  
    // Detener la animación al interactuar con el contenedor del banner
    bannerContainer.addEventListener("mouseenter", function() {
      clearInterval(animationInterval);
    });
  
    // Reanudar la animación al dejar de interactuar con el contenedor del banner
    bannerContainer.addEventListener("mouseleave", function() {
      animationInterval = setInterval(showNextItem, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const blogContainer = document.querySelector(".blog .blog-container");
  const blogCards = document.querySelectorAll(".blog .blog-card");
  let currentIndex = 0;
  let animationInterval;

  // Función para mostrar el siguiente blog card
  function showNextBlogCard() {
    blogContainer.scrollTo({
      left: blogCards[currentIndex].offsetLeft,
      behavior: "smooth"
    });
    currentIndex = (currentIndex + 1) % blogCards.length;
  }

  // Iniciar la animación cada 3 segundos
  animationInterval = setInterval(showNextBlogCard, 3000);

  // Detener la animación al interactuar con el contenedor del blog
  blogContainer.addEventListener("mouseenter", function() {
    clearInterval(animationInterval);
  });

  // Reanudar la animación al dejar de interactuar con el contenedor del blog
  blogContainer.addEventListener("mouseleave", function() {
    animationInterval = setInterval(showNextBlogCard, 3000);
  });
});