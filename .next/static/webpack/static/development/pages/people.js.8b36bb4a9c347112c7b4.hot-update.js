webpackHotUpdate("static/development/pages/people.js",{

/***/ "./src/pages/people.tsx":
/*!******************************!*\
  !*** ./src/pages/people.tsx ***!
  \******************************/
/*! exports provided: __N_SSP, default, myGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return People; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myGet", function() { return myGet; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/daniel/Documents/development/NEXTJS/nextjs-auth/src/pages/people.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var __N_SSP = true;
function People(_ref) {
  var people = _ref.people;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, JSON.stringify(people));
}
function myGet(url, ctx) {
  var _ctx$req;

  var cookie, response, _ctx$res, _ctx$res2, json;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function myGet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cookie = (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
            headers: {
              cookie: cookie
            }
          }));

        case 3:
          response = _context.sent;

          if (!(response.status === 401 && !ctx.req)) {
            _context.next = 7;
            break;
          }

          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/login");
          return _context.abrupt("return", {});

        case 7:
          if (!(response.status === 401 && ctx.req)) {
            _context.next = 11;
            break;
          }

          (_ctx$res = ctx.res) === null || _ctx$res === void 0 ? void 0 : _ctx$res.writeHead(302, {
            Location: "http://localhost:3000/login"
          });
          (_ctx$res2 = ctx.res) === null || _ctx$res2 === void 0 ? void 0 : _ctx$res2.end();
          return _context.abrupt("return");

        case 11:
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 13:
          json = _context.sent;
          return _context.abrupt("return", json);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ })

})
//# sourceMappingURL=people.js.8b36bb4a9c347112c7b4.hot-update.js.map