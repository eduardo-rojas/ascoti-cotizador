const express = require("express");
const bisagras = express.Router();
const cors = require("cors");

const Bisagra = require("../models/Bisagra");
bisagras.use(cors());

bisagras.post("/agregar", (req, res) => {
  const bisagraData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta
  };

  Bisagra.findOne({
    where: {
      Nombre: req.body.Nombre
    }
  })
    .then(bisagra => {
      if (!bisagra) {
        Bisagra.create(bisagraData)
          .then(bisagra => {
            res.json({ status: bisagra.Nombre + " bisagra registrada. " });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de bisagra con este nombre ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

bisagras.get("/lista", (req, res) =>
  Bisagra.findAll()
    .then(bisagras => {
      res.json({
        bisagras
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

bisagras.get("/bisagra/:Codigo", (req, res) =>
  Bisagra.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(bisagras => {
      res.json({
        bisagras
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//PUT

bisagras.put("/update", (req, res) => {
  const bisagraData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta
  };
  Bisagra.update(bisagraData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(bisagra => {
      res.json({ status: " bisagra actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

bisagras.delete("/bisagra/:Codigo", (req, res) =>
  Bisagra.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(bisagras => {
      res.json({
        bisagras
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = bisagras;
