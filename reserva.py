import os
import random
from flask import Flask, jsonify, render_template, request, url_for
app=Flask(__name__)

ALBUM_BASE_PATH = os.path.join('static', 'album')
MARCO_BASE_PATH = os.path.join('static', 'media', 'marco2')
IMG_MENU_BASE_PATH = os.path.join('static', 'img', 'img_menu')
IMG_BOTON_BASE_PATH = os.path.join('static', 'img', 'img_boton')
image1 = None
image0 = None
ALBUM=None
AJUSTES = {
    "brillo": 1.0,         # Nivel inicial de brillo
    "marco_size": 10,      # Tamaño inicial del marco en píxeles
    "imagen_size": 100     # Tamaño inicial de la imagen como porcentaje
}

OPCIONES = {
    "menu_items": [
        "album", 
        "fotos", 
        "marco", 
        "calendario", 
        "config.", 
        "acerca-de"
    ],
    "botones": [
        "ampliarImagen", 
        "reducirImagen", 
        "ampliarMarco", 
        "reducirMarco", 
        "cambiarFondo", 
        "aumentarBrillo", 
        "reducirBrillo"
    ]
}
IMAGENES={
    "botones":[

    ],
    "imgs_menu":[

    ]
}
ALBUNES={
    
}

@app.route('/')
def home():
    return render_template(
        'index.html', 
        image1=image1, 
        image0=image0, 
        ajustes=AJUSTES, 
        opciones=OPCIONES,
        imagenes=IMAGENES,
        albumes=ALBUNES,
        zip=zip,
        albun=ALBUM
    )

@app.route('/get-images', methods=['GET'])
def get_images():
    # Aquí defines las imágenes que quieres devolver
    images = {
        "image1": image1,  # URL de la imagen 1
        "image0": image0   # URL de la imagen 0
    }
    return jsonify(images)

@app.route("/actualizar-seccion")
def actualizar_seccion():
    # Obtener el nombre del álbum de los parámetros de consulta o usar uno por defecto
  
    print(ALBUM)
    # Validar que el álbum exista en la lista
    if ALBUM not in ALBUNES:
        return "Álbum no encontrado", 404
    
    # Pasar los datos del álbum a la plantilla
    return render_template("foto.html", album_name=ALBUM, images=ALBUNES[ALBUM])


@app.route('/update-album', methods=['POST'])
def update_album():
    global ALBUM
    data = request.get_json()  # Recibe la solicitud en formato JSON
    album_name = data.get('album')  # Extrae el nombre del álbum
    if album_name:
        ALBUM = album_name  # Actualiza la variable global
        print("actualizando album a: "+ALBUM)
        return jsonify({'status': 'success', 'album': ALBUM}), 200
    return jsonify({'status': 'error', 'message': 'No album provided'}), 400

def obtener_albumes_y_fotos(ruta_base):
    """
    Obtiene álbumes y sus fotos desde una carpeta base.
    
    :param ruta_base: Ruta base donde se encuentran las carpetas de álbumes.
    :return: Diccionario donde la clave es el nombre del álbum y el valor es una lista de fotos.
    """
    # Verificar si la ruta base existe
    if not os.path.exists(ruta_base):
        print(f"La ruta base '{ruta_base}' no existe.")
        return {}
    
    # Iterar por cada carpeta (álbum) en la ruta base
    albumes = {}
    for carpeta in os.listdir(ruta_base):
        carpeta_path = os.path.join(ruta_base, carpeta)
        if os.path.isdir(carpeta_path):  # Verificar si es una carpeta
            # Obtener las fotos dentro del álbum
            fotos = [
                archivo for archivo in os.listdir(carpeta_path)
                if os.path.isfile(os.path.join(carpeta_path, archivo))
            ]
            albumes[carpeta] = fotos
    
    return albumes

def cargar_imagenes():
    """
    Llena el diccionario IMAGENES con las imágenes encontradas en IMG_MENU_BASE_PATH y IMG_BOTON_BASE_PATH.
    """
    # Cargar imágenes del menú
    if os.path.exists(IMG_MENU_BASE_PATH):
        IMAGENES['imgs_menu'] = [
            os.path.join(IMG_MENU_BASE_PATH, img) 
            for img in os.listdir(IMG_MENU_BASE_PATH) 
            if os.path.isfile(os.path.join(IMG_MENU_BASE_PATH, img))
        ]

    # Cargar imágenes de botones
    if os.path.exists(IMG_BOTON_BASE_PATH):
        IMAGENES['botones'] = [
            os.path.join(IMG_BOTON_BASE_PATH, img) 
            for img in os.listdir(IMG_BOTON_BASE_PATH) 
            if os.path.isfile(os.path.join(IMG_BOTON_BASE_PATH, img))
        ]

def get_random_folder(base_dir):
    try:
        # Verificar que el directorio existe
        if not os.path.isdir(base_dir):
            print(f"{base_dir} no es un directorio válido.")
            return None

        # Listar las subcarpetas en el directorio base
        subfolders = [f for f in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, f))]

        # Verificar si hay subcarpetas
        if not subfolders:
            print(f"No se encontraron carpetas en {base_dir}")
            return None

        # Seleccionar una carpeta aleatoria
        return os.path.join(base_dir, random.choice(subfolders))
    except Exception as e:
        print(f"Error al obtener carpeta aleatoria de {base_dir}: {e}")
        return None
    
def get_random_image(folder_path):
    try:
        # Verificar que la carpeta existe
        if not os.path.isdir(folder_path):
            print(f"{folder_path} no es un directorio válido.")
            return None

        # Listar las imágenes en la carpeta
        files = os.listdir(folder_path)
        images = [f for f in files if f.lower().endswith(('png', 'jpg', 'jpeg', 'gif'))]

        # Verificar si hay imágenes
        if not images:
            print(f"No se encontraron imágenes en {folder_path}")
            return None

        # Seleccionar una imagen aleatoria
        return os.path.join(folder_path, random.choice(images))
    except Exception as e:
        print(f"Error al obtener imagen aleatoria de {folder_path}: {e}")
        return None

if __name__=='__main__':
    ALBUNES = obtener_albumes_y_fotos(ALBUM_BASE_PATH)
    image1 = get_random_image(get_random_folder(ALBUM_BASE_PATH))
    image0 = get_random_image(MARCO_BASE_PATH)
    cargar_imagenes()
    app.run(debug=True)
