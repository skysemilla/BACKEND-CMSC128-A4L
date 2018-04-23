import db from '../../database';
var SqlString = require('sqlstring');

// gets a publication by id
export const getPublication = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
          CALL view_publication_by_ID(?);
        `,
      [id]
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

// gets all publications
export const getPublications = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      CALL view_employee_publication(?);
    `,
      [empid]
    );

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
export const addPublication = ({
  credit_units,
  category,
  subcategory,
  funding,
  title,
  role,
  start_date,
  end_date,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    if (start_date === '' || end_date === '') {
      const values = [
        credit_units,
        category,
        subcategory,
        funding,
        title,
        role,
        emp_id
      ];
      const queryString = SqlString.format(
        `
          INSERT INTO PUBLICATION values(NULL, ?, ?, ?, ?, ?, ?, NULL, NULL, NULL, ?);
        `,
        values
      );

      db.query(queryString, (err, results) => {
        if (err) {
          console.log(err);
          console.log('ERROR!!');
          return reject(500);
        }

        return resolve(results.insertId);
      });
    } else {
      const values = [
        credit_units,
        category,
        subcategory,
        funding,
        title,
        role,
        start_date,
        end_date,
        emp_id
      ];
      const queryString = SqlString.format(
        `
          INSERT INTO PUBLICATION values(NULL, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?);
        `,
        values
      );

      db.query(queryString, (err, results) => {
        if (err) {
          console.log(err);
          console.log('ERROR!!');
          return reject(500);
        }

        return resolve(results.insertId);
      });
    }
  });
};

export const addPublicationLog = ({ title }) => {
  return new Promise((resolve, reject) => {
    const values = [title];
    const queryString = SqlString.format(
      `
        call insert_log(concat("Publication with title", ?, " has been added to the table PUBLICATION"));
        `,
      values
    );

    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        console.log('ERROR!!');
        return reject(500);
      }

      return resolve(results);
    });
  });
};

// adds a coworker
export const addCoworker = ({ coworker_id, publication_id }) => {
  return new Promise((resolve, reject) => {
    const values = [coworker_id, publication_id];
    const queryString = SqlString.format(
      `
            CALL insert_coworker(?, ?);
        `,
      values
    );

    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a publication
export const removePublication = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      CALL delete_publication(?);
    `,
      [id]
    );

    db.query(queryString, (err, results) => {
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
export const editPublication = ({
  credit_units,
  category,
  subcategory,
  funding,
  title,
  role,
  start_date,
  end_date,
  publication_id
}) => {
  return new Promise((resolve, reject) => {
    if (start_date === '' || end_date === '') {
      const values = [
        credit_units,
        category,
        subcategory,
        funding,
        title,
        role,
        publication_id
      ];
      const queryString = SqlString.format(
        `
        CALL update_publication(?, ?, ?, ?, ?, ?, null, null, ?);
      `,
        values
      );

      db.query(queryString, (err, res) => {
        if (err) {
          console.log(err);
          return reject(500);
        }

        if (!res.affectedRows) {
          return reject(404);
        }

        return resolve();
      });
    } else {
      const values = [
        credit_units,
        category,
        subcategory,
        funding,
        title,
        role,
        start_date,
        end_date,
        publication_id
      ];
      const queryString = SqlString.format(
        `
        CALL update_publication(?, ?, ?, ?, ?, ?, ?, ?, ?);
      `,
        values
      );

      db.query(queryString, (err, res) => {
        if (err) {
          console.log(err);
          return reject(500);
        }

        if (!res.affectedRows) {
          return reject(404);
        }

        return resolve();
      });
    }
  });
};

// gets employees
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

// gets all employee except self
export const getEmployeeCoworkers = ({ empid }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      SELECT * from EMPLOYEE WHERE emp_id != ?;
    `,
      [empid]
    );

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// removes coworkers of a publication
export const removeCoworkers = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      CALL delete_coworker(?);
    `,
      [id]
    );

    db.query(queryString, (err, results) => {
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

// gets all coworkers of a publication
export const getCoworkers = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      SELECT c.emp_id, e.f_name, e.l_name FROM COWORKER c, EMPLOYEE e WHERE c.emp_id = e.emp_id and publication_id = ?;
    `,
      [id]
    );

    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results);
    });
  });
};
