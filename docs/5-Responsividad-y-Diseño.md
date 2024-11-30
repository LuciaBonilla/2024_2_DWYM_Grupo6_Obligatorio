# Responsividad y Diseño

Para mantener la responsividad utilizamos distintas estrategias:

- En los archivos CSS de la versión web, utilizamos las unidades vh (viewheight) y vw (viewwidth), que al 100% miden la altura y largo total de la ventana respectivamente. Asimismo, utilizamos porcentajes para una proporción coherente entre un componente hijo y su padre.

- En la versión mobile, utilizamos la API Dimensions de React Native para obtener las dimensiones de la ventana y ajustar nuestros estilos a estos valores.