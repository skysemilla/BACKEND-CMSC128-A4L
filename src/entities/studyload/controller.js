import db from '../../database';

export const addStudyLoad = (json,json2) => {
  const credits = json.credits;
  const courseno = json.courseno;
  const start_time = json.start_time;
  const end_time = json.end_time;
  const school = json.school;
  const days = json.days
  const emp_id = json2.emp_id;

  function send_response(err, result, args, last_query) {
    if(err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
}

function insertDays(error,results,fields) {
  const queryString = "Insert into STUDYLOAD_DAY VALUES (?,?)"
  const tempid = results[0].id;
  days.forEach(item => {
    db.query(queryString, [tempid, item]);
  },send_response);
}

function getTempID(error, results, fields) {
  if (error) throw new Error(error);
  // const queryString = "SELECT studyload_id from STUDYLOAD where credits = ? and course_no = ? and emp_id = ? and start_time = ? and end_time = ? and school = ?"
  const queryString = " Select max(studyload_id) id from STUDYLOAD";
  console.log(values);
  db.query(queryString,values,insertDays);
}

function start() {
  const queryString = `call insert_studyload(?, ?, ?,?,?,?)`;
  db.query(queryString, values, getTempID);

}

const values = [
  credits,
  courseno,
  emp_id,
  start_time,
  end_time,
  school
];
start();

};

export const removeStudyLoadDays = (studyload_id)=>{
  console.log(studyload_id);
  return new Promise((resolve, reject) => {
    const queryString = `
    DELETE FROM STUDYLOAD_DAY WHERE studyload_id = ?
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
}
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
  return new Promise((resolve, reject) => {
    const queryString = `
    call update_studyload(?,?,?,?,?,?,?)
    `;

    const values = [
      studyload_id,
      credits,
      courseno,
      start_time,
      end_time,
      school,
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

export const getDays = ( studyload_id) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    Select * from STUDYLOAD_DAY WHERE studyload_id = ?
    `;

    db.query(queryString, [studyload_id], (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      return resolve(rows);
    });
  });
};
export const addDays = (studyload_id,days)=>{
  const queryString = "Insert into STUDYLOAD_DAY VALUES (?,?)"
  days.forEach(item => {
    db.query(queryString, [studyload_id, item]);
  })
}