// Modal de confirmación de asistencia
const btnAbrir = document.getElementById("abrirModal1");
const modalAsistencia = document.getElementById("modalAsistencia1");
const cerrarAsist = modalAsistencia.querySelector(".cerrar");

btnAbrir.addEventListener("click", () => {
    modalAsistencia.style.display = "flex";
});

cerrarAsist.addEventListener("click", () => {
    modalAsistencia.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modalAsistencia) {
        modalAsistencia.style.display = "none";
    }
});

// Envío a Google Sheets para asistencia
const scriptURL = "https://script.google.com/macros/s/AKfycbx1ZD_KnsO1Ix4DQ9-t4HPkLiClCEuhikema5fUYoOC6HIbasbRwgId6MuFg_XvMAy3/exec";
const form = document.getElementById("formularioAsistencia");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const asistencia = form.querySelector('input[name="asistencia"]:checked')?.value;

    if (!nombre || !asistencia) {
        alert("Por favor completa todos los campos antes de enviar.");
        return;
    }

    try {
        const body = new URLSearchParams();
        body.append('nombre', nombre);
        body.append('asistencia', asistencia);

        const res = await fetch(scriptURL, {
            method: "POST",
            body: body
        });

        const text = await res.text();
        console.log("Respuesta del servidor:", text);

        if (res.ok) {
            alert("✅ Gracias, tu respuesta fue enviada correctamente.");
            form.reset();
            modalAsistencia.style.display = "none";
        } else {
            alert("⚠️ Error al enviar los datos. Intenta de nuevo.");
        }
    } catch (err) {
        console.error("Error:", err);
        alert("❌ No se pudo conectar. Revisa tu red o permisos del script.");
    }
});