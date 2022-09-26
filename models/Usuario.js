const { type } = require('express/lib/response');
const db= require('./db');

const Usuario = db.sequelize.define('usuario', {
id:{
type: db.Sequelize.INTEGER,
autoIncrement: true,
allowNull: false,
primaryKey: true
},
nome:{
    type: db.Sequelize.STRING,
    allowNull: false

},
senha:{
    type: db.Sequelize.STRING,
    allowNull: false

}
})

Usuario.sync();

module.exports = Usuario;