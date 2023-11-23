<?php
    $servidor = "localhost";
    $username = "root";
    $password = "";
    $nombreBD = "datos.perfiles.sql";

    $db = new mysqli($servidor, $username, $password, $nombreBD);
    return $db;
?>