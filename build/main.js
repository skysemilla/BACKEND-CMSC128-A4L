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
/***/ (function(module, exports) {

module.exports = require("sqlstring");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_extension_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_publications_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_signup_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_studyload_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_teachload_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_facultylist_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_fsr_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_adminWork_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_consulHours_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_facultygrant_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_limitedpractice_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__entities_profile_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__entities_admin_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__entities_subject_router__ = __webpack_require__(43);


// put import routers here
















var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// put use statements here
router.use('/', __WEBPACK_IMPORTED_MODULE_1__entities_auth_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__entities_extension_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_3__entities_publications_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_4__entities_signup_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_5__entities_studyload_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_6__entities_teachload_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_7__entities_facultylist_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_8__entities_fsr_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_9__entities_adminWork_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_10__entities_consulHours_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_11__entities_facultygrant_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_12__entities_limitedpractice_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_13__entities_profile_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_14__entities_admin_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_15__entities_subject_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(14);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

var alphanumRegex = /^[A-Za-z0-9]+$/;
var passRegex = /^[A-Za-z0-9\-_.]+$/;

router.post('/api/login', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var user, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.username.match(alphanumRegex) && req.body.password && req.body.password.length >= 6 && req.body.password.length <= 16 && req.body.password.match(passRegex))) {
              _context.next = 20;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* login */](req.body);

          case 4:
            user = _context.sent;

            req.session.user = user;
            res.status(200).json({
              status: 200,
              message: 'Successfully logged in',
              data: user
            });
            _context.next = 20;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](1);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 500 ? 15 : _context.t1 === 404 ? 17 : 19;
            break;

          case 15:
            message = 'Internal server error while logging in';
            return _context.abrupt('break', 19);

          case 17:
            message = 'Wrong credentials';
            return _context.abrupt('break', 19);

          case 19:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 9]]);
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

var SqlString = __webpack_require__(3);

var login = function login(_ref) {
  var username = _ref.username,
      password = _ref.password;

  return new Promise(function (resolve, reject) {
    var values = [username, password];
    var queryString = SqlString.format('\n      SELECT \n        *\n      FROM\n        EMPLOYEE\n      WHERE\n        username = BINARY ? and\n        password = BINARY sha2(?,256)\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(16);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();
var alphanumRegex = /^[a-zA-Z0-9 ]*[a-zA-Z ][a-zA-Z0-9 ]*$/;
var numRegex = /^[0-9\s\-']+$/;
var creditRegex = /^[0-9]$/;
var empidRegex = /^[0-9]{9}$/;
var nameRegex = /^[A-Za-z\-'\s]+$/;

// gets extension
router.post('/api/extension/viewByID', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var extensions, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getExtensionByID */](req.body);

          case 3:
            extensions = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all Extensions',
              data: extensions
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

router.post('/api/extension/viewByID', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var extension, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.id) {
              _context2.next = 19;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getExtensionByID */](req.body);

          case 4:
            extension = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched Extension',
              data: extension
            });
            _context2.next = 19;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 14 : _context2.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Extension not found';
            return _context2.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context2.abrupt('break', 18);

          case 18:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// get a extensions
router.post('/api/extension/view', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var extension, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!req.body.id) {
              _context3.next = 19;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getExtension */](req.body);

          case 4:
            extension = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched Extension',
              data: extension
            });
            _context3.next = 19;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 14 : _context3.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Extension not found';
            return _context3.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context3.abrupt('break', 18);

          case 18:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 19:
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

// credit_unit,
//   extension_name,
//   extension_type,
//   no_of_hours,
//   no_of_participants,
//   extension_role,
//   start_time,
//   end_time,
//   funding_agency,
//   emp_id

// add a extension
router.post('/api/extension/add', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(req.body.credit_unit >= 0 && req.body.extension_type && req.body.extension_name && req.body.no_of_participants >= 0 && req.body.extension_role && req.body.funding_agency && req.body.funding_agency.match(numRegex) === false)) {
              _context4.next = 13;
              break;
            }

            _context4.prev = 1;
            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addExtension */](req.body);

          case 4:
            id = _context4.sent;

            // const extensionAdded = await Ctrl.getExtension({ id: id });

            res.status(200).json({
              status: 200,
              message: 'Successfully added Extension'
              // data: extensionAdded
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

// removes an extension
router.post('/api/extension/delete', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!req.body.id) {
              _context5.next = 18;
              break;
            }

            _context5.prev = 1;
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeExtension */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed sample'
              // data: extension
            });
            _context5.next = 18;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](1);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 13 : _context5.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Cannot Delete: Extension not found';
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
    }, _callee5, _this, [[1, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// edits a extension
router.post('/api/extension/edit', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!req.body.id) {
              _context6.next = 18;
              break;
            }

            _context6.prev = 1;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editExtension */](req.body);

          case 4:
            // const extensionEdited = await Ctrl.getExtension({ id: req.body.extension_id });

            res.status(200).json({
              status: 200,
              message: 'Successfully edited extension'
              // data: extensionEdited
            });
            _context6.next = 18;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](1);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 13 : _context6.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Extension not found';
            return _context6.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context6.abrupt('break', 17);

          case 17:
            res.status(_context6.t0).json({ status: _context6.t0, message: message });

          case 18:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[1, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getExtensionByID; });
/* unused harmony export getExtensions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editExtension; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

// gets extensions
var getExtension = function getExtension(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('SELECT * from EXTENSION where emp_id = ?', [id]);

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

// gets a extension
var getExtensionByID = function getExtensionByID(_ref2) {
  var id = _ref2.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          SELECT * from EXTENSION where extension_id = ?;\n        ', [id]);

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

// gets all extensions
var getExtensions = function getExtensions() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL\n      view_extension();\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// adds a extension
var addExtension = function addExtension(_ref3) {
  var credit_unit = _ref3.credit_unit,
      extension_name = _ref3.extension_name,
      extension_type = _ref3.extension_type,
      no_of_hours = _ref3.no_of_hours,
      no_of_participants = _ref3.no_of_participants,
      extension_role = _ref3.extension_role,
      start_time = _ref3.start_time,
      end_time = _ref3.end_time,
      funding_agency = _ref3.funding_agency,
      emp_id = _ref3.emp_id;

  return new Promise(function (resolve, reject) {
    var values = [credit_unit, extension_name, extension_type, no_of_hours, no_of_participants, extension_role, start_time, end_time, funding_agency, emp_id];
    var queryString = SqlString.format('\n            CALL insert_extension(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a extension
var removeExtension = function removeExtension(_ref4) {
  var id = _ref4.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      CALL delete_extension(?);\n    ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
var editExtension = function editExtension(_ref5) {
  var extension_id_update = _ref5.extension_id_update,
      credit_unit_update = _ref5.credit_unit_update,
      extension_name_update = _ref5.extension_name_update,
      extension_type_update = _ref5.extension_type_update,
      no_of_hours_update = _ref5.no_of_hours_update,
      no_of_participants_update = _ref5.no_of_participants_update,
      extension_role_update = _ref5.extension_role_update,
      start_time_update = _ref5.start_time_update,
      end_time_update = _ref5.end_time_update,
      funding_agency_update = _ref5.funding_agency_update,
      emp_id_update = _ref5.emp_id_update;

  return new Promise(function (resolve, reject) {
    var values = [extension_id_update, credit_unit_update, extension_name_update, extension_type_update, no_of_hours_update, no_of_participants_update, extension_role_update, start_time_update, end_time_update, funding_agency_update, emp_id_update];
    var queryString = SqlString.format('\n      CALL update_extension(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(18);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var multer = __webpack_require__(19);

var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();
var alphanumRegex = /^[a-zA-Z0-9 ]*[a-zA-Z ][a-zA-Z0-9 ]*$/;
var numRegex = /^[0-9\s\-']+$/;
var creditRegex = /^[0-9]$/;
var empidRegex = /^[0-9]{9}$/;

// gets a publication by id
router.post('/api/publication/view', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body.id) {
              _context.next = 19;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getPublication */](req.body);

          case 4:
            publication = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched publication',
              data: publication
            });
            _context.next = 19;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 404 ? 14 : _context.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Publication not found';
            return _context.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context.abrupt('break', 18);

          case 18:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 19:
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

// gets publications
router.post('/api/publication/viewAll', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context2.next = 17;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* getPublications */](req.body);

          case 4:
            publications = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all publications',
              data: publications
            });
            _context2.next = 17;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 500 ? 14 : 16;
            break;

          case 14:
            message = 'Internal server error';
            return _context2.abrupt('break', 16);

          case 16:

            res.status(200).json({ status: _context2.t0, message: message });

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// add a publication
router.post('/api/publication/add', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.category && req.body.subcategory && req.body.title && !req.body.title.match(numRegex) && req.body.title.match(alphanumRegex) && req.body.credit_units >= 0 && req.body.credit_units.match(creditRegex))) {
              _context3.next = 15;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* addPublication */](req.body);

          case 4:
            id = _context3.sent;

            console.log('title');
            console.log(req.body.title);
            // const log = await Ctrl.addPublicationLog(req.body.title);
            // const publication = await Ctrl.getPublication({ id: id });

            res.status(200).json({
              status: 200,
              message: 'Successfully created publication',
              data: id
              // data: log
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

// add a coworker
router.post('/api/coworker/add', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.body.publication_id) {
              _context4.next = 12;
              break;
            }

            _context4.prev = 1;
            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addCoworker */](req.body);

          case 4:
            // const row = Ctrl.checkIfExisting(req.body);

            res.status(200).json({
              status: 200,
              message: 'Successfully added coworker'
              // data: row
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 10:
            _context4.next = 13;
            break;

          case 12:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[1, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// removes a publication
router.post('/api/publication/delete', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!req.body.id) {
              _context5.next = 21;
              break;
            }

            _context5.prev = 1;
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getPublication */](req.body);

          case 4:
            publication = _context5.sent;
            _context5.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["j" /* removePublication */](req.body);

          case 7:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed publication',
              data: publication
            });
            _context5.next = 21;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5['catch'](1);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 16 : _context5.t1 === 500 ? 18 : 20;
            break;

          case 16:
            message = 'Publication not found';
            return _context5.abrupt('break', 20);

          case 18:
            message = 'Internal server error';
            return _context5.abrupt('break', 20);

          case 20:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 21:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[1, 10]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// edits a publication
router.post('/api/publication/edit', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(req.body.category && req.body.subcategory && req.body.title && !req.body.title.match(numRegex) && req.body.title.match(alphanumRegex) && req.body.credit_units >= 0 && req.body.credit_units.toString().match(creditRegex) && req.body.publication_id)) {
              _context6.next = 21;
              break;
            }

            _context6.prev = 1;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* editPublication */](req.body);

          case 4:
            _context6.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getPublication */]({
              id: req.body.publication_id
            });

          case 6:
            publication = _context6.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited publication',
              data: publication
            });
            _context6.next = 21;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6['catch'](1);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 16 : _context6.t1 === 500 ? 18 : 20;
            break;

          case 16:
            message = 'Publication not found';
            return _context6.abrupt('break', 20);

          case 18:
            message = 'Internal server error';
            return _context6.abrupt('break', 20);

          case 20:
            res.status(_context6.t0).json({ status: _context6.t0, message: message });

          case 21:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[1, 10]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

// gets publications
router.get('/api/publication/viewEmployees', function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* getEmployees */]();

          case 3:
            publications = _context7.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all emps',
              data: publications
            });
            _context7.next = 16;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7['catch'](0);
            message = '';
            _context7.t1 = _context7.t0;
            _context7.next = _context7.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context7.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context7.t0, message: message });

          case 16:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this, [[0, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

// gets publications
router.post('/api/publication/viewEmployeeCoworkers', function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context8.next = 17;
              break;
            }

            _context8.prev = 1;
            _context8.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getEmployeeCoworkers */](req.body);

          case 4:
            publications = _context8.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all possible coworkers',
              data: publications
            });
            _context8.next = 17;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8['catch'](1);
            message = '';
            _context8.t1 = _context8.t0;
            _context8.next = _context8.t1 === 500 ? 14 : 16;
            break;

          case 14:
            message = 'Internal server error';
            return _context8.abrupt('break', 16);

          case 16:

            res.status(200).json({ status: _context8.t0, message: message });

          case 17:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, _this, [[1, 8]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

// gets publications
router.get('/api/publication/viewCoworkers', function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!req.body.id) {
              _context9.next = 17;
              break;
            }

            _context9.prev = 1;
            _context9.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getCoworkers */](req.body);

          case 4:
            publications = _context9.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all coworkers',
              data: publications
            });
            _context9.next = 17;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9['catch'](1);
            message = '';
            _context9.t1 = _context9.t0;
            _context9.next = _context9.t1 === 500 ? 14 : 16;
            break;

          case 14:
            message = 'Internal server error';
            return _context9.abrupt('break', 16);

          case 16:

            res.status(200).json({ status: _context9.t0, message: message });

          case 17:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, _this, [[1, 8]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

// removes a publication
router.post('/api/publication/deleteCoworkers', function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!req.body.id) {
              _context10.next = 18;
              break;
            }

            _context10.prev = 1;
            _context10.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["i" /* removeCoworkers */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed coworkers'
              // data: publication
            });
            _context10.next = 18;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10['catch'](1);
            message = '';
            _context10.t1 = _context10.t0;
            _context10.next = _context10.t1 === 404 ? 13 : _context10.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Publication not found';
            return _context10.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context10.abrupt('break', 17);

          case 17:
            res.status(_context10.t0).json({ status: _context10.t0, message: message });

          case 18:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, _this, [[1, 7]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

// gets coworkers of a publication
router.post('/api/publication/getCoworkers', function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!req.body.id) {
              _context11.next = 19;
              break;
            }

            _context11.prev = 1;
            _context11.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getCoworkers */](req.body);

          case 4:
            publications = _context11.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all emps',
              data: publications
            });
            _context11.next = 19;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11['catch'](1);
            message = '';
            _context11.t1 = _context11.t0;
            _context11.next = _context11.t1 === 404 ? 14 : _context11.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Publication not found';
            return _context11.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context11.abrupt('break', 18);

          case 18:

            res.status(200).json({ status: _context11.t0, message: message });

          case 19:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, _this, [[1, 8]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.pdf');
  }
});

var upload = multer({ storage: storage }).any();

router.post('/api/publication/attach', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      console.log('sux');
    } else {
      console.log(req.File);
      console.log('success');
    }
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPublications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPublication; });
/* unused harmony export addPublicationLog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCoworker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return removePublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editPublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getEmployeeCoworkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeCoworkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCoworkers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

// gets a publication by id
var getPublication = function getPublication(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          CALL view_publication_by_ID(?);\n        ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
var getPublications = function getPublications(_ref2) {
  var empid = _ref2.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      CALL view_employee_publication(?);\n    ', [empid]);

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
var addPublication = function addPublication(_ref3) {
  var credit_units = _ref3.credit_units,
      category = _ref3.category,
      subcategory = _ref3.subcategory,
      funding = _ref3.funding,
      title = _ref3.title,
      role = _ref3.role,
      start_date = _ref3.start_date,
      end_date = _ref3.end_date,
      emp_id = _ref3.emp_id;

  return new Promise(function (resolve, reject) {
    if (start_date === '' || end_date === '') {
      var values = [credit_units, category, subcategory, funding, title, role, emp_id];
      var queryString = SqlString.format('\n          INSERT INTO PUBLICATION values(NULL, ?, ?, ?, ?, ?, ?, NULL, NULL, NULL, ?);\n        ', values);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
        if (err) {
          console.log(err);
          console.log('ERROR!!');
          return reject(500);
        }

        return resolve(results.insertId);
      });
    } else {
      var _values = [credit_units, category, subcategory, funding, title, role, start_date, end_date, emp_id];
      var _queryString = SqlString.format('\n          INSERT INTO PUBLICATION values(NULL, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?);\n        ', _values);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(_queryString, function (err, results) {
        if (err) {
          console.log(err);
          console.log('ERROR!!');
          return reject(500);
        }

        return resolve(results.insertId);
      });
    }
  });
};

var addPublicationLog = function addPublicationLog(_ref4) {
  var title = _ref4.title;

  return new Promise(function (resolve, reject) {
    var values = [title];
    var queryString = SqlString.format('\n        call insert_log(concat("Publication with title", ?, " has been added to the table PUBLICATION"));\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      if (err) {
        console.log(err);
        console.log('ERROR!!');
        return reject(500);
      }

      return resolve(results);
    });
  });
};

// adds a coworker
var addCoworker = function addCoworker(_ref5) {
  var coworker_id = _ref5.coworker_id,
      publication_id = _ref5.publication_id;

  return new Promise(function (resolve, reject) {
    var values = [coworker_id, publication_id];
    var queryString = SqlString.format('\n            CALL insert_coworker(?, ?);\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a publication
var removePublication = function removePublication(_ref6) {
  var id = _ref6.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      CALL delete_publication(?);\n    ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
var editPublication = function editPublication(_ref7) {
  var credit_units = _ref7.credit_units,
      category = _ref7.category,
      subcategory = _ref7.subcategory,
      funding = _ref7.funding,
      title = _ref7.title,
      role = _ref7.role,
      start_date = _ref7.start_date,
      end_date = _ref7.end_date,
      publication_id = _ref7.publication_id;

  return new Promise(function (resolve, reject) {
    if (start_date === '' || end_date === '') {
      var values = [credit_units, category, subcategory, funding, title, role, publication_id];
      var queryString = SqlString.format('\n        CALL update_publication(?, ?, ?, ?, ?, ?, null, null, ?);\n      ', values);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
        if (err) {
          console.log(err);
          return reject(500);
        }

        if (!res.affectedRows) {
          return reject(404);
        }

        return resolve();
      });
    } else {
      var _values2 = [credit_units, category, subcategory, funding, title, role, start_date, end_date, publication_id];
      var _queryString2 = SqlString.format('\n        CALL update_publication(?, ?, ?, ?, ?, ?, ?, ?, ?);\n      ', _values2);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(_queryString2, function (err, res) {
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

// gets employees
var getEmployees = function getEmployees() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n      SELECT * from EMPLOYEE;\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// gets all employee except self
var getEmployeeCoworkers = function getEmployeeCoworkers(_ref8) {
  var empid = _ref8.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      SELECT * from EMPLOYEE WHERE emp_id != ?;\n    ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// removes coworkers of a publication
var removeCoworkers = function removeCoworkers(_ref9) {
  var id = _ref9.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      CALL delete_coworker(?);\n    ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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

// gets all coworkers of a publication
var getCoworkers = function getCoworkers(_ref10) {
  var id = _ref10.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      SELECT c.emp_id, e.f_name, e.l_name FROM COWORKER c, EMPLOYEE e WHERE c.emp_id = e.emp_id and publication_id = ?;\n    ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results);
    });
  });
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(21);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();
var nameRegex = /^[A-Za-z\-'\s]+$/;
var alphanumRegex = /^[A-Za-z0-9]+$/;
var passRegex = /^[A-Za-z0-9\-_.]+$/;
var empIdRegex = /^[0-9]{9}$/;
var emailRegex = /^[^;"']+@up.edu.ph$/;

router.post('/api/signup', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.emp_id && req.body.emp_id.match(empIdRegex) && req.body.username && req.body.username.match(alphanumRegex) && req.body.password && req.body.password.length >= 6 && req.body.password.length <= 16 && req.body.password.match(passRegex) && req.body.type && req.body.f_name && req.body.f_name.match(nameRegex) && req.body.m_name && req.body.m_name.match(nameRegex) && req.body.l_name && req.body.l_name.match(nameRegex) && req.body.department && req.body.college && req.body.emp_type && req.body.is_full_time && req.body.email && req.body.email.match(emailRegex))) {
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

// get users
router.post('/api/checkValid', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var data, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(req.body.empid && req.body.empid.match(empIdRegex) && req.body.username && req.body.username.match(alphanumRegex) && req.body.email && req.body.email.match(emailRegex))) {
              _context2.next = 19;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* checkValid */](req.body);

          case 4:
            data = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched users',
              data: data
            });
            _context2.next = 19;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 14 : _context2.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'User not found';
            return _context2.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context2.abrupt('break', 18);

          case 18:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEmployee; });
/* unused harmony export getEmployee */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkValid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

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
      emp_type_no = _ref.emp_type_no,
      is_full_time = _ref.is_full_time,
      email = _ref.email;

  return new Promise(function (resolve, reject) {
    var values = [emp_id, username, password, type, f_name, m_name, l_name, department, college, emp_type, emp_type_no, is_full_time, email];
    var queryString = SqlString.format('\n      CALL insert_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
    var queryString = SqlString.format('\n          SELECT \n            *\n          FROM \n            EMPLOYEE\n          WHERE\n            emp_id_increment = ?;\n        ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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

// gets an employee
var checkValid = function checkValid(_ref3) {
  var empid = _ref3.empid,
      username = _ref3.username,
      email = _ref3.email;

  return new Promise(function (resolve, reject) {
    var values = [empid, username, email];
    var queryString = SqlString.format('\n          SELECT \n            *\n          FROM \n            EMPLOYEE\n          WHERE\n            emp_id = ? OR\n            username = ? OR\n            email = ?\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows[0]);
    });
  });
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(23);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/studyload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.credits && req.body.courseno && req.session.user.emp_id && req.body.start_time && req.body.end_time && req.body.school && req.body.days)) {
              _context.next = 13;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* addStudyLoad */](req.body, req.session.user);

          case 4:
            id = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully created study load' //,
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

router.post('/api/studyload/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.body);

            if (!req.body.studyload_id) {
              _context2.next = 18;
              break;
            }

            _context2.prev = 2;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["i" /* getStudyLoad */]([req.body.studyload_id]);

          case 5:
            book = _context2.sent;
            _context2.next = 8;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["j" /* removeStudyLoad */](req.body);

          case 8:
            _context2.next = 10;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["k" /* removeStudyLoadDays */](req.body.studyload_id);

          case 10:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed study load',
              data: book
            });
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2['catch'](2);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 16:
            _context2.next = 19;
            break;

          case 18:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[2, 13]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.post('/api/studyload/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.studyload_id && req.body.credits && req.body.courseno && req.body.start_time && req.body.school && req.body.days && req.session.user)) {
              _context3.next = 20;
              break;
            }

            _context3.prev = 2;
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* editStudyLoad */](req.body, req.session.user.emp_id);

          case 5:
            _context3.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["i" /* getStudyLoad */]([req.body.studyload_id]);

          case 7:
            sample = _context3.sent;
            _context3.next = 10;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["k" /* removeStudyLoadDays */](req.body.studyload_id);

          case 10:
            _context3.next = 12;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addDays */](req.body.studyload_id, req.body.days);

          case 12:
            res.status(200).json({
              status: 200,
              message: 'Successfully edited study load'
              // data: sample
            });
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3['catch'](2);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 18:
            _context3.next = 21;
            break;

          case 20:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 21:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[2, 15]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/api/studyload/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* getStudyEmp */](req.session.user);

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
router.post('/api/studyload/viewByStudyloadId', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(req.body);

            if (!(req.session.user && req.body)) {
              _context5.next = 22;
              break;
            }

            _context5.prev = 2;
            _context5.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["i" /* getStudyLoad */](req.body);

          case 5:
            book = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched study load',
              data: book
            });
            _context5.next = 20;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](2);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 15 : _context5.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Study load not found';
            return _context5.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context5.abrupt('break', 19);

          case 19:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 20:
            _context5.next = 23;
            break;

          case 22:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 23:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[2, 9]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

router.get('/api/studyload/viewAll', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getAllStudyLoad */]();

          case 3:
            subjects = _context6.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all studyload',
              data: subjects
            });
            _context6.next = 16;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](0);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context6.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context6.t0, message: message });

          case 16:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[0, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
router.get('/api/studyload/viewStudyCredentials', function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getStudyCredentials */](req.session.user);

          case 3:
            book = _context7.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched study credentials',
              data: book
            });
            _context7.next = 18;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7['catch'](0);
            message = '';
            _context7.t1 = _context7.t0;
            _context7.next = _context7.t1 === 404 ? 13 : _context7.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Credentials not found';
            return _context7.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context7.abrupt('break', 17);

          case 17:
            res.status(_context7.t0).json({ status: _context7.t0, message: message });

          case 18:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this, [[0, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

router.post('/api/studyload/editStudyCredentials', function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.degree && req.body.uni && req.body.studyleave && req.body.fellowship && req.session.user)) {
              _context8.next = 13;
              break;
            }

            _context8.prev = 2;
            _context8.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* editStudyCredentials */](req.body, req.session.user.emp_id);

          case 5:
            res.status(200).json({
              status: 200,
              message: 'Successfully edited study credentials'
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8['catch'](2);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context8.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, _this, [[2, 8]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
router.post('/api/studyload/getDays', function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(req, res) {
    var out;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!(req.body.studyload_id && req.session.user.emp_id)) {
              _context9.next = 13;
              break;
            }

            _context9.prev = 1;
            _context9.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* getDays */](req.body.studyload_id);

          case 4:
            out = _context9.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully got days',
              data: out
            });
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context9.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, _this, [[1, 8]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
router.post('/api/studyload/getStudyLoadFSR', function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10(req, res) {
    var out;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!(req.body.emp_id && req.session.user.emp_id)) {
              _context10.next = 13;
              break;
            }

            _context10.prev = 1;
            _context10.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* getStudyEmp */](req.body);

          case 4:
            out = _context10.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully got Studyload',
              data: out
            });
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context10.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, _this, [[1, 8]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());
router.post('/api/studyload/getStudyLoadCredentialsFSR', function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11(req, res) {
    var out;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!(req.body.emp_id && req.session.user.emp_id)) {
              _context11.next = 13;
              break;
            }

            _context11.prev = 1;
            _context11.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getStudyCredentials */](req.body);

          case 4:
            out = _context11.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully got Studyload',
              data: out
            });
            _context11.next = 11;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 11:
            _context11.next = 14;
            break;

          case 13:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 14:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, _this, [[1, 8]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return removeStudyLoadDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return removeStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getStudyEmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getStudyCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editStudyCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addDays; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

var addStudyLoad = function addStudyLoad(json, json2) {
  var credits = json.credits;
  var courseno = json.courseno;
  var start_time = json.start_time;
  var end_time = json.end_time;
  var school = json.school;
  var days = json.days;
  var emp_id = json2.emp_id;

  function send_response(err, result, args, last_query) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  }

  function insertDays(error, results, fields) {
    var queryString = 'Insert into STUDYLOAD_DAY VALUES (?,?)';
    var tempid = results[0].id;
    days.forEach(function (item) {
      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, [tempid, item]);
    }, send_response);
  }

  function getTempID(error, results, fields) {
    if (error) throw new Error(error);
    // const queryString = "SELECT studyload_id from STUDYLOAD where credits = ? and course_no = ? and emp_id = ? and start_time = ? and end_time = ? and school = ?"
    var queryString = ' Select max(studyload_id) id from STUDYLOAD';
    console.log(values);
    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, insertDays);
  }

  function start() {
    var queryString = 'call insert_studyload(?, ?, ?,?,?,?)';
    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, getTempID);
  }

  var values = [credits, courseno, emp_id, start_time, end_time, school];
  start();
};

var removeStudyLoadDays = function removeStudyLoadDays(studyload_id) {
  console.log(studyload_id);
  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n    DELETE FROM STUDYLOAD_DAY WHERE studyload_id = ?\n    ', [studyload_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
var removeStudyLoad = function removeStudyLoad(_ref) {
  var studyload_id = _ref.studyload_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n    call delete_studyload(?)\n    ', [studyload_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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

var editStudyLoad = function editStudyLoad(json, emp_id) {
  var studyload_id = json.studyload_id;
  var credits = json.credits;
  var courseno = json.courseno;
  var start_time = json.start_time;
  var end_time = json.end_time;
  var school = json.school;
  var values = [studyload_id, credits, courseno, start_time, end_time, school, emp_id];
  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n        call update_studyload(?,?,?,?,?,?,?)\n      ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

var getStudyLoad = function getStudyLoad(_ref2) {
  var studyload_id = _ref2.studyload_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      call view_studyload_id_studyload(?)\n        ', [studyload_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
    var queryString = SqlString.format('\n        call view_employee_studyload(?)\n      ', [emp_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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

var getStudyCredentials = function getStudyCredentials(json) {
  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var queryString = SqlString.format('\n        SELECT * FROM STUDY_CREDENTIALS WHERE emp_id = ?\n      ', [emp_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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

var editStudyCredentials = function editStudyCredentials(json, emp_id) {
  var university = json.uni;
  var degree = json.degree;
  var fellowship = false;
  var studyleave = false;
  if (json.fellowship === 'Yes') {
    fellowship = true;
  }
  if (json.studyleave === 'Yes') {
    studyleave = true;
  }

  var values = [emp_id, degree, university, studyleave, fellowship];

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      call update_study_credentials(?,?,?,?,?)\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!res.affectedRows) {
        return reject(403);
      }

      return resolve();
    });
  });
};

var getDays = function getDays(_ref3) {
  var studyload_id = _ref3.studyload_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n        Select * from STUDYLOAD_DAY WHERE studyload_id = ?\n      ', [studyload_id]);

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
var addDays = function addDays(_ref4) {
  var studyload_id = _ref4.studyload_id,
      days = _ref4.days;

  var queryString = SqlString.format('Insert into STUDYLOAD_DAY VALUES (?,?)', [studyload_id, item]);
  days.forEach(function (item) {
    // db.query(queryString, [studyload_id, item]);
    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString);
  });
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/teachload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var existHourTeachLoad, existDayTeachLoad, existHourConsultation, existDayConsultation, id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.no_of_students && req.body.subject_code && req.body.section_code && req.session.user)) {
              _context.next = 32;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* checkExistHourTeachLoad */](req.body, req.session.user);

          case 4:
            existHourTeachLoad = _context.sent;
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* checkExistDayTeachLoad */](req.body, req.session.user);

          case 7:
            existDayTeachLoad = _context.sent;
            _context.next = 10;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* checkExistHourConsultation */](req.body, req.session.user);

          case 10:
            existHourConsultation = _context.sent;
            _context.next = 13;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* checkExistDayConsultation */](req.body, req.session.user);

          case 13:
            existDayConsultation = _context.sent;

            if (!((existDayConsultation == 0 || existHourConsultation == 0) && (existHourTeachLoad == 0 || existDayTeachLoad == 0))) {
              _context.next = 24;
              break;
            }

            _context.next = 17;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addTeachLoad */](req.body, req.session.user);

          case 17:
            id = _context.sent;
            _context.next = 20;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["n" /* getTeachLoad */]({ teachingload_id: id });

          case 20:
            sample = _context.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created teaching load',
              data: sample
            });
            _context.next = 25;
            break;

          case 24:
            res.status(400).json({
              status: 400,
              message: 'Overlapping schedule error'
            });

          case 25:
            _context.next = 30;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 30:
            _context.next = 33;
            break;

          case 32:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 33:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 27]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/teachload/delete/', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.teachingload_id) {
              _context2.next = 15;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["n" /* getTeachLoad */](req.body);

          case 4:
            book = _context2.sent;
            _context2.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["o" /* removeTeachLoad */](req.body);

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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.no_of_students && req.body.teachingload_id)) {
              _context3.next = 16;
              break;
            }

            _context3.prev = 2;
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* editTeachLoad */](req.body);

          case 5:
            _context3.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["n" /* getTeachLoad */]({
              teachingload_id: req.body.teachingload_id
            });

          case 7:
            sample = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited teach load',
              data: sample
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3['catch'](2);

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
    }, _callee3, _this, [[2, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/api/teachingload/viewByTeachloadId', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(req.body);

            if (!(req.session.user && req.body.teachingload_id)) {
              _context4.next = 22;
              break;
            }

            _context4.prev = 2;
            _context4.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["n" /* getTeachLoad */](req.body.teachingload_id);

          case 5:
            book = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched study load',
              data: book
            });
            _context4.next = 20;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](2);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 15 : _context4.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Study load not found';
            return _context4.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context4.abrupt('break', 19);

          case 19:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 20:
            _context4.next = 23;
            break;

          case 22:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 23:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[2, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.post('/api/teachload/viewempadmin', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(req.body.emp_id);

            if (!req.body.emp_id) {
              _context5.next = 20;
              break;
            }

            _context5.prev = 2;
            _context5.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["m" /* getTeachEmpAdmin */](req.body);

          case 5:
            book = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched teach load',
              data: book
            });
            _context5.next = 20;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5['catch'](2);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 15 : _context5.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Teach load not found';
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
    }, _callee5, _this, [[2, 9]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

router.post('/api/teachload/view', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!req.session.user) {
              _context6.next = 19;
              break;
            }

            _context6.prev = 1;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["l" /* getTeachEmp */](req.session.user);

          case 4:
            book = _context6.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched teach load',
              data: book
            });
            _context6.next = 19;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6['catch'](1);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 14 : _context6.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Teach load not found';
            return _context6.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context6.abrupt('break', 18);

          case 18:
            res.status(_context6.t0).json({ status: _context6.t0, message: message });

          case 19:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[1, 8]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

router.get('/api/teachload/viewAll', function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["i" /* getAllTeachLoad */]();

          case 3:
            subjects = _context7.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all teaching load',
              data: subjects
            });
            _context7.next = 16;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7['catch'](0);
            message = '';
            _context7.t1 = _context7.t0;
            _context7.next = _context7.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context7.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context7.t0, message: message });

          case 16:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this, [[0, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

router.post('/api/teachload/editAddTeachLoadUnits/', function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!(req.body.units && req.session.user)) {
              _context8.next = 15;
              break;
            }

            _context8.prev = 1;
            _context8.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* editAddTeachLoadUnits */](req.body, req.session.user);

          case 4:
            _context8.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["j" /* getEmployee */](req.session.user);

          case 6:
            sample = _context8.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited teach load',
              data: sample
            });
            _context8.next = 13;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context8.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, _this, [[1, 10]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

router.post('/api/teachload/editRemoveTeachLoadUnits/', function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!(req.body.units && req.session.user)) {
              _context9.next = 15;
              break;
            }

            _context9.prev = 1;
            _context9.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* editRemoveTeachLoadUnits */](req.body, req.session.user);

          case 4:
            _context9.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["j" /* getEmployee */](req.session.user);

          case 6:
            sample = _context9.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited teach load',
              data: sample
            });
            _context9.next = 13;
            break;

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 13:
            _context9.next = 16;
            break;

          case 15:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 16:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, _this, [[1, 10]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

router.post('/api/teachingload/viewByTeachloadId', function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            console.log(req.body);

            if (!req.body.teachingload_id) {
              _context10.next = 22;
              break;
            }

            _context10.prev = 2;
            _context10.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["n" /* getTeachLoad */](req.body);

          case 5:
            book = _context10.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched teach load',
              data: book
            });
            _context10.next = 20;
            break;

          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10['catch'](2);
            message = '';
            _context10.t1 = _context10.t0;
            _context10.next = _context10.t1 === 404 ? 15 : _context10.t1 === 500 ? 17 : 19;
            break;

          case 15:
            message = 'Teach load not found';
            return _context10.abrupt('break', 19);

          case 17:
            message = 'Internal server error';
            return _context10.abrupt('break', 19);

          case 19:
            res.status(_context10.t0).json({ status: _context10.t0, message: message });

          case 20:
            _context10.next = 23;
            break;

          case 22:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 23:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, _this, [[2, 9]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

router.post('/api/teachload/subjectByTeachId', function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!req.body.teachingload_id) {
              _context11.next = 21;
              break;
            }

            _context11.prev = 1;
            _context11.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["k" /* getSubjectByTeachLoad */](req.body);

          case 4:
            book = _context11.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched subject',
              data: book
            });
            _context11.next = 19;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11['catch'](1);
            message = '';
            _context11.t1 = _context11.t0;
            _context11.next = _context11.t1 === 404 ? 14 : _context11.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Subject not found';
            return _context11.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context11.abrupt('break', 18);

          case 18:
            res.status(_context11.t0).json({ status: _context11.t0, message: message });

          case 19:
            _context11.next = 22;
            break;

          case 21:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 22:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, _this, [[1, 8]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkExistDayTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkExistDayConsultation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return checkExistHourConsultation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkExistHourTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return removeTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return editTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getTeachEmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getTeachEmpAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getAllTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return editAddTeachLoadUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return editRemoveTeachLoadUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getSubjectByTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getEmployee; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

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
    var values = [emp_id, no_of_students, subject_code, section_code];

    var queryString = SqlString.format('\n      INSERT INTO TEACHINGLOAD\n          (emp_id, no_of_students, subject_id)\n        VALUES\n          (?, ?, (SELECT subject_id FROM SUBJECT \n                  WHERE subject_code = ? AND\n                        section_code = ? limit 1));\n      ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

var checkExistDayTeachLoad = function checkExistDayTeachLoad(_ref2, json) {
  var subject_code = _ref2.subject_code,
      section_code = _ref2.section_code;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var values = [subject_code, section_code, emp_id];

    var queryString = SqlString.format('\n      SELECT COUNT(*) as count FROM\n      (SELECT day from SUBJECT_DAY where subject_id = (SELECT subject_id from SUBJECT where subject_code = ? and section_code = ? ))a,\n      (SELECT day from SUBJECT_DAY where subject_id IN (SELECT subject_id FROM SUBJECT NATURAL JOIN TEACHINGLOAD where emp_id = ?))b\n      WHERE(a.day=b.day);', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      console.log(results);
      if (err) {
        console.log('swswswswswsw');
        return reject(500);
      }
      return resolve(results[0].count);
    });
  });
};

var checkExistDayConsultation = function checkExistDayConsultation(_ref3, json) {
  var subject_code = _ref3.subject_code,
      section_code = _ref3.section_code;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var values = [subject_code, section_code, emp_id];

    var queryString = SqlString.format('\n     SELECT COUNT(*) as count FROM\n     (SELECT day from SUBJECT_DAY NATURAL JOIN SUBJECT where subject_code = ? and section_code = ?)a,\n      (SELECT day from CONSULTATION_DAY NATURAL JOIN CONSULTATION where emp_id = ?)b\n      WHERE(\n      a.day=b.day);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      console.log(results);
      if (err) {
        console.log('AHHHHHHHHHHHHK');
        return reject(500);
      }
      return resolve(results[0].count);
    });
  });
};

var checkExistHourConsultation = function checkExistHourConsultation(_ref4, json) {
  var subject_code = _ref4.subject_code,
      section_code = _ref4.section_code;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var values = [emp_id, subject_code, section_code];

    var queryString = SqlString.format('\n      SELECT COUNT(*) as count FROM\n      (SELECT consultation_start_time,consultation_end_time from CONSULTATION WHERE emp_id = ?)a,\n      (SELECT start_time, end_time FROM SUBJECT WHERE subject_code = ? and section_code = ?)b\n      WHERE(\n      (b.start_time > a.consultation_start_time AND b.start_time < a.consultation_end_time) OR\n      (b.end_time > a.consultation_start_time AND b.end_time < a.consultation_end_time) OR\n      (b.start_time = a.consultation_start_time AND b.end_time = a.consultation_end_time));\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      console.log(results);
      if (err) {
        console.log('Bepis');
        return reject(500);
      }
      return resolve(results[0].count);
    });
  });
};

var checkExistHourTeachLoad = function checkExistHourTeachLoad(_ref5, json) {
  var subject_code = _ref5.subject_code,
      section_code = _ref5.section_code;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var values = [emp_id, subject_code, section_code];

    var queryString = SqlString.format('\n      SELECT COUNT(*) as count FROM\n      (SELECT start_time,end_time from TEACHINGLOAD NATURAL JOIN SUBJECT WHERE emp_id = ?)a,\n      (SELECT start_time, end_time FROM SUBJECT WHERE subject_code = ? and section_code = ?)b\n      WHERE(\n      (b.start_time > a.start_time AND b.start_time < a.end_time) OR\n      (b.end_time > a.start_time AND b.end_time < a.end_time) OR\n      (b.end_time = a.end_time AND b.start_time = a.start_time));\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      console.log(results);
      if (err) {
        console.log("wsswswswswsws");
        return reject(500);
      }

      return resolve(results[0].count);
    });
  });
};

var removeTeachLoad = function removeTeachLoad(_ref6) {
  var teachingload_id = _ref6.teachingload_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n        DELETE \n          FROM TEACHINGLOAD\n        WHERE \n          teachingload_id = ?\n      ', teachingload_id);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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

var editTeachLoad = function editTeachLoad(_ref7) {
  var no_of_students = _ref7.no_of_students,
      teachingload_id = _ref7.teachingload_id;

  return new Promise(function (resolve, reject) {
    var values = [no_of_students, teachingload_id];

    var queryString = SqlString.format('\n      UPDATE TEACHINGLOAD\n        SET\n          no_of_students = ?\n        WHERE\n          teachingload_id=?;\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

var getTeachLoad = function getTeachLoad(_ref8) {
  var teachingload_id = _ref8.teachingload_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          SELECT \n            *\n          FROM \n            TEACHINGLOAD\n          WHERE\n            teachingload_id = ?;\n        ', teachingload_id);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
    var queryString = SqlString.format('\n        call view_employee_teachingload(?)\n        ', [emp_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      var newArray = [];
      var visitedArray = [];
      var i, j;
      for (i = 0; i < rows[0].length; i++) {
        var daysArray = [];
        if (visitedArray.includes(rows[0][i].teachingload_id)) {} else {
          for (j = 0; j < rows[0].length; j++) {
            if (rows[0][i].teachingload_id == rows[0][j].teachingload_id) {
              daysArray.push(rows[0][j].day);
            }
          }
          rows[0][i].day = daysArray;
          visitedArray.push(rows[0][i].teachingload_id);
          newArray.push(rows[0][i]);
        }
      }

      return resolve(newArray);
    });
  });
};

var getTeachEmpAdmin = function getTeachEmpAdmin(_ref9) {
  var emp_id = _ref9.emp_id;

  return new Promise(function (resolve, reject) {
    // const queryString = `
    //     call view_employee_teachingload(?);
    //     `;
    var queryString = SqlString.format('\n      SELECT * FROM TEACHINGLOAD NATURAL JOIN SUBJECT NATURAL JOIN SUBJECT_DAY WHERE\n      emp_id = ?;\n    ', emp_id);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      var newArray = [];
      var visitedArray = [];
      var i, j;
      for (i = 0; i < rows[0].length; i++) {
        var daysArray = [];
        if (visitedArray.includes(rows[0][i].teachingload_id)) {} else {
          for (j = 0; j < rows[0].length; j++) {
            if (rows[0][i].teachingload_id == rows[0][j].teachingload_id) {
              daysArray.push(rows[0][j].day);
            }
          }
          rows[0][i].day = daysArray;
          visitedArray.push(rows[0][i].teachingload_id);
          newArray.push(rows[0][i]);
        }
      }

      console.log(newArray);
      return resolve(newArray);
    });
  });
};

var getAllTeachLoad = function getAllTeachLoad() {
  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          SELECT *\n          FROM TEACHINGLOAD\n        ');

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

var editAddTeachLoadUnits = function editAddTeachLoadUnits(_ref10, json) {
  var units = _ref10.units;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var values = [emp_id, units, emp_id];

    var queryString = SqlString.format('\n      update EMPLOYEE set current_teaching_units=(select current_teaching_units from (select * from EMPLOYEE)e  where e.emp_id=?)+? where emp_id=?;\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

var editRemoveTeachLoadUnits = function editRemoveTeachLoadUnits(_ref11, json) {
  var units = _ref11.units;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var values = [emp_id, units, emp_id];

    var queryString = SqlString.format('\n      update EMPLOYEE set current_teaching_units=(select current_teaching_units from (select * from EMPLOYEE)e  where e.emp_id=?)-? where emp_id=?;\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

var getSubjectByTeachLoad = function getSubjectByTeachLoad(_ref12) {
  var teachingload_id = _ref12.teachingload_id;

  return new Promise(function (resolve, reject) {
    var values = [teachingload_id, teachingload_id];

    var queryString = SqlString.format('\n          SELECT subj.subject_code, subj.section_code, subj.units, subj.isLecture, subj.isGraduate, tl.no_of_students FROM SUBJECT subj, TEACHINGLOAD tl\n          WHERE\n            subj.subject_id = (select subject_id from\n            TEACHINGLOAD where teachingload_id=?) and teachingload_id=?;\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      // console.log(queryString);
      // console.log(teachingload_id);
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

var getEmployee = function getEmployee(json) {
  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var values = [emp_id];

    var queryString = SqlString.format('\n      select * from EMPLOYEE where emp_id=?;\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!res.length) {
        return reject(404);
      }

      return resolve(res[0]);
    });
  });
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(28);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

var empidRegex = /^[0-9]{9}$/;

// gets one faculty
router.post('/api/faculty/view', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var faculty, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body.id.match(empidRegex)) {
              _context.next = 19;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* getFaculty */](req.body);

          case 4:
            faculty = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty',
              data: faculty
            });
            _context.next = 19;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 404 ? 14 : _context.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Faculty not found';
            return _context.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context.abrupt('break', 18);

          case 18:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 19:
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

// gets all faculty
router.get('/api/faculty/viewAll', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var faculty, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFaculty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllFaculty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

// gets one faculty
var getFaculty = function getFaculty(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          call view_employee_by_id(?);\n        ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(30);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

var empidRegex = /^[0-9]{9}$/;
var nameRegex = /^[A-Za-z\-'\s]+$/;

// gets all pending fsr
router.post('/api/fsr/viewPending', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var fsr, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* getPendingFSR */]();

          case 3:
            fsr = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched FSRs',
              data: fsr
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

// gets all approved fsr
router.post('/api/fsr/viewApproved', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var fsr, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getApprovedFSR */]();

          case 3:
            fsr = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched FSRs',
              data: fsr
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

// get a pending fsr by id
router.post('/api/fsr/viewPendingById', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var _data, message;

    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context3.next = 20;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getPendingById */](req.body);

          case 4:
            _data = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched FSRs',
              data: _data
            });
            _context3.next = 20;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 14 : _context3.t1 === 500 ? 17 : 19;
            break;

          case 14:
            message = 'FSR not found';
            data = data;
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
    }, _callee3, _this, [[1, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// get a pending fsr by name
router.post('/api/fsr/viewPendingByName', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var _data2, message;

    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.body.name.match(nameRegex)) {
              _context4.next = 20;
              break;
            }

            _context4.prev = 1;
            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPendingByName */](req.body);

          case 4:
            _data2 = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched FSRs',
              data: _data2
            });
            _context4.next = 20;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4['catch'](1);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 14 : _context4.t1 === 500 ? 17 : 19;
            break;

          case 14:
            message = 'FSR not found';
            data: data;
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
    }, _callee4, _this, [[1, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// get an approved fsr by id
router.post('/api/fsr/viewApprovedById', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var _data3, message;

    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context5.next = 20;
              break;
            }

            _context5.prev = 1;
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* getApprovedById */](req.body);

          case 4:
            _data3 = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched FSRs',
              data: _data3
            });
            _context5.next = 20;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](1);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 14 : _context5.t1 === 500 ? 17 : 19;
            break;

          case 14:
            message = 'FSR not found';
            data = data;
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
    }, _callee5, _this, [[1, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// get an approved fsr by name
router.post('/api/fsr/viewApprovedByName', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var _data4, message;

    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!req.body.name.match(nameRegex)) {
              _context6.next = 20;
              break;
            }

            _context6.prev = 1;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* getApprovedByName */](req.body);

          case 4:
            _data4 = _context6.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched FSRs',
              data: _data4
            });
            _context6.next = 20;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6['catch'](1);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 14 : _context6.t1 === 500 ? 17 : 19;
            break;

          case 14:
            message = 'FSR not found';
            data = data;
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
    }, _callee6, _this, [[1, 8]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

// send to admin
router.post('/api/fsr/send', function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context7.next = 18;
              break;
            }

            _context7.prev = 1;
            _context7.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* sendToAdmin */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully sent FSR'
            });
            _context7.next = 18;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7['catch'](1);
            message = '';
            _context7.t1 = _context7.t0;
            _context7.next = _context7.t1 === 404 ? 13 : _context7.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'FSR not found';
            return _context7.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context7.abrupt('break', 17);

          case 17:
            res.status(_context7.t0).json({ status: _context7.t0, message: message });

          case 18:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this, [[1, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getApprovedFSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getApprovedByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getApprovedById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPendingFSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPendingByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPendingById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sendToAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

// gets all approved fsr
var getApprovedFSR = function getApprovedFSR() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n        SELECT \n            *\n        FROM \n            EMPLOYEE a, \n            EMPLOYEE_FSR b\n        WHERE\n            a.emp_id = b.emp_id\n        AND\n            a.type = "FACULTY"\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

// search an approved fsr by name
var getApprovedByName = function getApprovedByName(_ref) {
  var name = _ref.name;

  return new Promise(function (resolve, reject) {
    var values = [name, name, name];
    var queryString = SqlString.format('\n        SELECT \n            a.*\n        FROM \n            EMPLOYEE a, \n            EMPLOYEE_FSR b\n        WHERE\n            a.emp_id = b.emp_id\n        AND\n            a.type = "FACULTY"\n        AND\n            (a.f_name = ? OR\n            a.m_name = ? OR\n            a.l_name = ?);\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

// search an approved fsr by id
var getApprovedById = function getApprovedById(_ref2) {
  var empid = _ref2.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n        SELECT \n            a.*\n        FROM \n            EMPLOYEE a, \n            EMPLOYEE_FSR b\n        WHERE\n            a.emp_id = b.emp_id\n        AND\n            a.type = "FACULTY"\n        AND\n            a.emp_id = ?\n    ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

// gets all pending FSR
var getPendingFSR = function getPendingFSR() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n    SELECT \n        *\n    FROM \n        EMPLOYEE\n    WHERE\n        is_being_approved = 1\n    AND\n        type = "FACULTY";\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

// search a pending fsr by name
var getPendingByName = function getPendingByName(_ref3) {
  var name = _ref3.name;

  return new Promise(function (resolve, reject) {
    var values = [name, name, name];
    var queryString = SqlString.format('\n        SELECT \n            *\n        FROM \n          (SELECT * FROM EMPLOYEE WHERE is_being_approved = 1 AND type = "FACULTY") AS PENDING\n        WHERE\n            PENDING.f_name = ? OR PENDING.m_name = ? OR PENDING.l_name = ?;\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

// search a pending fsr by id
var getPendingById = function getPendingById(_ref4) {
  var empid = _ref4.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n        SELECT \n          *\n        FROM \n          EMPLOYEE\n        WHERE\n          is_being_approved = 1\n        AND\n          type = "FACULTY"\n        AND\n          emp_id = ?\n    ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

// sends fsr to data
var sendToAdmin = function sendToAdmin(_ref5) {
  var empid = _ref5.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      UPDATE EMPLOYEE\n      SET\n        is_being_approved = 1\n      WHERE\n        emp_id = ?\n    ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(32);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/position/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.office && req.body.credit_units && req.body.nature_of_work && req.body.work_position && req.body.emp_id)) {
              _context.next = 14;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addPosition */](req.body);

          case 5:
            id = _context.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully added position'
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](2);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 12:
            _context.next = 15;
            break;

          case 14:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[2, 9]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/position/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var consultation, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPosition */](req.body);

          case 3:
            consultation = _context2.sent;
            _context2.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* removePosition */](req.body);

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
router.post('/api/position/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var position, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body);
            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editPosition */](req.body);

          case 4:
            _context3.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPosition */]({ id: req.body.id });

          case 6:
            position = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited position',
              data: position
            });
            _context3.next = 21;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](1);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 16 : _context3.t1 === 500 ? 18 : 20;
            break;

          case 16:
            message = 'Service not found';
            return _context3.abrupt('break', 20);

          case 18:
            message = 'Internal server error';
            return _context3.abrupt('break', 20);

          case 20:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 21:
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

router.post('/api/position/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPosition */](req.body);

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

router.post('/api/position/viewHis', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            console.log(req.body);
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getHisPosition */](req.body);

          case 4:
            book = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched position',
              data: book
            });
            _context5.next = 19;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](0);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 14 : _context5.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Position not found';
            return _context5.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context5.abrupt('break', 18);

          case 18:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 19:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[0, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

router.get('/api/position/viewAll', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var positions, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllPositions */]();

          case 3:
            positions = _context6.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all positions',
              data: positions
            });
            _context6.next = 16;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](0);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context6.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context6.t0, message: message });

          case 16:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[0, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getHisPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

// add position
var addPosition = function addPosition(_ref) {
  var office = _ref.office,
      credit_units = _ref.credit_units,
      nature_of_work = _ref.nature_of_work,
      work_position = _ref.work_position,
      emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var values = [office, credit_units, nature_of_work, work_position, emp_id];
    var queryString = SqlString.format('\n      CALL insert_position(?, ?, ?, ?, ?);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
    var queryString = SqlString.format('\n          CALL\n          view_position_by_ID(?)\n        ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
var getAllPositions = function getAllPositions() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n          CALL \n          view_position();\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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

var getHisPosition = function getHisPosition(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n    SELECT * from POSITIONN where emp_id = ?\n        ', [id]);

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
// removes position
var removePosition = function removePosition(_ref4) {
  var id = _ref4.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      CALL delete_position(?);\n    ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
      nature_of_work = _ref5.nature_of_work,
      work_position = _ref5.work_position,
      emp_id = _ref5.emp_id;

  return new Promise(function (resolve, reject) {
    var values = [position_id, office, credit_units, nature_of_work, work_position, emp_id];
    var queryString = SqlString.format('\n      CALL update_position(?, ?, ?, ?, ?, ?);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(34);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

//add a consultation hours
router.post('/api/consulHours/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.consultation_start_time && req.body.consultation_end_time && req.body.consultation_place && req.body.day && req.body.emp_id)) {
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            // const consultation = await Ctrl.getConsultation({ id: req.body.id });
            console.log(req.body);
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeConsulHours */]({ id: req.body.consultation_id });

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed consulation hours',
              data: []
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
            message = 'Consultation hours not found';
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

//edit a consultation hours
router.post('/api/consulHours/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var consultation, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            console.log(req.body);
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editConsulHours */](req.body);

          case 4:
            _context3.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getConsultation */]({ id: req.body.consultation_id });

          case 6:
            consultation = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited consultation hour',
              data: consultation
            });
            _context3.next = 21;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](0);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 16 : _context3.t1 === 500 ? 18 : 20;
            break;

          case 16:
            message = 'Consultation not found';
            return _context3.abrupt('break', 20);

          case 18:
            message = 'Internal server error';
            return _context3.abrupt('break', 20);

          case 20:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 21:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

//view all consultation hours
router.get('/api/consulHours/viewAll', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var consultations, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllConsulHours */]();

          case 3:
            consultations = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all consultations',
              data: consultations
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getConsultation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editConsulHours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

var addConsulHours = function addConsulHours(_ref) {
  var consultation_start_time = _ref.consultation_start_time,
      consultation_end_time = _ref.consultation_end_time,
      consultation_place = _ref.consultation_place,
      day = _ref.day,
      emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var values = [consultation_start_time, consultation_end_time, consultation_place, day, emp_id];
    var queryString = SqlString.format('\n      CALL \n      insert_consultation(?, ?, ?, ?, ?);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
    var queryString = SqlString.format('\n    CALL \n    delete_consultation(?)\n    ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
    var queryString = SqlString.format('\n          CALL\n          view_employee_consultation(?);\n        ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
    var queryString = '\n        CALL\n        view_consultation()\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
var editConsulHours = function editConsulHours(_ref4) {
  var consultation_id = _ref4.consultation_id,
      consultation_start_time = _ref4.consultation_start_time,
      consultation_end_time = _ref4.consultation_end_time,
      consultation_place = _ref4.consultation_place,
      day = _ref4.day;

  return new Promise(function (resolve, reject) {
    var values = [consultation_id, consultation_start_time, consultation_end_time, consultation_place, day];
    var queryString = SqlString.format('\n     CALL \n     update_consultation(?, ?, ?, ?, ?);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(36);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// get a faculty grant by emp id
router.post('/api/facultygrant/viewEmp', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body.id) {
              _context.next = 21;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getAllFacultyGrantByEmp */](req.body);

          case 4:
            facultygrant = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty grant',
              data: facultygrant
            });
            _context.next = 19;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 404 ? 14 : _context.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Faculty grant not found';
            return _context.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context.abrupt('break', 18);

          case 18:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 19:
            _context.next = 22;
            break;

          case 21:
            res.status(400).json({ status: 400, message: 'Bad Request' });

          case 22:
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

// gets a faculty grant by id
router.get('/api/facultygrant/view', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.id) {
              _context2.next = 21;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getFacultyGrant */](req.body);

          case 4:
            facultygrant = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty grant',
              data: facultygrant
            });
            _context2.next = 19;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 14 : _context2.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Faculty grant not found';
            return _context2.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context2.abrupt('break', 18);

          case 18:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 19:
            _context2.next = 22;
            break;

          case 21:
            res.status(400).json({ status: 400, message: 'Bad Request' });

          case 22:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// gets a faculty grant by id
router.get('/api/facultygrant/viewAll', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getAllFacultyGrant */](req.body);

          case 3:
            facultygrant = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all faculty grant',
              data: facultygrant
            });
            _context3.next = 18;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 13 : _context3.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Faculty grant not found';
            return _context3.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context3.abrupt('break', 17);

          case 17:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 18:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// add a faculty grant
router.post('/api/facultygrant/add', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.body) {
              _context4.next = 13;
              break;
            }

            _context4.prev = 1;
            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addFacultyGrant */](req.body);

          case 4:
            id = _context4.sent;

            // const facultygrant = await Ctrl.getFacultyGrant({faculty_grant_id: id});

            res.status(200).json({
              status: 200,
              message: 'Successfully created faculty grant'
              // data: facultygrant
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

// removes a faculty grant
router.post('/api/facultygrant/delete', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getFacultyGrant */](req.body);

          case 3:
            facultygrant = _context5.sent;
            _context5.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* removeFacultyGrant */](req.body);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed faculty grant',
              data: facultygrant
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
            message = 'Faculty grant not found';
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

// edits a facultygrant
router.post('/api/facultygrant/edit', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(req.body.emp_id && req.body.type && req.body.is_approved && req.body.professional_chair && req.body.grants && req.body.grant_title && req.body.start_date && req.body.end_date)) {
              _context6.next = 20;
              break;
            }

            _context6.prev = 1;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editFacultyGrant */](req.body);

          case 4:
            // const facultygrant = await Ctrl.getAllFacultyGrantByEmp(req.body)({
            //   emp_id: req.body.emp_id
            // });

            res.status(200).json({
              status: 200,
              message: 'Successfully edited faculty grant'
              // data: facultygrant
            });
            _context6.next = 18;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6['catch'](1);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 13 : _context6.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Faculty grant not found';
            return _context6.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context6.abrupt('break', 17);

          case 17:
            res.status(_context6.t0).json({ status: _context6.t0, message: message });

          case 18:
            _context6.next = 21;
            break;

          case 20:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 21:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[1, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllFacultyGrantByEmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editFacultyGrant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

//adds a faculty grant
var addFacultyGrant = function addFacultyGrant(_ref) {
  var emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var values = [emp_id];
    var queryString = SqlString.format('\n        CALL \n        insert_faculty_grant(NULL, NULL, NULL, NULL, NULL, NULL, NULL, ?);\n      ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
    var queryString = SqlString.format('\n        CALL view_faculty_grant();\n      ');

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
    var queryString = SqlString.format('\n          SELECT \n            *\n          FROM \n            FACULTYGRANT\n          WHERE\n            faculty_grant_id = ?\n        ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
var getAllFacultyGrantByEmp = function getAllFacultyGrantByEmp(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          CALL view_faculty_grant_by_emp_id(?)\n        ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
var removeFacultyGrant = function removeFacultyGrant(_ref4) {
  var id = _ref4.id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      CALL\n      delete_faculty_grant(?);\n    ', [id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
var editFacultyGrant = function editFacultyGrant(_ref5) {
  var emp_id = _ref5.emp_id,
      type = _ref5.type,
      is_approved = _ref5.is_approved,
      professional_chair = _ref5.professional_chair,
      grants = _ref5.grants,
      grant_title = _ref5.grant_title,
      start_date = _ref5.start_date,
      end_date = _ref5.end_date;

  return new Promise(function (resolve, reject) {
    if (type === 'Yes') {
      var values = [emp_id, type, is_approved, professional_chair, grants, grant_title, start_date, end_date];
      var queryString = SqlString.format('\n      CALL \n      update_faculty_grant(?, ?, ?, ?, ?, ?, ?, ?);\n    ', values);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
        if (err) {
          console.log(err);
          return reject(500);
        }

        if (!res.affectedRows) {
          return reject(404);
        }

        return resolve();
      });
    } else {
      var _values = [emp_id];
      var _queryString = SqlString.format('\n        CALL \n        update_faculty_grant(?, NULL, NULL, NULL, NULL, NULL, NULL, NULL);\n      ', _values);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(_queryString, function (err, res) {
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

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(38);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/limitedpractice/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.haveApplied && req.body.date_submitted && req.body.emp_id)) {
              _context.next = 12;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addLimitedPractice */](req.body);

          case 4:
            res.status(200).json({
              status: 200,
              message: 'Successfully created limited practice'
              // data: sample
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 10:
            _context.next = 13;
            break;

          case 12:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/limitedpractice/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.limited_practice_id) {
              _context2.next = 12;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeLimitedPractice */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed limited practice'
              // data: book
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 10:
            _context2.next = 13;
            break;

          case 12:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.post('/api/limitedpractice/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.haveApplied && req.body.date_submitted && req.body.emp_id)) {
              _context3.next = 12;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editLimitedPractice */](req.body);

          case 4:
            // const sample = await Ctrl.getLimitedPractice({
            //   limited_practice_id: req.body.limited_practice_id
            // });
            res.status(200).json({
              status: 200,
              message: 'Successfully edited limited practice'
              // data: sample
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](1);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 10:
            _context3.next = 13;
            break;

          case 12:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[1, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/api/limitedpractice/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLimitedPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllLimitedPractice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

var addLimitedPractice = function addLimitedPractice(_ref) {
  var haveApplied = _ref.haveApplied,
      date_submitted = _ref.date_submitted,
      emp_id = _ref.emp_id;

  return new Promise(function (resolve, reject) {
    var values = [haveApplied, date_submitted, emp_id];
    var queryString = SqlString.format('\n      CALL  \n      insert_limited_practice(?, ?, ?)\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
    var queryString = SqlString.format('\n        CALL\n        delete_limited_practice(?);\n      ', [limited_practice_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
  var haveApplied = _ref3.haveApplied,
      date_submitted = _ref3.date_submitted,
      emp_id = _ref3.emp_id;

  return new Promise(function (resolve, reject) {
    if (haveApplied == 1) {
      var values = [haveApplied, date_submitted, emp_id];
      var queryString = SqlString.format('\n          CALL\n          update_limited_practice(?, ?, ?)\n        ', values);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
        if (err) {
          console.log(err);
          return reject(500);
        }

        if (!res.affectedRows) {
          return reject(404);
        }

        return resolve();
      });
    } else {
      var _values = [haveApplied, emp_id];
      var _queryString = SqlString.format('\n      CALL\n      update_limited_practice(?, null, ?)\n        ', _values);

      __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(_queryString, function (err, res) {
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

var getLimitedPractice = function getLimitedPractice(_ref4) {
  var emp_id = _ref4.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          CALL\n          view_limited_practice_by_emp_id(?)\n        ', [emp_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
    var queryString = SqlString.format('\n        CALL\n        view_limited_practice()\n      ');

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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(40);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();
var nameRegex = /^[A-Za-z\-'\s]+$/;
var alphanumRegex = /^[A-Za-z0-9]+$/;
var passRegex = /^[A-Za-z0-9\-_.]+$/;
var empIdRegex = /^[0-9]{9}$/;
var emailRegex = /^[^;"']+@up.edu.ph$/;

// edits the faculty
router.post('/api/faculty/edit', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.empid && req.body.empid.match(empIdRegex) && req.body.username && req.body.username.match(alphanumRegex) && req.body.password && req.body.password.length >= 6 && req.body.password.length <= 16 && req.body.password.match(passRegex) && req.body.fname && req.body.fname.match(nameRegex) && req.body.mname && req.body.mname.match(nameRegex) && req.body.lname && req.body.lname.match(nameRegex) && req.body.emptype && req.body.emptypeno && req.body.email && req.body.email.match(emailRegex) && req.body.college && req.body.dept && req.body.is_full_time)) {
              _context.next = 18;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* editFaculty */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully edited faculty'
            });
            _context.next = 18;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
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
    }, _callee, _this, [[1, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// edits the semester information
router.post('/api/faculty/termEdit', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(req.body.year && req.body.term && req.body.empid && req.body.empid.match(empIdRegex) && req.body.isnew)) {
              _context2.next = 18;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editTerm */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully edited term information'
            });
            _context2.next = 18;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 13 : _context2.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Faculty not found';
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
    }, _callee2, _this, [[1, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// get the faculty data
router.post('/api/faculty/data', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var data, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.empid && req.body.empid.match(empIdRegex))) {
              _context3.next = 19;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getData */](req.body);

          case 4:
            data = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty data',
              data: data
            });
            _context3.next = 19;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 14 : _context3.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Faculty not found';
            return _context3.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context3.abrupt('break', 18);

          case 18:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 19:
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

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editFaculty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

// edits the faculty
var editFaculty = function editFaculty(_ref) {
  var empid = _ref.empid,
      username = _ref.username,
      password = _ref.password,
      fname = _ref.fname,
      mname = _ref.mname,
      lname = _ref.lname,
      dept = _ref.dept,
      college = _ref.college,
      emptype = _ref.emptype,
      emptypeno = _ref.emptypeno,
      email = _ref.email,
      is_full_time = _ref.is_full_time;

  return new Promise(function (resolve, reject) {
    var values = [empid, username, password, fname, mname, lname, dept, college, emptype, emptypeno, email, is_full_time];
    var queryString = SqlString.format('\n      call update_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

// edits the faculty
var editTerm = function editTerm(_ref2) {
  var empid = _ref2.empid,
      year = _ref2.year,
      term = _ref2.term,
      isnew = _ref2.isnew;

  return new Promise(function (resolve, reject) {
    var values = [year, term, isnew, empid];
    var queryString = SqlString.format('\n    UPDATE \n      EMPLOYEE\n    SET \n      year = ?,\n      semester = ?,\n      is_new = ?\n    WHERE \n      emp_id = ?;\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

// gets faculty data
var getData = function getData(_ref3) {
  var empid = _ref3.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          SELECT \n            *\n          FROM \n            EMPLOYEE\n          WHERE\n            emp_id = ?\n        ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(42);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();
var empidRegex = /^[0-9]{9}$/;
var nameRegex = /^[A-Za-z\-'\s]+$/;

// enable faculty
router.post('/api/admin/enable', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context.next = 18;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* enableFaculty */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully enabled faculty'
            });
            _context.next = 18;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
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
    }, _callee, _this, [[1, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// disable faculty
router.post('/api/admin/disable', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context2.next = 18;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* disableFaculty */](req.body);

          case 4:

            res.status(200).json({
              status: 200,
              message: 'Successfully disabled faculty'
            });
            _context2.next = 18;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 13 : _context2.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Faculty not found';
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
    }, _callee2, _this, [[1, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// get a faculty by id
router.post('/api/faculty/searchById', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var data, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!req.body.empid.match(empidRegex)) {
              _context3.next = 19;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getFacultyById */](req.body);

          case 4:
            data = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty',
              data: data
            });
            _context3.next = 19;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 404 ? 14 : _context3.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Faculty not found';
            return _context3.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context3.abrupt('break', 18);

          case 18:
            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 19:
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

// get a faculty by name
router.post('/api/faculty/searchByName', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var data, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.body.name.match(nameRegex)) {
              _context4.next = 19;
              break;
            }

            _context4.prev = 1;
            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getFacultyByName */](req.body);

          case 4:
            data = _context4.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculties',
              data: data
            });
            _context4.next = 19;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4['catch'](1);
            message = '';
            _context4.t1 = _context4.t0;
            _context4.next = _context4.t1 === 404 ? 14 : _context4.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Faculty not found';
            return _context4.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context4.abrupt('break', 18);

          case 18:
            res.status(_context4.t0).json({ status: _context4.t0, message: message });

          case 19:
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

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enableFaculty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return disableFaculty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getFacultyByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFacultyById; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

// enables a faculty
var enableFaculty = function enableFaculty(_ref) {
  var empid = _ref.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      UPDATE EMPLOYEE\n      SET\n        is_active = 1\n      WHERE\n        emp_id = ?\n    ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

// disables a faculty
var disableFaculty = function disableFaculty(_ref2) {
  var empid = _ref2.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n        UPDATE EMPLOYEE\n        SET\n          is_active = 0\n        WHERE\n          emp_id = ?\n      ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

// search a faculty by name
var getFacultyByName = function getFacultyByName(_ref3) {
  var name = _ref3.name;

  return new Promise(function (resolve, reject) {
    var values = [name, name, name];
    var queryString = SqlString.format('\n        SELECT \n            *\n        FROM \n            EMPLOYEE\n        WHERE\n            f_name = ? OR\n            m_name = ? OR\n            l_name = ?\n        ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

// search a faculty by id
var getFacultyById = function getFacultyById(_ref4) {
  var empid = _ref4.empid;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n        SELECT \n        *\n        FROM \n        EMPLOYEE\n        WHERE\n        emp_id = ?\n    ', [empid]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return resolve(null);
      }

      return resolve(rows);
    });
  });
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(44);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets samples
router.post('/api/subject/viewAll', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var subject, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getSubjects */]();

          case 3:
            subject = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all subjects',
              data: subject
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

router.post('/api/subject/getsubjectid', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var subject, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getSubjectByID */](req.body);

          case 3:
            subject = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched subject',
              data: subject
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

            res.status(_context2.t0).json({ status: _context2.t0, message: message });

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

// gets sample
router.post('/api/subject/viewsubject', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var subject, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getSubject */](req.body);

          case 3:
            subject = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched subject',
              data: subject
            });
            _context3.next = 16;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);
            message = '';
            _context3.t1 = _context3.t0;
            _context3.next = _context3.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context3.abrupt('break', 15);

          case 15:

            res.status(_context3.t0).json({ status: _context3.t0, message: message });

          case 16:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// add a sample
router.post('/api/subject/add', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.subject_code && req.body.section_code && req.body.isLecture && req.body.isGraduate && req.body.units && req.body.room && req.body.start_time && req.body.end_time)) {
              _context4.next = 14;
              break;
            }

            _context4.prev = 2;
            _context4.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addSubject */](req.body);

          case 5:
            id = _context4.sent;

            // console.log(id);
            // const subject = await Ctrl.getSubjectByID({ subject_id: id });

            res.status(200).json({
              status: 200,
              message: 'Successfully created subject',
              data: id
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](2);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 12:
            _context4.next = 15;
            break;

          case 14:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 15:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[2, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// removes a subject
router.post('/api/subject/delete', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subject, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(req.body);
            _context5.prev = 1;
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getSubjectByID */](req.body);

          case 4:
            subject = _context5.sent;
            _context5.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* removeSubject */](req.body);

          case 7:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed subject',
              data: subject
            });
            _context5.next = 21;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5['catch'](1);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 16 : _context5.t1 === 500 ? 18 : 20;
            break;

          case 16:
            message = 'Sample not found';
            return _context5.abrupt('break', 20);

          case 18:
            message = 'Internal server error';
            return _context5.abrupt('break', 20);

          case 20:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 21:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[1, 10]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// edits a subject
router.post('/api/subject/edit', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var subject, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_kcferia_Desktop_NEW_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(req.body);
            _context6.prev = 1;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editSubject */](req.body);

          case 4:
            _context6.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getSubjectByID */](req.body);

          case 6:
            subject = _context6.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited subject',
              data: subject
            });
            _context6.next = 21;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6['catch'](1);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 16 : _context6.t1 === 500 ? 18 : 20;
            break;

          case 16:
            message = 'Subject not found';
            return _context6.abrupt('break', 20);

          case 18:
            message = 'Internal server error';
            return _context6.abrupt('break', 20);

          case 20:
            res.status(_context6.t0).json({ status: _context6.t0, message: message });

          case 21:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[1, 10]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSubjectByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSubjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editSubject; });
/* unused harmony export getSubjectDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);

var SqlString = __webpack_require__(3);

var getSubject = function getSubject(_ref) {
  var subject_code = _ref.subject_code,
      section_code = _ref.section_code;

  return new Promise(function (resolve, reject) {
    var values = [subject_code, section_code];
    var queryString = SqlString.format('\n          SELECT \n            *\n          FROM \n            SUBJECT\n          WHERE\n            subject_code = ? and section_code = ?;\n        ', values);
    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }
      return resolve(rows[0]);
    });
  });
};

var getSubjectByID = function getSubjectByID(_ref2) {
  var subject_id = _ref2.subject_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n          SELECT \n            *\n          FROM \n            SUBJECT\n          WHERE\n            subject_id = ?;\n        ', [subject_id]);
    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }
      return resolve(rows[0]);
    });
  });
};

// gets all subjects
var getSubjects = function getSubjects() {
  return new Promise(function (resolve, reject) {
    // const queryString = `
    // CALL view_subjects()
    // `;
    var queryString = '\n      SELECT * FROM SUBJECT;\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// adds a sample
var addSubject = function addSubject(_ref3) {
  var subject_code = _ref3.subject_code,
      section_code = _ref3.section_code,
      isLecture = _ref3.isLecture,
      isGraduate = _ref3.isGraduate,
      units = _ref3.units,
      room = _ref3.room,
      start_time = _ref3.start_time,
      end_time = _ref3.end_time;

  return new Promise(function (resolve, reject) {
    var values = [subject_code, section_code, isLecture, isGraduate, units, room, start_time, end_time];
    var queryString = SqlString.format('\n            CALL add_subject(?,?,?,?,?,?,?, ?);\n    ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      if (err) {
        console.log(err);
        console.log('ERROR!!');
        return reject(500);
      }
      // console.log("CTRL: "+results.insertId);

      return resolve(results.insertId);
    });
  });
};

// removes a sample
var removeSubject = function removeSubject(_ref4) {
  var subject_id = _ref4.subject_id;

  return new Promise(function (resolve, reject) {
    var queryString = SqlString.format('\n      CALL delete_subject(?)\n    ', [subject_id]);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
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
var editSubject = function editSubject(_ref5) {
  var subject_id = _ref5.subject_id,
      subject_code = _ref5.subject_code,
      section_code = _ref5.section_code,
      isLecture = _ref5.isLecture,
      isGraduate = _ref5.isGraduate,
      units = _ref5.units,
      room = _ref5.room,
      start_time = _ref5.start_time,
      end_time = _ref5.end_time;

  return new Promise(function (resolve, reject) {
    var values = [subject_id, subject_code, section_code, isLecture, isGraduate, units, room, start_time, end_time];
    var queryString = SqlString.format('\n        CALL update_subject(?, ?, ?, ?, ?, ?, ?, ?, ?)\n      ', values);

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, res) {
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

var getSubjectDay = function getSubjectDay(json) {
  return new Promise(function (resolve, reject) {
    // const emp_id = json.emp_id;
    // const queryString = 
    // `
    //       SELECT 
    //         CONCAT(
    //         (SELECT subject_code,section_code, room,start_time,end_time FROM SUBJECT WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD WHERE emp_id = ?)),
    //         (SELECT no_of_students FROM TEACHINGLOAD WHERE emp_id = ?), 
    //         (SELECT * FROM SUBJECT_DAY WHERE subject_id IN(SELECT subject_id FROM TEACHINGLOAD WHERE emp_id = ?)) 
    //         );
    //     `;

    var queryString = '\n      SELECT * FROM TEACHINGLOAD JOIN SUBJECT_DAY WHERE SUBJECT_DAY.subject_id = TEACHINGLOAD.subject_id ;\n    ';
    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, results) {
      if (err) {
        return reject(500);
      }

      if (!results.length) {
        return reject(404);
      }
      console.log(results);
      return resolve(results);
    });
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map