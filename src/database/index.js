import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'skydev',
  password: 'skydev',
  db: 'skydev',
  dateStrings: true
});

db.connect(err => {
  if (err) {
    console.log('Error in connecting to database');
    console.log(err);
  } else {
    console.log('Success in connecting to database');
  }
});

db.query('USE skydev');

export default db;
