-- 1. Crear la tabla para los cursos destacados
CREATE TABLE IF NOT EXISTS cursos_destacados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    imagen VARCHAR(255) NOT NULL
);

-- 2. Insertar los 5 registros de prueba iniciales obligatorios
INSERT INTO cursos_destacados (titulo, descripcion, categoria, imagen) VALUES
('Karting Profesional', 'Desarrolla las bases de conducción competitiva en pista.', 'Categoría: Inicial', 'karting.jpg'),
('Conducción en Circuito', 'Aprende técnicas avanzadas de trazado, frenado y adelantamiento.', 'Categoría: Avanzada', 'circuito.jpg'),
('Performance Racing', 'Optimiza tu rendimiento al máximo bajo condiciones extremas de competencia.', 'Categoría: Avanzada', 'performance.jpg'),
('Introducción a Circuitos', 'Conoce las reglas básicas, banderas y dinámicas fundamentales de pista.', 'Categoría: Inicial', 'introduccion.jpg'),
('Estrategias de Competencia', 'Planificación estratégica de carreras y toma inteligente de decisiones.', 'Categoría: Avanzada', 'estrategias.jpg');

CREATE TABLE IF NOT EXISTS cursos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    titulo VARCHAR(150) NOT NULL,

    descripcion TEXT NOT NULL,

    categoria VARCHAR(50) NOT NULL,

    imagen VARCHAR(255) NOT NULL

);

INSERT INTO cursos
(titulo, descripcion, categoria, imagen)

VALUES

('Karting Profesional',
'Desarrolla las bases de conducción competitiva.',
'Inicial',
'karting.jpg'),

('Introducción a Circuitos',
'Conoce el funcionamiento de un circuito profesional.',
'Inicial',
'introduccion.jpg'),

('Conducción en Circuito',
'Aprende técnicas avanzadas de conducción.',
'Avanzada',
'circuito.jpg'),

('Performance Racing',
'Mejora tu rendimiento en competencias.',
'Avanzada',
'performance.jpg'),

('Estrategias de Competencia',
'Planificación y toma de decisiones durante una carrera.',
'Avanzada',
'estrategias.jpg');


CREATE TABLE IF NOT EXISTS profesores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
    foto VARCHAR(500) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    cursos_imparte VARCHAR(300) NOT NULL
);

INSERT INTO profesores (
    nombre,
    especialidad,
    descripcion,
    foto,
    correo,
    cursos_imparte
) VALUES
(
    'Carlos Méndez',
    'Conducción Deportiva',
    'Piloto profesional con experiencia en circuitos, trazado de curvas, control del vehículo y técnicas de conducción competitiva.',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    'carlos.mendez@academiadepilotos.com',
    'Karting Profesional, Introducción a Circuitos, Conducción en Circuito'
),
(
    'María Fernández',
    'Manejo Defensivo',
    'Instructora especializada en prevención de accidentes, reacción ante emergencias y conducción segura dentro y fuera de la pista.',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    'maria.fernandez@academiadepilotos.com',
    'Karting Profesional, Karting Avanzado, Estrategias de Competencia'
),
(
    'Andrés Rodríguez',
    'Técnicas de Frenado',
    'Instructor especializado en frenado deportivo, distribución del peso, entrada a curvas y control del automóvil a alta velocidad.',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    'andres.rodriguez@academiadepilotos.com',
    'Karting Avanzado, Conducción en Circuito, Performance Racing'
),
(
    'Laura Castillo',
    'Control y Derrape',
    'Piloto e instructora con experiencia en control de derrapes, pérdida de adherencia y conducción en diferentes condiciones de pista.',
    'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80',
    'laura.castillo@academiadepilotos.com',
    'Conducción en Circuito, Performance Racing, Estrategias de Competencia'
),
(
    'Javier Vargas',
    'Estrategia de Competencia',
    'Instructor especializado en planificación de carreras, toma de decisiones, adelantamientos y administración del rendimiento del vehículo.',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    'javier.vargas@academiadepilotos.com',
    'Introducción a Circuitos, Performance Racing, Estrategias de Competencia'
);