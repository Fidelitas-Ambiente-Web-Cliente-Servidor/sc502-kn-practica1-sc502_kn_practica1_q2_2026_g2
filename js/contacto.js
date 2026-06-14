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

function validarNombre() {
    const error = document.getElementById("errorNombre");

    if (nombre.value.trim().length < 5) {
        error.textContent = "El nombre debe tener mínimo 5 caracteres.";
        return false;
    }

    if (!regexNombre.test(nombre.value.trim())) {
        error.textContent = "Solo se permiten letras y espacios.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarCorreo() {
    const error = document.getElementById("errorCorreo");

    if (!regexCorreo.test(correo.value.trim())) {
        error.textContent = "Ingrese un correo electrónico válido.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarTelefono() {
    const error = document.getElementById("errorTelefono");

    if (!regexTelefono.test(telefono.value.trim())) {
        error.textContent = "El teléfono solo puede contener números.";
        return false;
    }

    if (telefono.value.trim().length < 8) {
        error.textContent = "El teléfono debe tener mínimo 8 dígitos.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarAsunto() {
    const error = document.getElementById("errorAsunto");

    if (asunto.value.trim().length < 3) {
        error.textContent = "El asunto debe tener mínimo 3 caracteres.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarMensaje() {
    const error = document.getElementById("errorMensaje");

    if (mensaje.value.trim().length < 20) {
        error.textContent = "El mensaje debe tener mínimo 20 caracteres.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarFormulario() {
    const formularioValido =
        validarNombre() &&
        validarCorreo() &&
        validarTelefono() &&
        validarAsunto() &&
        validarMensaje();

    boton.disabled = !formularioValido;
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
telefono.addEventListener("input", validarFormulario);
asunto.addEventListener("input", validarFormulario);
mensaje.addEventListener("input", validarFormulario);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("mensajeExito").textContent =
        "Mensaje enviado correctamente. Nos pondremos en contacto pronto.";

    formulario.reset();

    boton.disabled = true;
});