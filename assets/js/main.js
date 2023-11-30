const contSubirFoto = document.getElementById("contenedorSubirFoto")
const divFormCrear = document.getElementById("divFormCrear");
const preview = document.getElementsByClassName("preview");
const contenedorSeguidores = document.getElementById("contenedorSeguidores");

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

// para subir archivos
function updateImageDisplay() {
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
    
    const curFiles = input.files;
    if (curFiles.length > 0) {
      const list = document.createElement("ol");
      preview.appendChild(list);
  
      for (const file of curFiles) {
        const listItem = document.createElement("li");
        const para = document.createElement("p");
        if (validFileType(file)) {
          para.textContent = `File name ${file.name}, file size ${returnFileSize(
            file.size,
          )}.`;
          const image = document.createElement("img");
          image.src = URL.createObjectURL(file);
  
          listItem.appendChild(image);
          listItem.appendChild(para);
        } else {
          para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
          listItem.appendChild(para);
        }
  
        list.appendChild(listItem);
      }
    }
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }
  
  function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }
  