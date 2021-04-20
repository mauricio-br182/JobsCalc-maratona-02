const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

// instalar o ejs 'npm i ejs'
server.set('view engine', 'ejs')// parte da biblioteca que me permite usar a engine para ler arquivos ejs

server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos statics(imagens, obs a pasta public)
server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))

//routes 
server.use(routes)

server.listen(4000, () => console.log('rodando...'))