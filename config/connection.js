var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "mfchfvnp4rveo7t7",
  password: "gzw7twj8rcv9glfe",
  database: "blwhboc3wy32ut8j7"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
