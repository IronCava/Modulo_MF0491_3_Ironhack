const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cierra si el usuario hace clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// boton pagina de inicio te rediriga a la semana en la que estabas.

document.getElementById("volver").addEventListener("click", function (e) {
  e.preventDefault();
  const semana = localStorage.getItem("semanaActiva") || 0;
  window.location.href = `../index.html`;
});
