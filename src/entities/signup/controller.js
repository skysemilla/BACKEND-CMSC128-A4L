import db from '../../database';

export const signup = ({ username, password, type, emp_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO
      user
      (username, password, type, emp_id)
      VALUES
      (?, ?, ?, ?)
    `;

    const values = [username, password, type, emp_id];

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
