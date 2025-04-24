// Variable que acumula la suma total de todas las operaciones
let sumaTotal = 0;

// Referencias a los inputs y botones del DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const sumarBtn = document.getElementById("sumarBtn");

const resultadoDiv = document.getElementById("resultado");
const totalDiv = document.getElementById("totalAcumulado");
const mensajeFinalDiv = document.getElementById("mensajeFinal");

const preguntaDiv = document.getElementById("continuarPregunta");
const continuarSiBtn = document.getElementById("continuarSi");
const continuarNoBtn = document.getElementById("continuarNo");

// Evento al hacer clic en el botón "Sumar"
sumarBtn.addEventListener("click", () => {
  // Convertimos los valores de los inputs a números
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Validación: si alguno no es número, mostramos error
  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.innerText = "Por favor, introduce dos números válidos.";
    return;
  }

  // Calculamos la suma y la acumulamos al total
  const suma = num1 + num2;
  sumaTotal += suma;

  // Mostramos el resultado de esta suma
  resultadoDiv.innerText = `La suma de ${num1} + ${num2} es ${suma}`;

  // Mostramos la pregunta de "¿Quieres continuar?"
  preguntaDiv.classList.remove("hidden");

  // Desactivamos los inputs y el botón hasta que el usuario decida
  num1Input.disabled = true;
  num2Input.disabled = true;
  sumarBtn.disabled = true;
});

// Evento al hacer clic en el botón "Sí" (quiere continuar)
continuarSiBtn.addEventListener("click", () => {
  // Limpiamos y reactivamos los campos para una nueva suma
  num1Input.value = "";
  num2Input.value = "";
  num1Input.disabled = false;
  num2Input.disabled = false;
  sumarBtn.disabled = false;
  num1Input.focus();

  // Ocultamos la pregunta
  resultadoDiv.innerText = "";
  preguntaDiv.classList.add("hidden");
});

// Evento al hacer clic en el botón "No" (termina el proceso)
continuarNoBtn.addEventListener("click", () => {
  // Mostramos mensaje de despedida y la suma total acumulada
  mensajeFinalDiv.innerText = "¡Gracias por usar el programa! 👋";
  totalDiv.innerText = `Suma total acumulada: ${sumaTotal}`;
  preguntaDiv.classList.add("hidden");

  // Desactivamos inputs y botón de sumar
  num1Input.disabled = true;
  num2Input.disabled = true;
  sumarBtn.disabled = true;
});

// Referencia al botón "Reiniciar"
const reiniciarBtn = document.getElementById("reiniciarBtn");

// Evento para reiniciar toda la app desde cero
reiniciarBtn.addEventListener("click", () => {
  // Reseteamos la suma total
  sumaTotal = 0;

  // Reactivamos inputs y limpiamos todos los textos
  num1Input.value = "";
  num2Input.value = "";
  num1Input.disabled = false;
  num2Input.disabled = false;
  sumarBtn.disabled = false;
  num1Input.focus();

  resultadoDiv.innerText = "";
  totalDiv.innerText = "";
  mensajeFinalDiv.innerText = "";
  preguntaDiv.classList.add("hidden");
});

// Botón de "Página principal", redirige a la semana activa guardada (usando localStorage)
document.getElementById('volver').addEventListener('click', function (e) {
  e.preventDefault();
  const semana = localStorage.getItem('semanaActiva') || 0;
  window.location.href = `../index.html`;
});
