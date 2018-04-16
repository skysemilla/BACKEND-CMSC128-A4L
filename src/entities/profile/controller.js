import db from '../../database';

// edits the faculty
export const editFaculty = ({
  empid,
  username,
  password,
  fname,
  mname,
  lname,
  dept,
  college,
  emptype,
  email,
  isfulltime
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      call update_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      empid,
      username,
      password,
      fname,
      mname,
      lname,
      dept,
      college,
      emptype,
      email,
      isfulltime
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

// edits the faculty
export const editTerm = ({ empid, year, term, isnew }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    UPDATE 
      EMPLOYEE
    SET 
      year = ?,
      semester = ?,
      is_new = ?
    WHERE 
      emp_id = ?;
    `;

    const values = [year, term, isnew, empid];

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

// gets faculty data
export const getData = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            EMPLOYEE
          WHERE
            emp_id = ?
        `;

    db.query(queryString, empid, (err, rows) => {
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
