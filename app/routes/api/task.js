const router = require('express').Router();

const { Task } = require('../../../db');


//Mostrar todas las tareas
router.get('/', async (req, res) =>{
    const task = await Task.findAll();
    res.json(task);
});

//Insertar nueva tarea
router.post('/', async (req, res) =>{
    const task = await Task.create(req.body);
    res.json(task);
});

//Modificar tarea
router.put('/:taskId', async (req, res) =>{
    await Task.update(req.body, {
        where: { id: req.params.taskId }
    });
    res.json({ success: 'Task modified'})
});

//Eliminar tarea

router.delete('/:taskId', async (req, res) =>{
    await Task.destroy({
        where: {id: req.params.taskId}
    });

    res.json({ success: 'Task deleted'});
});

module.exports = router;