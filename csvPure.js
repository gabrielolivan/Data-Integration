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

            if(index == 0) return null
            if(index < 3) {
                try {
                    elementValue = {
                        name: y[0].toUpperCase(),
                        zip: y[1].substring(0,5)
                    }
                    
                    console.log(elementValue)
                    
                    await createElement(db, elementValue)

                } catch (error) {
                    console.log(error)
                }
            } else {null}
            
        })

        //const selectedElements = await db.all("SELECT * FROM companies")
        //console.log(selectedElements)

    })

    //console.log(dado)
});
