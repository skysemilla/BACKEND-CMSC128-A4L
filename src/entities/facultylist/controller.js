import db from '../../database';
var SqlString = require('sqlstring');

// gets one faculty
export const getFaculty = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
          call view_employee_by_id(?);
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

// gets all faculty
export const getAllFaculty = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM EMPLOYEE WHERE type = 'FACULTY';
    `;

    db.query(queryString, (err, rows) => {
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
