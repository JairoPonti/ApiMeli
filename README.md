# ApiMeli

En la ubicación '/ApiMeli/api' ejecutar:

npm start
para correr el Back-end.

En la dirección del proyecto ('/ApiMeli/client') correr:

npm start
para hacer correr el Front-End

En ambas carpetas (api y client) habrá que instalar las dependencias que el proyecto requiere. Para ello en la carpeta "client" bastará con realizar un npm install, y en la carpeta "api" se deberá hacer: npm install express cors node-fetch 

Tanto el Back-End como el Front-End fueron desarrollados por mí.

COMPONENTES:

Product Card: Este componente renderiza la imagen y parte del título, además muestra el precio con su respectiva moneda, su condición (usado o nuevo) y el stock disponible.

En el catálogo vas a poder ordenar por:

Precio: De mayor a menor - De menor a mayor 
Filtrar por condición: Productos nuevos - Productos usados 
Todos los productos (esta petición arroja el resultado de todos los productos basándose en la última búsqueda realizada)
El componente catalogo está paginado en "x" productos por página.

Request a la api:

Encontraba muchos repositorios y soluciones a la paginación en internet que no me convencían, y por eso decidí implementar tanto la paginación como los pedidos a la api trabajando conjuntamente con la tecnología Redux, utilizando distintas propiedades en el store como por ejemplo un offset (parámetro dinámico) que me permite arrojar resultados de a 30. Y tanto el ordenamientio de mayor a menor y menor a mayor precio como el filtrado por condición "usados" o "nuevos" lo manejé dentro de un array en el store el cual me ordena los productos según lo pedido, para luego ser renderizados.

En cuanto a la estética de la página, tiene aplicado un poco de CSS (animaciones en botones por ej.) y el framework Materialize para elementos como el Footer (pie de página)
