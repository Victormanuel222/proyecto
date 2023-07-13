var ruta=require("express").Router();
var {Usuario}=require("../conexion");

ruta.get("/",(req,res)=>{
    Usuario.findAll({where:{status:1}})
    .then((usuarios)=>{
        console.log(usuarios);
        res.render("mostrar", {usuarios:usuarios})
    })
    .catch((error)=>{
        console.log(`Hubo un error ${error}`);
    });

});

ruta.get("/nuevoUsuario",(req,res)=>{
    res.render("nuevoUsuario");
});

ruta.post("/nuevoUsuario",(req,res)=>{
    Usuario.create(req.body)
    .then(()=>{
        res.redirect("/")
    })
    .catch((error)=>{
        console.log("Error al insertar");
        res.redirect("/")
    })
});

ruta.get("/modificarUsuario/:id",(req,res)=>{
    Usuario.findByPk(req.params.id)
    .then((usuario)=>{
        res.render("modificarUsuario",{Usuario:usuario});

    })
    .catch((error)=>{
        console.log(`${error} no existe`);
        res.redirect("/")
    })
});

ruta.post("/modificarUsuario",(res,req)=>{
    console.log(req.body);
    Usuario.update(req.body,{while:{id:req.body.id}})
    .then(()=>{

    })
    .catch((error)=>{
        console.log("Error"+err);
        res.redirect("/");
    })
});

ruta.get("/borradorFisicoUsuario/:id",(req,res)=>{
    Usuario.destroy({where:{id:req.params.id}})
    .then(()=>{
        res.redirect("/");
    })
    .catch((error)=>{
        console.log("Error.................... "+err);
        res.redirect("/");
    });
});
ruta.get("/borradoLogicoUsuario/:id",(res,req)=>{
    Usuario.update({status:0},{where:{id:req.params.id}})
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{
        console.log("Error ........................ "+err);
        res.redirect("/");
    });
});
module.exports=ruta;
