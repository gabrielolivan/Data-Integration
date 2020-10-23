const Database = require('./db')
/*
function searchByZip(zip){ Database.then(async (db) => {

    try {
        let register
        await db.each(`SELECT * FROM companies WHERE zip LIKE "%${zip}%"`, 
            (error, row) => {
                console.log(`${row.name}, ${row.zip}, ${row.website}`);
                register = {
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

module.exports = searchByZip
*/

module.exports = async function searchByZip(req){
    
    
    const query = `SELECT * FROM companies WHERE zip LIKE "%${req}%"`

    try {
        const db = await Database
        const companies = await db.all(query)
        console.log(companies)
        return companies

    } catch (error) {
        console.log(error)
    }
}