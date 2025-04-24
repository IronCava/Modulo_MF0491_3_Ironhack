// ejercicio 1
function ejecutarZoo() {
    let zoo = ["elefante", "jirafa", "león", "cocodrilo", "canguro"];
    let resultado = "";
    for (let i = zoo.length - 1; i >= 0; i--) {
      resultado += zoo[i] + "\n";
    }
    document.getElementById("salidaZoo").textContent = resultado;
  }
  
  let bandas = ["Queen", "The Beatles", "Nirvana", "AC/DC", "Coldplay"];

  // ejercicio 2
  function mostrarTodas() {
    let resultado = "";
    bandas.forEach((banda, i) => {
      resultado += `${i}: ${banda}\n`;
    });
    document.getElementById("salidaBandas").textContent = resultado;
  }
  
  function mostrarUna() {
    let index = parseInt(prompt("¿Qué índice quieres ver?"));
    if (!isNaN(index) && index >= 0 && index < bandas.length) {
      alert("Banda: " + bandas[index]);
    } else {
      alert("Índice inválido");
    }
  }
  
  function agregarBanda() {
    let nuevaBanda = prompt("Escribe el nombre de una nueva banda:");
    if (nuevaBanda) {
      bandas.push(nuevaBanda);
      mostrarTodas();
    }
  }
  
  function agregarVariasBandas() {
    let banda;
    while (true) {
      banda = prompt("Escribe una banda o 'fin' para terminar:");
      if (!banda || banda.toLowerCase() === "fin") break;
      bandas.push(banda);
    }
    mostrarTodas();
  }
  
  function modificarBanda() {
    let index = parseInt(prompt("¿Qué índice quieres modificar?"));
    if (!isNaN(index) && index >= 0 && index < bandas.length) {
      let nuevoNombre = prompt("Nuevo nombre para esa banda:");
      if (nuevoNombre) {
        bandas.splice(index, 1, nuevoNombre);
        mostrarTodas();
      }
    } else {
      alert("Índice inválido");
    }
  }
  
  function borrarPrimera() {
    bandas.shift();
    mostrarTodas();
  }
  
  function borrarUltima() {
    bandas.pop();
    mostrarTodas();
  }
  
  function borrarPorIndice() {
    let index = parseInt(prompt("¿Qué índice quieres borrar?"));
    if (!isNaN(index) && index >= 0 && index < bandas.length) {
      bandas.splice(index, 1);
      mostrarTodas();
    } else {
      alert("Índice inválido");
    }
  }
  
  function buscarBanda() {
    let nombre = prompt("Nombre de la banda a buscar:");
    if (nombre) {
      let index = bandas.indexOf(nombre);
      alert(index !== -1 ? `Está en el índice ${index}` : "No encontrada");
    }
  }
      // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });