# Estructura de la aplicación :bookmark_tabs:

La estructura de la aplicación implica explicar la navegación, el wireframe y la organización del código fuente (carpetas y archivos).

## Rutas y flujo de navegación en la experiencia de usuario final :bus:

- La aplicación consta de :nine: rutas de navegación que tienen una función específica en la experiencia de usuario final. Estas rutas son: `/login`, `/register`, `/myfeed`, `/myprofile`, `/myprofile/edit`, `/createpost`, `/posts/:id`, `/myposts/:id` y `/profiles/:id`.

- Estas rutas se dividen en protegidas :lock:: `/myfeed`, `/myprofile`, `/myprofile/edit`, `/createpost`, `/posts/:id`, `/myposts/:id`, `/profiles/:id`, y no protegidas :unlock:: `/login`, `/register`.

- Las rutas, su descripción y su flujo de navegación se muestran en este [diagrama](diagrams/routes.png). :pencil2:

- Todas las rutas protegidas sólo son accesibles si el usuario se autenticó, en caso contrario, intentar acceder a ellas siempre redirigirá a `/login`. Esto garantiza la seguridad de la aplicación.

- Si el usuario está autenticado y va a una ruta no protegida, entonces se quitará la sesión y el usuario deberá acceder de nuevo para acceder a las rutas protegidas. Esto es una decisión arbitraria que creemos que garantiza coherencia en la experiencia de usuario.

## Wireframe :bar_chart:

- Un wireframe es un esquema visual básico que representa la estructura y el diseño de una página web o aplicación. Se utiliza en las etapas iniciales del diseño para planificar la disposición de los elementos y el flujo de la interfaz de usuario, sin centrarse en aspectos visuales como colores, imágenes o estilos.

- La aplicación consta de :nine: páginas que se renderizan según la ruta que se ponga en el navegador y si se cumplen los requisitos de autenticación. Una versión simplificada de estas páginas se ve en este [wireframe](diagrams/wireframe.png), pero en versión mobile ya que fue más fácil para después pasarlo a tablet y desktop, es decir, que el enfoque fue mobile first. :iphone:

- Tener en cuenta que el wireframe no especifica comportamiento ni componentes en código de la aplicación, por lo tanto, se tendrá que ver el código fuente para ver estos detalles.

## Organización del código fuente (carpetas y archivos) :open_file_folder: :page_facing_up:

La carpeta [src](../src/) contiene el código fuente de la aplicación. Específicamente, contiene lo siguiente:

- [assets](../src/assets/): contiene imágenes, por ejemplo, el logo de la aplicación y una imagen de perfil por defecto. :camera:

- [auxiliar-classes](../src/auxiliar-classes/): contiene clases con métodos que pueden ayudar a las páginas y a sus componentes. :sos:

- [components](../src/components/): contiene los componentes compartidos entre páginas y los específicos para cada página. 

- [constants](../src/constants/): contiene archivos con variables constantes, como rutas o la dirección de la API de backend. El propósito es centralizar el valor de estas variables porque se usan en distintos archivos.

- [context-providers](../src/context-providers/): contiene componentes especiales que proveen un conexto común a todos sus hijos. Aquí sólo se encuentra el componente que guarda el contexto de autenticación del usuario (id de usuario, token, etc.).

- [pages](../src/pages/): Contiene los :nine: archivos correspondientes a las :nine: páginas. :newspaper:

- [routes-protection](../src/routes-protection/): contiene componentes para proteger ciertas rutas. Aquí sólo hay un componente que siempre redirige a `/login` si un usuario no está autenticado, en caso contrario, deja ir a la ruta y renderizar el contenido de la página.

- [styles](../src/styles/): contiene todos los estilos de la aplicación en sus tres formatos (mobile, tablet y desktop).

- [AppRouter.jsx](../src/AppRouter.jsx): Define la navegación de la aplicación.

- [main.jsx](../src/main.jsx): Punto de entrada de la aplicación.