import db from '../../database';

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

    const values = [username, password];

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
