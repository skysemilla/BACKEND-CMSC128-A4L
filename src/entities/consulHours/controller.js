import db from '../../database';

export const addConsulHours = ({
  consultation_start_time,
  consultation_end_time,
  consultation_place,
  day,
},
  json
) => {
  return new Promise((resolve, reject) => {
    const emp_id =  json.emp_id;

    const queryString = `
      CALL
      insert_consultation(?, ?, ?, ?, ?);
    `;

    const values = [
      consultation_start_time,
      consultation_end_time,
      consultation_place,
      day,
      emp_id
    ];

    db.query(queryString, values, (err, results) => {
      if (err) {
        console.log(err.message);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes consultation hours
export const removeConsultation = ({ consultation_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    CALL 
      delete_consultation(?)
    `;

    db.query(queryString, consultation_id, (err, results) => {
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
export const getConsultation = ( consultation_id ) => {
  return new Promise((resolve, reject) => {

    const queryString = `
          SELECT 
            consultation_start_time, consultation_end_time, consultation_place
          FROM 
            CONSULTATION
          WHERE
            consultation_id = ?;
        `;


    db.query(queryString, emp_id , (err, rows) => {
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

      return resolve(rows);
    });
  });
};

export const editConsulHours = ({
  consultation_start_time,
  consultation_end_time,
  consultation_place,
  day,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
     CALL 
     update_consultation(?, ?, ?, ?, ?)
    `;

    const values = [
      consultation_start_time,
      consultation_end_time,
      consultation_place,
      day,
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
