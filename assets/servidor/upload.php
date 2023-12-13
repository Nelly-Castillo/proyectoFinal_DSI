<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $carpeta_galeria = "assets/img/galeria";
    $contador = count(glob($carpeta_galeria  . "/*"));

    $rutaGuardada = $carpeta_galeria . $contador;
    $rutaTemporal = $_FILES["subir-archivo"]["tmp_name"];

    if (move_uploaded_file($rutaTemporal, $rutaGuardada)) {
        echo "El archivo se subió";
        json_encode(['rutaImagen' => $rutaGuardada]);
    } else {
        echo "Error al subir el archivo.";
    }

    //   para comprobar que la carpeta tiene permisos
    if (!is_dir($carpeta_galeria)) {
        mkdir($carpeta_galeria, 0777, true);
        //   que no falle darle full permisos ayudanos dios
    }
      
    if (is_writable($carpeta_galeria)) {
        echo "Folder is writable.";
    } else {
        if (chmod($carpeta_galeria, 0777)) {
            echo "se cambiaron los permissoosss";
        } else {
            echo "No jaló cambiarle los permisos";
        }
    }
      
}
?>