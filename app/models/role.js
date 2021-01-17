const {Model} = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate (models) {
            this.hasMany(models.User, {
                foreignKey: 'role_id'
            });
        }
    };

    Role.init({
        name: DataTypes.ENUM('student','teacher', 'super')
    }, {
        sequelize, 
        modelName: 'Role',
    });

    return Role;
}