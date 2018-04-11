import db from '../../database';

// edits a sample
export const editFaculty = ({
  emp_id,
  username,
  password,
  f_name,
  m_name,
  l_name,
  department,
  college,
  emp_type,
  email,
  is_full_time
}) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      call update_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      emp_id,
      username,
      password,
      f_name,
      m_name,
      l_name,
      department,
      college,
      emp_type,
      email,
      is_full_time
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
