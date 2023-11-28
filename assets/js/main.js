const corazon = document.getElementById("megusta");
const contSubirFoto = document.getElementById("contenedorSubirFoto")
const divFormCrear = document.getElementById("divFormCrear");

corazon.addEventListener("click", (e) => {
    darLike(e);
    // console.log('Se dió like');
});

function darLike(evento){
    evento.target.classList.toggle("bi-heart-fill");
    evento.target.classList.toggle("bi-heart");
}


function mostrarCrear(){
    contSubirFoto.style.display="flex";
    console.log("se muestra el modal de crear");
}