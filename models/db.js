const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "register",//Nome do banco
    "root",//Nome de usuário
    "123456",//Senha de usuário
    {
        host: "localhost", //Servidor
        dialect: "mysql" //Interpretador
    }
);

sequelize.authenticate().then((function() {
    console.log("Database conected")
})).catch(function(erro){
    console.log("Database error " + erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}