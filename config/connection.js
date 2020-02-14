var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zl5k0wlhbnzjmz4i",
  password: "a2sjll9ooz6c1aut",
  database: "xu9k1mg8cpdpt322"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
