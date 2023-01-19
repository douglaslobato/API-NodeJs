const express = require('express')
const app = express()

const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
require('dotenv').config()

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const jobRoutes = require('./routes/jobRoutes')
app.use('/job', jobRoutes)

// entrar uma porta pra acessar do postman/navegador
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.yhupwwr.mongodb.net/bancoDaApi?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectado ao banco!")
    app.listen(3000);
})
.catch((err) => console.log(err))

