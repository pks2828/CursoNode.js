const { response, request } = require('express');

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

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({ //Vamos a mandar objeto en nuestro json
        msg: 'Post API - controlador',
        nombre,
        edad
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