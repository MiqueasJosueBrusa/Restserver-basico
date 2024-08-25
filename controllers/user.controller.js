const { response } = require('express');


const usuarioGet = (req, res = response) => {

  const { q, nombre = '404 Name', apikey, page = 1, limit }= req.query

    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        limit,
        page
    })
  }

const usuarioPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.json({  
        msg: 'post API',
        nombre,
        edad
        
    })
  }

const usuarioDelete =  (req, res = response) => {
    res.json({
        msg: 'delete API'
    })
  }

const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'patch API',
        edad,
        nombre,
        apellido,
        id,
        apikey
    })
  }

const usuarioPut = (req, res = response) => {
  
  const { id } = req.params.id;
  
  res.json({
        msg: 'put API'
    })
  }

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioDelete,
    usuarioPut,
    usuarioPatch
}