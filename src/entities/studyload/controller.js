import db from '../../database';

export const addStudyLoad = ({
  degree,
  university,
  credits,
  emp_id,
  subject_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    call insert_studyload(?,?,?,?,?)
    `;

    const values = [
      subject_id,
      degree,
      university,
      credits,
      emp_id
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

export const editStudyLoad = ({
  studyload_id,
  degree,
  university,
  credits,
  subject_code,
  section_code,
  isLecture,
  units,
  room,
  start_time,
  end_time
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    call update_studyload(?,?,?,?,?,?,?,?,?,?,?)
    `;

    const values = [
      studyload_id,
      degree,
      university,
      credits,
      subject_code,
      section_code,
      isLecture,
      units,
      room,
      start_time,
      end_time
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
      call view_by_studyload_id(?)
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
        call view_employee_studyload(?)
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
