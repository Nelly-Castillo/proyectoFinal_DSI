
<?php


if ($_SERVER["REQUEST_METHOD"] === "POST") {

    try {
    $carpeta_galeria = "./assets";
    $contador = count(glob($carpeta_galeria  . "/*"));

    $rutaGuardada = $carpeta_galeria ."/". $_FILES ["subir-archivo"]["name"] ;
    $rutaTemporal = $_FILES["subir-archivo"]["tmp_name"];

    

    move_uploaded_file($rutaTemporal, $rutaGuardada);
    echo file_exists($rutaGuardada);
    } catch (\Throwable $th) {
        echo $th; 
        
    }

//     if (move_uploaded_file($rutaTemporal, $rutaGuardada)) {
//         echo "El archivo se subió";
//         echo json_encode(['rutaImagen' => $rutaGuardada]);
//     } else {
//         echo "Error al subir el archivo.";
//     }

//     //   para comprobar que la carpeta tiene permisos
//     if (!is_dir($carpeta_galeria)) {
//         mkdir($carpeta_galeria, 0777, true);
//         //   que no falle darle full permisos ayudanos dios
//     }
      
//     if (is_writable($carpeta_galeria)) {
//         echo "Folder is writable.";
//     } else {
//         if (chmod($carpeta_galeria, 0777)) {
//             echo "se cambiaron los permissoosss";
//         } else {
//             echo "No jaló cambiarle los permisos";
//         }
//     }
}
    // $rutaDestino = "";
    // if(isset($_POST["enviar"])) {
    //     $archivo_nombre = $_FILES["archivo"]["name"];
    //     $archivo_temp = $_FILES["archivo"]["tmp_name"];
    //     $archivo_error = $_FILES["archivo"]["error"];
    
    //     if ($archivo_error === 0) {
    //         $this->rutaDestino = "assets/img/galeria/galeria2" . $archivo_nombre;
    //         move_uploaded_file($archivo_temp, $this->rutaDestino);
    //         echo "El archivo se ha subido correctamente a $this->rutaDestino.";
    //     } 
    //     else {
    //         echo "Error al subir el archivo. Código de error: $archivo_error";
    //     }
    // }
?>
