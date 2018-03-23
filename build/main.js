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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql__ = __webpack_require__(9);
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

module.exports = __webpack_require__(12);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_mysql_session__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_mysql_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_mysql_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router__ = __webpack_require__(10);








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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express-mysql-session");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_auth_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_extensions_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_publications_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_studyload_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_teachload_router__ = __webpack_require__(20);


// put import routers here



//import signupRouter from './entities/signup/router';



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// put use statements here
router.use('/', __WEBPACK_IMPORTED_MODULE_1__entities_auth_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__entities_extensions_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_3__entities_publications_router__["a" /* default */]);
//router.use(signupRouter);
router.use(__WEBPACK_IMPORTED_MODULE_4__entities_studyload_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_5__entities_teachload_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(13);


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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var login = function login(_ref) {
  var username = _ref.username,
      password = _ref.password;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      SELECT \n        *\n      FROM\n        EMPLOYEE\n      WHERE\n        username = BINARY ? and\n        password = BINARY ?\n    ';

    var values = [username, password];

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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(15);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets services
router.get('/api/service/viewAll', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var services, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getServices */]();

          case 3:
            services = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all services',
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
    var service, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getService */](req.body);

          case 3:
            service = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched service',
              data: service
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
router.post('/api/service/add', function () {
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
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addService */](req.body);

          case 4:
            id = _context3.sent;
            _context3.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getService */]({ id: id });

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
router.post('/api/service/delete', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var service, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getService */](req.body);

          case 3:
            service = _context4.sent;
            _context4.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeService */](req.body);

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

// edits a service
router.post('/api/service/edit', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var serviceEdited, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editService */](req.body);

          case 3:
            _context5.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getService */]({ id: req.body.service_id });

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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


// gets a service
var getService = function getService(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            SERVICE\n          WHERE\n            service_id = ?\n        ';

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

// gets all services
var getServices = function getServices() {
  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL\n      view_service()\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// adds a service
var addService = function addService(_ref2) {
  var category = _ref2.category,
      title = _ref2.title,
      no_of_hours = _ref2.no_of_hours,
      no_of_participants = _ref2.no_of_participants,
      role = _ref2.role,
      credits = _ref2.credits,
      emp_id = _ref2.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            INSERT INTO SERVICE\n            VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?)\n        ';

    var values = [category, title, no_of_hours, no_of_participants, role, credits, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a service
var removeService = function removeService(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      DELETE \n        FROM SERVICE\n      WHERE \n        service_id = ?\n    ';

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

// edits a sample
var editService = function editService(_ref4) {
  var category = _ref4.category,
      title = _ref4.title,
      no_of_hours = _ref4.no_of_hours,
      no_of_participants = _ref4.no_of_participants,
      role = _ref4.role,
      credits = _ref4.credits,
      service_id = _ref4.service_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      UPDATE SERVICE\n      SET\n        category = ?,\n        title = ?,\n        no_of_hours = ?,\n        no_of_participants = ?,\n        role = ?,\n        credits = ?\n      WHERE\n        service_id = ?\n    ';

    var values = [category, title, no_of_hours, no_of_participants, role, credits, service_id];

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
    var id, publication;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.credit_units >= 0 && req.body.category && req.body.funding && req.body.title && req.body.role && req.body.start_date && req.body.end_date)) {
              _context3.next = 16;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* addPublication */](req.body);

          case 4:
            id = _context3.sent;
            _context3.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getPublication */]({ id: id });

          case 7:
            publication = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created publication',
              data: publication
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
/* 17 */
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
    var queryString = '\n          SELECT \n            *\n          FROM \n            PUBLICATION\n          WHERE\n            publication_id = ?\n        ';

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
    var queryString = '\n      SELECT *\n      FROM PUBLICATION\n    ';

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
    var queryString = '\n            INSERT INTO PUBLICATION\n            VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?)\n        ';

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
  var publication_id = _ref3.publication_id,
      coworker_id = _ref3.coworker_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            INSERT INTO COWORKER\n            VALUES (?, ?)\n        ';

    var values = [publication_id, coworker_id];

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
  var publication_id = _ref4.publication_id,
      coworker_id = _ref4.coworker_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            SELECT * \n            FROM COWORKER\n            WHERE\n            publication_id = ? AND coworker_id = ?\n        ';

    var values = [publication_id, coworker_id];

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
    var queryString = '\n      DELETE \n        FROM PUBLICATION\n      WHERE \n        publication_id = ?\n    ';

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
  var credit_units = _ref6.credit_units,
      category = _ref6.category,
      funding = _ref6.funding,
      title = _ref6.title,
      role = _ref6.role,
      start_date = _ref6.start_date,
      end_date = _ref6.end_date,
      publication_id = _ref6.publication_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      UPDATE PUBLICATION\n      SET\n        credit_units = ?,\n        category = ?,\n        funding = ?,\n        title = ?,\n        role = ?,\n        start_date = ?,\n        end_date = ?\n      WHERE\n        publication_id = ?\n    ';

    var values = [credit_units, category, funding, title, role, start_date, end_date, publication_id];

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

router.post('/api/studyload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.degree && req.body.university && req.body.isFullTime && req.body.credits && req.body.emp_id && req.body.subject_code)) {
              _context.next = 16;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addStudyLoad */](req.body);

          case 4:
            id = _context.sent;
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getStudyLoad */]({ studyload_id: id });

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

router.delete('/api/studyload/delete/:studyload_id', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getStudyLoad */](req.params);

          case 3:
            book = _context2.sent;
            _context2.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeStudyLoad */](req.params);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed study load',
              data: book
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
            message = 'Study Load not found';
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

router.put('/api/studyload/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editStudyLoad */](req.body);

          case 3:
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getStudyLoad */]({
              studyload_id: req.body.studyload_id
            });

          case 5:
            sample = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited study load',
              data: sample
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
            message = 'Study load not found';
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

router.get('/api/studyload/view/:studyload_id', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getStudyLoad */](req.params);

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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllStudyLoad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addStudyLoad = function addStudyLoad(_ref) {
  var degree = _ref.degree,
      university = _ref.university,
      isFullTime = _ref.isFullTime,
      credits = _ref.credits,
      emp_id = _ref.emp_id,
      subject_code = _ref.subject_code;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      INSERT INTO\n      STUDYLOAD\n      (degree, university, isFullTime, credits, emp_id, subject_code)\n      VALUES\n      (?, ?, ?, ?, ?, ?)\n    ';

    var values = [degree, university, isFullTime, credits, emp_id, subject_code];

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
    var queryString = '\n        DELETE \n          FROM STUDYLOAD\n        WHERE \n          studyload_id = ?\n      ';

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
      isFullTime = _ref3.isFullTime,
      credits = _ref3.credits,
      emp_id = _ref3.emp_id,
      subject_code = _ref3.subject_code;

  return new Promise(function (resolve, reject) {
    var queryString = '\n        UPDATE STUDYLOAD\n        SET\n          degree = ?,\n          university = ?,\n          isFullTime = ?,\n          credits = ?,\n          emp_id = ?, \n          subject_code = ?\n        WHERE\n          studyload_id = ?\n      ';

    var values = [studyload_id, degree, university, isFullTime, credits, emp_id, subject_code];

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
  var emp_id = _ref4.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            STUDYLOAD\n          WHERE\n            emp_id = ?\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, emp_id, function (err, rows) {
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
    var queryString = '\n        SELECT *\n        FROM STUDYLOAD\n      ';

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

router.post('/api/teachload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.body.emp_id && req.body.noOfStudents && req.body.subject_code)) {
              _context.next = 16;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addTeachLoad */](req.body);

          case 4:
            id = _context.sent;
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getTeachLoad */]({ teachingload_id: id });

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

router.delete('/api/teachload/delete/:teachload_id', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getTeachLoad */](req.params);

          case 3:
            book = _context2.sent;
            _context2.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeTeachLoad */](req.params);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed teach load',
              data: book
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
            message = 'Teach Load not found';
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

router.put('/api/teachload/edit/', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editTeachLoad */](req.body);

          case 3:
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getTeachLoad */]({
              teachload_id: req.body.teachload_id
            });

          case 5:
            sample = _context3.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited teach load',
              data: sample
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
            message = 'Teach load not found';
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

router.get('/api/teachload/view/:teachingload_id', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jasarqui_Desktop_128_Lab_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getTeachLoad */](req.params);

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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTeachLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllTeachLoad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addTeachLoad = function addTeachLoad(_ref) {
  var emp_id = _ref.emp_id,
      noOfStudents = _ref.noOfStudents,
      subject_code = _ref.subject_code;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      INSERT INTO\n      TEACHINGLOAD\n      (emp_id, noOfStudents, subject_code)\n      VALUES\n      (?, ?, ?)\n    ';

    var values = [emp_id, noOfStudents, subject_code];

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
  var teachingload_id = _ref3.teachingload_id,
      emp_id = _ref3.emp_id,
      noOfStudents = _ref3.noOfStudents,
      subject_code = _ref3.subject_code;

  return new Promise(function (resolve, reject) {
    var queryString = '\n        UPDATE TEACHINGLOAD\n        SET\n          noOfStudents = ?,\n          emp_id = ?,\n          subject_code = ?\n        WHERE\n          teachingload_id = ?\n      ';

    var values = [teachingload_id, emp_id, noOfStudents, subject_code];

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
  var emp_id = _ref4.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            TEACHINGLOAD\n          WHERE\n            emp_id = ?\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, emp_id, function (err, rows) {
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

/***/ })
/******/ ]);
//# sourceMappingURL=main.map