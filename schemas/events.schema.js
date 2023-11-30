const Joi = require('joi');

const id = Joi.number()
.integer()
  .positive()
 
const event_name = Joi.string()
.min(2).max(50)               // Longitud entre 2 y 50 caracteres
.regex(/^[a-zA-Z\s']+$/)      // Solo permite letras, espacios y apóstrofes
.trim()                       // Elimina espacios en blanco al principio y al final

const event_date = Joi.date()
const event_max_capacity = Joi.number()
      
.min(1).max(1000)              // Capacidad máxima entre 1 y 1000 (ajustar según necesidades)


const event_location_name = Joi.string()
.min(3).max(50)               // Longitud entre 3 y 50 caracteres
.regex(/^[a-zA-Z\s\d']+$/)    // Solo permite letras, espacios, dígitos y apóstrofes
.trim()                       // Elimina espacios en blanco al principio y al final

const createEventSchema = Joi.object({
    event_name: event_name.required(),
    event_date: event_date.required(),
    event_max_capacity: event_max_capacity.required(),
    event_location_name: event_location_name.optional(),
   
});

const updateEventSchema = Joi.object({
    event_name: event_name.optional(),
    event_date: event_date.optional(),
    event_max_capacity: event_max_capacity.optional(),
    event_location_name: event_location_name.optional(),
   
});

const getEventSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createEventSchema,
    updateEventSchema,
    getEventSchema
}