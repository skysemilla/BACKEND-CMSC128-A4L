import db from '../../database';

// gets all fsr
export const getAllFSR = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
        SELECT 
            *
        FROM 
            EMPLOYEE a, EMPLOYEE_FSR b
        WHERE
            a.emp_id = b.emp_id
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

// gets all pending FSR
export const getPendingFSR = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
    SELECT 
        *
    FROM 
        EMPLOYEE
    WHERE
        emp_id
    AND
        is_being_approved = 1;
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
