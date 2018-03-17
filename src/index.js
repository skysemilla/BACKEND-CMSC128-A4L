import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import session from 'express-session';
import store from 'express-mysql-session';
import db from './database';
import router from './router';

const app = express();
const MySQLStore = store(session);
const sessionStore = new MySQLStore({}, db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: true }));
app.use(logger('dev'));

app.use(
  session({
    key: 'skydev',
    secret: 'skydev',
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
    createDatabaseTable: true,
    checkExpirationInterval: 900000,
    expiration: 86400000
  })
);

app.use(router);

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

export default server;
