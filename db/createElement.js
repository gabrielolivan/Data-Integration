module.exports = async function(db, elValue) {
    // inserir dados na tabela de companie
    const inserindoCompany = await db.run(`
        INSERT INTO companies (
            name,
            zip
        ) VALUES (
            ${elValue.name},
            ${elValue.zip}
        );
    `)


    // aqui vou executar todos os db runs()
    await Promise.all(inserindoCompany)
}