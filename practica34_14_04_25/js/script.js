// Objeto del ejercicio 1
const ordenador1 = {
  marca: "HP",
  procesador: "i7",
  ram: "16Gb",
  hd: "1Tb",
  precio: 1500,
  extras: ["cámara HD", "micrófono estéreo", "disco de acceso rápido"],
  maletin: true
};

// Mostrar frase
function mostrarFrase() {
  const frase = `Mi ordenador es un ${ordenador1.marca}, con procesador ${ordenador1.procesador} y ${ordenador1.ram} de RAM.`;
  mostrarResultado(frase);
}

// Recorrer propiedades
function recorrerOrdenador() {
  let resultado = "";
  for (let clave in ordenador1) {
    resultado += `${clave}: ${ordenador1[clave]}\n`;
  }
  mostrarResultado(resultado);
}

// Mostrar tercer extra
function mostrarExtra() {
  const extra = ordenador1.extras[2];
  mostrarResultado(`Tercer extra: ${extra}`);
}

// Mostrar resultados en el div
function mostrarResultado(texto) {
  document.getElementById("resultado-ej1").textContent = texto;
}

// === Ejercicio 2 ===

let galletas = {
  marca: "Artiach",
  nombre: "Chiquilín",
  "descripción": "galletas de mantequilla", // Con tilde como en el enunciado original
  precio: 2.75,
  hayExistencias: true
};

let copiaOriginal = { ...galletas }; // Copia para mostrar el estado antes de modificar

function mostrarGalletasAntes() {
  mostrarResultadoEj2("ANTES:\n" + JSON.stringify(copiaOriginal, null, 2));
}

function modificarGalletas() {
  galletas.oferta = true; // ✅ C: Crear propiedad
  galletas["descripción"] = "galletas de mantequilla con cereales"; // ✅ U: Modificar con tilde
  delete galletas.precio; // ✅ D: Borrar propiedad
  mostrarResultadoEj2("Objeto modificado. Pulsa 'Mostrar objeto después'.");
}

function mostrarGalletasDespues() {
  mostrarResultadoEj2("DESPUÉS:\n" + JSON.stringify(galletas, null, 2));
}

function mostrarValores() {
  mostrarResultadoEj2("VALORES:\n" + Object.values(galletas).join("\n"));
}

function mostrarClaves() {
  mostrarResultadoEj2("CLAVES:\n" + Object.keys(galletas).join("\n"));
}

function mostrarResultadoEj2(texto) {
  document.getElementById("resultado-ej2").textContent = texto;
}

// === Ejercicio 3 ===

const coche1 = { marca: "Toyota", modelo: "Corolla", potencia: 110, precio: 18000 };
const coche2 = { marca: "Ford", modelo: "Focus", potencia: 120, precio: 20000 };
const coche3 = { marca: "BMW", modelo: "Serie 1", potencia: 140, precio: 27000 };

const concesionario = [coche1, coche2, coche3];

function mostrarCoches() {
  const propiedad = document.getElementById("propiedadSelect").value;
  let resultado = `Propiedad: ${propiedad.toUpperCase()}\n\n`;

  concesionario.forEach((coche, index) => {
    resultado += `Coche ${index + 1}: ${coche[propiedad]}\n`;
  });

  document.getElementById("resultado-ej3").textContent = resultado;
}
 // boton pagina de inicio te rediriga a la semana en la que estabas. 

 document.getElementById('volver').addEventListener('click', function (e) {
  e.preventDefault();
  const semana = localStorage.getItem('semanaActiva') || 0;
  window.location.href = `../index.html`;
});