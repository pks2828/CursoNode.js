const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre='no name', apikey, page = 1, limit} = req.query;

    res.json({ //Vamos a mandar objeto en nuestro json
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = async (req, res = response) => {

    

    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});
    
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en bd
    await usuario.save();

    res.json({ //Vamos a mandar objeto en nuestro json
        usuario 
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params
    res.json({ //Vamos a mandar objeto en nuestro json
        msg: 'Put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({ //Vamos a mandar objeto en nuestro json
        msg: 'Patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({ //Vamos a mandar objeto en nuestro json
        msg: 'Delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}