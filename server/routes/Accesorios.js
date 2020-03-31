const express = require("express");
const accesorios = express.Router();
const cors = require("cors");

const Accesorio = require("../models/accesorios");
accesorios.use(cors());

accesorios.post("/agregar", (req, res) => {
  const accesorioData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta,
    Activo: req.body.Activo
  };

  Accesorio.create(accesorioData)
    .then(accesorio => {
      res.json({ status: accesorio.Nombre + " registrada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Obtiene todos los accesorios para el index

accesorios.get("/lista", (req, res) =>
  Accesorio.findAll({
    order: [
        ['Nombre', 'ASC'],
        ]})
    .then(accesorios => {
      res.json({
        accesorios
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//Metodo para obtener un registro
accesorios.get("/accesorio/:Codigo", (req, res) =>
  Accesorio.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(accesorios => {
      res.json({
        accesorios
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//Metodo para actualizar un registro

accesorios.put("/update", (req, res) => {
  const accesorioData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta,
    Activo: req.body.Activo
  };
  Accesorio.update(accesorioData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(accesorio => {
      res.json({ status: " accesorio actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//Metodo para eliminar un registro
accesorios.delete("/accesorio/:Codigo", (req, res) =>
  Accesorio.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(accesorios => {
      res.json({
        accesorios
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = accesorios;
