function verImagen(imagen) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImagen');
    modal.style.display = 'flex'; 
    modalImg.src = imagen.src;
}

function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none'; 
}


function agregarComentario(event) {
    event.preventDefault();

    var comentario = document.getElementById('comentario').value;
    if (comentario.trim() !== "") {
        var listaComentarios = document.getElementById('listaComentarios');
        var li = document.createElement('li');
        li.textContent = comentario;
        listaComentarios.appendChild(li);
        document.getElementById('comentario').value = ''; 
    }
}

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    if (!nombre || !correo) {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return true;
}
