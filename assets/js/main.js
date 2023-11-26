const corazon = document.getElementById("megusta");
corazon.addEventListener("click", (e) => {
    darLike(e);
    // console.log('Se dió like');
});

function darLike(evento){
    evento.target.classList.toggle("bi-heart-fill");
    evento.target.classList.toggle("bi-heart");
}

// Esto es para cargar el modal de subir fotos
document.addEventListener("DOMContentLoaded", function () {
    const modalFotos = document.getElementById('contenedorSubirFoto');
    modalFotos.innerHTML = '<object type="text/html" data="subirFoto.html" ></object>';
});