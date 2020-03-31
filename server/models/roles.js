const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "roles",
  {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Rol: {
      type: Sequelize.STRING
    },
    Descripcion: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
