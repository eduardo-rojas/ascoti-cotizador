const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "muebles",
  {
    Codigo: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Nombre: {
      type: Sequelize.STRING,
      unique: false
    },
    Familia_FK: {
      type: Sequelize.STRING,
      unique: false
    },
    TiposMueble_FK: {
      type: Sequelize.STRING,
      unique: false
    },
    Descripcion: {
      type: Sequelize.STRING,
      unique: false
    },
    Activo: {
      type: Sequelize.BOOLEAN,
      unique: false
    },
    Imagen: {
      type: Sequelize.STRING,
      unique: false
    }
  },
  {
    timestamps: false
  }
);
