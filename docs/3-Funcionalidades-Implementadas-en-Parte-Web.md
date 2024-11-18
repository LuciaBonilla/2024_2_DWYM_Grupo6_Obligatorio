# Funcionalidades Implementadas en Parte Web

- Uso de JWT para la autenticación de usuarios.

- Implementación del uso de JWT para proteger las rutas que requieren autenticación.

- Implementación del flujo de login y registro de usuarios.

- Se puede crear cuenta con un email, nombre de usuario y contraseña. Se manejan las siguientes excepciones: no usar un correo, campos vacíos, correo o nombre de usuario ya usados por otros, la contraseña y su repetición no coinciden.

- Los usuarios autenticados pueden ver el feed de toda la red social, subir publicaciones, editar su perfil, interactuar con sus publicaciones y las de otros usuarios, y ver sus perfiles y los de otros usuarios.

- Se pueden subir únicamente imágenes y una descripción que acompañe. Se maneja la excepción en caso de no subir imagen.

- La aplicación muestra un feed de imágenes subidas por los usuarios (no muestra las imágenes propias subidas por un usuario porque es responsabilidad del perfil propio).

- El feed está ordenado cronológicamente por fecha de subida.

- Funcionalidad de dar y quitar “me gusta” en las publicaciones.

- Los usuarios pueden comentar en cualquier publicación y puedan borrar sus comentarios.

- La sección de comentarios de cada publicación está partida entre comentarios propios y ajenos.

- Los comentarios están ordenados cronológicamente por fecha de subida.

- Apretar cualquier tarjetita de perfil redirige al perfil propio o el de otro usuario.

- Cada usuario puede editar su perfil, incluyendo su nombre de usuario y foto de perfil. Se manejan las siguientes excepciones: campos vacíos o nombre de usuario ya usado.

- Todos los perfiles muestran nombre de usuario, email, la fecha en que se creó el perfil, cantidad de posts y las imágenes subidas. Apretar una imagen subida lleva al post específico de esa imagen, lo cual permite ver los comentarios y número de likes, comentar y dar o quitar like.

- Todas las excepciones se indican con un modal para avisar al usuario.

- Protección de la subida de imágenes y la edición de perfil mediante validación de autenticación, es decir, por medio del uso de un token.