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