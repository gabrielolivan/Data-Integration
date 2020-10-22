const express = require('express')
const router = express.Router()
const updateFile = require('../src/update')

router.post('/:csvFile', (req, res) => {
    const file = './csvFiles/' + req.params.csvFile
    updateFile(file)
    console.log('update file')
    res.status(201).send({
        mensagem: 'Chamou e atualizou',
        
    })
    
})

module.exports = router