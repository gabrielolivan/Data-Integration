const Database = require('./db')

module.exports = searchByName = async (req) => {
    
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
