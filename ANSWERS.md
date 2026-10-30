# Respuestas — React Native

### 1. ¿Qué es `flexDirection`?
En React Native, por defecto es `column`, es decir, los elementos aparecen uno debajo del otro. En CSS web, por defecto es `row`, uno al lado del otro.

### 2. ¿Qué diferencia hay entre `justifyContent` y `alignItems`?
`justifyContent` organiza los elementos en la dirección principal. `alignItems` los alinea en la dirección contraria.

### 3. ¿Para qué sirve `flex: 1`?
Dentro de una fila, permite ocupar el espacio disponible. En la pantalla principal, permite que el contenedor ocupe toda la pantalla disponible.

### 4. ¿Qué diferencia hay entre `cover` y `contain`?
`cover` llena todo el espacio con la imagen, aunque recorte una parte. `contain` muestra la imagen completa, aunque sobren espacios.

### 5. ¿Para qué sirve `StyleSheet.create`?
Sirve para tener los estilos ordenados en un solo lugar. Así es más fácil modificar y reutilizar los estilos.

### 6. ¿Por qué no aparece la sombra en Android?
Porque Android maneja las sombras de manera diferente a iOS. Para mostrar una sombra en Android normalmente usamos `elevation`.