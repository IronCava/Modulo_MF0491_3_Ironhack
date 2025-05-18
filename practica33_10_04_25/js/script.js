// Creamos el array de invitados vacío
let invitados = [];

// Preguntamos cuántos invitados iniciales queremos añadir
let cantidad = prompt("¿Cuántos invitados iniciales quieres añadir?");
cantidad = parseInt(cantidad); // Convertimos a número

// Bucle para pedir cada nombre
for (let i = 0; i < cantidad; i++) {
  let nombre = prompt(`Introduce el nombre del invitado ${i + 1}:`);
  invitados.push(nombre);
}

// Función para mostrar la lista de invitados en pantalla
function mostrarInvitados(lista) {
  const output = document.getElementById('output');
  output.innerHTML = '<h3>Lista de invitados:</h3><ul>' + 
    lista.map(nombre => `<li>${nombre}</li>`).join('') + 
    '</ul>';
}

// Mostramos los invitados iniciales
mostrarInvitados(invitados);

// ------------------ PASO 2: Añadir a Juani y Alex ------------------

// Añadimos Juani y Alex al final de la lista
invitados.push("Juani", "Alex");

// Actualizamos en pantalla
mostrarInvitados(invitados);

// ------------------ PASO 3: Marta quiere ser tercera ------------------

// Insertamos a Marta en la tercera posición (índice 2)
invitados.splice(2, 0, "Marta");

// Actualizamos en pantalla
mostrarInvitados(invitados);

// ------------------ PASO 4: Roberto no puede venir ------------------

// Si Roberto es el primer invitado, lo eliminamos
if (invitados[0].toLowerCase() === "roberto") {
  invitados.shift(); // shift() elimina el primer elemento
}

// Actualizamos en pantalla
mostrarInvitados(invitados);

// ------------------ PASO 5: Añadir invitados de otra fiesta ------------------

// Creamos un array de invitados de la otra fiesta
let nuevosInvitados = ["Claudia", "Pedro", "Luis"];

// Los añadimos a nuestra lista
invitados = invitados.concat(nuevosInvitados);

// Actualizamos en pantalla
mostrarInvitados(invitados);

// ------------------ PASO 6: Lista definitiva en mayúsculas ------------------

// Convertimos todos los nombres a mayúsculas
invitados = invitados.map(nombre => nombre.toUpperCase());

// Actualizamos en pantalla
mostrarInvitados(invitados);

// ------------------ PASO 7: Función de búsqueda ------------------

// Creamos una función para buscar si un invitado está en la lista
function buscarInvitado(nombreBuscado) {
  nombreBuscado = nombreBuscado.toUpperCase(); // Lo pasamos a mayúsculas para comparar
  if (invitados.includes(nombreBuscado)) {
    alert(`${nombreBuscado} está en la lista.`);
  } else {
    // Si no está, preguntamos si quiere añadirlo
    let añadir = confirm(`${nombreBuscado} NO está en la lista. ¿Quieres añadirlo?`);
    
    if (añadir) {
      invitados.push(nombreBuscado); // Lo añadimos al array
      alert(`${nombreBuscado} ha sido añadido a la lista.`);

      mostrarInvitados(invitados); // Actualizamos la lista mostrada en pantalla
    } else {
      alert(`${nombreBuscado} no ha sido añadido.`);
    }
  }
}
// Cuando se hace clic en el botón de buscar
document.getElementById('buscarBtn').addEventListener('click', function() {
  let nombreBuscado = document.getElementById('nombreBuscado').value;
  buscarInvitado(nombreBuscado);
});

  // boton pagina de inicio te rediriga a la semana en la que estabas. 

  document.getElementById('volver').addEventListener('click', function (e) {
    e.preventDefault();
    const semana = localStorage.getItem('semanaActiva') || 0;
    window.location.href = `../index.html`;
});