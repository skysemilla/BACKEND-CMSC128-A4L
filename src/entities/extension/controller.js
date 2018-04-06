import db from '../../database';

// gets a extension
export const getExtension = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT * from EXTENSION where extension_id = ?
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

// gets all extensions
export const getExtensions = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL
      view_extension();
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

// adds a extension
export const addExtension = ({
  credit_unit,
  extension_name,
  extension_type,
  no_of_hours,
  no_of_participants,
  extension_role,
  start_time,
  end_time,
  funding_agency,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            CALL insert_extension(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

    const values = [
      credit_unit,
      extension_name,
      extension_type,
      no_of_hours,
      no_of_participants,
      extension_role,
      start_time,
      end_time,
      funding_agency,
      emp_id
    ];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a extension
export const removeExtension = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_extension(?);
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
export const editExtension = ({
  extension_id_update,
  credit_unit_update,
  extension_name_update,
  extension_type_update,
  no_of_hours_update,
  no_of_participants_update,
  extension_role_update,
  start_time_update,
  end_time_update,
  funding_agency_update,
  emp_id_update
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL update_extension(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      extension_id_update,
      credit_unit_update,
      extension_name_update,
      extension_type_update,
      no_of_hours_update,
      no_of_participants_update,
      extension_role_update,
      start_time_update,
      end_time_update,
      funding_agency_update,
      emp_id_update
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
