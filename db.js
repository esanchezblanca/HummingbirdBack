const Sequelize = require('sequelize');

const UserModel = require('./app/models/user');
const RoleModel = require('./app/models/role');
const YearModel = require('./app/models/year');
const CommentModel = require('./app/models/comment');
const TaskModel = require('./app/models/task');

//Introducimos el nombre de la base de datos, user y password
// const sequelize = new Sequelize('X9yANehLsD', 'X9yANehLsD', 'lNoMyt6pUW', {
//     host: 'remotemysql.com',
//     dialect: 'mysql',
// });
 const sequelize = new Sequelize('heroku_afeba4f1494071f', 'b54ea84aace8fc', '804505c9', {
     host: 'us-cdbr-east-03.cleardb.com',
     dialect: 'mysql',
 });


// const connection = mysql.createConnection({
//     host: 'us-cdbr-east-03.cleardb.com',
//     user: 'b54ea84aace8fc',
//     password: '804505c9',
//     database: 'heroku_afeba4f1494071f'
// });



const User = UserModel(sequelize, Sequelize);
const Role = RoleModel(sequelize, Sequelize);
const Year = YearModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);
const Task = TaskModel(sequelize, Sequelize);


sequelize.sync({ force: false})
.then(() => {
    console.log('Sincronizado')
});

module.exports ={
    Role,
    User,
    Year,
    Task,
    Comment
}