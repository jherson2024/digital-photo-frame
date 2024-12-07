import os

# Configuración
carpeta_marcos = "static/marcos"
output_sql_file = "insert_marco_digital.sql"

# Valores por defecto
material_default = "Papel"
grosor_default = 2.0

# Obtener todos los archivos de la carpeta
archivos = os.listdir(carpeta_marcos)
archivos_png = [archivo for archivo in archivos if archivo.endswith(".png")]

# Generar el script SQL
with open(output_sql_file, "w") as file:
   #  file.write("USE dpf;\n")  # Cambia "dpf" por el nombre de tu base de datos si es necesario
    file.write("INSERT INTO marco_digital (nombre, image, material, grosor_borde) VALUES\n")
    values = []

    for archivo in archivos_png:
        # Generar nombre sin la extensión
        nombre = os.path.splitext(archivo)[0].capitalize()
        ruta_imagen = os.path.join(carpeta_marcos, archivo).replace("\\", "/")  # Rutas compatibles con SQL
        values.append(
            f"('{nombre}', '{ruta_imagen}', '{material_default}', {grosor_default})"
        )

    # Escribir los valores en el archivo SQL
    file.write(",\n".join(values) + ";\n")

print(f"Script SQL generado: {output_sql_file}")
