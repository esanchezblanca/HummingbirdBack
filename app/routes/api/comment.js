const router = require('express').Router();
const { Comment } = require('../../../db');


//Mostrar todos los comentarios

router.get('/', async (req, res) =>{
    const comment = await Comment.findAll();
    res.json(comment);
});


//Insertar nuevo comentario

router.post('/', async (req, res) =>{
    const comment = await Comment.create(req.body);
    res.json(comment);
});


//Eliminar comentario

router.delete('/:commentId', async (req, res) =>{
    await Comment.destroy({
        where: {id: req.params.commentId}
    });

    res.json({ success: 'Comentario eliminado', status: 200});
});

module.exports = router;