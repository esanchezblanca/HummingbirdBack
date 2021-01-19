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
//Se comprueba que el id de usuario que quiere modificar coincide con quien lo creó

router.put('/:taskId', async (req, res) =>{
    const task = await Task.update(req.body, {
        where: { id: req.params.taskId, user_id: req.body.user_id }
    });
    if(task == 0){
        res.json({message: 'No tienes permisos para modificar la tarea', status: 401})
    }else{
        res.json({ success: 'Tarea modificada', status: 200})
    }
    
});


//Eliminar tarea

router.delete('/:taskId', async (req, res) =>{
    await Task.destroy({
        where: {id: req.params.taskId}
    });

    res.json({ success: 'Tarea eliminada', status: 200});
});

module.exports = router;