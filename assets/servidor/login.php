<?php
    if(isset($_POST['submit'])){
            $db = require("db.php");
            $usuario = $_POST['nombre_usuario'];
            $contrasena = $_POST['contrasena'];
    }
    
    $verificar_sesion = "SELECT 1 FROM usuario WHERE nombre_usuario = '$usuario' AND contrasena = '$contrasena' ";
        $resultado = $db->query($verificar_sesion);
        if($resultado->fetch_row()){
            // $datos_correctos = TRUE;
        } else {
            // $datos_correctos = FALSE;
        }
?>