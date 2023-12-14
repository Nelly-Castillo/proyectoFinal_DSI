<?php
    if(isset($_POST['submit'])){
        $db = require("db.php");
        $usuario = $_POST['nombre_usuario'];
        $contrasena = $_POST['contrasena'];
    }
    
    $verificar_sesion = "SELECT 1 FROM usuario WHERE nombre_usuario = '$usuario' AND contrasena = '$contrasena' ";
    $resultado = $db->query($verificar_sesion);
    if($resultado->fetch_row()){
        // permitir seguir hacia la siguiente pagina
        echo "<script>window.location.href = 'index.html'</script>"
    } else {
        // crear un alert
        echo "<script>alert('Nombre o usuario incorrectos)</script>";
    }
?>