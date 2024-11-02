// array of questions in the terminal prompt
// create here and then export it
// index.js file will then import it
import inquirer from 'inquirer';

const mainMenuQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Exit'
        ]
    }
];

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employee`s first name?',
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the employee`s last name?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee`s role?',
        choices: [
            'Sales Lead',
            'Salesperson',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Legal Team Lead',
            'Lawyer',
            'Customer Service'
        ]
        // DONE provide a list type dropdown for e.role
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Who is the employee`s manager?',
        choices: [
            'None',
            'John Doe',
            'Mikey Chan',
            'Alex Rodrigo',
            'Kevin Chesney',
            'Rachel Sings',
            'Malia Salamasina'
        ]
        // DONE provide a list type dropdown for manager name
    }
];
const updateEmployeeRoleQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'Which employee`s role do you want to update?',
        choices: [
            'John Doe',
            'Mikey Chan',
            'Alex Rodrigo',
            'Kevin Chesney',
            'Rachel Sings',
            'Malia Salamasina',
            'Sam Iam',
            'Sarah Bareels'
        ]
        // DONE provide a list type dropdown for employees
    },
    {
        type: 'list',
        name: 'assign_role',
        message: 'Which role do you want to assign the selected employee?',
        choices: [
            'Sales Lead',
            'Salesperson',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Legal Team Lead',
            'Lawyer',
            'Customer Service'
        ]
        // DONE provide a list type dropdown of roles
    }
];
const addRoleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the role?',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?'
    },
    // DONE provide a list option for a user to select a department
    {
        type: 'list',
        name: 'department',
        message: 'Which department does the role belong to?',
        choices: [
            'Engineering',
            'Finance',
            'Sales',
            'Legal',
            'Service'
        ]
    }
];
const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'dept_name',
        message: 'What is the name of the department?'
    }
];

export {
    mainMenuQuestions,
    addEmployeeQuestions,
    updateEmployeeRoleQuestions,
    addRoleQuestions,
    addDepartmentQuestions
};