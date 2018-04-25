import db from '../../database';
var SqlString = require('sqlstring');


export const addTeachLoad = ({ no_of_students, subject_code, section_code, room, days, start_time, end_time, creditw},json) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const values = [emp_id, no_of_students, subject_code, section_code];

    const queryString = SqlString.format(
      `
      INSERT INTO TEACHINGLOAD
          (emp_id, no_of_students, subject_id)
        VALUES
          (?, ?, (SELECT subject_id FROM SUBJECT 
                  WHERE subject_code = ? AND
                        section_code = ? limit 1));
      `,
      values);

    db.query(queryString, (err, results) => {
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
    const values = [subject_code, section_code, emp_id];


    const queryString = SqlString.format(`
      SELECT COUNT(*) as count FROM
      (SELECT day from SUBJECT_DAY where subject_id = (SELECT subject_id from SUBJECT where subject_code = ? and section_code = ? ))a,
      (SELECT day from SUBJECT_DAY where subject_id IN (SELECT subject_id FROM SUBJECT NATURAL JOIN TEACHINGLOAD where emp_id = ?))b
      WHERE(a.day=b.day);`,values);

    db.query(queryString, (err, results) =>{
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
    const values = [ subject_code, section_code, emp_id];

    const queryString = SqlString.format(`
     SELECT COUNT(*) as count FROM
     (SELECT day from SUBJECT_DAY NATURAL JOIN SUBJECT where subject_code = ? and section_code = ?)a,
      (SELECT day from CONSULTATION_DAY NATURAL JOIN CONSULTATION where emp_id = ?)b
      WHERE(
      a.day=b.day);
    `, values);

    
    db.query(queryString, (err, results) =>{
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
    const values = [ emp_id, subject_code, section_code];

    const queryString = SqlString.format(`
      SELECT COUNT(*) as count FROM
      (SELECT consultation_start_time,consultation_end_time from CONSULTATION WHERE emp_id = ?)a,
      (SELECT start_time, end_time FROM SUBJECT WHERE subject_code = ? and section_code = ?)b
      WHERE(
      (b.start_time > a.consultation_start_time AND b.start_time < a.consultation_end_time) OR
      (b.end_time > a.consultation_start_time AND b.end_time < a.consultation_end_time) OR
      (b.start_time = a.consultation_start_time AND b.end_time = a.consultation_end_time));
    `,values);

    db.query(queryString, (err, results) =>{
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
    const values = [emp_id, subject_code, section_code];

    const queryString = SqlString.format(`
      SELECT COUNT(*) as count FROM
      (SELECT start_time,end_time from TEACHINGLOAD NATURAL JOIN SUBJECT WHERE emp_id = ?)a,
      (SELECT start_time, end_time FROM SUBJECT WHERE subject_code = ? and section_code = ?)b
      WHERE(
      (b.start_time > a.start_time AND b.start_time < a.end_time) OR
      (b.end_time > a.start_time AND b.end_time < a.end_time) OR
      (b.end_time = a.end_time AND b.start_time = a.start_time));
    `,values);


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
    const queryString = SqlString.format(`
        DELETE 
          FROM TEACHINGLOAD
        WHERE 
          teachingload_id = ?
      `,teachingload_id);

    db.query(queryString, (err, results) => {
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

export const editTeachLoad = ({ no_of_students, teachingload_id}) => {
  return new Promise((resolve, reject) => {
    const values = [no_of_students, teachingload_id];

    const queryString = SqlString.format(`
      UPDATE TEACHINGLOAD
        SET
          no_of_students = ?
        WHERE
          teachingload_id=?;
    `,values);
   

    db.query(queryString, (err, res) => {
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
    const queryString = SqlString.format(`
          SELECT 
            subject_code,section_code,no_of_students
          FROM 
            TEACHINGLOAD NATURAL JOIN SUBJECT
          WHERE
            teachingload_id = ?;
        `,teachingload_id);

    db.query(queryString, (err, rows) => {
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
    const queryString = SqlString.format(`
        call view_employee_teachingload(?)
        `,[emp_id]);

    db.query(queryString, (err, rows) => {
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

export const getTeachEmpAdmin = ({emp_id}) => {
  return new Promise((resolve, reject) => {
    console.log("AAAA");
    // const queryString = `
    //     call view_employee_teachingload(?);
    //     `;
    const queryString = SqlString.format(`
      SELECT * FROM TEACHINGLOAD NATURAL JOIN SUBJECT NATURAL JOIN SUBJECT_DAY WHERE
      emp_id = ?;
    `,emp_id);

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        console.log("agik");
        return reject(500);
      }

      if (!rows.length) {
        console.log("no comprehendo");
        return reject(404);
      }

      var newArray = [];
      var visitedArray = []; 
      var i, j;
      for(i=0;i<rows.length;i++){
        var daysArray = [];
        console.log("ahiiiiiiiik");
        if(visitedArray.includes(rows[i].teachingload_id)){

        }else{
          for(j=0;j<rows.length;j++){
            if(rows[i].teachingload_id==rows[j].teachingload_id){
              daysArray.push(rows[j].day);
            }
          }
          rows[i].day = daysArray;
          visitedArray.push(rows[i].teachingload_id);
          newArray.push(rows[i]);
        }
      }
      console.log(rows);
      console.log(newArray);
      return resolve(newArray);
    });
  });
};

export const getAllTeachLoad = () => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(`
          SELECT *
          FROM TEACHINGLOAD
        `);

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

export const editAddTeachLoadUnits = ({ units}, json) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const values = [emp_id,units,emp_id];

    const queryString = SqlString.format(`
      update EMPLOYEE set current_teaching_units=(select current_teaching_units from (select * from EMPLOYEE)e  where e.emp_id=?)+? where emp_id=?;
    `,values);
   
    db.query(queryString, (err, res) => {
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

export const editRemoveTeachLoadUnits = ({ units}, json) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const values = [emp_id,units,emp_id];

    const queryString = SqlString.format(`
      update EMPLOYEE set current_teaching_units=(select current_teaching_units from (select * from EMPLOYEE)e  where e.emp_id=?)-? where emp_id=?;
    `,values);
   

    db.query(queryString, (err, res) => {
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

export const getSubjectByTeachLoad = ({ teachingload_id }) => {
  return new Promise((resolve, reject) => {
    const values=[teachingload_id, teachingload_id];

    const queryString = SqlString.format(`
          SELECT subj.subject_code, subj.section_code, subj.units, subj.isLecture, subj.isGraduate, tl.no_of_students FROM SUBJECT subj, TEACHINGLOAD tl
          WHERE
            subj.subject_id = (select subject_id from
            TEACHINGLOAD where teachingload_id=?) and teachingload_id=?;
        `,values);

    db.query(queryString, (err, rows) => {
      // console.log(queryString);
      // console.log(teachingload_id);
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

export const getEmployee = (json) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const values = [emp_id];

    const queryString = SqlString.format(`
      select * from EMPLOYEE where emp_id=?;
    `,values);
   

    db.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!res.length) {
        return reject(404);
      }

      return resolve(res[0]);
    });
  });
};
