const Database = require('./db')

function searchByZip(zip){ Database.then(async (db) => {

    try {
        let register
        db.each(`SELECT * FROM companies WHERE zip = "${zip}"`, 
            (error, row) => {
                console.log(`${row.name}, ${row.zip}, ${row.website}`);
                register = {
                    id: row.id,
                    name: row.name,
                    zip: row.zip,
                    website: row.website
                }
            });

    } catch (error) {
        console.log(error)
    }
    
        
    })
}

module.exports = searchByZip