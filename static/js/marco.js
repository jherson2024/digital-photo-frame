window.onload = function () {
    const image1 = document.getElementById("image1");

    // Define el área deseada en píxeles cuadrados
    const desiredArea = 600000; // Ejemplo: 400,000 píxeles cuadrados (puedes ajustar)

    // Obtén las proporciones originales de la imagen
    const naturalWidth = image1.naturalWidth;
    const naturalHeight = image1.naturalHeight;
    const aspectRatio = naturalWidth / naturalHeight;

    // Calcula las dimensiones basadas en el área deseada
    const height = Math.sqrt(desiredArea / aspectRatio);
    const width = height * aspectRatio;

    // Establece el tamaño en estilos inline
    image1.style.width = `${width}px`;
    image1.style.height = `${height}px`;
};
function ajustarImagen(num) {
    const image1 = document.getElementById("image1");

    // Define el área deseada en píxeles cuadrados
    const desiredArea = 600000+num*100000; // Ejemplo: 400,000 píxeles cuadrados (puedes ajustar)

    // Obtén las proporciones originales de la imagen
    const naturalWidth = image1.naturalWidth;
    const naturalHeight = image1.naturalHeight;
    const aspectRatio = naturalWidth / naturalHeight;

    // Calcula las dimensiones basadas en el área deseada
    const height = Math.sqrt(desiredArea / aspectRatio);
    const width = height * aspectRatio;

    // Establece el tamaño en estilos inline
    image1.style.width = `${width}px`;
    image1.style.height = `${height}px`;
};
