import db from '../../database';
var SqlString = require('sqlstring');

export const addConsulHours = ({
  consultation_start_time,
  consultation_end_time,
  consultation_place,
  day,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const values = [
      consultation_start_time,
      consultation_end_time,
      consultation_place,
      day,
      emp_id
    ];
    const queryString = SqlString.format(
      `
      CALL 
      insert_consultation(?, ?, ?, ?, ?);
    `,
      values
    );

    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err.message);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes consultation hours
export const removeConsulHours = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
    CALL 
    delete_consultation(?)
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

// get a consultation hour
export const getConsultation = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
          CALL
          view_employee_consultation(?);
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

// get a consultation by id
export const getSpecificConsul = ({ id }) => {
  return new Promise((resolve, reject) => {
    console.log(SqlString.escape(id));
    const queryString = SqlString.format(
      `
          CALL
          view_consultation_by_ID(?);
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

//gets all consultation hours
export const getAllConsulHours = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
        CALL
        view_consultation()
        `;

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
export const editConsulHours = ({
  consultation_id,
  consultation_start_time,
  consultation_end_time,
  consultation_place,
  day
}) => {
  return new Promise((resolve, reject) => {
    const values = [
      consultation_id,
      consultation_start_time,
      consultation_end_time,
      consultation_place,
      day
    ];
    const queryString = SqlString.format(
      `
     CALL 
     update_consultation(?, ?, ?, ?, ?);
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
  });
};
