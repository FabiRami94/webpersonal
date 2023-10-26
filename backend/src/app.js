
const express = require('express');
const morgan = require('morgan');
const router =  require('./routes/index');
const cors = require('cors');
const path = require('path');
// const { Server } = require('http'); necesario??

//app.use(bodyParser.urlencoded({ extended: false })); bodyParser???

const server = express();

server.use(morgan('dev'));
server.use(cors());
server.use(express.json())

/**
 * server.use Se utiliza para montar middlewares en la aplicación Express.
 * Los middlewares son funciones que se ejecutan en el flujo de procesamiento de una solicitud antes
 * de que se envíe una respuesta Middleware para servir archivos estáticos desde la carpeta "public"
 */
server.use("/public", express.static(path.join(__dirname, "public")));

// Establecer EJS como el Motor de plantillas
server.set("view engine", "ejs"); // Establecer EJS como el Motor de plantillas
// server.set("views", path.join(__dirname, "views")); // No hay carpeta views...
server.set("components", path.join(__dirname, "components")); 

server.use('/correo', router);
 
module.exports = server;