"use strict";
exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 5341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "z3": () => (/* binding */ loginGoogle),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony export provider */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5942);
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
}; // Initialize Firebase

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



/***/ })

};
;