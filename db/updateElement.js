module.exports = async function(db, elValue) {
    // Atualizando dados na tabela de companies
    try {
        const uptadeCompany = await db.run(`
            UPDATE companies
            SET website = "${elValue.website}"
            WHERE name = "${elValue.name}";
        `)
    } catch (error) {
        console.log(error)
    }

    
}