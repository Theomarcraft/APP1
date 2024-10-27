// Función para manejar el registro de usuario
function handleRegistro(event) {
    event.preventDefault(); // Evita el envío del formulario
    const nombre = document.getElementById('nombre').value;
    alert(`Registro exitoso para ${nombre}!`);

    // Ocultar el formulario de registro y mostrar el de pedido
    document.getElementById('registro').style.display = 'none';
    document.getElementById('pedido').style.display = 'block';
}

// Función para manejar el envío de pedido
function handlePedido(event) {
    event.preventDefault(); // Evita el envío del formulario
    const direccion = document.getElementById('direccion').value;
    const correoPedido = document.getElementById('correoPedido').value;
    const numero = document.getElementById('numero').value;
    const nombrePedido = document.getElementById('nombrePedido').value;

    alert(`Pedido enviado a ${nombrePedido} en ${direccion}!\nCorreo: ${correoPedido}\nNúmero: ${numero}`);

    // Ocultar el formulario de pedido y mostrar el de tipo de pedido
    document.getElementById('pedido').style.display = 'none';
    document.getElementById('tipoPedido').style.display = 'block';
}

// Función para manejar el envío de tipo de pedido
function handleTipoPedido(event) {
    event.preventDefault(); // Evita el envío del formulario
    const tipo = document.getElementById('tipo').value;
    const descripcionPedido = document.getElementById('descripcionPedido').value;

    // Generar el enlace de Google Maps
    const direccion = document.getElementById('direccion').value;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;
    
    alert(`Tipo de pedido confirmado: ${tipo}\nDescripción: ${descripcionPedido}`);

    // Mostrar el enlace de Google Maps
    const mapLinkContainer = document.getElementById('map-link');
    const googleMapsLink = document.getElementById('googleMapsLink');
    googleMapsLink.href = googleMapsUrl;
    mapLinkContainer.style.display = 'block';

    // Incrustar el mapa
    const googleMapEmbed = document.getElementById('googleMapEmbed');
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(direccion)}`;
    googleMapEmbed.src = mapSrc;

    // Mostrar el iframe del mapa
    document.getElementById('map').style.display = 'block';
}

// Función para manejar la calificación
function handleCalificar() {
    document.getElementById('calificacion').style.display = 'block';
}

// Función para manejar la selección de estrellas
function selectEstrella(event) {
    const calificacionValor = event.target.dataset.value;
    estrellas.forEach(e => e.classList.remove('selected')); // Limpiar selección
    for (let i = 0; i < calificacionValor; i++) {
        estrellas[i].classList.add('selected'); // Seleccionar estrellas
    }
}

// Función para manejar el envío de calificación
function enviarCalificacion() {
    const comentario = document.getElementById('comentario').value;
    if (calificacionValor > 0) {
        alert(`Calificación: ${calificacionValor} estrellas\nComentario: ${comentario}`);
        // Aquí puedes agregar lógica para enviar los datos a un servidor o almacenarlos

        // Resetear calificación
        calificacionValor = 0;
        document.getElementById('comentario').value = '';
        estrellas.forEach(e => e.classList.remove('selected')); // Limpiar estrellas
    } else {
        alert('Por favor selecciona una calificación.');
    }
}

// Asignación de eventos
document.getElementById('formRegistro').addEventListener('submit', handleRegistro);
document.getElementById('formPedido').addEventListener('submit', handlePedido);
document.getElementById('formTipoPedido').addEventListener('submit', handleTipoPedido);
document.getElementById('btnCalificar').addEventListener('click', handleCalificar);

const estrellas = document.querySelectorAll('.estrella');
let calificacionValor = 0;

estrellas.forEach(estrella => {
    estrella.addEventListener('click', selectEstrella);
});

document.getElementById('btnEnviarCalificacion').addEventListener('click', enviarCalificacion);
