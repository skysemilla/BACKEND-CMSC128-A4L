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

export const checkExistDayTeachLoad = ({ subject_code, section_code}, json) =>{
  return new Promise((resolve, reject) =>{
    const emp_id = json.emp_id;

                      const queryString = `
                        SELECT COUNT(*) as count FROM
                        (SELECT day from SUBJECT_DAY where subject_id = (SELECT subject_id from SUBJECT where subject_code = ? and section_code = ? ))a,
                        (SELECT day from SUBJECT_DAY where subject_id IN (SELECT subject_id FROM SUBJECT NATURAL JOIN TEACHINGLOAD where emp_id = ?))b
                        WHERE(
                        a.day=b.day
                        );
                      `;

                      // const queryString = `
                      //   SELECT COUNT(*) as count FROM
                      //   (SELECT day from SUBJECT_DAY NATURAL JOIN SUBJECT where subject_code = ? and section_code = ?)a,
                      //   (SELECT day from CONSULTATION_DAY NATURAL JOIN CONSULTATION where emp_id = ?)b
                      //   WHERE(
                      //   a.day=b.day);
                      // `;

    // SELECT COUNT(*) as count FROM
    // (SELECT day from SUBJECT_DAY NATURAL JOIN SUBJECT where subject_code = 'cmsc 11' and section_code = 'a')a,
    // (SELECT day from CONSULTATION_DAY NATURAL JOIN CONSULTATION where emp_id = '000000001')b
    // WHERE(
    // a.day=b.day);

    // const queryString = `
    //   SELECT COUNT(*) as count FROM
    //   (SELECT day from SUBJECT NATURAL JOIN SUBJECT_DAY where subject_code = ? and section_code = ?)a,
    //   (SELECT day from CONSULTATION_DAY NATURAL JOIN CONSULTATION WHERE emp_id = ?)b,
    //   (SELECT day FROM SUBJECT NATURAL JOIN SUBJECT_DAY WHERE subject_id IN(SELECT subject_id FROM SUBJECT NATURAL JOIN TEACHINGLOAD where emp_id = ?))c
    //   WHERE
    //   a.day = b.day OR a.day = c.day OR b.day = c.day;
    // `;

    const values = [subject_code, section_code, emp_id];
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

export const checkExistDayConsultation = ({ subject_code, section_code}, json ) =>{
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;

    const queryString = `
     SELECT COUNT(*) as count FROM
     (SELECT day from SUBJECT_DAY NATURAL JOIN SUBJECT where subject_code = ? and section_code = ?)a,
      (SELECT day from CONSULTATION_DAY NATURAL JOIN CONSULTATION where emp_id = ?)b
      WHERE(
      a.day=b.day);
    `;

    
    const values = [ subject_code, section_code, emp_id];
    db.query(queryString, values, (err, results) =>{
      console.log(results);
      if(err){
        console.log('AHHHHHHHHHHHHK');
        return reject(500);
      }
      return resolve(results[0].count);
    });
  });
}

export const checkExistHourConsultation = ({ subject_code, section_code}, json ) =>{
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;

    const queryString = `
      SELECT COUNT(*) as count FROM
      (SELECT consultation_start_time,consultation_end_time from CONSULTATION WHERE emp_id = ?)a,
      (SELECT start_time, end_time FROM SUBJECT WHERE subject_code = ? and section_code = ?)b
      WHERE(
      (b.start_time > a.consultation_start_time AND b.start_time < a.consultation_end_time) OR
      (b.end_time > a.consultation_start_time AND b.end_time < a.consultation_end_time) OR
      (b.start_time = a.consultation_start_time AND b.end_time = a.consultation_end_time));
    `;

    const values = [ emp_id, subject_code, section_code];
    db.query(queryString, values, (err, results) =>{
      console.log(results);
      if(err){
        console.log('Bepis');
        return reject(500);
      }
      return resolve(results[0].count);
    });
  });
}

export const checkExistHourTeachLoad = ({ subject_code, section_code}, json) =>{
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

    // const queryString = `
    //   SELECT COUNT(*) as count FROM 
    //   (SELECT start_time, end_time FROM SUBJECT 
    //   WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD 
    //   WHERE emp_id = ?))a, (SELECT start_time, end_time FROM 
    //   SUBJECT WHERE subject_code = ? and 
    //   section_code = ? limit 1)b 
    //   WHERE(
    //   (b.start_time < b.end_time and b.end_time < a.start_time) OR 
    //   (b.start_time > a.end_time and b.end_time > b.start_time) OR 
    //   (a.start_time > b.start_time and b.end_time > b.start_time) OR
    //   (b.start_time < a.end_time and b.end_time > a.end_time));
    //   `;

    const queryString = `
      SELECT COUNT(*) as count FROM
      (SELECT start_time,end_time from TEACHINGLOAD NATURAL JOIN SUBJECT WHERE emp_id = ?)a,
      (SELECT start_time, end_time FROM SUBJECT WHERE subject_code = ? and section_code = ?)b
      WHERE(
      (b.start_time > a.start_time AND b.start_time < a.end_time) OR
      (b.end_time > a.start_time AND b.end_time < a.end_time) OR
      (b.end_time = a.end_time AND b.start_time = a.start_time));
    `;

    const values = [emp_id, subject_code, section_code];

    db.query(queryString, values, (err, results) =>{
      console.log(results);
      if (err){
        console.log("wsswswswswsws");
        return reject(500);
      }

      return resolve(results[0].count);
    });
  });
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

      var newArray = [];
      var visitedArray = []; 
      var i, j;
      for(i=0;i<rows[0].length;i++){
        var daysArray = [];
        if(visitedArray.includes(rows[0][i].teachingload_id)){

        }else{
          for(j=0;j<rows[0].length;j++){
            if(rows[0][i].teachingload_id==rows[0][j].teachingload_id){
              daysArray.push(rows[0][j].day);
            }
          }
          rows[0][i].day = daysArray;
          visitedArray.push(rows[0][i].teachingload_id);
          newArray.push(rows[0][i]);
        }
      }

      return resolve(newArray);
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