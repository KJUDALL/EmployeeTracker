// import index.js data
import inquirer from "inquirer";
import Database from './connection.js';
import {
    mainMenuQuestions,
    addEmployeeQuestions,
    updateEmployeeRoleQuestions,
    addRoleQuestions,
    addDepartmentQuestions,
} from './prompts.js';

//this file should have a function init
//inquirer - choices -- all the options
//.then - select - different function
// each function listed - call the queries -

// step 1 - Initialize Application:

// Display main menu choices using Inquirer.
// Handle user selection and call the appropriate function.

// step 2 - View Departments, Employees, Roles:

// Query the database and display results.

// step 3 - Add Department:

// Prompt user for department details.
// Insert new department into the database.

// step 4 - Add Role:

// Prompt user for role details.
// Insert new role into the database.

// step 5 - Add Employee:

// Prompt user for employee details.
// Insert new employee into the database.

// step 6 - Update Employee Role:

// Prompt user for employee and new role details.
// Update employee role in the database.