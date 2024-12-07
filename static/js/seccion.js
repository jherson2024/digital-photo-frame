let album_;
function actualizarSeccion(botonId) {
    console.log(isMenuVisible);
    if (!isMenuVisible) {
        console.log('El menú no está visible. No se ejecutará ninguna acción.');
        return; // Salir de la función si isMenuVisible es false
    }
    switch (botonId) {
        case 'album':
            colocarAlbunes();
            break;
        case 'fotos':
            fotos(album_);
            break;
        case 'marco':
            marco();
            break;
        case 'calendario':
            calendario();
            break;
        case 'config.':
            config();
            break;
        case 'acerca-de':
            acerca_de();
            break;
        default:
            console.log('Sección no reconocida:', botonId);
            break;
    }
}
const seccion = document.getElementById('seccion');
function acerca_de(){
    seccion.innerHTML = '';
    const acerca_de_seccion = `
    <section>
    <!-- Encabezado con Marca y Logo -->
    <header class="about-header">
        <img src="path_to_logo.png" alt="Logo de la Empresa" class="about-logo">
        <h1>Portarretrato Digital SmartFrame</h1>
        <p>Un dispositivo diseñado para inmortalizar tus recuerdos y mantenerte informado.</p>
    </header>

    <!-- Introducción -->
    <article class="about-intro">
        <h2>¿Qué es SmartFrame?</h2>
        <p>
            SmartFrame es un portarretrato digital de última generación que combina elegancia y funcionalidad. 
            Este dispositivo no solo te permite visualizar tus fotos favoritas en alta resolución, sino que también
            incluye características avanzadas como un álbum organizado, calendario integrado, ajustes de brillo y
            personalización del marco.
        </p>
    </article>

    <!-- Características Principales -->
    <article class="about-features">
        <h2>Funciones Destacadas</h2>
        <ul>
            <li>Álbum digital: Guarda y organiza tus recuerdos.</li>
            <li>Calendario: Consulta fechas importantes y eventos.</li>
            <li>Modo Marco: Personaliza la visualización de tus fotos.</li>
            <li>Ajustes avanzados: Configura brillo, temperatura de color y resolución.</li>
            <li>Información en tiempo real: Siempre visible la fecha, hora, ciudad, temperatura y clima.</li>
            <li>Conexión a la nube: Sincronización con servicios como Google Drive y Dropbox.</li>
            <li>Control remoto: Configura y gestiona tu portarretrato desde tu teléfono móvil.</li>
        </ul>
    </article>

    <!-- Información del Dispositivo -->
    <article class="about-specs">
        <h2>Especificaciones del Dispositivo</h2>
        <p><strong>Modelo:</strong> SmartFrame X200</p>
        <p><strong>Resolución:</strong> 1920x1080 (Full HD)</p>
        <p><strong>Conectividad:</strong> Wi-Fi y Bluetooth</p>
        <p><strong>Almacenamiento:</strong> 16GB interno (expandible a través de la nube)</p>
        <p><strong>Autonomía:</strong> 12 horas de funcionamiento continuo.</p>
    </article>

    <!-- Información Adicional -->
    <article class="about-info">
        <h2>Sobre Nosotros</h2>
        <p>
            Este dispositivo ha sido diseñado y desarrollado por <strong>SmartTech Solutions</strong>, una empresa 
            comprometida con la innovación tecnológica para el hogar. Nuestro objetivo es ofrecer dispositivos
            que sean fáciles de usar, funcionales y elegantes.
        </p>
        <p><strong>Desarrollador:</strong> John Doe</p>
        <p><strong>Contacto:</strong> soporte@smarttech.com | +1-800-123-4567</p>
    </article>

    <!-- Pie de Página -->
    <footer class="about-footer">
        <p>&copy; 2024 SmartTech Solutions. Todos los derechos reservados.</p>
        <button onclick="visitSupportPage()">Ir a la Página de Soporte</button>
    </footer>
</section>
`;
    seccion.innerHTML = acerca_de_seccion;
}
function config(){
    seccion.innerHTML = '';
    const configraciones_seccion = `
    <nav class="menu">
        <ul>
            <li class="active" onclick="showDetails('wireless')">
                <img src="${wireless_url_image}" alt="Wireless Icon" class="menu-icon">
                Red inalámbrica
            </li>
            <li onclick="showDetails('device')">
                <img src="${device_url_image}" alt="Device Icon" class="menu-icon">
                Dispositivos
            </li>
            <li onclick="showDetails('frame')">
                <img src="${frame_url_image}" alt="Frame Icon" class="menu-icon">
                Pantalla
            </li>
            <li onclick="showDetails('datetime')">
                <img src="${datetime_url_image}" alt="Datetime Icon" class="menu-icon">
                Fecha y Hora
            </li>
            <li onclick="showDetails('storage')">
                <img src="${storage_url_image}" alt="Storage Icon" class="menu-icon">
                Almacenamiento
            </li>
            <li onclick="showDetails('system')">
                <img src="${system_url_image}" alt="System Icon" class="menu-icon">
                Sistema
            </li>
            <li onclick="showDetails('about')">
                <img src="${about_url_image}" alt="About Icon" class="menu-icon">
                Acerca de
            </li>
        </ul>
    </nav>
    <section id="details">
        <!-- Aquí se cargará el contenido dinámico -->
        <p>Seleccione una opción para ver los detalles.</p>
    </section>
    `;
seccion.innerHTML = configraciones_seccion;
}
function showDetails(section) {
    const details = document.getElementById('details');
    const menuItems = document.querySelectorAll('.menu li');
    
    // Remove 'active' class from all menu items
    menuItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to clicked menu item
    document.querySelector(`.menu li[onclick="showDetails('${section}')"]`).classList.add('active');

    // Update details content
    let content = '';
    switch (section) {
        case 'wireless':
            content = `
                <h3>Configuraciones Inalámbricas</h3>
                <!-- Redes Wi-Fi Disponibles -->
                <section>
                    <h4>Redes Wi-Fi Disponibles</h4>
                    <ul>
                        <li>
                            <span>Red Wi-Fi 1</span>
                            <button onclick="connectToNetwork('Red Wi-Fi 1')">Conectar</button>
                        </li>
                        <li>
                            <span>Red Wi-Fi 2</span>
                            <button onclick="connectToNetwork('Red Wi-Fi 2')">Conectar</button>
                        </li>
                        <li>
                            <span>Red Wi-Fi 3</span>
                            <button onclick="connectToNetwork('Red Wi-Fi 3')">Conectar</button>
                        </li>
                    </ul>
                </section>

                <!-- Estado de la Conexión -->
                <section>
                    <h4>Estado de la Conexión</h4>
                    <p><strong>Red Actual:</strong> <span id="current-network">Sin Conexión</span></p>
                    <p><strong>Intensidad de Señal:</strong> <span id="signal-strength">N/A</span></p>
                    <p><strong>Dirección IP:</strong> <span id="ip-address">N/A</span></p>
                    <button onclick="disconnectFromNetwork()">Desconectar</button>
                </section>

                <!-- Preferencias de Wi-Fi -->
                <section>
                    <h4>Preferencias de Wi-Fi</h4>
                    <label>
                        <input type="checkbox" id="wifi-enabled" onclick="toggleWiFi()"> Activar Wi-Fi
                    </label>
                    <br>
                    <label>
                        <input type="checkbox" id="auto-connect"> Conexión Automática a Redes Conocidas
                    </label>
                    <br>
                    <label>
                        <input type="checkbox" id="notify-open-networks"> Notificar Redes Abiertas Disponibles
                    </label>
                </section>

                <!-- Configuración Avanzada -->
                <section>
                    <h4>Configuración Avanzada</h4>
                    <label>
                        <span>Proxy:</span>
                        <input type="text" id="proxy-settings" placeholder="Ejemplo: 192.168.1.1:8080">
                    </label>
                    <br>
                    <label>
                        <span>Configuración de IP:</span>
                        <select id="ip-config">
                            <option value="dhcp">Automático (DHCP)</option>
                            <option value="static">Manual</option>
                        </select>
                    </label>
                    <br>
                    <section id="static-ip-settings" style="display: none;">
                        <label>
                            <span>IP:</span>
                            <input type="text" id="static-ip" placeholder="Ejemplo: 192.168.1.100">
                        </label>
                        <br>
                        <label>
                            <span>Máscara de Subred:</span>
                            <input type="text" id="subnet-mask" placeholder="Ejemplo: 255.255.255.0">
                        </label>
                        <br>
                        <label>
                            <span>Puerta de Enlace:</span>
                            <input type="text" id="gateway" placeholder="Ejemplo: 192.168.1.1">
                        </label>
                    </section>
                </section>
            `;
            break;

        case 'device':
            content = `
                <h3>Sincronización de Dispositivos</h3>
                <!-- Dispositivos Vinculados -->
                <section>
                    <h4>Dispositivos Vinculados</h4>
                    <ul id="linked-devices">
                        <li>
                            <span>Teléfono Móvil</span>
                            <button onclick="disconnectDevice('Teléfono Móvil')">Desvincular</button>
                        </li>
                        <li>
                            <span>Portátil</span>
                            <button onclick="disconnectDevice('Portátil')">Desvincular</button>
                        </li>
                        <li>
                            <span>Tablet</span>
                            <button onclick="disconnectDevice('Tablet')">Desvincular</button>
                        </li>
                    </ul>
                </section>
                
                <!-- Añadir Nuevo Dispositivo -->
                <section>
                    <h4>Añadir Nuevo Dispositivo</h4>
                    <button onclick="searchNewDevices()">Buscar Dispositivos</button>
                    <p id="new-devices-message" style="margin-top: 10px;">No se han detectado dispositivos nuevos.</p>
                </section>
                
                <!-- Opciones de Sincronización -->
                <section>
                    <h4>Opciones de Sincronización</h4>
                    <label>
                        <input type="checkbox" id="sync-contacts"> Sincronizar Contactos
                    </label>
                    <br>
                    <label>
                        <input type="checkbox" id="sync-calendars"> Sincronizar Calendarios
                    </label>
                    <br>
                    <label>
                        <input type="checkbox" id="sync-files"> Sincronizar Archivos
                    </label>
                    <br>
                    <label>
                        <input type="checkbox" id="auto-sync"> Activar Sincronización Automática
                    </label>
                </section>
                
                <!-- Servicios en la Nube -->
                <section>
                    <h4>Servicios en la Nube</h4>
                    <ul id="cloud-services">
                        <li>
                            <span>Google Drive</span>
                            <button onclick="manageCloudService('Google Drive')">Gestionar</button>
                        </li>
                        <li>
                            <span>Dropbox</span>
                            <button onclick="manageCloudService('Dropbox')">Gestionar</button>
                        </li>
                        <li>
                            <span>OneDrive</span>
                            <button onclick="manageCloudService('OneDrive')">Gestionar</button>
                        </li>
                    </ul>
                </section>
            `;
            break;

            case 'frame':
                content = `
                    <h3>Configuración de Pantalla</h3>
            
                    <!-- Brillo y Color -->
                    <section>
                        <h4>Brillo y Color</h4>
                        <label for="brightness">Ajuste de Brillo:</label>
                        <input type="range" id="brightness" min="0" max="100" value="50" onchange="updateBrightness(this.value)">
                        <span id="brightness-value">50%</span>
                        <br>
                        <label>
                            <input type="checkbox" id="auto-brightness" onclick="toggleAutoBrightness()"> Activar Brillo Automático
                        </label>
                        <br>
                        <label for="color-temp">Temperatura de Color:</label>
                        <select id="color-temp" onchange="changeColorTemp(this.value)">
                            <option value="neutral">Neutral</option>
                            <option value="warm">Cálido</option>
                            <option value="cool">Frío</option>
                        </select>
                    </section>
            
                    <!-- Resolución y Escala -->
                    <section>
                        <h4>Resolución y Escala</h4>
                        <label for="resolution">Resolución:</label>
                        <select id="resolution" onchange="changeResolution(this.value)">
                            <option value="1080p">1920x1080 (Full HD)</option>
                            <option value="1440p">2560x1440 (2K)</option>
                            <option value="2160p">3840x2160 (4K)</option>
                        </select>
                        <br>
                        <label for="scale">Escala de Interfaz:</label>
                        <input type="number" id="scale" min="100" max="200" value="100" onchange="updateScale(this.value)">%
                    </section>
            
                    <!-- Modo de Pantalla -->
                    <section>
                        <h4>Modo de Pantalla</h4>
                        <label>
                            <input type="radio" name="screen-mode" value="normal" onclick="changeScreenMode('normal')" checked> Modo Normal
                        </label>
                        <br>
                        <label>
                            <input type="radio" name="screen-mode" value="dark" onclick="changeScreenMode('dark')"> Modo Oscuro
                        </label>
                        <br>
                        <label>
                            <input type="radio" name="screen-mode" value="reading" onclick="changeScreenMode('reading')"> Modo Lectura
                        </label>
                    </section>
            
                    <!-- Temporizador de Apagado -->
                    <section>
                        <h4>Temporizador de Apagado Automático</h4>
                        <label for="screen-timeout">Tiempo de Apagado:</label>
                        <select id="screen-timeout" onchange="updateScreenTimeout(this.value)">
                            <option value="30">30 segundos</option>
                            <option value="60">1 minuto</option>
                            <option value="300">5 minutos</option>
                            <option value="0">Nunca</option>
                        </select>
                        <br>
                        <label>
                            <input type="checkbox" id="screensaver" onclick="toggleScreensaver()"> Activar Protector de Pantalla
                        </label>
                    </section>
                `;
                break;
            

                case 'datetime':
                    content = `
                        <h3>Configuración de Fecha y Hora</h3>
                
                        <!-- Selección de Fecha -->
                        <section>
                            <h4>Fecha Actual</h4>
                            <label for="date-picker">Selecciona una fecha:</label>
                            <input type="date" id="date-picker" onchange="updateDate(this.value)">
                        </section>
                
                        <!-- Selección de Hora -->
                        <section>
                            <h4>Hora Actual</h4>
                            <label for="time-picker">Selecciona una hora:</label>
                            <input type="time" id="time-picker" onchange="updateTime(this.value)">
                        </section>
                
                        <!-- Configuración de Zona Horaria -->
                        <section>
                            <h4>Zona Horaria</h4>
                            <label for="timezone">Selecciona tu zona horaria:</label>
                            <select id="timezone" onchange="updateTimezone(this.value)">
                                <option value="UTC-12">UTC-12:00</option>
                                <option value="UTC-11">UTC-11:00</option>
                                <option value="UTC-10">UTC-10:00</option>
                                <option value="UTC-9">UTC-09:00</option>
                                <option value="UTC-8">UTC-08:00</option>
                                <option value="UTC-7">UTC-07:00</option>
                                <option value="UTC-6">UTC-06:00</option>
                                <option value="UTC-5" selected>UTC-05:00</option>
                                <option value="UTC-4">UTC-04:00</option>
                                <option value="UTC-3">UTC-03:00</option>
                                <option value="UTC-2">UTC-02:00</option>
                                <option value="UTC-1">UTC-01:00</option>
                                <option value="UTC+0">UTC+00:00</option>
                                <option value="UTC+1">UTC+01:00</option>
                                <option value="UTC+2">UTC+02:00</option>
                                <option value="UTC+3">UTC+03:00</option>
                                <option value="UTC+4">UTC+04:00</option>
                                <option value="UTC+5">UTC+05:00</option>
                                <option value="UTC+6">UTC+06:00</option>
                                <option value="UTC+7">UTC+07:00</option>
                                <option value="UTC+8">UTC+08:00</option>
                                <option value="UTC+9">UTC+09:00</option>
                                <option value="UTC+10">UTC+10:00</option>
                                <option value="UTC+11">UTC+11:00</option>
                                <option value="UTC+12">UTC+12:00</option>
                            </select>
                        </section>
                
                        <!-- Sincronización Automática -->
                        <section>
                            <h4>Sincronización Automática</h4>
                            <label>
                                <input type="checkbox" id="auto-sync" onclick="toggleAutoSync()"> Activar Sincronización Automática
                            </label>
                        </section>
                
                        <!-- Formato de Hora -->
                        <section>
                            <h4>Formato de Hora</h4>
                            <label>
                                <input type="radio" name="time-format" value="12h" onclick="updateTimeFormat('12h')" checked> Formato 12 horas
                            </label>
                            <br>
                            <label>
                                <input type="radio" name="time-format" value="24h" onclick="updateTimeFormat('24h')"> Formato 24 horas
                            </label>
                        </section>
                    `;
                    break;
         case 'storage':
    content = `
        <h3>Configuraciones de Almacenamiento</h3>

        <!-- Resumen de Almacenamiento -->
        <section>
            <h4>Resumen de Almacenamiento</h4>
            <p><strong>Espacio Usado:</strong> <span id="used-storage">25 GB</span></p>
            <p><strong>Espacio Disponible:</strong> <span id="available-storage">75 GB</span></p>
            <progress id="storage-bar" value="25" max="100"></progress>
        </section>

        <!-- Gestor de Archivos -->
        <section>
            <h4>Gestor de Archivos</h4>
            <button onclick="openFileManager()">Abrir Gestor de Archivos</button>
        </section>

        <!-- Almacenamiento Externo -->
        <section>
            <h4>Almacenamiento Externo</h4>
            <p><strong>Dispositivo Conectado:</strong> <span id="external-device">Ninguno</span></p>
            <button onclick="ejectExternalDevice()">Expulsar Almacenamiento Externo</button>
        </section>

        <!-- Opciones de Limpieza -->
        <section>
            <h4>Opciones de Limpieza</h4>
            <button onclick="clearCache()">Borrar Caché</button>
            <button onclick="clearResidualData()">Eliminar Datos Residuales</button>
        </section>

        <!-- Copia de Seguridad -->
        <section>
            <h4>Copia de Seguridad</h4>
            <label>
                <input type="checkbox" id="auto-backup" onclick="toggleAutoBackup()"> Activar Copia de Seguridad Automática
            </label>
            <br>
            <button onclick="createBackup()">Crear Copia de Seguridad Ahora</button>
        </section>
    `;
    break;
    case 'system':
        content = `
            <h3>Configuraciones del Sistema</h3>
    
            <!-- Actualizaciones de Software -->
            <section>
                <h4>Actualizaciones de Software</h4>
                <button onclick="checkForUpdates()">Buscar Actualizaciones</button>
                <p id="update-status">Estado: No se han encontrado actualizaciones.</p>
                <button onclick="viewUpdateHistory()">Ver Historial de Actualizaciones</button>
            </section>
    
            <!-- Información del Sistema -->
            <section>
                <h4>Información del Sistema</h4>
                <p><strong>Versión del Sistema Operativo:</strong> <span id="os-version">1.0.0</span></p>
                <p><strong>Especificaciones del Hardware:</strong> <span id="hardware-specs">CPU: Quad-Core, RAM: 4GB</span></p>
            </section>
    
            <!-- Restablecer Valores de Fábrica -->
            <section>
                <h4>Restablecer Valores de Fábrica</h4>
                <button onclick="resetToFactorySettings()">Restablecer Dispositivo</button>
                <p><strong>Advertencia:</strong> Esta acción borrará todos los datos del dispositivo.</p>
            </section>
    
            <!-- Opciones Avanzadas -->
            <section>
                <h4>Opciones Avanzadas</h4>
                <button onclick="enableDeveloperMode()">Activar Modo Desarrollador</button>
                <p id="developer-mode-status">Modo desarrollador: Desactivado</p>
            </section>
    
            <!-- Seguridad -->
            <section>
                <h4>Seguridad</h4>
                <button onclick="managePasswords()">Gestionar Contraseñas</button>
                <button onclick="managePermissions()">Gestionar Permisos de Aplicaciones</button>
            </section>
        `;
        break;
        case 'about':
            content = `
                <h3>Acerca de</h3>
        
                <!-- Información del Dispositivo -->
                <section>
                    <h4>Información del Dispositivo</h4>
                    <p><strong>Modelo:</strong> <span id="device-model">X1234</span></p>
                    <p><strong>Número de Serie:</strong> <span id="serial-number">SN-9876543210</span></p>
                    <p><strong>Identificador Único:</strong> <span id="unique-id">UID-12345678</span></p>
                </section>
        
                <!-- Versión del Software -->
                <section>
                    <h4>Versión del Software</h4>
                    <p><strong>Versión Actual:</strong> <span id="software-version">v2.1.0</span></p>
                    <button onclick="viewReleaseNotes()">Ver Notas de la Versión</button>
                </section>
        
                <!-- Información Legal -->
                <section>
                    <h4>Información Legal</h4>
                    <button onclick="viewTermsOfService()">Términos de Servicio</button>
                    <button onclick="viewPrivacyPolicy()">Política de Privacidad</button>
                    <button onclick="viewThirdPartyLicenses()">Licencias de Terceros</button>
                </section>
        
                <!-- Soporte -->
                <section>
                    <h4>Soporte</h4>
                    <p><strong>Correo Electrónico:</strong> soporte@ejemplo.com</p>
                    <p><strong>Teléfono:</strong> +1-800-123-4567</p>
                    <button onclick="visitSupportPage()">Ir a la Página de Soporte</button>
                </section>
        
                <!-- Comentarios -->
                <section>
                    <h4>Comentarios</h4>
                    <textarea id="feedback" rows="4" cols="50" placeholder="Escribe tus comentarios aquí..."></textarea>
                    <br>
                    <button onclick="sendFeedback()">Enviar Comentarios</button>
                </section>
            `;
            break;
        

        default:
            content = `
                <p>Seleccione una opción válida del menú.</p>
            `;
    }

    // Render the content in the details section
    details.innerHTML = content;
}
function calendario(){
    const calendarioHTML = `
    <section class="calendar-container">
    <header class="calendar-header">
        <button class="nav-button" onclick="prevMonth()">&#9664;</button>
        <h1 id="month-year">Diciembre 2024</h1>
        <button class="nav-button" onclick="nextMonth()">&#9654;</button>
    </header>
    <main class="calendar-grid" id="calendar-grid">
        <!-- Los días del mes se generarán dinámicamente aquí -->
    </main>
</section>
`;
seccion.innerHTML = calendarioHTML;
generateCalendar(currentDate);
}
function marco() {
    // Realizar la solicitud con fetch para obtener todos los marcos
    fetch('/api/marcos')
        .then(response => {
            // Verifica si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            // Selecciona el contenedor de la sección
            seccion.innerHTML = ''; // Limpia el contenido existente
          //  <img src="${marco.image}" alt="${marco.nombre}" width="100">
            // Itera sobre los datos y los inserta directamente en la sección
            data.forEach(marco => {
                const marcoElement = `
                    <div id="marco_" onclick="actualizarFoto('${marco.image}','image0')"
            style="
                background-image: url('${marco.image}');
                background-size: cover; /* Ajusta la imagen para cubrir todo el div */
                background-position: center; /* Centra la imagen */
                background-repeat: no-repeat; /* Evita repeticiones */
                width: 160px; /* Ajusta el ancho del div */
                height: 160px; /* Ajusta la altura del div */
            ">
                        <h3>${marco.nombre}</h3>
                        <p>Material: ${marco.material || 'N/A'}</p>
                        <p>Grosor del Borde: ${marco.grosor_borde || 'N/A'}mm</p>
                    </div>
                `;
                seccion.innerHTML += marcoElement;
            });
        })
        .catch(error => {
            // Manejo de errores
            const seccion = document.getElementById('seccion');
            seccion.innerHTML = `<p style="color: red;">${error.message || 'Error al obtener los marcos.'}</p>`;
        });
}



function colocarAlbunes() {
    // Realizar una solicitud AJAX utilizando fetch
    fetch('/api/albums') // Asegúrate de que esta URL sea la correcta para tu API
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los álbumes');
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            // Limpiar la sección antes de colocar nuevos álbumes
            seccion.innerHTML = '';

            // Verificar si hay álbumes
            if (data.length === 0) {
                seccion.innerHTML = '<p>No hay álbumes disponibles.</p>';
                return;
            }

            // Crear contenido dinámico para cada álbum
            data.forEach(album => {
                const albumDiv = document.createElement('div');
                albumDiv.className = 'album';

                // Estructura de cada álbum
                albumDiv.innerHTML = `
                    <img src="${album.imagen_portada}" alt="${album.nombre}" class="album-cover">
                    <h3>${album.nombre}</h3>
                    <p>${album.descripcion}</p>
                    <p><small>Creado el: ${new Date(album.fecha_creacion).toLocaleDateString()}</small></p>
                `;
                albumDiv.setAttribute('onclick', `albumAfotos('${album.nombre}')`);
                // Añadir el álbum al contenedor
                seccion.appendChild(albumDiv);
            });
        })
        .catch(error => {
            console.error(error);
            seccion.innerHTML = '<p>Error al cargar los álbumes.</p>';
        });
}
function albumAfotos(album_name){
fotos(album_name); //actualiza la seccion con foto
}
function limpiar(){
    seccion.innerHTML = '';
}
function fotos(album_name){
    limpiar();
    album_=album_name;
    fetch(`/api/fotos?album_name=${encodeURIComponent(album_name)}`) // Endpoint para obtener fotos
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener las fotos del álbum');
        }
        return response.json();
    })
    .then(data => {
        const seccion = document.getElementById('seccion');
        if (data.length === 0) {
            seccion.innerHTML = `<p>No hay fotos disponibles para el álbum: ${album_name}.</p>`;
            return;
        }
        data.forEach(foto => {
            const fotoDiv = document.createElement('div');
            fotoDiv.className = 'foto';
            fotoDiv.innerHTML = `
                <img src="${foto.image}" alt="${foto.titulo}" class="foto-img">
                <p><small>Creada el: ${new Date(foto.fecha_creacion).toLocaleDateString()}</small></p>
            `;
            fotoDiv.setAttribute('onclick', `actualizarFoto('${foto.image}','image1')`);
            seccion.appendChild(fotoDiv);
        });
    })
    .catch(error => {
        console.error(error);
        const seccion = document.getElementById('seccion');
        seccion.innerHTML = `<p>Error al cargar las fotos del álbum.</p>`;
    });
}
function actualizarFoto(fotoImage, imageId) {
    // Seleccionar la imagen por su ID
    const imageElement = document.getElementById(imageId);
    // Verificar si la imagen existe
    if (imageElement) {
        // Actualizar la URL de la imagen
        imageElement.src = fotoImage;
        console.log(`La imagen con ID "${imageId}" ha sido actualizada a "${fotoImage}".`);
    } else {
        console.error(`No se encontró ninguna imagen con el ID "${imageId}".`);
    }
    close_("album");
    ocultarMenu();
}

