const mongoose = require('mongoose')

const connection = process.env.MONGO_URL_CONNECTION	

const dbconfig = mongoose.connect(connection, () => console.log('Mongo is connected'))

module.exports = dbconfig