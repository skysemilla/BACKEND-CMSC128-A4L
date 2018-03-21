import db from '../../database';

// gets a service
export const getService = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            SERVICE
          WHERE
            service_id = ?
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

// gets all services
export const getServices = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT *
      FROM SERVICE
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



// adds a service
export const addService = ({ category, title, no_of_hours, no_of_participants, role, credits, emp_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            INSERT INTO sample
            VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [category, title, no_of_hours, no_of_participants, role, credits, emp_id];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a service
export const removeService = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE 
        FROM SERVICE
      WHERE 
        service_id = ?
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
export const editSample = ({ category, title, no_of_hours, no_of_participants, role, credits }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE sample
      SET
        category = ?,
        title = ?,
        no_of_hours = ?,
        no_of_participants = ?,
        role = ?,
        credits = ?
      WHERE
        service_id = ?
    `;

    const values = [category, title, no_of_hours, no_of_participants, role, credits];

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