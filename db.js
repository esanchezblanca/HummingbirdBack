const Sequelize = require('sequelize');

const UserModel = require('./models/users');

//Introducimos el nombre de la base de datos, user y password
const sequelize = new Sequelize('ZxmMUcxNou', 'ZxmMUcxNou', 'Er7l3NlgbS', {
    host: 'remotemysql.com',
    dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

//Cuando migre la bbdd devolverá el mensaje de que ya lo ha hecho
sequelize.sync({ force: false})
.then(() => {
    console.log('Sincronizado')
});

module.exports ={
    User
}