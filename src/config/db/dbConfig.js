import { Sequelize } from "sequelize";

const sequelize = new Sequelize("autenticador-db", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true
    },
});

sequelize
.authenticate()
.then(() =>{
    console.info('Conexão estabelicida!')
})
.catch(err => {
    console.error("A conexão falhou com o banco de dados");
    console.error(err.message);
});

export default sequelize;