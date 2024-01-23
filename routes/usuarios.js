const { Router } = require ('express');
const { check } = require('express-validator');

const {validarCampos} = require('../middleware/validar-campos');
const { esRoleValido, existeEmail } = require('../helpers/db-validators');

const { usuariosGet,
        usuariosPatch,
        usuariosPost,
        usuariosDelete,
        usuariosPut } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.patch('/', usuariosPatch );

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({min: 6}),
    check('correo').custom( existeEmail),
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPost );

router.delete('/', usuariosDelete );

router.put('/', usuariosPut );

module.exports = router;