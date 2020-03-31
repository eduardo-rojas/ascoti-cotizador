const express = require("express");
const jaladeras = express.Router();
const cors = require("cors");

const Jaladera = require("../models/Jaladeras");
jaladeras.use(cors());

jaladeras.post("/agregar", (req, res) => {
  const jaladeraData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta,
    Activo: req.body.Activo
  };

  Jaladera.create(jaladeraData)
    .then(jaladera => {
      res.json({ status: jaladera.Nombre + " registrada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Obtiene todos los jaladeras para el index

jaladeras.get("/lista", (req, res) =>
  Jaladera.findAll()
    .then(jaladeras => {
      res.json({
        jaladeras
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//Metodo para obtener un registro
jaladeras.get("/jaladera/:Codigo", (req, res) =>
  Jaladera.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(jaladeras => {
      res.json({
        jaladeras
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//Metodo para actualizar un registro
jaladeras.put("/update", (req, res) => {
  const jaladeraData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Costo: req.body.Costo,
    Factor: req.body.Factor,
    PrecioVenta: req.body.PrecioVenta,
    Activo: req.body.Activo
  };
  Jaladera.update(jaladeraData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(jaladera => {
      res.json({ status: " jaladera actualizado. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//Metodo para eliminar un registro
jaladeras.delete("/jaladera/:Codigo", (req, res) =>
  Jaladera.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(jaladeras => {
      res.json({
        jaladeras
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = jaladeras;
