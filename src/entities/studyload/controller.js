import db from '../../database';

export const addStudyLoad = ({
  credits,
  courseno,
  start_time,
  end_time,
  school,
  day1,
  day2
},
  json
) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const queryString = `
      call insert_studyload(?, ?, ?,?,?,?,?,?)
    `;

    const values = [credits, courseno, emp_id, start_time,end_time, school, day1,day2];
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
    call delete_studyload(?)
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

export const editStudyLoad = (json,emp_id) => {
    const studyload_id = json.studyload_id;
    const credits = json.credits;
    const courseno = json.courseno;
    const start_time = json.start_time;
    const end_time = json.end_time;
    const school = json.school;
    const day1 = json.day1;
    var day2 = json.day2;
  return new Promise((resolve, reject) => {
    const queryString = `
    call update_studyload(?,?,?,?,?,?,?,?,?)
    `;

    const values = [
      studyload_id,
      credits,
      courseno,
      start_time,
      end_time,
      school,
      day1,
      day2,
      emp_id
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

export const getStudyLoad = ( studyload_id ) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      call view_studyload_id_studyload(?)
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
export const getStudyEmp = ( json ) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const queryString = `
        call view_employee_studyload(?)
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


export const getAllStudyLoad = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
    call view_studyload()
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

export const getStudyCredentials = ( json ) => {
  return new Promise((resolve, reject) => {
    const emp_id = json.emp_id;
    const queryString = `
      SELECT * FROM STUDY_CREDENTIALS WHERE emp_id = ?
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

export const editStudyCredentials = (json,emp_id) => {
  const university = json.uni;
  const degree = json.degree;
  var fellowship = false;
  var studyleave = false;
  if(json.fellowship === "Yes"){
    fellowship = true;
  }
  if(json.studyleave === "Yes"){
    studyleave = true;
  }

return new Promise((resolve, reject) => {
  const queryString = `
  call update_study_credentials(?,?,?,?,?)
  `;

  const values = [
    emp_id,
    degree,
    university,
    studyleave,
    fellowship
  ];

  db.query(queryString, values, (err, res) => {
    if (err) {
      console.log(err);
      return reject(500);
    }

    if (!res.affectedRows) {
      return reject(403);
    }

    return resolve();
  });
});
};