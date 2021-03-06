DROP DATABASE IF EXISTS usersdb;
CREATE DATABASE usersdb;
 
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(30) NOT NULL,
  name VARCHAR(30) NOT NULL,
  password VARCHAR(50),
  birthdate VARCHAR(90) NOT NULL,
  pic VARCHAR(500),
  badge VARCHAR(500),
  bio VARCHAR(500),
  games VARCHAR(500),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
  );

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
