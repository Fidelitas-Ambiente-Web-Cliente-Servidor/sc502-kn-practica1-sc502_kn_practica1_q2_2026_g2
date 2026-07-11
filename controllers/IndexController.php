<?php
require_once __DIR__ . '/../models/IndexModel.php';

class IndexController {
    
    /**
     * Acción por defecto: Carga la página de inicio
     */
    public function index() {
        // 1. Instanciar el modelo
        $model = new IndexModel();
        
        // 2. Obtener la información dinámica desde MySQL
        $cursosDestacados = $model->getAll();
        
        // 3. Cargar las vistas subiendo un nivel (/../) y entrando a views
        require_once __DIR__ . '/../views/layout/header.php';
        

        require_once __DIR__ . '/../views/index.php';
        
        require_once __DIR__ . '/../views/layout/footer.php';
    }
}