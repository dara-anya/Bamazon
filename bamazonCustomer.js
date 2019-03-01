var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Activities',
    database: 'bamazon'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('Connection Established.');
    connection.end();
});

// Extracting the table information from mySQL
connection.query('select * from products', function(err, res){
    if (err) throw err;

    
    // var fruits = ["apples", "oragnes", "bananas"];
    // var vegetables = ["carrot", "broccoli", "cucumber"];
    // function Food (fruits, vegetables){
    //     this.fruits = fruits;
    //     this.vegetables = vegetables;
    // }

    
    // console.table([fruits, vegetables]);


    function Product (item_id, product_name, department_name, price, stock_quantity){
        this.item_id = item_id;
        this.product_name = product_name;
        this.department_name = department_name;
        this.price = price;
        this.stock_quantity = stock_quantity;
    }


    // TABLE ATTEMPT ONE USING CONSOLE.TABLE()
    // var listOfIds = [];
    // var count = 10;
    // for (i = 0; i<count; i++){
    //     var item = new Product(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);

    //     listOfIds.push(res[i].item_id);
        

    //     console.table([item], ["item_id", "product_name", "department_name", "price", "stock_quantity"]);
        
    //     // console.log(res[i].item_id + "         " + res[i].product_name + "         " + res[i].department_name + "         $" + res[i].price + "          " + res[i].stock_quantity);
        
    // }
    // console.log(listOfIds);
    // console.table([listOfIds], ["item_id"]);
    // TABLE ATTEMPT TWO USING NPM TABLE
    var {table} = require('table');

    // var item = [];
    // var items = []
    // for (var i = 0; i<10; i++){
        
    //     item = [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity];

    //     items.push(item);
        
    // }
    // for (var i = 0; i<items.length; i++){
    //     let data, output;
    //     data = [items][i];
    //     output = table(data);
    //     console.log(output);

    // }
    

    let data, output;
    var categories = ['item_id', 'product_name', 'department_name','price', 'stock_quality'];
    var item1 = [res[0].item_id, res[0].product_name, res[0].department_name, res[0].price, res[0].stock_quantity];
    var item2 = [res[1].item_id, res[1].product_name, res[1].department_name, res[1].price, res[1].stock_quantity];
    var item3 = [res[2].item_id, res[2].product_name, res[2].department_name, res[2].price, res[2].stock_quantity];
    var item4 = [res[3].item_id, res[3].product_name, res[3].department_name, res[3].price, res[3].stock_quantity];
    var item5 = [res[4].item_id, res[4].product_name, res[4].department_name, res[4].price, res[4].stock_quantity];
    var item6 = [res[5].item_id, res[5].product_name, res[5].department_name, res[5].price, res[5].stock_quantity];
    var item7 = [res[6].item_id, res[6].product_name, res[6].department_name, res[6].price, res[6].stock_quantity];
    var item8 = [res[7].item_id, res[7].product_name, res[7].department_name, res[7].price, res[7].stock_quantity];
    var item9 = [res[8].item_id, res[8].product_name, res[8].department_name, res[8].price, res[8].stock_quantity];
    var item10 = [res[9].item_id, res[9].product_name, res[9].department_name, res[9].price, res[9].stock_quantity];
    data = [categories, item1,item2,item3,item4,item5,item6,item7,item8,item9,item10];
    output = table(data);
    console.log(output);
    
});

