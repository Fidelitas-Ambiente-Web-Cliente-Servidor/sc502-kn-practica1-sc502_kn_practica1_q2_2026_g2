<?php

require_once __DIR__ . '/../models/ProfesorModel.php';

class ProfesoresController
{
    private ProfesorModel $modelo;

    public function __construct()
    {
        $this->modelo = new ProfesorModel();
    }

    public function index(): void
    {
        try {
            $profesores = $this->modelo->getAll();
            $mensajeError = null;
        } catch (PDOException $error) {
            $profesores = [];
            $mensajeError = 'No fue posible cargar los profesores.';
        }

        $tituloPagina = 'Profesores';
        $cssPagina = 'profesores.css';

        require __DIR__ . '/../views/layout/header.php';
        require __DIR__ . '/../views/profesores.php';
        require __DIR__ . '/../views/layout/footer.php';
    }

    public function show($id): void
    {
        $idProfesor = filter_var($id, FILTER_VALIDATE_INT);

        if ($idProfesor === false || $idProfesor < 1) {
            http_response_code(400);

            $profesor = null;
            $mensajeError = 'El identificador del profesor no es válido.';
        } else {
            try {
                $profesor = $this->modelo->getById($idProfesor);
                $mensajeError = null;

                if ($profesor === null) {
                    http_response_code(404);
                    $mensajeError = 'El profesor solicitado no existe.';
                }
            } catch (PDOException $error) {
                http_response_code(500);

                $profesor = null;
                $mensajeError = 'No fue posible consultar el profesor.';
            }
        }

        $tituloPagina = 'Detalle del profesor';
        $cssPagina = 'profesores.css';

        require __DIR__ . '/../views/layout/header.php';
        require __DIR__ . '/../views/profesor-detalle.php';
        require __DIR__ . '/../views/layout/footer.php';
    }
}