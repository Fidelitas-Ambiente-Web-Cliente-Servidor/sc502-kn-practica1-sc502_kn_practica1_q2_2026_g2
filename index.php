<?php

$controller = $_GET["controller"] ?? "contacto";
$action = $_GET["action"] ?? "index";

if ($controller == "contacto") {
    require_once "controllers/ContactoController.php";
    $controlador = new ContactoController();
    $controlador->$action();
} else {
    echo "Página no encontrada";
}