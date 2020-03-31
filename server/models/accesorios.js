const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "accesorios",
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
    },
    Activo: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    timestamps: false
  }
);
