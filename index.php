<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$controller = strtolower($_GET['controller'] ?? 'index');
$action = strtolower($_GET['action'] ?? 'index');

switch ($controller) {

    case 'index':
        require_once __DIR__ . '/controllers/IndexController.php';

        $controllerInstance = new IndexController();

        if ($action === 'index') {
            $controllerInstance->index();
        } else {
            http_response_code(404);
            echo 'Acción no encontrada.';
        }

        break;

        case 'cursos':
    require_once __DIR__ . '/controllers/CursosController.php';

    $controllerInstance = new CursosController();

    if ($action === 'index') {
        $controllerInstance->index();
    } else {
        http_response_code(404);
        echo 'Acción de cursos no encontrada.';
    }

    break;

    case 'profesores':
        require_once __DIR__ . '/controllers/ProfesoresController.php';

        $controllerInstance = new ProfesoresController();

        switch ($action) {

            case 'index':
                $controllerInstance->index();
                break;

            case 'show':
                $id = $_GET['id'] ?? null;
                $controllerInstance->show($id);
                break;

            default:
                http_response_code(404);
                echo 'Acción de profesores no encontrada.';
                break;
        }

        break;

    default:
        http_response_code(404);
        echo 'Controlador no mapeado.';
        break;
}