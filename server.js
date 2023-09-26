const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker database.`)
);

// const myJSON = JSON.stringify(inquirer);
const questions = () => {
inquirer.prompt ([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'questions',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role'
        ]}
   ])
   .then ((data) => {
    if (data === 'view all departments'){
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.table(result);
        });
   }})
};

questions();
