<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$controller = isset($_GET['controller']) ? $_GET['controller'] : 'index';
$action = isset($_GET['action']) ? $_GET['action'] : 'index';

if ($controller === 'index') {
    require_once __DIR__ . '/controllers/IndexController.php';
    $controllerInstance = new IndexController();
    $controllerInstance->$action();
} else {
    die("Controlador no mapeado.");
}