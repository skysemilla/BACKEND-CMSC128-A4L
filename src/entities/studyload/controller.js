import db from '../../database';

export const addStudyLoad = ({
  degree,
  university,
  isFullTime,
  credits,
  emp_id,
  subject_code
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO
      STUDYLOAD
      (degree, university, isFullTime, credits, emp_id, subject_code)
      VALUES
      (?, ?, ?, ?, ?, ?)
    `;

    const values = [
      degree,
      university,
      isFullTime,
      credits,
      emp_id,
      subject_code
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

export const removeStudyLoad = ({ studyload_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        DELETE 
          FROM STUDYLOAD
        WHERE 
          studyload_id = ?
      `;

    db.query(queryString, studyload_id, (err, results) => {
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

export const editStudyLoad = ({
  studyload_id,
  degree,
  university,
  isFullTime,
  credits,
  emp_id,
  subject_code
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        UPDATE STUDYLOAD
        SET
          degree = ?,
          university = ?,
          isFullTime = ?,
          credits = ?,
          emp_id = ?, 
          subject_code = ?
        WHERE
          studyload_id = ?
      `;

    const values = [
      degree,
      university,
      isFullTime,
      credits,
      emp_id,
      subject_code,
      studyload_id
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

export const getStudyLoad = ({ studyload_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            STUDYLOAD
          WHERE
          studyload_id = ?
        `;

    db.query(queryString, studyload_id, (err, rows) => {
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
export const getStudyEmp = ({ emp_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            STUDYLOAD
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
export const getAllStudyLoad = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
        SELECT *
        FROM STUDYLOAD
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
