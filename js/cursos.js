const cursos = [
    {
        nombre: "Karting Profesional",
        descripcion: "Aprende las bases del automovilismo deportivo.",
        categoria: "Inicial",
        duracion: "2 meses",
        precio: "$250",
        imagen: "https://circuitoftheamericas.com/wp-content/uploads/karting-hero-image-scaled.webp"
    },

    {
        nombre: "Karting Avanzado",
        descripcion: "Mejora técnicas de frenado y control del vehículo.",
        categoria: "Inicial",
        duracion: "3 meses",
        precio: "$320",
        imagen: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
    },

    {
        nombre: "Introducción a Circuitos",
        descripcion: "Conoce las reglas y dinámicas de pista.",
        categoria: "Inicial",
        duracion: "1 mes",
        precio: "$180",
        imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },

    {
        nombre: "Conducción en Circuito",
        descripcion: "Técnicas avanzadas de trazado y adelantamiento.",
        categoria: "Avanzada",
        duracion: "4 meses",
        precio: "$500",
        imagen: "https://www.f1-fansite.com/wp-content/uploads/2012/09/nurburgring1.jpg"
    },

    {
        nombre: "Performance Racing",
        descripcion: "Optimiza tu desempeño en competición.",
        categoria: "Avanzada",
        duracion: "5 meses",
        precio: "$650",
        imagen: "https://www.nationalroadautosport.com/wp-content/uploads/2023/12/Building-a-Champion-The-Anatomy-of-a-High-Performance-Racing-Car.jpg"
    },

    {
        nombre: "Estrategias de Competencia",
        descripcion: "Planificación de carrera y toma de decisiones.",
        categoria: "Avanzada",
        duracion: "3 meses",
        precio: "$450",
        imagen: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    }
];

const contenedor = document.getElementById("contenedorCursos");
const busqueda = document.getElementById("busqueda");
const filtroCategoria = document.getElementById("filtroCategoria");

function renderizarCursos(listaCursos) {

    contenedor.innerHTML = "";

    listaCursos.forEach(curso => {

        contenedor.innerHTML += `
            <div class="curso-card">
                <img src="${curso.imagen}" alt="${curso.nombre}">
                <h3>${curso.nombre}</h3>
                <p class="categoria-texto">Categoría: ${curso.categoria}</p>
                <p>${curso.descripcion}</p>
                <p><strong>Duración:</strong> ${curso.duracion}</p>
                <p><strong>Precio:</strong> ${curso.precio}</p>
            </div>
        `;
    });
}

function aplicarFiltros() {

    const textoBusqueda = busqueda.value.toLowerCase();

    const categoriaSeleccionada = filtroCategoria.value;

    const cursosFiltrados = cursos.filter(curso => {

        const coincideTexto =
            curso.nombre.toLowerCase().includes(textoBusqueda) ||
            curso.descripcion.toLowerCase().includes(textoBusqueda);

        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            curso.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;
    });

    renderizarCursos(cursosFiltrados);
}

busqueda.addEventListener("input", aplicarFiltros);

filtroCategoria.addEventListener("change", aplicarFiltros);

renderizarCursos(cursos);