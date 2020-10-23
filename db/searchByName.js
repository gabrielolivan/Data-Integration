const Database = require('./db')

function searchByName(name){ Database.then(async (db) => {

    try {
        let register
        db.each(`SELECT * FROM companies`, 
            (error, row) => {
                if(row.name.match(name)){
                    console.log(`${row.name}, ${row.zip}, ${row.website}`);
                    register = {
                        id: row.id,
                        name: row.name,
                        zip: row.zip,
                        website: row.website
                    }
                }
            });

    } catch (error) {
        console.log(error)
    }
    
        
    })
}

module.exports = searchByName