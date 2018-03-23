import db from '../../database';

// gets one faculty
export const getFaculty = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            EMPLOYEE
          WHERE
            emp_id = ?
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

// gets all faculty
export const getAllFaculty = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
            SELECT 
              *
            FROM 
              EMPLOYEE
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
