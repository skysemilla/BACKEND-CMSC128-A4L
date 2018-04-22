import db from '../../database';
var SqlString = require('sqlstring');

// enables a faculty
export const enableFaculty = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      UPDATE EMPLOYEE
      SET
        is_active = 1
      WHERE
        emp_id = ?
    `,
      [empid]
    );

    db.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!res.affectedRows) {
        return reject(404);
      }

      return resolve();
    });
  });
};

// disables a faculty
export const disableFaculty = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
        UPDATE EMPLOYEE
        SET
          is_active = 0
        WHERE
          emp_id = ?
      `,
      [empid]
    );

    db.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!res.affectedRows) {
        return reject(404);
      }

      return resolve();
    });
  });
};

// search a faculty by name
export const getFacultyByName = ({ name }) => {
  return new Promise((resolve, reject) => {
    var values = [name, name, name];
    const queryString = SqlString.format(
      `
        SELECT 
            *
        FROM 
            EMPLOYEE
        WHERE
            f_name = ? OR
            m_name = ? OR
            l_name = ?
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

      return resolve(rows);
    });
  });
};

// search a faculty by id
export const getFacultyById = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
        SELECT 
        *
        FROM 
        EMPLOYEE
        WHERE
        emp_id = ?
    `,
      [empid]
    );

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};
