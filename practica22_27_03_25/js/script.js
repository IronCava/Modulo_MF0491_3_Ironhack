let inputUsuario = document.getElementById("usuario");
let inputContrasena = document.getElementById("contrasena");
let botonLogin = document.getElementById("boton-login");
let mensaje = document.getElementById("mensaje");
let usuarioCorrecto = "casandra";
let contrasenaCorrecta = "ironhack2025";
let intentos = 0;

botonLogin.addEventListener("click", function() {
    let usuarioIngresado = inputUsuario.value;
    let contrasenaIngresada = inputContrasena.value;
    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
        mensaje.textContent = "¡Acceso concedido!";
        window.open("https://www.w3schools.com");
      } else {
        intentos++;
        mensaje.textContent = "Usuario o contraseña incorrectos. Intento " + intentos + " de 3.";
      }
      if (intentos >= 3) {
        mensaje.textContent = "Has superado el número máximo de intentos.";
        botonLogin.disabled = true;
        return;
      }
      
  });
    // boton pagina de inicio te rediriga a la semana en la que estabas. 

    document.getElementById('volver').addEventListener('click', function (e) {
        e.preventDefault();
        const semana = localStorage.getItem('semanaActiva') || 0;
        window.location.href = `../index.html`;
    });