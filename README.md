# ApiMeli

En la ubicación '/ApiMeli/api' ejecutar:

npm start
para correr el Back-end.

En la dirección del proyecto ('/ApiMeli/client') correr:

npm start
para hacer correr el Front-End

En ambas carpetas (api y client) habrá que instalar las dependencias que el proyecto requiere. Para ello en la carpeta "client" bastará con realizar un npm install, y en la carpeta "api" se deberá hacer: npm install express cors node-fetch 

Tanto el Back-End como el Front-End fueron desarrollados por mí.

<h3>Inicio</h3>
<img src= "https://raw.githubusercontent.com/JairoPonti/ApiMeli/screenShots/client/src/Images/Image1.png"/>

<h3>COMPONENTES:</h3>

<strong>Product Card:</strong> Este componente renderiza la imagen y parte del título, además muestra el precio con su respectiva moneda, su condición (usado o nuevo) y el stock disponible.
</br>
</br>
<img src= "https://raw.githubusercontent.com/JairoPonti/ApiMeli/screenShots/client/src/Images/Image2.png"/>
</br>
<strong>En el Catálogo vas a poder ordenar por:</strong>

<strong>Precio:</strong> De mayor a menor - De menor a mayor 
<strong>Filtrar por condición:</strong> Productos nuevos - Productos usados 
<strong>Todos los productos</strong> (esta petición arroja el resultado de todos los productos basándose en la última búsqueda realizada)
</br>
</br>
<img src= "https://raw.githubusercontent.com/JairoPonti/ApiMeli/screenShots/client/src/Images/Image5.png"/>
</br>
</br>
El componente Catalogo está <strong>paginado</strong> en "x" productos por página.
</br>
</br>
<img src= "https://raw.githubusercontent.com/JairoPonti/ApiMeli/screenShots/client/src/Images/Image3.png"/>

<h3>Request a la api:</h3>

Encontraba muchos repositorios y soluciones a la paginación en internet que no me convencían, y por eso decidí implementar tanto la paginación como los pedidos a la api <strong>trabajando conjuntamente con la tecnología Redux</strong>, utilizando distintas propiedades en el store como por ejemplo un offset (parámetro dinámico) que me permite arrojar resultados de a 30. Y tanto el ordenamientio de mayor a menor y menor a mayor precio como el filtrado por condición "usados" o "nuevos" lo manejé dentro de un array en el store el cual me ordena los productos según lo pedido, para luego ser renderizados.

En cuanto a la estética de la página, tiene aplicado un poco de CSS (animaciones en botones por ej.) y el framework Materialize para elementos como el Footer (pie de página)
