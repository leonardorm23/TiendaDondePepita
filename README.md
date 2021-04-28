Esquema MongoDB Tienda Donde Pepita

Colecciones y Tipos de Datos

Usuario: {
    nombres: String,
    apellidos: String,
    edad: String,
    correo:String,
    pass: String,
    rol: String,
    fechaRegistro: {type: Date, default: Date.now},
}

Producto:{
    nombre:String,
    descripcion:String,
    precio:Number
}

Stock: {
    idProducto: { type: Schema.ObjectId, ref: "producto" },
    cantidad: Number
}