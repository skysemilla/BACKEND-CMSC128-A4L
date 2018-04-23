import db from '../../database';


export const getSubject = ({ subject_code, section_code }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            SUBJECT
          WHERE
            subject_code = ? and section_code = ?;
        `;
    const values = [subject_code, section_code]
    db.query(queryString, values, (err, rows) => {
      if (err) {
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
    // const queryString = `
      // CALL view_subjects()
    // `;
    const queryString = `
      SELECT * FROM SUBJECT;
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

export const getSubjectDay = (json) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    // const queryString = 
    // `
    //       SELECT 
    //         CONCAT(
    //         (SELECT subject_code,section_code, room,start_time,end_time FROM SUBJECT WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD WHERE emp_id = ?)),
    //         (SELECT no_of_students FROM TEACHINGLOAD WHERE emp_id = ?), 
    //         (SELECT * FROM SUBJECT_DAY WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD WHERE emp_id = ?)) 
    //         );
    //     `;

    const queryString =  `
      SELECT * FROM TEACHINGLOAD JOIN SUBJECT_DAY WHERE SUBJECT_DAY.subject_id = TEACHINGLOAD.subject_id ;
    `;
    db.query(queryString, emp_id, (err, results) => {
      if (err) {
        return reject(500);
      }

      if (!results.length) {
        return reject(404);
      }
      console.log(results);
      return resolve(results);
    });
  });
};