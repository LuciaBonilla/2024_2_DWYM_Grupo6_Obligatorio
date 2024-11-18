# Uso de patrones de diseño en React

Nuestra aplicación utiliza varios patrones de diseño en React, los cuales son:

## Atomic Design

Uno de los patrones de diseño importantes que utilizamos en esta aplicación fue Atomic Design. La idea principal de este patrón es organizar los componentes de una interfaz de usuario en una jerarquía que va desde elementos básicos (átomos) hasta interfaces completas (páginas), aplicando conceptos de la química para definir su estructura.

La jerarquía del Atomic Design es:

- Átomos: son los elementos más básicos e indivisibles de una interfaz. Incluyen etiquetas HTML simples como botones (button), campos de texto (input), y elementos de texto (label).

- Moléculas: son combinaciones de átomos que trabajan juntas como una unidad funcional. Representan componentes simples pero con más complejidad que los átomos.

- Organismos: son grupos de moléculas y átomos que forman una sección completa de la interfaz. Suelen ser componentes complejos y representan partes importantes de una página, como un encabezado o un pie de página.

- Plantillas: son diseños que combinan organismos para definir la estructura general de una página. No contienen datos concretos, solo la disposición de los componentes.

- Páginas: son instancias concretas de las plantillas con datos reales. Representan la interfaz final que ve el usuario y muestran cómo interactúan los componentes con datos específicos.

En el código fuente de la aplicación se observa que aplicamos Atomic Design al crear los templates e ir a los más profundo hasta la creación de los átomos.

#### ¿Por qué usamos Atomic Design?

- Modularidad: Nos facilitó la creación de componentes reutilizables.

- Escalabilidad: Permitió desarrollar interfaces complejas a partir de componentes simples.

- Mantenibilidad: Nos ayudó a mantener una base de código limpia y organizada, que facilitó la división del trabajo.

- Consistencia: Fomentó la coherencia visual y de comportamiento en toda la aplicación.

## Composición de Componentes (Component Composition)

La composición permite combinar componentes simples para crear otros más complejos.

Ejemplo de uso en el código: todo el código básicamente.

##  Patrón de Contenedor y Presentación (Container and Presentational Components)

Este patrón separa los componentes en:

- Contenedores (Containers): Manejan la lógica y el estado.

- Presentacionales (Presentational): Se enfocan en la UI y reciben datos a través de props.

Ejemplo de caso de uso en el código: [PostCardContainer](../src/components/shared/posts/PostCardContainer.jsx) y [PostCard](../src/components/shared/posts/PostCard.jsx).

## Patrón de Contexto (Context Pattern)

El Context API permite compartir datos globales entre componentes sin necesidad de pasar props manualmente.

Ejemplo de caso de uso en el código: [AuthContextProvider](../src/context-providers/AuthContextProvider.jsx).

## Patrón de Estado Elevado (Lifting State Up)

Consiste en mover el estado al componente padre más cercano para que pueda ser compartido entre componentes hermanos.

Ejemplo de caso de uso en el código: [MyProfilePage](../src/pages/MyProfilePage.jsx) al pasar parte de un estado a sus dos hijos (ProfileCard e ImagesContainer).

## Componentes Controlados
Un componente controlado es aquel cuyo estado es gestionado completamente por React. Esto significa que el valor del elemento del formulario (como un input o textarea) se guarda en el estado del componente en lugar de ser gestionado por el DOM directamente.

Ejemplo de caso de uso en el código: en todos los componentes de formulario básicamente.