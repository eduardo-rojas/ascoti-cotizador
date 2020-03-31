const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "frentes_muebles",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Mueble_FK: {
      type: Sequelize.STRING,
      unique: false
    },
    Frente_FK: {
      type: Sequelize.STRING,
      unique: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
