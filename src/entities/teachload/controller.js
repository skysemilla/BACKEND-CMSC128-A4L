import db from '../../database';

export const addTeachLoad = ({ emp_id, noOfStudents, subject_code }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO
      TEACHINGLOAD
      (emp_id, noOfStudents, subject_code)
      VALUES
      (?, ?, ?)
    `;

    const values = [emp_id, noOfStudents, subject_code];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

export const removeTeachLoad = ({ teachingload_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        DELETE 
          FROM TEACHINGLOAD
        WHERE 
          teachingload_id = ?
      `;

    db.query(queryString, teachingload_id, (err, results) => {
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

export const editTeachLoad = ({
  teachingload_id,
  emp_id,
  noOfStudents,
  subject_code
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        UPDATE TEACHINGLOAD
        SET
          noOfStudents = ?,
          emp_id = ?,
          subject_code = ?
        WHERE
          teachingload_id = ?
      `;

    const values = [teachingload_id, emp_id, noOfStudents, subject_code];

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

export const getTeachLoad = ({ emp_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            TEACHINGLOAD
          WHERE
            emp_id = ?
        `;

    db.query(queryString, emp_id, (err, rows) => {
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

export const getAllTeachLoad = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT *
          FROM TEACHINGLOAD
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
