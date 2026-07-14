<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        <?= htmlspecialchars(
            $tituloPagina ?? 'Academia de Pilotos de Carreras',
            ENT_QUOTES,
            'UTF-8'
        ) ?>
    </title>

    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
    >

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
    >

    <link rel="stylesheet" href="/practica1/css/style.css">
    <link rel="stylesheet" href="/practica1/css/index.css">

    <?php if (!empty($cssPagina)): ?>
        <link
            rel="stylesheet"
            href="/practica1/css/<?= htmlspecialchars(
                $cssPagina,
                ENT_QUOTES,
                'UTF-8'
            ) ?>"
        >
    <?php endif; ?>
</head>

<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">

        <a
            class="navbar-brand fw-bold text-uppercase"
            href="index.php"
        >
            Academia de Pilotos
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Abrir menú de navegación"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div
            class="collapse navbar-collapse"
            id="navbarNav"
        >
            <ul class="navbar-nav ms-auto fw-semibold">

                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="index.php?controller=index&action=index"
                    >
                        Inicio
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="index.php?controller=cursos&action=index"
                    >
                        Cursos
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="index.php?controller=profesores&action=index"
                    >
                        Profesores
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="index.php?controller=contacto&action=index"
                    >
                        Contacto
                    </a>
                </li>

            </ul>
        </div>
    </div>
</nav>