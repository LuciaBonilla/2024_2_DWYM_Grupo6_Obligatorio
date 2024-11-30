# Dificultades Encontradas

- El uso de TypeScript en la tanda final, ya que tuvimos poco tiempo para centralizar las interfaces que se repetían, por lo tanto, decidimos pasar todo el código fuente a JavaScript XML. Sin embargo, si bien TypeScript permite definir los tipos de entradas y salidas, lo cual genera un mayor control de los errores, el uso de JavaScript XML nos permitió programar más rápido en esta aplicación a baja escala.

- Disminuir la calidad de las imágenes que están en base64, ya que las HTTP request no dejan enviar datos tan grandes.

- Estilizar la aplicación móvil, ya que diferentes propiedades sólo funcionan en un sistema operativo u en otro. Además, en CSS, se puede aplicar un estilo base a un elemento padre y los hijos lo heredan automáticamente, pero en React Native, cada componente debe recibir un estilo explícito, lo que hace que la definición de estilos sea más repetitiva.

Ej. con la familia y tamaño de determinada fuente, en CSS sólo basto definirlo en el padre, pero en React Native tuvimos que escribir la declaración a cada hijo.

- Por el poco tiempo que nos quedó, no pudimos crear el sistema de notificaciones y amigos, así como también el sistema de comentarios en mobile, pero esos fueron requisitos no obligatorios de la tarea.