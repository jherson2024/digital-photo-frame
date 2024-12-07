let numAmp=0;
let brilloActual = 100; 
function ampliarImagen() {
    if(numAmp==4){
        return;
    }
    ajustarImagen(numAmp+1);
    numAmp+=1;
  }
function reducirImagen(){
    ajustarImagen(numAmp-1);
    numAmp+=-1;
}
function cambiarFondo() {
    // Generar colores cercanos al blanco
    const r = Math.floor(230 + Math.random() *25); // Rango: 200-255
    const g = Math.floor(230 + Math.random() * 25);
    const b = Math.floor(230 + Math.random() * 25);

    // Convertir a color RGB
    const colorAleatorio = `rgb(${r}, ${g}, ${b})`;

    // Actualizar la variable CSS para el fondo
    document.body.style.setProperty('--background-color', colorAleatorio);

    console.log(`Color de fondo cambiado a: ${colorAleatorio}`);
}
function aumentarBrillo() {
    
}

function reducirBrillo() {
   
}