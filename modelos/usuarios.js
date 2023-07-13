var Sequelize=require("sequelize");

module.exports=(conexion)=>{
    var UsuarioSchema=conexion.define('usuario',{
        id:{
            type:Sequelize.INTEGER, 
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:Sequelize.STRING(50), allowNull:false
        },
        usuario:{
            type:Sequelize.STRING(20), unique: true,allowNull: false
        },
        password:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.BOOLEAN
        },
        createdAt:{
            type:Sequelize.DATE, 
            defaultValue:"07/07/2023"
        },
        updatedAt:{
            type:Sequelize.DATE,
            defaultValue:"07/07/2023"
        }

    });
    return UsuarioSchema;
}





