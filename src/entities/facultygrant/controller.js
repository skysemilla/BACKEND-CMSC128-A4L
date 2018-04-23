import db from '../../database';

//adds a faculty grant
  export const addFacultyGrant = ({emp_id}) => {
    console.log({emp_id})
    return new Promise((resolve, reject) => {
      const queryString = `
        CALL 
        insert_faculty_grant(NULL, NULL, NULL, NULL, NULL, NULL, NULL, ?);
      `;
      const values = [emp_id];
  
      db.query(queryString,values, (err, results) => {
        if (err) {
          console.log(err.message);
          return reject(500);
        }
        return resolve(results.insertId);
      });
    });
  };
  
// gets all faculty
  export const getAllFacultyGrant = () => {
    return new Promise((resolve, reject) => {
      const queryString = `
        CALL view_faculty_grant();
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

// gets a faculty grant by id by emp_id
export const getAllFacultyGrantByEmp = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          CALL view_faculty_grant_by_emp_id(?)
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


// removes a faculty grant
export const removeFacultyGrant = ({ id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL
      delete_faculty_grant();
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
  emp_id,
	type,
	is_approved,
	professional_chair,
	grants,
	grant_title,
	start_date,
	end_date

}) => {
  return new Promise((resolve, reject) => {
    if(type === "Yes")
    {
      const queryString = `
      CALL 
      update_faculty_grant(?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      emp_id,
      type,
      is_approved,
      professional_chair,
      grants,
      grant_title,
      start_date,
      end_date
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
    }
    else{
        const queryString = `
        CALL 
        update_faculty_grant(?, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
      `;

      const values = [
        emp_id,
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
    }
  });
};
