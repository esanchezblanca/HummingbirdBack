const {Model} = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        static associate (models) {
            this.belongsTo(models.Year);
        }
    };

    Task.init({
        year_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize, 
        modelName: 'Task',
    });

    return Task;
}