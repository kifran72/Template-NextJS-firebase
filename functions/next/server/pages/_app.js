(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase/app.js":
/*!*************************!*\
  !*** ./firebase/app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "provider": () => (/* binding */ provider),
/* harmony export */   "loginGoogle": () => (/* binding */ loginGoogle),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
// Import the functions you need from the SDKs you need

 // Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBW0eu4lMSDqAjhdWTbPiuD8ISC23p5FG8',
  authDomain: 'test-7b8b7.firebaseapp.com',
  projectId: 'test-7b8b7',
  storageBucket: 'test-7b8b7.appspot.com',
  messagingSenderId: '1007666781121',
  appId: '1:1007666781121:web:a4fc6ba4efc424cb9b6d40'
}; // Initialize Firebase

const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();

const loginGoogle = () => {
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider).then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken; // The signed-in user info.

    const user = result.user;
    const info = {
      credential,
      token,
      user
    };
    return info;
  }).catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message; // The email of the user's account used.

    const email = error.email; // The AuthCredential type that was used.

    const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromError(error); // ...
  });
};

const logout = () => {
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(() => {// signOut
  }).catch(error => {// An error happened.
  });
};



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/app */ "./firebase/app.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/common/main.css */ "./node_modules/@fullcalendar/common/main.css");
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/kifran/DEV/test/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Styles





function MyApp({
  Component,
  pageProps
}) {
  const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase_app__WEBPACK_IMPORTED_MODULE_3__.auth);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({
    user: user
  }, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./node_modules/@fullcalendar/common/main.css":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.css":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBUUE7O0FBQ0EsTUFBTUssY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxNQUFNLEVBQUUseUNBRGE7QUFFckJDLEVBQUFBLFVBQVUsRUFBRSw0QkFGUztBQUdyQkMsRUFBQUEsU0FBUyxFQUFFLFlBSFU7QUFJckJDLEVBQUFBLGFBQWEsRUFBRSx3QkFKTTtBQUtyQkMsRUFBQUEsaUJBQWlCLEVBQUUsZUFMRTtBQU1yQkMsRUFBQUEsS0FBSyxFQUFFO0FBTmMsQ0FBdkIsRUFTQTs7QUFDQSxNQUFNQyxHQUFHLEdBQUdaLDJEQUFhLENBQUNLLGNBQUQsQ0FBekI7QUFDQSxNQUFNUSxJQUFJLEdBQUdaLHNEQUFPLEVBQXBCO0FBQ0EsTUFBTWEsUUFBUSxHQUFHLElBQUlYLDZEQUFKLEVBQWpCOztBQUVBLE1BQU1ZLFdBQVcsR0FBRyxNQUFNO0FBQ3hCYixFQUFBQSw4REFBZSxDQUFDVyxJQUFELEVBQU9DLFFBQVAsQ0FBZixDQUNHRSxJQURILENBQ1NDLE1BQUQsSUFBWTtBQUNoQjtBQUNBLFVBQU1DLFVBQVUsR0FBR2Ysa0ZBQUEsQ0FBd0NjLE1BQXhDLENBQW5CO0FBQ0EsVUFBTUcsS0FBSyxHQUFHRixVQUFVLENBQUNHLFdBQXpCLENBSGdCLENBSWhCOztBQUNBLFVBQU1DLElBQUksR0FBR0wsTUFBTSxDQUFDSyxJQUFwQjtBQUNBLFVBQU1DLElBQUksR0FBRztBQUNYTCxNQUFBQSxVQURXO0FBRVhFLE1BQUFBLEtBRlc7QUFHWEUsTUFBQUE7QUFIVyxLQUFiO0FBTUEsV0FBT0MsSUFBUDtBQUNELEdBZEgsRUFlR0MsS0FmSCxDQWVVQyxLQUFELElBQVc7QUFDaEI7QUFDQSxVQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsSUFBeEI7QUFDQSxVQUFNQyxZQUFZLEdBQUdILEtBQUssQ0FBQ0ksT0FBM0IsQ0FIZ0IsQ0FJaEI7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHTCxLQUFLLENBQUNLLEtBQXBCLENBTGdCLENBTWhCOztBQUNBLFVBQU1aLFVBQVUsR0FBR2YsaUZBQUEsQ0FBdUNzQixLQUF2QyxDQUFuQixDQVBnQixDQVFoQjtBQUNELEdBeEJIO0FBeUJELENBMUJEOztBQTRCQSxNQUFNTyxNQUFNLEdBQUcsTUFBTTtBQUNuQjVCLEVBQUFBLHNEQUFPLENBQUNTLElBQUQsQ0FBUCxDQUNHRyxJQURILENBQ1EsTUFBTSxDQUNWO0FBQ0QsR0FISCxFQUlHUSxLQUpILENBSVVDLEtBQUQsSUFBVyxDQUNoQjtBQUNELEdBTkg7QUFPRCxDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTSxDQUFDZixJQUFELElBQVNZLHVFQUFZLENBQUNyQiwrQ0FBRCxDQUEzQjtBQUVBLHNCQUFPLDhEQUFDLFNBQUQ7QUFBVyxRQUFJLEVBQUVTO0FBQWpCLEtBQTJCZSxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUlmQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QyLy4vZmlyZWJhc2UvYXBwLmpzIiwid2VicGFjazovL3Rlc3QyLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly90ZXN0Mi8uL25vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2NvbW1vbi9tYWluLmNzcyIsIndlYnBhY2s6Ly90ZXN0Mi8uL25vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdGVzdDIvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vdGVzdDIvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly90ZXN0Mi9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly90ZXN0Mi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGVzdDIvZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIiLCJ3ZWJwYWNrOi8vdGVzdDIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7XG4gIGdldEF1dGgsXG4gIHNpZ25JbldpdGhQb3B1cCxcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxuICBzaWduT3V0LFxufSBmcm9tICdmaXJlYmFzZS9hdXRoJztcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeUJXMGV1NGxNU0RxQWpoZFdUYlBpdUQ4SVNDMjNwNUZHOCcsXG4gIGF1dGhEb21haW46ICd0ZXN0LTdiOGI3LmZpcmViYXNlYXBwLmNvbScsXG4gIHByb2plY3RJZDogJ3Rlc3QtN2I4YjcnLFxuICBzdG9yYWdlQnVja2V0OiAndGVzdC03YjhiNy5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnMTAwNzY2Njc4MTEyMScsXG4gIGFwcElkOiAnMToxMDA3NjY2NzgxMTIxOndlYjphNGZjNmJhNGVmYzQyNGNiOWI2ZDQwJyxcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuXG5jb25zdCBsb2dpbkdvb2dsZSA9ICgpID0+IHtcbiAgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxuICAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQpO1xuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xuICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXG4gICAgICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXI7XG4gICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBjcmVkZW50aWFsLFxuICAgICAgICB0b2tlbixcbiAgICAgICAgdXNlcixcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxuICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXG4gICAgICBjb25zdCBlbWFpbCA9IGVycm9yLmVtYWlsO1xuICAgICAgLy8gVGhlIEF1dGhDcmVkZW50aWFsIHR5cGUgdGhhdCB3YXMgdXNlZC5cbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XG4gICAgICAvLyAuLi5cbiAgICB9KTtcbn07XG5cbmNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgc2lnbk91dChhdXRoKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIC8vIHNpZ25PdXRcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgYXV0aCwgcHJvdmlkZXIsIGxvZ2luR29vZ2xlLCBsb2dvdXQgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2FwcFwiO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiQGZ1bGxjYWxlbmRhci9jb21tb24vbWFpbi5jc3NcIjtcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHVzZXI9e3VzZXJ9IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIiIsIiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25PdXQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImF1dGgiLCJwcm92aWRlciIsImxvZ2luR29vZ2xlIiwidGhlbiIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwiaW5mbyIsImNhdGNoIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImVtYWlsIiwiY3JlZGVudGlhbEZyb21FcnJvciIsImxvZ291dCIsIlJlYWN0IiwidXNlQXV0aFN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9