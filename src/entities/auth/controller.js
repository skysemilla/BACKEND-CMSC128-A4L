import db from '../../database';

export const login = ({ studNo, password }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT 
        *
      FROM
        user
      WHERE
        studNo = BINARY ? and
        password = BINARY ?
    `;

    const values = [studNo, password];

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