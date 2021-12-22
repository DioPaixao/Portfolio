const express = require('express')
const routes = express.Router()

const UsuarioControler = require('./controllers/UsuarioController')

// Usuario

routes.get('/usuario', UsuarioControler.read)
routes.post('/usuario', UsuarioControler.create)
routes.delete('/usuario/:id', UsuarioControler.delete)

module.exports = routes