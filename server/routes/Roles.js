const express = require("express");
const roles = express.Router();
const cors = require("cors");

const Rol = require("../models/roles");
roles.use(cors());

// ** Guarda nueva rol si el rol no existe

roles.post("/agregar", (req, res) => {
  const rolData = {
    Id: req.body.Id,
    Rol: req.body.Rol,
    Descripcion: req.body.Descripcion
  };

  Rol.findOne({
    where: {
      Rol: req.body.Rol
    }
  })
    .then(rol => {
      if (!rol) {
        Rol.create(rolData)
          .then(rol => {
            res.json({ status: rol.Rol + " Rol registrado. " });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de Rol con este nombre ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// ** Obtiene todas los roles para la vista de index

roles.get("/lista", (req, res) =>
  Rol.findAll({
    order: [
        ['Id', 'ASC'],
        ]})
    .then(roles => {
      res.json({
        roles
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

// ** Obtiene el seleccionado

roles.get("/rol/:Id", (req, res) => {
  console.log(req.params);
  Rol.findOne({
    where: {
      Id: req.params.Id
    }
  })
    .then(roles => {
      console.log(roles);
      res.json({
        roles
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
  }
);

// ** Actualiza el rol seleccionado

roles.put("/update", (req, res) => {
  const rolData = {
    Id: req.body.Id,
    Rol: req.body.Rol,
    Descripcion: req.body.Descripcion
  };
  console.log(rolData);
  Rol.update(rolData, {
    where: {
      Id: req.body.Id
    }
  })
    .then(rol => {
      
      res.json({ status: " Rol actualizado. " });
    })
    .catch(err => {
      console.log(err);
      res.send("error: " + err);
    });
});

// ** Elimina el Rol seleccionado

roles.delete("/rol/:Id", (req, res) =>
  Rol.destroy({
    where: {
      Id: req.params.Id
    }
  })
    .then(roles => {
      res.json({
        roles
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = roles;
