// Asignación de elementos existentes a variables
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const BtnReservar = document.getElementsByClassName("btn nav__btn");


// Evento para abrir/cerrar el menú
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Evento para cerrar el menú cuando se hace clic en un enlace
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Agregar evento a todos los botones de reserva
Array.from(BtnReservar).forEach((button) => {
  button.addEventListener("click", () => {
    alert("Reserva realizada con éxito");
  });
});


// Configuración de ScrollReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Ejemplos de uso de ScrollReveal
ScrollReveal().reveal(".header__container p", scrollRevealOption);
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
// Continúa con las demás revelaciones de ScrollReveal...


