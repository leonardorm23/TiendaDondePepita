let express = require("express");
let Producto = require("../controllers/producto");
let multiparty = require("connect-multiparty");
let path = multiparty({cargas: "./uploads/imgProducto"});

let api = express.Router();

api.post("/producto/registrarProducto",path, Producto.registrarProducto);
api.get("/producto/:id", Producto.buscarProducto);
api.get("/producto/:nombre?", Producto.listaProducto);
api.post("/producto/:nombre?", Producto.listaProducto);

module.exports = api;