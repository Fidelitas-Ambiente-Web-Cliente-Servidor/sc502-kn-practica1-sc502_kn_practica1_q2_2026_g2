<?php

require_once __DIR__ . '/../config/database.php';

class CursosModel
{

    private $db;

    public function __construct()
    {
        $this->db = Database::conectar();
    }

    public function getAll()
    {
        $sql = "SELECT * FROM cursos";

        $stmt = $this->db->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByCategory($cat)
    {
        $sql = "SELECT * FROM cursos WHERE categoria LIKE ?";

        $stmt = $this->db->prepare($sql);

        $stmt->execute(["%$cat%"]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}