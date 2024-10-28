-- use this file to insert data into the pre-created fields from schema.sql file
INSERT INTO department (id, name) 
VALUES (1, 'Human Resources'),
(2, 'Customer Success'),
(3, 'Engineering'), 
(4, 'Sales'), 
(5, 'Marketing');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Software Engineer', 100000, 3),
(2, 'Product Manager', 150000, 3),
(3, 'Client Success Manager', 70000, 2),
(4, 'Payroll Specialist', 70000, 1),
(5, 'Account Executive', 80000, 4),
(6, 'Engineering Manager', 120000, 3),
(7, 'Marketing Strategist', 75000, 5), 
(8, 'HR Manager', 90000, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Kenzie', 'Joe', 1, 6), 
(2, 'Adam', 'Holland', 3, NULL), 
(3, 'George', 'Clooney', 5, NULL), 
(4, 'Auston', 'Matthews', 6, NULL), 
(5, 'Hannah', 'Frye', 1, 6), 
(6, 'Nathan', 'Romero', 4, 8), 
(7, 'Chris', 'Evanson', 2, NULL); 