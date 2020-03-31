const express = require("express");
const AperturasM = express.Router();
const cors = require("cors");
const db = require("../database/db.js");
const AperturasMueble = require("../models/aperturas_mueble");
AperturasM.use(cors());

AperturasM.post("/agregar", (req, res) => {
  const aperturam_Data = {
    Codigo: req.body.Codigo,
    Mueble: req.body.Mueble,
    Apertura: req.body.Apertura,
    Comentarios: req.body.Comentarios
  };

  AperturasMueble.create(aperturam_Data)
    .then(AperturasM => {
      res.json({ status: AperturasM.Codigo + " registrada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Obtiene todos las aperturas del mueble para el index

AperturasM.get("/lista", (req, res) => {

QuerySelect = "select apm.Codigo, Muebles.Nombre as Mueble, aperturas.nombre as Apertura, apm.Comentarios From aperturas_mueble as apm, muebles, aperturas where Mueble_FK = muebles.Codigo and apertura_FK = aperturas.Codigo";

db.sequelize.query(QuerySelect).then(([results, metadata]) => {
  const AperturasM = results;
  res.json({
    AperturasM, 
    }); 
  })
  .catch(err => {
    res.send("error: " + err);
  })
});

module.exports = AperturasM;
