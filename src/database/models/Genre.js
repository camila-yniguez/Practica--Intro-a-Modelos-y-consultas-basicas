module.exports = (sequalize, dataTypes) => {

    const alias = "Genre";
    //el alias es el nombre que le pongo al modelo, y cuando lo llamo debe ser tal cual el nombre que le puse

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }, 
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        }

    }
    //a cols le asigno variables que tienen cada uno una propiedad/columna

    const config = {
        tableName: "genres",
        timestamps: false,
    }

    const Genre = sequalize.define(alias, cols, config)
    //constante que hace referencia a la tabla en UpperCamelCase, y en singular, debe ser retornada
    return Genre; 

};