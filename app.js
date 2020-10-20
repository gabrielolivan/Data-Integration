const csv = require('csv-parser')
const fs = require('fs')

const results = [];

fs.createReadStream('q1_catalog.csv')
    .pipe(csv({
        separator: ';',
    }))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      
});