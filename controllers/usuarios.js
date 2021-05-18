const { response } = require('express');

const usuariosGet = (req =request , res=response) => {
    // res.send('Hello World in the class')

        const {q, nombre='No name', apikey, page=1, limit} = req.query
    
        res.json({
            msg:"get API - controlador ",
            q,
            nombre,
            apikey,
            page,
            limit
        })
    }

const usuariosPost = ( req, res) => {
    // res.send('Hello World in the class')

    const body = req.body;

    res.json({
        msg:"post API - controlador ",
        body
    })
}

const usuariosPut = ( req, res) => {
    // res.send('Hello World in the class')

    const id = req.params.id;

    res.json({
        msg:"put API - controlador ",
        id
    })
}
const usuariosPatch = ( req, res) => {
    // res.send('Hello World in the class')

    res.json({
        msg:"patch API  - controlador"
    })
}
const usuariosDelete = ( req, res) => {
    // res.send('Hello World in the class')

    res.json({
        msg:"delete API  - controlador"
    })
}

    

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}