const Database = require('./db')

module.exports = searchByZip = async (req) => {
    
    const query = `SELECT * FROM companies WHERE zip LIKE "%${req}%"`

    try {
        const db = await Database
        const companies = await db.all(query)
        return companies

    } catch (error) {
        console.log(error)
    }
}