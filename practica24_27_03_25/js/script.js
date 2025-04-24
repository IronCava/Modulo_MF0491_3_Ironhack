// Ejercicio 1: Adivina el número
document.getElementById('comprobarBtn').addEventListener('click', function () {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
    let intento;
  
    // Repetir hasta que el usuario adivine el número
    do {
      intento = parseInt(prompt("¿Qué número es? (del 1 al 10)"));
    } while (intento !== numeroSecreto);
  
    alert("🎉 ¡Felicidades, has acertado!");
  });
  
  // ----------------- Ejercicio 2: Lanzar los dados -----------------
  
  let resultadoPlayer1 = null; // Almacena el resultado del primer jugador
  
  // PLAYER 1 lanza su dado
  document.getElementById('player1Btn').addEventListener('click', () => {
    const dado1 = Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6
    resultadoPlayer1 = dado1;
  
    const imagenDado1 = document.getElementById('imagenDado1');

// Reiniciar animación si ya está aplicada
imagenDado1.classList.remove('animar-dado');
void imagenDado1.offsetWidth; // Truco para reiniciar animación

// Cambiar imagen y activar animación
imagenDado1.src = `img/${dado1}.png`;
imagenDado1.alt = `Dado con número ${dado1}`;
imagenDado1.classList.add('animar-dado');

    // Desactivar botón de PLAYER 1, activar PLAYER 2
    document.getElementById('player1Btn').disabled = true;
    document.getElementById('player2Btn').disabled = false;
  });
  
  // PLAYER 2 lanza su dado
  document.getElementById('player2Btn').addEventListener('click', () => {
    const dado2 = Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6
  
    const imagenDado2 = document.getElementById('imagenDado2');

    // Reiniciar animación si ya está aplicada
    imagenDado2.classList.remove('animar-dado');
    void imagenDado2.offsetWidth; // Truco para reiniciar animación
    
    // Cambiar imagen y activar animación
    imagenDado2.src = `img/${dado2}.png`;
    imagenDado2.alt = `Dado con número ${dado2}`;
    imagenDado2.classList.add('animar-dado');
    
    // Determinar el ganador comparando los dos resultados
    let resultadoTexto;
    if (resultadoPlayer1 > dado2) {
      resultadoTexto = "🏆 Gana PLAYER 1";
    } else if (dado2 > resultadoPlayer1) {
      resultadoTexto = "🏆 Gana PLAYER 2";
    } else {
      resultadoTexto = "🤝 ¡Empate!";
    }
  
    // Mostrar resultado
    document.getElementById('ganador').textContent = resultadoTexto;
  
    // Mostrar botón para reiniciar el juego
    document.getElementById('reiniciarBtn').style.display = "inline-block";
  
    // Desactivar botón de PLAYER 2
    document.getElementById('player2Btn').disabled = true;
  });
  
  // Botón "Jugar de nuevo"
  document.getElementById('reiniciarBtn').addEventListener('click', () => {
    resultadoPlayer1 = null; // Reiniciar variable del primer jugador
  
    // Restablecer imágenes de los dados a la imagen inicial
    document.getElementById('imagenDado1').src = "img/1.png";
    document.getElementById('imagenDado2').src = "img/1.png";
    document.getElementById('imagenDado1').alt = "Dado con número 1";
    document.getElementById('imagenDado2').alt = "Dado con número 1";
  
    // Restaurar encabezados de cada jugador
    document.getElementById('jugador1').querySelector('h2').textContent = "PLAYER 1";
    document.getElementById('jugador2').querySelector('h2').textContent = "PLAYER 2";
  
    // Vaciar el resultado anterior
    document.getElementById('ganador').textContent = "";
  
    // Reestablecer estado de botones
    document.getElementById('player1Btn').disabled = false;
    document.getElementById('player2Btn').disabled = true;
  
    // Ocultar botón de reinicio
    document.getElementById('reiniciarBtn').style.display = "none";
  });
  
    // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });