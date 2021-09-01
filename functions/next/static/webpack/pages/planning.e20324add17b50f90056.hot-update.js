"use strict";
self["webpackHotUpdate_N_E"]("pages/planning",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxhbm5pbmcuZTIwMzI0YWRkMTdiNTBmOTAwNTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQVFBOztBQUNBLElBQU1LLGNBQWMsR0FBRztBQUNyQkMsRUFBQUEsTUFBTSxFQUFFQyx5Q0FEYTtBQUVyQkcsRUFBQUEsVUFBVSxFQUFFSCw0QkFGUztBQUdyQkssRUFBQUEsU0FBUyxFQUFFTCxZQUhVO0FBSXJCTyxFQUFBQSxhQUFhLEVBQUVQLHdCQUpNO0FBS3JCUyxFQUFBQSxpQkFBaUIsRUFBRVQsZUFMRTtBQU1yQlcsRUFBQUEsS0FBSyxFQUFFWCw0Q0FBNkJZO0FBTmYsQ0FBdkI7QUFTQUMsT0FBTyxDQUFDQyxHQUFSLENBQVloQixjQUFaLEdBRUE7O0FBQ0FMLDJEQUFhLENBQUNLLGNBQUQsQ0FBYjtBQUNBLElBQU1pQixJQUFJLEdBQUdyQixzREFBTyxFQUFwQjtBQUNBLElBQU1zQixRQUFRLEdBQUcsSUFBSXBCLDZEQUFKLEVBQWpCOztBQUVBLElBQU1xQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCdEIsRUFBQUEsOERBQWUsQ0FBQ29CLElBQUQsRUFBT0MsUUFBUCxDQUFmLENBQ0dFLElBREgsQ0FDUSxVQUFDQyxNQUFELEVBQVk7QUFDaEI7QUFDQSxRQUFNQyxVQUFVLEdBQUd4QixrRkFBQSxDQUF3Q3VCLE1BQXhDLENBQW5CO0FBQ0EsUUFBTUcsS0FBSyxHQUFHRixVQUFVLENBQUNHLFdBQXpCLENBSGdCLENBSWhCOztBQUNBLFFBQU1DLElBQUksR0FBR0wsTUFBTSxDQUFDSyxJQUFwQjtBQUNBLFFBQU1DLElBQUksR0FBRztBQUNYTCxNQUFBQSxVQUFVLEVBQVZBLFVBRFc7QUFFWEUsTUFBQUEsS0FBSyxFQUFMQSxLQUZXO0FBR1hFLE1BQUFBLElBQUksRUFBSkE7QUFIVyxLQUFiO0FBTUEsV0FBT0MsSUFBUDtBQUNELEdBZEgsV0FlUyxVQUFDQyxLQUFELEVBQVc7QUFDaEI7QUFDQSxRQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsSUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdILEtBQUssQ0FBQ0ksT0FBM0IsQ0FIZ0IsQ0FJaEI7O0FBQ0EsUUFBTUMsS0FBSyxHQUFHTCxLQUFLLENBQUNLLEtBQXBCLENBTGdCLENBTWhCOztBQUNBLFFBQU1YLFVBQVUsR0FBR3hCLGlGQUFBLENBQXVDOEIsS0FBdkMsQ0FBbkIsQ0FQZ0IsQ0FRaEI7QUFDRCxHQXhCSDtBQXlCRCxDQTFCRDs7QUE0QkEsSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQnBDLEVBQUFBLHNEQUFPLENBQUNrQixJQUFELENBQVAsQ0FDR0csSUFESCxDQUNRLFlBQU0sQ0FDVjtBQUNELEdBSEgsV0FJUyxVQUFDUSxLQUFELEVBQVcsQ0FDaEI7QUFDRCxHQU5IO0FBT0QsQ0FSRDs7QUFVQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9maXJlYmFzZS9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aFBvcHVwLFxyXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcclxuICBzaWduT3V0LFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG4vLyBXZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSUtFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRILFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVElELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VOREVSSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUElELFxyXG59O1xyXG5cclxuY29uc29sZS5sb2coZmlyZWJhc2VDb25maWcpO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5jb25zdCBsb2dpbkdvb2dsZSA9ICgpID0+IHtcclxuICBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICBjb25zdCBjcmVkZW50aWFsID0gR29vZ2xlQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tUmVzdWx0KHJlc3VsdCk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcclxuICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgY29uc3QgaW5mbyA9IHtcclxuICAgICAgICBjcmVkZW50aWFsLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gICAgICBjb25zdCBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAvLyBUaGUgQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICBjb25zdCBjcmVkZW50aWFsID0gR29vZ2xlQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tRXJyb3IoZXJyb3IpO1xyXG4gICAgICAvLyAuLi5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gIHNpZ25PdXQoYXV0aClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgLy8gc2lnbk91dFxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGF1dGgsIHByb3ZpZGVyLCBsb2dpbkdvb2dsZSwgbG9nb3V0IH07XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25PdXQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElLRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfQVVUSCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1BST0pFQ1RJRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX1NFTkRFUklEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19BUFBJRCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoIiwicHJvdmlkZXIiLCJsb2dpbkdvb2dsZSIsInRoZW4iLCJyZXN1bHQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwidXNlciIsImluZm8iLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZW1haWwiLCJjcmVkZW50aWFsRnJvbUVycm9yIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==