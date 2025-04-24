// INVENTARIO DEL ZOOLÓGICO

// Instruciones abrir consola navegador mediante, alert
    function mostrarInstrucciones() {
        alert("Para ver el resultado, abre la consola del navegador:\n\n" +
              "🖥️ PC: Ctrl + Shift + I y ve a la pestaña 'Console'\n" +
              "🍏 Mac: Cmd + Option + I y ve a 'Console'");
    }

// 1. Crear un zoológico con al menos 5 animales
let zoo = ["elefante", "jirafa", "león", "cocodrilo", "canguro"];
console.log("Zoológico inicial:", zoo);

// 2. Añadir dos animales al final
zoo.push("cebra", "hipopótamo");
console.log("Después de añadir dos al final:", zoo);

// 3. Quitar uno al final
zoo.pop(); // elimina "hipopótamo"
console.log("Después de quitar uno al final:", zoo);

// 4. Cambiar el tercero por otro
zoo[2] = "tigre"; // cambia "león" por "tigre"
console.log("Después de cambiar el tercero:", zoo);

// 5. Imprimir el total de animales con la propiedad length
console.log("Total de animales:", zoo.length);

// 6. Recorrer con un bucle FOR todo el array e imprimir en consola
console.log("Listado de animales:");
for (let i = 0; i < zoo.length; i++) {
    console.log(zoo[i]);
}
    // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });