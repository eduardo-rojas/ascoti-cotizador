const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "aperturas_mueble",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Mueble_FK: {
      type: Sequelize.STRING
    },
    Apertura_FK: {
      type: Sequelize.STRING
    },
    Comentarios: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
