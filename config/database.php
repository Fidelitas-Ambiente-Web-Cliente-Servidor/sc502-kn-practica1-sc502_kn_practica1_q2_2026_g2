<?php

class Database
{
    private static $conexion = null;

    public static function conectar()
    {
        if (self::$conexion == null) {
          try {
                self::$conexion = new PDO(
                    "mysql:host=db;dbname=appdb;charset=utf8",
                    "root",
                    "root"
                );

                self::$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            } catch (PDOException $e) {
                die("Error de conexión: " . $e->getMessage());
            }
        }

        return self::$conexion;
    }
}