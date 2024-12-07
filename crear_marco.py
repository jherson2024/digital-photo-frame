from PIL import Image, ImageDraw, ImageFilter

def aplicar_textura_marco(marco_path, textura_path, output_path):
    """
    Reemplaza las áreas negras del marco con una textura.

    :param marco_path: Ruta de la imagen del marco (debe ser PNG con transparencia).
    :param textura_path: Ruta de la imagen de textura a usar (madera, agua, etc.).
    :param output_path: Ruta donde se guardará la nueva imagen generada.
    """
    # Abrir la imagen del marco y la textura
    marco = Image.open(marco_path).convert("RGBA")
    textura = Image.open(textura_path).convert("RGBA")

    # Redimensionar la textura al tamaño del marco
    textura = textura.resize(marco.size)

    # Separar los canales del marco (R, G, B, A)
    r, g, b, a = marco.split()

    # Crear una máscara donde el negro del marco se convierte en blanco (1)
    negro_mask = Image.eval(r, lambda px: 255 if px == 0 else 0)

    # Aplicar la textura solo donde está el negro del marco
    resultado = Image.composite(textura, marco, negro_mask)

    # Combinar con el canal alfa original
    resultado.putalpha(a)

    # Guardar la nueva imagen
    resultado.save(output_path, "PNG")
    print(f"Imagen con textura aplicada guardada en: {output_path}")

# Rutas de entrada y salida
textura_nombre = "madera"
tipo = "jpg"
marco_path = "marco.png"  # Imagen del marco (borde negro con transparencia)
textura_path = "static/textura/{textura_nombre}.{tipo}"  # Imagen de la textura (madera, agua, etc.)
output_path = "static/marcos/{textura_nombre}.png"  # Ruta de salida

# Aplicar la textura al marco
aplicar_textura_marco(marco_path, textura_path, output_path)
