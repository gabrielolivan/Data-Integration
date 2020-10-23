module.exports = async function(db, elValue) {
    // inserir dados na tabela de companies
    try {
        const inserindoCompany = await db.run(`
            INSERT INTO companies (
                name,
                zip,
                website
            ) VALUES (
                "${elValue.name}",
                "${elValue.zip}",
                "${elValue.website}"
            );
        `)
        console.log('Dados adicionados ao banco: [' + elValue.name + '; ' + elValue.zip + ']')
               

    } catch (error) {
        console.log(elValue.name + 'já existe no banco de dados')
    }
}