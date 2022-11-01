const inquirer = require('inquirer');
const fs = require("fs");

const userInput = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'view all departments':
                    selectDepartments();
                    break;
                case 'view all roles':
                    selectRoles();
                    break;
                case 'view all employees':
                    selectEmployees();
                    break;
                case 'add a department':
                    addDepartment();
                    break;
                case 'add a role':
                    addRole();
                    break;
                case 'add an employee':
                    addEmployee();
                    break;
                case 'update an employee role':
                    promptUpdateRole();
                    break;
                default:
                    process.exit();
            }
        });
};


const addDepartment = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name the department you would like to add?',
        validate: departmentName => {
            if (departmentName) {
                return true;
            } else {
                console.log('Please enter the name of your department!');
                return false;
            }
        }
    }
    ])
        .then(name => {
        })
}


const addRole = () => {

            inquirer.prompt(
                [{
                    type: 'input',
                    name: 'title',
                    message: 'Enter the name of your title ',
                    validate: titleName => {
                        if (titleName) {
                            return true;
                        } else {
                            console.log('Please enter your title name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'department',
                    message: 'Which department are you from?',
                    choices: departmentChoices
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter your salary ',
                    validate: salary => {
                        if (salary) {
                            return true;
                        } else {
                            console.log('Please enter your salary!');
                            return false;
                        }
                    }
                }
                ]
            )
                .then(({ title, department, salary }) => {
                }).then(() => selectRoles())

        }


const addEmployee = (roles) => {

                inquirer.prompt(
                    [{
                        type: 'input',
                        name: 'firstName',
                        message: 'What is the employees first name ',
                        validate: firstName => {
                            if (firstName) {
                                return true;
                            } else {
                                console.log('Please enter the employees first name!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: 'What is the employees last name ',
                        validate: lastName => {
                            if (lastName) {
                                return true;
                            } else {
                                console.log('Please enter the employees last name!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: 'What is the employees role?',
                        choices: titleChoices
                    },
                    {
                        type: 'list',
                        name: 'manager',
                        message: 'Who is the employees manager?',
                        choices: managerChoices
                    }

                    ])
                    .then(({ firstName, lastName, role, manager }) => {
                    })
                    .then(() => selectEmployees())
            }


const promptUpdateRole = () => {

            inquirer.prompt(
                [
                    {
                        type: 'list',
                        name: 'role',
                        message: 'Which role do you want to update?',
                        choices: roleChoices
                    }
                ]
            )
                .then(role => {
                    console.log(role);
                    inquirer.prompt(
                        [{
                            type: 'input',
                            name: 'title',
                            message: 'Enter the name of your title ',
                            validate: titleName => {
                                if (titleName) {
                                    return true;
                                } else {
                                    console.log('Please enter your title name!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'salary',
                            message: 'Enter your salary ',
                            validate: salary => {
                                if (salary) {
                                    return true;
                                } else {
                                    console.log('Please enter your salary!');
                                    return false;
                                }
                            }
                        }]
                    )
                        .then(({ title, salary }) => {
                        })
                        .then(() => userInput())
                })
        }

userInput();