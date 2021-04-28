let Stock = require("../models/stock");

const registrarStock = (req, res) => {
    let params = req.body;
    let stock = new Stock();
    if (params.idProducto &&
        params.cantidad) {
        stock.idProducto = params.idProducto;
        stock.cantidad = params.cantidad;
        stock.save((err, datosStock) => {
            if (err) {
                res.status(500).send({ mensaje: "Error al conectar al servidor"});
            } else {
                if (datosStock) {
                    res.status(200).send({stock: datosStock});
                } else {
                    res.status(401).send({mensaje: "el Stock no se pudo registrar"});
                }
            }
        });
    } else {
        res.status(401).send({mensaje: "Falto alguno de los campos"});
    }
};

module.exports = {
    registrarStock
};