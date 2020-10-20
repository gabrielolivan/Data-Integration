const Database = require('sqlite-async')

function execute (db) {
    //Criar as tabelas do banco do dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            zip INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)