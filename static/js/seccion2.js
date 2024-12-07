// Función para conectar a una red Wi-Fi
function connectToNetwork(networkName) {
    console.log(`Conectando a la red: ${networkName}`);
    document.getElementById('current-network').textContent = networkName;
    document.getElementById('signal-strength').textContent = 'Alta';
    document.getElementById('ip-address').textContent = '192.168.1.100';
    alert(`Conectado exitosamente a ${networkName}`);
}

// Función para desconectar de la red Wi-Fi actual
function disconnectFromNetwork() {
    console.log('Desconectando de la red actual...');
    document.getElementById('current-network').textContent = 'Sin Conexión';
    document.getElementById('signal-strength').textContent = 'N/A';
    document.getElementById('ip-address').textContent = 'N/A';
    alert('Se ha desconectado de la red actual.');
}

// Función para activar o desactivar el Wi-Fi
function toggleWiFi() {
    const isWiFiEnabled = document.getElementById('wifi-enabled').checked;
    console.log(`Wi-Fi ${isWiFiEnabled ? 'Activado' : 'Desactivado'}`);
    if (!isWiFiEnabled) {
        disconnectFromNetwork(); // Desconecta automáticamente si Wi-Fi está apagado
    }
}

// Función para manejar el cambio entre IP automática y manual
function setupIPConfig() {
    const ipConfigSelect = document.getElementById('ip-config');
    ipConfigSelect.addEventListener('change', function () {
        const configValue = this.value;
        const staticIpSettings = document.getElementById('static-ip-settings');
        if (configValue === 'static') {
            staticIpSettings.style.display = 'block';
            console.log('Modo IP manual activado. Configure los campos IP manualmente.');
        } else {
            staticIpSettings.style.display = 'none';
            console.log('Modo IP automático activado (DHCP).');
        }
    });
}

// Función para desvincular un dispositivo
function disconnectDevice(deviceName) {
    console.log(`Desvinculando el dispositivo: ${deviceName}`);
    alert(`Dispositivo ${deviceName} desvinculado exitosamente.`);
}

// Función para buscar nuevos dispositivos
function searchNewDevices() {
    console.log('Buscando nuevos dispositivos...');
    const messageElement = document.getElementById('new-devices-message');
    const newDevices = ['Auriculares Bluetooth', 'Smartwatch']; // Simulación de dispositivos encontrados

    if (newDevices.length > 0) {
        messageElement.textContent = `Dispositivos encontrados: ${newDevices.join(', ')}`;
        alert('Se han detectado nuevos dispositivos. Ver la lista actualizada.');
    } else {
        messageElement.textContent = 'No se han detectado dispositivos nuevos.';
        alert('No se encontraron dispositivos.');
    }
}

// Función para gestionar servicios en la nube
function manageCloudService(serviceName) {
    console.log(`Gestionando el servicio en la nube: ${serviceName}`);
    alert(`Configuración de ${serviceName} abierta.`);
}

// Función para sincronizar datos
function toggleSyncOption(option) {
    const isChecked = document.getElementById(option).checked;
    console.log(`${option.replace('-', ' ')}: ${isChecked ? 'Activado' : 'Desactivado'}`);
}


function updateBrightness(value) {
    document.getElementById('brightness-value').textContent = `${value}%`;
    console.log(`Brillo ajustado a: ${value}%`);
}

function toggleAutoBrightness() {
    const isChecked = document.getElementById('auto-brightness').checked;
    console.log(`Brillo Automático: ${isChecked ? 'Activado' : 'Desactivado'}`);
}

function changeColorTemp(value) {
    console.log(`Temperatura de Color seleccionada: ${value}`);
}

function changeResolution(value) {
    console.log(`Resolución seleccionada: ${value}`);
}

function updateScale(value) {
    console.log(`Escala de Interfaz ajustada a: ${value}%`);
}

function changeScreenMode(mode) {
    console.log(`Modo de Pantalla cambiado a: ${mode}`);
}

function updateScreenTimeout(value) {
    console.log(`Tiempo de Apagado Automático configurado a: ${value} segundos`);
}

function toggleScreensaver() {
    const isChecked = document.getElementById('screensaver').checked;
    console.log(`Protector de Pantalla: ${isChecked ? 'Activado' : 'Desactivado'}`);
}
function updateDate(value) {
    console.log(`Fecha seleccionada: ${value}`);
}

function updateTime(value) {
    console.log(`Hora seleccionada: ${value}`);
}

function updateTimezone(value) {
    console.log(`Zona horaria seleccionada: ${value}`);
}

function toggleAutoSync() {
    const isChecked = document.getElementById('auto-sync').checked;
    console.log(`Sincronización automática: ${isChecked ? 'Activada' : 'Desactivada'}`);
}

function updateTimeFormat(format) {
    console.log(`Formato de hora seleccionado: ${format}`);
}
function openFileManager() {
    console.log('Abriendo Gestor de Archivos...');
}

function ejectExternalDevice() {
    console.log('Expulsando Almacenamiento Externo...');
}

function clearCache() {
    console.log('Caché eliminada.');
}

function clearResidualData() {
    console.log('Datos residuales eliminados.');
}

function toggleAutoBackup() {
    const isChecked = document.getElementById('auto-backup').checked;
    console.log(`Copia de seguridad automática: ${isChecked ? 'Activada' : 'Desactivada'}`);
}

function createBackup() {
    console.log('Creando copia de seguridad...');
}
function checkForUpdates() {
    console.log('Buscando actualizaciones...');
    document.getElementById('update-status').textContent = 'Estado: Actualización disponible';
}

function viewUpdateHistory() {
    console.log('Mostrando historial de actualizaciones...');
}

function resetToFactorySettings() {
    console.log('Restableciendo dispositivo a valores de fábrica...');
    alert('Advertencia: Todos los datos serán eliminados.');
}

function enableDeveloperMode() {
    console.log('Modo desarrollador activado.');
    document.getElementById('developer-mode-status').textContent = 'Modo desarrollador: Activado';
}

function managePasswords() {
    console.log('Abriendo gestor de contraseñas...');
}

function managePermissions() {
    console.log('Abriendo gestor de permisos...');
}
function viewReleaseNotes() {
    console.log('Mostrando notas de la versión...');
}

function viewTermsOfService() {
    console.log('Abriendo términos de servicio...');
}

function viewPrivacyPolicy() {
    console.log('Abriendo política de privacidad...');
}

function viewThirdPartyLicenses() {
    console.log('Mostrando licencias de terceros...');
}

function visitSupportPage() {
    console.log('Redirigiendo a la página de soporte...');
}

function sendFeedback() {
    const feedback = document.getElementById('feedback').value;
    if (feedback.trim() === '') {
        alert('Por favor, escribe tus comentarios antes de enviar.');
    } else {
        console.log(`Enviando comentarios: ${feedback}`);
        alert('Gracias por tus comentarios.');
        document.getElementById('feedback').value = ''; // Limpia el área de texto
    }
}
