function consultarHoroscopo() {
  const signo = document.getElementById('signo').value.toLowerCase().trim();
  const resultado = document.getElementById('resultado');
  let mensaje = "";
  let imagen = "";

  switch (signo) {
    case "aries":
      mensaje = "🔥 Aries: Esta semana brillarás con fuerza, ¡aprovéchalo!";
      imagen = "https://img.icons8.com/color/96/aries.png";
      break;
    case "tauro":
      mensaje = "🌱 Tauro: Es buen momento para enfocarte en tu bienestar.";
      imagen = "https://img.icons8.com/color/96/taurus.png";
      break;
    case "geminis":
      mensaje = "🌬 Géminis: Conversaciones clave te abrirán nuevas puertas.";
      imagen = "https://img.icons8.com/color/96/gemini.png";
      break;
    case "cancer":
      mensaje = "🌊 Cáncer: Conecta con tus emociones, te guiarán.";
      imagen = "https://img.icons8.com/color/96/cancer.png";
      break;
    case "leo":
      mensaje = "🌞 Leo: Tu carisma atraerá oportunidades inesperadas.";
      imagen = "https://img.icons8.com/color/96/leo.png";
      break;
    case "virgo":
      mensaje = "🌾 Virgo: Organiza tus ideas y obtendrás claridad.";
      imagen = "https://img.icons8.com/color/96/virgo.png";
      break;
    case "libra":
      mensaje = "⚖️ Libra: Encuentra el equilibrio entre dar y recibir.";
      imagen = "https://img.icons8.com/color/96/libra.png";
      break;
    case "escorpio":
      mensaje = "🦂 Escorpio: Semana intensa, confía en tu intuición.";
      imagen = "https://img.icons8.com/color/96/scorpio.png";
      break;
    case "sagitario":
      mensaje = "🏹 Sagitario: Se avecina una aventura, ¡lánzate!";
      imagen = "https://img.icons8.com/color/96/sagittarius.png";
      break;
    case "capricornio":
      mensaje = "⛰ Capricornio: Tu esfuerzo dará frutos muy pronto.";
      imagen = "https://img.icons8.com/color/96/capricorn.png";
      break;
    case "acuario":
      mensaje = "🌌 Acuario: Tu visión cambiará algo importante.";
      imagen = "https://img.icons8.com/color/96/aquarius.png";
      break;
    case "piscis":
      mensaje = "🐟 Piscis: Deja fluir tus ideas creativas, inspiran a otros.";
      imagen = "https://img.icons8.com/color/96/pisces.png";
      break;
    default:
      mensaje = "❓ Ese signo no me suena... ¿puedes intentarlo otra vez?";
      imagen = "https://picsum.photos/96/96?grayscale";
  }

  resultado.innerHTML = `
    <p>${mensaje}</p>
    <img src="${imagen}" alt="predicción">
  `;
}
  // boton pagina de inicio te rediriga a la semana en la que estabas. 

  document.getElementById('volver').addEventListener('click', function (e) {
    e.preventDefault();
    const semana = localStorage.getItem('semanaActiva') || 0;
    window.location.href = `../index.html`;
});