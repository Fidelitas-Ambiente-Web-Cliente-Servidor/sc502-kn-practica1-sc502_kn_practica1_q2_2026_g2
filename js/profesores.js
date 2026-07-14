
const profesores = [
    {
        nombre: "Carlos Méndez",
        especialidad: "Conducción Deportiva",
        descripcion: "Piloto profesional con más de ocho años de experiencia en circuitos. Se especializa en trazado de curvas, control del vehículo y técnicas de conducción competitiva.",
        foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
        correo: "carlos.mendez@academiadepilotos.com",
        cursosQueImparte: [
            "Introducción al Automovilismo",
            "Conducción Deportiva",
            "Técnicas de Circuito"
        ]
    },
    {
        nombre: "María Fernández",
        especialidad: "Manejo Defensivo",
        descripcion: "Instructora especializada en prevención de accidentes, reacción ante situaciones de emergencia y aplicación de técnicas de conducción segura dentro y fuera de la pista.",
        foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
        correo: "maria.fernandez@academiadepilotos.com",
        cursosQueImparte: [
            "Manejo Defensivo",
            "Seguridad en Pista",
            "Control de Emergencias"
        ]
    },
    {
        nombre: "Andrés Rodríguez",
        especialidad: "Técnicas de Frenado",
        descripcion: "Instructor enfocado en frenado deportivo, distribución del peso, entrada a curvas y control del automóvil durante maniobras realizadas a alta velocidad.",
        foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
        correo: "andres.rodriguez@academiadepilotos.com",
        cursosQueImparte: [
            "Frenado Deportivo",
            "Trazado de Curvas",
            "Control del Vehículo"
        ]
    },
    {
        nombre: "Laura Castillo",
        especialidad: "Control y Derrape",
        descripcion: "Piloto e instructora con experiencia en recuperación de pérdida de adherencia, control de derrapes y dominio del vehículo en diferentes condiciones de pista.",
        foto: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80",
        correo: "laura.castillo@academiadepilotos.com",
        cursosQueImparte: [
            "Control y Derrape",
            "Conducción en Pista Mojada",
            "Técnicas Avanzadas"
        ]
    }
];

// Obtiene el contenedor donde se mostrarán las tarjetas.
const contenedorProfesores = document.getElementById("contenedor-profesores");

// Genera las tarjetas de profesores.
function renderizarProfesores() {
    if (!contenedorProfesores) {
        return;
    }

    contenedorProfesores.innerHTML = "";

    profesores.forEach((profesor, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-profesor");

        const imagen = document.createElement("img");
        imagen.src = profesor.foto;
        imagen.alt = `Fotografía de ${profesor.nombre}`;
        imagen.classList.add("foto-profesor");

        const cuerpo = document.createElement("div");
        cuerpo.classList.add("contenido-profesor");

        const nombre = document.createElement("h3");
        nombre.classList.add("nombre-profesor");
        nombre.textContent = profesor.nombre;

        const especialidad = document.createElement("p");
        especialidad.classList.add("especialidad-profesor");
        especialidad.textContent = profesor.especialidad;

        const descripcion = document.createElement("p");
        descripcion.classList.add("descripcion-profesor");
        descripcion.textContent = profesor.descripcion;

        const boton = document.createElement("button");
        boton.type = "button";
        boton.classList.add("btn", "btn-primary", "boton-detalle");
        boton.textContent = "Ver detalle";

        boton.addEventListener("click", function () {
            abrirModalProfesor(index);
        });

        cuerpo.appendChild(nombre);
        cuerpo.appendChild(especialidad);
        cuerpo.appendChild(descripcion);
        cuerpo.appendChild(boton);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(cuerpo);

        contenedorProfesores.appendChild(tarjeta);
    });
}

// Muestra en el modal los datos del profesor seleccionado.
function abrirModalProfesor(index) {
    const profesor = profesores[index];

    if (!profesor) {
        return;
    }

    document.getElementById("modalProfesorLabel").textContent =
        `Información de ${profesor.nombre}`;

    document.getElementById("modalFoto").src = profesor.foto;
    document.getElementById("modalFoto").alt =
        `Fotografía de ${profesor.nombre}`;

    document.getElementById("modalNombre").textContent = profesor.nombre;

    document.getElementById("modalEspecialidad").textContent =
        profesor.especialidad;

    document.getElementById("modalDescripcion").textContent =
        profesor.descripcion;

    document.getElementById("modalCorreo").textContent =
        profesor.correo;

    document.getElementById("modalCursos").textContent =
        profesor.cursosQueImparte.join(", ");

    const elementoModal = document.getElementById("modalProfesor");
    const modalProfesor = new bootstrap.Modal(elementoModal);

    modalProfesor.show();
}

// Muestra los profesores cuando termina de cargar el documento.
document.addEventListener("DOMContentLoaded", renderizarProfesores);


