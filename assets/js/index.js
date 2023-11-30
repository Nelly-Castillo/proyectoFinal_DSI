const corazon = document.getElementById("megusta");

corazon.addEventListener("click", (e) => {
    darLike(e);
    // console.log('Se dió like');
});

function darLike(evento){
    evento.target.classList.toggle("bi-heart-fill");
    evento.target.classList.toggle("bi-heart");
}

// comentarios
function addComentario() {
    var nuevoComentario = document.getElementById('newComentario').value;

    if (nuevoComentario.trim() === '') {
        alert('Por favor, ingresa un comentario válido.');
        return;
    }

    // Crear un objeto de comentario
    var comentario = {
        texto: newComentario,
        timestamp: new Date().toLocaleString()
    };

    // Obtener comentarios existentes o inicializar un array vacío
    var comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Agregar el nuevo comentario al array
    comentarios.push(comentario);

    // Guardar el array actualizado en el almacenamiento local
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    // Mostrar los comentarios
    mostrarComentarios();
}


// Función para mostrar los comentarios almacenados
function mostrarComentarios() {
    var listComentarios = document.getElementById('list-Comentarios');
    listComentarios.innerHTML = '';

    var comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    comentarios.forEach(function (comentario, index) {
        var comentarioElement = document.createElement('div');
        comentarioElement.className = 'comentario';
        comentarioElement.innerHTML = `<span>${comentario.texto}</span> <span class="eliminar-comentario" onclick="eliminarComentario(${index})">Eliminar</span>`;
        listComentarios.appendChild(comentarioElement);
    });
}

// Función para eliminar un comentario
function eliminarComentario(index) {
    var comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    comentarios.splice(index, 1);

    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    mostrarComentarios();
}

// Mostrar los comentarios al cargar la página
mostrarComentarios();

