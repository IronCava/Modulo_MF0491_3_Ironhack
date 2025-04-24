function ejercicio1() {
    let resultado = '';
    for (let i = 50; i >= 20; i--) {
        resultado += i + ', ';
    }
    document.getElementById("resultado1").textContent = resultado;
  }
  
  function ejercicio2() {
    let resultado = ''; // Creamos una variable vacía donde vamos a guardar los números pares
  
    // Pedimos al usuario dos números y los convertimos en enteros con parseInt
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
  
    // Verificamos si lo que ingresaron no son números
    if (isNaN(num1) || isNaN(num2)) {
      resultado = "Por favor introduce solo números válidos."; // Mensaje de error si algún dato no es un número
    } else {
      // Calculamos cuál es el número menor y cuál el mayor, sin importar el orden que puso el usuario
      let menor = Math.min(num1, num2);
      let mayor = Math.max(num1, num2);
  
      // Recorremos todos los números entre el menor y el mayor (inclusive)
      for (let i = menor; i <= mayor; i++) {
        // Si el número actual es par (divisible por 2), lo añadimos al resultado
        if (i % 2 === 0) {
          resultado += i + ', '; // Lo sumamos como texto, seguido de coma y espacio
        }
      }
    }
  
    // Mostramos el resultado final en el elemento con id="resultado2" en el HTML
    document.getElementById("resultado2").textContent = resultado;
  }
  
  function ejercicio3() {
    let resultado = ''; // Guardará el texto final a mostrar
    let total = 0; // Acumula el precio total de los productos
    let i = 1; // Contador para saber cuántos productos llevamos
  
    // Bucle que se repite hasta que se introducen 5 precios válidos
    while (i <= 5) {
      // Pedimos el precio del producto actual y lo convertimos a número decimal
      let precio = parseFloat(prompt(`Introduce el precio del producto ${i}:`));
  
      // Verificamos que el precio sea un número válido y mayor o igual a 0
      if (!isNaN(precio) && precio >= 0) {
        total += precio; // Sumamos el precio al total
        i++; // Pasamos al siguiente producto
      } else {
        // Si el valor es inválido, mostramos un mensaje de error
        alert("Introduce un número válido, por favor.");
      }
    }
  
    // Si el total es igual o mayor a 100, aplicamos un descuento
    if (total >= 100) {
      let descuento = total * 0.15; // Calculamos el 15% de descuento
      let totalFinal = total - descuento; // Restamos el descuento al total
  
      // Armamos el texto a mostrar con los precios
      resultado += `Precio original: €${total.toFixed(2)}\n`;
      resultado += `Descuento (15%): €${descuento.toFixed(2)}\n`;
      resultado += `Precio final con descuento: €${totalFinal.toFixed(2)}\n`;
    } else {
      // Si no hay descuento, solo mostramos el total a pagar
      resultado += `Total a pagar: €${total.toFixed(2)}\n`;
    }
  
    // Mostramos el resultado en el elemento con id="resultado3"
    document.getElementById("resultado3").textContent = resultado;
  }
  
   // boton pagina de inicio te rediriga a la semana en la que estabas. 

   document.getElementById('volver').addEventListener('click', function (e) {
    e.preventDefault();
    const semana = localStorage.getItem('semanaActiva') || 0;
    window.location.href = `../index.html`;
});