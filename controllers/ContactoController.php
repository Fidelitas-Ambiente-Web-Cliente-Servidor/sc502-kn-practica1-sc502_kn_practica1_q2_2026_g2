<?php

require_once __DIR__ . "/../models/ContactoModel.php";

class ContactoController
{
    private $modelo;

    public function __construct()
    {
        $this->modelo = new ContactoModel();
    }

    public function index()
    {
        $mensajeExito = "";
        $mensajeError = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nombre = $_POST["nombre"] ?? "";
            $correo = $_POST["correo"] ?? "";
            $telefono = $_POST["telefono"] ?? "";
            $asunto = $_POST["asunto"] ?? "";
            $mensaje = $_POST["mensaje"] ?? "";

            if ($nombre != "" && $correo != "" && $telefono != "" && $asunto != "" && $mensaje != "") {
                $resultado = $this->modelo->guardarMensaje($nombre, $correo, $telefono, $asunto, $mensaje);

                if ($resultado) {
                    $mensajeExito = "Mensaje enviado correctamente. Nos pondremos en contacto pronto.";
                } else {
                    $mensajeError = "No se pudo enviar el mensaje.";
                }
            } else {
                $mensajeError = "Debe completar todos los campos.";
            }
        }

        require_once __DIR__ . "/../views/contacto/index.php";
    }
}