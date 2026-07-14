<main class="seccion-detalle-profesor">

    <?php if (!empty($mensajeError)): ?>

        <div class="mensaje-error">
            <p>
                <?= htmlspecialchars(
                    $mensajeError,
                    ENT_QUOTES,
                    'UTF-8'
                ) ?>
            </p>

            <a
                href="index.php?controller=profesores&action=index"
                class="boton-volver"
            >
                Volver a profesores
            </a>
        </div>

    <?php elseif (!empty($profesor)): ?>

        <article class="tarjeta-detalle-profesor">

            <div class="contenedor-foto-detalle">
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
                    class="foto-detalle-profesor"
                >
            </div>

            <div class="informacion-detalle-profesor">
                <h1>
                    <?= htmlspecialchars(
                        $profesor['nombre'],
                        ENT_QUOTES,
                        'UTF-8'
                    ) ?>
                </h1>

                <h2>
                    <?= htmlspecialchars(
                        $profesor['especialidad'],
                        ENT_QUOTES,
                        'UTF-8'
                    ) ?>
                </h2>

                <p>
                    <?= htmlspecialchars(
                        $profesor['descripcion'],
                        ENT_QUOTES,
                        'UTF-8'
                    ) ?>
                </p>

                <p>
                    <strong>Correo:</strong>

                    <a href="mailto:<?= htmlspecialchars(
                        $profesor['correo'],
                        ENT_QUOTES,
                        'UTF-8'
                    ) ?>">
                        <?= htmlspecialchars(
                            $profesor['correo'],
                            ENT_QUOTES,
                            'UTF-8'
                        ) ?>
                    </a>
                </p>

                <p>
                    <strong>Cursos que imparte:</strong>

                    <?= htmlspecialchars(
                        $profesor['cursos_imparte'],
                        ENT_QUOTES,
                        'UTF-8'
                    ) ?>
                </p>

                <a
                    href="index.php?controller=profesores&action=index"
                    class="boton-volver"
                >
                    Volver a profesores
                </a>
            </div>

        </article>

    <?php endif; ?>

</main>