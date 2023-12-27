<img src="https://icon-library.com/images/css3-icon/css3-icon-3.jpg" width="40">  <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" width="40">  <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" width="40">

***Comandos necesarios para el desarrollo***

1. Para iniciar la instalación de las dependencias del proyecto corremos el comando:

*“npm run dev:package”*

este comando nos permite instalar las dependencias de desarrollo, nos creara la carpeta “node\_modules”.

1. Como segundo paso corremos el comando:

   *“npm run dep:package”*

Este comando instalara los módulos necesarios del proyecto estos son obligatorios del proyecto, los agregara en el “node\_modules”.

1. Con el comando *“npm run build:dev”* construimos los archivos de distribución en la carpeta dist/public à este es nuestra carpeta final del proyecto.
1. El comando necesario para nosotros como desarrolladores es el siguiente: *“npm run watch:dev”* este es el comando que ejecuta las rutinas de reload de los archivos css, html,js.
1. La rutina necesaria para exportar los archivos estáticos (sitemap, robots, humans) Y la mitificación de imágenes, la conversión de imágenes es la siguiente: *“npm run build:media”*. Si se tienen las imágenes necesarias del proyecto, se ejecuta el comando una vez las imágenes estén dentro de la carpeta de desarrollo, Si se agregan luego del desarrollo también se puede ejecutar el comando en medio del proyecto.

***Comandos necesarios para enviar a Producción***

1. Con el siguiente comando mirificaremos y mandamos para producción nuestro sitio web: *“npm run build:prod”* Si se revisa la carpeta de distribución (public/dist) se verán los cambios en tamaño o escritura de código p.e. código escrito en una sola línea.

