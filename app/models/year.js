const {Model} = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Year extends Model {
        static associate (models) {
            this.hasMany(models.User, {
                foreignKey: 'year_id'});
            this.hasMany(models.Task, {
                foreignKey: 'year_id'});
        }
    };

    Year.init({
        name: DataTypes.ENUM('1º ESO', '2º ESO', '3ºESO', '4ºESO', 'Admin')
    }, {
        sequelize, 
        modelName: 'Year',
    });

    return Year;
}