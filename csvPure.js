const fs = require('fs')

fs.readFile('q1_catalog.csv', 'utf-8', (err, data) => {
    if (err) throw err;

    var dado = data.split('\n').map((x) => {
        return x.split(';')
    })

    console.log(dado)
  });
