<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $carpeta = "assets/img/galeria";  // Specify the folder where you want to save the files

    $contador = count(glob($carpeta . '*'));
    $contador++;

    $rutaGuardada = $carpeta . $contador;

        // Move the uploaded file to the target directory
      if (move_uploaded_file($_FILES["subir-archivo"]["tmp_name"], $$rutaGuardada)) {
            echo "El archivo se subió";
            echo json_encode(['rutaImagen' => $rutaGuardada]);
        } else {
      } else {
          echo "Error al subir el archivo.";
      }
}
?>