const mysql = require("mysql");

// Create DB connection.
const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "password",
  database: "MEDICAL_SHOP",
});

connection.connect(function (error) {
  if (error) {
    console.log("Error In Connecting The DB " + error.stack);
    return;
  }
  console.log("Database Connected");
});

module.exports = connection;
