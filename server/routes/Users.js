const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/registrar", (req, res) => {
  const usuarioData = {
    Usuario: req.body.Usuario,
    Nombre: req.body.Nombre,
    UsuarioPassword: req.body.UsuarioPassword,
    Telefono: req.body.Telefono,
    Celular: req.body.Celular,
    Mail: req.body.Mail,
    Calle: req.body.Calle,
    Colonia: req.body.Colonia,
    CodigoPostal: req.body.CodigoPostal,
    Ciudad: req.body.Ciudad,
    Pais: req.body.Pais,
    Cliente: req.body.Cliente,
    UsuarioStatus: req.body.UsuarioStatus
  };

  User.findOne({
    where: {
      Mail: req.body.Mail
    }
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.UsuarioPassword, 10, (err, hash) => {
          usuarioData.UsuarioPassword = hash;
          User.create(usuarioData)
            .then(user => {
              res.json({ status: user.Mail + " usuario registrado. " });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "El usuario ya existe." });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.post("/login", (req, res) => {
  User.findOne({
    where: {
      Usuario: req.body.Usuario
    }
  })
    .then(user => {
      if (user) {
        if (
          bcrypt.compareSync(req.body.UsuarioPassword, user.UsuarioPassword)
        ) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        }
      } else {
        res.status(400).json({ error: "El usuario no existe." });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

users.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("El usuario no existe.");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.get("/lista", (req, res) =>
  User.findAll()
    .then(users => {
      res.json({
        users
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = users;
