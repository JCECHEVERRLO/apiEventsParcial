//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const {logHandler} = require('../middlewares/loggerMiddleware');
const {validatorHandler} = require('../middlewares/validator.handler');
const Joi = require('joi');
const {LogsPeticiones} = require('../middlewares/registro');
const {EnviarCorreo} = require('../services/correo');


const { getEventSchema, createEventSchema, updateEventSchema } = require('../schemas/events.schema');


//Importar el controlador de eventos

const service = require('../services/events.service');







//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const events = await service.index()
    res.json(events);
});

router.get('/:id', 
    validatorHandler(getEventSchema, 'params'), 
    async (req,res)=>{
        const id = req.params.id
        const event = await service.show(id)
        res.json(events)
        logHandler('GET /api/events/'+id)
    }
);

router.post('/', 
validatorHandler(createEventSchema, 'body'),
    async (req,res)=>{
        const body = req.body
        const event = await service.store(body)
        res.status(201).json(event)
        logHandler('GET /api/events/')
    }
);

router.put('/:id', 
validatorHandler(getEventSchema, 'params'),
validatorHandler(updateEventSchema, 'body'),
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const event = await service.update(id, body)
        res.json(event)
        logHandler('PUT /api/events/'+id)
    }
);

router.delete('/:id', 
validatorHandler(getEventSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const event = await service.destroy(id)
        res.json(event)
        logHandler('DELETE /api/events/'+id)
    }
);

//Exportar el enrutador
module.exports = router;