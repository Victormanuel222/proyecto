var Sequelize=require("sequelize");
var usuarioModelo=require("./modelos/usuarios");
require("dotenv").config();
/*
var db= process.env.DB_MYSQL_LOCAL;
var usuario= process.env.USUARIO_MYSQL_LOCAL;
var password=process.env.PASSWORD_MYSQL_LOCAL;
var host=process.env.HOST_MYSQL_LOCAL;
var port=process.env.PORT_MYSQL_LOCAL;
*/

var db= process.env.DB_MYSQL_REMOTO;
var usuario= process.env.USUARIO_MYSQL_REMOTO;
var password=process.env.PASSWORD_MYSQL_REMOTO;
var host=process.env.HOST_MYSQL_REMOTO;
var port=process.env.PORT_MYSQL_REMOTO;

var conexion=new Sequelize(db,usuario,password,{
    host:host,
    port:port, 
    dialect:"mysql",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true
        }
    }
});


conexion.sync({force:false})
.then(()=>{
    console.log('Base de datos creada correctamente');
})
.catch((error)=>{
    console.log(`Error al crear la base de datos ${error}`)
});


var usuario=usuarioModelo(conexion);

module.exports={
    Usuario:usuario
}