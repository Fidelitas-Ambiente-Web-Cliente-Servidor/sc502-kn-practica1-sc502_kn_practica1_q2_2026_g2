<?php

require_once __DIR__ . '/../models/CursosModel.php';

class CursosController
{

    public function index()
    {

        $model = new CursosModel();

        $categoria = $_GET['categoria'] ?? '';

        if ($categoria != '') {

            $cursos = $model->getByCategory($categoria);

        } else {

            $cursos = $model->getAll();

        }

        require_once __DIR__ . '/../views/layout/header.php';

        require_once __DIR__ . '/../views/cursos.php';

        require_once __DIR__ . '/../views/layout/footer.php';

    }

}