exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 7304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5341);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6298);




 // Styles



function Navbar(props) {
  const user = props.user;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar),
    children: user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().listeButton),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
          children: "Home"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: "/planning",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
          children: "Planning"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        onClick: _firebase_app__WEBPACK_IMPORTED_MODULE_2__/* .logout */ .kS,
        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
        children: "Logout"
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      onClick: _firebase_app__WEBPACK_IMPORTED_MODULE_2__/* .loginGoogle */ .z3,
      className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
      children: "Login with Google"
    })
  });
}

/***/ }),

/***/ 4643:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__Wwf_G",
	"navbar": "Navbar_navbar__3KWoz",
	"button": "Navbar_button__1SFqt",
	"listeButton": "Navbar_listeButton__2nYz4"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;