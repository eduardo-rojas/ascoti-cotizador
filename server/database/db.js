const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize("db-cotiza", "admin", "cotiza20$", {
  host: "db-cotiza.cvblsl7c9ssx.us-east-2.rds.amazonaws.com",
  dialect: "mssql",
  dialectOptions: {
    options: {
      useUTC: false,
      dateFirst: 1
    },
    operatorAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 300000,
      idle: 10000
    }
  }
});

//Confirmar conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
