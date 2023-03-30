const Sequelize = require("sequelize");

const db = new Sequelize("db_produk", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
