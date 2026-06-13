// Array de cursos destacados

const cursos = [
    {
        nombre: "Karting Profesional",
        descripcion: "Desarrolla las bases de conducción competitiva.",
        imagen: "https://circuitoftheamericas.com/wp-content/uploads/karting-hero-image-scaled.webp",
        categoria: "Inicial",
        enlace: "cursos.html#karting"
    },

    {
        nombre: "Conducción en Circuito",
        descripcion: "Aprende técnicas avanzadas de trazado y frenado.",
        imagen: "https://www.f1-fansite.com/wp-content/uploads/2012/09/nurburgring1.jpg",
        categoria: "Avanzada",
        enlace: "cursos.html#circuito"
    },

    {
        nombre: "Performance Racing",
        descripcion: "Optimiza tu rendimiento en condiciones de competencia.",
        imagen: "https://www.nationalroadautosport.com/wp-content/uploads/2023/12/Building-a-Champion-The-Anatomy-of-a-High-Performance-Racing-Car.jpg",
        categoria: "Avanzada",
        enlace: "cursos.html#performance"
    }
];

// Obtener el contenedor donde se mostrarán los cursos
const contenedor = document.getElementById("contenedorCursos");

// Recorrer el array y crear las tarjetas dinámicamente
cursos.forEach(curso => {

    const card = document.createElement("div");
    card.classList.add("curso-card");

    const imagen = document.createElement("img");
    imagen.src = curso.imagen;
    imagen.alt = curso.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = curso.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = curso.descripcion;

    const categoria = document.createElement("p");
    categoria.textContent = "Categoría: " + curso.categoria;

    const boton = document.createElement("a");
    boton.href = curso.enlace;
    boton.textContent = "Ver más";
    boton.classList.add("btn-ver-mas");

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(categoria);
    card.appendChild(boton);

    contenedor.appendChild(card);
});