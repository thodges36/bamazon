var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayItems();
});

function displayItems() {

    var queryDb = "SELECT * FROM products";

    connection.query(queryDb, function (err, res) {
        if (err) throw err;

        console.log("View current inventory:");
        console.log("----------------------\n");

        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | Product: " + res[i].product_name + " | Category: " + res[i].department_name + " | Price: $" + res[i].price + " | Qty: " + res[i].stock_quantity + "\nWhat woud you like to buy? Enter product ID.");
        }
    });

    userAction();
}

function userAction() {
    inquirer
        .prompt([{
                name: "item_id",
                type: "input",
                message: "What would you like to buy? Enter product ID.",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                },
                filter: Number
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                },
                filter: Number
            }

        ]).then(function (answers) {
            connection.query("SELECT * FROM products", {
                item_id: answers.item
            }, function (err, data) {
                if (err) throw err;
                else {
                    var productsData = data[0];

                    if (answers.quantity <= productsData.stock_quantity) {

                        var updateQuantity = "UPDATE products SET stock_quantity = " + (productsData.stock_quantity - answers.quantity) + "Where item_id = " + answers.item_id;

                        connection.query("SELECT * FROM products", function (err, data) {
                            if (err) throw err;

                            console.log("Your order has been shipped. Your total is $" + productsData.price * answers.quantity);
                            connection.end();

                        })
                    } else {
                        console.log('Sorry, there is not enough of the ' + productsData.product_name + ". Please adjust your order.");                    }
                }


            })

        });
}