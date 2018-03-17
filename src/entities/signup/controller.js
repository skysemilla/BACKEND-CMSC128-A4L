import db from '../../database';

export const signup = ({ emp_id, username, emp_type, department, college, rank }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO
      FACULTY
      (emp_id, username, emp_type, department, college, rank)
      VALUES
      (?, ?, ?, ?, ?, ?)
    `;

    const values = [emp_id, username, emp_type, department, college, ran];

    db.query(queryString, values, (err, rows) => {
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