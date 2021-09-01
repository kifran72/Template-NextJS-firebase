"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./firebase/app.js":
/*!*************************!*\
  !*** ./firebase/app.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": function() { return /* binding */ auth; },
/* harmony export */   "provider": function() { return /* binding */ provider; },
/* harmony export */   "loginGoogle": function() { return /* binding */ loginGoogle; },
/* harmony export */   "logout": function() { return /* binding */ logout; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
// Import the functions you need from the SDKs you need

 // Web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyBW0eu4lMSDqAjhdWTbPiuD8ISC23p5FG8",
  authDomain: "test-7b8b7.firebaseapp.com",
  projectId: "test-7b8b7",
  storageBucket: "test-7b8b7.appspot.com",
  messagingSenderId: "1007666781121",
  appId: "1:1007666781121:web:a4fc6ba4efc424cb9b6d40"
};
console.log(firebaseConfig); // Initialize Firebase

(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();

var loginGoogle = function loginGoogle() {
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromResult(result);
    var token = credential.accessToken; // The signed-in user info.

    var user = result.user;
    var info = {
      credential: credential,
      token: token,
      user: user
    };
    return info;
  })["catch"](function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message; // The email of the user's account used.

    var email = error.email; // The AuthCredential type that was used.

    var credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider.credentialFromError(error); // ...
  });
};

var logout = function logout() {
  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth).then(function () {// signOut
  })["catch"](function (error) {// An error happened.
  });
};



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMjAzMjRhZGQxN2I1MGY5MDA1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBUUE7O0FBQ0EsSUFBTUssY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxNQUFNLEVBQUVDLHlDQURhO0FBRXJCRyxFQUFBQSxVQUFVLEVBQUVILDRCQUZTO0FBR3JCSyxFQUFBQSxTQUFTLEVBQUVMLFlBSFU7QUFJckJPLEVBQUFBLGFBQWEsRUFBRVAsd0JBSk07QUFLckJTLEVBQUFBLGlCQUFpQixFQUFFVCxlQUxFO0FBTXJCVyxFQUFBQSxLQUFLLEVBQUVYLDRDQUE2Qlk7QUFOZixDQUF2QjtBQVNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLGNBQVosR0FFQTs7QUFDQUwsMkRBQWEsQ0FBQ0ssY0FBRCxDQUFiO0FBQ0EsSUFBTWlCLElBQUksR0FBR3JCLHNEQUFPLEVBQXBCO0FBQ0EsSUFBTXNCLFFBQVEsR0FBRyxJQUFJcEIsNkRBQUosRUFBakI7O0FBRUEsSUFBTXFCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJ0QixFQUFBQSw4REFBZSxDQUFDb0IsSUFBRCxFQUFPQyxRQUFQLENBQWYsQ0FDR0UsSUFESCxDQUNRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQjtBQUNBLFFBQU1DLFVBQVUsR0FBR3hCLGtGQUFBLENBQXdDdUIsTUFBeEMsQ0FBbkI7QUFDQSxRQUFNRyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csV0FBekIsQ0FIZ0IsQ0FJaEI7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHTCxNQUFNLENBQUNLLElBQXBCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHO0FBQ1hMLE1BQUFBLFVBQVUsRUFBVkEsVUFEVztBQUVYRSxNQUFBQSxLQUFLLEVBQUxBLEtBRlc7QUFHWEUsTUFBQUEsSUFBSSxFQUFKQTtBQUhXLEtBQWI7QUFNQSxXQUFPQyxJQUFQO0FBQ0QsR0FkSCxXQWVTLFVBQUNDLEtBQUQsRUFBVztBQUNoQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxJQUF4QjtBQUNBLFFBQU1DLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxPQUEzQixDQUhnQixDQUloQjs7QUFDQSxRQUFNQyxLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBcEIsQ0FMZ0IsQ0FNaEI7O0FBQ0EsUUFBTVgsVUFBVSxHQUFHeEIsaUZBQUEsQ0FBdUM4QixLQUF2QyxDQUFuQixDQVBnQixDQVFoQjtBQUNELEdBeEJIO0FBeUJELENBMUJEOztBQTRCQSxJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CcEMsRUFBQUEsc0RBQU8sQ0FBQ2tCLElBQUQsQ0FBUCxDQUNHRyxJQURILENBQ1EsWUFBTSxDQUNWO0FBQ0QsR0FISCxXQUlTLFVBQUNRLEtBQUQsRUFBVyxDQUNoQjtBQUNELEdBTkg7QUFPRCxDQVJEOztBQVVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZpcmViYXNlL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUG9wdXAsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHNpZ25PdXQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbi8vIFdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgsXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRU5ERVJJRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQSUQsXHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmNvbnN0IGxvZ2luR29vZ2xlID0gKCkgPT4ge1xyXG4gIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21SZXN1bHQocmVzdWx0KTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICBjb25zdCBpbmZvID0ge1xyXG4gICAgICAgIGNyZWRlbnRpYWwsXHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgIGNvbnN0IGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgICAgIC8vIFRoZSBBdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgc2lnbk91dChhdXRoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBzaWduT3V0XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgcHJvdmlkZXIsIGxvZ2luR29vZ2xlLCBsb2dvdXQgfTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbk91dCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSUtFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19BVVRIIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfUFJPSkVDVElEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfU0VOREVSSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0FQUElEIiwiY29uc29sZSIsImxvZyIsImF1dGgiLCJwcm92aWRlciIsImxvZ2luR29vZ2xlIiwidGhlbiIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwiaW5mbyIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9