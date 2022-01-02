const Usuario = require('../models/UsuarioModel')

module.exports = {

	async read(req,res) {
		const user = await Usuario.find()

		return res.status(200).json(user)
	},

	async create(req,res) {
		const { user_name, user_email, user_mensage } = req.body
		let data = {}
		let user = await Usuario.findOne({user_email})
		if(!user){
			data = { user_name, user_email, user_mensage }
			user = await Usuario.create(data)
			return res.status(200).json(user)
		}
		return res.status(500).json({
			message: 'ERROR'
		})
	},

	async delete(req,res) {
		const { id } = req.params

		const userDeleted = await Usuario.findOneAndDelete({ _id: id })

		if(userDeleted){
			return res.status(200).json(userDeleted)
		}
		return res.status(400).json(userDeleted)
	}
}