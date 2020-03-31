const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "interiores",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Nombre: {
      type: Sequelize.STRING
    },
    Costo: {
      type: Sequelize.DECIMAL
    },
    Factor: {
      type: Sequelize.DECIMAL
    },
    PrecioVenta: {
      type: Sequelize.DECIMAL
    }
  },
  {
    timestamps: false
  }
);
