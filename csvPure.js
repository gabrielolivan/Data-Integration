const fs = require('fs')
const Database = require('./db/db')
const createElement = require('./db/createElement');


fs.readFile('q1_catalog.csv', 'utf-8', (err, data) => {
    if (err) throw err;

    var dado = data.split('\n').map((x) => {
        return x.split(';')
    })

    Database.then(async (db) => {

        dado.map(async (y, index) => {
            let register
            try {
                if (index === 0) return false

                register = {
                    name: y[0].toUpperCase(),
                    zip: y[1].substring(0, 5)
                }
                
                await createElement(db, register)
                

            } catch (error) {
                console.error(error, index, register)
            }
        })
         
    })

});
