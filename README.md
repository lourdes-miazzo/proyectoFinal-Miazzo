![Logo del ecommerce de Lourdes Miazzo](src/components/navBar/iconoLourdes.png)
**_Proyecto_**: Simulación de e-commerce  para las obras de artista Lourdes Miazzo

**_Link_**: [e-commerce Lourdes Miazzo Obras](https://ecommerce-lourdes-miazzo-obras.vercel.app/)


**_Realizado con_**:

![logo React](https://user-images.githubusercontent.com/105647455/204136896-89305a7e-def0-4fff-83b9-0cf10a8fc336.png)  


**_Resumen_**: Proyecto realizado en el aprendizaje de React JS de la trayectoria Fullstack cursada en [**CoderHouse**](https://www.coderhouse.com/).  El ejercicio final proponía la creación de un e-commerce por lo que se le da un énfasis especial al carrito de compras y en mostrar, en este caso, las obras según los años de produccion. Se incluye además una pequeña sección con bio y redes sociales de la artista para quienes deseen conocer sobre su recorrido y ver más imagenes de su producción.

**_Construcción del proyecto_**: Se genera una división del proyecto en **componentes** lo que facilita el trabajo, permite su reutilización, y ayuda a individualizar y pensar la funcionalidad de cada pieza como un pequeño problema a resolver que además se vuelve facil de comprender, sin escribir archivos con códigos extensos. Agunos componentes se encargan de los procesos funcionales y lógicos; los conocidos como containers (ItemListContainer, ItemDetailContainer), y otros se llevan la parte más facil de solo mostrar contenido, los componentes presentacionales (ItemDetail, Item).
La información de cada obra (imagen, tamaño, año de creación, etc) es guardada en **Firestore**, lo que permite incorporar nuevos datos de manera rápida y ágil.
Para evitar que la aplicación quede en blanco mientras se espera a la carga de la información de las obras que es pedida a Firestore, se incorporó un paquete de loaders (se utilizó especificamente react-loader-spinner) que brinda componentes que pueden renderizarse condicionalmente si la carga de datos e imágenes aún no ha finalizado. Lo que le da un resultado visual más terminado y redondo.
La información que se genera y guarda en carrito debe poder ser de fácil acceso a distintas secciones dentro de la App, por lo que todas las funciones (que implican agregar un producto, eliminar por unidad, mostrar la cantidad de obras en carrito, etc)y estados se guardan dentro de **context**, así por ej podemos acceder a esa informacion de manera sencilla desde CartWidget y ver reflejado entonces en NavBar el numero de obras compradas, o en el componente Cart renderizar las obras que se encuentran dentro del estado cart.
Por otra parte se utilizan en varios sectores los **renderizados condicionales**, lo que le da al diseño cierto dinamismo. En la seccion Cart si el estado cart es un array vacío, nos avisa que el carrito no tiene obras y nos brinda un botón para redireccionarnos a home, en cambio si ya hay obras nos las renderiza junto con un botón de compra;, que al ser presionado vuelve true al estado compForm y eso entonces nos renderiza un formulario para guardar los datos del comprador y las obras compradas(orden) en una sección llamada 'orders' en Firestore.

**_Agradecimientos_**: Profesor [**Félix Blanco**](https://www.linkedin.com/in/felixblancos/) por la dedicación y generosiad al compartir tanto sus conocimientos teóricos como consejos para la práctica laboral; y al tutor [**Francisco Garcia Mendez**](https://www.linkedin.com/in/francisco-garcia-mendez/) por responder atentamente siempre nuestras dudas.