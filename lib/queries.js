// link with DB to be able to use INSERT statements in node js
import { pool } from "../src/connection.js";

//Fx to view all employees
async function viewEmployees() {
    try {
        const result = await pool.query('SELECT * FROM employee');
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

//Fx to add a new employee
async function addEmployee(firstName, lastName, roleId, managerId) {
    const query = `
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
    const values = [firstName, lastName, roleId, managerId];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

//fx to view all departments
async function viewDepartments() {
    try {
        const result = await pool.query('SELECT * FROM department')
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

//fx to add department
async function addDepartment(dept_name) {
    const query = `
    INSERT INTO department (name)
    VALUES ($1)
    RETURNING *;
    `;
    const values = [name];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

//fx to view all roles
async function viewRoles() {
    try {
        const result = await pool.query('SELECT * FROM role')
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

//fx to add a role
async function addRole(title, salary, departmentId) {
const query = `
INSERT INTO role (title, salary, department_id)
VALUES ($1, $2, $3)
RETURNING *;
`;
const values = [title, salary, departmentId];

try {
    const result = await pool.query(query, values);
    return result.rows[0];
} catch (err) {
    console.error('Error executing query', err);
    throw err;
}
};

//fx to update employee role
async function updateEmployeeRole(roleId, title, salary, departmentId) {
    const query = `
    UPDATE role
    SET title= $1, salary= $2, department_id = $3
    WHERE id = $4
    RETURNING *;
    `;
    const values = [title, salary, departmentId, roleId];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
    };

//export these functions 
export {
    viewEmployees,
    addEmployee, 
    viewDepartments,
    addDepartment,
    viewRoles, 
    addRole, 
    updateEmployeeRole
};