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
 
// Get all departments
app.get('/api/departments', (req, res) => {
  const sql = `SELECT * FROM departments`;

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

// app.get('/api/role', (req, res) => {
//   const sql = `SELECT * FROM role`;

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

// app.get('/employee', (req, res) => {
//   const sql = `SELECT * FROM role`;

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

// Get a single department
app.get('/api/departments/:id', (req, res) => {
  const sql = `SELECT * FROM departments WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});


// // test employees db
// db.query(`SELECT * FROM workers`, (err, rows) => {
//   console.log(rows);
// });

// // GET a single worker
// db.query(`SELECT * FROM workers WHERE id = 2`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete a department
app.delete('/api/departments/:id', (req, res) => {
  const sql = `DELETE FROM departments WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

// Create a deparment
app.post('/api/departments', ({ body }, res) => {
  const errors = inputCheck(Id, 'name');
  if (errors) {
    const sql = `INSERT INTO s (name)
  VALUES (?)`;
const params = [body.name];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'success',
    data: body
  });
});

    res.status(400).json({ error: errors });
    return;
  }
});


// // Create a worker
// const sql = `INSERT INTO workers (id, first_name, last_name, department_role) 
//               VALUES (?,?,?,?)`;
// const params = [9, 'Sam', 'Smith', 1];

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
    