const express = require('express');
const mysql = require('mysql2');

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
    database: 'employees'
  },
  console.log('Connected to employee database.')
);
 

// Get all workers
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
app.get('/api/role', (req, res) => {
  const sql = `SELECT * FROM role`;

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
app.get('/employee', (req, res) => {
  const sql = `SELECT * FROM role`;

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

// // Get a single worker
// app.get('/api/workers/:id', (req, res) => {
//   const sql = `SELECT * FROM workers WHERE id = ?`;
//   const params = [req.params.id];

//   db.query(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: row
//     });
//   });
// });


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

// // Delete a worker
// db.query(`DELETE FROM workers WHERE id = ?`, 9,  (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });
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



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
    