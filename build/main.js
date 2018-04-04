require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mysql__);


var db = __WEBPACK_IMPORTED_MODULE_0_mysql___default.a.createConnection({
  host: 'localhost',
  user: 'skydev',
  password: 'skydev',
  db: 'skydev',
  dateStrings: true
});

db.connect(function (err) {
  if (err) {
    console.log('Error in connecting to database');
    console.log(err.message);
  } else {
    console.log('Success in connecting to database');
  }
});

db.query('USE skydev');

/* harmony default export */ __webpack_exports__["a"] = (db);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sha256 = __webpack_require__(15).sha256;

/* harmony default export */ __webpack_exports__["a"] = (sha256);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_mysql_session__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_mysql_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_mysql_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router__ = __webpack_require__(11);








var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var MySQLStore = __WEBPACK_IMPORTED_MODULE_4_express_mysql_session___default()(__WEBPACK_IMPORTED_MODULE_3_express_session___default.a);
var sessionStore = new MySQLStore({}, __WEBPACK_IMPORTED_MODULE_5__database__["a" /* default */]);

app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ encoded: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_morgan___default()('dev'));

app.use(__WEBPACK_IMPORTED_MODULE_3_express_session___default()({
  key: 'skydev',
  secret: 'skydev',
  resave: true,
  saveUninitialized: true,
  store: sessionStore,
  createDatabaseTable: true,
  checkExpirationInterval: 900000,
  expiration: 86400000
}));

app.use(__WEBPACK_IMPORTED_MODULE_6__router__["a" /* default */]);

var port = process.env.PORT || 3001;

var server = app.listen(port, function () {
  console.log('Server is running at port: ' + port);
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-mysql-session");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_auth_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_extensions_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_publications_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_signup_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_studyload_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_teachload_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_facultylist_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_adminWork_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_consulHours_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_facultygrant_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_limitedpractice_router__ = __webpack_require__(34);


// put import routers here







//import fsrRouter from './entities/fsrlist/router';





var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// put use statements here
router.use('/', __WEBPACK_IMPORTED_MODULE_1__entities_auth_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__entities_extensions_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_3__entities_publications_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_4__entities_signup_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_5__entities_studyload_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_6__entities_teachload_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_7__entities_facultylist_router__["a" /* default */]);
//router.use(fsrRouter);
router.use(__WEBPACK_IMPORTED_MODULE_8__entities_adminWork_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_9__entities_consulHours_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_10__entities_facultygrant_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_11__entities_limitedpractice_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(14);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/login', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var user, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* login */](req.body);

          case 3:
            user = _context.sent;

            req.session.user = user;
            res.status(200).json({
              status: 200,
              message: 'Successfully logged in',
              data: user
            });
            _context.next = 19;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 500 ? 14 : _context.t1 === 404 ? 16 : 18;
            break;

          case 14:
            message = 'Internal server error while logging in';
            return _context.abrupt('break', 18);

          case 16:
            message = 'Wrong credentials';
            return _context.abrupt('break', 18);

          case 18:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/logout', function (req, res) {
  req.session.user = null;
  res.status(200).json({
    status: 200,
    message: 'Successfully logged out'
  });
});

router.post('/api/session', function (req, res) {
  res.status(200).json({
    status: 200,
    message: 'Successfully fetched current session',
    data: req.session.user ? req.session.user : null
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hash__ = __webpack_require__(3);



var login = function login(_ref) {
  var username = _ref.username,
      password = _ref.password;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      SELECT \n        *\n      FROM\n        EMPLOYEE\n      WHERE\n        username = BINARY ? and\n        password = BINARY ?\n    ';

    var hpassword = Object(__WEBPACK_IMPORTED_MODULE_1__hash__["a" /* default */])(password);
    var values = [username, hpassword];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, rows) {
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

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(17);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets services
router.get('/api/activity/viewAll', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var services, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getActivities */]();

          case 3:
            services = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all Activities',
              data: services
            });
            _context.next = 16;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context.t0, message: message });

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// get a service
router.post('/api/service/view', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var activity, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getActivity */](req.body);

          case 3:
            activity = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched service',
              data: activity
            });
            _context2.next = 18;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 13 : _context2.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Service not found';
            return _context2.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context2.abrupt('break', 17);

          case 17:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 18:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// add a service
router.post('/api/activity/add', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var id, serviceAdded;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.category && req.body.title && req.body.no_of_hours >= 0 && req.body.no_of_participants >= 0 && req.body.role && req.body.credits >= 0)) {
              _context3.next = 16;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addActivity */](req.body);

          case 4:
            id = _context3.sent;
            _context3.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getActivity */]({ id: id });

          case 7:
            serviceAdded = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created sample',
              data: serviceAdded
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 14:
            _context3.next = 17;
            break;

          case 16:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 17:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[1, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// removes a service
router.post('/api/activity/delete', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var service, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getActivity */](req.body);

          case 3:
            service = _context4.sent;
            _context4.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeActivity */](req.body);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed sample',
              data: service
            });
            _context4.next = 20;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 15 : _context4.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Cannot Delete: Service not found';
            return _context4.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context4.abrupt('break', 19);

          case 19:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 20:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// edits a Activity
router.post('/api/activity/edit', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var serviceEdited, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editActivity */](req.body);

          case 3:
            _context5.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getActivity */]({ id: req.body.activity_id });

          case 5:
            serviceEdited = _context5.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited service',
              data: serviceEdited
            });
            _context5.next = 20;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 15 : _context5.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Service not found';
            return _context5.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context5.abrupt('break', 19);

          case 19:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 20:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 9]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getActivities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editActivity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


// gets a service
var getActivity = function getActivity(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT * from ACTIVITY where activity_id = ?\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, rows) {
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
var getActivities = function getActivities() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL\n      view_Activity()\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// adds a Activity
var addActivity = function addActivity(_ref2) {
  var credits = _ref2.credits,
      title = _ref2.title,
      category = _ref2.category,
      no_of_hours = _ref2.no_of_hours,
      no_of_participants = _ref2.no_of_participants,
      role = _ref2.role,
      start_date = _ref2.start_date,
      end_date = _ref2.end_date,
      funding_agency = _ref2.funding_agency,
      emp_id = _ref2.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            CALL insert_activity(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\n        ';

    var values = [credits, title, category, no_of_hours, no_of_participants, role, start_date, end_date, funding_agency, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a Activity
var removeActivity = function removeActivity(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL delete_activity(?)\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, results) {
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
var editActivity = function editActivity(_ref4) {
  var activity_id = _ref4.activity_id,
      credits = _ref4.credits,
      title = _ref4.title,
      category = _ref4.category,
      no_of_hours = _ref4.no_of_hours,
      no_of_participants = _ref4.no_of_participants,
      role = _ref4.role,
      start_date = _ref4.start_date,
      end_date = _ref4.end_date,
      funding_agency = _ref4.funding_agency,
      emp_id = _ref4.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL update_activity(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\n    ';

    var values = [activity_id, credits, title, category, no_of_hours, no_of_participants, role, start_date, end_date, funding_agency, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(19);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets a publication by id
router.post('/api/publication/view', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPublication */](req.body);

          case 3:
            publication = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched publication',
              data: publication
            });
            _context.next = 18;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 404 ? 13 : _context.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Publication not found';
            return _context.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context.abrupt('break', 17);

          case 17:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// gets publications
router.get('/api/publication/viewAll', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* getPublications */]();

          case 3:
            publications = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all publications',
              data: publications
            });
            _context2.next = 16;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context2.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context2.t0, message: message });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// add a publication
router.post('/api/publication/add', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.credit_units >= 0 && req.body.category && req.body.funding && req.body.title && req.body.role && req.body.start_date && req.body.end_date)) {
              _context3.next = 13;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* addPublication */](req.body);

          case 4:
            id = _context3.sent;

            // const publication = await Ctrl.getPublication({ id: id });

            res.status(200).json({
              status: 200,
              message: 'Successfully created publication'
              // data: publication
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context3.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[1, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// add a coworker
router.post('/api/publication/add', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var row;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.body.publication_id) {
              _context4.next = 13;
              break;
            }

            _context4.prev = 1;
            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addCoworker */](req.body);

          case 4:
            row = __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* checkIfExisting */](req.body);


            res.status(200).json({
              status: 200,
              message: 'Successfully added coworker',
              data: row
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context4.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[1, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// removes a publication
router.post('/api/publication/delete', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPublication */](req.body);

          case 3:
            publication = _context5.sent;
            _context5.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* removePublication */](req.body);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed publication',
              data: publication
            });
            _context5.next = 20;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 15 : _context5.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Publication not found';
            return _context5.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context5.abrupt('break', 19);

          case 19:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 20:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 9]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// edits a publication
router.post('/api/publication/edit', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* editPublication */](req.body);

          case 3:
            _context6.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPublication */]({
              id: req.body.publication_id
            });

          case 5:
            publication = _context6.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited publication',
              data: publication
            });
            _context6.next = 20;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6['catch'](0);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 15 : _context6.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Publication not found';
            return _context6.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context6.abrupt('break', 19);

          case 19:
            res.status(_context6.t0).json({ status: _context6.t0, message: message });

          case 20:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[0, 9]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPublications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCoworker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkIfExisting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removePublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editPublication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


// gets a publication by id
var getPublication = function getPublication(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          CALL view_publication_by_ID(?);\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, rows) {
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

// gets all publications
var getPublications = function getPublications() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL view_publication();\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// adds a publication
var addPublication = function addPublication(_ref2) {
  var credit_units = _ref2.credit_units,
      category = _ref2.category,
      funding = _ref2.funding,
      title = _ref2.title,
      role = _ref2.role,
      start_date = _ref2.start_date,
      end_date = _ref2.end_date,
      emp_id = _ref2.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            CALL insert_publication(?, ?, ?, ?, ?, ?, ?, ?);\n        ';

    var values = [credit_units, category, funding, title, role, start_date, end_date, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// adds a coworker
var addCoworker = function addCoworker(_ref3) {
  var coworker_id = _ref3.coworker_id,
      publication_id = _ref3.publication_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            CALL insert_coworker(?, ?);\n        ';

    var values = [coworker_id, publication_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// checks if publication_id and coworker_id exists
var checkIfExisting = function checkIfExisting(_ref4) {
  var coworker_id = _ref4.coworker_id,
      publication_id = _ref4.publication_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            CALL view_publication_coworkers(?, ?);\n        ';

    var values = [coworker_id, publication_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows[0]);
    });
  });
};

// removes a publication
var removePublication = function removePublication(_ref5) {
  var id = _ref5.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL delete_publication(?);\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, results) {
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

// edits a publication
var editPublication = function editPublication(_ref6) {
  var publication_id = _ref6.publication_id,
      credit_units = _ref6.credit_units,
      category = _ref6.category,
      funding = _ref6.funding,
      title = _ref6.title,
      role = _ref6.role,
      start_date = _ref6.start_date,
      end_date = _ref6.end_date;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL update_publication(?, ?, ?, ?, ?, ?, ?, ?);\n    ';

    var values = [publication_id, credit_units, category, funding, title, role, start_date, end_date];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(21);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/signup', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.emp_id && req.body.username && req.body.password && req.body.type && req.body.f_name && req.body.m_name && req.body.l_name && req.body.department && req.body.college && req.body.emp_type && req.body.is_full_time && req.body.email)) {
              _context.next = 13;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addEmployee */](req.body);

          case 4:
            id = _context.sent;

            // const employee = await Ctrl.getEmployee({ id: id });

            res.status(200).json({
              status: 200,
              message: 'Successfully created employee'
              // data: employee
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEmployee; });
/* unused harmony export getEmployee */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hash__ = __webpack_require__(3);



//adds an employee
var addEmployee = function addEmployee(_ref) {
  var emp_id = _ref.emp_id,
      username = _ref.username,
      password = _ref.password,
      type = _ref.type,
      f_name = _ref.f_name,
      m_name = _ref.m_name,
      l_name = _ref.l_name,
      department = _ref.department,
      college = _ref.college,
      emp_type = _ref.emp_type,
      is_full_time = _ref.is_full_time,
      email = _ref.email;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL insert_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n    ';

    var hpassword = Object(__WEBPACK_IMPORTED_MODULE_1__hash__["a" /* default */])(password);

    var values = [emp_id, username, hpassword, type, f_name, m_name, l_name, department, college, emp_type, is_full_time, email];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      // console.log(results);
      return resolve(results.insertId);
    });
  });
};

// gets an employee
var getEmployee = function getEmployee(_ref2) {
  var id = _ref2.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            EMPLOYEE\n          WHERE\n            emp_id_increment = ?;\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, rows) {
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

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(23);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/studyload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.credits && req.body.emp_id && req.body.subject_id)) {
              _context.next = 16;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addStudyLoad */](req.body);

          case 4:
            id = _context.sent;
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getStudyLoad */]({ studyload_id: id });

          case 7:
            sample = _context.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created study load',
              data: sample
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 14:
            _context.next = 17;
            break;

          case 16:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/studyload/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.studyload_id) {
              _context2.next = 15;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getStudyLoad */](req.body);

          case 4:
            book = _context2.sent;
            _context2.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* removeStudyLoad */](req.body);

          case 7:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed study load',
              data: book
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context2.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 10]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.post('/api/studyload/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.studyload_id && req.body.degree && req.body.university && req.body.credits && req.body.subject_code && req.body.section_code && req.body.isLecture && req.body.units && req.body.room && req.body.start_time && req.body.end_time)) {
              _context3.next = 15;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editStudyLoad */](req.body);

          case 4:
            _context3.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getStudyLoad */]({
              studyload_id: req.body.studyload_id
            });

          case 6:
            sample = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully edited study load',
              data: sample
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context3.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[1, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/api/studyload/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getStudyEmp */](req.session.user);

          case 3:
            book = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched study load',
              data: book
            });
            _context4.next = 18;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 13 : _context4.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Study load not found';
            return _context4.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context4.abrupt('break', 17);

          case 17:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 18:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.get('/api/studyload/viewAll', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllStudyLoad */]();

          case 3:
            subjects = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all studyload',
              data: subjects
            });
            _context5.next = 16;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context5.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context5.t0, message: message });

          case 16:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStudyEmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllStudyLoad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addStudyLoad = function addStudyLoad(_ref) {
  var credits = _ref.credits,
      emp_id = _ref.emp_id,
      subject_id = _ref.subject_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      call insert_studyload(?, ?, ?)\n    ';

    var values = [subject_id, credits, emp_id];
    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

var removeStudyLoad = function removeStudyLoad(_ref2) {
  var studyload_id = _ref2.studyload_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n    call delete_studyload(?)\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, studyload_id, function (err, results) {
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

var editStudyLoad = function editStudyLoad(_ref3) {
  var studyload_id = _ref3.studyload_id,
      degree = _ref3.degree,
      university = _ref3.university,
      credits = _ref3.credits,
      subject_code = _ref3.subject_code,
      section_code = _ref3.section_code,
      isLecture = _ref3.isLecture,
      units = _ref3.units,
      room = _ref3.room,
      start_time = _ref3.start_time,
      end_time = _ref3.end_time;

  return new Promise(function (resolve, reject) {
    var queryString = '\n    call update_studyload(?,?,?,?,?,?,?,?,?,?,?)\n    ';

    var values = [studyload_id, degree, university, credits, subject_code, section_code, isLecture, units, room, start_time, end_time];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

var getStudyLoad = function getStudyLoad(_ref4) {
  var studyload_id = _ref4.studyload_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      call view_by_studyload_id(?)\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, studyload_id, function (err, rows) {
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
var getStudyEmp = function getStudyEmp(json) {
  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var queryString = '\n        call view_employee_studyload(?)\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, [emp_id], function (err, rows) {
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

var getAllStudyLoad = function getAllStudyLoad() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n    call view_studyload()\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(25);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/teachload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.no_of_students && req.body.subject_code && req.body.section_code && req.body.room && req.body.days && req.body.start_time && req.body.end_time && req.body.hours && req.body.creditw)) {
              _context.next = 16;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addTeachLoad */](req.body, req.session.user);

          case 4:
            id = _context.sent;
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getTeachLoad */]({ teachingload_id: id });

          case 7:
            sample = _context.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created teaching load',
              data: sample
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 14:
            _context.next = 17;
            break;

          case 16:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/teachload/delete/', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.teachingload_id) {
              _context2.next = 15;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getTeachLoad */](req.body);

          case 4:
            book = _context2.sent;
            _context2.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* removeTeachLoad */](req.body);

          case 7:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed teach load',
              data: book
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context2.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 10]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.post('/api/teachload/edit/', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.emp_id && req.body.no_of_students && req.body.subject_code && req.body.section_code && req.body.room && req.body.days && req.body.start_time && req.body.end_time && req.body.hours && req.body.creditw)) {
              _context3.next = 15;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editTeachLoad */](req.body);

          case 4:
            _context3.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getTeachEmp */]({
              emp_id: req.body.emp_id
            });

          case 6:
            sample = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited teach load',
              data: sample
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context3.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[1, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/api/teachload/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getTeachEmp */](req.session.user);

          case 3:
            book = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched teach load',
              data: book
            });
            _context4.next = 18;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 13 : _context4.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Teach load not found';
            return _context4.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context4.abrupt('break', 17);

          case 17:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 18:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.get('/api/teachload/viewAll', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllTeachLoad */]();

          case 3:
            subjects = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all teaching load',
              data: subjects
            });
            _context5.next = 16;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context5.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context5.t0, message: message });

          case 16:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTeachEmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllTeachLoad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addTeachLoad = function addTeachLoad(_ref, json) {
  var no_of_students = _ref.no_of_students,
      subject_code = _ref.subject_code,
      section_code = _ref.section_code,
      room = _ref.room,
      days = _ref.days,
      start_time = _ref.start_time,
      end_time = _ref.end_time,
      creditw = _ref.creditw;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var queryString = '\n      INSERT INTO TEACHINGLOAD\n          (emp_id, no_of_students, subject_id)\n        VALUES\n          (?, ?, (SELECT subject_id FROM SUBJECT \n                  WHERE subject_code = ? AND\n                        section_code = ? ));\n    ';
    //FIX QUERY LATER ON ADD SUBJECT IF SUBJECT DOES NOT EXIST
    // console.log(no_of_students);
    var values = [emp_id, no_of_students, subject_code, section_code];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

var removeTeachLoad = function removeTeachLoad(_ref2) {
  var teachingload_id = _ref2.teachingload_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n        DELETE \n          FROM TEACHINGLOAD\n        WHERE \n          teachingload_id = ?\n      ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, teachingload_id, function (err, results) {
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

var editTeachLoad = function editTeachLoad(_ref3) {
  var no_of_students = _ref3.no_of_students,
      emp_id = _ref3.emp_id,
      subject_code = _ref3.subject_code,
      section_code = _ref3.section_code,
      room = _ref3.room,
      days = _ref3.days,
      start_time = _ref3.start_time,
      end_time = _ref3.end_time,
      creditw = _ref3.creditw;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      UPDATE TEACHINGLOAD\n        SET\n          no_of_students = ?\n        WHERE\n          emp_id = ? AND\n          subject_id = (SELECT subject_id FROM SUBJECT \n                        WHERE subject_code = ? AND\n                              section_code = ? );\n    ';

    var values = [no_of_students, emp_id, subject_code, section_code];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

var getTeachLoad = function getTeachLoad(_ref4) {
  var teachingload_id = _ref4.teachingload_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            TEACHINGLOAD\n          WHERE\n            teachingload_id = ?;\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, teachingload_id, function (err, rows) {
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

var getTeachEmp = function getTeachEmp(json) {
  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var queryString = '\n        call view_employee_teachingload(?)\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, [emp_id], function (err, rows) {
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

var getAllTeachLoad = function getAllTeachLoad() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT *\n          FROM TEACHINGLOAD\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(27);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets one faculty
router.post('/api/faculty/view', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var faculty, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* getFaculty */](req.body);

          case 3:
            faculty = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty',
              data: faculty
            });
            _context.next = 18;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 404 ? 13 : _context.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Faculty not found';
            return _context.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context.abrupt('break', 17);

          case 17:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// gets all faculty
router.get('/api/faculty/viewAll', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var faculty, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* getAllFaculty */]();

          case 3:
            faculty = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all faculty',
              data: faculty
            });
            _context2.next = 16;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context2.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context2.t0, message: message });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFaculty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllFaculty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


// gets one faculty
var getFaculty = function getFaculty(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          call view_employee_by_id(?);\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, rows) {
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

// gets all faculty
var getAllFaculty = function getAllFaculty() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n      call view_employee();\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(29);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/position/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.office && req.body.credit_units && req.body.emp_id)) {
              _context.next = 13;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addPosition */](req.body);

          case 4:
            id = _context.sent;

            // const sample = await Ctrl.getPosition({ id });

            res.status(200).json({
              status: 200,
              message: 'Successfully added position'
              // data: sample

            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/position/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var consultation, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getPosition */](req.body);

          case 3:
            consultation = _context2.sent;
            _context2.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removePosition */](req.body);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed position',
              data: consultation
            });
            _context2.next = 20;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 15 : _context2.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Position not found';
            return _context2.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context2.abrupt('break', 19);

          case 19:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 20:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

//edit a position
router.put('/api/position/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var positionEdited, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editPosition */](req.body);

          case 3:
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getPosition */]({ id: req.body.id });

          case 5:
            positionEdited = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited position',
              data: positionEdited
            });
            _context3.next = 20;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3['catch'](0);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 15 : _context3.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Service not found';
            return _context3.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context3.abrupt('break', 19);

          case 19:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 20:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/api/position/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getPosition */](req.body);

          case 3:
            book = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched position',
              data: book
            });
            _context4.next = 18;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 13 : _context4.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Position not found';
            return _context4.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context4.abrupt('break', 17);

          case 17:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 18:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.get('/api/position/viewAll', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllPositions */]();

          case 3:
            subjects = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all positions',
              data: subjects
            });
            _context5.next = 16;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context5.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context5.t0, message: message });

          case 16:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


// add position
var addPosition = function addPosition(_ref) {
  var office = _ref.office,
      credit_units = _ref.credit_units,
      emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL insert_position(?, ?, ?);\n    ';

    var values = [office, credit_units, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err.message);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// get position
var getPosition = function getPosition(_ref2) {
  var id = _ref2.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            POSITIONN\n          WHERE\n            position_id = ?;\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, [id, id], function (err, rows) {
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

// get all positions
var getAllPositions = function getAllPositions(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          CALL view_position();\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, [id, id], function (err, rows) {
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

// removes position
var removePosition = function removePosition(_ref4) {
  var id = _ref4.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL delete_position(?);\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, results) {
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

// edits a position
var editPosition = function editPosition(_ref5) {
  var position_id = _ref5.position_id,
      office = _ref5.office,
      credit_units = _ref5.credit_units,
      emp_id = _ref5.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL update_position(?, ?, ?, ?);\n    ';

    var values = [office, credit_units, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(31);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

//add a consultation hours
router.post('/api/consulHours/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.consultation_start_time && req.body.consultation_end_time && req.body.consultation_place && req.body.emp_id && req.body.day)) {
              _context.next = 13;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addConsulHours */](req.body);

          case 4:
            id = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully added consultation hours'
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//delete a consultation hours
router.post('/api/consulHours/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var consultation, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getConsultation */]({ id: req.body.id });

          case 3:
            consultation = _context2.sent;
            _context2.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeConsulHours */]({ id: req.body.id });

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed consulation hours',
              data: consultation
            });
            _context2.next = 20;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 15 : _context2.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Consultation hours not found';
            return _context2.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context2.abrupt('break', 19);

          case 19:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 20:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

//edit a consultation hours
router.put('/api/consulHours/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var positionEdited, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editConsulHours */](req.body);

          case 3:
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getConsultation */]({ id: req.body.id });

          case 5:
            positionEdited = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited consultation hour',
              data: positionEdited
            });
            _context3.next = 20;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3['catch'](0);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 15 : _context3.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Service not found';
            return _context3.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context3.abrupt('break', 19);

          case 19:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 20:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

//view all consultation hours
router.get('/api/consulHours/viewAll', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllConsulHours */]();

          case 3:
            subjects = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all consultations',
              data: subjects
            });
            _context4.next = 16;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context4.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context4.t0, message: message });

          case 16:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.post('/api/consulHours/view', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getConsultation */](req.body);

          case 3:
            book = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched consultation',
              data: book
            });
            _context5.next = 18;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 13 : _context5.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Consultation not found';
            return _context5.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context5.abrupt('break', 17);

          case 17:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 18:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getConsultation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editConsulHours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addConsulHours = function addConsulHours(_ref) {
  var consultation_start_time = _ref.consultation_start_time,
      consultation_end_time = _ref.consultation_end_time,
      consultation_place = _ref.consultation_place,
      day = _ref.day,
      emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL \n      insert_consultation(?, ?, ?, ?, ?);\n    ';

    var values = [consultation_start_time, consultation_end_time, consultation_place, day, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err.message);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes consultation hours
var removeConsulHours = function removeConsulHours(_ref2) {
  var id = _ref2.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n    CALL \n    delete_consultation(?)\n     \n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, results) {
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
var getConsultation = function getConsultation(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            CONSULTATION\n          WHERE\n            consultation_id = ?;\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, rows) {
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
var getAllConsulHours = function getAllConsulHours() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL\n      view_consultation()\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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

var editConsulHours = function editConsulHours(_ref4) {
  var consultation_start_time = _ref4.consultation_start_time,
      consultation_end_time = _ref4.consultation_end_time,
      consultation_place = _ref4.consultation_place,
      day = _ref4.day,
      emp_id = _ref4.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n     CALL \n     update_consultation(?, ?, ?, ?, ?)\n    ';

    var values = [consultation_start_time, consultation_end_time, consultation_place, day, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(33);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets a faculty grant by id
router.post('/api/facultygrant/view', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getFacultyGrant */](req.body);

          case 3:
            facultygrant = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty grant',
              data: facultygrant
            });
            _context.next = 18;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 404 ? 13 : _context.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Faculty grant not found';
            return _context.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context.abrupt('break', 17);

          case 17:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// add a faculty grant
router.post('/api/facultygrant/add', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var id, facultygrant;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(req.body.type && req.body.is_approved && req.body.professional_chair && req.body.grants && req.body.grant_title && req.body.start_date && req.body.end_date && req.body.emp_id)) {
              _context2.next = 16;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addFacultyGrant */](req.body);

          case 4:
            id = _context2.sent;
            _context2.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getFacultyGrant */]({ faculty_grant_id: id });

          case 7:
            facultygrant = _context2.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created faculty grant',
              data: facultygrant
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 14:
            _context2.next = 17;
            break;

          case 16:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// removes a faculty grant
router.post('/api/facultygrant/delete', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getFacultyGrant */](req.body);

          case 3:
            facultygrant = _context3.sent;
            _context3.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* removeFacultyGrant */](req.body);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed faculty grant',
              data: facultygrant
            });
            _context3.next = 20;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3['catch'](0);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 15 : _context3.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Faculty grant not found';
            return _context3.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context3.abrupt('break', 19);

          case 19:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 20:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// edits a facultygrant
router.post('/api/facultygrant/edit', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editFacultyGrant */](req.body);

          case 3:
            _context4.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getFacultyGrant */]({
              id: req.body.faculty_grant_id
            });

          case 5:
            facultygrant = _context4.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited faculty grant',
              data: facultygrant
            });
            _context4.next = 20;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](0);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 15 : _context4.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Faculty grant not found';
            return _context4.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context4.abrupt('break', 19);

          case 19:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 20:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFacultyGrant; });
/* unused harmony export getAllFacultyGrant */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editFacultyGrant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


//adds a faculty grant
var addFacultyGrant = function addFacultyGrant(_ref) {
  var type = _ref.type,
      isapproved = _ref.isapproved,
      professional_chair = _ref.professional_chair,
      grants = _ref.grants,
      grant_title = _ref.grant_title,
      start_date = _ref.start_date,
      emp_date = _ref.emp_date,
      emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n        CALL \n        insert_faculty_grant(?, ?, ?, ?, ?, ?, ?, ?);\n      ';

    var values = [type, isapproved, professional_chair, grants, grant_title, start_date, emp_date, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err.message);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// gets all faculty
var getAllFacultyGrant = function getAllFacultyGrant() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n        call view_faculty_grant();\n      ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
var getFacultyGrant = function getFacultyGrant(_ref2) {
  var id = _ref2.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            FACULTYGRANT\n          WHERE\n            faculty_grant_id = ?\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, rows) {
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
var removeFacultyGrant = function removeFacultyGrant(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL\n      delete_faculty_grant();\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, results) {
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
var editFacultyGrant = function editFacultyGrant(_ref4) {
  var faculty_grant_id = _ref4.faculty_grant_id,
      type = _ref4.type,
      is_approved = _ref4.is_approved,
      professional_chair = _ref4.professional_chair,
      grants = _ref4.grants,
      grant_title = _ref4.grant_title,
      start_date = _ref4.start_date,
      end_date = _ref4.end_date,
      emp_id = _ref4.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL \n      update_faculty_grant(?, ?, ?, ?, ?, ?, ?, ?, ?);\n    ';

    var values = [type, isapproved, professional_chair, grants, grant_title, start_date, emp_date, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(35);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/limitedpractice/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.haveApplied && req.body.date_submitted && req.body.emp_id)) {
              _context.next = 16;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addLimitedPractice */](req.body);

          case 4:
            id = _context.sent;
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getLimitedPractice */]({ limited_practice_id: id });

          case 7:
            sample = _context.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created limited practice',
              data: sample
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 14:
            _context.next = 17;
            break;

          case 16:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/limitedpractice/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.limited_practice_id) {
              _context2.next = 15;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getLimitedPractice */](req.body);

          case 4:
            book = _context2.sent;
            _context2.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeLimitedPractice */](req.body);

          case 7:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed limited practice',
              data: book
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context2.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 10]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.post('/api/limitedpractice/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.limited_practice_id && req.body.haveApplied && req.body.date_submitted && req.body.emp_id)) {
              _context3.next = 15;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editLimitedPractice */](req.body);

          case 4:
            _context3.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getLimitedPractice */]({
              limited_practice_id: req.body.limited_practice_id
            });

          case 6:
            sample = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully edited limited practice',
              data: sample
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context3.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[1, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/api/limitedpractice/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getLimitedPractice */](req.body);

          case 3:
            book = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched limited practice',
              data: book
            });
            _context4.next = 18;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 13 : _context4.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Limited practice not found';
            return _context4.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context4.abrupt('break', 17);

          case 17:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 18:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.get('/api/limitedpractice/viewAll', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllLimitedPractice */]();

          case 3:
            subjects = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all limited practice',
              data: subjects
            });
            _context5.next = 16;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context5.abrupt('break', 15);

          case 15:
            res.status(200).json({ status: _context5.t0, message: message });

          case 16:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllLimitedPractice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addLimitedPractice = function addLimitedPractice(_ref) {
  var haveApplied = _ref.haveApplied,
      date_submitted = _ref.date_submitted,
      emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL  \n      insert_limited_practice(?, ?, ?)\n    ';

    var values = [haveApplied, date_submitted, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

var removeLimitedPractice = function removeLimitedPractice(_ref2) {
  var limited_practice_id = _ref2.limited_practice_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n        CALL\n        delete_limited_practice(?);\n      ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, limited_practice_id, function (err, results) {
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

var editLimitedPractice = function editLimitedPractice(_ref3) {
  var limited_practice_id = _ref3.limited_practice_id,
      haveApplied = _ref3.haveApplied,
      date_submitted = _ref3.date_submitted,
      emp_id = _ref3.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n        CALL\n        update_limited_practice(?, ?, ?, ?)\n      ';

    var values = [haveApplied, date_submitted, emp_id, limited_practice_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

var getLimitedPractice = function getLimitedPractice(_ref4) {
  var limited_practice_id = _ref4.limited_practice_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          CALL\n          view_limited_practice_by_emp_id(?)\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, limited_practice_id, function (err, rows) {
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

var getAllLimitedPractice = function getAllLimitedPractice() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n        CALL\n        view_limited_practice()\n      ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map