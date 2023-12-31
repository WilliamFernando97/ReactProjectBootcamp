# Car Shop React App

## Descripción

Este es un proyecto de una aplicación web en React llamada "Car Shop" que permite ordernar el mantenimiento y servicios para automoviles. Este archivo proporciona instrucciones sobre cómo desplegar y ejecutar la aplicación en tu máquina local. 

## Desarrollo

El proyecto esta comprendido en la siguiente estrcutura: 


    .
    └── assets
    └── node_modules
    └── public
    └── src
    └── index.html
    └── package.json
    └── package-lock.json
    └── README.md (React default info)



Donde en la carpeta **src** se encuentran los siguientes archivos:

    .
        └── /src
            ├── /components
            ├── /services
            ├── /store
            ├── /utils
            ├── /views
            ├── index.css
            ├── index.js  
            ├── App.test.js
            ├── setupTest.css
            ├── reportWebVitals.js
            ├── App.css
            └── App.js
Dentro de la carpeta **components** se encuentran las funciones desarrolladas para el correcto funcionamiento del proyecto. 
 

    .
        └── /components
            ├── CarInfo.js  
            ├── FinishOrder.js
            ├── Form.js
            ├── PersonalInfo.js
            ├── ServiceList.css
            └── SignUpInfo.js

## Despliegue

### Requisitos previos 
Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- Node.js: Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde el sitio web oficial: https://nodejs.org

### Instrucciones de instalación
Sigue los pasos a continuación para desplegar y ejecutar el proyecto "Car Shop" en tu máquina local:
- Clona el repositorio git clone: [https://github.com/tu-usuario/car-shop.git](https://github.com/WilliamFernando97/ReactProjectBootcamp). Si prefieres, también puedes descargar el repositorio en formato ZIP y extraerlo en una carpeta local.
- Abre una terminal o línea de comandos y navega hasta el directorio del proyecto: cd car-shop
- Instala las dependencias del proyecto ejecutando el siguiente comando:npm install
- Una vez que se completen las instalaciones, puedes ejecutar el siguiente comando para iniciar la aplicación:npm star. Este comando compilará el código de React y abrirá automáticamente la aplicación en tu navegador web predeterminado. Si no se abre automáticamente, puedes acceder a la aplicación visitando http://localhost:3000 en tu navegador.
- ¡Listo! Ahora puedes explorar y utilizar la aplicación "Car Shop" en tu máquina local. 


## AWS deployment

Para subir el proyecto a los servicios de AWS se creo un bucket donde se alojara el sitio web estatico. Usted puede consultar el proyecto desde este el siguiente enlace: http://deploy-react-app-bootcamp-tandazo.s3-website-us-east-1.amazonaws.com/
