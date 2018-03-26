import db from '../../database';

// add position
export const addPosition = ({office, credit_units, emp_id}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL insert_position(?, ?, ?);
    `;

    const values = [office, credit_units, emp_id];

    db.query(queryString, values, (err, results) => {
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
    const queryString = `
          SELECT 
            *
          FROM 
            POSITIONN
          WHERE
            position_id = ?;
        `;

    db.query(queryString, [id, id], (err, rows) => {
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
export const getPositions = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          CALL view_position();
        `;

    db.query(queryString, [id, id], (err, rows) => {
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

// removes position
export const removePosition = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
      CALL delete_position(?);
     
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

// edits a position
export const editPosition = ({
  position_id, office, credit_units, emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL update_position(?, ?, ?, ?);
    `;

    const values = [
      office, credit_units, emp_id
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