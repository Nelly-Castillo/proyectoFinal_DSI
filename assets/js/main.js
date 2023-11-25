let corazon = document.getElementById('megusta');
corazon.addEventListener("click", (e)=>{
    darLike(e);
});

function darLike(evento){
    evento.target.classList.toggle("bi-heart");
    evento.target.classList.toggle("bi-heart-fill");
}