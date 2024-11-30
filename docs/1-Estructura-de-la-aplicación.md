# Estructura de la Aplicación :bookmark_tabs:

La estructura de la aplicación abarca aspectos relacionados con la navegación, el wireframe y la organización del código fuente (carpetas y archivos).

---

## Rutas y Flujo de Navegación :bus:

### En Web

- [Click aquí para ver la navegación definida en código](../src/AppRouter.jsx).

- La aplicación web incluye nueve rutas de navegación, cada una con una función específica para la experiencia del usuario. Estas rutas son: `/login`, `/register`, `/myfeed`, `/myprofile`, `/myprofile/edit`, `/createpost`, `/posts/:id`, `/myposts/:id` y `/profiles/:id`.

- Estas rutas se clasifican en protegidas :lock:: (`/myfeed`, `/myprofile`, `/myprofile/edit`, `/createpost`, `/posts/:id`, `/myposts/:id`, `/profiles/:id`), y no protegidas :unlock:: (`/login`, `/register`).

- El flujo de navegación y la descripción de cada ruta se presentan en el siguiente [diagrama](diagrams/routes.png). :pencil2:

- Aunque las rutas `/posts/:id` y `/myposts/:id` tienen un comportamiento similar actualmente, se diferenciaron pensando en posibles funcionalidades futuras, como la eliminación de publicaciones propias.

- Las rutas dinámicas permiten renderizar contenido específico basado en un identificador (id). Por ejemplo, `/profiles/:id` muestra el perfil correspondiente a la id proporcionada en la ruta. Esto facilita la obtención y renderización de contenido específico desde el backend.

- Las rutas protegidas solo son accesibles si el usuario ha iniciado sesión. De lo contrario, cualquier intento de acceso redirige automáticamente a `/login`, garantizando la seguridad de la aplicación.

- Si un usuario autenticado intenta acceder a una ruta no protegida, se cerrará la sesión, requiriendo que el usuario inicie sesión nuevamente para acceder a las rutas protegidas. Esta decisión se tomó para asegurar una experiencia de usuario coherente.

### En Mobile

- [Click aquí para ver la navegación definida en código](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/app/_layout.jsx)

- La aplicación mobile aplica lo mismo que la web, pero son ocho rutas de navegación. Estas rutas son: `modules/LoginScreen`, `modules/RegisterScreen`, `modules/MyFeedScreen`, `modules/CreatePostScreen`, `modules/MyProfileScreen`, `modules/EditMyProfileScreen`, `modules/OtherUserProfileScreen/[userID]` y `modules/SpecificPostScreen/[postID]`.

- Las rutas, además de clasificarse de la misma manera que en web en cuanto a protección, también se dividen en módulos Estos módulos son: `(auth)`, rutas sobre autenticación; `(tabs)`, rutas que pertenecen a una barra de navegación; `(posts)`, rutas relacionadas a posts sin incluir las tabs; y `(profiles)`, rutas relacionadas a perfiles.

- En mobile, las rutas de un post de otro usuario y de un post propio fueron combinadas en la ruta `modules/SpecificPostScreen/[postID]` para mayor facilidad al programar.

---

## Wireframe :bar_chart:

- Un wireframe es un esquema visual básico que representa la estructura y el diseño de una página web o aplicación. Se utiliza en las etapas iniciales del diseño para planificar la disposición de los elementos y el flujo de la interfaz de usuario, sin centrarse en aspectos visuales como colores, imágenes o estilos.

- La aplicación consta de nueve páginas (en web) u ocho pantallas (en mobile), que se renderizan según la ruta visitada y si se cumplen los requisitos de autenticación. Una versión simplificada de estas páginas o pantallas se puede visualizar en el [wireframe](diagrams/wireframe.png), diseñado con un enfoque mobile first, facilitando su adaptación a tabletas y escritorio. :iphone:

- La aplicación web se parece más al wireframe, mientras que la aplicación mobile quita algunos elementos para mayor facilidad al programar.

- Es importante destacar que el wireframe no define el comportamiento ni los componentes específicos en el código, por lo que se debe consultar el código fuente para obtener estos detalles.

---

## Organización del Código Fuente (carpetas y archivos) :open_file_folder: :page_facing_up:

### En Web:

El código fuente de la aplicación web se encuentra en la carpeta [src](../src/), organizada de la siguiente manera:

- [assets](../src/assets/): Contiene recursos multimedia, como el logo de la aplicación e imágenes de perfil predeterminadas. :camera:

- [auxiliar-classes](../src/auxiliar-classes/): Incluye clases con métodos auxiliares que pueden ser utilizados tanto en las páginas como en los componentes. :sos:

- [components](../src/components/): Contiene los componentes reutilizables y específicos para cada página.

- [constants](../src/constants/): Almacena archivos con variables constantes, como rutas o la URI de la API del backend, centralizando estos valores para facilitar su uso en diferentes archivos.

- [context-providers](../src/context-providers/): Incluye componentes que proporcionan un contexto común a sus hijos. Actualmente, solo contiene el proveedor del contexto de autenticación del usuario (id de usuario, token, etc.).

- [pages](../src/pages/): Contiene los archivos correspondientes a las nueve páginas de la aplicación. :newspaper:

- [routes-protection](../src/routes-protection/): Contiene componentes para proteger el acceso a ciertas rutas. Actualmente, incluye un componente que redirige a `/login` si el usuario no está autenticado; de lo contrario, permite el acceso y renderiza el contenido de la página.

- [styles](../src/styles/): Contiene todos los estilos de la aplicación, organizados para los formatos mobile, tablet y desktop.

- [AppRouter.jsx](../src/AppRouter.jsx): Define la navegación de la aplicación.

- [main.jsx](../src/main.jsx): Punto de entrada de la aplicación.

### En Mobile:

La versión mobile replica la mayoría de componentes de la versión web y agrega unos pocos nuevos para adaptarse de React a ReactNative.

El código fuente de la aplicación mobile se encuentra en la carpeta [PhantyNet](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet), organizada de la siguiente manera:

- [assets](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet/assets): Contiene recursos multimedia, como el logo de la aplicación, imágenes de perfil predeterminadas o fuentes de letra. :camera:

- [auxiliar-classes](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet/auxiliar-classes): Incluye clases con métodos auxiliares que pueden ser utilizados tanto en las pantallas como en los componentes. :sos:

- [app/components](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet/app/components): Contiene los componentes reutilizables y específicos para cada pantalla.

- [constants](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet/constants): Almacena archivos con variables constantes, como rutas, la URI de la API del backend y los colores utilizados, centralizando estos valores para facilitar su uso en diferentes archivos.

- [context-providers](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet/context-providers): Incluye componentes que proporcionan un contexto común a sus hijos. Actualmente, solo contiene el proveedor del contexto de autenticación del usuario (id de usuario, token, etc.) y el proveedor del contexto de dimensiones (ancho y alto de la ventana).

- [app/modules](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet/app/modules): Contiene los archivos correspondientes a las nueve pantallas de la aplicación y su estructura define el flujo de la navegación. :newspaper:

- [app/styles](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/tree/main/PhantyNet/app/styles): Contiene unos pocos estilos (en mobile) reutilizables de la aplicación, ya que la mayoría de estilos se encuentran en el mismo archivo que el componente que lo usa, para mayor facilidad de estilización.

- [app/_layout.jsx](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/app/_layout.jsx): Define la navegación de la aplicación.

- [app/index.jsx](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/app/index.jsx): Punto de entrada de la aplicación.

---