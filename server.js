//defining and calling our dependencies
 
const inquirer = require('inquirer');
const Connection = require('./connection/connection');

 
//creating the variable questions and having the prompts appear in the console
 
const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'selection',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role'
            ]
        }
    ])
    //the then statement will determine what happens next after the user selects one of the previous options
    .then((data) => {
        if (data.selection === 'view all departments') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                    console.table(result);
            })
        }
        // if the user selects the view all roles option, it will pull from the role section in the query database
        if (data.selection === 'view all roles') {
            db.query(`SELECT * FROM role`, (err, result) => {
            if (err) {
                console.log(err);
            }
                console.table(result);
            })
        }
        // if the user selects the view all employees option, it will pull from the employee section in the query database
        if (data.selection === 'view all employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) {
                console.log(err);
            }
                console.table(result);
            })
        }
        if (data.selection === 'add a department') {
            // we need to add a blank array in an insert into property in the schema.sql? where they can add a department and that info will be saved as another department in the selection
            inquirer.prompt([
                {
                    name: "department name",
                    message: "what is the name of the department?"
                }
            ])
            // new department will be added into the department table
            .then((response) => {
                Connection
                    .promise()
                    .query(
                        "INSERT INTO department SET ?",
                        response,
                    )
                console.log(`Department ${response.name} has been added.`)
                mainMenu();
            })
        }
        // new role will be added into the role table
        if (data.selection === 'add a role') {
            inquirer.prompt([
                {
                    name: "role name",
                    salary: "salary",
                    department: "department",
                    message: "what is the role name, salary, and the department of the role?"
                }
            ])
            .then((response) => {
                Connection
                .promise()
                .query("INSERT INTO role SET ?", response,
                {   title: answer.roleName,
                    salary: answer.roleSalary,
                    department_id: answer.roleDepartment_Id,
                },

                function(err, results,) 
                {
                console.log(results);
                }
            )
                console.log(`Role ${response.name} has been added.`)
                mainMenu();
            })
        }
        if (data.selection === 'add an employee') {
            inquirer.prompt([
                {
                    name: "role name",
                    salary: "salary",
                    department: "department",
                    message: "what is the role name, salary, and the department of the role?"
                }
            ])
            .then((response) => {
                Connection
                .promise()
                .query("INSERT INTO role SET ?", response,)
                console.log(`Role ${response.name} has been added.`)
                mainMenu();
            });
        }
    });
}
 
questions();
