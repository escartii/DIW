document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    // añado un listener que captura el evento de click
    // cuando haces click se activa.
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
