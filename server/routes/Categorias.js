const express = require("express");
const categorias = express.Router();
const cors = require("cors");

const Categoria = require("../models/categorias");
categorias.use(cors());

categorias.post("/agregar", (req, res) => {
  const categoriaData = {
    Codigo: req.body.Codigo,
    Tipo: req.body.Tipo,
  };

  Categoria.findOne({
    where: {
      Tipo: req.body.Tipo
    }
  })
    .then(categoria => {
      if (!categoria) {
        Categoria.create(categoriaData)
          .then(categoria => {
            res.json({ status: categoria.Tipo + " Categoría registrada. " });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.json({
          error: "El registro de categoría con este código ya existe."
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

categorias.get("/lista", (req, res) =>
Categoria.findAll({
  order: [
      ['Tipo', 'ASC'],
      ]})
    .then(categorias => {
      console.log(categorias);
      res.json({
        categorias
      });
    })
    .catch(err => {
      console.log(err);
      res.send("error: " + err);
    })
);

categorias.get("/categoria/:Codigo", (req, res) =>
Categoria.findOne({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(categorias => {
      res.json({
        categorias
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

//PUT

categorias.put("/update", (req, res) => {
  const categoriaData = {
    Codigo: req.body.Codigo,
    Tipo: req.body.Tipo
  };
  Categoria.update(categoriaData, {
    where: {
      Codigo: req.body.Codigo
    }
  })
    .then(categoria => {
      res.json({ status: " categoría actualizada. " });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

categorias.delete("/categoria/:Codigo", (req, res) =>
  Categoria.destroy({
    where: {
      Codigo: req.params.Codigo
    }
  })
    .then(categorias => {
      res.json({
        categorias
      });
    })
    .catch(err => {
      res.send("error: " + err);
    })
);

module.exports = categorias;
