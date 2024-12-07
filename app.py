import os
import random
import logging
from flask import Flask, jsonify, render_template, request, url_for
app=Flask(__name__)
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:1234@localhost/dpf'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

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

class Album(db.Model):
    __tablename__ = 'album'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    descripcion = db.Column(db.Text, nullable=True)
    imagen_portada = db.Column(db.String(500), nullable=True)
    fecha_creacion = db.Column(db.DateTime, nullable=True)
    actualizado_en = db.Column(db.DateTime, nullable=True)

class Foto(db.Model):
    __tablename__ = 'foto'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    album_id = db.Column(db.Integer, db.ForeignKey('album.id'), nullable=False)
    titulo = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(500), nullable=False)
    descripcion = db.Column(db.Text, nullable=True)
    fecha_creacion = db.Column(db.DateTime, nullable=True, default=db.func.current_timestamp())
    actualizado_en = db.Column(
        db.DateTime,
        nullable=True,
        default=db.func.current_timestamp(),
        onupdate=db.func.current_timestamp()
    )

    # Relación con el modelo `Album`
    album = db.relationship('Album', backref=db.backref('fotos', lazy=True))

class Marco(db.Model):
    """Modelo para la tabla `marco_digital`."""
    __tablename__ = 'marco_digital'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(500), nullable=False)
    material = db.Column(db.String(100), nullable=True)
    grosor_borde = db.Column(db.Float, nullable=True)

    @staticmethod
    def get_marco_by_name(nombre):
        """
        Obtiene los marcos por nombre sin modificar las URLs de las imágenes.
        :param nombre: Nombre del marco.
        :return: Lista de marcos que coincidan con el nombre.
        """
        marcos = Marco.query.filter(Marco.nombre.like(f"%{nombre}%")).all()
        return [
            {
                "id": marco.id,
                "nombre": marco.nombre,
                "image": marco.image,  # URL tal como está almacenada
                "material": marco.material,
                "grosor_borde": marco.grosor_borde
            }
            for marco in marcos
        ]
    
@app.route('/api/marcos', methods=['GET'])
def get_marcos():
    """
    API para obtener información de todos los marcos.
    """
    # Consultar todos los marcos en la base de datos
    marcos = Marco.query.all()

    if not marcos:
        # Si no se encuentran resultados, devolver un error 404
        return jsonify({"error": "No se encontraron marcos"}), 404

    # Convertir los resultados en una lista de diccionarios
    marco_list = [
        {
            "id": marco.id,
            "nombre": marco.nombre,
            "image": marco.image,
            "material": marco.material,
            "grosor_borde": marco.grosor_borde
        }
        for marco in marcos
    ]

    # Devolver la lista como respuesta JSON
    return jsonify(marco_list), 200


@app.route('/api/fotos', methods=['GET'])
def get_fotos():
    album_name = request.args.get('album_name')  # Obtener el nombre del álbum desde los parámetros
    if not album_name:
        return jsonify({"error": "Nombre del álbum requerido"}), 400

    # Consultar las fotos del álbum
    fotos = Foto.query.join(Album).filter(Album.nombre == album_name).all()
    foto_list = [
        {
            "id": foto.id,
            "titulo": foto.titulo,
            "descripcion": foto.descripcion,
            "image": foto.image,
            "fecha_creacion": foto.fecha_creacion
        }
        for foto in fotos
    ]
    return jsonify(foto_list), 200

@app.route('/api/albums', methods=['GET'])
def get_albums():
    logging.debug("Iniciando consulta de álbumes.")
    try:
        albums = Album.query.all()
        
        album_list = [
            {
                "id": album.id,
                "nombre": album.nombre,
                "descripcion": album.descripcion,
                "imagen_portada": album.imagen_portada,
                "fecha_creacion": album.fecha_creacion,
                "actualizado_en": album.actualizado_en
            }
            for album in albums
        ]
        
        return jsonify(album_list), 200

    except Exception as e:
        return jsonify({"error": "Error al obtener los álbumes", "message": str(e)}), 500

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
