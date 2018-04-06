import db from '../../database';

<<<<<<< HEAD:src/entities/extensions/controller.js
// gets a activity
export const getActivity = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT * from ACTIVITY where activity_id = ?
=======
// gets a extension
export const getExtension = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT * from EXTENSION where extension_id = ?
>>>>>>> d15f16b23a39e47edf15860d36417efaf5f13f73:src/entities/extension/controller.js
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

<<<<<<< HEAD:src/entities/extensions/controller.js
// gets all Activity
export const getActivities = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL
      view_Activity()
=======
// gets all extensions
export const getExtensions = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL
      view_extension();
>>>>>>> d15f16b23a39e47edf15860d36417efaf5f13f73:src/entities/extension/controller.js
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

<<<<<<< HEAD:src/entities/extensions/controller.js
// adds a Activity
export const addActivity = ({
  credits,
  title,
  category,
  no_of_hours,
  no_of_participants,
  role,
  start_date,
  end_date,
=======
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
>>>>>>> d15f16b23a39e47edf15860d36417efaf5f13f73:src/entities/extension/controller.js
  funding_agency,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
<<<<<<< HEAD:src/entities/extensions/controller.js
            CALL insert_activity(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [
      credits,
      title,
      category,
      no_of_hours,
      no_of_participants,
      role,
      start_date,
      end_date,
=======
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
>>>>>>> d15f16b23a39e47edf15860d36417efaf5f13f73:src/entities/extension/controller.js
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

<<<<<<< HEAD:src/entities/extensions/controller.js
// removes a Activity
export const removeActivity = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_activity(?)
=======
// removes a extension
export const removeExtension = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_extension(?);
>>>>>>> d15f16b23a39e47edf15860d36417efaf5f13f73:src/entities/extension/controller.js
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

<<<<<<< HEAD:src/entities/extensions/controller.js
// edits a Activity
export const editActivity = ({
  activity_id,
  credits,
  title,
  category,
  no_of_hours,
  no_of_participants,
  role,
  start_date,
  end_date,
  funding_agency,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL update_activity(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      activity_id,
      credits,
      title,
      category,
      no_of_hours,
      no_of_participants,
      role,
      start_date,
      end_date,
      funding_agency,
      emp_id
=======
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
>>>>>>> d15f16b23a39e47edf15860d36417efaf5f13f73:src/entities/extension/controller.js
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
