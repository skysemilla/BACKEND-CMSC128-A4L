import db from '../../database';

export const addConsulHours = ({consultation_start_time, consultation_end_time, consultation_place, emp_id, day}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO
      CONSULTATION
      (consultation_id, consultation_start_time, consultation_end_time, consultation_place, emp_id)
      VALUES
      (DEFAULT, ?, ?, ?, ?);
      INSERT INTO
      CONSULTATION_DAY
      (consultation_id, day)
      VALUES
      (DEFAULT, ?)
    `;

    const values = [consultation_start_time, consultation_end_time, consultation_place, emp_id, day];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err.message);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes consultation hours
export const removeConsulHours = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
      DELETE 
        FROM CONSULTATION
      WHERE 
        consultation_id  = ?;
     
    `;

    db.query(queryString, id, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!results.affectedRows) {
        return reject(404);
      }

      return resolve();
    });
  });
};

// removes consultation hours
export const removeConsulHoursDay = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
      DELETE 
        FROM CONSULTATION_DAY
      WHERE 
        consultation_id  = ?;
     
    `;

    db.query(queryString, id, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!results.affectedRows) {
        return reject(404);
      }

      return resolve();
    });
  });
};
/* DELETE 
        FROM CONSULTATION_DAY
      WHERE 
        consultation_id  = ?;  */

// gets a consultation hours
export const getConsulHours = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            CONSULTATION
          WHERE
            consultation_id = ?;
          SELECT 
            *
          FROM 
            CONSULTATION_DAY
          WHERE
            consultation_id = ?
        `;

    db.query(queryString, [id, id], (err, rows) => {
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

