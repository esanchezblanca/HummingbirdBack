const {Model} = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate (models) {
            this.belongsTo(models.User);
            this.belongsTo(models.Task);
        }
    };

    Comment.init({
        description: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        task_id: DataTypes.INTEGER,
    }, {
        sequelize, 
        modelName: 'Comment',
    });

    return Comment;
}