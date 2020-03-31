var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 5000;
const multer = require("multer");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

var Accesorios = require("./routes/Accesorios");
var Bisagras = require("./routes/Bisagras");
var Correderas = require("./routes/Correderas");
var Jaladeras = require("./routes/Jaladeras");
var Muebles = require("./routes/Muebles");
var AperturasM = require("./routes/AperturasM");
var Users = require("./routes/Users");
var Interiores_Mueble = require("./routes/Interiores_Mueble");
var Frentes_Mueble = require("./routes/Frentes_Mueble");
var Familias = require("./routes/Familias");
var Categorias = require("./routes/Categorias");
var Roles = require("./routes/Roles");
var Cotizaciones = require("./routes/Cotizaciones");

const upload = multer({
  dest: "images"
 });

app.use("/accesorios", Accesorios);
app.use("/bisagras", Bisagras);
app.use("/correderas", Correderas);
app.use("/jaladeras", Jaladeras);
app.use("/muebles", Muebles);
app.use("/AperturasM", AperturasM);
app.use("/users", Users);
app.use("/interiores_muebles", Interiores_Mueble);
app.use("/frentes_muebles", Frentes_Mueble);
app.use("/familias", Familias);
app.use("/categorias", Categorias);
app.use("/roles", Roles);
app.use("/cotizaciones", Cotizaciones);

app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});

app.listen(port, function() {
  console.log("Server is running on port: " + port);
});
