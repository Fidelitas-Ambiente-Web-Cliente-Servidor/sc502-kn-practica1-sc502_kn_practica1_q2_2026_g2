<?php
$tituloPagina = "Cursos";
$cssPagina = "cursos.css";
?>

<section class="hero">
    <div class="container py-5 text-center">

        <h1 class="fw-bold display-4">
            Catálogo de Cursos
        </h1>

        <p class="lead">
            Descubre nuestros programas de formación para convertirte
            en un piloto competitivo y profesional.
        </p>

    </div>
</section>

<div class="container my-5">

    <form method="GET" class="mb-4">

        <input type="hidden" name="controller" value="cursos">

        <input type="hidden" name="action" value="index">

        <div class="row justify-content-center">

            <div class="col-md-4">

                <select
                    class="form-select"
                    name="categoria"
                    onchange="this.form.submit()">

                    <option value="">
                        Todas las categorías
                    </option>

                    <option
                        value="Inicial"
                        <?= (isset($_GET['categoria']) && $_GET['categoria']=="Inicial") ? "selected" : "" ?>>
                        Inicial
                    </option>

                    <option
                        value="Avanzada"
                        <?= (isset($_GET['categoria']) && $_GET['categoria']=="Avanzada") ? "selected" : "" ?>>
                        Avanzada
                    </option>

                </select>

            </div>

        </div>

    </form>

    <div class="row">

        <?php if(!empty($cursos)){ ?>

            <?php foreach($cursos as $curso){ ?>

                <div class="col-md-4 mb-4">

                    <div class="card h-100 shadow">

                        <img
                            src="<?= htmlspecialchars($curso['imagen']) ?>"
                            class="card-img-top"
                            style="height:220px;object-fit:cover;">

                        <div class="card-body">

                            <h5 class="fw-bold">

                                <?= htmlspecialchars($curso['titulo']) ?>

                            </h5>

                            <p>

                                <?= htmlspecialchars($curso['descripcion']) ?>

                            </p>

                            <span class="badge bg-danger">

                                <?= htmlspecialchars($curso['categoria']) ?>

                            </span>

                        </div>

                    </div>

                </div>

            <?php } ?>

        <?php } else { ?>

            <div class="col-12">

                <div class="alert alert-warning">

                    No existen cursos registrados.

                </div>

            </div>

        <?php } ?>

    </div>

</div>