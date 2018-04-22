import db from '../../database';
var SqlString = require('sqlstring');

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
  emptypeno,
  email,
  is_full_time
}) => {
  return new Promise((resolve, reject) => {
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
      emptypeno,
      email,
      is_full_time
    ];
    const queryString = SqlString.format(
      `
      call update_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0);
    `,
      values
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

// edits the faculty
export const editTerm = ({ empid, year, term, isnew }) => {
  return new Promise((resolve, reject) => {
    const values = [year, term, isnew, empid];
    const queryString = SqlString.format(
      `
    UPDATE 
      EMPLOYEE
    SET 
      year = ?,
      semester = ?,
      is_new = ?
    WHERE 
      emp_id = ?;
    `,
      values
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

// gets faculty data
export const getData = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
          SELECT 
            *
          FROM 
            EMPLOYEE
          WHERE
            emp_id = ?
        `,
      [empid]
    );

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
