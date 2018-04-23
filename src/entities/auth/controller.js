import db from '../../database';
var SqlString = require('sqlstring');

export const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    const values = [username, password];
    const queryString = SqlString.format(
      `
      SELECT 
        *
      FROM
        EMPLOYEE
      WHERE
        username = BINARY ? and
        password = BINARY sha2(?,256)
    `,
      values
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
