// Array de objetos que contiene la información completa de cada profesor
const profesores = [
    {
        nombre: "Carlos Méndez",
        especialidad: "Instructor de Vuelo",
        descripcion: "Piloto comercial con experiencia en formación inicial, maniobras básicas de vuelo y seguridad aérea. Cuenta con más de 8 años formando estudiantes en programas de aviación.",
        foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
        correo: "carlos.mendez@academiadepilotos.com",
        cursosQueImparte: [
            "Introducción a la Aviación",
            "Vuelo Básico",
            "Seguridad Aérea"
        ]
    },
    {
        nombre: "María Fernández",
        especialidad: "Meteorología Aeronáutica",
        descripcion: "Especialista en interpretación del clima, análisis de condiciones atmosféricas y planificación segura de vuelos según el comportamiento meteorológico.",
        foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
        correo: "maria.fernandez@academiadepilotos.com",
        cursosQueImparte: [
            "Meteorología Aeronáutica",
            "Navegación Aérea",
            "Planificación de Vuelo"
        ]
    },
    {
        nombre: "Andrés Rodríguez",
        especialidad: "Navegación Aérea",
        descripcion: "Instructor enfocado en rutas aéreas, lectura de cartas aeronáuticas, procedimientos de navegación y uso correcto de instrumentos de vuelo.",
        foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
        correo: "andres.rodriguez@academiadepilotos.com",
        cursosQueImparte: [
            "Navegación Aérea",
            "Cartografía Aeronáutica",
            "Procedimientos de Ruta"
        ]
    },
    {
        nombre: "Laura Castillo",
        especialidad: "Seguridad Operacional",
        descripcion: "Profesora con experiencia en protocolos de seguridad, gestión de riesgos, prevención de incidentes y factores humanos dentro del entorno aeronáutico.",
        foto: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80",
        correo: "laura.castillo@academiadepilotos.com",
        cursosQueImparte: [
            "Seguridad Operacional",
            "Gestión de Riesgos",
            "Factores Humanos"
        ]
    }
];

// Se obtiene el contenedor donde se van a insertar las tarjetas generadas con JavaScript
const contenedorProfesores = document.getElementById("contenedor-profesores");

function renderizarProfesores() {
    profesores.forEach((profesor, index) => {
        const columna = document.createElement("div");
        columna.classList.add("col-md-6", "col-lg-3");

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "tarjeta-profesor");

        // Se agrega un atributo data-* para identificar cuál profesor fue seleccionado
        tarjeta.setAttribute("data-profesor", index);

        const imagen = document.createElement("img");
        imagen.src = profesor.foto;
        imagen.alt = profesor.nombre;
        imagen.classList.add("card-img-top", "foto-profesor");

        const cuerpo = document.createElement("div");
        cuerpo.classList.add("card-body", "text-center");

        const nombre = document.createElement("h5");
        nombre.classList.add("card-title");
        nombre.textContent = profesor.nombre;

        const especialidad = document.createElement("p");
        especialidad.classList.add("especialidad-profesor");
        especialidad.textContent = profesor.especialidad;

        const descripcion = document.createElement("p");
        descripcion.classList.add("card-text");
        descripcion.textContent = profesor.descripcion;

        const boton = document.createElement("button");
        boton.classList.add("btn", "btn-primary");
        boton.textContent = "Ver detalle";

        cuerpo.appendChild(nombre);
        cuerpo.appendChild(especialidad);
        cuerpo.appendChild(descripcion);
        cuerpo.appendChild(boton);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(cuerpo);

        columna.appendChild(tarjeta);
        contenedorProfesores.appendChild(columna);

        // Al hacer clic en la tarjeta se obtiene el índice del profesor y se abre el modal
        tarjeta.addEventListener("click", function () {
            const profesorSeleccionado = this.getAttribute("data-profesor");
            abrirModalProfesor(profesorSeleccionado);
        });
    });
}

// Función que recibe el índice del profesor seleccionado y muestra sus datos
function abrirModalProfesor(index) {
    const profesor = profesores[index];

    document.getElementById("modalProfesorLabel").textContent = profesor.nombre;
    document.getElementById("modalFoto").src = profesor.foto;
    document.getElementById("modalFoto").alt = profesor.nombre;
    document.getElementById("modalNombre").textContent = profesor.nombre;
    document.getElementById("modalEspecialidad").textContent = profesor.especialidad;
    document.getElementById("modalDescripcion").textContent = profesor.descripcion;
    document.getElementById("modalCorreo").textContent = profesor.correo;
    document.getElementById("modalCursos").textContent = profesor.cursosQueImparte.join(", ");

    // Se crea una instancia del modal de Bootstrap y se muestra en pantalla
    const modalProfesor = new bootstrap.Modal(document.getElementById("modalProfesor"));
    modalProfesor.show();
}

// Se ejecuta la función principal para mostrar los profesores al cargar la página
renderizarProfesores();