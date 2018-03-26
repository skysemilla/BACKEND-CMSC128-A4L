import db from '../../database';


export const getSubject = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            SUBJECT
          WHERE
            id = ?
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

// gets all subjects
export const getSubjects = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL view_subjects()
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

// adds a sample
export const addSubject = ({ subject_code, section_code, isLecture, units, room, start_time, end_time }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            CALL add_subject(?,?,?,?,?,?,?)`;

    const values = [subject_code, section_code, isLecture, units, room, start_time, end_time];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a sample
export const removeSubject = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_subject(?)
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
export const editSubject = ({subject_id, subject_code, section_code, isLecture, units, room, start_time, end_time}) => {
  return new Promise((resolve, reject) => {
    const queryString = `CALL update_subject(?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [subject_id, subject_code, section_code, isLecture, units, room, start_time, end_time];

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
