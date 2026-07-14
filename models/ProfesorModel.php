<?php

require_once __DIR__ . '/../config/database.php';

class ProfesorModel
{
    private PDO $conexion;

    public function __construct()
    {
        $this->conexion = Database::getInstance()->getConnection();
    }

    public function getAll(): array
    {
        $sql = "
            SELECT
                id,
                nombre,
                especialidad,
                descripcion,
                foto,
                correo,
                cursos_imparte
            FROM profesores
            ORDER BY nombre ASC
        ";

        $consulta = $this->conexion->prepare($sql);
        $consulta->execute();

        return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById(int $id): ?array
    {
        $sql = "
            SELECT
                id,
                nombre,
                especialidad,
                descripcion,
                foto,
                correo,
                cursos_imparte
            FROM profesores
            WHERE id = :id
            LIMIT 1
        ";

        $consulta = $this->conexion->prepare($sql);

        $consulta->execute([
            ':id' => $id
        ]);

        $profesor = $consulta->fetch(PDO::FETCH_ASSOC);

        if ($profesor === false) {
            return null;
        }

        return $profesor;
    }
}