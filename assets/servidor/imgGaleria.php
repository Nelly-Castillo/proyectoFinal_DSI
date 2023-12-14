<?php
function namesGaleria($carpeta)
{
    $nombresImagenes = [];

    //Ve todo lo que hay en la carpeta, investogar más de scandir
    $archivos = scandir($carpeta);

    //se iterra en cada elemento del array y lo pasa como archivo
    foreach ($archivos as $archivo) {

        $extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif'];
        $extension = pathinfo($archivo, PATHINFO_EXTENSION);

        if (in_array(strtolower($extension), $extensionesPermitidas)) {
            $nombresImagenes[] = $archivo;
        }
    }

    return $nombresImagenes;
}
?>
