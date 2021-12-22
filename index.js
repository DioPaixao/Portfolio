const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()

require('dotenv').config()
require('./src/config/dbConfig')

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log('Server is running')
})