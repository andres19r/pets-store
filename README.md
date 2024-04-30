# Registro de Mascotas con React

Este proyecto es una aplicación web desarrollada con React para registrar mascotas. Permite a los usuarios registrar mascotas por nombre, tipo (perro o gato), género y añadir una foto de la mascota. Este proyecto utiliza Redux para el manejo del estado y MUI Material para los componentes de la interfaz de usuario.

## Características

- **Registro de Mascotas**: Los usuarios pueden registrar mascotas, especificando su nombre, tipo (perro o gato), género y una foto.
- **Listado de Mascotas**: Los usuarios pueden ver una lista de todas las mascotas registradas.
- **Interfaz Responsiva**: Utilizando MUI Material, la interfaz es responsiva y amigable en dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para construir interfaces de usuario.
- **Redux**: Librería para el manejo de estado global.
- **MUI Material**: Librería de componentes React para un diseño rápido y cómodo.
- **Vite**: Herramienta de construcción que ofrece un entorno de desarrollo rápido.
- **Yarn**: Manejador de dependencias.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `src/components`: Contiene todos los componentes de React utilizados en la aplicación.
- `src/store`: Almacena los archivos de configuración de Redux, incluidos los reducers y las acciones.
- `src/hooks`: Incluye `useFetchPets`, un hook personalizado para simular la carga de datos de mascotas.

## Uso

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias con `yarn install`.
3. Inicia el servidor de desarrollo con `yarn dev`.
4. Abre tu navegador y navega a `http://localhost:5173`.

## Simulación de API

El hook `useFetchPets` está diseñado para simular la llamada a una API REST externa. Emula un retardo de 2 segundos antes de devolver las mascotas desde el estado de Redux, mostrando un spinner durante la carga.
