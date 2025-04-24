function ejercicio1() {
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    let resto = num1 % num2;
    let resultado = `El resto de ${num1} entre ${num2} es: ${resto}`;
    document.getElementById("resultado1").innerHTML = `<p>${resultado}</p>`;
    console.log(resultado);
  }
  
  function ejercicio2() {
    let nombre = prompt("¿Cómo te llamas?");
    let localidad = prompt("¿Dónde vives?");
    let hobby = prompt("¿Cuál es tu hobby favorito?");
    let frase = `Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}.`;
    document.getElementById("resultado2").innerHTML = `<p>${frase}</p>`;
    console.log(frase);
  }
  
  function ejercicio3() {
    let radio = parseFloat(prompt("Introduce el radio del círculo:"));
    let pi = 3.1416;
    let area = pi * radio * radio;
    let resultado = `El área de un círculo con radio ${radio} es: ${area.toFixed(2)}`;
    document.getElementById("resultado3").innerHTML = `<p>${resultado}</p>`;
    console.log(resultado);
  }
  
    // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });