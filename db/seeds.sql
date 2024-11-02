-- use this file to insert data into the pre-created fields from schema.sql file
-- add field data to dept table 
INSERT INTO department (name) 
VALUES ('Human Resources'),
('Customer Success'),
('Engineering'), 
('Sales'), 
('Marketing');

-- add field data to role table
INSERT INTO role (title, salary, department)
VALUES ('Software Engineer', 100000, 3),
('Product Manager', 150000, 3),
('Client Success Manager', 70000, 2),
('Payroll Specialist', 70000, 1),
('Account Executive', 80000, 4),
('Engineering Manager', 120000, 3),
('Marketing Strategist', 75000, 5), 
('HR Manager', 90000, 1);

-- add field data to employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Adam', 'Holland', 8, NULL), 
('George', 'Clooney', 5, NULL), 
('Auston', 'Matthews', 6, NULL), 
('Chris', 'Evanson', 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Kenzie', 'Joe', 1, 17), 
('Hannah', 'Frye', 1, 17), 
('Nathan', 'Romero', 4, 15);
