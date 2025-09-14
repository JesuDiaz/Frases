# Frases
API con Express.js que permite gestionar frases motivacionales que se encuentran almacenadas en memoria. Esta API permite consultar las frases almacenadads, ademas de obtener una frase aleatoria y asi mismo agregar mas frases.

# 1. Crear la carpeta del proyecto.
Primero descargamos el archivo index.js, y lo guardamos en la carpeta de nuestra preferencia, si aún no tienes una carpeta, crea una nueva y coloca dentro el archivo.

# 2. Abrimos nuestro editor de codigo fuente.
Una vez descargado nuestro archivo index.js, procedemos a abrir el archivo en CMD.

# 3. Buscar la carpeta del proyecto
Cuando ya tengamos abierto el CMD procedemos a colocar el siguiente comando, "cd" y pegamos la ruta de la carpeta, en mi caso seria "cd \Users_ItsYisus\Documents\Test"

# 4. Iniciacion del proyecto e instalacion de dependencias por el CMD
Una vez estemos dentro de la carpeta primero usamos en el CMD el siguiente codigo "npm init -y", esto genera el archivo package.json.

Despues instalamos Express con el codigo "npm install express" en el CMD

# 5. Ejecutamos el servidor
Y por ultimo escribimos el codigo "node index.js" para que este se ejecute en el localhost:4000

# 6. Prueba del proyecto
Procedemos a probar el proyecto en el navegador de nuestra preferencia con las diferentes rutas que tiene:

  http://localhost:4000/random/quotes
  
  http://localhost:4000/random/quotes/random
