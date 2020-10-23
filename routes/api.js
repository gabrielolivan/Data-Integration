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
    const name = req.params.name.toUpperCase()
    
    register = searchByName(name)

    console.log(register)

    res.status(200).send(
        register
    )
})

router.get('/zip/:zip',(req, res) => {
    const zip = req.params.zip
    
    register = searchByZip(zip)

    console.log(register)

    res.status(200).send(
        register
    )
})



router.post('/update/:csvFile', (req, res) => {
    
    const file = './csvFiles/' + req.params.csvFile
    console.log(file)
    updateFile(file)

    res.status(201).send({
        mensagem: 'POST Called',
        
    })
    
})

module.exports = router