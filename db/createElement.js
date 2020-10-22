module.exports = async function(db, elValue) {
    // inserir dados na tabela de companie
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

    } catch (error) {
        console.log(error)
    }
}