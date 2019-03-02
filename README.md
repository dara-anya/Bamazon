# Bamazon
An Amazon-like storefront using MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

### How it works
1. A database containg a *products* table with 10 items, is created using MySQL.
1. The application connects the MySQL using the *mysql* module. The application now has access to the items in the *products* table.
1. To start the application, navigate to the *Bamazon* folder in terminal and type <img width="175" alt="screen shot 2019-03-01 at 10 41 43 pm" src="https://user-images.githubusercontent.com/14854129/53677546-35a08d80-3c77-11e9-8f8a-221fe16aa234.png"> into the command line.
1. The table of all the items will display (*see below*). The *table* module was used to display the table in this way.
<img width="723" alt="screen shot 2019-03-01 at 11 20 42 pm" src="https://user-images.githubusercontent.com/14854129/53677630-bc099f00-3c78-11e9-8418-6ab512770e75.png">
(I created a *for loop* to iterate through all items in the table. I could not figure out how to create one table for all items.)
<br>
5. The user will be prompted on the item (by giving the item ID) and quantity of said item that is to be purchased. If the item is not in stock then the following message will display and the application will stop:
<img width="436" alt="screen shot 2019-03-01 at 11 26 05 pm" src="https://user-images.githubusercontent.com/14854129/53677698-dc862900-3c79-11e9-894a-9d157f424369.png">

If the item is in stock then the application will calculate and display the total price of the user's purchase.
<img width="515" alt="screen shot 2019-03-01 at 11 24 16 pm" src="https://user-images.githubusercontent.com/14854129/53677699-e019b000-3c79-11e9-88f4-04bd1d1e22fc.png">

**NOTE:** If the item is in stock, the stock quantity of that item shoulb be sutracted by the quantity the user purchased and the MySQL table UPDATED. I could not get this functionality to work.





