import db from '../../database';
var SqlString = require('sqlstring');

export const getSubject = ({ subject_code, section_code }) => {
  return new Promise((resolve, reject) => {
    const values = [subject_code, section_code];
    const queryString =  SqlString.format(
    `
          SELECT 
            *
          FROM 
            SUBJECT
          WHERE
            subject_code = ? and section_code = ?;
        `, values
        );
    db.query(queryString, (err, rows) => {
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

export const getSubjectByID = ({ subject_id }) => {
  return new Promise((resolve, reject) => {
    const queryString =  SqlString.format(
    `
          SELECT 
            *
          FROM 
            SUBJECT
          WHERE
            subject_id = ?;
        `, [subject_id]
        );
    db.query(queryString, (err, rows) => {
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


// export const getSubjects = () =>{
//   return new Promise((resolve, reject)) =>{
//     const queryString = `
//       SELECT * FROM SUBJECT;
//     `;

//     db.query(queryString, (err, rows) =>{
//       if(err) {
//         console.log(err);
//         return reject(500);
//       }

//       return (rows[0]);
//     })
//   }
// }
// // gets all subjects
export const getSubjects = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM SUBJECT NATURAL JOIN SUBJECT_DAY;
    `;

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      } 

      var newArray = [];
      var visitedArray = []; 
      var i, j;
      for(i=0;i<rows.length;i++){
       var daysArray = [];
       if(visitedArray.includes(rows[i].subject_id)){
       }else{
         for(j=0;j<rows.length;j++){
           if(rows[i].subject_id==rows[j].subject_id){
             daysArray.push(rows[j].day);
           }
         }
         rows[i].day = daysArray;
         visitedArray.push(rows[i].subject_id);
         newArray.push(rows[i]);
       }
     }
     console.log(newArray);
     console.log("NEW ARRAY");


      return resolve(newArray);
    });
  });
};


// adds a sample
export const addSubject = ({ subject_code, section_code, isLecture,days, isGraduate, units, room, start_time, end_time }) => {
  return new Promise((resolve, reject) => {
    const values = [subject_code, section_code, isLecture, isGraduate, units, room, start_time, end_time];
    const queryString = SqlString.format(
    `
            CALL add_subject(?,?,?,?,?,?,?, ?);
    `, values
    );


    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        console.log('ERROR!!');
        return reject(500);
      }
      const queryID=SqlString.format(`select subject_id from SUBJECT where section_code=? and subject_code=?;`,[section_code, subject_code]);
      db.query(queryID, (err,res)=>{
        if(err){
          return reject(500);
        }
        const queryAddSubjectDay = SqlString.format(
          `CALL add_subject_day(?,?);`, [days,res[0].subject_id]
        );

        db.query(queryAddSubjectDay, (err,result)=>{
        if (err) {
        console.log(err);
        console.log('ERROR!!');
        return reject(500);
          }
        });
      });
      // console.log("CTRL: "+results.insertId);

      return resolve(results.insertId);
    });
  });
};

// removes a sample
export const removeSubject = ({ subject_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      CALL delete_subject(?)
    `, [subject_id]
    );

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
export const editSubject = ({subject_id, subject_code, section_code, isLecture, isGraduate, units, room, start_time, end_time}) => {
  return new Promise((resolve, reject) => {
    const values = [subject_id, subject_code, section_code, isLecture, isGraduate, units, room, start_time, end_time];
    const queryString = SqlString.format(
      `
        CALL update_subject(?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, values
      );


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

export const getSubjectDay = (json) => {
  return new Promise((resolve, reject) => {
    // const emp_id = json.emp_id;
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
    db.query(queryString, (err, results) => {
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