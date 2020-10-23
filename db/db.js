const Database = require('sqlite-async')

execute = (db) => {
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

module.exports = Database.open(__dirname + '/Yawoen.sqlite').then(execute)

