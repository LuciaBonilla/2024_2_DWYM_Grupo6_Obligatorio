# Uso de Patrones de Diseño en React :scroll:

Nuestra aplicación utiliza varios patrones de diseño en React, los cuales son:

---

## Atomic Design

Este es uno de los patrones de diseño más importantes que utilizamos. La idea principal de este patrón es organizar los componentes de una interfaz de usuario en una jerarquía que va desde elementos básicos (átomos) hasta interfaces completas (páginas/pantallas), aplicando conceptos de la química para definir su estructura.

La jerarquía del Atomic Design es:

- Átomos: son los elementos más básicos e indivisibles de una interfaz. Incluyen etiquetas HTML simples como botones (button), campos de texto (input), y elementos de texto (label).

- Moléculas: son combinaciones de átomos que trabajan juntas como una unidad funcional. Representan componentes simples pero con más complejidad que los átomos.

- Organismos: son grupos de moléculas y átomos que forman una sección completa de la interfaz. Suelen ser componentes complejos y representan partes importantes de una página/pantalla, como un encabezado o un pie de página/pantalla.

- Plantillas: son diseños que combinan organismos para definir la estructura general de una página/pantalla. No contienen datos concretos, solo la disposición de los componentes.

- Páginas/pantallas: son instancias concretas de las plantillas con datos reales. Representan la interfaz final que ve el usuario y muestran cómo interactúan los componentes con datos específicos.

En el código fuente de la aplicación, aplicamos Atomic Design desde la creación de templates hasta los niveles más básicos, como los átomos.

Aclaración: Para facilitar la comprensión, no distinguimos plantillas de páginas/pantallas.

### ¿Por Qué Usamos Atomic Design?

- Modularidad: Nos facilitó la creación de componentes reutilizables.

- Escalabilidad: Permitió desarrollar interfaces complejas a partir de componentes simples.

- Mantenibilidad: Nos ayudó a mantener una base de código limpia y organizada, que facilitó la división del trabajo.

- Consistencia: Fomentó la coherencia visual y de comportamiento en toda la aplicación.

---

## Composición de Componentes

La composición permite combinar componentes simples para crear otros más complejos, lo cual permite separar las responsabilidades.

Ejemplo de uso en el código: Este patrón se utiliza ampliamente en todo el código de la aplicación.

---

##  Patrón de Contenedor y Presentación

Este patrón separa los componentes en:

- Contenedores: Manejan la lógica y el estado.

- Presentacionales: Se enfocan en la UI (interfaz de usuario) y reciben datos a través de props.

Ejemplo de caso de uso en el código:

- En web: [PostCardContainer](../src/components/shared/posts/PostCardContainer.jsx) y [PostCard](../src/components/shared/posts/PostCard.jsx).
- En mobile: [PostCardContainer](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/app/components/shared/posts/PostCardContainer.jsx) y [PostCard](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/app/components/shared/posts/PostCard.jsx)

---

## Patrón de Contexto

El Context API permite compartir datos globales entre componentes sin necesidad de pasar props manualmente.

Ejemplo de caso de uso en el código:

- En web: [AuthContextProvider](../src/context-providers/AuthContextProvider.jsx) (este da el contexto de autenticación del usuario, es decir, token e ID de usuario a toda la aplicación).
- En mobile: [AuthContextProvider](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/context-providers/AuthContextProvider.tsx) (aplica el mismo concepto que en la versión web) y [WindowDimensionsProvider](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/context-providers/WindowDimensionsProvider.tsx) (este da las dimensiones de la ventana a toda la aplicación en tiempo real para que los estilos puedan ser dinámicos y depender de las dimensiones reales).

---

## Patrón de Estado Elevado

Consiste en mover el estado al componente padre más cercano para que pueda ser compartido entre componentes hermanos, lo cual permite sincronizar el estado entre hermanos.

Ejemplo de caso de uso en el código:

- En web: [MyProfilePage](../src/pages/MyProfilePage.jsx) al pasar parte de un estado a sus dos hijos (ProfileCard e ImagesContainer).
- En mobile: [MyProfileScreen](https://github.com/LuciaBonilla/2024_2_DWYM_Grupo6_Obligatorio_ReactNative/blob/main/PhantyNet/app/modules/(tabs)/MyProfileScreen.jsx) que hace lo mismo que la versión web.

---

## Componentes Controlados

Un componente controlado es aquel cuyo estado es gestionado completamente por React. Esto significa que el valor del elemento del formulario (como un input o textarea) se guarda en el estado del componente en lugar de ser gestionado por el DOM directamente.

Ejemplo de caso de uso en el código: en todos los componentes de formulario.

---