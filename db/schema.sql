-- remove db if it already exists
DROP DATABASE IF EXISTS empl_track;
-- create DB for employee tracking data
CREATE DATABASE empl_track;
-- connect to correct DB 
\c empl_track;

-- create tables for Department, Role, and Employee
-- add respective PK's & FK's 
CREATE TABLE department (
id SERIAL PRIMARY KEY,
name VARCHAR(30) UNIQUE NOT NULL,
);
CREATE TABLE role (
id SERIAL PRIMARY KEY,
title VARCHAR(30) UNIQUE NOT NULL,
salary DECIMAL NOT NULL, 
FOREIGN KEY (department)
REFERENCES department(id)
ON DELETE SET NULL 
);
CREATE TABLE employee (
id SERIAL PRIMARY KEY, 
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
FOREIGN KEY (role_id)
REFERENCES role(id)
ON DELETE SET NULL, 
FOREIGN KEY (manager_id)
REFERENCES employee(id)
ON DELETE SET NULL
);