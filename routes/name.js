const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.status(200).send({
        mensagem: 'GET dentro do nome'
    })
})

router.post('/', (req, res) => {
    res.status(201).send({
        mensagem: 'POST dentro do nome'
    })
})

router.get('/:name',(req, res) => {
    const name = req.params.name
    res.status(200).send({
        mensagem: 'Usando o GET de um produto exclusivo',
        name: name
    })
})

module.exports = router