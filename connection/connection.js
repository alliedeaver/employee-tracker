const mysql = require('mysql2');

//connecting mysql to the database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker database.`)
);

module.export = db;