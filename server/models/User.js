const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "usuarios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Usuario: {
      type: Sequelize.STRING
    },
    Nombre: {
      type: Sequelize.STRING
    },
    UsuarioPassword: {
      type: Sequelize.STRING
    },
    Telefono: {
      type: Sequelize.STRING
    },
    Celular: {
      type: Sequelize.STRING
    },
    Mail: {
      type: Sequelize.STRING
    },
    Calle: {
      type: Sequelize.STRING
    },
    Colonia: {
      type: Sequelize.STRING
    },
    CodigoPostal: {
      type: Sequelize.STRING
    },
    Ciudad: {
      type: Sequelize.STRING
    },
    Pais: {
      type: Sequelize.STRING
    },
    UsuarioStatus: {
      type: Sequelize.STRING
    },
    Cliente: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
