const express = require("express");
const multer = require("multer");
const muebles = express.Router();
const cors = require("cors");
const db = require("../database/db.js");
const Mueble = require("../models/muebles");

muebles.use(cors());

//Agregar registro

muebles.post("/agregar", (req, res) => {
  const muebleData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Familia_FK: req.body.Familia_FK,
    TiposMueble_FK: req.body.TiposMueble_FK,
    Descripcion: req.body.Descripcion,
    Activo: req.body.Activo
  };

  Mueble.findOne({
    where: {
      Nombre: req.body.Nombre
    }
  })
    .then(mueble => {
      if (!mueble) {
        Mueble.create(muebleData)
          .then(mueble => {
            res.json({ status: mueble.Nombre + " mueble registrado. " });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de mueble con este nombre ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Obtiene todos los muebles para el index

muebles.get("/lista", (req, res) => {

  QuerySelect = "select m.Codigo, m.Nombre, fam.Familia, cat.Tipo, m.Activo From muebles as m, familias as fam, categorias as cat Where m.Familia_FK = fam.Codigo and m.TiposMueble_FK = cat.Codigo";
  
  db.sequelize.query(QuerySelect).then(([results, metadata]) => {
    const muebles = results;
    res.json({
      muebles, 
      }); 
    })
    .catch(err => {
      res.send("error: " + err);
    })
  });




//Metodo para obtener un registro
muebles.get("/mueble/:Codigo", (req, res) =>
  Mueble.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(muebles => {
      res.json({
        muebles
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//Metodo para actualizar un registro
muebles.put("/update", (req, res) => {
  const muebleData = {
    Codigo: req.body.Codigo,
    Nombre: req.body.Nombre,
    Familia_FK: req.body.Familia_FK,
    TipoMueble_FK: req.body.TipoMueble_FK,
    Descripcion: req.body.Descripcion,
    Activo: req.body.Activo
  };
  Mueble.update(muebleData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(mueble => {
      res.json({ status: " mueble actualizado. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//Metodo para eliminar un registro
muebles.delete("/mueble/:Codigo", (req, res) =>
  Mueble.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(muebles => {
      res.json({
        muebles
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//Filtro de tamaño y tipo de archivo para imagenes
const upload = multer({
  limits: {
    fileSize: 1000000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  }
});

//Metodo para agregar imagene al registro de un mueble
muebles.post("/upload/:Codigo", upload.single("imagen"), async (req, res) => {
  try {
    const mueble = await Mueble.findOne({
      where: {
        Codigo: req.params.Codigo
      }
    });
    res.set("Content-Type", "image/jpg");
    res.send(mueble.imagen);
  } catch (e) {
    res.status(404).send();
  }
});

//Envia imagen de cada Mueble
muebles.get("/:Codigo/imagen", async (req, res) => {
  try {
    const mueble = await Mueble.findOne({
      where: {
        Codigo: req.params.Codigo
      }
    });
    res.set("Content-Type", "image/jpg");
    res.send(mueble.imagen);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = muebles;
