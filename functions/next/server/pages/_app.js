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

 // Web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBW0eu4lMSDqAjhdWTbPiuD8ISC23p5FG8",
  authDomain: "test-7b8b7.firebaseapp.com",
  projectId: "test-7b8b7",
  storageBucket: "test-7b8b7.appspot.com",
  messagingSenderId: "1007666781121",
  appId: "1:1007666781121:web:a4fc6ba4efc424cb9b6d40"
};
console.log(firebaseConfig); // Initialize Firebase

(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
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

var _jsxFileName = "/home/kifran/DEV/Template-NextJS-firebase/pages/_app.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBUUE7O0FBQ0EsTUFBTUssY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxNQUFNLEVBQUVDLHlDQURhO0FBRXJCRyxFQUFBQSxVQUFVLEVBQUVILDRCQUZTO0FBR3JCSyxFQUFBQSxTQUFTLEVBQUVMLFlBSFU7QUFJckJPLEVBQUFBLGFBQWEsRUFBRVAsd0JBSk07QUFLckJTLEVBQUFBLGlCQUFpQixFQUFFVCxlQUxFO0FBTXJCVyxFQUFBQSxLQUFLLEVBQUVYLDRDQUE2Qlk7QUFOZixDQUF2QjtBQVNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLGNBQVosR0FFQTs7QUFDQUwsMkRBQWEsQ0FBQ0ssY0FBRCxDQUFiO0FBQ0EsTUFBTWlCLElBQUksR0FBR3JCLHNEQUFPLEVBQXBCO0FBQ0EsTUFBTXNCLFFBQVEsR0FBRyxJQUFJcEIsNkRBQUosRUFBakI7O0FBRUEsTUFBTXFCLFdBQVcsR0FBRyxNQUFNO0FBQ3hCdEIsRUFBQUEsOERBQWUsQ0FBQ29CLElBQUQsRUFBT0MsUUFBUCxDQUFmLENBQ0dFLElBREgsQ0FDU0MsTUFBRCxJQUFZO0FBQ2hCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHeEIsa0ZBQUEsQ0FBd0N1QixNQUF4QyxDQUFuQjtBQUNBLFVBQU1HLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxXQUF6QixDQUhnQixDQUloQjs7QUFDQSxVQUFNQyxJQUFJLEdBQUdMLE1BQU0sQ0FBQ0ssSUFBcEI7QUFDQSxVQUFNQyxJQUFJLEdBQUc7QUFDWEwsTUFBQUEsVUFEVztBQUVYRSxNQUFBQSxLQUZXO0FBR1hFLE1BQUFBO0FBSFcsS0FBYjtBQU1BLFdBQU9DLElBQVA7QUFDRCxHQWRILEVBZUdDLEtBZkgsQ0FlVUMsS0FBRCxJQUFXO0FBQ2hCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLElBQXhCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHSCxLQUFLLENBQUNJLE9BQTNCLENBSGdCLENBSWhCOztBQUNBLFVBQU1DLEtBQUssR0FBR0wsS0FBSyxDQUFDSyxLQUFwQixDQUxnQixDQU1oQjs7QUFDQSxVQUFNWixVQUFVLEdBQUd4QixpRkFBQSxDQUF1QytCLEtBQXZDLENBQW5CLENBUGdCLENBUWhCO0FBQ0QsR0F4Qkg7QUF5QkQsQ0ExQkQ7O0FBNEJBLE1BQU1PLE1BQU0sR0FBRyxNQUFNO0FBQ25CckMsRUFBQUEsc0RBQU8sQ0FBQ2tCLElBQUQsQ0FBUCxDQUNHRyxJQURILENBQ1EsTUFBTSxDQUNWO0FBQ0QsR0FISCxFQUlHUSxLQUpILENBSVVDLEtBQUQsSUFBVyxDQUNoQjtBQUNELEdBTkg7QUFPRCxDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTVSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTSxDQUFDZixJQUFELElBQVNZLHVFQUFZLENBQUNyQiwrQ0FBRCxDQUEzQjtBQUVBLHNCQUFPLDhEQUFDLFNBQUQ7QUFBVyxRQUFJLEVBQUVTO0FBQWpCLEtBQTJCZSxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUlmQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QyLy4vZmlyZWJhc2UvYXBwLmpzIiwid2VicGFjazovL3Rlc3QyLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly90ZXN0Mi8uL25vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2NvbW1vbi9tYWluLmNzcyIsIndlYnBhY2s6Ly90ZXN0Mi8uL25vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdGVzdDIvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vdGVzdDIvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly90ZXN0Mi9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly90ZXN0Mi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGVzdDIvZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIiLCJ3ZWJwYWNrOi8vdGVzdDIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUG9wdXAsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHNpZ25PdXQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbi8vIFdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRU5ERVJJRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQSUQsXHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmNvbnN0IGxvZ2luR29vZ2xlID0gKCkgPT4ge1xyXG4gIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21SZXN1bHQocmVzdWx0KTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICBjb25zdCBpbmZvID0ge1xyXG4gICAgICAgIGNyZWRlbnRpYWwsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIGNvbnN0IGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgICAgIC8vIFRoZSBBdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgc2lnbk91dChhdXRoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBzaWduT3V0XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgcHJvdmlkZXIsIGxvZ2luR29vZ2xlLCBsb2dvdXQgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2FwcFwiO1xyXG5cclxuLy8gU3R5bGVzXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL2NvbW1vbi9tYWluLmNzc1wiO1xyXG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuXHJcbiAgcmV0dXJuIDxDb21wb25lbnQgdXNlcj17dXNlcn0gey4uLnBhZ2VQcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCIiLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduT3V0IiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0FVVEgiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19QUk9KRUNUSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19TRU5ERVJJRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfQVBQSUQiLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInByb3ZpZGVyIiwibG9naW5Hb29nbGUiLCJ0aGVuIiwicmVzdWx0IiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJpbmZvIiwiY2F0Y2giLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZW1haWwiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwibG9nb3V0IiwiUmVhY3QiLCJ1c2VBdXRoU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=