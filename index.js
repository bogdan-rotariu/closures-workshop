const express = require('express')
const examples = require('./examples')
const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send(examples)
})

app.listen(port)