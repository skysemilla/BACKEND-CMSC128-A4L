import db from '../../database';
import sha256 from '../../hash';

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
  is_full_time,
  college,
  semester,
  year
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL insert_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const hpassword = sha256(password);

    const values = [
      emp_id,
      username,
      hpassword,
      type,
      f_name,
      m_name,
      l_name,
      department,
      is_full_time,
      college,
      semester,
      year
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
