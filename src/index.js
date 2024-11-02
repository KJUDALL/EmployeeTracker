// import index.js data
import inquirer from "inquirer";
import { connectToDb } from '../src/connection.js';
import {
    mainMenuQuestions,
    addEmployeeQuestions,
    updateEmployeeRoleQuestions,
    addRoleQuestions,
    addDepartmentQuestions,
} from '../lib/prompts.js';

import {
    viewEmployees,
    addEmployee,
    viewDepartments,
    addDepartment,
    viewRoles,
    addRole,
    updateEmployeeRole
} from '../lib/queries.js';

// step 1 - Initialize Application:
// Display main menu choices using Inquirer.
// Handle user selection and call the appropriate function.
// init fx for initialization of app
async function init() {
    await connectToDb();
    mainMenu();
};

//handlers fx to handle all user choices
const handlers = {
    'View Department': handleViewDepartments,
    'View Employee': handleViewEmployees,
    'View Roles': handleViewRoles,
    'Add Department': handleAddDepartment,
    'Add Employee': handleAddEmployee,
    'Add Role': handleAddRole,
    'Update Employee Role': handleUpdateEmployeeRole
};

//main menu fx to loop back to main menu after each choice
async function mainMenu() {
    const answers = await inquirer.prompt(mainMenuQuestions);
    const handler = handlers[answers.choice];
    if (handler) {
        await handler();
    } else {
        console.log('Invalid Choice');
    }
    mainMenu();
    // line 44 does a loop back to the main menu after handling users choice
};

// step 2 - View Departments, Employees, Roles:
// Query the database and display results.
async function handleViewDepartments() {
    const departments = await viewDepartments();
    console.table(departments);
};

async function handleViewEmployees() {
    const employees = await viewEmployees();
    console.table(employees);
};

async function handleViewRoles() {
    const roles = await viewRoles();
    console.table(roles);
};

// step 3 - Add Department:
// Prompt user for department details.
// Insert new department into the database.
async function handleAddDepartment() {
    const answers = await inquirer.prompt(addDepartmentQuestions);
    await addDepartment(answers.name);
    console.log('Department added successfully!');
};

// step 4 - Add Role:
// Prompt user for role details.
// Insert new role into the database.
async function handleAddRole() {
    const answers = await inquirer.prompt(addRoleQuestions);
    await addRole(answers.title, answers.salary, answers.department);
    console.log('Role added successfully!');
};

// step 5 - Add Employee:
// Prompt user for employee details.
// Insert new employee into the database.
async function handleAddEmployee() {
    const answers = await inquirer.prompt(addEmployeeQuestions);
    await addEmployee(answers.firstName, answers.lastName, answers.role, answers.manager);
    console.log('Employee added successfully!');
};

// step 6 - Update Employee Role:
// Prompt user for employee and new role details.
// Update employee role in the database.
async function handleUpdateEmployeeRole() {
    const answers = await inquirer.prompt(updateEmployeeRoleQuestions);
    await updateEmployeeRole(answers.title, answers.salary, answers.department);
    console.log('Employee role updated successfully!')
};


//call the init function 
init();