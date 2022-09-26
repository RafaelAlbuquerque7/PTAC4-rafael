const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_loja', 'root', '',{
    host: '127.0.0.1',
    dialect: 'mysql',
    define:{
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
})

sequelize.authenticate().then(function(){
    console.log('Conectado no banco com sucesso');
}).catch(function(err){
    console.log("Falha no banco");
})

module.exports = {Sequelize, sequelize}