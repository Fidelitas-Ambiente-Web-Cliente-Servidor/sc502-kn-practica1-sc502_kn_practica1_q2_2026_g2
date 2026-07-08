<?php

require_once __DIR__ . "/../config/database.php";

class ContactoModel
{
    private $db;

    public function __construct()
    {
        $this->db = Database::conectar();
    }

    public function guardarMensaje($nombre, $correo, $telefono, $asunto, $mensaje)
    {
        $sql = "INSERT INTO contactos (nombre, correo, telefono, asunto, mensaje)
                VALUES (:nombre, :correo, :telefono, :asunto, :mensaje)";

        $stmt = $this->db->prepare($sql);

        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":correo", $correo);
        $stmt->bindParam(":telefono", $telefono);
        $stmt->bindParam(":asunto", $asunto);
        $stmt->bindParam(":mensaje", $mensaje);

        return $stmt->execute();
    }
}