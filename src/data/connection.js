var mysql = require("mysql2");

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "gcampus",
  multipleStatements: true,
});
module.exports = pool;

// var pool = mysql.createPool({
//   host: "sql.freedb.tech",
//   user: "freedb_ask_developers",
//   password: "nEy%P*St5Y$cbFH",
//   database: "freedb_G-Campus",
// });
