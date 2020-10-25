const express = require('express')
const router = express.Router()
const updateFile = require('../src/update')
const searchByZip = require('../db/searchByZip')
const searchByName = require('../db/searchByName')
const searchElement = require('../db/searchElement')

router.get('/',(req, res) => {
    res.status(200).send({
        mensagem: 'GET dentro da api'
    })
})

router.get('/search', async (req, res) => {
    //console.log('\n\nConsulta por NAME e ZIP\n\n')
    
    const name = req.query.name
    const zip = req.query.zip
    
    register = await searchElement(name, zip)

    res.status(200).send( register.map((a) => {
        return {
            id: a.id,
            name: a.name,
            zip: a.zip,
            website: a.website
        }
    }))
        
    
})

router.get('/name/:name', async (req, res) => {
    //console.log('\n\nConsulta por NAME\n\n')
    const name = req.params.name
    
    register = await searchByName(name)

    res.status(200).send( register.map((a) => {
        return {
            id: a.id,
            name: a.name,
            zip: a.zip,
            website: a.website
            }
    }))
        
    
})

router.get('/zip/:zip', async (req, res) => {
    //console.log('\n\nConsulta por ZIP\n\n')
    const zip = req.params.zip
    
    register = await searchByZip(zip)

    res.status(200).send( register.map((a) => {
        return {
            id: a.id,
            name: a.name,
            zip: a.zip,
            website: a.website
            }
    }))
        
    
})



router.post('/update/:csvFiles', async (req, res) => {
    //console.log('\n\nInserindo/Atualizando dados...\n\n')
    const file = './csvFiles/' + req.params.csvFiles

    await updateFile(file)

    
    res.status(201).send({
        mensagem: 'POST Called',
        
        
    })
    
})

module.exports = router