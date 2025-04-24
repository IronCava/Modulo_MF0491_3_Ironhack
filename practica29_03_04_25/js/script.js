document.getElementById("btnMostrar").addEventListener("click", function () {
    const input = document.getElementById("animalInput").value.toLowerCase().trim();
    const imagenes = {
      perro: "img/perro.jpg",
      gato: "img/gato.jpg",
      canario: "img/canario.jpg",
    };
  
    const puerta = document.getElementById("puertaTienda");
    const nombre = document.getElementById("nombreMascota");
    const footerNombre = document.getElementById("nombreFooter");

  
    if (imagenes[input]) {
      puerta.innerHTML = `<img src="${imagenes[input]}" alt="${input}">`;
      const capitalizado = input.charAt(0).toUpperCase() + input.slice(1);
      nombre.textContent = capitalizado;
      footerNombre.textContent = capitalizado;
    } else {
      puerta.innerHTML = "";
      nombre.textContent = "Animal no disponible.";
      footerNombre.textContent = "---";
    }
    
  });
      // boton pagina de inicio te rediriga a la semana en la que estabas. 

      document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });