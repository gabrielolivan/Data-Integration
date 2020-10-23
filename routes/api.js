const express = require('express')
const router = express.Router()
const updateFile = require('../src/update')
const searchByZip = require('../db/searchByZip')
const searchByName = require('../db/searchByName')

router.get('/',(req, res) => {
    res.status(200).send({
        mensagem: 'GET dentro do nome'
    })
})

router.get('/name/:name',(req, res) => {
    console.log('\n\nConsulta por Name\n\n')
    const name = req.params.name.toUpperCase()
    
    register = searchByName(name)

    console.log(register)

    res.status(200).send(
        register
    )
})

router.get('/zip/:zip',(req, res) => {
    console.log('\n\nConsulta por ZIP\n\n')
    const zip = req.params.zip
    
    register = searchByZip(zip)

    console.log(register)

    res.status(200).send(
        register
    )
})



router.post('/update/:csvFiles', (req, res) => {
    console.log('\n\nInserindo/Atualizando dados...\n\n')
    const file = './csvFiles/' + req.params.csvFiles

    updateFile(file)

    
    res.status(201).send({
        mensagem: 'POST Called',
        
        
    })
    
})

module.exports = router