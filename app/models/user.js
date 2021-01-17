const {Model} = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate (models) {
             this.belongsTo(models.Role);
             this.belongsTo(models.Year);
        }
    };

    User.init({
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        mail: DataTypes.STRING,
        password: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
        year_id: DataTypes.INTEGER,
        phone: DataTypes.INTEGER
    },{
        sequelize, 
        modelName: 'User',
    });

    return User;
}