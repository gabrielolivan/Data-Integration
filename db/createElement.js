module.exports = async (db, elValue) => {
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
        //console.log('Dados adicionados ao banco: [' + elValue.name + '; ' + elValue.zip + ']')

    } catch (error) {
        //console.log('[Dado já existe no banco]: ' + elValue.name)
    }
}