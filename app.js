const express = require('express')
const app = express()
const csvPure = require('./src/csvPure')
const rotaApi = require('./routes/api')



csvPure('q1_catalog.csv')

app.use('/api', rotaApi)

app.listen(()=> {
    console.log('Servidor funcionando...')
})

module.exports = app