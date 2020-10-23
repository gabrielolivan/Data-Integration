module.exports = async (db, elValue) => {
    // Atualizando dados na tabela de companies
    try {
        const uptadeCompany = await db.run(`
            UPDATE companies
            SET website = "${elValue.website}"
            WHERE name = "${elValue.name}";
        `)
        console.log('[E-mail inserido/atualizado de : ' + elValue.name + '] : ' + elValue.website)

    } catch (error) {
        console.log(error)
    }
}