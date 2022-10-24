CREATE DATABASE Crud; 

use Crud; 

CREATE Table usuarios(
    id INT(6) not null auto_increment PRIMARY KEY,
    name VARCHAR(50) not null,
    addres VARCHAR(100) not null ,
    phone VARCHAR(15) 
);


SELECT * FROM usuarios; 
