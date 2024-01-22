const { Router } = require ('express');
const { usuariosGet,
        usuariosPatch,
        usuariosPost,
        usuariosDelete,
        usuariosPut } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );
router.patch('/', usuariosPatch );
router.post('/', usuariosPost );
router.delete('/', usuariosDelete );
router.put('/:id', usuariosPut );

module.exports = router;