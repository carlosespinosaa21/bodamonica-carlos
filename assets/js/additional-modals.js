// Modal Tips y Notas
const modalTips = document.getElementById("modalTips");
const botonesTips = document.querySelectorAll(".card button");
const cerrarTips = modalTips.querySelector(".cerrar");

// Buscar el botón con texto "+ INFO"
botonesTips.forEach(boton => {
    if (boton.textContent.trim().toUpperCase() === "+ INFO") {
        boton.addEventListener("click", () => {
            modalTips.style.display = "flex";
        });
    }
});

// Cerrar modal al hacer clic en la X
cerrarTips.addEventListener("click", () => {
    modalTips.style.display = "none";
});

// Cerrar si se hace clic fuera
window.addEventListener("click", (event) => {
    if (event.target === modalTips) {
        modalTips.style.display = "none";
    }
});

// Modal Sugerir Canción
const modalCancion = document.getElementById("modalCancion");
const botonesCancion = document.querySelectorAll(".card button");
const cerrarCancion = modalCancion.querySelector(".cerrar");

// Buscar el botón "SUGERIR CANCIÓN"
botonesCancion.forEach(boton => {
    if (boton.textContent.trim().toUpperCase() === "SUGERIR CANCIÓN") {
        boton.addEventListener("click", () => {
            modalCancion.style.display = "flex";
        });
    }
});

// Cerrar modal con la X
cerrarCancion.addEventListener("click", () => {
    modalCancion.style.display = "none";
});

// Cerrar si se hace clic fuera del modal
window.addEventListener("click", (event) => {
    if (event.target === modalCancion) {
        modalCancion.style.display = "none";
    }
});

// Enviar formulario de sugerencia
document.getElementById("formularioCancion").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const datos = {
        nombre: form.nombre.value,
        cancion: form.cancion.value
    };

    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzAw3eFKE8-5gir9tT79GYxGYUKxvn_sLMEaOkrVy5tS7n8E8enDREDu67wEthpOhgBTA/exec", {
            method: "POST",
            body: JSON.stringify(datos)
        });

        if (res.ok) {
            alert("🎵 ¡Gracias por tu sugerencia musical!");
            form.reset();
            modalCancion.style.display = "none";
        } else {
            alert("⚠️ Ocurrió un error al enviar. Intenta de nuevo.");
        }
    } catch (err) {
        alert("❌ Error de conexión. Revisa tu red.");
        console.error(err);
    }
});