import db from '../../database';

// enables a faculty
export const enableFaculty = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE EMPLOYEE
      SET
        is_active = 1
      WHERE
        emp_id = ?
    `;

    db.query(queryString, empid, (err, res) => {
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
    const queryString = `
        UPDATE EMPLOYEE
        SET
          is_active = 0
        WHERE
          emp_id = ?
      `;

    db.query(queryString, empid, (err, res) => {
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
    const queryString = `
        SELECT 
            *
        FROM 
            EMPLOYEE
        WHERE
            f_name = ? OR
            m_name = ? OR
            l_name = ?
        `;

    var values = [name, name, name];

    db.query(queryString, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      return resolve(rows);
    });
  });
};

// search a faculty by id
export const getFacultyById = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        SELECT 
        *
        FROM 
        EMPLOYEE
        WHERE
        emp_id = ?
    `;

    db.query(queryString, empid, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      return resolve(rows);
    });
  });
};
