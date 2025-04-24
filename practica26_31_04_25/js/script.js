// VERSIÓN 1: SIN DEVOLUCIÓN (obligatoria)
/*
function sumar(a, b) {
  document.getElementById("resultado").textContent = `Resultado: ${a + b}`;
}

function restar(a, b) {
  document.getElementById("resultado").textContent = `Resultado: ${a - b}`;
}

document.getElementById("calcularBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").textContent = "Introduce ambos números.";
    return;
  }

  if (operacion === "+") {
    sumar(num1, num2);
  } else {
    restar(num1, num2);
  }
});
*/

// VERSIÓN 2: CON DEVOLUCIÓN (EXTRA)
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

document.getElementById("calcularBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").textContent = "Introduce ambos números.";
    return;
  }

  let resultado;

  if (operacion === "+") {
    resultado = sumar(num1, num2);
  } else {
    resultado = restar(num1, num2);
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});
    // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
      e.preventDefault();
      const semana = localStorage.getItem('semanaActiva') || 0;
      window.location.href = `../index.html`;
  });