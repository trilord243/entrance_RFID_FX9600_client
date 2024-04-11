# Bienvenida de Invitados con RFID

## Descripción del Proyecto

Este proyecto consiste en una aplicación React que interactúa con una antena RFID (modelo FX9600 de Zebra) para detectar la llegada de invitados y mostrar saludos personalizados en una pantalla grande. Específicamente diseñado para una pantalla de 72 pulgadas, este sistema mejora la experiencia de bienvenida en eventos, facilitando una interacción dinámica y personalizada.

## Funcionalidad

- **Recepción de Datos en Tiempo Real:** La aplicación recibe datos de los invitados de un backend en tiempo real cuando son detectados por la antena RFID.
- **Visualización Dinámica de Saludos:** Cada invitado que pasa por la antena y es reconocido tiene su nombre y detalles relevantes mostrados en una pantalla de 72 pulgadas, ofreciendo un saludo personalizado.
- **Gestión de Cola de Invitados:** La aplicación maneja una cola de nombres, mostrando en pantalla los invitados actuales y recién llegados de manera continua.

## Tecnologías Utilizadas

- **React:** Utilizado para construir la interfaz de usuario, gestionando estados y renderizando la información dinámicamente.
- **Socket.io:** Facilita la comunicación en tiempo real entre el cliente y el servidor.
- **Antena RFID Zebra FX9600:** Utilizada para detectar las etiquetas RFID de los invitados y transmitir esa información al servidor mediante su configuración de IoT Connector.

## Estructura del Código

El código de la aplicación se encuentra en el archivo `App.jsx`, donde se incluye:

- La conexión y manejo de eventos de Socket.io para recibir datos.
- Estados de React para manejar los nombres de los invitados y la visualización dinámica.
- Componentes visuales que incluyen imágenes y textos animados para una interacción atractiva.

## Capturas de Pantalla

Puedes ver ejemplos de la interfaz de usuario y la funcionalidad en acción aquí:

![Imagen](https://firebasestorage.googleapis.com/v0/b/invitacion-27932.appspot.com/o/2024-04-11%2012_50_45-.png?alt=media&token=2507359a-52ba-4ee8-a342-38718b8c1468)

## Repositorio del Servidor

Para más detalles sobre la implementación del servidor y la configuración del sistema de RFID, visita el repositorio del servidor en GitHub:

[Repositorio del Servidor](https://github.com/url_del_repositorio_del_servidor)


## Agradecimientos

Agradecemos a todos los colaboradores y participantes que han hecho posible este proyecto, proporcionando soporte técnico, conocimientos y recursos.
