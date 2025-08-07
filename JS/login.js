const loginform = document.getElementById('loginForm');
const alerta = document.getElementById('alerta');

loginform.addEventListener('submit', function (e) {
    e.preventDefault();

    const usuario = document.getElementById('Usuario').value.trim();
    const contrasena = document.getElementById('Contraseña').value.trim();

    if (usuario === "admin" && contrasena === "1234") {
        window.location.href = "../PAGES/admin.html";
    } else if (usuario === "estudiante" && contrasena === "Temporal#1234") {
        window.location.href = "../PAGES/perfil.html";
    } else if (usuario === "profesor" && contrasena === "Profe0sito") {
        window.location.href = "../PAGES/grupos.html";
    } else {
        alerta.classList.remove('d-none');
    }
});