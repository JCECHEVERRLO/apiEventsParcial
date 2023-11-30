//  require('dotenv').config();

//Crear un servidor básico de Express
const express = require('express');
// const loggerMiddleware = require('./middleware/loggerMiddleware');
// const Log = require('./models/Log');
const Joi = require('joi');
const app = express();

const routerApi = require('./routers')
const PORT = process.env.PORT || 3000;

//Permitir tráfico en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(loggerMiddleware);

//Definir las rutas de la aplicación
routerApi(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});