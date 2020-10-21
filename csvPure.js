const fs = require('fs')
const Database = require('./db/db')
const createElement = require('./db/createElement');


fs.readFile('q1_catalog.csv', 'utf-8', (err, data) => {
    if (err) throw err;

    var dado = data.split('\n').map((x) => {
        return x.split(';')
    })

    Database.then(async (db) => {

        const data = dado.map( (y, index) => {

            if(index == 0) return null
            return {
                name: y[0].toUpperCase(),
                zip: y[1].substring(0,5)
            }

        })
        data.filter(function(el){return el!=null})
        console.log(data)
           
     
        try {
            
            await createElement(db, data) 
            
        } catch (error) {
            //console.log(error);
        }




            
            
        

        //const selectedElements = await db.all("SELECT * FROM companies")
        //console.log(selectedElements)


    //console.log(dado)
    })

});
