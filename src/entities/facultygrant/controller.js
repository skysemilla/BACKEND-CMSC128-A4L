  import db from '../../database';


// gets a faculty grant by id
export const getFacultyGrant = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          SELECT 
            *
          FROM 
            FACULTYGRANT
          WHERE
            faculty_grant_id = ?
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

// gets all faculty grants
export const getFacultyGrants = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT *
      FROM FACULTYGRANT
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

// adds a faculty grant
export const addFacultyGrant = ({
  type,
  is_approved,
  professional_chair,
  grants,
  grant_title,
  start_date,
  end_date,
  emp_id
}) => { 
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO FACULTYGRANT
      (type,  is_approved, professional_chair, grants, grant_title, start_date, end_date, emp_id)
      VALUES 
      (?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [
    	type,
    	is_approved,
    	professional_chair,
    	grants,
    	grant_title,
    	start_date,
    	end_date,
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




// removes a faculty grant
export const removeFacultyGrant = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE 
        FROM FACULTYGRANT
      WHERE 
        faculty_grant_id = ?
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

// edits a faculty grant
export const editFacultyGrant = ({
  faculty_grant_id,
	type,
	is_approved,
	professional_chair,
	grants,
	grant_title,
	start_date,
	end_date,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE FACULTYGRANT
      SET
        type = ?,
        is_approved = ?,
        professional_chair = ?,
        grants = ?,
        grant_title = ?,
        start_date = ?,
        end_date = ?,
        emp_id = ?
      WHERE
        faculty_grant_id = ?
    `;

    const values = [
      type,
      is_approved,
      professional_chair,
      grants,
      grant_title,
      start_date,
      end_date,
      emp_id,
      faculty_grant_id
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
