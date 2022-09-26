const { type } = require('express/lib/response');
const db= require('./db');

const Usuario = db.sequelize.define('usuario', {
id:{
type: db.sequelize.INTEGER,
autoIncrement: true,
allowNull: false,
primaryKey: true
},
none:{
    type: db.sequelize.STRING,
    allowNull: false

},
senha:{
    type: db.sequelize.STRING,
    allowNull: false

}
})

Usuario.sync();

module.exports = Usuario;