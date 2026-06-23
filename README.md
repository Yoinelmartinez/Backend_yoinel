# Backend Básico con Node.js y Express

## Descripción del proyecto

Este proyecto es un servidor básico de gestión académica creado con Node.js y Express. El objetivo es practicar la creación de un servidor, la configuración de rutas y comprender el flujo entre el navegador y el servidor.

---

## Tecnologías utilizadas

- Node.js
- Express
- Git y GitHub

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/Yoinelmartinez/Backend_yoinel.git
```
2. Entrar a la carpeta del proyecto:
```bash
cd Backend_yoinel
```
3. Instalar dependencias:
```bash
npm install
```
4. Ejecutar el servidor:
```bash
npm start
```
5. Abrir en el navegador:
- `http://localhost:3000/`
- `http://localhost:3000/aprendices`
- `http://localhost:3000/programas`

---

## Rutas disponibles

- `/` → Mensaje de bienvenida al sistema.
- `/aprendices` → Mensaje sobre la gestión de aprendices.
- `/programas` → Mensaje sobre los programas de formación.

---

## Respuestas a la guía de la actividad

### Proceso de configuración
- Creé la carpeta del proyecto y ejecuté `npm init` para generar `package.json`.
- Instalé Express con `npm install express`.
- Creé el archivo principal `index.js`.
- Configuré el servidor para que escuche en el puerto 3000.
- Definí las rutas solicitadas y verifiqué su funcionamiento en el navegador.

### ¿Qué función cumple el archivo `package.json`?
- Define el proyecto: nombre, versión, dependencias, scripts y metadatos.
- Es el archivo que usa npm para instalar paquetes y ejecutar comandos.

### ¿Qué ocurre al ejecutar `npm install`?
- npm lee `package.json` y `package-lock.json`.
- Descarga e instala las dependencias en `node_modules`.
- Fija las versiones en `package-lock.json` para reproducibilidad.

### Comprensión del servidor
- Que el servidor esté "escuchando" en un puerto significa que espera peticiones HTTP en ese número.
- Al acceder a `http://localhost:3000/`, el navegador envía una petición GET y el servidor responde con el mensaje definido en la ruta `/`.

### Análisis de rutas
- Cada ruta representa una URL diferente.
- `/` es la ruta principal de bienvenida.
- `/aprendices` responde información sobre aprendices.
- `/programas` responde información sobre programas.
- `req` es la petición entrante del cliente.
- `res` es la respuesta que envía el servidor.

### Reflexión técnica
- Dificultades:
  - Inicialmente puede ser confuso saber cómo arrancar el servidor y qué comando usar.
  - Entender la diferencia entre el frontend y el backend es clave para separar responsabilidades.
- Aprendizaje:
  - Comprendí que el backend recibe peticiones y devuelve respuestas.
  - Aprendí que Express facilita la creación de rutas y la organización del servidor.
- Importancia de la estructura:
  - Un proyecto bien estructurado es más fácil de mantener.
  - Aunque el proyecto sea básico, es importante documentar los pasos y usar `package.json` correctamente.

---

## Estado del proyecto

- El servidor funciona correctamente.
- Las rutas `/`, `/aprendices` y `/programas` responden como se solicita.
- El proyecto está listo para entregar en su parte de código.
 - El proyecto está listo en su parte de código.
 - Falta evidencias (capturas) y una sección final con conclusiones personales.

---

## Entregable y checklist para entrega

- Código fuente en el repositorio (completado).
- `README.md` con instrucciones y análisis (completado, esta versión).
- Evidencias: capturas del servidor corriendo en puerto 3000 (pendiente).
- Conclusiones personales y reflexiones (puedes añadirlas aquí en el README).

### Qué falta (qué debes entregar aquí en el README)

- Capturas de pantalla mostrando las rutas funcionando (usa `PrtSc` o herramientas del sistema).
- Un párrafo final con tus conclusiones personales sobre el proceso.

### Cómo tomar evidencias (pasos rápidos)

1. Ejecuta el servidor:

```bash
npm start
```

2. Abre en el navegador las rutas y toma capturas:

- `http://localhost:3000/`
- `http://localhost:3000/aprendices`
- `http://localhost:3000/programas`

3. Inserta las imágenes en el README (o súbelas a la carpeta `./evidencias` y enlázalas) con la sintaxis:

```markdown
![Servidor en /](./evidencias/home.png)
```

---

Si quieres, puedo generar una sección ejemplo de conclusiones y añadirla al README, y también crear la carpeta `evidencias/` y un ejemplo de cómo enlazar las imágenes.
