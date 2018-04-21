import db from '../../database';

export const addTeachLoad = ({ no_of_students, subject_code, section_code, room, days, start_time, end_time, creditw},json) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const queryString = `
      INSERT INTO TEACHINGLOAD
          (emp_id, no_of_students, subject_id)
        VALUES
          (?, ?, (SELECT subject_id FROM SUBJECT 
                  WHERE subject_code = ? AND
                        section_code = ? limit 1));
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

export const checkExistDay = ({ subject_code, section_code}, json) =>{
  return new Promise((resolve, reject) =>{
    const emp_id = json.emp_id;
    const queryString = `
      SELECT COUNT(*) as count FROM 
      (SELECT day1, day2 FROM SUBJECT_DAY WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD WHERE emp_id = ?))a, 
      (SELECT day1, day2 FROM SUBJECT_DAY WHERE subject_id = (SELECT subject_id from SUBJECT WHERE subject_code = ? and section_code = ? limit 1))b
      WHERE a.day1 = b.day1 OR
      a.day1 = b.day2 OR
      a.day2 = b.day1 OR
      a.day2 = b.day2
    `

    const values = [emp_id, subject_code, section_code];
    db.query(queryString, values, (err, results) =>{
      console.log(results);
      if (err){
        console.log('swswswswswsw');
        return reject(500);
      }
      return resolve(results[0].count);
    });
  });
}

export const checkExistHour = ({ subject_code, section_code}, json) =>{
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    //  const queryString = `
    //   SELECT COUNT(*) as count FROM (SELECT start_time, end_time FROM SUBJECT 
    //   WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD 
    //   WHERE emp_id = ?))a, (SELECT start_time, end_time FROM 
    //   SUBJECT WHERE subject_code = ? and 
    //   section_code = ? limit 1)b 
    //   WHERE
    //   (b.start_time < b.end_time and b.end_time < a.start_time) OR 
    //   (b.start_time > a.end_time and b.end_time > b.start_time) OR 
    //   (a.start_time > b.start_time and b.end_time > b.start_time);
    // `;

    const queryString = `
SELECT COUNT(*) as count FROM 
(SELECT start_time, end_time FROM SUBJECT 
WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD 
WHERE emp_id = ?))a, (SELECT start_time, end_time FROM 
SUBJECT WHERE subject_code = ? and 
section_code = ? limit 1)b 
WHERE(
(b.start_time < b.end_time and b.end_time < a.start_time) OR 
(b.start_time > a.end_time and b.end_time > b.start_time) OR 
(a.start_time > b.start_time and b.end_time > b.start_time) OR
(b.start_time < a.end_time and b.end_time > a.end_time));
    `;
    const values = [emp_id,subject_code, section_code];

    db.query(queryString, values, (err, results) =>{
      console.log(results);
      if (err){
        console.log("wsswswswswsws");
        return reject(500);
      }

      return resolve(results[0].count);
    });
  })
}

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

export const editTeachLoad = ({ no_of_students, emp_id, subject_code, section_code, room, days, start_time, end_time, creditw, teachingload_id}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE TEACHINGLOAD
        SET
          no_of_students = ?
        WHERE
          teachingload_id=?;
    `;
   
    const values = [no_of_students, teachingload_id];

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

export const getTeachEmp = (json) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const queryString = `
        call view_employee_teachingload(?)
        `;

    db.query(queryString, [emp_id], (err, rows) => {
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
// SELECT COUNT(*) as count FROM 
// (SELECT start_time, end_time FROM SUBJECT 
// WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD 
// WHERE emp_id = ?))a, (SELECT start_time, end_time FROM 
// SUBJECT WHERE subject_code = ? and 
// section_code = ? limit 1)b 
// WHERE(
// (b.start_time < b.end_time and b.end_time < a.start_time) OR 
// (b.start_time > a.end_time and b.end_time > b.start_time) OR 
// (a.start_time > b.start_time and b.end_time > b.start_time) OR
// (b.start_time < a.end_time and b.end_time > a.end_time));