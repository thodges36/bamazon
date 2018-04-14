var mysql = require("mysql");
//var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId + "\n");
    displayItems();
  });

  function displayItems() {

    var queryDb = "SELECT * FROM products"

    connection.query(queryDb, function(err, res) {
      if (err) throw err;
      
      console.log("----------------------\n");
      console.log("View current inventory:");
      console.log("----------------------\n");
  
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }