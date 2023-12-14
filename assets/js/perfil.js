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

// pa poner las fotos en el perfil

function obtenerNombresImagenes() {
    fetch('imgGaleria.php').then(response => response.json()).catch(error => 
		{
            console.error('Error de los nombres de img', error);
            return [];
        });
}

document.addEventListener("load", () => {
	obtenerNombresImagenes().then(nombresImagenes => {
        nombresImagenes.forEach(nombre => {
			const boxImg = document.getElementsByClassName("box-img");

			const galPerfil = document.createElement("div");
			galPerfil.classList.add("gal-perfil");
			const imagenP = document.createElement("img");

			const rutaImagen = 'assets/servidor/assets' + nombre;
			imagenP.src = rutaImagen;
	
			boxImg.appendChild(galPerfil);
			galPerfil.appendChild(imagenP);
            
        });
    });

});

