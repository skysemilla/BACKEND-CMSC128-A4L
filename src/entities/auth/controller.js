import db from '../../database';
import sha256 from '../../hash';

export const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT 
        *
      FROM
        EMPLOYEE
      WHERE
        username = BINARY ? and
        password = BINARY ?
    `;

    const hpassword = sha256(password);
    const values = [username, hpassword];

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
