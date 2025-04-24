

const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const nombres = [
  ["Kitty", "Toby", "Didi"],
  ["Pedro", "José", "Roberto"],
  ["Carla", "Rosa", "Julieta"]
];

// Utilidad para imprimir en pantalla
function imprimir(texto) {
  const output = document.getElementById("output");
  const p = document.createElement("p");
  p.textContent = texto;
  output.appendChild(p);
}

// Imprimir números específicos
imprimir("Número 26: " + medidas[2][2][1]);
imprimir("Número 134: " + medidas[0][1]);
imprimir("Número 92: " + medidas[2][3]);

// Imprimir nombres específicos
imprimir("Nombre Rosa: " + nombres[2][1]);
imprimir("Nombre Roberto: " + nombres[1][2]);

// Imprimir todos los nombres de mascotas
// a) en una sola línea
imprimir("Nombres de mascotas (una línea): " + nombres[0].join(", "));

// b) en diferentes líneas
imprimir("Nombres de mascotas (una por línea):");
nombres[0].forEach(nombre => imprimir("→ " + nombre));
 // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });