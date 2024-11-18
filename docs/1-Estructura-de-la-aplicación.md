# Estructura de la Aplicación :bookmark_tabs:

La estructura de la aplicación abarca aspectos relacionados con la navegación, el wireframe y la organización del código fuente (carpetas y archivos).

## Rutas y Flujo de Navegación :bus:

- La aplicación incluye nueve rutas de navegación, cada una con una función específica para la experiencia del usuario. Estas rutas son: `/login`, `/register`, `/myfeed`, `/myprofile`, `/myprofile/edit`, `/createpost`, `/posts/:id`, `/myposts/:id` y `/profiles/:id`.

- Estas rutas se clasifican en protegidas :lock:: (`/myfeed`, `/myprofile`, `/myprofile/edit`, `/createpost`, `/posts/:id`, `/myposts/:id`, `/profiles/:id`), y no protegidas :unlock:: (`/login`, `/register`).

- El flujo de navegación y la descripción de cada ruta se presentan en el siguiente [diagrama](diagrams/routes.png). :pencil2:

- Aunque las rutas `/posts/:id` y `/myposts/:id` tienen un comportamiento similar actualmente, se diferenciaron pensando en posibles funcionalidades futuras, como la eliminación de publicaciones propias.

- Las rutas dinámicas permiten renderizar contenido específico basado en un identificador (id). Por ejemplo, `/profiles/:id` muestra el perfil correspondiente a la id proporcionada en la ruta. Esto facilita la obtención y renderización de contenido específico desde el backend.

- Las rutas protegidas solo son accesibles si el usuario ha iniciado sesión. De lo contrario, cualquier intento de acceso redirige automáticamente a `/login`, garantizando la seguridad de la aplicación.

- Si un usuario autenticado intenta acceder a una ruta no protegida, se cerrará la sesión, requiriendo que el usuario inicie sesión nuevamente para acceder a las rutas protegidas. Esta decisión se tomó para asegurar una experiencia de usuario coherente.

## Wireframe :bar_chart:

- Un wireframe es un esquema visual básico que representa la estructura y el diseño de una página web o aplicación. Se utiliza en las etapas iniciales del diseño para planificar la disposición de los elementos y el flujo de la interfaz de usuario, sin centrarse en aspectos visuales como colores, imágenes o estilos.

- La aplicación consta de nueve páginas, que se renderizan según la ruta visitada y si se cumplen los requisitos de autenticación. Una versión simplificada de estas páginas se puede visualizar en el [wireframe](diagrams/wireframe.png), diseñado con un enfoque mobile first, facilitando su adaptación a tabletas y escritorio. :iphone:

- Es importante destacar que el wireframe no define el comportamiento ni los componentes específicos en el código, por lo que se debe consultar el código fuente para obtener estos detalles.

## Organización del Código Fuente (carpetas y archivos) :open_file_folder: :page_facing_up:

El código fuente de la aplicación se encuentra en la carpeta [src](../src/), organizada de la siguiente manera:

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