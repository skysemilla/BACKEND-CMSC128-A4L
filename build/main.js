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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_extension_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_publications_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_signup_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_studyload_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_teachload_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_facultylist_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_adminWork_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_consulHours_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_facultygrant_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_limitedpractice_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_profile_router__ = __webpack_require__(35);


// put import routers here







// import fsrRouter from './entities/fsrlist/router';






var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// put use statements here
router.use('/', __WEBPACK_IMPORTED_MODULE_1__entities_auth_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__entities_extension_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_3__entities_publications_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_4__entities_signup_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_5__entities_studyload_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_6__entities_teachload_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_7__entities_facultylist_router__["a" /* default */]);
// router.use(fsrRouter);
router.use(__WEBPACK_IMPORTED_MODULE_8__entities_adminWork_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_9__entities_consulHours_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_10__entities_facultygrant_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_11__entities_limitedpractice_router__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_12__entities_profile_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(13);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/login', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var user, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
    var queryString = '\n      SELECT \n        *\n      FROM\n        EMPLOYEE\n      WHERE\n        username = BINARY ? and\n        password = BINARY sha2(?,256)\n    ';

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(15);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets extension
router.get('/api/extension/viewAll', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var extensions, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getExtensions */]();

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

// get a extensions
router.post('/api/extension/view', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var extension, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getExtension */](req.body);

          case 3:
            extension = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched Extension',
              data: extension
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
            message = 'Extension not found';
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

// add a extension
router.post('/api/extension/add', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.extension_type && req.body.extension_name && req.body.no_of_hours >= 0 && req.body.no_of_participants >= 0 && req.body.extension_role && req.body.credit_unit >= 0 && req.body.funding_agency)) {
              _context3.next = 13;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addExtension */](req.body);

          case 4:
            id = _context3.sent;

            // const extensionAdded = await Ctrl.getExtension({ id: id });

            res.status(200).json({
              status: 200,
              message: 'Successfully added Extension'
              // data: extensionAdded
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

// removes an extension
router.post('/api/extension/delete', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var extension, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getExtension */](req.body);

          case 3:
            extension = _context4.sent;
            _context4.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeExtension */](req.body);

          case 6:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed sample',
              data: extension
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
            message = 'Cannot Delete: Extension not found';
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

// edits a extension
router.post('/api/extension/edit', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var extensionEdited, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editExtension */](req.body);

          case 3:
            _context5.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getExtension */]({ id: req.body.extension_id });

          case 5:
            extensionEdited = _context5.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully edited extension',
              data: extensionEdited
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
            message = 'Extension not found';
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editExtension; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


// gets a extension
var getExtension = function getExtension(_ref) {
  var id = _ref.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT * from EXTENSION where extension_id = ?\n        ';

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
var addExtension = function addExtension(_ref2) {
  var credit_unit = _ref2.credit_unit,
      extension_name = _ref2.extension_name,
      extension_type = _ref2.extension_type,
      no_of_hours = _ref2.no_of_hours,
      no_of_participants = _ref2.no_of_participants,
      extension_role = _ref2.extension_role,
      start_time = _ref2.start_time,
      end_time = _ref2.end_time,
      funding_agency = _ref2.funding_agency,
      emp_id = _ref2.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            CALL insert_extension(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n        ';

    var values = [credit_unit, extension_name, extension_type, no_of_hours, no_of_participants, extension_role, start_time, end_time, funding_agency, emp_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results.insertId);
    });
  });
};

// removes a extension
var removeExtension = function removeExtension(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL delete_extension(?);\n    ';

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
var editExtension = function editExtension(_ref4) {
  var extension_id_update = _ref4.extension_id_update,
      credit_unit_update = _ref4.credit_unit_update,
      extension_name_update = _ref4.extension_name_update,
      extension_type_update = _ref4.extension_type_update,
      no_of_hours_update = _ref4.no_of_hours_update,
      no_of_participants_update = _ref4.no_of_participants_update,
      extension_role_update = _ref4.extension_role_update,
      start_time_update = _ref4.start_time_update,
      end_time_update = _ref4.end_time_update,
      funding_agency_update = _ref4.funding_agency_update,
      emp_id_update = _ref4.emp_id_update;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL update_extension(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);\n    ';

    var values = [extension_id_update, credit_unit_update, extension_name_update, extension_type_update, no_of_hours_update, no_of_participants_update, extension_role_update, start_time_update, end_time_update, funding_agency_update, emp_id_update];

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(17);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets a publication by id
router.post('/api/publication/view', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* getPublication */](req.body);

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
router.post('/api/publication/viewAll', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["i" /* getPublications */](req.body);

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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.credit_units >= 0 && req.body.category &&
            // req.body.funding &&
            req.body.title
            // req.body.role &&
            // req.body.start_date &&
            // req.body.end_date
            )) {
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var row;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* getPublication */](req.body);

          case 3:
            publication = _context5.sent;
            _context5.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["k" /* removePublication */](req.body);

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
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var publication, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* editPublication */](req.body);

          case 3:
            _context6.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* getPublication */]({
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

// gets publications
router.get('/api/publication/viewEmployees', function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getEmployees */]();

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
  var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* getEmployeeCoworkers */](req.body);

          case 3:
            publications = _context8.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all possible coworkers',
              data: publications
            });
            _context8.next = 16;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8['catch'](0);
            message = '';
            _context8.t1 = _context8.t0;
            _context8.next = _context8.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context8.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context8.t0, message: message });

          case 16:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, _this, [[0, 7]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

// gets publications
router.get('/api/publication/viewCoworkers', function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getCoworkers */](req.body);

          case 3:
            publications = _context9.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all coworkers',
              data: publications
            });
            _context9.next = 16;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9['catch'](0);
            message = '';
            _context9.t1 = _context9.t0;
            _context9.next = _context9.t1 === 500 ? 13 : 15;
            break;

          case 13:
            message = 'Internal server error';
            return _context9.abrupt('break', 15);

          case 15:

            res.status(200).json({ status: _context9.t0, message: message });

          case 16:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, _this, [[0, 7]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

// removes a publication
router.post('/api/publication/deleteCoworkers', function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["j" /* removeCoworkers */](req.body);

          case 3:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed coworkers'
              // data: publication
            });
            _context10.next = 17;
            break;

          case 6:
            _context10.prev = 6;
            _context10.t0 = _context10['catch'](0);
            message = '';
            _context10.t1 = _context10.t0;
            _context10.next = _context10.t1 === 404 ? 12 : _context10.t1 === 500 ? 14 : 16;
            break;

          case 12:
            message = 'Publication not found';
            return _context10.abrupt('break', 16);

          case 14:
            message = 'Internal server error';
            return _context10.abrupt('break', 16);

          case 16:
            res.status(_context10.t0).json({ status: _context10.t0, message: message });

          case 17:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, _this, [[0, 6]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

// gets coworkers of a publication
router.post('/api/publication/getCoworkers', function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11(req, res) {
    var publications, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getCoworkers */](req.body);

          case 3:
            publications = _context11.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched all emps',
              data: publications
            });
            _context11.next = 18;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11['catch'](0);
            message = '';
            _context11.t1 = _context11.t0;
            _context11.next = _context11.t1 === 404 ? 13 : _context11.t1 === 500 ? 15 : 17;
            break;

          case 13:
            message = 'Publication not found';
            return _context11.abrupt('break', 17);

          case 15:
            message = 'Internal server error';
            return _context11.abrupt('break', 17);

          case 17:

            res.status(200).json({ status: _context11.t0, message: message });

          case 18:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, _this, [[0, 7]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPublications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPublication; });
/* unused harmony export addPublicationLog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCoworker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkIfExisting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return removePublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return editPublication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getEmployeeCoworkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return removeCoworkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCoworkers; });
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
var getPublications = function getPublications(_ref2) {
  var empid = _ref2.empid;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL view_employee_publication(?);\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, empid, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// export const getCoworkers = ({ id }) => {
//   return new Promise((resolve, reject) => {
//     const queryString = `
//     SELECT * FROM COWORKER;`;

//     db.query(queryString, (err, rows) => {
//       if (err) {
//         console.log(err);
//         return reject(500);
//       }

//       return resolve(rows);
//     });
//   });
// };

// adds a publication
var addPublication = function addPublication(_ref3) {
  var credit_units = _ref3.credit_units,
      category = _ref3.category,
      funding = _ref3.funding,
      title = _ref3.title,
      role = _ref3.role,
      start_date = _ref3.start_date,
      end_date = _ref3.end_date,
      emp_id = _ref3.emp_id;

  return new Promise(function (resolve, reject) {
    if (start_date === '' || end_date === '') {
      var _queryString = '\n          INSERT INTO PUBLICATION values(NULL, ?, ?, ?, ?, ?, null, null, ?);\n        ';

      var _values = [credit_units, category, funding, title, role, emp_id];
    } else {
      var _queryString2 = '\n          INSERT INTO PUBLICATION values(NULL, ?, ?, ?, ?, ?, ?, ?, ?);\n        ';

      var _values2 = [credit_units, category, funding, title, role, start_date, end_date, emp_id];
    }

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        console.log('ERROR!!');
        return reject(500);
      }

      // console.log(results.insertId);
      return resolve(results.insertId);
    });
  });
};

var addPublicationLog = function addPublicationLog(_ref4) {
  var title = _ref4.title;

  return new Promise(function (resolve, reject) {
    var queryString = '\n        call insert_log(concat("Publication with title", ?, " has been added to the table PUBLICATION"));\n        ';

    var values = [title];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        console.log('ERROR!!');
        return reject(500);
      }

      // console.log(results.insertId);
      return resolve(results);
    });
  });
};

// adds a coworker
var addCoworker = function addCoworker(_ref5) {
  var coworker_id = _ref5.coworker_id,
      publication_id = _ref5.publication_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n            CALL insert_coworker(?, ?);\n        ';

    var values = [coworker_id, publication_id];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      // console.log(inserted:"+results.insertId);
      return resolve(results.insertId);
    });
  });
};

// checks if publication_id and coworker_id exists
var checkIfExisting = function checkIfExisting(_ref6) {
  var coworker_id = _ref6.coworker_id,
      publication_id = _ref6.publication_id;

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
var removePublication = function removePublication(_ref7) {
  var id = _ref7.id;

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
var editPublication = function editPublication(_ref8) {
  var credit_units = _ref8.credit_units,
      category = _ref8.category,
      funding = _ref8.funding,
      title = _ref8.title,
      role = _ref8.role,
      start_date = _ref8.start_date,
      end_date = _ref8.end_date,
      publication_id = _ref8.publication_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL update_publication(?, ?, ?, ?, ?, ?, ?, ?);\n    ';

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

// gets all publications
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
var getEmployeeCoworkers = function getEmployeeCoworkers(_ref9) {
  var empid = _ref9.empid;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      SELECT * from EMPLOYEE WHERE emp_id != ?;\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, empid, function (err, rows) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(rows);
    });
  });
};

// removes a publication
var removeCoworkers = function removeCoworkers(_ref10) {
  var id = _ref10.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      CALL delete_coworker(?);\n    ';

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

// gets all publications
var getCoworkers = function getCoworkers(_ref11) {
  var id = _ref11.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      SELECT c.emp_id, e.f_name, e.l_name FROM COWORKER c, EMPLOYEE e WHERE c.emp_id = e.emp_id and publication_id = ?;\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, id, function (err, results) {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(results);
    });
  });
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(19);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/signup', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEmployee; });
/* unused harmony export getEmployee */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


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
    var queryString = '\n      CALL insert_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, \'2nd\', \'2017-2018\', ?, ?, 1, 0);\n    ';

    var values = [emp_id, username, password, type, f_name, m_name, l_name, department, college, emp_type, is_full_time, email];

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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(21);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/studyload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.credits && req.body.courseno && req.session.user.emp_id && req.body.start_time && req.body.school && req.body.no_of_days)) {
              _context.next = 17;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addStudyLoad */](req.body, req.session.user);

          case 5:
            id = _context.sent;
            _context.next = 8;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getStudyLoad */]({ studyload_id: id });

          case 8:
            sample = _context.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created study load',
              data: sample
            });
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](2);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 15:
            _context.next = 18;
            break;

          case 17:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[2, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/studyload/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.studyload_id) {
              _context2.next = 15;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getStudyLoad */](req.body);

          case 4:
            book = _context2.sent;
            _context2.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["h" /* removeStudyLoad */](req.body);

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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.studyload_id && req.body.credits && req.body.courseno && req.body.start_time && req.body.school && req.body.no_of_days && req.session.user)) {
              _context3.next = 16;
              break;
            }

            _context3.prev = 2;
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* editStudyLoad */](req.body, req.session.user.emp_id);

          case 5:
            _context3.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getStudyLoad */]({
              studyload_id: req.body.studyload_id
            });

          case 7:
            sample = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully edited study load',
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

router.post('/api/studyload/view', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["f" /* getStudyEmp */](req.session.user);

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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(req.session.user && req.body.studyload_id)) {
              _context5.next = 21;
              break;
            }

            _context5.prev = 1;
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["g" /* getStudyLoad */](req.body.studyload_id);

          case 4:
            book = _context5.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched study load',
              data: book
            });
            _context5.next = 19;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](1);
            message = '';
            _context5.t1 = _context5.t0;
            _context5.next = _context5.t1 === 404 ? 14 : _context5.t1 === 500 ? 16 : 18;
            break;

          case 14:
            message = 'Study load not found';
            return _context5.abrupt('break', 18);

          case 16:
            message = 'Internal server error';
            return _context5.abrupt('break', 18);

          case 18:
            res.status(_context5.t0).json({ status: _context5.t0, message: message });

          case 19:
            _context5.next = 22;
            break;

          case 21:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 22:
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

router.get('/api/studyload/viewAll', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getAllStudyLoad */]();

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
  var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getStudyCredentials */](req.session.user);

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
  var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
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
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editStudyCredentials */](req.body, req.session.user.emp_id);

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
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getStudyEmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllStudyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStudyCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editStudyCredentials; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addStudyLoad = function addStudyLoad(_ref, json) {
  var credits = _ref.credits,
      courseno = _ref.courseno,
      start_time = _ref.start_time,
      school = _ref.school,
      no_of_days = _ref.no_of_days;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;
    var queryString = "\n      call insert_studyload(?, ?, ?,?,?,?)\n    ";

    var values = [credits, courseno, emp_id, start_time, school, no_of_days];
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
    var queryString = "\n    call delete_studyload(?)\n    ";

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

var editStudyLoad = function editStudyLoad(json, emp_id) {
  var studyload_id = json.studyload_id;
  var credits = json.credits;
  var courseno = json.courseno;
  var start_time = json.start_time;
  var school = json.school;
  var no_of_days = json.no_of_days;
  return new Promise(function (resolve, reject) {
    var queryString = "\n    call update_studyload(?,?,?,?,?,?,?)\n    ";

    var values = [studyload_id, credits, courseno, start_time, school, no_of_days, emp_id];

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

var getStudyLoad = function getStudyLoad(_ref3) {
  var studyload_id = _ref3.studyload_id;

  return new Promise(function (resolve, reject) {
    var queryString = "\n      call view_studyload_id_studyload(?)\n        ";

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
    var queryString = "\n        call view_employee_studyload(?)\n        ";

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
    var queryString = "\n    call view_studyload()\n    ";

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
    var queryString = "\n      SELECT * FROM STUDY_CREDENTIALS WHERE emp_id = ?\n    ";

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

var editStudyCredentials = function editStudyCredentials(json, emp_id) {
  var university = json.uni;
  var degree = json.degree;
  var fellowship = false;
  var studyleave = false;
  if (json.fellowship === "Yes") {
    fellowship = true;
  }
  if (json.studyleave === "Yes") {
    studyleave = true;
  }

  return new Promise(function (resolve, reject) {
    var queryString = "\n  call update_study_credentials(?,?,?,?,?)\n  ";

    var values = [emp_id, degree, university, studyleave, fellowship];

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, values, function (err, res) {
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

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/teachload/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id, sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.no_of_students && req.body.subject_code && req.body.section_code && req.body.room && req.body.days && req.body.start_time && req.body.end_time && req.body.hours && req.body.creditw)) {
              _context.next = 17;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addTeachLoad */](req.body, req.session.user);

          case 5:
            id = _context.sent;
            _context.next = 8;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getTeachLoad */]({ teachingload_id: id });

          case 8:
            sample = _context.sent;


            res.status(200).json({
              status: 200,
              message: 'Successfully created teaching load',
              data: sample
            });
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](2);

            res.status(500).json({ status: 500, message: 'Internal server error' });

          case 15:
            _context.next = 18;
            break;

          case 17:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[2, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/api/teachload/delete/', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var book;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var sample;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.emp_id && req.body.no_of_students && req.body.subject_code && req.body.section_code && req.body.room && req.body.days && req.body.start_time && req.body.end_time && req.body.hours && req.body.creditw && req.body.teachingload_id)) {
              _context3.next = 15;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editTeachLoad */](req.body);

          case 4:
            _context3.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getTeachLoad */]({
              teachingload_id: req.body.teachingload_id
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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
/* 23 */
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
      creditw = _ref3.creditw,
      teachingload_id = _ref3.teachingload_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      UPDATE TEACHINGLOAD\n        SET\n          no_of_students = ?\n        WHERE\n          teachingload_id=?;\n    ';

    var values = [no_of_students, teachingload_id];

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(26);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// gets one faculty
router.post('/api/faculty/view', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var faculty, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var faculty, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
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
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(28);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/position/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var consultation, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var positionEdited, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(30);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

//add a consultation hours
router.post('/api/consultation/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);

            if (!(req.body.consultation_start_time && req.body.consultation_end_time && req.body.consultation_place && req.body.day)) {
              _context.next = 14;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* addConsulHours */](req.body, req.session.user);

          case 5:
            id = _context.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully added consultation hours'
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

//delete a consultation hours
router.post('/api/consultation/delete', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var consultation, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.consultation_id) {
              _context2.next = 23;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getConsultation */](req.body);

          case 4:
            consultation = _context2.sent;
            _context2.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* removeConsultation */](req.body);

          case 7:

            res.status(200).json({
              status: 200,
              message: 'Successfully removed consulation hours',
              data: consultation
            });
            _context2.next = 21;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](1);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 16 : _context2.t1 === 500 ? 18 : 20;
            break;

          case 16:
            message = 'Consultation hours not found';
            return _context2.abrupt('break', 20);

          case 18:
            message = 'Internal server error';
            return _context2.abrupt('break', 20);

          case 20:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 21:
            _context2.next = 24;
            break;

          case 23:
            res.status(400).json({ status: 400, message: 'Bad request' });

          case 24:
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

//edit a consultation hours
router.put('/api/consultation/edit', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var positionEdited, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
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
router.get('/api/consultation/viewAll', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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

router.post('/api/consultation/view', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getConsultation */](req.session.user);

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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeConsultation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getConsultation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllConsulHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editConsulHours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


var addConsulHours = function addConsulHours(_ref, json) {
  var consultation_start_time = _ref.consultation_start_time,
      consultation_end_time = _ref.consultation_end_time,
      consultation_place = _ref.consultation_place,
      day = _ref.day;

  return new Promise(function (resolve, reject) {
    var emp_id = json.emp_id;

    var queryString = '\n      CALL\n      insert_consultation(?, ?, ?, ?, ?);\n    ';

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
var removeConsultation = function removeConsultation(_ref2) {
  var consultation_id = _ref2.consultation_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n    CALL \n      delete_consultation(?)\n    ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, consultation_id, function (err, results) {
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
var getConsultation = function getConsultation(consultation_id) {
  return new Promise(function (resolve, reject) {

    var queryString = '\n          SELECT \n            consultation_start_time, consultation_end_time, consultation_place\n          FROM \n            CONSULTATION\n          WHERE\n            consultation_id = ?;\n        ';

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

var editConsulHours = function editConsulHours(_ref3) {
  var consultation_start_time = _ref3.consultation_start_time,
      consultation_end_time = _ref3.consultation_end_time,
      consultation_place = _ref3.consultation_place,
      day = _ref3.day,
      emp_id = _ref3.emp_id;

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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(32);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// get a faculty grant by emp id
router.post('/api/facultygrant/viewEmp', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["d" /* getAllFacultyGrantByEmp */](req.body);

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

// gets a faculty grant by id
router.get('/api/facultygrant/view', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["e" /* getFacultyGrant */](req.body);

          case 3:
            facultygrant = _context2.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty grant',
              data: facultygrant
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
            message = 'Faculty grant not found';
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

// gets a faculty grant by id
router.get('/api/facultygrant/viewAll', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var id;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var facultygrant, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editFacultyGrant */](req.body);

          case 3:
            // const facultygrant = await Ctrl.getAllFacultyGrantByEmp(req.body)({
            //   emp_id: req.body.emp_id
            // });

            res.status(200).json({
              status: 200,
              message: 'Successfully edited faculty grant'
              // data: facultygrant
            });
            _context6.next = 17;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6['catch'](0);
            message = '';
            _context6.t1 = _context6.t0;
            _context6.next = _context6.t1 === 404 ? 12 : _context6.t1 === 500 ? 14 : 16;
            break;

          case 12:
            message = 'Faculty grant not found';
            return _context6.abrupt('break', 16);

          case 14:
            message = 'Internal server error';
            return _context6.abrupt('break', 16);

          case 16:
            res.status(_context6.t0).json({ status: _context6.t0, message: message });

          case 17:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[0, 6]]);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllFacultyGrantByEmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeFacultyGrant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editFacultyGrant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


//adds a faculty grant
var addFacultyGrant = function addFacultyGrant(_ref) {
  var emp_id = _ref.emp_id;

  console.log({ emp_id: emp_id });
  return new Promise(function (resolve, reject) {
    var queryString = '\n        CALL \n        insert_faculty_grant(NULL, NULL, NULL, NULL, NULL, NULL, NULL, ?);\n      ';
    var values = [emp_id];

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
    var queryString = '\n        CALL view_faculty_grant();\n      ';

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

// gets a faculty grant by id by emp_id
var getAllFacultyGrantByEmp = function getAllFacultyGrantByEmp(_ref3) {
  var id = _ref3.id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          CALL view_faculty_grant_by_emp_id(?)\n        ';

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
var removeFacultyGrant = function removeFacultyGrant(_ref4) {
  var id = _ref4.id;

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
    var queryString = '\n      CALL \n      update_faculty_grant(?, ?, ?, ?, ?, ?, ?, ?);\n    ';

    var values = [emp_id, type, is_approved, professional_chair, grants, grant_title, start_date, end_date];

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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(34);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

router.post('/api/limitedpractice/add', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.body.limited_practice_id && req.body.haveApplied && req.body.date_submitted && req.body.emp_id)) {
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
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
    var book, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
    var subjects, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
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
/* 34 */
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

    var values = [limited_practice_id, haveApplied, date_submitted, emp_id];

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
  var emp_id = _ref4.emp_id;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          CALL\n          view_limited_practice_by_emp_id(?)\n        ';

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

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(36);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = Object(__WEBPACK_IMPORTED_MODULE_1_express__["Router"])();

// edits the faculty
router.post('/api/faculty/edit', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* editFaculty */](req.body);

          case 3:

            res.status(200).json({
              status: 200,
              message: 'Successfully edited faculty'
            });
            _context.next = 17;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);
            message = '';
            _context.t1 = _context.t0;
            _context.next = _context.t1 === 404 ? 12 : _context.t1 === 500 ? 14 : 16;
            break;

          case 12:
            message = 'Faculty not found';
            return _context.abrupt('break', 16);

          case 14:
            message = 'Internal server error';
            return _context.abrupt('break', 16);

          case 16:
            res.status(_context.t0).json({ status: _context.t0, message: message });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 6]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// edits the semester information
router.post('/api/faculty/termEdit', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["b" /* editTerm */](req.body);

          case 3:

            res.status(200).json({
              status: 200,
              message: 'Successfully edited term information'
            });
            _context2.next = 17;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2['catch'](0);
            message = '';
            _context2.t1 = _context2.t0;
            _context2.next = _context2.t1 === 404 ? 12 : _context2.t1 === 500 ? 14 : 16;
            break;

          case 12:
            message = 'Faculty not found';
            return _context2.abrupt('break', 16);

          case 14:
            message = 'Internal server error';
            return _context2.abrupt('break', 16);

          case 16:
            res.status(_context2.t0).json({ status: _context2.t0, message: message });

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 6]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// get the faculty data
router.post('/api/faculty/data', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var data, message;
    return __WEBPACK_IMPORTED_MODULE_0__home_jomajomajoma_Desktop_BACKEND_CMSC128_A4L_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__controller__["c" /* getData */](req.body);

          case 3:
            data = _context3.sent;

            res.status(200).json({
              status: 200,
              message: 'Successfully fetched faculty data',
              data: data
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
            message = 'Faculty not found';
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

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editFaculty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(1);


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
      email = _ref.email,
      is_full_time = _ref.is_full_time;

  return new Promise(function (resolve, reject) {
    var queryString = '\n      call update_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0);\n    ';

    var values = [empid, username, password, fname, mname, lname, dept, college, emptype, email, is_full_time];

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

// edits the faculty
var editTerm = function editTerm(_ref2) {
  var empid = _ref2.empid,
      year = _ref2.year,
      term = _ref2.term,
      isnew = _ref2.isnew;

  return new Promise(function (resolve, reject) {
    var queryString = '\n    UPDATE \n      EMPLOYEE\n    SET \n      year = ?,\n      semester = ?,\n      is_new = ?\n    WHERE \n      emp_id = ?;\n    ';

    var values = [year, term, isnew, empid];

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

// gets faculty data
var getData = function getData(_ref3) {
  var empid = _ref3.empid;

  return new Promise(function (resolve, reject) {
    var queryString = '\n          SELECT \n            *\n          FROM \n            EMPLOYEE\n          WHERE\n            emp_id = ?\n        ';

    __WEBPACK_IMPORTED_MODULE_0__database__["a" /* default */].query(queryString, empid, function (err, rows) {
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

/***/ })
/******/ ]);
//# sourceMappingURL=main.map