-- remove db if it already exists
DROP DATABASE IF EXISTS empl_track;
-- create DB for employee tracking data
CREATE DATABASE empl_track;
-- connect to correct DB 
\c empl_track;

-- create tables for Department, Role, and Employee
-- add respective PK's & FK's 

-- create employee table
-- PK = id
CREATE TABLE department (
id SERIAL PRIMARY KEY,
dept_name VARCHAR(30) UNIQUE NOT NULL
);

-- create role table
-- PK = id / FK = department
CREATE TABLE role (
id SERIAL PRIMARY KEY,
title VARCHAR(30) UNIQUE NOT NULL,
salary DECIMAL NOT NULL, 
department_id INTEGER,
FOREIGN KEY (department)
REFERENCES department(id)
ON DELETE SET NULL 
);

-- create employee table
-- PK = id / FK = role_id & manager_id
CREATE TABLE employee (
id SERIAL PRIMARY KEY, 
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER,
manager_id INTEGER,
FOREIGN KEY (role_id)
REFERENCES role(id)
ON DELETE SET NULL, 
FOREIGN KEY (manager_id)
REFERENCES employee(id)
ON DELETE SET NULL
);