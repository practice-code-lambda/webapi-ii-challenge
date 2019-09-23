//required files
const express = require('express')
const db = require('./data/db')

//server init
const server = express()
//middleware
server.use(express.json())
//sets server to listening
server.listen(4000, () => 'listening on 3000')

server.get('/', (req, res) => {
    res.send('welcome to my api buster')
})

