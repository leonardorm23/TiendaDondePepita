let jwt = require("jwt-simple");
let moment = require("moment");
let secret = "dondepepita1";

exports.createToken = (usuario) => {
    let payload = {
        _id: usuario._id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        edad: usuario.edad,
        correo: usuario.correo,
        iat: moment().unix(),
    };
    return jwt.encode(payload, secret);
};
