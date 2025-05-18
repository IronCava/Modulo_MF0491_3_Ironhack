// Espera a que toda la página (HTML, imágenes, estilos, etc.) esté completamente cargada
window.addEventListener("load", function () {

    // Ejecuta una función después de un pequeño retraso (en este caso, 1000 milisegundos = 1 segundo)
    setTimeout(function () {

        // Selecciona el elemento con la clase .preloader y le añade la clase 'hidden'
        // Esto activa el CSS que oculta el preloader con una transición suave
        document.querySelector(".preloader").classList.add("hidden");

    }, 1000); // Tiempo de espera en milisegundos antes de ocultar el preloader (ajustable)
});


//------------------JS para controlar el slider ------------------------------//
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  // Función para mostrar slide por índice
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  // Eventos de flechas
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Eventos en los dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      currentIndex = index;
      showSlide(currentIndex);
    });
  });
});

//------------------JS para animacion valores------------------------------//

// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Selecciona todos los elementos con la clase .value-item (CALIDAD, COMPROMISO, GARANTÍA)
    const items = document.querySelectorAll(".value-item");
  
    // Crea un nuevo observador de intersección para detectar cuándo un elemento entra en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Verifica si el elemento está siendo visible en la pantalla (intersectando)
          if (entry.isIntersecting) {
  
            // Obtiene la posición del elemento actual dentro de la lista de items
            const index = Array.from(items).indexOf(entry.target);
  
            // Aplica un retardo progresivo basado en su posición (para efecto escalonado)
            setTimeout(() => {
              // Añade la clase .visible al elemento, lo que activa la animación CSS
              entry.target.classList.add("visible");
            }, index * 300); // 300ms de diferencia entre cada bloque (0ms, 300ms, 600ms, etc.)
          }
        });
      },
      {
        threshold: 0.3 // El 30% del elemento debe estar visible para que se active
      }
    );
  
    // Observa cada uno de los .value-item individualmente
    items.forEach((item) => {
      observer.observe(item);
    });
  
  });
  
//------------------JS para animacion servicios------------------------------//
  // Espera a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  
    // Selecciona todos los elementos con la clase .service-item
    const services = document.querySelectorAll(".service-item");
  
    // Crea un IntersectionObserver para detectar cuándo los elementos entran en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el elemento es visible (está dentro del viewport)
          if (entry.isIntersecting) {
            // Obtiene el índice del elemento actual en el NodeList
            const index = Array.from(services).indexOf(entry.target);
  
            // Aplica un retardo progresivo para animación escalonada
            setTimeout(() => {
              // Añade la clase visible para activar la animación CSS
              entry.target.classList.add("visible");
            }, index * 200); // Cada bloque se muestra con 200ms de diferencia
          }
        });
      },
      {
        // El 30% del elemento debe estar visible para activarse
        threshold: 0.3,
      }
    );
  
    // Observa cada elemento de servicio individualmente
    services.forEach((item) => observer.observe(item));
  });
  
//------------------JS para galeria ultimos proyectos------------------------------//

  document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".project-menu a");
    const projects = document.querySelectorAll(".project-item");
  
    filters.forEach(filter => {
      filter.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Quitar la clase "selected" de todos los botones
        filters.forEach(btn => btn.classList.remove("selected"));
        // Añadirla al botón actual
        filter.classList.add("selected");
  
        const category = filter.dataset.filter;
  
        projects.forEach(project => {
          // Mostrar todos si el filtro es '*'
          if (category === "*") {
            project.style.display = "block";
            requestAnimationFrame(() => project.classList.add("fade-in"));
          } else {
            // Mostrar solo los que coinciden
            if (project.classList.contains(category.substring(1))) {
              project.style.display = "block";
              requestAnimationFrame(() => project.classList.add("fade-in"));
            } else {
              project.style.display = "none";
              project.classList.remove("fade-in");
            }
          }
        });
      });
    });
  });
  
//-------JS para que el boton vuelva a la semana en la que se encontraba-------------//

  document.getElementById('volver').addEventListener('click', function (e) {
      e.preventDefault();
      const semana = localStorage.getItem('semanaActiva') || 0;
      window.location.href = `../index.html`;
  });
