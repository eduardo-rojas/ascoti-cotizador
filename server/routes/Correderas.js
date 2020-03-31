const express = require("express");
const correderas = express.Router();
const cors = require("cors");

const Corredera = require("../models/Correderas");
correderas.use(cors());

correderas.post("/agregar", (req, res) => {
  const correderaData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta,
    Activo: req.body.Activo
  };

  Corredera.create(correderaData)
    .then(corredera => {
      res.json({ status: corredera.Nombre + " registrada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Obtiene todas las correderas para el index

correderas.get("/lista", (req, res) =>
  Corredera.findAll()
    .then(correderas => {
      res.json({
        correderas
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//Metodo para obtener un registro
correderas.get("/correderas/:Codigo", (req, res) =>
  Corredera.findOne({
    where: {
      Codigo: req.params.Codigo
    } 
  })
    .then(correderas => {
      res.json({
        correderas
      });
    })
    .catch(err => {
      res.send("Aqui Error ->>: " + err);
    })
);

//Metodo para actualizar un registro
correderas.put("/update", (req, res) => {
  const correderaData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta,
    Activo: req.body.Activo
  };

  Corredera.update(correderaData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(corredera => {
      res.json({ status: " corredera actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//Metodo para eliminar un registro
correderas.delete("/correderas/:Codigo", (req, res) =>
  Corredera.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(correderas => {
      res.json({
        correderas
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = correderas;
