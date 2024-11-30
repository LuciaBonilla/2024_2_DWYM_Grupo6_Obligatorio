# Funcionalidades Implementadas

---

## Requisitos Obligatorios Alcanzados en Todas las Versiones

1. Autenticación y Autorización:

- [x] Utilización JWT para la autenticación de usuarios.

- [x] Implementación del flujo de login y registro de usuarios.

- [x] Los usuarios autenticados pueden ver el feed de toda la red social, subir imágenes y editar su perfil.

2. Subida de Imágenes:

- [x] Implementación de la funcionalidad de subida de imágenes desde la aplicación móvil utilizando React Native, se puede acceder a la cámara y poder subir la imagen.

- [x] Subida de imágenes desde la aplicación web a través del explorador de archivos.

3. Visualización de Feed:

- [x] La aplicación muestra un feed de imágenes subidas por los usuarios, tanto en la versión web como en la versión móvil.

- [x] El feed está ordenado cronológicamente por fecha de subida.

4. Perfil de Usuario:

- [x] Cada usuario puede editar su perfil, incluyendo su nombre de usuario y foto de perfil.

- [x] La funcionalidad de edición está disponible tanto en la web como en la aplicación móvil.

5. Seguridad:

- [x] Implementación el uso de JWT para proteger las rutas que requieren autenticación.

- [x] Protección de la subida de imágenes y la edición de perfil mediante validación de autenticación.

---

## Requisitos Opcionales Alcanzados en Todas las Versiones

6. Extras Opcionales:

- [x] Funcionalidad de "me gusta" en las publicaciones.

- [x] Permitir que los usuarios comenten en las imágenes, pero sólo se logró en la versión web.

---

## Requisitos Extras y Específicos Alcanzados en Web

- [x] Sólo se pueden subir únicamente imágenes y una descripción que acompañe. Se maneja la excepción en caso de no subir imagen.

- [x] En mobile deja recortar la imagen antes de subirla, y permite tomar foto o sacarla de la galería, a través del pedido de activar los permisos correspondientes al usuario.

- [x] Al crear una cuenta, se manejan las siguientes excepciones: no usar un correo, campos vacíos, correo o nombre de usuario ya usados por otros, la contraseña y su repetición no coinciden.

- [x] Los usuarios autenticados pueden ver los perfiles de otros usuarios.

- [x] La aplicación muestra un feed de imágenes subidas por los usuarios sin mostrar las imágenes propias subidas por un usuario porque es responsabilidad del perfil propio mostrarlas.

- [x] Un usuario se puede dar auto "me gusta".

- [x] Los usuarios pueden borrar sus comentarios.

- [x] La sección de comentarios de cada publicación está partida entre comentarios propios y ajenos. Los propios salen arriba.

- [x] Los comentarios de un post están ordenados cronológicamente por fecha de subida en cada división (propios y ajenos).

- [x] En las publicaciones hay tarjetitas de perfil y, al apretarlas, redirigen al perfil propio o al de otro usuario. Estas tarjetitas también están en los comentarios.

- [x] Al editar perfil, se manejan las siguientes excepciones: campos vacíos o nombre de usuario ya usado.

- [x] Todos los perfiles muestran nombre de usuario, email, la fecha en que se creó el perfil, cantidad de posts y las imágenes subidas.

- [x] Apretar una imagen subida en la sección de perfil lleva al post específico de esa imagen, lo cual permite ver los comentarios y cantidad de likes, comentar y dar o quitar "me gusta".

- [x] Todas las excepciones se indican con un modal para avisar al usuario.

- [x] La sesión se cierra desde el perfil o yendo a cualquiera de las rutas no protegidas.

- [x] El contexto de autenticación se guarda en el LocalStorage (en web) y en el AsyncStorage (en mobile), lo cual permite que el usuario entre sin necesidad de realizar otro inicio de sesión si no ha cerrado sesión previamente. Asimismo, tener en cuenta que se borran las credenciales de los respectivos storages si se cierra la sesión, lo que hace imposible que el usuario pueda entrar a las rutas protegidas si no inicia sesión nuevamente.

---

## Requisitos Extras y Específicos Alcanzados en Mobile

- [x] Todos los de web menos la parte de comentarios.

---

# Requisitos Propuestos No Alcanzados en Ninguna Versión

- [] Implementación de un sistema de notificaciones cuando alguien siga o interactúa con las publicaciones de un usuario.

---

# Criterios de Evaluación

- [x] Funcionalidad completa de autenticación y autorización con JWT.

- [x] Subida de imágenes desde dispositivos móviles.

- [x] Implementación de un feed dinámico que muestre las imágenes.

- [x] Funcionalidad de edición de perfil.

- [x] Código limpio y bien estructurado, con buenas prácticas de desarrollo.

- [x] Seguridad en el manejo de las credenciales y datos de los usuarios.