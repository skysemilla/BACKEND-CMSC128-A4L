import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'skydev1',
  password: 'skydev1',
  db: 'skydev1',
  dateStrings: true
});

db.connect(err => {
  if (err) {
    console.log('Error in connecting to database');
    console.log(err.message);
  } else {
    console.log('Success in connecting to database');
  }
});

db.query('USE skydev1');

export default db;