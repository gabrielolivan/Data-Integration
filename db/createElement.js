module.exports = async function(db, elValue) {
    // inserir dados na tabela de companie
    try {
        const inserindoCompany = await db.run(`
            INSERT INTO companies (
                name,
                zip
            ) VALUES (
                "${elValue.name}",
                "${elValue.zip}"
            );
        `)

    } catch (error) {
        console.log(error)
    }


    // aqui vou executar todos os db runs()
    //await Promise.all(inserindoCompany)
}