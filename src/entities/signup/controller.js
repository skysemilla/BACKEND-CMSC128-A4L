import db from '../../database';
var SqlString = require('sqlstring');

//adds an employee
export const addEmployee = ({
  emp_id,
  username,
  password,
  type,
  f_name,
  m_name,
  l_name,
  department,
  college,
  emp_type,
  emp_type_no,
  is_full_time,
  email
}) => {
  return new Promise((resolve, reject) => {
    const values = [
      emp_id,
      username,
      password,
      type,
      f_name,
      m_name,
      l_name,
      department,
      college,
      emp_type,
      emp_type_no,
      is_full_time,
      email
    ];
    const queryString = SqlString.format(
      `
      CALL insert_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0);
    `,
      values
    );

    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      // console.log(results);
      return resolve(results.insertId);
    });
  });
};

// gets an employee
export const getEmployee = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
          SELECT 
            *
          FROM 
            EMPLOYEE
          WHERE
            emp_id_increment = ?;
        `,
      [id]
    );

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      return resolve(rows[0]);
    });
  });
};

// gets an employee
export const checkValid = ({ empid, username, email }) => {
  return new Promise((resolve, reject) => {
    const values = [empid, username, email];
    const queryString = SqlString.format(
      `
          SELECT 
            *
          FROM 
            EMPLOYEE
          WHERE
            emp_id = ? OR
            username = ? OR
            email = ?
        `,
      values
    );

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows[0]);
    });
  });
};
