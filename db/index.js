const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

con.connect((err) => {
    if(err) throw err
    console.log("[DATABASE] Database is running.");
});

module.exports = con;


