const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "bisagras",
  {
    Codigo: {
      type: Sequelize.STRING,
      unique: false,
      primaryKey: true
    },
    Nombre: {
      type: Sequelize.STRING,
      unique: false
    },
    Costo: {
      type: Sequelize.DECIMAL,
      unique: false
    },
    Factor: {
      type: Sequelize.DECIMAL,
      unique: false
    },
    PrecioVenta: {
      type: Sequelize.DECIMAL
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
