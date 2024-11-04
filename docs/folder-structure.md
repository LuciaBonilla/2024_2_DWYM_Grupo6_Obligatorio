# ESTRUCTURA DE CARPETAS

- src
    - assets: Imágenes/fotos.
    - auxiliar-classes: Clases auxiliares/de ayuda.
    - components: Componentes para cada page. Los componentes usados por más de una page van en shared-components.
    - constants: Rutas y URI de Backend. Ayuda a centralizar los valores hardcodeados.
    - context-providers: Tiene el proveedor de contexto de autenticación (AuthContextProvider).
    - pages: Páginas que se renderizan según la ruta.
    - routes: Sólo tiene el componente de ruuta protegida.
    - styles: Estilos.
    - main.jsx es el punto de partida de la aplicación. :arrow_forward: y AppRouter define la navegación de la aplicación. :ship:

- docs
    - diagrama: Está desactualizado, ya que es de una primera versión de la aplicación. :eyes: