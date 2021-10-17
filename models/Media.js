module.exports = (sequelize, Datatypes) => {
    const Media = sequelize.define('Media', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: Datatypes.STRING,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: Datatypes.DATE, 
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: Datatypes.DATE, 
            allowNull: false

        }
    }, {
        tableName: 'media'
    });
    return Media;
}