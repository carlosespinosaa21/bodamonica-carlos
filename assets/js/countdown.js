// Contador regresivo
function iniciarContador() {
    const destino = new Date("Feb 14, 2026 15:30:00 GMT-0500").getTime();
    setInterval(function () {
        const ahora = new Date().getTime();
        const diferencia = destino - ahora;
        if (diferencia > 0) {
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
            document.getElementById("dias").textContent = dias;
            document.getElementById("horas").textContent = horas;
            document.getElementById("minutos").textContent = minutos;
            document.getElementById("segundos").textContent = segundos;
        }
    }, 1000);
}
iniciarContador();