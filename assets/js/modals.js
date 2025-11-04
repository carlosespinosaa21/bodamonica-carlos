// Modal Dress Code
const modal = document.getElementById("modalDressCode");
const botones = document.querySelectorAll(".card button");
const cerrar = document.querySelector(".cerrar");

// Buscar el botón "VER MÁS" (el que tiene ese texto)
botones.forEach(boton => {
    if (boton.textContent.trim().toUpperCase() === "VER MÁS") {
        boton.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }
});

cerrar.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}