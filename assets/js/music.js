// Control de música de fondo
const musica = document.getElementById("musicaFondo");
const btnMusica = document.getElementById("btnMusica");
let reproduciendo = false;

btnMusica.addEventListener("click", () => {
    if (!reproduciendo) {
        musica.play();
        btnMusica.textContent = "🎵"; // cambia el emoji
        reproduciendo = true;
    } else {
        musica.pause();
        btnMusica.textContent = "⏸️"; // vuelve al emoji original
        reproduciendo = false;
    }
});