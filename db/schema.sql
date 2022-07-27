DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS  roles;
DROP TABLE IF EXISTS employees;


CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);

-- CREATE TABLE roles (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(50) NOT NULL,
--   salary DECIMAL,
--   department_id INTGER

-- );

-- CREATE TABLE employees (
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   role_id INTEGER, 
--   manager_id INTEGER
-- );




