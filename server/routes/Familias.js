const express = require("express");
const familias = express.Router();
const cors = require("cors");

const Familia = require("../models/familias");
familias.use(cors());

// ** Guarda nueva familia si la familia no existe

familias.post("/agregar", (req, res) => {
  const familiaData = {
    Codigo: req.body.Codigo,
    Familia: req.body.Familia,
  };

  Familia.findOne({
    where: {
      Familia: req.body.Familia
    }
  })
    .then(familia => {
      if (!familia) {
        Familia.create(familiaData)
          .then(familia => {
            res.json({ status: familia.Familia + " Familia registrada. " });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de familia con este nombre ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// ** Obtiene todas la familias para la vista de index

familias.get("/lista", (req, res) =>
  Familia.findAll({
    order: [
        ['Familia', 'ASC'],
        ]})
    .then(familias => {
      res.json({
        familias
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

// ** Obtiene la familia seleccionada

familias.get("/familia/:Codigo", (req, res) =>
  Familia.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(familias => {
      res.json({
        familias
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

// ** Actualiza familia seleccionaa

familias.put("/update", (req, res) => {
  const familiaData = {
    Codigo: req.body.Codigo,
    Familia: req.body.Familia
  };
  Familia.update(familiaData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(familia => {
      res.json({ status: " familia actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// ** Elimina familia, solo si no está en uso y regresa registros de familias

familias.delete("/familia/:Codigo", (req, res) =>
  Familia.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(familias => {
      res.json({
        familias
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = familias;
