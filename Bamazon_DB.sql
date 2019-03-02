drop database if exists bamazon;
create database bamazon;
use bamazon;

create table products (
	item_id int not null auto_increment,
    product_name varchar(255) null,
    department_name varchar(50) null,
    price decimal(10,2) null,
    stock_quantity int null,
    primary key(item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values 
("Casio G-Shock Limited Edition Watch", "Cell Phones & Accessories", 81.99, 2),
("Converse Classic High Top Sneakers", "Clothing, Shoes & Jewelry", 51.99, 12),
("Kingdom Hearts III - PlayStation 4", "PlayStation 4 Games", 53.94, 9),
("Mini Synthesizer Pack", "Musical Instruments", 1499.00, 1),
("German Handcrafted Wood Cukoo Clock", "Home & Kitchen", 325.00, 32),
("KitchenAid Artisan Design Series", "Home & Kitchen", 299.99, 3),
("Golden Eagle Russian Luxury Backgammon Set", "Toy & Games", 134.25, 5),
("1969 Mini Cooper", "Vehicles", 21900.00, 0),
("GoPro HERO6 Black 4K Action Camera", "Electronics", 279.99, 25),
("Bonsai Tree", "Garden & Outdoor", 26.99, 19);
