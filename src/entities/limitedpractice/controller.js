import db from '../../database';

export const addLimitedPractice = ({
  haveApplied,
  date_submitted,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO
      LIMITED_PRACTICE
      (haveApplied,date_submitted,emp_id)
      VALUES
      (?, ?, ?)
    `;
    
    const values = [
      haveApplied,
      date_submitted,
      emp_id
    ];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};


export const removeLimitedPractice = ({ limited_practice_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        DELETE 
          FROM LIMITED_PRACTICE
        WHERE 
          limited_practice_id = ?
      `;

    db.query(queryString, limited_practice_id, (err, results) => {
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


export const editLimitedPractice = ({
  limited_practice_id,
  haveApplied,
  date_submitted,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        UPDATE LIMITED_PRACTICE
        SET
          haveApplied = ?,
          date_submitted = ?,
          emp_id = ?
        WHERE
          limited_practice_id = ?
      `;

    const values = [
      haveApplied,
      date_submitted,
      emp_id,
      limited_practice_id
    ];

    db.query(queryString, values, (err, res) => {
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

export const getLimitedPractice = ({ limited_practice_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            LIMITED_PRACTICE
          WHERE
          limited_practice_id = ?
        `;

    db.query(queryString, limited_practice_id, (err, rows) => {
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




export const getAllLimitedPractice = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
        SELECT *
        FROM LIMITED_PRACTICE
      `;

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};
