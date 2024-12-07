const menuContainer = document.querySelector('.menu-container'); // Contenedor del menú
const contenedorOpciones = document.getElementById('contenedor-opciones'); 
let isMenuVisible = true;
let ventana="-";
// Agrega la clase "mostrado" al menú inicialmente
menuContainer.classList.add('mostrado');

// Selecciona todos los botones con la clase "menu-button"
const botones = document.querySelectorAll('.menu-button');

// Agrega eventos de clic a los botones y detiene la propagación al contenedor del menú
botones.forEach((boton) => {
    boton.addEventListener('click', (event) => {
        event.stopPropagation(); // Detiene la propagación del evento hacia el contenedor del menú
        console.log(`1 click ${boton.id}`);
        actualizarSeccion(boton.id);
        open_("album"); // Llama a la función con el ID del botón
    });
});

// Maneja el clic en el contenedor del menú
menuContainer.addEventListener('click', () => {
    console.log("click menu");
    if (isMenuVisible) {
        ocultarMenu();
    } else {
        mostrarMenu();
    }
});

// Función para ocultar el menú
function ocultarMenu() {
    menuContainer.classList.remove('mostrado');
    isMenuVisible = false;
    contenedorOpciones.classList.remove("invisible");
}

// Función para mostrar el menú
function mostrarMenu() {
    menuContainer.classList.add('mostrado');
    isMenuVisible = true;
    contenedorOpciones.classList.add("invisible");
}

// Función para evitar clics en el menú cuando un contenedor está abierto
function menu_no_click() {
    menuContainer.classList.add("no-click");
}

// Función para permitir clics en el menú
function menu_click() {
    menuContainer.classList.remove("no-click");
}

// Función que se ejecuta al hacer clic en un botón
function open_(itemId) {
    if (!isMenuVisible) {
        console.log('El menú no está visible. No se ejecutará ninguna acción.');
        return; // Salir de la función si isMenuVisible es false
    }
    // Construye el ID del contenedor relacionado
    const containerId = `${itemId}-container`;

    // Selecciona el contenedor basado en el ID
    const container = document.getElementById(containerId);

    if (container) { // Verifica si el contenedor existe
        ventana=itemId;
        container.classList.add("mostrar");
        menu_no_click(); // Evita clics en el menú mientras este contenedor está visible
    } else {
        console.error(`Contenedor con id "${containerId}" no encontrado.`);
    }
}
function close_(itemId) {
    // Construye el ID del contenedor relacionado
    const containerId = `${itemId}-container`;

    // Selecciona el contenedor basado en el ID
    const container = document.getElementById(containerId);

    if (container) { // Verifica si el contenedor existe
        ventana="-";
        container.classList.remove("mostrar");
        menu_click(); // Evita clics en el menú mientras este contenedor está visible
    } else {
        console.error(`Contenedor con id "${containerId}" no encontrado.`);
    }
}
function fetchImages() {
    // Hacer una solicitud AJAX para obtener las imágenes
    fetch('/get-images')
        .then(response => response.json())
        .then(data => {
            // Actualizar las URLs de las imágenes en el DOM
            document.getElementById('image1').src = data.image1;
            document.getElementById('image0').src = data.image0;
        })
        .catch(error => console.error('Error al cargar las imágenes:', error));
}
