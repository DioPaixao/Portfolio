const mongoose = require('mongoose')

const UsuarioModelSchema = mongoose.Schema({
	user_name: {
		type: String,
		required: true
	},
	user_email: {
		type: String,
		required: true
	},
	user_mensage: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Usuarios', UsuarioModelSchema)