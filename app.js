const express = require('express')
const app = express()
const csvPure = require('./src/csvPure')
const rotaName = require('./routes/name')
const rotaUpdate = require('./routes/update')

csvPure

app.use('/name', rotaName)
app.use('/update', rotaUpdate)

app.listen(()=> {
    console.log('Servidor funcionando...')
})

module.exports = app