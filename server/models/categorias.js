const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "categorias",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Tipo: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
