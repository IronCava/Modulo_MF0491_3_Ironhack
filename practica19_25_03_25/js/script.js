// 1. Entrada Discoteca
function verificarEdad() {
    const edad = parseInt(document.getElementById("edad").value);
    const resultado = document.getElementById("resultadoEdad");
  
    if (edad > 18) {
      resultado.textContent = "Puedes entrar a la discoteca.";
    } else if (edad < 18) {
      resultado.textContent = "Lo siento, eres menor de edad.";
    } else {
      resultado.textContent = "Justo tienes 18, ¡adelante!";
    }
  }
  
  // 2. Cinco Colores
  function verificarColor() {
    const color = document.getElementById("color").value.toLowerCase();
    const resultado = document.getElementById("resultadoColor");
  
    switch (color) {
      case "azul":
        resultado.textContent = "el azul es como el mar, siempre que el cielo sea azul (y sea de día)";
        break;
      case "verde":
        resultado.textContent = "El verde es el color de la esperanza.";
        break;
      case "rojo":
        resultado.textContent = "El rojo representa la pasión.";
        break;
      case "amarillo":
        resultado.textContent = "El amarillo brilla como una patata frita.";
        break;
      case "violeta":
        resultado.textContent = "El violeta es el color de la mujer.";
        break;
      default:
        resultado.textContent = "Ese color no me gusta y ademas no esta en la lista.";
        break;
    }
  }
  
  // 3. Lampara no encendida
  function verificarLampara() {
    const enchufada = document.getElementById("enchufada").value;
    const bombilla = document.getElementById("bombilla").value;
    const resultado = document.getElementById("resultadoLampara");
  
    if (enchufada === "si") {
      if (bombilla === "si") {
        resultado.textContent = "Cambia la bombilla.";
      } else {
        resultado.textContent = "Llama al electricista.";
      }
    } else {
      resultado.textContent = "Enchufa la lampara.";
    }
  }
  
  // boton pagina de inicio te rediriga a la semana en la que estabas. 

  document.getElementById('volver').addEventListener('click', function (e) {
    e.preventDefault();
    const semana = localStorage.getItem('semanaActiva') || 0;
    window.location.href = `../index.html`;
});