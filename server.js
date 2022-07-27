const express = require('express');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'campbc',
    database: 'hrmanager'
  },
  console.log('Connected to hrmanager database.')
);
 
// // Get all departments
// app.get('/api/departments', (req, res) => {
//   const sql = `SELECT * FROM departments`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// Get all roles
app.get('/api/roles', (req, res) => {
  const sql = `SELECT * FROM roles`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// // Get all employees
// app.get('/api/employees', (req, res) => {
//   const sql = `SELECT * FROM employees`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });




// // test hrmanager db
// db.query(`SELECT * FROM employees`, (err, rows) => {
//   console.log(rows);
// });

// // GET a single employee
// db.query(`SELECT * FROM employees WHERE id = 2`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// // Add an employee
// const sql = `INSERT INTO employees (first_name, last_name, manager_id) 
//               VALUES (?,?,?)`;
// const params = ['Sam', 'Smith', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// // Delete a role
// db.query(`DELETE FROM roles WHERE id = ?`, 3, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });


// // Add a role
// const sql = `INSERT INTO roles (title, salary) 
//               VALUES (?,?)`;
// const params = ['Customer Service', '80000', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });


// db.query(`SELECT * FROM departments`, (err, rows) => {
//   console.log(rows);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });

// // Start server after DB connection
// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected.');
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });    