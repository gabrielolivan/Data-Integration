const Database = require('sqlite-async')

function execute (db) {
    //Criar as tabelas do banco do dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS companies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            zip INTEGER,
            website TEXT,
            UNIQUE(name)
        );
    `)
}

module.exports = Database.open(__dirname + '/Database.sqlite').then(execute)

// Criar API POST para receber o arquivo CSV
// Ler este arquivo usando csvPure.js e verificar elemento pelo NOME e não pelo ID
// se o NOME não existir, ignorar o dado
