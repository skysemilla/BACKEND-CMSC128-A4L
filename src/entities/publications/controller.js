import db from '../../database';

// gets a publication by id
export const getPublication = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            PUBLICATION
          WHERE
            publication_id = ?
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

// gets all publications
export const getPublications = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT *
      FROM PUBLICATION
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

// adds a publication
export const addPublication = ({ credit_units, category, funding, title, role, start_date, end_date, emp_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            INSERT INTO PUBLICATION
            VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [credit_units, category, funding, title, role, start_date, end_date, emp_id];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// adds a coworker
export const addCoworker = ({ publication_id, coworker_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            INSERT INTO COWORKER
            VALUES (?, ?)
        `;

    const values = [publication_id, coworker_id];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// checks if publication_id and coworker_id exists
export const checkIfExisting = ({ publication_id, coworker_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            SELECT * 
            FROM COWORKER
            WHERE
            publication_id = ? AND coworker_id = ?
        `;

    const values = [publication_id, coworker_id];

    db.query(queryString, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows[0]);
    });
  });
};

// gets a publication by id
export const getPublication = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            PUBLICATION
          WHERE
            publication_id = ?
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

// removes a publication
export const removePublication = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE 
        FROM PUBLICATION
      WHERE 
        publication_id = ?
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

// edits a publication
export const editPublication = ({ credit_units, category, funding, title, role, start_date, end_date }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE PUBLICATION
      SET
        credit_units = ?,
        category = ?,
        funding = ?,
        title = ?,
        role = ?,
        start_date = ?,
        end_date = ?
      WHERE
        publication_id = ?
    `;

    const values = [credit_units, category, funding, title, role, start_date, end_date];

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
