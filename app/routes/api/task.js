const router = require('express').Router();

const { Task } = require('../../../db');


//Método get de usuarios
router.get('/', async (req, res) =>{
    const task = await Task.findAll();
    res.json(task);
});

//REGISTER
router.post('/', async (req, res) =>{
    const task = await Task.create(req.body);
    res.json(task);
});

//modify user
router.put('/:taskId', async (req, res) =>{
    await Task.update(req.body, {
        where: { id: req.params.taskId }
    });
    res.json({ success: 'Task modified'})
});

//Delete user

router.delete('/:taskId', async (req, res) =>{
    await Task.destroy({
        where: {id: req.params.taskId}
    });

    res.json({ success: 'Task deleted'});
});

module.exports = router;