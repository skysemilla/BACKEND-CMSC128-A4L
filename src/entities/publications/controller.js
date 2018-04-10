import db from '../../database';

// gets a publication by id
export const getPublication = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          CALL view_publication_by_ID(?);
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
      CALL view_publication();
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

// export const getCoworkers = ({ id }) => {
//   return new Promise((resolve, reject) => {
//     const queryString = `
//     SELECT * FROM COWORKER;`;

//     db.query(queryString, (err, rows) => {
//       if (err) {
//         console.log(err);
//         return reject(500);
//       }

//       return resolve(rows);
//     });
//   });
// };

// adds a publication
export const addPublication = ({ credit_units, category, funding, title, role, start_date, end_date, emp_id}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          INSERT INTO PUBLICATION values(NULL, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

    const values = [
      credit_units,
      category,
      funding,
      title,
      role,
      start_date,
      end_date,
      emp_id
    ];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        console.log("ERROR!!");
        return reject(500);
      }

      // console.log(results.insertId);
      return resolve(results.insertId);
    });
  });
};

export const addPublicationLog = ({ title }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        call insert_log(concat("Publication with title", ?, " has been added to the table PUBLICATION"));
        `;

    const values = [
      title
    ];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        console.log("ERROR!!");
        return reject(500);
      }

      // console.log(results.insertId);
      return resolve(results);
    });
  });
};

// adds a coworker
export const addCoworker = ({ coworker_id, publication_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            CALL insert_coworker(?, ?);
        `;

    const values = [coworker_id, publication_id];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      // console.log(inserted:"+results.insertId);
      return resolve(results.insertId);
    });
  });
};

// checks if publication_id and coworker_id exists
export const checkIfExisting = ({ coworker_id, publication_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            CALL view_publication_coworkers(?, ?);
        `;

    const values = [coworker_id, publication_id];

    db.query(queryString, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows[0]);
    });
  });
};

// removes a publication
export const removePublication = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_publication(?);
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
export const editPublication = ({ credit_units, category, funding, title, role, start_date, end_date, publication_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL update_publication(?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      credit_units,
      category,
      funding,
      title,
      role,
      start_date,
      end_date,
      publication_id
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

// gets all publications
export const getEmployees = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * from EMPLOYEE;
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

// removes a publication
export const removeCoworkers = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_coworker(?);
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

// gets all publications
export const getCoworkers = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT c.emp_id, e.f_name, e.l_name FROM COWORKER c, EMPLOYEE e WHERE c.emp_id = e.emp_id and publication_id = ?;
    `;

    db.query(queryString, id, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results);
    });
  });
};
