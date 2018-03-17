import db from '../../database';

// gets a sample
export const getSample = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            sample
          WHERE
            id = ?
        `;

    db.query(queryString, id, (err, rows) => {
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

// gets all samples
export const getSamples = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT *
      FROM sample
      ORDER by name
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

// adds a sample
export const addSample = ({ name, age, info }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            INSERT INTO sample
            VALUES (DEFAULT, ?, ?, ?)
        `;

    const values = [name, age, info];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a sample
export const removeSample = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE 
        FROM sample
      WHERE 
        id = ?
    `;

    db.query(queryString, id, (err, results) => {
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

// edits a sample
export const editSample = ({ name, age, info, id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE sample
      SET
        name = ?,
        age = ?,
        info = ?
      WHERE
        id = ?
    `;

    const values = [name, age, info, id];

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
