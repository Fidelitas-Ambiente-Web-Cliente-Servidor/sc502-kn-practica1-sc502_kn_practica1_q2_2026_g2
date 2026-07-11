<?php
// Usamos __DIR__ para asegurar que la ruta a la configuración sea absoluta
require_once __DIR__ . '/../config/database.php';

class IndexModel {
    private $db;

    public function __construct() {
        // Conexión directa utilizando el método estático de tu archivo database.php
        $this->db = Database::conectar();
    }

    /**
     * Extrae todos los cursos destacados almacenados en la base de datos
     */
    public function getAll() {
        try {
            $query = "SELECT id, titulo, descripcion, categoria, imagen FROM cursos_destacados";
            $stmt = $this->db->prepare($query);
            $stmt->execute();
            
            // Retorna los registros como un array asociativo
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            // Si hay un error, retorna un array vacío para no romper la interfaz
            return [];
        }
    }
}