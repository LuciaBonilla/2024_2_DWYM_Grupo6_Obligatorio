# Instrucciones para Ejecutar la Aplicación Web

1. Encender el backend.

- El backend utilizado en el proyecto se basa [en el brindado por el equipo docente](https://github.com/bruno-argenta/fake_instagram.git), pero con algunos cambios.

- Backend utilizado: [fake_instagram fix grupo 6](https://github.com/nex0uy/fake_instagram-fix-g6.git)

- El backend utilizado sólo hace modificaciones del brindado por el equipo docente en la parte de los controllers de los comentarios y los posts, específicamente para retornar toda la información de un comentario en `createComment` y `getFeed`, lo cual reduce el número de llamadas innecesarias al backend.

- Para activar el backend es necesario, a nivel de la carpeta `api-node`, crear la carpeta `uploads` (para luego poder subir imágenes en la aplicación), ejecutar `npm install` (para instalar las dependencias necesarias) y, finalmente, ejecutar `npm run start`.

---

## En Web

2. Encender la aplicación.

- Sobre el directorio raíz ejecutar `npm install`, ejecutar `npm run dev` e ir a la ruta marcada en consola.

---

## En Mobile

2. Encender la aplicación.

- Ir a [BACKEND_URI](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/constants/BACKEND_URI.js), donde está definida la URI de la API de backend, y cambiar la dirección IP a la IPv4 del adaptador WiFi de la computadora que corre el proyecto, pero mantener el mismo puerto que está marcado. Esto es necesario porque el backend no corre en el móvil, sino en la computadora.

- Sobre el directorio [PhantyNet](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet) ejecutar `npm install`, ejecutar `npx expo start`, y utilizar un emulador o el móvil.

---