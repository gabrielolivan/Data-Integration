const Database = require('./db')

module.exports =  searchElement = async (name, zip) => {
     
    const query = `SELECT * FROM companies WHERE name LIKE "%${name}%" AND zip LIKE "%${zip}%"`

    try {
        const db = await Database
        const companies = await db.all(query)
        console.log(companies)
        return companies

    } catch (error) {
        console.log(error)
    }
}