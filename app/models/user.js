module.exports = (sequelize, type) => {
    
    return sequelize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        lastName: type.STRING,
        mail: type.STRING,
        password: type.STRING(150),
        role_id: type.INTEGER,
        year_id: type.INTEGER,
        phone: type.INTEGER
    });
}