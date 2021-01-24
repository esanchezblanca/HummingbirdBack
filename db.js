const Sequelize = require('sequelize');

const UserModel = require('./app/models/user');
const RoleModel = require('./app/models/role');
const YearModel = require('./app/models/year');
const CommentModel = require('./app/models/comment');
const TaskModel = require('./app/models/task');

//Introducimos el nombre de la base de datos, user y password
const sequelize = new Sequelize('X9yANehLsD', 'X9yANehLsD', 'lNoMyt6pUW', {
    host: 'remotemysql.com',
    dialect: 'mysql',
});

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