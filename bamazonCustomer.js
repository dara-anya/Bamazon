// Require/Import dependencies 
var mysql = require('mysql');
var inquirer = require('inquirer');
var {table} = require('table');

// Create connection to mySQL database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Activities',
    database: 'bamazon'
});

// Connect to mySQL database
connection.connect(function(err){
    if (err) throw err;
    console.log('Connection Established.');
    connection.end();
});

// Connect to the products table 
connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err;

    // Create a function to disply the table of the products (using npm table)
    function displayTable(){
        let data, output;

        var categories = ['item_id', 'product_name', 'department_name','price', 'stock_quality'];

        for (i=0; i<res.length; i++){
            var item = [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity];

            data = [categories, item];

            output = table(data);
            console.log(output);
        }  
    }

    // Diplay the mySQL products table 
    displayTable();
    
    // Prompt the user for which item they'd like to purchase
        inquirer.prompt([
        {
            // Ask the user the ID of the product they would like to buy
            name: "item",
            type: "input",
            message: "Type the item ID you are interested in purchasing:"
        },
        {
            // Ask the user how many units of the product they would like to buy
            name: "quantity",
            type: "input",
            message: "Type the quantity of the item you'd like to purchase:"
        }    
    ])
    .then(function(answer){
        var chosenItem;
        // Loop through all items
        for (i = 0; i < res.length; i++){
            // If the item in the table matches the item the user wants to purchase
            if (res[i].item_id == answer.item){
                //If the the stock_quantity of the item equals 0 inform the user and stop the program
                if (res[i].stock_quantity == 0){
                    console.log("Sorry, that item is not currently in stock!")
                }
                // If the item is in stock continue through program
                else { 
                    // Store the chosen item into a variable
                    chosenItem = res[i];
                    
                    connection.query(
                        // Update the SQL database
                        // In the products table subtract the quantiy the user is purchasing from the stock_quantity of that item
                        "UPDATE products SET stock_quantity = stock_quantity - answer.quantity WHERE item_id = answer.item", function(err, res){
                            //displayTable();

                            // Show the user the total cost of their purchase.
                            console.log("The total cost of your purchase is: $" + chosenItem.price * answer.quantity + ".");
                        }
                    )
                }

    

            }
        }
    })
});

