const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const boton = document.getElementById("btnEnviar");

const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^[0-9]+$/;

function validarFormulario() {
    let valido = true;

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorTelefono").textContent = "";
    document.getElementById("errorAsunto").textContent = "";
    document.getElementById("errorMensaje").textContent = "";

    if (nombre.value.trim().length < 5 || !regexNombre.test(nombre.value.trim())) {
        document.getElementById("errorNombre").textContent = "Ingrese un nombre válido.";
        valido = false;
    }

    if (!regexCorreo.test(correo.value.trim())) {
        document.getElementById("errorCorreo").textContent = "Ingrese un correo válido.";
        valido = false;
    }

    if (!regexTelefono.test(telefono.value.trim()) || telefono.value.trim().length < 8) {
        document.getElementById("errorTelefono").textContent = "Ingrese un teléfono válido.";
        valido = false;
    }

    if (asunto.value.trim().length < 3) {
        document.getElementById("errorAsunto").textContent = "Ingrese un asunto válido.";
        valido = false;
    }

    if (mensaje.value.trim().length < 20) {
        document.getElementById("errorMensaje").textContent = "El mensaje debe tener mínimo 20 caracteres.";
        valido = false;
    }

    boton.disabled = !valido;
    return valido;
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
telefono.addEventListener("input", validarFormulario);
asunto.addEventListener("input", validarFormulario);
mensaje.addEventListener("input", validarFormulario);

formulario.addEventListener("submit", function (e) {
    if (!validarFormulario()) {
        e.preventDefault();
    }
});