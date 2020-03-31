const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "interiores_mueble",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Mueble_FK: {
      type: Sequelize.STRING
    },
    Interior_FK: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
