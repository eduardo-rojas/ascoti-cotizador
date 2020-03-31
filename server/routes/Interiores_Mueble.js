const express = require("express");
const interiores_mueble = express.Router();
const cors = require("cors");

const Interiores_Mueble = require("../models/interiores_mueble");
interiores_mueble.use(cors());

interiores_mueble.post("/agregar", (req, res) => {
  const interiores_muebleData = {
    Codigo: req.body.Codigo,
    Mueble_FK: req.body.Mueble_FK,
    Interior_FK: req.body.Interior_FK
  };

  Interiores_Mueble.findOne({
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(interiores_mueble => {
      if (!interiores_mueble) {
        Interiores_Mueble.create(interiores_muebleData)
          .then(interiores_mueble => {
            res.json({
              status:
                interiores_mueble.Codigo + " interiores_mueble registrado. "
            });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de interiores_mueble con este codigo ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

interiores_mueble.get("/lista", (req, res) =>
  Interiores_Mueble.findAll()
    .then(interiores_mueble => {
      res.json({
        interiores_mueble
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

interiores_mueble.get("/interiores_mueble/:Codigo", (req, res) =>
  Interiores_Mueble.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(interiores_mueble => {
      res.json({
        interiores_mueble
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//PUT

interiores_mueble.put("/update", (req, res) => {
  const interiores_muebleData = {
    Codigo: req.body.Codigo,
    Mueble_FK: req.body.Mueble_FK,
    Interior_FK: req.body.Interior_FK
  };
  Interiores_Mueble.update(interiores_muebleData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(interiores_mueble => {
      res.json({ status: " interiores_mueble actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

interiores_mueble.delete("/interiores_mueble/:Codigo", (req, res) =>
  Interiores_Mueble.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(interiores_mueble => {
      res.json({
        interiores_mueble
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = interiores_mueble;
