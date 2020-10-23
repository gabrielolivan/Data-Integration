const Database = require('./db')
/*
function searchByName(name){ Database.then(async (db) => {

    try {
        let callback
        db.each(`SELECT * FROM companies WHERE name LIKE "%${name}%"`, 
            (error, row) => {
                
                console.log(`${row.id},${row.name}, ${row.zip}, ${row.website}`);
                callback = {
                    id: row.id,
                    name: row.name,
                    zip: row.zip,
                    website: row.website
                }
                
            })

            
    } catch (error) {
        console.log(error)
    }
    
     
    })
}

module.exports = searchByName

*/
module.exports = async function searchByName(req){
    
    
    const query = `SELECT * FROM companies WHERE name LIKE "%${req}%"`

    try {
        const db = await Database
        const companies = await db.all(query)
        console.log(companies)
        return companies

    } catch (error) {
        console.log(error)
    }
}
