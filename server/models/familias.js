const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "familias",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Familia: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
