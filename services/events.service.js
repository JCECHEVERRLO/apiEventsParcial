const {models} = require('../libs/sequelize')

//Funcion para listar todos los eventos
async function index() {
    const events = await models.event.findAll();
    return events;

}

    //Funcion para crear un nuevo evento
async function store(body) {
    const computer = await models.event.create(body);
    return computer;
}
//Funcion para crear un nuevo evento
async function store(body) {
    const event = await models.event.create(body);
    return event;
}

//Funcion para mostrar un evento
async function show(id) {
    const event = await models.event.findByPk(id);
    return event;
}

//Funcion para actualizar un evento
async function update(id, body) {
    const [affectedRows, [updatedEvent]] = await models.event.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedEvent;
}

//Funcion para eliminar un evento
async function destroy(id) {
    const event = await models.event.findByPk(id);
    const deletedEvent = await models.event.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedEvent){
        return event;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}