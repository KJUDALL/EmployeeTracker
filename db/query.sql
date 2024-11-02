-- fx to see list of all employees
-- should show e.id, e.first name, e.last name, r.title, d.name, r.salary and e.e.manager first and last name

-- LEFT JOIN to combine 
SELECT 
e.id, 
e.first_name,
e.last_name,
r.title,d.name AS "Department Name", 
r.salary, 
CASE 
    WHEN em.id IS NULL THEN 'NULL'
    ELSE CONCAT_WS(' ', em.first_name, em.last_name) END AS "Manager" 
FROM employee e 
LEFT JOIN 
role r ON e.role_id = r.id
LEFT JOIN 
department d ON r.department = d.id 
LEFT JOIN 
employee em ON e.manager_id = em.id;

-- fx to see list of all roles 
-- should show r.id, r.title, d.name and r.salary 
SELECT r.id, 
r.title, 
d.name AS "Department Name", 
r.salary 
FROM role r
INNER JOIN department d 
ON r.department = d.id ;

-- fx to see list of all departments 
-- should show d.id and d.name
SELECT d.id, 
d.name AS "Department Name"
FROM department d;


