// link with DB to be able to use INSERT statements in node js
import { pool } from "./connection.js";

//Fx to view all employees
async function viewEmpl() {
    try {
        const result = await pool.query('SELECT * FROM employees');
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

//Fx to add a new employee
async function addEmployee(firstName, lastName, role, manager) {
    const query = `
    INSERT INTO employees (first_name, last_name, role, manager)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
    const values = [firstName, lastName, role, manager];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.error('Error executing query', err);
        throw err;
    }
};

//export these 2 functions 
export {
    viewEmpl,
    addEmployee
};