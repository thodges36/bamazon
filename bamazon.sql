DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
  item_id INT NOT NULL
  AUTO_INCREMENT,
  product_name VARCHAR
  (200) NOT NULL,
  department_name VARCHAR
  (100) NOT NULL,
  price DECIMAL
  (10,2) NULL,
  stock_quantity INTEGER
  (11) NOT NULL,
  PRIMARY KEY
  (item_id)
);
  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Duduma Polarized Sports Sunglasses", "Sports and Outdoors", 13.99, 500),
    ("BESTEK 300W Power Inverter DC 12V", "Automotive", 20.00, 150),
    ("Amazon Cloud Cam Security Camera", "Security Cameras", 99.99, 25),
    ("Blendtec Total Blender Classic", "Home and Kitchen", 200.00, 100),
    ("Parrot MiniDrone Rolling Spider", "Camera and Photo", 19.99, 200),
    ("Felt Pads Furniture Feet Brown", "Tools and Home Improvement", 7.25, 7500),
    ("AMIR Digital Kitchen Scale", "Home and Kitchen", 9.25, 1500),
    ("Anvil Pruning Shears", "Lawn and Garden", 11.50, 150),
    ("Fire TV with 4K Ultra HD and Alexa Voice Remote ", "Electronics", 49.99, 1000);