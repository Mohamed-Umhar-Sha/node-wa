// db.js

const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',     // MySQL server hostname
  user: 'thamim12',          // MySQL username
  password: '',  // MySQL password (replace with your own)
  database: 'mydatabase' // MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

module.exports = connection;
