// Modulos commonjs node.js por defecto
// const express = require('express') commonjs

// se activa en package.json  "type": "module",
import express from 'express' //modulos ES6 type module

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hola', (req, res) => {
    res.json({ msg: 'hola mundo con json' })
})

app.get('/chao', (req, res) => {
    res.json({ msg: 'chao mundo con json' })
})

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})