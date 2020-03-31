const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "alturas",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Mueble_Fk: {
      type: Sequelize.STRING
    },
    Media: {
      type: Sequelize.SMALLINT
    },
    Minimo: {
      type: Sequelize.SMALLINT
    },
    Maximo: {
      type: Sequelize.SMALLINT
    }
  },
  {
    timestamps: false
  }
);
