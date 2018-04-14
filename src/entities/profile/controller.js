import db from '../../database';

// edits a sample
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
