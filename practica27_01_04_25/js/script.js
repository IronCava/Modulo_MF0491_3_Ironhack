// Espera al click del botón para ejecutar el cálculo
document.getElementById('calcular-btn').addEventListener('click', function () {

    // Captura los valores del input y los convierte en números decimales
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
  
    // Selecciona el div donde se mostrará el resultado
    const resultadoDiv = document.getElementById('resultado');
  
    // Comprueba que los datos sean válidos y mayores a cero
    if (!altura || !peso || altura <= 0 || peso <= 0) {
      resultadoDiv.textContent = "Por favor, introduce valores válidos.";
      return; // Sale de la función si hay error
    }
  
    // Calcula el IMC: peso dividido entre altura al cuadrado
    const imc = peso / (altura * altura);
  
    // Calcula el peso ideal usando IMC ideal de 22
    const pesoIdeal = 22 * (altura * altura);
  
    // Prepara el mensaje base
    let mensaje = `Para la altura ${altura}m y el peso ${peso}kg, tu peso ideal sería: ${pesoIdeal.toFixed(2)}kg. `;
  
    // Agrega una nota si el IMC es inferior a 18.5
    if (imc < 18.5) {
      mensaje += "Estás por debajo del peso recomendado.";
    }
  
    // Muestra el mensaje completo en el div de resultado
    resultadoDiv.textContent = mensaje;
  });
  
/* ================== EJERCICIO 2 ================== */
// Al hacer clic en "Enviar", copiar los datos del formulario al ticket
document.getElementById('btn-ticket').addEventListener('click', function () {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const fila = document.getElementById('fila').value.trim();
    const asiento = document.getElementById('asiento').value.trim();
  
    // Validación simple
    if (!nombre || !fecha || !fila || !asiento) {
      alert("Por favor, rellena todos los campos.");
      return;
    }
  
    // Rellenar los campos del ticket
    document.getElementById('ticket-nombre').textContent = nombre;
    document.getElementById('ticket-fecha').textContent = fecha;
    document.getElementById('ticket-fila').textContent = fila;
    document.getElementById('ticket-asiento').textContent = asiento;
  });
  
    // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });