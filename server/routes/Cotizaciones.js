const express = require("express");
const cotizaciones = express.Router();
const cors = require("cors");

const Cotizacion = require("../models/Cotizaciones");
cotizaciones.use(cors());

cotizaciones.post("/agregar", (req, res) => {
  const cotizacionData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta
  };

  Cotizacion.findOne({
    where: {
      Nombre: req.body.Nombre
    }
  })
    .then(cotizacion => {
      if (!cotizacion) {
        Cotizacion.create(cotizacionData)
          .then(cotizacion => {
            res.json({ status: cotizacion.Nombre + " cotizacion registrada. " });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de cotizacion con este nombre ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

cotizaciones.get("/lista", (req, res) =>
Cotizacion.findAll()
    .then(cotizaciones => {
      res.json({
        cotizaciones
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

cotizaciones.get("/cotizacion/:Codigo", (req, res) =>
Cotizacion.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(cotizaciones => {
      res.json({
        cotizaciones
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//PUT

cotizaciones.put("/update", (req, res) => {
  const cotizacionData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta
  };
  Cotizacion.update(cotizacionData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(cotizacion => {
      res.json({ status: " cotizacion actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

cotizaciones.delete("/cotizacion/:Codigo", (req, res) =>
Cotizacion.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(cotizaciones => {
      res.json({
        cotizaciones
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = cotizaciones;
