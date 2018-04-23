import db from '../../database';

export const addLimitedPractice = ({
  haveApplied,
  date_submitted,
  emp_id
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      CALL  
      insert_limited_practice(?, ?, ?)
    `;
    
    const values = [
      haveApplied,
      date_submitted,
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


export const removeLimitedPractice = ({ limited_practice_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
        CALL
        delete_limited_practice(?);
      `;

    db.query(queryString, limited_practice_id, (err, results) => {
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


export const editLimitedPractice = ({
  haveApplied,
  date_submitted,
  emp_id
}) => {
  console.log("ALOLOLOLO")
  return new Promise((resolve, reject) => {
    if(haveApplied == 1){
      console.log("wtf")
      const queryString = `
          CALL
          update_limited_practice(?, ?, ?)
        `;

      const values = [
        haveApplied,
        date_submitted,
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
    }else{
      
      const queryString = `
      CALL
      update_limited_practice(?, null, ?)
        `;

      const values = [
        
        haveApplied,
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
    }
  });
};

export const getLimitedPractice = ({ emp_id }) => {
  return new Promise((resolve, reject) => {
    const queryString = `
          CALL
          view_limited_practice_by_emp_id(?)
        `;

    db.query(queryString, emp_id, (err, rows) => {
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

export const getAllLimitedPractice = () => {
  return new Promise((resolve, reject) => {
    const queryString = `
        CALL
        view_limited_practice()
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
