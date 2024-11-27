// Función para añadir clases con animaciones encadenadas
const iniciarAnimaciones = () => {
    const chincheta1 = document.querySelector(".chincheta1");
    const article1 = document.querySelector(".article1");
    const chincheta2 = document.querySelector(".chincheta2");
    const chincheta3 = document.querySelector(".chincheta3");
    const article3 = document.querySelector(".article3");

    // Animación 1: Chincheta 1
    chincheta1.classList.add("anim-chincheta1");
    chincheta1.addEventListener("animationend", () => {
        // Animación 2: Artículo 1
        article1.classList.add("anim-article1");
        article1.addEventListener("animationend", () => {
            // Animación 3: Chincheta 2
            chincheta2.classList.add("anim-chincheta2");
            chincheta2.addEventListener("animationend", () => {
                // Animación 4: Chincheta 3
                chincheta3.classList.add("anim-chincheta3");
                chincheta3.addEventListener("animationend", () => {
                    // Animación 5: Artículo 3
                    article3.classList.add("anim-article3");
                });
            });
        });
    });
};

// Iniciar las animaciones al cargar la página
window.onload = iniciarAnimaciones;
