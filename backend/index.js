let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let port = process.env.PORT || 3001;

let app = express();

let usuarioRoutes = require("./routes/usuario");
let producto = require("./routes/producto");
let stock = require("./routes/stock");

mongoose.connect(
    "mongodb://localhost:27017/dondepepitadb",
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("Servidor: ON");
            app.listen(port, function(){
                console.log("servidor Backend funcionando en puerto: " + port);
            });
        }
    }
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api", usuarioRoutes);
app.use("/api", producto);
app.use("/api", stock);



module.exports = app;