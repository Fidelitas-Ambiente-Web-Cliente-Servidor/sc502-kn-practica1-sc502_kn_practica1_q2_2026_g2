const profesores = [
    {
        nombre: "Carlos Méndez",
        especialidad: "Conducción Deportiva",
        descripcion: "Piloto profesional con experiencia en circuitos, trazado de curvas, control del vehículo y técnicas de conducción competitiva.",
        foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
        correo: "carlos.mendez@academiadepilotos.com",
        cursosQueImparte: [
            "Introducción a Circuitos",
            "Conducción en Circuito",
            "Performance Racing"
        ]
    },

    {
        nombre: "María Fernández",
        especialidad: "Manejo Defensivo",
        descripcion: "Instructora especializada en prevención de accidentes, reacción ante emergencias y conducción segura dentro y fuera de la pista.",
        foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
        correo: "maria.fernandez@academiadepilotos.com",
        cursosQueImparte: [
            "Karting Profesional",
            "Introducción a Circuitos",
            "Estrategias de Competencia"
        ]
    },

    {
        nombre: "Andrés Rodríguez",
        especialidad: "Técnicas de Frenado",
        descripcion: "Instructor especializado en frenado deportivo, distribución del peso, entrada a curvas y control del automóvil a alta velocidad.",
        foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
        correo: "andres.rodriguez@academiadepilotos.com",
        cursosQueImparte: [
            "Karting Avanzado",
            "Conducción en Circuito",
            "Performance Racing"
        ]
    },

    {
        nombre: "Laura Castillo",
        especialidad: "Control y Derrape",
        descripcion: "Piloto e instructora con experiencia en control de derrapes, pérdida de adherencia y conducción en diferentes condiciones de pista.",
        foto: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80",
        correo: "laura.castillo@academiadepilotos.com",
        cursosQueImparte: [
            "Karting Avanzado",
            "Conducción en Circuito",
            "Estrategias de Competencia"
        ]
    }
];

const contenedor = document.getElementById("contenedor-profesores");

function renderizarProfesores() {

    contenedor.innerHTML = "";

    profesores.forEach((profesor, index) => {

        contenedor.innerHTML += `
            <div class="tarjeta-profesor">
                <img
                    src="${profesor.foto}"
                    alt="${profesor.nombre}"
                    class="foto-profesor"
                >

                <div class="contenido-profesor">
                    <h3>${profesor.nombre}</h3>

                    <p class="especialidad-profesor">
                        ${profesor.especialidad}
                    </p>

                    <p>
                        ${profesor.descripcion}
                    </p>

                    <button
                        type="button"
                        class="btn btn-primary boton-detalle"
                        onclick="abrirModalProfesor(${index})"
                    >
                        Ver detalle
                    </button>
                </div>
            </div>
        `;
    });
}

function abrirModalProfesor(index) {

    const profesor = profesores[index];

    document.getElementById("modalProfesorLabel").textContent =
        profesor.nombre;

    document.getElementById("modalFoto").src =
        profesor.foto;

    document.getElementById("modalFoto").alt =
        profesor.nombre;

    document.getElementById("modalNombre").textContent =
        profesor.nombre;

    document.getElementById("modalEspecialidad").textContent =
        profesor.especialidad;

    document.getElementById("modalDescripcion").textContent =
        profesor.descripcion;

    document.getElementById("modalCorreo").textContent =
        profesor.correo;

    document.getElementById("modalCursos").textContent =
        profesor.cursosQueImparte.join(", ");

    const modal = new bootstrap.Modal(
        document.getElementById("modalProfesor")
    );

    modal.show();
}

renderizarProfesores();

