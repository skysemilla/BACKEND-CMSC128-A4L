import db from '../../database';

// gets a service
export const getService = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          CALL view_service_by_ID(?) 
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

// gets all services
export const getServices = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL
      view_service()
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

// adds a service
export const addService = ({
  category,
  title,
  no_of_hours,
  no_of_participants,
  role,
  credits,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
            CALL insert_service(?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [
      category,
      title,
      no_of_hours,
      no_of_participants,
      role,
      credits,
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

// removes a service
export const removeService = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL delete_service(?)
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
export const editService = ({
  service_id,
  category,
  title,
  no_of_hours,
  no_of_participants,
  role,
  credits
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL update_service(?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      service_id, 
      category,
      title,
      no_of_hours,
      no_of_participants,
      role,
      credits
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
