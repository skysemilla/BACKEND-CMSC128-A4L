import db from '../../database';
var SqlString = require('sqlstring');

export const addLimitedPractice = ({ haveApplied, date_submitted, emp_id }) => {
  return new Promise((resolve, reject) => {
    const values = [haveApplied, date_submitted, emp_id];
    const queryString = SqlString.format(
      `
      CALL  
      insert_limited_practice(?, ?, ?)
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

export const removeLimitedPractice = ({ limited_practice_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
        CALL
        delete_limited_practice(?);
      `,
      [limited_practice_id]
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

export const editLimitedPractice = ({
  haveApplied,
  date_submitted,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    if (haveApplied == 1) {
      const values = [haveApplied, date_submitted, emp_id];
      const queryString = SqlString.format(
        `
          CALL
          update_limited_practice(?, ?, ?)
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
      const values = [haveApplied, emp_id];
      const queryString = SqlString.format(
        `
      CALL
      update_limited_practice(?, null, ?)
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

export const getLimitedPractice = ({ emp_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
          CALL
          view_limited_practice_by_emp_id(?)
        `,
      [emp_id]
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

export const getAllLimitedPractice = () => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(`
        CALL
        view_limited_practice()
      `);

    db.query(queryString, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};
