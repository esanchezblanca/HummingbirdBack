module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
            
        },
        name: type.STRING,
        lastName: type.STRING,
        mail: type.STRING,
        password: type.STRING,
        phone: type.INTEGER
    }

    )
}