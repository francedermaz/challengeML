# Test Práctico Frontend Mercado Libre

Este repositorio contiene la solución al test práctico para el área de frontend de Mercado Libre. La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados y la descripción del detalle del producto.

## Tecnologías utilizadas

Para construir la aplicación se utilizó el siguiente stack tecnológico:

**Cliente:**
- HTML
- NextJS - React
- CSS (Scss)

**Servidor:**
- Node
- Express

## Vistas

La aplicación consta de las siguientes tres vistas:

- Caja de búsqueda: permite ingresar el producto a buscar y enviar el formulario para navegar a la vista de Resultados de búsqueda.
- Resultados de la búsqueda: muestra una lista de productos que coinciden con la búsqueda realizada. Al hacer click en uno de ellos, se navega a la vista de Detalle del producto.
- Detalle del producto: muestra la información detallada del producto seleccionado.

## Imágenes

![Búsqueda](https://i.ibb.co/kxxWFKN/pic1.png)
![Búsqueda2](https://i.ibb.co/hWG7phY/pic3.png)
![Detalle](https://i.ibb.co/N36G9Lp/pic4.png)
![Detalle](https://i.ibb.co/fd7RJFJ/pic2.png)

## Funcionalidad

En la vista de caja de búsqueda, se puede ingresar el producto a buscar y al enviar el formulario se navega a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer click sobre uno de ellos, se navega a la vista de Detalle de Producto.

También se puede ingresar directamente a la vista de detalle de producto mediante un id de producto.

## Consideraciones adicionales

Se tuvieron en cuenta los siguientes aspectos:

- Usabilidad
- SEO
- Performance
- Escalabilidad
- Responsive

## Instalación

Para instalar la aplicación, siga los siguientes pasos:

- Clone este repositorio en su máquina local.
- Instale las dependencias con el siguiente comando: `npm install`
- Cree .env en api siguiendo `.env.example`.
- Cree .env.local en client siguiendo `.env.example`.
- Inicie la API con el siguiente comando: `npm start`
- Inicie el cliente con el siguiente comando: `npm run dev`

## Autor

Esta aplicación fue desarrollada por Francisco Cedermaz.
