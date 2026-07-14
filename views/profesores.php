<header class="encabezado-profesores">
    <h1>Equipo de Profesores</h1>

    <p>
        Conoce a los instructores encargados de formar a los futuros
        pilotos de carreras con experiencia, disciplina y pasión por
        el automovilismo.
    </p>
</header>

<main>
    <section class="seccion-profesores">
        <div class="titulo-seccion">
            <h2>Nuestros instructores</h2>

            <p class="descripcion-seccion">
                Cada profesor cuenta con experiencia en conducción
                deportiva, seguridad en pista y control profesional
                del vehículo.
            </p>
        </div>

        <?php if (!empty($mensajeError)): ?>
            <p class="mensaje-error">
                <?= htmlspecialchars($mensajeError, ENT_QUOTES, 'UTF-8') ?>
            </p>
        <?php endif; ?>

        <div
            id="contenedor-profesores"
            class="contenedor-profesores"
        >
            <?php if (!empty($profesores)): ?>

                <?php foreach ($profesores as $profesor): ?>

                    <article class="tarjeta-profesor">
                        <img
                            src="<?= htmlspecialchars(
                                $profesor['foto'],
                                ENT_QUOTES,
                                'UTF-8'
                            ) ?>"
                            alt="Fotografía de <?= htmlspecialchars(
                                $profesor['nombre'],
                                ENT_QUOTES,
                                'UTF-8'
                            ) ?>"
                            class="foto-profesor"
                        >

                        <div class="contenido-profesor">
                            <h3>
                                <?= htmlspecialchars(
                                    $profesor['nombre'],
                                    ENT_QUOTES,
                                    'UTF-8'
                                ) ?>
                            </h3>

                            <p class="especialidad-profesor">
                                <?= htmlspecialchars(
                                    $profesor['especialidad'],
                                    ENT_QUOTES,
                                    'UTF-8'
                                ) ?>
                            </p>

                            <p>
                                <?= htmlspecialchars(
                                    $profesor['descripcion'],
                                    ENT_QUOTES,
                                    'UTF-8'
                                ) ?>
                            </p>

                            <a
                                href="index.php?controller=profesores&action=show&id=<?= (int) $profesor['id'] ?>"
                                class="boton-detalle"
                            >
                                Ver detalle
                            </a>
                        </div>
                    </article>

                <?php endforeach; ?>

            <?php else: ?>

                <p class="sin-resultados">
                    Actualmente no hay profesores registrados.
                </p>

            <?php endif; ?>
        </div>
    </section>

    <section class="seccion-mision-vision">
        <div class="contenedor-mision-vision">
            <article class="caja-info">
                <h2>Misión</h2>

                <p>
                    Formar pilotos responsables, competitivos y preparados
                    mediante una enseñanza práctica enfocada en la conducción
                    deportiva, la seguridad en pista y el dominio técnico
                    del vehículo.
                </p>
            </article>

            <article class="caja-info">
                <h2>Visión</h2>

                <p>
                    Ser una academia reconocida por la calidad de sus
                    programas de automovilismo, la experiencia de sus
                    instructores y el desarrollo profesional de nuevos
                    pilotos de carreras.
                </p>
            </article>
        </div>
    </section>
</main>