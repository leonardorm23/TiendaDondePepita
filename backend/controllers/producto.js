let Producto = require("../models/producto");

const registrarProducto = (req, res) => {
    let params = req.body;
    let producto = new Producto();

    producto.nombre = params.nombre;
    producto.descripcion = params.descripcion;
    producto.precio = params.precio;
    producto.save((err, saveProducto) =>{
        if (err) {
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
            if (saveProducto) {
                res.status(200).send({producto: saveProducto});
            } else {
                res.status(401).send({mensaje: "no se pudo registrar producto"});
            }
        }
    });
};

const buscarProducto = (req, res) => {
    let id = req.params["id"];
    Producto.findById({_id:id}, (err, datosProducto) => {
        if (err) {
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
            if (datosProducto) {
                res.status(200).send({producto: datosProducto});
            } else {
                res.status(401).send({mensaje: "El producto no existe"});
            }
        }
    });
};

const listaProducto = (req, res) => {
    let nombre = req.params["nombre"];
    Producto.find({nombre: new RegExp(nombre, "i")}, (err, datosProducto) => {
        if (err) {
            res.status(500).send({mensaje: "error al conectar al servidor"});
        } else {
            if (datosProducto) {
                res.status(200).send({producto: datosProducto});
            } else {
                res.status(401).send({mensaje: "no hay productos"});
            }
        }
    });
};

module.exports = {
    registrarProducto,
    buscarProducto,
    listaProducto,
};