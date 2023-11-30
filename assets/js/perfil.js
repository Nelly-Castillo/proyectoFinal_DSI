const contenedorSeguidos = document.getElementById("contenedorSeguidos");
const botonss1 = document.getElementById("boton-ss1"); 
const botonss2 = document.getElementById("boton-ss2"); 
const botonss3 = document.getElementById("boton-ss3"); 


function modalSeguidos(){
    contenedorSeguidos.style.display="flex";
}

contenedorSeguidos.addEventListener("click", function (e) {
    if (e.target.id === "boton-ss1" || e.target.id === "boton-ss2" || e.target.id === "boton-ss3") {
      seguidoSeguir(e);
      e.innerText="Seguir";
    }
  });
  
function seguidoSeguir(evento){
    evento.target.classList.toggle("buttonSeguir");
    evento.target.classList.toggle("buttonSeguido");
}

function cerrarSdos(){
    contenedorSeguidos.style.display="none";
}