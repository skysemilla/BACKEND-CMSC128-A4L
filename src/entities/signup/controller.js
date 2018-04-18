import db from '../../database';

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
    const queryString = `
      CALL insert_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0);
    `;

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

    db.query(queryString, values, (err, results) => {
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
    const queryString = `
          SELECT 
            *
          FROM 
            EMPLOYEE
          WHERE
            emp_id_increment = ?;
        `;

    db.query(queryString, id, (err, rows) => {
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
