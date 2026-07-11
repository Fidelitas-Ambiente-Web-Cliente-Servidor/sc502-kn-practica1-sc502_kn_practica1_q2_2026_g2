<section class="hero">
    <div class="container py-5">
        <h1 class="fw-bold display-4">Academia de Pilotos de Carreras</h1>
        <p class="lead">Forma parte de la próxima generación de pilotos profesionales.</p>
        <a href="index.php?controller=cursos&action=index" class="btn btn-light text-danger fw-bold px-4 py-2">Ver Cursos</a>
    </div>
</section>

<main class="container my-5 text-center">
    <h2 class="fw-bold mb-4">Cursos Destacados</h2>
    
    <div class="row justify-content-center g-4">
        <?php if (!empty($cursosDestacados)): ?>
            <?php foreach ($cursosDestacados as $curso): ?>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm text-center p-3">
                        <img src="<?php echo htmlspecialchars($curso['imagen']); ?>" class="card-img-top rounded shadow-sm" alt="<?php echo htmlspecialchars($curso['titulo']); ?>" style="height: 180px; object-fit: cover;">                        
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title fw-bold mt-2 text-dark"><?php echo htmlspecialchars($curso['titulo']); ?></h5>
                            <p class="card-text text-muted small px-2 flex-grow-1"><?php echo htmlspecialchars($curso['descripcion']); ?></p>
                            
                            <span class="text-secondary small mb-3 d-block fw-semibold"><?php echo htmlspecialchars($curso['categoria']); ?></span>
                            
                            <a href="index.php?controller=cursos&action=index" class="btn btn-danger btn-sm px-4 text-white">Ver más</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php else: ?>
            <div class="col-12">
                <p class="text-muted">No hay cursos destacados disponibles en este momento.</p>
            </div>
        <?php endif; ?>
    </div>
</main>

<section class="bg-light py-5 text-center">
    <div class="container">
        <h3 class="fw-bold mb-4">Nuestra Academia en Números</h3>
        <div class="row text-danger fw-bold">
            <div class="col-4">
                <p class="display-6 mb-0">850+</p>
                <small class="text-muted text-uppercase">Estudiantes Graduados</small>
            </div>
            <div class="col-4">
                <p class="display-6 mb-0">18</p>
                <small class="text-muted text-uppercase">Instructores Certificados</small>
            </div>
            <div class="col-4">
                <p class="display-6 mb-0">12</p>
                <small class="text-muted text-uppercase">Programas Disponibles</small>
            </div>
        </div>
    </div>
</section>