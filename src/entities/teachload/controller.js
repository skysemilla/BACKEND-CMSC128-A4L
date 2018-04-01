import db from '../../database';

export const addTeachLoad = ({ emp_id, no_of_students, subject_code, section_code, room, days, start_time, end_time, creditw}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO TEACHINGLOAD
          (emp_id, no_of_students, subject_id)
        VALUES
          (?, ?, (SELECT subject_id FROM SUBJECT 
                  WHERE subject_code = ? AND
                        section_code = ? ));
    `;
    //FIX QUERY LATER ON ADD SUBJECT IF SUBJECT DOES NOT EXIST
    // console.log(no_of_students);
    const values = [emp_id, no_of_students, subject_code, section_code];

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

export const editTeachLoad = ({ no_of_students, emp_id, subject_code, section_code, room, days, start_time, end_time, creditw}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE TEACHINGLOAD
        SET
          no_of_students = ?
        WHERE
          emp_id = ? AND
          subject_id = (SELECT subject_id FROM SUBJECT 
                        WHERE subject_code = ? AND
                              section_code = ? );
    `;
   
    const values = [no_of_students, emp_id, subject_code, section_code];

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

export const getTeachLoad = ({ teachingload_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            TEACHINGLOAD
          WHERE
            teachingload_id = ?;
        `;

    db.query(queryString, teachingload_id, (err, rows) => {
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

export const getTeachEmp = ({ emp_id }) => {
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
