import db from '../../database';
var SqlString = require('sqlstring');

// add position
export const addPosition = ({
  office,
  credit_units,
  nature_of_work,
  work_position,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const values = [
      office,
      credit_units,
      nature_of_work,
      work_position,
      emp_id
    ];
    const queryString = SqlString.format(
      `
      CALL insert_position(?, ?, ?, ?, ?);
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

// get position
export const getPosition = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
          CALL
          view_position_by_ID(?)
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

// get all positions
export const getAllPositions = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
          CALL 
          view_position();
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

export const getHisPosition = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
    SELECT * from POSITIONN where emp_id = ?
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

      return resolve(rows);
    });
  });
};
// removes position
export const removePosition = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = SqlString.format(
      `
      CALL delete_position(?);
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

// edits a position
export const editPosition = ({
  position_id,
  office,
  credit_units,
  nature_of_work,
  work_position,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const values = [
      position_id,
      office,
      credit_units,
      nature_of_work,
      work_position,
      emp_id
    ];
    const queryString = SqlString.format(
      `
      CALL update_position(?, ?, ?, ?, ?, ?);
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
