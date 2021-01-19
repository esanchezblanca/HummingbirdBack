const {Model} = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        static associate (models) {
            this.belongsTo(models.Year);
            this.belongsTo(models.User);
        }
    };

    Task.init({
        year_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        user_id: DataTypes.INTEGER
    }, {
        sequelize, 
        modelName: 'Task',
    });

    return Task;
}