const contSubirFoto = document.getElementById("contenedorSubirFoto")
const divFormCrear = document.getElementById("divFormCrear");
const preview = document.getElementsByClassName("preview");
const contenedorSeguidores = document.getElementById("contenedorSeguidores");

const formCrear = document.getElementById("formCrear")

const sgr1 = document.getElementById("sgr-1");
const sgr2 = document.getElementById("sgr-2");
const sgr3 = document.getElementById("sgr-3");

function mostrarCrear(){
    contSubirFoto.style.display="flex";
    console.log("se muestra el modal de crear");
}

function cerrarModalCrear(){
    contSubirFoto.style.display="none";
}

function modalSeguidores(){
    contenedorSeguidores.style.display="flex";
}

function cerrarSgr(){
    contenedorSeguidores.style.display="none";
}

function eliminarSeguidor1(){
    sgr1.style.display="none";
}

function eliminarSeguidor2(){
    sgr2.style.display="none";
}

function eliminarSeguidor3(){
    sgr3.style.display="none";
}

function funcionesPublicar(){
    cerrarModalCrear();
    equis();
}

//para acceder a la imagen que se subió
function equis(){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const respuesta = JSON.parse(xhr.responseText);
            const rutaGuardada = respuesta.rutaGuardada;
            publicarFoto(rutaGuardada);
        }
        else{
            console.log("error xhml");
        }
    };

    xhr.send(new FormData(formCrear))
}


function publicarFoto(urlFoto){

    const containerFeed = document.getElementById("cont-publicaciones");
    const subirArchivoInput = document.getElementById("subir-archivo");

    const publicacion = document.createElement("div");
    publicacion.classList.add("nueva-publicacion");
    publicacion.classList.add("perfiles");


    publicacion.innerHTML = `
    <div class="titulo">
        <div class="infoperfil">
            <div class="imagenpost">
                <img src="assets/img/fotosPerfil/stitch.jpg" class="post" onclick="window.location.href='perfil.html'" style="cursor: pointer;">
            </div>
            <div class="boxusername">
                <p class="username">Personas 4</p>
            </div>
            <div class="opcion">
                <button class="puntos">
                    <i class="iconos bi bi-three-dots"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="boxfotopost">
        <img src="${urlFoto}" class="fotopost">
    </div>
    <div class="items2">
        <button class="boxitems2">
            <i class="iconos bi bi-heart" id="megusta"></i>
        </button>
        <button class="boxitems2">
            <i class="iconos bi bi-chat"></i>
        </button>
        <button class="boxitems2">
            <i class="iconos bi bi-send"></i>
        </button>
        <button class="boxitems2marcador">
            <i class="iconos bi bi-bookmark"></i>
        </button>
    </div>
    <div class="comentarios">
        <div class="boxdecomentarios">
            <input type="text" class="boxcomentarios" id="newComentario" placeholder="Añade un comentario...">
            <button onclick="addComentario()">Añadir</button>
        </div>
        <div id="list-Comentarios"></div>
        <!-- <div class="carafeliz">
            <button class="boxitems2">
                <i  class="iconos bi bi-emoji-smile"></i>
            </button>
        </div> -->
    </div>
    `;

    subirArchivoInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const nuevaUrlFoto = e.target.result;
                console.log(nuevaUrlFoto); // Log the data URL
                publicarFoto(nuevaUrlFoto); // Llama a publicarFoto nuevamente con la nueva URL
            };
            reader.readAsDataURL(file);
        }
    });

    
    containerFeed.appendChild(publicacion);

}
    

// // para subir archivos
// function updateImageDisplay() {
//     while (preview.firstChild) {
//       preview.removeChild(preview.firstChild);
//     }
    
//     const curFiles = input.files;
//     if (curFiles.length > 0) {
//       const list = document.createElement("ol");
//       preview.appendChild(list);
  
//       for (const file of curFiles) {
//         const listItem = document.createElement("li");
//         const para = document.createElement("p");
//         if (validFileType(file)) {
//           para.textContent = `File name ${file.name}, file size ${returnFileSize(
//             file.size,
//           )}.`;
//           const image = document.createElement("img");
//           image.src = URL.createObjectURL(file);
  
//           listItem.appendChild(image);
//           listItem.appendChild(para);
//         } else {
//           para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
//           listItem.appendChild(para);
//         }
  
//         list.appendChild(listItem);
//       }
//     }
//   }
  
//   // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
//   const fileTypes = [
//     "image/apng",
//     "image/bmp",
//     "image/gif",
//     "image/jpeg",
//     "image/pjpeg",
//     "image/png",
//     "image/svg+xml",
//     "image/tiff",
//     "image/webp",
//     "image/x-icon",
//   ];
  
//   function validFileType(file) {
//     return fileTypes.includes(file.type);
//   }
  
//   function returnFileSize(number) {
//     if (number < 1024) {
//       return `${number} bytes`;
//     } else if (number >= 1024 && number < 1048576) {
//       return `${(number / 1024).toFixed(1)} KB`;
//     } else if (number >= 1048576) {
//       return `${(number / 1048576).toFixed(1)} MB`;
//     }
//   }
  