import db from '../../database';

// gets a activity
export const getActivity = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT * from ACTIVITY where activity_id = ?
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

// gets all Activity
export const getActivities = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL
      view_Activity()
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
  funding_agency,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
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

// removes a Activity
export const removeActivity = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_activity(?)
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
