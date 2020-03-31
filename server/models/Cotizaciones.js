const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "cotizaciones",
  {
    Proyecto: {
      type: Sequelize.INTEGER,
      unique: false,
      primaryKey: true
    },
    Cliente: {
      type: Sequelize.STRING,
      unique: false
    },
    Fecha: {
      type: Sequelize.DATE,
      unique: false
    },
    Estatus: {
      type: Sequelize.DECIMAL,
      unique: false
    },
    Total: {
      type: Sequelize.DECIMAL
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
