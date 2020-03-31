const express = require("express");
const frentes_mueble = express.Router();
const cors = require("cors");
const db = require("../database/db.js");
const Frentes_mueble = require("../models/frentes_mueble");
frentes_mueble.use(cors());

// ** Agrega un nuevo mueble si no existe el código

frentes_mueble.post("/agregar", (req, res) => {
  const frentes_muebleData = {
    Codigo: req.body.Codigo,
    Mueble_FK: req.body.Mueble_FK,
    Frente_FK: req.body.Frente_FK
  };

  Frentes_mueble.findOne({
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(frentes_mueble => {
      if (!frentes_mueble) {
        Frentes_mueble.create(frentes_muebleData)
          .then(frentes_mueble => {
            res.json({
              status: " frentes_mueble registrado. "
            });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de frentes_mueble con este nombre ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Obtiene todos los frentes para el mueble

frentes_mueble.get("/lista", (req, res) => {
  QuerySelect = "select fm.Codigo, muebles.Nombre as Mueble, frentes.Nombre as Frente From frentes_muebles as fm, frentes, muebles Where fm.Mueble_FK = muebles.Codigo and fm.Frente_FK = frentes.Codigo Order by Mueble";
  db.sequelize.query(QuerySelect).then(([results, metadata]) => {
    const frentes_mueble = results;
    res.json({
      frentes_mueble, 
      }); 
    })
    .catch(err => {
      res.send("error: " + err);
    })
  });

/*frentes_mueble.get("/lista", (req, res) =>
  Frentes_mueble.findAll()
    .then(frentes_mueble => {
      res.json({
        frentes_mueble
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);*/

// ** Obtiene información dle frente mueble para edicion

frentes_mueble.get("/frentes_mueble/:Codigo", (req, res) =>
  Frentes_mueble.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(frentes_mueble => {
      res.json({
        frentes_mueble
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

// ** Actualiza el frente mueble

frentes_mueble.put("/update", (req, res) => {
  const frentes_muebleData = {
    Codigo: req.body.Codigo,
    Mueble_FK: req.body.Mueble_FK,
    Frente_FK: req.body.Frente_FK
  };
  Frentes_mueble.update(frentes_muebleData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(frentes_mueble => {
      res.json({ status: " frentes_mueble actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// ** Borra el frente mueble

frentes_mueble.delete("/frentes_mueble/:Codigo", (req, res) =>
  Frentes_mueble.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(frentes_mueble => {
      res.json({
        frentes_mueble
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = frentes_mueble;
