const fs = require('fs')
const Database = require('../db/db')
const createElement = require('../db/createElement')

const file = '../csvFiles/q1_catalog.csv'

fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err;

    var dado = data.split('\n').map((x) => {
        return x.split(';')
    })

    Database.then(async (db) => {

        dado.map(async (y, index) => {
            let register
            try {
                if (index === 0) return false
                if (y[3] == undefined) y[3] = ""
                
                register = {
                    name: y[0].toUpperCase(),
                    zip: y[1].substring(0, 5),
                    website: y[3].toLowerCase()
                }
                
                await createElement(db, register)
                

            } catch (error) {
                console.error(error, index, register)
            }
        })
         
    })

});
