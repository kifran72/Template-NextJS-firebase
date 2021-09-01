(() => {
var exports = {};
exports.id = "pages/planning";
exports.ids = ["pages/planning"];
exports.modules = {

/***/ "./node_modules/@material-ui/core/esm/Button/Button.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Button/Button.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 15px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$disabled': {
        boxShadow: 'none'
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: 'inherit',
      marginRight: -4,
      marginLeft: 8,
      '&$iconSizeSmall': {
        marginRight: -2
      }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      '& > *:first-child': {
        fontSize: 18
      }
    },

    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: 20
      }
    },

    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      '& > *:first-child': {
        fontSize: 22
      }
    }
  };
};
var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Button(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  var startIcon = startIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.startIcon, classes["iconSize".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))])
  }, startIconProp);
  var endIcon = endIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.endIcon, classes["iconSize".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))])
  }, endIconProp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))], classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
 true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, no elevation is used.
   */
  disableElevation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Element placed after the children.
   */
  endIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['large', 'medium', 'small']),

  /**
   * Element placed before the children.
   */
  startIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['button', 'reset', 'submit']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['contained', 'outlined', 'text'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiButton'
})(Button));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Button/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Button/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");
/* harmony import */ var _TouchRipple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TouchRipple */ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js");













var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

var ButtonBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ButtonBase(props, ref) {
  var action = props.action,
      buttonRefProp = props.buttonRef,
      _props$centerRipple = props.centerRipple,
      centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      onDragLeave = props.onDragLeave,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

  var buttonRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  function getButtonNode() {
    // #StrictMode ready
    return react_dom__WEBPACK_IMPORTED_MODULE_4__.findDOMNode(buttonRef.current);
  }

  var rippleRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  var _useIsFocusVisible = (0,_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_7__.default)(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
    return (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
      if (eventCallback) {
        eventCallback(event);
      }

      var ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  var handleMouseDown = useRippleHandler('start', onMouseDown);
  var handleDragLeave = useRippleHandler('stop', onDragLeave);
  var handleMouseUp = useRippleHandler('stop', onMouseUp);
  var handleMouseLeave = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler('start', onTouchStart);
  var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  var handleTouchMove = useRippleHandler('stop', onTouchMove);
  var handleBlur = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    if (isFocusVisible(event)) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  var isNonNativeButton = function isNonNativeButton() {
    var button = getButtonNode();
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  var keydownRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);
  var handleKeyDown = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__.default)(function (event) {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  var buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }

    buttonProps['aria-disabled'] = disabled;
  }

  var handleUserRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(buttonRefProp, ref);
  var handleOwnRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(focusVisibleRef, buttonRef);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(handleUserRef, handleOwnRef);

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(['Material-UI: The `component` prop provided to ButtonBase is invalid.', 'Please make sure the children prop is rendered in this custom component.'].join('\n'));
      }
    }, [enableTouchRipple]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ComponentProp, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick: onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ?
  /*#__PURE__*/

  /* TouchRipple is only needed client-side, x2 boost on the server. */
  react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TouchRipple__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
 true ? ButtonBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.refType,

  /**
   * @ignore
   *
   * Use that prop to pass a ref to the native button component.
   * @deprecated Use `ref` instead.
   */
  buttonRef: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_11__.default)(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.refType, 'Use `ref` instead.'),

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.elementTypeAcceptingRef,

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   */
  focusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onDragLeave: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onKeyUp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onMouseDown: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onMouseUp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onTouchEnd: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onTouchMove: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onTouchStart: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['button', 'reset', 'submit']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiButtonBase'
})(ButtonBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");




var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  var classes = props.classes,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      inProp = props.in,
      _props$onExited = props.onExited,
      onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
      timeout = props.timeout;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      leaving = _React$useState[0],
      setLeaving = _React$useState[1];

  var rippleClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__.default)(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

  useEnhancedEffect(function () {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true); // react-transition-group#onExited

      var timeoutId = setTimeout(handleExited, timeout);
      return function () {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [handleExited, inProp, timeout]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: childClassName
  }));
}

 true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /**
   * @ignore - injected from TransitionGroup
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * Diameter of the ripple.
   */
  rippleSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * Vertical position of the ripple center.
   */
  rippleY: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * exit delay
   */
  timeout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ripple);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DELAY_RIPPLE": () => (/* binding */ DELAY_RIPPLE),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ripple */ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js");









var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit'
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

var TouchRipple = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function TouchRipple(props, ref) {
  var _props$center = props.center,
      centerProp = _props$center === void 0 ? false : _props$center,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["center", "classes", "className"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState([]),
      ripples = _React$useState[0],
      setRipples = _React$useState[1];

  var nextKey = react__WEBPACK_IMPORTED_MODULE_3__.useRef(0);
  var rippleCallback = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  var ignoringMouseDown = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  var startTimer = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null); // This is the hook called once the previous timeout is ready.

  var startTimerCommit = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var container = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    return function () {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (params) {
    var pulsate = params.pulsate,
        rippleX = params.rippleX,
        rippleY = params.rippleY,
        rippleSize = params.rippleSize,
        cb = params.cb;
    setRipples(function (oldRipples) {
      return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(oldRipples), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Ripple__WEBPACK_IMPORTED_MODULE_7__.default, {
        key: nextKey.current,
        classes: classes,
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var _options$pulsate = options.pulsate,
        pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
        _options$center = options.center,
        center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
        _options$fakeElement = options.fakeElement,
        fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    var rippleX;
    var rippleY;
    var rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = function () {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(function () {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize,
        cb: cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function () {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (event, cb) {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function () {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(function (oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle(ref, function () {
    return {
      pulsate: pulsate,
      start: start,
      stop: stop
    };
  }, [pulsate, start, stop]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.root, className),
    ref: container
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.TransitionGroup, {
    component: null,
    exit: true
  }, ripples));
});
 true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.memo(TouchRipple)));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ButtonBase__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": () => (/* binding */ hexToRgb),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "decomposeColor": () => (/* binding */ decomposeColor),
/* harmony export */   "recomposeColor": () => (/* binding */ recomposeColor),
/* harmony export */   "getContrastRatio": () => (/* binding */ getContrastRatio),
/* harmony export */   "getLuminance": () => (/* binding */ getLuminance),
/* harmony export */   "emphasize": () => (/* binding */ emphasize),
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "darken": () => (/* binding */ darken),
/* harmony export */   "lighten": () => (/* binding */ lighten)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "default": () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMixins)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": () => (/* binding */ light),
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "default": () => (/* binding */ createPalette)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSpacing)
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": () => (/* binding */ createMuiTheme),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTypography)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shape = {
  borderRadius: 4
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : 0);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deprecatedPropType)
/* harmony export */ });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/setRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setRef)
/* harmony export */ });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useEventCallback.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useForkRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForkRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refA, refValue);
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "teardown": () => (/* binding */ teardown),
/* harmony export */   "default": () => (/* binding */ useIsFocusVisible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */

function focusTriggersKeyboardModality(node) {
  var type = node.type,
      tagName = node.tagName;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  var target = event.target;

  try {
    return target.matches(':focus-visible');
  } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
  // we use our own heuristic for those browsers
  // rethrow might be better if it's not the expected error but do we really
  // want to crash if focus-visible malfunctioned?
  // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
/**
 * Should be called if a blur event is fired on a focus-visible element
 */


function handleBlurVisible() {
  // To detect a tab/window switch, we look for a blur event followed
  // rapidly by a visibility change.
  // If we don't see a visibility change within 100ms, it's probably a
  // regular focus change.
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
    hadFocusVisibleRecently = false;
  }, 100);
}

function useIsFocusVisible() {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    var node = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);

    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(isFocusVisible);
  }

  return {
    isFocusVisible: isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref: ref
  };
}

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/app */ "./firebase/app.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Navbar.module.css */ "./styles/Navbar.module.css");
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");

var _jsxFileName = "/home/kifran/DEV/Template-NextJS-firebase/components/navbar.js";


 // Styles



function Navbar(props) {
  const user = props.user;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar),
    children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().listeButton),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
          className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/planning",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
          className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
          children: "Planning"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        onClick: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.logout,
        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
      onClick: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.loginGoogle,
      className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
      children: "Login with Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/planning.js":
/*!***************************!*\
  !*** ./pages/planning.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Planning)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/main.cjs.js");
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.cjs.js");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Calendar.module.css */ "./styles/Calendar.module.css");
/* harmony import */ var _styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");

var _jsxFileName = "/home/kifran/DEV/Template-NextJS-firebase/pages/planning.js";




 // must go before plugins

 // a plugin!
// Styles

 // Components


function Planning(props) {
  const user = props.user;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Planning"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "https://firebasestorage.googleapis.com/v0/b/test-7b8b7.appspot.com/o/IMG_20210802_185402_Bokeh-min.jpg?alt=media&token=51c262bc-46c7-4ecf-a5b3-a258d747ba3f"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_6__.default, {
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Planning"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_fullcalendar_react__WEBPACK_IMPORTED_MODULE_4___default()), {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__.default],
        initialView: "dayGridMonth",
        className: (_styles_Calendar_module_css__WEBPACK_IMPORTED_MODULE_7___default().calendar)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/@fullcalendar/common/main.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.cjs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
FullCalendar v5.9.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
;

var tslib = __webpack_require__(/*! tslib */ "tslib");

var vdom_cjs = __webpack_require__(/*! ./vdom.cjs */ "./node_modules/@fullcalendar/common/vdom.cjs.js"); // no public types yet. when there are, export from:
// import {} from './api-type-deps'


var EventSourceApi =
/** @class */
function () {
  function EventSourceApi(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }

  EventSourceApi.prototype.remove = function () {
    this.context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: this.internalEventSource.sourceId
    });
  };

  EventSourceApi.prototype.refetch = function () {
    this.context.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  };

  Object.defineProperty(EventSourceApi.prototype, "id", {
    get: function () {
      return this.internalEventSource.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi.prototype, "url", {
    get: function () {
      return this.internalEventSource.meta.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi.prototype, "format", {
    get: function () {
      return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
    },
    enumerable: false,
    configurable: true
  });
  return EventSourceApi;
}();

function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
} // Querying
// ----------------------------------------------------------------------------------------------------------------


function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector); // really bad fallback for IE
    // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  }

  if (!document.documentElement.contains(el)) {
    return null;
  }

  do {
    if (elementMatches(el, selector)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);

  return null;
}

function elementMatches(el, selector) {
  var method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
} // accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document


function findElements(container, selector) {
  var containers = container instanceof HTMLElement ? [container] : container;
  var allMatches = [];

  for (var i = 0; i < containers.length; i += 1) {
    var matches = containers[i].querySelectorAll(selector);

    for (var j = 0; j < matches.length; j += 1) {
      allMatches.push(matches[j]);
    }
  }

  return allMatches;
} // accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!


function findDirectChildren(parent, selector) {
  var parents = parent instanceof HTMLElement ? [parent] : parent;
  var allMatches = [];

  for (var i = 0; i < parents.length; i += 1) {
    var childNodes = parents[i].children; // only ever elements

    for (var j = 0; j < childNodes.length; j += 1) {
      var childNode = childNodes[j];

      if (!selector || elementMatches(childNode, selector)) {
        allMatches.push(childNode);
      }
    }
  }

  return allMatches;
} // Style
// ----------------------------------------------------------------------------------------------------------------


var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;

function applyStyle(el, props) {
  for (var propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}

function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = '';
  } else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
    el.style[name] = val + "px";
  } else {
    el.style[name] = val;
  }
} // Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.


function getEventTargetViaRoot(ev) {
  var _a, _b;

  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
} // Shadow DOM consuderations
// ----------------------------------------------------------------------------------------------------------------


function getElRoot(el) {
  return el.getRootNode ? el.getRootNode() : document;
} // Stops a mouse/touch event from doing it's native browser action


function preventDefault(ev) {
  ev.preventDefault();
} // Event Delegation
// ----------------------------------------------------------------------------------------------------------------


function buildDelegationHandler(selector, handler) {
  return function (ev) {
    var matchedChild = elementClosest(ev.target, selector);

    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}

function listenBySelector(container, eventType, selector, handler) {
  var attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return function () {
    container.removeEventListener(eventType, attachedHandler);
  };
}

function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  var currentMatchedChild;
  return listenBySelector(container, 'mouseover', selector, function (mouseOverEv, matchedChild) {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);

      var realOnMouseLeave_1 = function (mouseLeaveEv) {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
      }; // listen to the next mouseleave, and then unattach


      matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
    }
  });
} // Animation
// ----------------------------------------------------------------------------------------------------------------


var transitionEventNames = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend']; // triggered only when the next single subsequent transition finishes

function whenTransitionDone(el, callback) {
  var realCallback = function (ev) {
    callback(ev);
    transitionEventNames.forEach(function (eventName) {
      el.removeEventListener(eventName, realCallback);
    });
  };

  transitionEventNames.forEach(function (eventName) {
    el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
  });
}

var guidNumber = 0;

function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Make the mouse cursor express that an event is not allowed in the current area


function disableCursor() {
  document.body.classList.add('fc-not-allowed');
} // Returns the mouse cursor to its original look


function enableCursor() {
  document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/


function preventSelection(el) {
  el.classList.add('fc-unselectable');
  el.addEventListener('selectstart', preventDefault);
}

function allowSelection(el) {
  el.classList.remove('fc-unselectable');
  el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/


function preventContextMenu(el) {
  el.addEventListener('contextmenu', preventDefault);
}

function allowContextMenu(el) {
  el.removeEventListener('contextmenu', preventDefault);
}

function parseFieldSpecs(input) {
  var specs = [];
  var tokens = [];
  var i;
  var token;

  if (typeof input === 'string') {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === 'function') {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }

  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];

    if (typeof token === 'string') {
      specs.push(token.charAt(0) === '-' ? {
        field: token.substring(1),
        order: -1
      } : {
        field: token,
        order: 1
      });
    } else if (typeof token === 'function') {
      specs.push({
        func: token
      });
    }
  }

  return specs;
}

function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  var i;
  var cmp;

  for (i = 0; i < fieldSpecs.length; i += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);

    if (cmp) {
      return cmp;
    }
  }

  return 0;
}

function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }

  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}

function flexibleCompare(a, b) {
  if (!a && !b) {
    return 0;
  }

  if (b == null) {
    return -1;
  }

  if (a == null) {
    return 1;
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return String(a).localeCompare(String(b));
  }

  return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/


function padStart(val, len) {
  var s = String(val);
  return '000'.substr(0, len - s.length) + s;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/


function compareNumbers(a, b) {
  return a - b;
}

function isInt(n) {
  return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/


function computeSmallestCellWidth(cellEl) {
  var allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
  var contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');

  if (!allWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
  }

  if (!contentWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-cushion className');
  }

  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
  contentWidthEl.getBoundingClientRect().width;
}

var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; // Adding

function addWeeks(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n * 7;
  return arrayToUtcDate(a);
}

function addDays(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n;
  return arrayToUtcDate(a);
}

function addMs(m, n) {
  var a = dateToUtcArray(m);
  a[6] += n;
  return arrayToUtcDate(a);
} // Diffing (all return floats)
// TODO: why not use ranges?


function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}

function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}

function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}

function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}

function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1000;
}

function diffDayAndTime(m0, m1) {
  var m0day = startOfDay(m0);
  var m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
} // Diffing Whole Units


function diffWholeWeeks(m0, m1) {
  var d = diffWholeDays(m0, m1);

  if (d !== null && d % 7 === 0) {
    return d / 7;
  }

  return null;
}

function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }

  return null;
} // Start-Of


function startOfDay(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()]);
}

function startOfHour(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours()]);
}

function startOfMinute(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes()]);
}

function startOfSecond(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds()]);
} // Week Computation


function weekOfYear(marker, dow, doy) {
  var y = marker.getUTCFullYear();
  var w = weekOfGivenYear(marker, y, dow, doy);

  if (w < 1) {
    return weekOfGivenYear(marker, y - 1, dow, doy);
  }

  var nextW = weekOfGivenYear(marker, y + 1, dow, doy);

  if (nextW >= 1) {
    return Math.min(w, nextW);
  }

  return w;
}

function weekOfGivenYear(marker, year, dow, doy) {
  var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  var dayStart = startOfDay(marker);
  var days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1; // zero-indexed
} // start-of-first-week - start-of-year


function firstWeekOffset(year, dow, doy) {
  // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  var fwd = 7 + dow - doy; // first-week day local weekday -- which local weekday is fwd

  var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
} // Array Conversion


function dateToLocalArray(date) {
  return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
}

function arrayToLocalDate(a) {
  return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
  a[3] || 0, a[4] || 0, a[5] || 0);
}

function dateToUtcArray(date) {
  return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
}

function arrayToUtcDate(a) {
  // according to web standards (and Safari), a month index is required.
  // massage if only given a year.
  if (a.length === 1) {
    a = a.concat([0]);
  }

  return new Date(Date.UTC.apply(Date, a));
} // Other Utils


function isValidDate(m) {
  return !isNaN(m.valueOf());
}

function timeAsMs(m) {
  return m.getUTCHours() * 1000 * 60 * 60 + m.getUTCMinutes() * 1000 * 60 + m.getUTCSeconds() * 1000 + m.getUTCMilliseconds();
}

function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId: defId,
    range: range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}

var hasOwnProperty = Object.prototype.hasOwnProperty; // Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.

function mergeProps(propObjs, complexPropsMap) {
  var dest = {};

  if (complexPropsMap) {
    for (var name_1 in complexPropsMap) {
      var complexObjs = []; // collect the trailing object values, stopping when a non-object is discovered

      for (var i = propObjs.length - 1; i >= 0; i -= 1) {
        var val = propObjs[i][name_1];

        if (typeof val === 'object' && val) {
          // non-null object
          complexObjs.unshift(val);
        } else if (val !== undefined) {
          dest[name_1] = val; // if there were no objects, this value will be used

          break;
        }
      } // if the trailing values were objects, use the merged value


      if (complexObjs.length) {
        dest[name_1] = mergeProps(complexObjs);
      }
    }
  } // copy values into the destination, going from last to first


  for (var i = propObjs.length - 1; i >= 0; i -= 1) {
    var props = propObjs[i];

    for (var name_2 in props) {
      if (!(name_2 in dest)) {
        // if already assigned by previous props or complex props, don't reassign
        dest[name_2] = props[name_2];
      }
    }
  }

  return dest;
}

function filterHash(hash, func) {
  var filtered = {};

  for (var key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }

  return filtered;
}

function mapHash(hash, func) {
  var newHash = {};

  for (var key in hash) {
    newHash[key] = func(hash[key], key);
  }

  return newHash;
}

function arrayToHash(a) {
  var hash = {};

  for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
    var item = a_1[_i];
    hash[item] = true;
  }

  return hash;
}

function buildHashFromArray(a, func) {
  var hash = {};

  for (var i = 0; i < a.length; i += 1) {
    var tuple = func(a[i], i);
    hash[tuple[0]] = tuple[1];
  }

  return hash;
}

function hashValuesToArray(obj) {
  var a = [];

  for (var key in obj) {
    a.push(obj[key]);
  }

  return a;
}

function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }

  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }

  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        return false;
      }
    }
  }

  return true;
}

function getUnequalProps(obj0, obj1) {
  var keys = [];

  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }

  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }

  return keys;
}

function compareObjs(oldProps, newProps, equalityFuncs) {
  if (equalityFuncs === void 0) {
    equalityFuncs = {};
  }

  if (oldProps === newProps) {
    return true;
  }

  for (var key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;else {
      return false;
    }
  } // check for props that were omitted in the new


  for (var key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }

  return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/


function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }

  if (comparator) {
    return comparator(val0, val1);
  }

  return false;
}

function collectFromHash(hash, startIndex, endIndex, step) {
  if (startIndex === void 0) {
    startIndex = 0;
  }

  if (step === void 0) {
    step = 1;
  }

  var res = [];

  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }

  for (var i = startIndex; i < endIndex; i += step) {
    var val = hash[i];

    if (val !== undefined) {
      // will disregard undefined for sparse arrays
      res.push(val);
    }
  }

  return res;
}

function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (var i = 0; i < recurringTypes.length; i += 1) {
    var parsed = recurringTypes[i].parse(refined, dateEnv);

    if (parsed) {
      var allDay = refined.allDay;

      if (allDay == null) {
        allDay = defaultAllDay;

        if (allDay == null) {
          allDay = parsed.allDayGuess;

          if (allDay == null) {
            allDay = false;
          }
        }
      }

      return {
        allDay: allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i
      };
    }
  }

  return null;
}

function expandRecurring(eventStore, framingRange, context) {
  var dateEnv = context.dateEnv,
      pluginHooks = context.pluginHooks,
      options = context.options;
  var defs = eventStore.defs,
      instances = eventStore.instances; // remove existing recurring instances
  // TODO: bad. always expand events as a second step

  instances = filterHash(instances, function (instance) {
    return !defs[instance.defId].recurringDef;
  });

  for (var defId in defs) {
    var def = defs[defId];

    if (def.recurringDef) {
      var duration = def.recurringDef.duration;

      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }

      var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);

      for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
        var start = starts_1[_i];
        var instance = createEventInstance(defId, {
          start: start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }

  return {
    defs: defs,
    instances: instances
  };
}
/*
Event MUST have a recurringDef
*/


function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  var typeDef = recurringTypes[eventDef.recurringDef.typeId];
  var markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv); // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to

  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }

  return markers;
}

var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/; // Parsing and Creation

function createDuration(input, unit) {
  var _a;

  if (typeof input === 'string') {
    return parseString(input);
  }

  if (typeof input === 'object' && input) {
    // non-null object
    return parseObject(input);
  }

  if (typeof input === 'number') {
    return parseObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
  }

  return null;
}

function parseString(s) {
  var m = PARSE_RE.exec(s);

  if (m) {
    var sign = m[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m[2] ? parseInt(m[2], 10) : 0),
      milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
      (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
      (m[5] ? parseInt(m[5], 10) : 0) * 1000 + ( // seconds
      m[6] ? parseInt(m[6], 10) : 0) // ms
      )
    };
  }

  return null;
}

function parseObject(obj) {
  var duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
    (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
    (obj.seconds || obj.second || 0) * 1000 + ( // seconds
    obj.milliseconds || obj.millisecond || obj.ms || 0) // ms

  };
  var weeks = obj.weeks || obj.week;

  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }

  return duration;
} // Equality


function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}

function asCleanDays(dur) {
  if (!dur.years && !dur.months && !dur.milliseconds) {
    return dur.days;
  }

  return 0;
} // Simple Math


function addDurations(d0, d1) {
  return {
    years: d0.years + d1.years,
    months: d0.months + d1.months,
    days: d0.days + d1.days,
    milliseconds: d0.milliseconds + d1.milliseconds
  };
}

function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}

function multiplyDuration(d, n) {
  return {
    years: d.years * n,
    months: d.months * n,
    days: d.days * n,
    milliseconds: d.milliseconds * n
  };
} // Conversions
// "Rough" because they are based on average-case Gregorian months/years


function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}

function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}

function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}

function asRoughMinutes(dur) {
  return asRoughMs(dur) / (1000 * 60);
}

function asRoughSeconds(dur) {
  return asRoughMs(dur) / 1000;
}

function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
} // Advanced Math


function wholeDivideDurations(numerator, denominator) {
  var res = null;

  for (var i = 0; i < INTERNAL_UNITS.length; i += 1) {
    var unit = INTERNAL_UNITS[i];

    if (denominator[unit]) {
      var localRes = numerator[unit] / denominator[unit];

      if (!isInt(localRes) || res !== null && res !== localRes) {
        return null;
      }

      res = localRes;
    } else if (numerator[unit]) {
      // needs to divide by something but can't!
      return null;
    }
  }

  return res;
}

function greatestDurationDenominator(dur) {
  var ms = dur.milliseconds;

  if (ms) {
    if (ms % 1000 !== 0) {
      return {
        unit: 'millisecond',
        value: ms
      };
    }

    if (ms % (1000 * 60) !== 0) {
      return {
        unit: 'second',
        value: ms / 1000
      };
    }

    if (ms % (1000 * 60 * 60) !== 0) {
      return {
        unit: 'minute',
        value: ms / (1000 * 60)
      };
    }

    if (ms) {
      return {
        unit: 'hour',
        value: ms / (1000 * 60 * 60)
      };
    }
  }

  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return {
        unit: 'week',
        value: dur.days / 7
      };
    }

    return {
      unit: 'day',
      value: dur.days
    };
  }

  if (dur.months) {
    return {
      unit: 'month',
      value: dur.months
    };
  }

  if (dur.years) {
    return {
      unit: 'year',
      value: dur.years
    };
  }

  return {
    unit: 'millisecond',
    value: 0
  };
} // timeZoneOffset is in minutes


function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
  if (stripZeroTime === void 0) {
    stripZeroTime = false;
  }

  var s = marker.toISOString();
  s = s.replace('.000', '');

  if (stripZeroTime) {
    s = s.replace('T00:00:00Z', '');
  }

  if (s.length > 10) {
    // time part wasn't stripped, can add timezone info
    if (timeZoneOffset == null) {
      s = s.replace('Z', '');
    } else if (timeZoneOffset !== 0) {
      s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
    } // otherwise, its UTC-0 and we want to keep the Z

  }

  return s;
} // formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"


function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, '');
} // TODO: use Date::toISOString and use everything after the T?


function formatIsoTimeString(marker) {
  return padStart(marker.getUTCHours(), 2) + ':' + padStart(marker.getUTCMinutes(), 2) + ':' + padStart(marker.getUTCSeconds(), 2);
}

function formatTimeZoneOffset(minutes, doIso) {
  if (doIso === void 0) {
    doIso = false;
  }

  var sign = minutes < 0 ? '-' : '+';
  var abs = Math.abs(minutes);
  var hours = Math.floor(abs / 60);
  var mins = Math.round(abs % 60);

  if (doIso) {
    return sign + padStart(hours, 2) + ":" + padStart(mins, 2);
  }

  return "GMT" + sign + hours + (mins ? ":" + padStart(mins, 2) : '');
} // TODO: new util arrayify?


function removeExact(array, exactVal) {
  var removeCnt = 0;
  var i = 0;

  while (i < array.length) {
    if (array[i] === exactVal) {
      array.splice(i, 1);
      removeCnt += 1;
    } else {
      i += 1;
    }
  }

  return removeCnt;
}

function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }

  var len = a0.length;
  var i;

  if (len !== a1.length) {
    // not array? or not same length?
    return false;
  }

  for (i = 0; i < len; i += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
      return false;
    }
  }

  return true;
}

function memoize(workerFunc, resEquality, teardownFunc) {
  var currentArgs;
  var currentRes;
  return function () {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      var res = workerFunc.apply(this, newArgs);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArgs = newArgs;
    return currentRes;
  };
}

function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  var _this = this;

  var currentArg;
  var currentRes;
  return function (newArg) {
    if (!currentArg) {
      currentRes = workerFunc.call(_this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      var res = workerFunc.call(_this, newArg);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArg = newArg;
    return currentRes;
  };
}

function memoizeArraylike( // used at all?
workerFunc, resEquality, teardownFunc) {
  var _this = this;

  var currentArgSets = [];
  var currentResults = [];
  return function (newArgSets) {
    var currentLen = currentArgSets.length;
    var newLen = newArgSets.length;
    var i = 0;

    for (; i < currentLen; i += 1) {
      if (!newArgSets[i]) {
        // one of the old sets no longer exists
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
      } else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }

        var res = workerFunc.apply(_this, newArgSets[i]);

        if (!resEquality || !resEquality(res, currentResults[i])) {
          currentResults[i] = res;
        }
      }
    }

    for (; i < newLen; i += 1) {
      currentResults[i] = workerFunc.apply(_this, newArgSets[i]);
    }

    currentArgSets = newArgSets;
    currentResults.splice(newLen); // remove excess

    return currentResults;
  };
}

function memoizeHashlike( // used?
workerFunc, resEquality, teardownFunc) {
  var _this = this;

  var currentArgHash = {};
  var currentResHash = {};
  return function (newArgHash) {
    var newResHash = {};

    for (var key in newArgHash) {
      if (!currentResHash[key]) {
        newResHash[key] = workerFunc.apply(_this, newArgHash[key]);
      } else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
        if (teardownFunc) {
          teardownFunc(currentResHash[key]);
        }

        var res = workerFunc.apply(_this, newArgHash[key]);
        newResHash[key] = resEquality && resEquality(res, currentResHash[key]) ? currentResHash[key] : res;
      } else {
        newResHash[key] = currentResHash[key];
      }
    }

    currentArgHash = newArgHash;
    currentResHash = newResHash;
    return newResHash;
  };
}

var EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too

var COMMA_RE = /,/g; // we need re for globalness

var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character

var UTC_RE = /UTC|GMT/;

var NativeFormatter =
/** @class */
function () {
  function NativeFormatter(formatSettings) {
    var standardDateProps = {};
    var extendedSettings = {};
    var severity = 0;

    for (var name_1 in formatSettings) {
      if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name_1] = formatSettings[name_1];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
      } else {
        standardDateProps[name_1] = formatSettings[name_1];

        if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
          // TODO: what about hour12? no severity
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
        }
      }
    }

    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }

  NativeFormatter.prototype.format = function (date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  };

  NativeFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    var _a = this,
        standardDateProps = _a.standardDateProps,
        extendedSettings = _a.extendedSettings;

    var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);

    if (!diffSeverity) {
      return this.format(start, context);
    }

    var biggestUnitForPartial = diffSeverity;

    if (biggestUnitForPartial > 1 && ( // the two dates are different in a way that's larger scale than time
    standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') && (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') && (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
      biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
    }

    var full0 = this.format(start, context);
    var full1 = this.format(end, context);

    if (full0 === full1) {
      return full0;
    }

    var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    var partial0 = partialFormattingFunc(start);
    var partial1 = partialFormattingFunc(end);
    var insertion = findCommonInsertion(full0, partial0, full1, partial1);
    var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';

    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }

    return full0 + separator + full1;
  };

  NativeFormatter.prototype.getLargestUnit = function () {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return 'year';

      case 4:
        return 'month';

      case 3:
        return 'week';

      case 2:
        return 'day';

      default:
        return 'time';
      // really?
    }
  };

  return NativeFormatter;
}();

function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  var standardDatePropCnt = Object.keys(standardDateProps).length;

  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
    return function (date) {
      return formatTimeZoneOffset(date.timeZoneOffset);
    };
  }

  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return function (date) {
      return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.locale, extendedSettings.week);
    };
  }

  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}

function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = tslib.__assign({}, standardDateProps); // copy

  extendedSettings = tslib.__assign({}, extendedSettings); // copy

  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers

  var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  var zeroFormat; // needed?

  if (extendedSettings.omitZeroMinute) {
    var zeroProps = tslib.__assign({}, standardDateProps);

    delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings

    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }

  return function (date) {
    var marker = date.marker;
    var format;

    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }

    var s = format.format(marker);
    return postProcess(s, date, standardDateProps, extendedSettings, context);
  };
}

function sanitizeSettings(standardDateProps, extendedSettings) {
  // deal with a browser inconsistency where formatting the timezone
  // requires that the hour/minute be present.
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = '2-digit';
    }

    if (!standardDateProps.minute) {
      standardDateProps.minute = '2-digit';
    }
  } // only support short timezone names


  if (standardDateProps.timeZoneName === 'long') {
    standardDateProps.timeZoneName = 'short';
  } // if requesting to display seconds, MUST display minutes


  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}

function postProcess(s, date, standardDateProps, extendedSettings, context) {
  s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes

  if (standardDateProps.timeZoneName === 'short') {
    s = injectTzoStr(s, context.timeZone === 'UTC' || date.timeZoneOffset == null ? 'UTC' : // important to normalize for IE, which does "GMT"
    formatTimeZoneOffset(date.timeZoneOffset));
  }

  if (extendedSettings.omitCommas) {
    s = s.replace(COMMA_RE, '').trim();
  }

  if (extendedSettings.omitZeroMinute) {
    s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
  } // ^ do anything that might create adjacent spaces before this point,
  // because MERIDIEM_RE likes to eat up loading spaces


  if (extendedSettings.meridiem === false) {
    s = s.replace(MERIDIEM_RE, '').trim();
  } else if (extendedSettings.meridiem === 'narrow') {
    // a/p
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return m1.toLocaleLowerCase();
    });
  } else if (extendedSettings.meridiem === 'short') {
    // am/pm
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return m1.toLocaleLowerCase() + "m";
    });
  } else if (extendedSettings.meridiem === 'lowercase') {
    // other meridiem transformers already converted to lowercase
    s = s.replace(MERIDIEM_RE, function (m0) {
      return m0.toLocaleLowerCase();
    });
  }

  s = s.replace(MULTI_SPACE_RE, ' ');
  s = s.trim();
  return s;
}

function injectTzoStr(s, tzoStr) {
  var replaced = false;
  s = s.replace(UTC_RE, function () {
    replaced = true;
    return tzoStr;
  }); // IE11 doesn't include UTC/GMT in the original string, so append to end

  if (!replaced) {
    s += " " + tzoStr;
  }

  return s;
}

function formatWeekNumber(num, weekText, locale, display) {
  var parts = [];

  if (display === 'narrow') {
    parts.push(weekText);
  } else if (display === 'short') {
    parts.push(weekText, ' ');
  } // otherwise, considered 'numeric'


  parts.push(locale.simpleNumberFormat.format(num));

  if (locale.options.direction === 'rtl') {
    // TODO: use control characters instead?
    parts.reverse();
  }

  return parts.join('');
} // Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger


function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }

  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }

  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }

  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }

  return 0;
}

function computePartialFormattingOptions(options, biggestUnit) {
  var partialOptions = {};

  for (var name_2 in options) {
    if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
    STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
      partialOptions[name_2] = options[name_2];
    }
  }

  return partialOptions;
}

function findCommonInsertion(full0, partial0, full1, partial1) {
  var i0 = 0;

  while (i0 < full0.length) {
    var found0 = full0.indexOf(partial0, i0);

    if (found0 === -1) {
      break;
    }

    var before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    var after0 = full0.substr(i0);
    var i1 = 0;

    while (i1 < full1.length) {
      var found1 = full1.indexOf(partial1, i1);

      if (found1 === -1) {
        break;
      }

      var before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      var after1 = full1.substr(i1);

      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }

  return null;
}

function expandZonedMarker(dateInfo, calendarSystem) {
  var a = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a,
    year: a[0],
    month: a[1],
    day: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5],
    millisecond: a[6]
  };
}

function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  var startInfo = expandZonedMarker(start, context.calendarSystem);
  var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}
/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/

/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/


var CmdFormatter =
/** @class */
function () {
  function CmdFormatter(cmdStr) {
    this.cmdStr = cmdStr;
  }

  CmdFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };

  CmdFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };

  return CmdFormatter;
}();

var FuncFormatter =
/** @class */
function () {
  function FuncFormatter(func) {
    this.func = func;
  }

  FuncFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };

  FuncFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };

  return FuncFormatter;
}();

function createFormatter(input) {
  if (typeof input === 'object' && input) {
    // non-null object
    return new NativeFormatter(input);
  }

  if (typeof input === 'string') {
    return new CmdFormatter(input);
  }

  if (typeof input === 'function') {
    return new FuncFormatter(input);
  }

  return null;
} // base options
// ------------


var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity
}; // do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.

var BASE_OPTION_DEFAULTS = {
  eventDisplay: 'auto',
  defaultRangeSeparator: ' - ',
  titleRangeSeparator: ' \u2013 ',
  defaultTimedEventDuration: '01:00:00',
  defaultAllDayEventDuration: {
    day: 1
  },
  forceEventDuration: false,
  nextDayThreshold: '00:00:00',
  dayHeaders: true,
  initialView: '',
  aspectRatio: 1.35,
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'today prev,next'
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: 'local',
  editable: false,
  nowIndicator: false,
  scrollTime: '06:00:00',
  scrollTimeReset: true,
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: 'start',
  endParam: 'end',
  timeZoneParam: 'timeZone',
  timeZone: 'local',
  locales: [],
  locale: '',
  themeSystem: 'standard',
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: '*',
  eventOrder: 'start,-duration,allDay,title',
  dayPopoverFormat: {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1000,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}; // calendar listeners
// ------------------

var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
}; // calendar-specific options
// -------------------------

var CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isBoolComplexEqual,
  footerToolbar: isBoolComplexEqual,
  buttonText: isBoolComplexEqual,
  buttonIcons: isBoolComplexEqual
};

function isBoolComplexEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object' && a && b) {
    // both non-null objects
    return isPropsEqual(a, b);
  }

  return a === b;
} // view-specific options
// ---------------------


var VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
}; // util funcs
// ----------------------------------------------------------------------------------------------------

function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}

function refineProps(input, refiners) {
  var refined = {};
  var extra = {};

  for (var propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }

  for (var propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }

  return {
    refined: refined,
    extra: extra
  };
}

function identity(raw) {
  return raw;
}

function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
  var eventStore = createEmptyEventStore();
  var eventRefiners = buildEventRefiners(context);

  for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
    var rawEvent = rawEvents_1[_i];
    var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);

    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }

  return eventStore;
}

function eventTupleToStore(tuple, eventStore) {
  if (eventStore === void 0) {
    eventStore = createEmptyEventStore();
  }

  eventStore.defs[tuple.def.defId] = tuple.def;

  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }

  return eventStore;
} // retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?


function getRelevantEvents(eventStore, instanceId) {
  var instance = eventStore.instances[instanceId];

  if (instance) {
    var def_1 = eventStore.defs[instance.defId]; // get events/instances with same group

    var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
      return isEventDefsGrouped(def_1, lookDef);
    }); // add the original
    // TODO: wish we could use eventTupleToStore or something like it

    newStore.defs[def_1.defId] = def_1;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }

  return createEmptyEventStore();
}

function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}

function createEmptyEventStore() {
  return {
    defs: {},
    instances: {}
  };
}

function mergeEventStores(store0, store1) {
  return {
    defs: tslib.__assign(tslib.__assign({}, store0.defs), store1.defs),
    instances: tslib.__assign(tslib.__assign({}, store0.instances), store1.instances)
  };
}

function filterEventStoreDefs(eventStore, filterFunc) {
  var defs = filterHash(eventStore.defs, filterFunc);
  var instances = filterHash(eventStore.instances, function (instance) {
    return defs[instance.defId] // still exists?
    ;
  });
  return {
    defs: defs,
    instances: instances
  };
}

function excludeSubEventStore(master, sub) {
  var defs = master.defs,
      instances = master.instances;
  var filteredDefs = {};
  var filteredInstances = {};

  for (var defId in defs) {
    if (!sub.defs[defId]) {
      // not explicitly excluded
      filteredDefs[defId] = defs[defId];
    }
  }

  for (var instanceId in instances) {
    if (!sub.instances[instanceId] && // not explicitly excluded
    filteredDefs[instances[instanceId].defId] // def wasn't filtered away
    ) {
        filteredInstances[instanceId] = instances[instanceId];
      }
  }

  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}

function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true); // allowOpenRange=true
  }

  if (typeof input === 'object' && input) {
    // non-null object
    return parseEvents([input], null, context, true); // allowOpenRange=true
  }

  if (input != null) {
    return String(input);
  }

  return null;
}

function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }

  if (typeof raw === 'string') {
    return raw.split(/\s+/);
  }

  return [];
} // TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props


var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: '',
  borderColor: '',
  textColor: '',
  classNames: []
};

function createEventUi(refined, context) {
  var constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || '',
    borderColor: refined.borderColor || refined.color || '',
    textColor: refined.textColor || '',
    classNames: (refined.className || []).concat(refined.classNames || []) // join singular and plural

  };
} // TODO: prevent against problems with <2 args!


function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}

function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}

var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};

var EVENT_REFINERS = tslib.__assign(tslib.__assign(tslib.__assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), {
  extendedProps: identity
});

function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }

  var _a = refineEventDef(raw, context, refiners),
      refined = _a.refined,
      extra = _a.extra;

  var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);

  if (recurringRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return {
      def: def,
      instance: null
    };
  }

  var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);

  if (singleRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
    var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    return {
      def: def,
      instance: instance
    };
  }

  return null;
}

function refineEventDef(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }

  return refineProps(raw, refiners);
}

function buildEventRefiners(context) {
  return tslib.__assign(tslib.__assign(tslib.__assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/


function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
  var def = {
    title: refined.title || '',
    groupId: refined.groupId || '',
    publicId: refined.id || '',
    url: refined.url || '',
    recurringDef: null,
    defId: guid(),
    sourceId: sourceId,
    allDay: allDay,
    hasEnd: hasEnd,
    ui: createEventUi(refined, context),
    extendedProps: tslib.__assign(tslib.__assign({}, refined.extendedProps || {}), extra)
  };

  for (var _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++) {
    var memberAdder = _a[_i];

    tslib.__assign(def, memberAdder(refined));
  } // help out EventApi from having user modify props


  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}

function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  var allDay = refined.allDay;
  var startMeta;
  var startMarker = null;
  var hasEnd = false;
  var endMeta;
  var endMarker = null;
  var startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);

  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }

  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }

  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      // fall back to the date props LAST
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }

  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }

  if (endMeta) {
    endMarker = endMeta.marker;

    if (allDay) {
      endMarker = startOfDay(endMarker);
    }

    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }

  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }

  return {
    allDay: allDay,
    hasEnd: hasEnd,
    range: {
      start: startMarker,
      end: endMarker
    },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}

function computeIsDefaultAllDay(eventSource, context) {
  var res = null;

  if (eventSource) {
    res = eventSource.defaultAllDay;
  }

  if (res == null) {
    res = context.options.defaultAllDay;
  }

  return res;
}
/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.


function computeAlignedDayRange(timedRange) {
  var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  var start = startOfDay(timedRange.start);
  var end = addDays(start, dayCnt);
  return {
    start: start,
    end: end
  };
} // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg


function computeVisibleDayRange(timedRange, nextDayThreshold) {
  if (nextDayThreshold === void 0) {
    nextDayThreshold = createDuration(0);
  }

  var startDay = null;
  var endDay = null;

  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
    // If the end time is actually inclusively part of the next day and is equal to or
    // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
    // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.

    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }

  if (timedRange.start) {
    startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
    // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.

    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }

  return {
    start: startDay,
    end: endDay
  };
} // spans from one day into another?


function isMultiDayRange(range) {
  var visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}

function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === 'year') {
    return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
  }

  if (largeUnit === 'month') {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
  }

  return diffDayAndTime(date0, date1); // returns a duration
}

function parseRange(input, dateEnv) {
  var start = null;
  var end = null;

  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }

  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }

  if (!start && !end) {
    return null;
  }

  if (start && end && end < start) {
    return null;
  }

  return {
    start: start,
    end: end
  };
} // SIDE-EFFECT: will mutate ranges.
// Will return a new array result.


function invertRanges(ranges, constraintRange) {
  var invertedRanges = [];
  var start = constraintRange.start; // the end of the previous range. the start of the new range

  var i;
  var dateRange; // ranges need to be in order. required for our date-walking algorithm

  ranges.sort(compareRanges);

  for (i = 0; i < ranges.length; i += 1) {
    dateRange = ranges[i]; // add the span of time before the event (if there is any)

    if (dateRange.start > start) {
      // compare millisecond time (skip any ambig logic)
      invertedRanges.push({
        start: start,
        end: dateRange.start
      });
    }

    if (dateRange.end > start) {
      start = dateRange.end;
    }
  } // add the span of time after the last event (if there is any)


  if (start < constraintRange.end) {
    // compare millisecond time (skip any ambig logic)
    invertedRanges.push({
      start: start,
      end: constraintRange.end
    });
  }

  return invertedRanges;
}

function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}

function intersectRanges(range0, range1) {
  var start = range0.start,
      end = range0.end;
  var newRange = null;

  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }

  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }

  if (start === null || end === null || start < end) {
    newRange = {
      start: start,
      end: end
    };
  }

  return newRange;
}

function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}

function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}

function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}

function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
} // If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).


function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }

  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }

  return date;
}
/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/


function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  var inverseBgByGroupId = {};
  var inverseBgByDefId = {};
  var defByGroupId = {};
  var bgRanges = [];
  var fgRanges = [];
  var eventUis = compileEventUis(eventStore.defs, eventUiBases);

  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    var ui = eventUis[def.defId];

    if (ui.display === 'inverse-background') {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];

        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }

  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = eventStore.defs[instance.defId];
    var ui = eventUis[def.defId];
    var origRange = instance.range;
    var normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    var slicedRange = intersectRanges(normalRange, framingRange);

    if (slicedRange) {
      if (ui.display === 'inverse-background') {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== 'none') {
        (ui.display === 'background' ? bgRanges : fgRanges).push({
          def: def,
          ui: ui,
          instance: instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }

  for (var groupId in inverseBgByGroupId) {
    // BY GROUP
    var ranges = inverseBgByGroupId[groupId];
    var invertedRanges = invertRanges(ranges, framingRange);

    for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
      var invertedRange = invertedRanges_1[_i];
      var def = defByGroupId[groupId];
      var ui = eventUis[def.defId];
      bgRanges.push({
        def: def,
        ui: ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  for (var defId in inverseBgByDefId) {
    var ranges = inverseBgByDefId[defId];
    var invertedRanges = invertRanges(ranges, framingRange);

    for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
      var invertedRange = invertedRanges_2[_a];
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  return {
    bg: bgRanges,
    fg: fgRanges
  };
}

function hasBgRendering(def) {
  return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}

function setElSeg(el, seg) {
  el.fcSeg = seg;
}

function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg || // for the harness
  null;
} // event ui computation


function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, function (eventDef) {
    return compileEventUi(eventDef, eventUiBases);
  });
}

function compileEventUi(eventDef, eventUiBases) {
  var uis = [];

  if (eventUiBases['']) {
    uis.push(eventUiBases['']);
  }

  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }

  uis.push(eventDef.ui);
  return combineEventUis(uis);
}

function sortEventSegs(segs, eventOrderSpecs) {
  var objs = segs.map(buildSegCompareObj);
  objs.sort(function (obj0, obj1) {
    return compareByFieldSpecs(obj0, obj1, eventOrderSpecs);
  });
  return objs.map(function (c) {
    return c._seg;
  });
} // returns a object with all primitive props that can be compared


function buildSegCompareObj(seg) {
  var eventRange = seg.eventRange;
  var eventDef = eventRange.def;
  var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events

  var end = range.end ? range.end.valueOf() : 0; // "

  return tslib.__assign(tslib.__assign(tslib.__assign({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start: start,
    end: end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}

function computeSegDraggable(seg, context) {
  var pluginHooks = context.pluginHooks;
  var transformers = pluginHooks.isDraggableTransformers;
  var _a = seg.eventRange,
      def = _a.def,
      ui = _a.ui;
  var val = ui.startEditable;

  for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
    var transformer = transformers_1[_i];
    val = transformer(val, def, ui, context);
  }

  return val;
}

function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}

function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}

function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
defaultDisplayEventEnd, // defaults to true
startOverride, endOverride) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var displayEventTime = options.displayEventTime,
      displayEventEnd = options.displayEventEnd;
  var eventDef = seg.eventRange.def;
  var eventInstance = seg.eventRange.instance;

  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }

  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }

  var wholeEventStart = eventInstance.range.start;
  var wholeEventEnd = eventInstance.range.end;
  var segStart = startOverride || seg.start || seg.eventRange.range.start;
  var segEnd = endOverride || seg.end || seg.eventRange.range.end;
  var isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  var isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();

  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;

    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }

    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo // nooooo, same

    });
  }

  return '';
}

function getSegMeta(seg, todayRange, nowDate) {
  var segRange = seg.eventRange.range;
  return {
    isPast: segRange.end < (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}

function getEventClassNames(props) {
  var classNames = ['fc-event'];

  if (props.isMirror) {
    classNames.push('fc-event-mirror');
  }

  if (props.isDraggable) {
    classNames.push('fc-event-draggable');
  }

  if (props.isStartResizable || props.isEndResizable) {
    classNames.push('fc-event-resizable');
  }

  if (props.isDragging) {
    classNames.push('fc-event-dragging');
  }

  if (props.isResizing) {
    classNames.push('fc-event-resizing');
  }

  if (props.isSelected) {
    classNames.push('fc-event-selected');
  }

  if (props.isStart) {
    classNames.push('fc-event-start');
  }

  if (props.isEnd) {
    classNames.push('fc-event-end');
  }

  if (props.isPast) {
    classNames.push('fc-event-past');
  }

  if (props.isToday) {
    classNames.push('fc-event-today');
  }

  if (props.isFuture) {
    classNames.push('fc-event-future');
  }

  return classNames;
}

function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : eventRange.def.defId + ":" + eventRange.range.start.toISOString(); // inverse-background events don't have specific instances. TODO: better solution
}

var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};

function parseDateSpan(raw, dateEnv, defaultDuration) {
  var span = parseOpenDateSpan(raw, dateEnv);
  var range = span.range;

  if (!range.start) {
    return null;
  }

  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }

    range.end = dateEnv.add(range.start, defaultDuration);
  }

  return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/


function parseOpenDateSpan(raw, dateEnv) {
  var _a = refineProps(raw, STANDARD_PROPS),
      standardProps = _a.refined,
      extra = _a.extra;

  var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  var allDay = standardProps.allDay;

  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }

  return tslib.__assign({
    range: {
      start: startMeta ? startMeta.marker : null,
      end: endMeta ? endMeta.marker : null
    },
    allDay: allDay
  }, extra);
}

function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
} // the NON-DATE-RELATED props


function isSpanPropsEqual(span0, span1) {
  for (var propName in span1) {
    if (propName !== 'range' && propName !== 'allDay') {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  } // are there any props that span0 has that span1 DOESN'T have?
  // both have range/allDay, so no need to special-case.


  for (var propName in span0) {
    if (!(propName in span1)) {
      return false;
    }
  }

  return true;
}

function buildDateSpanApi(span, dateEnv) {
  return tslib.__assign(tslib.__assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), {
    allDay: span.allDay
  });
}

function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return tslib.__assign(tslib.__assign({}, buildRangeApi(range, dateEnv, omitTime)), {
    timeZone: dateEnv.timeZone
  });
}

function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, {
      omitTime: omitTime
    }),
    endStr: dateEnv.formatIso(range.end, {
      omitTime: omitTime
    })
  };
}

function fabricateEventRange(dateSpan, eventUiBases, context) {
  var res = refineEventDef({
    editable: false
  }, context);
  var def = parseEventDef(res.refined, res.extra, '', // sourceId
  dateSpan.allDay, true, // hasEnd
  context);
  return {
    def: def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}

function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger('select', tslib.__assign(tslib.__assign({}, buildDateSpanApiWithContext(selection, context)), {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  }));
}

function triggerDateUnselect(pev, context) {
  context.emitter.trigger('unselect', {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}

function buildDateSpanApiWithContext(dateSpan, context) {
  var props = {};

  for (var _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];

    tslib.__assign(props, transform(dateSpan, context));
  }

  tslib.__assign(props, buildDateSpanApi(dateSpan, context.dateEnv));

  return props;
} // Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd


function getDefaultEventEnd(allDay, marker, context) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var end = marker;

  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }

  return end;
} // applies the mutation to ALL defs/instances within the event store


function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  var dest = createEmptyEventStore();

  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }

  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = dest.defs[instance.defId]; // important to grab the newly modified def

    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }

  return dest;
}

function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  var standardProps = mutation.standardProps || {}; // if hasEnd has not been specified, guess a good value based on deltas.
  // if duration will change, there's no way the default duration will persist,
  // and thus, we need to mark the event as having a real end

  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true; // TODO: is this mutation okay?
  }

  var copy = tslib.__assign(tslib.__assign(tslib.__assign({}, eventDef), standardProps), {
    ui: tslib.__assign(tslib.__assign({}, eventDef.ui), standardProps.ui)
  });

  if (mutation.extendedProps) {
    copy.extendedProps = tslib.__assign(tslib.__assign({}, copy.extendedProps), mutation.extendedProps);
  }

  for (var _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++) {
    var applier = _a[_i];
    applier(copy, mutation, context);
  }

  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }

  return copy;
}

function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
  var dateEnv = context.dateEnv;
  var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;

  var copy = tslib.__assign({}, eventInstance);

  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }

  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }

  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }

  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }

  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  } // in case event was all-day but the supplied deltas were not
  // better util for this?


  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  } // handle invalid durations


  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }

  return copy;
} // no public types yet. when there are, export from:
// import {} from './api-type-deps'


var ViewApi =
/** @class */
function () {
  function ViewApi(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }

  Object.defineProperty(ViewApi.prototype, "calendar", {
    get: function () {
      return this.getCurrentData().calendarApi;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "title", {
    get: function () {
      return this.getCurrentData().viewTitle;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "activeStart", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "activeEnd", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "currentStart", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "currentEnd", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: false,
    configurable: true
  });

  ViewApi.prototype.getOption = function (name) {
    return this.getCurrentData().options[name]; // are the view-specific options
  };

  return ViewApi;
}();

var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};

function parseEventSource(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventSourceRefiners(context);
  }

  var rawObj;

  if (typeof raw === 'string') {
    rawObj = {
      url: raw
    };
  } else if (typeof raw === 'function' || Array.isArray(raw)) {
    rawObj = {
      events: raw
    };
  } else if (typeof raw === 'object' && raw) {
    // not null
    rawObj = raw;
  }

  if (rawObj) {
    var _a = refineProps(rawObj, refiners),
        refined = _a.refined,
        extra = _a.extra;

    var metaRes = buildEventSourceMeta(refined, context);

    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: '',
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || '',
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }

  return null;
}

function buildEventSourceRefiners(context) {
  return tslib.__assign(tslib.__assign(tslib.__assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}

function buildEventSourceMeta(raw, context) {
  var defs = context.pluginHooks.eventSourceDefs;

  for (var i = defs.length - 1; i >= 0; i -= 1) {
    // later-added plugins take precedence
    var def = defs[i];
    var meta = def.parseMeta(raw);

    if (meta) {
      return {
        sourceDefId: i,
        meta: meta
      };
    }
  }

  return null;
}

function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.dateMarker;

    default:
      return currentDate;
  }
}

function getInitialDate(options, dateEnv) {
  var initialDateInput = options.initialDate; // compute the initial ambig-timezone date

  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }

  return getNow(options.now, dateEnv); // getNow already returns unzoned
}

function getNow(nowInput, dateEnv) {
  if (typeof nowInput === 'function') {
    nowInput = nowInput();
  }

  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }

  return dateEnv.createMarker(nowInput);
}

var CalendarApi =
/** @class */
function () {
  function CalendarApi() {}

  CalendarApi.prototype.getCurrentData = function () {
    return this.currentDataManager.getCurrentData();
  };

  CalendarApi.prototype.dispatch = function (action) {
    return this.currentDataManager.dispatch(action);
  };

  Object.defineProperty(CalendarApi.prototype, "view", {
    get: function () {
      return this.getCurrentData().viewApi;
    } // for public API
    ,
    enumerable: false,
    configurable: true
  });

  CalendarApi.prototype.batchRendering = function (callback) {
    callback();
  };

  CalendarApi.prototype.updateSize = function () {
    this.trigger('_resize', true);
  }; // Options
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.setOption = function (name, val) {
    this.dispatch({
      type: 'SET_OPTION',
      optionName: name,
      rawOptionValue: val
    });
  };

  CalendarApi.prototype.getOption = function (name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  };

  CalendarApi.prototype.getAvailableLocaleCodes = function () {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }; // Trigger
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.on = function (handlerName, handler) {
    var currentDataManager = this.currentDataManager;

    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn("Unknown listener name '" + handlerName + "'");
    }
  };

  CalendarApi.prototype.off = function (handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  }; // not meant for public use


  CalendarApi.prototype.trigger = function (handlerName) {
    var _a;

    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    (_a = this.currentDataManager.emitter).trigger.apply(_a, tslib.__spreadArray([handlerName], args));
  }; // View
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.changeView = function (viewType, dateOrRange) {
    var _this = this;

    this.batchRendering(function () {
      _this.unselect();

      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          // a range
          _this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: viewType
          });

          _this.dispatch({
            type: 'SET_OPTION',
            optionName: 'visibleRange',
            rawOptionValue: dateOrRange
          });
        } else {
          var dateEnv = _this.getCurrentData().dateEnv;

          _this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        _this.dispatch({
          type: 'CHANGE_VIEW_TYPE',
          viewType: viewType
        });
      }
    });
  }; // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change


  CalendarApi.prototype.zoomTo = function (dateMarker, viewType) {
    var state = this.getCurrentData();
    var spec;
    viewType = viewType || 'day'; // day is default zoom

    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();

    if (spec) {
      this.dispatch({
        type: 'CHANGE_VIEW_TYPE',
        viewType: spec.type,
        dateMarker: dateMarker
      });
    } else {
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: dateMarker
      });
    }
  }; // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.


  CalendarApi.prototype.getUnitViewSpec = function (unit) {
    var _a = this.getCurrentData(),
        viewSpecs = _a.viewSpecs,
        toolbarConfig = _a.toolbarConfig;

    var viewTypes = [].concat(toolbarConfig.viewsWithButtons);
    var i;
    var spec;

    for (var viewType in viewSpecs) {
      viewTypes.push(viewType);
    }

    for (i = 0; i < viewTypes.length; i += 1) {
      spec = viewSpecs[viewTypes[i]];

      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }

    return null;
  }; // Current Date
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.prev = function () {
    this.unselect();
    this.dispatch({
      type: 'PREV'
    });
  };

  CalendarApi.prototype.next = function () {
    this.unselect();
    this.dispatch({
      type: 'NEXT'
    });
  };

  CalendarApi.prototype.prevYear = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  };

  CalendarApi.prototype.nextYear = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  };

  CalendarApi.prototype.today = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
    });
  };

  CalendarApi.prototype.gotoDate = function (zonedDateInput) {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  };

  CalendarApi.prototype.incrementDate = function (deltaInput) {
    var state = this.getCurrentData();
    var delta = createDuration(deltaInput);

    if (delta) {
      // else, warn about invalid input?
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  }; // for external API


  CalendarApi.prototype.getDate = function () {
    var state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  }; // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.formatDate = function (d, formatter) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
  }; // `settings` is for formatter AND isEndExclusive


  CalendarApi.prototype.formatRange = function (d0, d1, settings) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  };

  CalendarApi.prototype.formatIso = function (d, omitTime) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatIso(dateEnv.createMarker(d), {
      omitTime: omitTime
    });
  }; // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  // this public method receives start/end dates in any format, with any timezone
  // NOTE: args were changed from v3


  CalendarApi.prototype.select = function (dateOrObj, endDate) {
    var selectionInput;

    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }

    var state = this.getCurrentData();
    var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({
      days: 1
    }));

    if (selection) {
      // throw parse error otherwise?
      this.dispatch({
        type: 'SELECT_DATES',
        selection: selection
      });
      triggerDateSelect(selection, null, state);
    }
  }; // public method


  CalendarApi.prototype.unselect = function (pev) {
    var state = this.getCurrentData();

    if (state.dateSelection) {
      this.dispatch({
        type: 'UNSELECT_DATES'
      });
      triggerDateUnselect(pev, state);
    }
  }; // Public Events API
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.addEvent = function (eventInput, sourceInput) {
    if (eventInput instanceof EventApi) {
      var def = eventInput._def;
      var instance = eventInput._instance;
      var currentData = this.getCurrentData(); // not already present? don't want to add an old snapshot

      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: 'ADD_EVENTS',
          eventStore: eventTupleToStore({
            def: def,
            instance: instance
          }) // TODO: better util for two args?

        });
        this.triggerEventAdd(eventInput);
      }

      return eventInput;
    }

    var state = this.getCurrentData();
    var eventSource;

    if (sourceInput instanceof EventSourceApi) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === 'boolean') {
      if (sourceInput) {
        // true. part of the first event source
        eventSource = hashValuesToArray(state.eventSources)[0];
      }
    } else if (sourceInput != null) {
      // an ID. accepts a number too
      var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function

      if (!sourceApi) {
        console.warn("Could not find an event source with ID \"" + sourceInput + "\""); // TODO: test

        return null;
      }

      eventSource = sourceApi.internalEventSource;
    }

    var tuple = parseEvent(eventInput, eventSource, state, false);

    if (tuple) {
      var newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: 'ADD_EVENTS',
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }

    return null;
  };

  CalendarApi.prototype.triggerEventAdd = function (eventApi) {
    var _this = this;

    var emitter = this.getCurrentData().emitter;
    emitter.trigger('eventAdd', {
      event: eventApi,
      relatedEvents: [],
      revert: function () {
        _this.dispatch({
          type: 'REMOVE_EVENTS',
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  }; // TODO: optimize


  CalendarApi.prototype.getEventById = function (id) {
    var state = this.getCurrentData();
    var _a = state.eventStore,
        defs = _a.defs,
        instances = _a.instances;
    id = String(id);

    for (var defId in defs) {
      var def = defs[defId];

      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventApi(state, def, null);
        }

        for (var instanceId in instances) {
          var instance = instances[instanceId];

          if (instance.defId === def.defId) {
            return new EventApi(state, def, instance);
          }
        }
      }
    }

    return null;
  };

  CalendarApi.prototype.getEvents = function () {
    var currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  };

  CalendarApi.prototype.removeAllEvents = function () {
    this.dispatch({
      type: 'REMOVE_ALL_EVENTS'
    });
  }; // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.getEventSources = function () {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    var sourceApis = [];

    for (var internalId in sourceHash) {
      sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
    }

    return sourceApis;
  };

  CalendarApi.prototype.getEventSourceById = function (id) {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    id = String(id);

    for (var sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceApi(state, sourceHash[sourceId]);
      }
    }

    return null;
  };

  CalendarApi.prototype.addEventSource = function (sourceInput) {
    var state = this.getCurrentData();

    if (sourceInput instanceof EventSourceApi) {
      // not already present? don't want to add an old snapshot
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: 'ADD_EVENT_SOURCES',
          sources: [sourceInput.internalEventSource]
        });
      }

      return sourceInput;
    }

    var eventSource = parseEventSource(sourceInput, state);

    if (eventSource) {
      // TODO: error otherwise?
      this.dispatch({
        type: 'ADD_EVENT_SOURCES',
        sources: [eventSource]
      });
      return new EventSourceApi(state, eventSource);
    }

    return null;
  };

  CalendarApi.prototype.removeAllEventSources = function () {
    this.dispatch({
      type: 'REMOVE_ALL_EVENT_SOURCES'
    });
  };

  CalendarApi.prototype.refetchEvents = function () {
    this.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      isRefetch: true
    });
  }; // Scroll
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.scrollToTime = function (timeInput) {
    var time = createDuration(timeInput);

    if (time) {
      this.trigger('_scrollRequest', {
        time: time
      });
    }
  };

  return CalendarApi;
}();

var EventApi =
/** @class */
function () {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  function EventApi(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */


  EventApi.prototype.setProp = function (name, val) {
    var _a, _b;

    if (name in EVENT_DATE_REFINERS) {
      console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.'); // TODO: make proper aliasing system?
    } else if (name === 'id') {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: {
          publicId: val
        } // hardcoded internal name

      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: (_a = {}, _a[name] = val, _a)
      });
    } else if (name in EVENT_UI_REFINERS) {
      var ui = EVENT_UI_REFINERS[name](val);

      if (name === 'color') {
        ui = {
          backgroundColor: val,
          borderColor: val
        };
      } else if (name === 'editable') {
        ui = {
          startEditable: val,
          durationEditable: val
        };
      } else {
        ui = (_b = {}, _b[name] = val, _b);
      }

      this.mutate({
        standardProps: {
          ui: ui
        }
      });
    } else {
      console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
    }
  };

  EventApi.prototype.setExtendedProp = function (name, val) {
    var _a;

    this.mutate({
      extendedProps: (_a = {}, _a[name] = val, _a)
    });
  };

  EventApi.prototype.setStart = function (startInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var start = dateEnv.createMarker(startInput);

    if (start && this._instance) {
      // TODO: warning if parsed bad
      var instanceRange = this._instance.range;
      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?

      if (options.maintainDuration) {
        this.mutate({
          datesDelta: startDelta
        });
      } else {
        this.mutate({
          startDelta: startDelta
        });
      }
    }
  };

  EventApi.prototype.setEnd = function (endInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var end;

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        return; // TODO: warning if parsed bad
      }
    }

    if (this._instance) {
      if (end) {
        var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({
          endDelta: endDelta
        });
      } else {
        this.mutate({
          standardProps: {
            hasEnd: false
          }
        });
      }
    }
  };

  EventApi.prototype.setDates = function (startInput, endInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var standardProps = {
      allDay: options.allDay
    };
    var start = dateEnv.createMarker(startInput);
    var end;

    if (!start) {
      return; // TODO: warning if parsed bad
    }

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        // TODO: warning if parsed bad
        return;
      }
    }

    if (this._instance) {
      var instanceRange = this._instance.range; // when computing the diff for an event being converted to all-day,
      // compute diff off of the all-day values the way event-mutation does.

      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }

      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);

      if (end) {
        var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);

        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({
            datesDelta: startDelta,
            standardProps: standardProps
          });
        } else {
          this.mutate({
            startDelta: startDelta,
            endDelta: endDelta,
            standardProps: standardProps
          });
        }
      } else {
        // means "clear the end"
        standardProps.hasEnd = false;
        this.mutate({
          datesDelta: startDelta,
          standardProps: standardProps
        });
      }
    }
  };

  EventApi.prototype.moveStart = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        startDelta: delta
      });
    }
  };

  EventApi.prototype.moveEnd = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        endDelta: delta
      });
    }
  };

  EventApi.prototype.moveDates = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        datesDelta: delta
      });
    }
  };

  EventApi.prototype.setAllDay = function (allDay, options) {
    if (options === void 0) {
      options = {};
    }

    var standardProps = {
      allDay: allDay
    };
    var maintainDuration = options.maintainDuration;

    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }

    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }

    this.mutate({
      standardProps: standardProps
    });
  };

  EventApi.prototype.formatRange = function (formatInput) {
    var dateEnv = this._context.dateEnv;
    var instance = this._instance;
    var formatter = createFormatter(formatInput);

    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    }

    return dateEnv.format(instance.range.start, formatter, {
      forcedTzo: instance.forcedStartTzo
    });
  };

  EventApi.prototype.mutate = function (mutation) {
    var instance = this._instance;

    if (instance) {
      var def = this._def;
      var context_1 = this._context;
      var eventStore_1 = context_1.getCurrentData().eventStore;
      var relevantEvents = getRelevantEvents(eventStore_1, instance.instanceId);
      var eventConfigBase = {
        '': {
          display: '',
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: '',
          borderColor: '',
          textColor: '',
          classNames: []
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context_1);
      var oldEvent = new EventApi(context_1, def, instance); // snapshot

      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context_1.dispatch({
        type: 'MERGE_EVENTS',
        eventStore: relevantEvents
      });
      context_1.emitter.trigger('eventChange', {
        oldEvent: oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context_1, instance),
        revert: function () {
          context_1.dispatch({
            type: 'RESET_EVENTS',
            eventStore: eventStore_1
          });
        }
      });
    }
  };

  EventApi.prototype.remove = function () {
    var context = this._context;
    var asStore = eventApiToStore(this);
    context.dispatch({
      type: 'REMOVE_EVENTS',
      eventStore: asStore
    });
    context.emitter.trigger('eventRemove', {
      event: this,
      relatedEvents: [],
      revert: function () {
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: asStore
        });
      }
    });
  };

  Object.defineProperty(EventApi.prototype, "source", {
    get: function () {
      var sourceId = this._def.sourceId;

      if (sourceId) {
        return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
      }

      return null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "start", {
    get: function () {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "end", {
    get: function () {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "startStr", {
    get: function () {
      var instance = this._instance;

      if (instance) {
        return this._context.dateEnv.formatIso(instance.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedStartTzo
        });
      }

      return '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "endStr", {
    get: function () {
      var instance = this._instance;

      if (instance && this._def.hasEnd) {
        return this._context.dateEnv.formatIso(instance.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedEndTzo
        });
      }

      return '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "id", {
    // computable props that all access the def
    // TODO: find a TypeScript-compatible way to do this at scale
    get: function () {
      return this._def.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "groupId", {
    get: function () {
      return this._def.groupId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "allDay", {
    get: function () {
      return this._def.allDay;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "title", {
    get: function () {
      return this._def.title;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "url", {
    get: function () {
      return this._def.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "display", {
    get: function () {
      return this._def.ui.display || 'auto';
    } // bad. just normalize the type earlier
    ,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "startEditable", {
    get: function () {
      return this._def.ui.startEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "durationEditable", {
    get: function () {
      return this._def.ui.durationEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "constraint", {
    get: function () {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "overlap", {
    get: function () {
      return this._def.ui.overlap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "allow", {
    get: function () {
      return this._def.ui.allows[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "backgroundColor", {
    get: function () {
      return this._def.ui.backgroundColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "borderColor", {
    get: function () {
      return this._def.ui.borderColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "textColor", {
    get: function () {
      return this._def.ui.textColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "classNames", {
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
    get: function () {
      return this._def.ui.classNames;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "extendedProps", {
    get: function () {
      return this._def.extendedProps;
    },
    enumerable: false,
    configurable: true
  });

  EventApi.prototype.toPlainObject = function (settings) {
    if (settings === void 0) {
      settings = {};
    }

    var def = this._def;
    var ui = def.ui;

    var _a = this,
        startStr = _a.startStr,
        endStr = _a.endStr;

    var res = {};

    if (def.title) {
      res.title = def.title;
    }

    if (startStr) {
      res.start = startStr;
    }

    if (endStr) {
      res.end = endStr;
    }

    if (def.publicId) {
      res.id = def.publicId;
    }

    if (def.groupId) {
      res.groupId = def.groupId;
    }

    if (def.url) {
      res.url = def.url;
    }

    if (ui.display && ui.display !== 'auto') {
      res.display = ui.display;
    } // TODO: what about recurring-event properties???
    // TODO: include startEditable/durationEditable/constraint/overlap/allow


    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }

      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }

    if (ui.textColor) {
      res.textColor = ui.textColor;
    }

    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }

    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        tslib.__assign(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }

    return res;
  };

  EventApi.prototype.toJSON = function () {
    return this.toPlainObject();
  };

  return EventApi;
}();

function eventApiToStore(eventApi) {
  var _a, _b;

  var def = eventApi._def;
  var instance = eventApi._instance;
  return {
    defs: (_a = {}, _a[def.defId] = def, _a),
    instances: instance ? (_b = {}, _b[instance.instanceId] = instance, _b) : {}
  };
}

function buildEventApis(eventStore, context, excludeInstance) {
  var defs = eventStore.defs,
      instances = eventStore.instances;
  var eventApis = [];
  var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';

  for (var id in instances) {
    var instance = instances[id];
    var def = defs[instance.defId];

    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventApi(context, def, instance));
    }
  }

  return eventApis;
}

var calendarSystemClassMap = {};

function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}

function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}

var GregorianCalendarSystem =
/** @class */
function () {
  function GregorianCalendarSystem() {}

  GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
    return d.getUTCFullYear();
  };

  GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
    return d.getUTCMonth();
  };

  GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
    return d.getUTCDate();
  };

  GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
    return arrayToUtcDate(arr);
  };

  GregorianCalendarSystem.prototype.markerToArray = function (marker) {
    return dateToUtcArray(marker);
  };

  return GregorianCalendarSystem;
}();

registerCalendarSystem('gregory', GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

function parse(str) {
  var m = ISO_RE.exec(str);

  if (m) {
    var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number("0." + m[12]) * 1000 : 0));

    if (isValidDate(marker)) {
      var timeZoneOffset = null;

      if (m[13]) {
        timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
      }

      return {
        marker: marker,
        isTimeUnspecified: !m[6],
        timeZoneOffset: timeZoneOffset
      };
    }
  }

  return null;
}

var DateEnv =
/** @class */
function () {
  function DateEnv(settings) {
    var timeZone = this.timeZone = settings.timeZone;
    var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';

    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }

    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;

    if (settings.weekNumberCalculation === 'ISO') {
      this.weekDow = 1;
      this.weekDoy = 4;
    }

    if (typeof settings.firstDay === 'number') {
      this.weekDow = settings.firstDay;
    }

    if (typeof settings.weekNumberCalculation === 'function') {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }

    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  } // Creating / Parsing


  DateEnv.prototype.createMarker = function (input) {
    var meta = this.createMarkerMeta(input);

    if (meta === null) {
      return null;
    }

    return meta.marker;
  };

  DateEnv.prototype.createNowMarker = function () {
    if (this.canComputeOffset) {
      return this.timestampToMarker(new Date().valueOf());
    } // if we can't compute the current date val for a timezone,
    // better to give the current local date vals than UTC


    return arrayToUtcDate(dateToLocalArray(new Date()));
  };

  DateEnv.prototype.createMarkerMeta = function (input) {
    if (typeof input === 'string') {
      return this.parse(input);
    }

    var marker = null;

    if (typeof input === 'number') {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();

      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }

    if (marker === null || !isValidDate(marker)) {
      return null;
    }

    return {
      marker: marker,
      isTimeUnspecified: false,
      forcedTzo: null
    };
  };

  DateEnv.prototype.parse = function (s) {
    var parts = parse(s);

    if (parts === null) {
      return null;
    }

    var marker = parts.marker;
    var forcedTzo = null;

    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }

    return {
      marker: marker,
      isTimeUnspecified: parts.isTimeUnspecified,
      forcedTzo: forcedTzo
    };
  }; // Accessors


  DateEnv.prototype.getYear = function (marker) {
    return this.calendarSystem.getMarkerYear(marker);
  };

  DateEnv.prototype.getMonth = function (marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  }; // Adding / Subtracting


  DateEnv.prototype.add = function (marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += dur.years;
    a[1] += dur.months;
    a[2] += dur.days;
    a[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.subtract = function (marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] -= dur.years;
    a[1] -= dur.months;
    a[2] -= dur.days;
    a[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.addYears = function (marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += n;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.addMonths = function (marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[1] += n;
    return this.calendarSystem.arrayToMarker(a);
  }; // Diffing Whole Units


  DateEnv.prototype.diffWholeYears = function (m0, m1) {
    var calendarSystem = this.calendarSystem;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }

    return null;
  };

  DateEnv.prototype.diffWholeMonths = function (m0, m1) {
    var calendarSystem = this.calendarSystem;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }

    return null;
  }; // Range / Duration


  DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
    var n = this.diffWholeYears(m0, m1);

    if (n !== null) {
      return {
        unit: 'year',
        value: n
      };
    }

    n = this.diffWholeMonths(m0, m1);

    if (n !== null) {
      return {
        unit: 'month',
        value: n
      };
    }

    n = diffWholeWeeks(m0, m1);

    if (n !== null) {
      return {
        unit: 'week',
        value: n
      };
    }

    n = diffWholeDays(m0, m1);

    if (n !== null) {
      return {
        unit: 'day',
        value: n
      };
    }

    n = diffHours(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'hour',
        value: n
      };
    }

    n = diffMinutes(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'minute',
        value: n
      };
    }

    n = diffSeconds(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'second',
        value: n
      };
    }

    return {
      unit: 'millisecond',
      value: m1.valueOf() - m0.valueOf()
    };
  };

  DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
    // TODO: can use greatestWholeUnit
    var diff;

    if (d.years) {
      diff = this.diffWholeYears(m0, m1);

      if (diff !== null) {
        return diff / asRoughYears(d);
      }
    }

    if (d.months) {
      diff = this.diffWholeMonths(m0, m1);

      if (diff !== null) {
        return diff / asRoughMonths(d);
      }
    }

    if (d.days) {
      diff = diffWholeDays(m0, m1);

      if (diff !== null) {
        return diff / asRoughDays(d);
      }
    }

    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
  }; // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates


  DateEnv.prototype.startOf = function (m, unit) {
    if (unit === 'year') {
      return this.startOfYear(m);
    }

    if (unit === 'month') {
      return this.startOfMonth(m);
    }

    if (unit === 'week') {
      return this.startOfWeek(m);
    }

    if (unit === 'day') {
      return startOfDay(m);
    }

    if (unit === 'hour') {
      return startOfHour(m);
    }

    if (unit === 'minute') {
      return startOfMinute(m);
    }

    if (unit === 'second') {
      return startOfSecond(m);
    }

    return null;
  };

  DateEnv.prototype.startOfYear = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m)]);
  };

  DateEnv.prototype.startOfMonth = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m)]);
  };

  DateEnv.prototype.startOfWeek = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m), m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7]);
  }; // Week Number


  DateEnv.prototype.computeWeekNumber = function (marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }

    return weekOfYear(marker, this.weekDow, this.weekDoy);
  }; // TODO: choke on timeZoneName: long


  DateEnv.prototype.format = function (marker, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }

    return formatter.format({
      marker: marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  };

  DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }

    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }

    return formatter.formatRange({
      marker: start,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  };
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */


  DateEnv.prototype.formatIso = function (marker, extraOptions) {
    if (extraOptions === void 0) {
      extraOptions = {};
    }

    var timeZoneOffset = null;

    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }

    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  }; // TimeZone


  DateEnv.prototype.timestampToMarker = function (ms) {
    if (this.timeZone === 'local') {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }

    if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
      return new Date(ms);
    }

    return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
  };

  DateEnv.prototype.offsetForMarker = function (m) {
    if (this.timeZone === 'local') {
      return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
    }

    if (this.timeZone === 'UTC') {
      return 0;
    }

    if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
    }

    return null;
  }; // Conversion


  DateEnv.prototype.toDate = function (m, forcedTzo) {
    if (this.timeZone === 'local') {
      return arrayToLocalDate(dateToUtcArray(m));
    }

    if (this.timeZone === 'UTC') {
      return new Date(m.valueOf()); // make sure it's a copy
    }

    if (!this.namedTimeZoneImpl) {
      return new Date(m.valueOf() - (forcedTzo || 0));
    }

    return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
  };

  return DateEnv;
}();

var globalLocales = [];
var RAW_EN_LOCALE = {
  code: 'en',
  week: {
    dow: 0,
    doy: 4 // 4 days need to be within the year to be considered the first week

  },
  direction: 'ltr',
  buttonText: {
    prev: 'prev',
    next: 'next',
    prevYear: 'prev year',
    nextYear: 'next year',
    year: 'year',
    today: 'today',
    month: 'month',
    week: 'week',
    day: 'day',
    list: 'list'
  },
  weekText: 'W',
  allDayText: 'all-day',
  moreLinkText: 'more',
  noEventsText: 'No events to display'
};

function organizeRawLocales(explicitRawLocales) {
  var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
  var allRawLocales = globalLocales.concat(explicitRawLocales);
  var rawLocaleMap = {
    en: RAW_EN_LOCALE // necessary?

  };

  for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
    var rawLocale = allRawLocales_1[_i];
    rawLocaleMap[rawLocale.code] = rawLocale;
  }

  return {
    map: rawLocaleMap,
    defaultCode: defaultCode
  };
}

function buildLocale(inputSingular, available) {
  if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }

  return queryLocale(inputSingular, available);
}

function queryLocale(codeArg, available) {
  var codes = [].concat(codeArg || []); // will convert to array

  var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}

function queryRawLocale(codes, available) {
  for (var i = 0; i < codes.length; i += 1) {
    var parts = codes[i].toLocaleLowerCase().split('-');

    for (var j = parts.length; j > 0; j -= 1) {
      var simpleId = parts.slice(0, j).join('-');

      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }

  return null;
}

function parseLocale(codeArg, codes, raw) {
  var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
  delete merged.code; // don't want this part of the options

  var week = merged.week;
  delete merged.week;
  return {
    codeArg: codeArg,
    codes: codes,
    week: week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}

function formatDate(dateInput, options) {
  if (options === void 0) {
    options = {};
  }

  var dateEnv = buildDateEnv$1(options);
  var formatter = createFormatter(options);
  var dateMeta = dateEnv.createMarkerMeta(dateInput);

  if (!dateMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.format(dateMeta.marker, formatter, {
    forcedTzo: dateMeta.forcedTzo
  });
}

function formatRange(startInput, endInput, options) {
  var dateEnv = buildDateEnv$1(typeof options === 'object' && options ? options : {}); // pass in if non-null object

  var formatter = createFormatter(options);
  var startMeta = dateEnv.createMarkerMeta(startInput);
  var endMeta = dateEnv.createMarkerMeta(endInput);

  if (!startMeta || !endMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
    forcedStartTzo: startMeta.forcedTzo,
    forcedEndTzo: endMeta.forcedTzo,
    isEndExclusive: options.isEndExclusive,
    defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator
  });
} // TODO: more DRY and optimized


function buildDateEnv$1(settings) {
  var locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere

  return new DateEnv(tslib.__assign(tslib.__assign({
    timeZone: BASE_OPTION_DEFAULTS.timeZone,
    calendarSystem: 'gregory'
  }, settings), {
    locale: locale
  }));
}

var DEF_DEFAULTS = {
  startTime: '09:00',
  endTime: '17:00',
  daysOfWeek: [1, 2, 3, 4, 5],
  display: 'inverse-background',
  classNames: 'fc-non-business',
  groupId: '_businessHours' // so multiple defs get grouped

};
/*
TODO: pass around as EventDefHash!!!
*/

function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}

function refineInputs(input) {
  var rawDefs;

  if (input === true) {
    rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
  } else if (Array.isArray(input)) {
    // if specifying an array, every sub-definition NEEDS a day-of-week
    rawDefs = input.filter(function (rawDef) {
      return rawDef.daysOfWeek;
    });
  } else if (typeof input === 'object' && input) {
    // non-null object
    rawDefs = [input];
  } else {
    // is probably false
    rawDefs = [];
  }

  rawDefs = rawDefs.map(function (rawDef) {
    return tslib.__assign(tslib.__assign({}, DEF_DEFAULTS), rawDef);
  });
  return rawDefs;
}

function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
} // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false


function intersectRects(rect1, rect2) {
  var res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };

  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }

  return false;
}

function translateRect(rect, deltaX, deltaY) {
  return {
    left: rect.left + deltaX,
    right: rect.right + deltaX,
    top: rect.top + deltaY,
    bottom: rect.bottom + deltaY
  };
} // Returns a new point that will have been moved to reside within the given rectangle


function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
} // Returns a point that is the center of the given rectangle


function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
} // Subtracts point2's coordinates from point1's coordinates, returning a delta


function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}

var canVGrowWithinCell;

function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }

  return canVGrowWithinCell;
}

function computeCanVGrowWithinCell() {
  // for SSR, because this function is call immediately at top-level
  // TODO: just make this logic execute top-level, immediately, instead of doing lazily
  if (typeof document === 'undefined') {
    return true;
  }

  var el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.left = '0px';
  el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
  el.querySelector('table').style.height = '100px';
  el.querySelector('div').style.height = '100%';
  document.body.appendChild(el);
  var div = el.querySelector('div');
  var possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}

var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere

var Splitter =
/** @class */
function () {
  function Splitter() {
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {}; // TODO: typescript protection
  }

  Splitter.prototype.splitProps = function (props) {
    var _this = this;

    var keyInfos = this.getKeyInfo(props);
    var defKeys = this.getKeysForEventDefs(props.eventStore);
    var dateSelections = this.splitDateSelection(props.dateSelection);
    var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*

    var eventStores = this.splitEventStore(props.eventStore, defKeys);
    var eventDrags = this.splitEventDrag(props.eventDrag);
    var eventResizes = this.splitEventResize(props.eventResize);
    var splitProps = {};
    this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
      return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
    });

    for (var key in keyInfos) {
      var keyInfo = keyInfos[key];
      var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
      var buildEventUi = this.eventUiBuilders[key];
      splitProps[key] = {
        businessHours: keyInfo.businessHours || props.businessHours,
        dateSelection: dateSelections[key] || null,
        eventStore: eventStore,
        eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
        eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
        eventDrag: eventDrags[key] || null,
        eventResize: eventResizes[key] || null
      };
    }

    return splitProps;
  };

  Splitter.prototype._splitDateSpan = function (dateSpan) {
    var dateSpans = {};

    if (dateSpan) {
      var keys = this.getKeysForDateSpan(dateSpan);

      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        dateSpans[key] = dateSpan;
      }
    }

    return dateSpans;
  };

  Splitter.prototype._getKeysForEventDefs = function (eventStore) {
    var _this = this;

    return mapHash(eventStore.defs, function (eventDef) {
      return _this.getKeysForEventDef(eventDef);
    });
  };

  Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
    var defs = eventStore.defs,
        instances = eventStore.instances;
    var splitStores = {};

    for (var defId in defs) {
      for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
        var key = _a[_i];

        if (!splitStores[key]) {
          splitStores[key] = createEmptyEventStore();
        }

        splitStores[key].defs[defId] = defs[defId];
      }
    }

    for (var instanceId in instances) {
      var instance = instances[instanceId];

      for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
        var key = _c[_b];

        if (splitStores[key]) {
          // must have already been created
          splitStores[key].instances[instanceId] = instance;
        }
      }
    }

    return splitStores;
  };

  Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
    var splitHashes = {};

    for (var defId in eventUiBases) {
      if (defId) {
        // not the '' key
        for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
          var key = _a[_i];

          if (!splitHashes[key]) {
            splitHashes[key] = {};
          }

          splitHashes[key][defId] = eventUiBases[defId];
        }
      }
    }

    return splitHashes;
  };

  Splitter.prototype._splitInteraction = function (interaction) {
    var splitStates = {};

    if (interaction) {
      var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents)); // can't rely on defKeys because event data is mutated


      var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);

      var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);

      var populate = function (key) {
        if (!splitStates[key]) {
          splitStates[key] = {
            affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
            mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
            isEvent: interaction.isEvent
          };
        }
      };

      for (var key in affectedStores_1) {
        populate(key);
      }

      for (var key in mutatedStores_1) {
        populate(key);
      }
    }

    return splitStates;
  };

  return Splitter;
}();

function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  var baseParts = [];

  if (allUi) {
    baseParts.push(allUi);
  }

  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }

  var stuff = {
    '': combineEventUis(baseParts)
  };

  if (individualUi) {
    tslib.__assign(stuff, individualUi);
  }

  return stuff;
}

function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}

function getDayClassNames(meta, theme) {
  var classNames = ['fc-day', "fc-day-" + DAY_IDS[meta.dow]];

  if (meta.isDisabled) {
    classNames.push('fc-day-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-day-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-day-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-day-future');
    }

    if (meta.isOther) {
      classNames.push('fc-day-other');
    }
  }

  return classNames;
}

function getSlotClassNames(meta, theme) {
  var classNames = ['fc-slot', "fc-slot-" + DAY_IDS[meta.dow]];

  if (meta.isDisabled) {
    classNames.push('fc-slot-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-slot-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-slot-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-slot-future');
    }
  }

  return classNames;
}

function buildNavLinkData(date, type) {
  if (type === void 0) {
    type = 'day';
  }

  return JSON.stringify({
    date: formatDayString(date),
    type: type
  });
}

var _isRtlScrollbarOnLeft = null;

function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }

  return _isRtlScrollbarOnLeft;
}

function computeIsRtlScrollbarOnLeft() {
  var outerEl = document.createElement('div');
  applyStyle(outerEl, {
    position: 'absolute',
    top: -1000,
    left: 0,
    border: 0,
    padding: 0,
    overflow: 'scroll',
    direction: 'rtl'
  });
  outerEl.innerHTML = '<div></div>';
  document.body.appendChild(outerEl);
  var innerEl = outerEl.firstChild;
  var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}

var _scrollbarWidths;

function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }

  return _scrollbarWidths;
}

function computeScrollbarWidths() {
  var el = document.createElement('div');
  el.style.overflow = 'scroll';
  el.style.position = 'absolute';
  el.style.top = '-9999px';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  var res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
} // WARNING: will include border


function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}

function computeEdges(el, getPadding) {
  if (getPadding === void 0) {
    getPadding = false;
  }

  var computedStyle = window.getComputedStyle(el);
  var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  var badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!

  var scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  var scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  var res = {
    borderLeft: borderLeft,
    borderRight: borderRight,
    borderTop: borderTop,
    borderBottom: borderBottom,
    scrollbarBottom: scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };

  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') {
    // is the scrollbar on the left side?
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }

  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }

  return res;
}

function computeInnerRect(el, goWithinPadding, doFromWindowViewport) {
  if (goWithinPadding === void 0) {
    goWithinPadding = false;
  }

  var outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  var edges = computeEdges(el, goWithinPadding);
  var res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };

  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }

  return res;
}

function computeRect(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset
  };
}

function computeClippedClientRect(el) {
  var clippingParents = getClippingParents(el);
  var rect = el.getBoundingClientRect();

  for (var _i = 0, clippingParents_1 = clippingParents; _i < clippingParents_1.length; _i++) {
    var clippingParent = clippingParents_1[_i];
    var intersection = intersectRects(rect, clippingParent.getBoundingClientRect());

    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }

  return rect;
}

function computeHeightAndMargins(el) {
  return el.getBoundingClientRect().height + computeVMargins(el);
}

function computeVMargins(el) {
  var computed = window.getComputedStyle(el);
  return parseInt(computed.marginTop, 10) + parseInt(computed.marginBottom, 10);
} // does not return window


function getClippingParents(el) {
  var parents = [];

  while (el instanceof HTMLElement) {
    // will stop when gets to document or null
    var computedStyle = window.getComputedStyle(el);

    if (computedStyle.position === 'fixed') {
      break;
    }

    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }

    el = el.parentNode;
  }

  return parents;
} // given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.


function unpromisify(func, success, failure) {
  // guard against success/failure callbacks being called more than once
  // and guard against a promise AND callback being used together.
  var isResolved = false;

  var wrappedSuccess = function () {
    if (!isResolved) {
      isResolved = true;
      success.apply(this, arguments); // eslint-disable-line prefer-rest-params
    }
  };

  var wrappedFailure = function () {
    if (!isResolved) {
      isResolved = true;

      if (failure) {
        failure.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }
    }
  };

  var res = func(wrappedSuccess, wrappedFailure);

  if (res && typeof res.then === 'function') {
    res.then(wrappedSuccess, wrappedFailure);
  }
}

var Emitter =
/** @class */
function () {
  function Emitter() {
    this.handlers = {};
    this.thisContext = null;
  }

  Emitter.prototype.setThisContext = function (thisContext) {
    this.thisContext = thisContext;
  };

  Emitter.prototype.setOptions = function (options) {
    this.options = options;
  };

  Emitter.prototype.on = function (type, handler) {
    addToHash(this.handlers, type, handler);
  };

  Emitter.prototype.off = function (type, handler) {
    removeFromHash(this.handlers, type, handler);
  };

  Emitter.prototype.trigger = function (type) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var attachedHandlers = this.handlers[type] || [];
    var optionHandler = this.options && this.options[type];
    var handlers = [].concat(optionHandler || [], attachedHandlers);

    for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
      var handler = handlers_1[_a];
      handler.apply(this.thisContext, args);
    }
  };

  Emitter.prototype.hasHandlers = function (type) {
    return this.handlers[type] && this.handlers[type].length || this.options && this.options[type];
  };

  return Emitter;
}();

function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}

function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(function (func) {
        return func !== handler;
      });
    }
  } else {
    delete hash[type]; // remove all handler funcs for this type
  }
}
/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/


var PositionCache =
/** @class */
function () {
  function PositionCache(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    var originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left

    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }

    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  } // Populates the left/right internal coordinate arrays


  PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
    var lefts = [];
    var rights = [];

    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }

    this.lefts = lefts;
    this.rights = rights;
  }; // Populates the top/bottom internal coordinate arrays


  PositionCache.prototype.buildElVerticals = function (originClientTop) {
    var tops = [];
    var bottoms = [];

    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }

    this.tops = tops;
    this.bottoms = bottoms;
  }; // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.


  PositionCache.prototype.leftToIndex = function (leftPosition) {
    var _a = this,
        lefts = _a.lefts,
        rights = _a.rights;

    var len = lefts.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
        return i;
      }
    }

    return undefined; // TODO: better
  }; // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.


  PositionCache.prototype.topToIndex = function (topPosition) {
    var _a = this,
        tops = _a.tops,
        bottoms = _a.bottoms;

    var len = tops.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (topPosition >= tops[i] && topPosition < bottoms[i]) {
        return i;
      }
    }

    return undefined; // TODO: better
  }; // Gets the width of the element at the given index


  PositionCache.prototype.getWidth = function (leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  }; // Gets the height of the element at the given index


  PositionCache.prototype.getHeight = function (topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  };

  return PositionCache;
}();
/* eslint max-classes-per-file: "off" */

/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/


var ScrollController =
/** @class */
function () {
  function ScrollController() {}

  ScrollController.prototype.getMaxScrollTop = function () {
    return this.getScrollHeight() - this.getClientHeight();
  };

  ScrollController.prototype.getMaxScrollLeft = function () {
    return this.getScrollWidth() - this.getClientWidth();
  };

  ScrollController.prototype.canScrollVertically = function () {
    return this.getMaxScrollTop() > 0;
  };

  ScrollController.prototype.canScrollHorizontally = function () {
    return this.getMaxScrollLeft() > 0;
  };

  ScrollController.prototype.canScrollUp = function () {
    return this.getScrollTop() > 0;
  };

  ScrollController.prototype.canScrollDown = function () {
    return this.getScrollTop() < this.getMaxScrollTop();
  };

  ScrollController.prototype.canScrollLeft = function () {
    return this.getScrollLeft() > 0;
  };

  ScrollController.prototype.canScrollRight = function () {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  };

  return ScrollController;
}();

var ElementScrollController =
/** @class */
function (_super) {
  tslib.__extends(ElementScrollController, _super);

  function ElementScrollController(el) {
    var _this = _super.call(this) || this;

    _this.el = el;
    return _this;
  }

  ElementScrollController.prototype.getScrollTop = function () {
    return this.el.scrollTop;
  };

  ElementScrollController.prototype.getScrollLeft = function () {
    return this.el.scrollLeft;
  };

  ElementScrollController.prototype.setScrollTop = function (top) {
    this.el.scrollTop = top;
  };

  ElementScrollController.prototype.setScrollLeft = function (left) {
    this.el.scrollLeft = left;
  };

  ElementScrollController.prototype.getScrollWidth = function () {
    return this.el.scrollWidth;
  };

  ElementScrollController.prototype.getScrollHeight = function () {
    return this.el.scrollHeight;
  };

  ElementScrollController.prototype.getClientHeight = function () {
    return this.el.clientHeight;
  };

  ElementScrollController.prototype.getClientWidth = function () {
    return this.el.clientWidth;
  };

  return ElementScrollController;
}(ScrollController);

var WindowScrollController =
/** @class */
function (_super) {
  tslib.__extends(WindowScrollController, _super);

  function WindowScrollController() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  WindowScrollController.prototype.getScrollTop = function () {
    return window.pageYOffset;
  };

  WindowScrollController.prototype.getScrollLeft = function () {
    return window.pageXOffset;
  };

  WindowScrollController.prototype.setScrollTop = function (n) {
    window.scroll(window.pageXOffset, n);
  };

  WindowScrollController.prototype.setScrollLeft = function (n) {
    window.scroll(n, window.pageYOffset);
  };

  WindowScrollController.prototype.getScrollWidth = function () {
    return document.documentElement.scrollWidth;
  };

  WindowScrollController.prototype.getScrollHeight = function () {
    return document.documentElement.scrollHeight;
  };

  WindowScrollController.prototype.getClientHeight = function () {
    return document.documentElement.clientHeight;
  };

  WindowScrollController.prototype.getClientWidth = function () {
    return document.documentElement.clientWidth;
  };

  return WindowScrollController;
}(ScrollController);

var Theme =
/** @class */
function () {
  function Theme(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }

  Theme.prototype.setIconOverride = function (iconOverrideHash) {
    var iconClassesCopy;
    var buttonName;

    if (typeof iconOverrideHash === 'object' && iconOverrideHash) {
      // non-null object
      iconClassesCopy = tslib.__assign({}, this.iconClasses);

      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }

      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  };

  Theme.prototype.applyIconOverridePrefix = function (className) {
    var prefix = this.iconOverridePrefix;

    if (prefix && className.indexOf(prefix) !== 0) {
      // if not already present
      className = prefix + className;
    }

    return className;
  };

  Theme.prototype.getClass = function (key) {
    return this.classes[key] || '';
  };

  Theme.prototype.getIconClass = function (buttonName, isRtl) {
    var className;

    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }

    if (className) {
      return this.baseIconClass + " " + className;
    }

    return '';
  };

  Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
    var className;

    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];

      if (className) {
        return this.baseIconClass + " " + this.applyIconOverridePrefix(className);
      }
    }

    return '';
  };

  return Theme;
}();

Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

var ScrollResponder =
/** @class */
function () {
  function ScrollResponder(execFunc, emitter, scrollTime, scrollTimeReset) {
    var _this = this;

    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;

    this.handleScrollRequest = function (request) {
      _this.queuedRequest = tslib.__assign({}, _this.queuedRequest || {}, request);

      _this.drain();
    };

    emitter.on('_scrollRequest', this.handleScrollRequest);
    this.fireInitialScroll();
  }

  ScrollResponder.prototype.detach = function () {
    this.emitter.off('_scrollRequest', this.handleScrollRequest);
  };

  ScrollResponder.prototype.update = function (isDatesNew) {
    if (isDatesNew && this.scrollTimeReset) {
      this.fireInitialScroll(); // will drain
    } else {
      this.drain();
    }
  };

  ScrollResponder.prototype.fireInitialScroll = function () {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  };

  ScrollResponder.prototype.drain = function () {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  };

  return ScrollResponder;
}();

var ViewContextType = vdom_cjs.createContext({}); // for Components

function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv: dateEnv,
    options: viewOptions,
    pluginHooks: pluginHooks,
    emitter: emitter,
    dispatch: dispatch,
    getCurrentData: getCurrentData,
    calendarApi: calendarApi,
    viewSpec: viewSpec,
    viewApi: viewApi,
    dateProfileGenerator: dateProfileGenerator,
    theme: theme,
    isRtl: viewOptions.direction === 'rtl',
    addResizeHandler: function (handler) {
      emitter.on('_resize', handler);
    },
    removeResizeHandler: function (handler) {
      emitter.off('_resize', handler);
    },
    createScrollResponder: function (execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },
    registerInteractiveComponent: registerInteractiveComponent,
    unregisterInteractiveComponent: unregisterInteractiveComponent
  };
}
/* eslint max-classes-per-file: off */


var PureComponent =
/** @class */
function (_super) {
  tslib.__extends(PureComponent, _super);

  function PureComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PureComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
    }

    return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
  };

  PureComponent.addPropsEquality = addPropsEquality;
  PureComponent.addStateEquality = addStateEquality;
  PureComponent.contextType = ViewContextType;
  return PureComponent;
}(vdom_cjs.Component);

PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};

var BaseComponent =
/** @class */
function (_super) {
  tslib.__extends(BaseComponent, _super);

  function BaseComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BaseComponent.contextType = ViewContextType;
  return BaseComponent;
}(PureComponent);

function addPropsEquality(propEquality) {
  var hash = Object.create(this.prototype.propEquality);

  tslib.__assign(hash, propEquality);

  this.prototype.propEquality = hash;
}

function addStateEquality(stateEquality) {
  var hash = Object.create(this.prototype.stateEquality);

  tslib.__assign(hash, stateEquality);

  this.prototype.stateEquality = hash;
} // use other one


function setRef(ref, current) {
  if (typeof ref === 'function') {
    ref(current);
  } else if (ref) {
    // see https://github.com/facebook/react/issues/13029
    ref.current = current;
  }
}
/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/


var DateComponent =
/** @class */
function (_super) {
  tslib.__extends(DateComponent, _super);

  function DateComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.uid = guid();
    return _this;
  } // Hit System
  // -----------------------------------------------------------------------------------------------------------------


  DateComponent.prototype.prepareHits = function () {};

  DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
    return null; // this should be abstract
  }; // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------


  DateComponent.prototype.isValidSegDownEl = function (el) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !elementClosest(el, '.fc-event-mirror');
  };

  DateComponent.prototype.isValidDateDownEl = function (el) {
    return !elementClosest(el, '.fc-event:not(.fc-bg-event)') && !elementClosest(el, '.fc-more-link') && // a "more.." link
    !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
    !elementClosest(el, '.fc-popover'); // hack
  };

  return DateComponent;
}(BaseComponent); // TODO: easier way to add new hooks? need to update a million things


function createPlugin(input) {
  return {
    id: guid(),
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || '',
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    contentTypeHandlers: input.contentTypeHandlers || {},
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}

function buildPluginHooks(pluginDefs, globalDefs) {
  var isAdded = {};
  var hooks = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: '',
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };

  function addDefs(defs) {
    for (var _i = 0, defs_1 = defs; _i < defs_1.length; _i++) {
      var def = defs_1[_i];

      if (!isAdded[def.id]) {
        isAdded[def.id] = true;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      }
    }
  }

  if (pluginDefs) {
    addDefs(pluginDefs);
  }

  addDefs(globalDefs);
  return hooks;
}

function buildBuildPluginHooks() {
  var currentOverrideDefs = [];
  var currentGlobalDefs = [];
  var currentHooks;
  return function (overrideDefs, globalDefs) {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }

    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}

function combineHooks(hooks0, hooks1) {
  return {
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: tslib.__assign(tslib.__assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: tslib.__assign(tslib.__assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: tslib.__assign(tslib.__assign({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: tslib.__assign(tslib.__assign({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: tslib.__assign(tslib.__assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    contentTypeHandlers: tslib.__assign(tslib.__assign({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
    listenerRefiners: tslib.__assign(tslib.__assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: tslib.__assign(tslib.__assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: tslib.__assign(tslib.__assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}

var StandardTheme =
/** @class */
function (_super) {
  tslib.__extends(StandardTheme, _super);

  function StandardTheme() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return StandardTheme;
}(Theme);

StandardTheme.prototype.classes = {
  root: 'fc-theme-standard',
  tableCellShaded: 'fc-cell-shaded',
  buttonGroup: 'fc-button-group',
  button: 'fc-button fc-button-primary',
  buttonActive: 'fc-button-active'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
  close: 'fc-icon-x',
  prev: 'fc-icon-chevron-left',
  next: 'fc-icon-chevron-right',
  prevYear: 'fc-icon-chevrons-left',
  nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.rtlIconClasses = {
  prev: 'fc-icon-chevron-right',
  next: 'fc-icon-chevron-left',
  prevYear: 'fc-icon-chevrons-right',
  nextYear: 'fc-icon-chevrons-left'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly

StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

function compileViewDefs(defaultConfigs, overrideConfigs) {
  var hash = {};
  var viewType;

  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  return hash;
}

function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }

  var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);

  if (viewDef) {
    hash[viewType] = viewDef;
  }

  return viewDef;
}

function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  var defaultConfig = defaultConfigs[viewType];
  var overrideConfig = overrideConfigs[viewType];

  var queryProp = function (name) {
    return defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  };

  var theComponent = queryProp('component');
  var superType = queryProp('superType');
  var superDef = null;

  if (superType) {
    if (superType === viewType) {
      throw new Error('Can\'t have a custom view type that references itself');
    }

    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }

  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }

  if (!theComponent) {
    return null; // don't throw a warning, might be settings for a single-unit view
  }

  return {
    type: viewType,
    component: theComponent,
    defaults: tslib.__assign(tslib.__assign({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: tslib.__assign(tslib.__assign({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
/* eslint max-classes-per-file: off */
// NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???


var RenderHook =
/** @class */
function (_super) {
  tslib.__extends(RenderHook, _super);

  function RenderHook() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.rootElRef = vdom_cjs.createRef();

    _this.handleRootEl = function (el) {
      setRef(_this.rootElRef, el);

      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    };

    return _this;
  }

  RenderHook.prototype.render = function () {
    var _this = this;

    var props = this.props;
    var hookProps = props.hookProps;
    return vdom_cjs.createElement(MountHook, {
      hookProps: hookProps,
      didMount: props.didMount,
      willUnmount: props.willUnmount,
      elRef: this.handleRootEl
    }, function (rootElRef) {
      return vdom_cjs.createElement(ContentHook, {
        hookProps: hookProps,
        content: props.content,
        defaultContent: props.defaultContent,
        backupElRef: _this.rootElRef
      }, function (innerElRef, innerContent) {
        return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent);
      });
    });
  };

  return RenderHook;
}(BaseComponent); // TODO: rename to be about function, not default. use in above type
// for forcing rerender of components that use the ContentHook


var CustomContentRenderContext = vdom_cjs.createContext(0);

function ContentHook(props) {
  return vdom_cjs.createElement(CustomContentRenderContext.Consumer, null, function (renderId) {
    return vdom_cjs.createElement(ContentHookInner, tslib.__assign({
      renderId: renderId
    }, props));
  });
}

var ContentHookInner =
/** @class */
function (_super) {
  tslib.__extends(ContentHookInner, _super);

  function ContentHookInner() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.innerElRef = vdom_cjs.createRef();
    return _this;
  }

  ContentHookInner.prototype.render = function () {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  };

  ContentHookInner.prototype.componentDidMount = function () {
    this.updateCustomContent();
  };

  ContentHookInner.prototype.componentDidUpdate = function () {
    this.updateCustomContent();
  };

  ContentHookInner.prototype.componentWillUnmount = function () {
    if (this.customContentInfo && this.customContentInfo.destroy) {
      this.customContentInfo.destroy();
    }
  };

  ContentHookInner.prototype.renderInnerContent = function () {
    var customContentInfo = this.customContentInfo; // only populated if using non-[p]react node(s)

    var innerContent = this.getInnerContent();
    var meta = this.getContentMeta(innerContent); // initial run, or content-type changing? (from vue -> react for example)

    if (!customContentInfo || customContentInfo.contentKey !== meta.contentKey) {
      // clearing old value
      if (customContentInfo) {
        if (customContentInfo.destroy) {
          customContentInfo.destroy();
        }

        customContentInfo = this.customContentInfo = null;
      } // assigning new value


      if (meta.contentKey) {
        customContentInfo = this.customContentInfo = tslib.__assign({
          contentKey: meta.contentKey,
          contentVal: innerContent[meta.contentKey]
        }, meta.buildLifecycleFuncs());
      } // updating

    } else if (customContentInfo) {
      customContentInfo.contentVal = innerContent[meta.contentKey];
    }

    return customContentInfo ? [] // signal that something was specified
    : innerContent; // assume a [p]react vdom node. use it
  };

  ContentHookInner.prototype.getInnerContent = function () {
    var props = this.props;
    var innerContent = normalizeContent(props.content, props.hookProps);

    if (innerContent === undefined) {
      // use the default
      innerContent = normalizeContent(props.defaultContent, props.hookProps);
    }

    return innerContent == null ? null : innerContent; // convert undefined to null (better for React)
  };

  ContentHookInner.prototype.getContentMeta = function (innerContent) {
    var contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;
    var contentKey = '';
    var buildLifecycleFuncs = null;

    if (innerContent) {
      // allowed to be null, for convenience to caller
      for (var searchKey in contentTypeHandlers) {
        if (innerContent[searchKey] !== undefined) {
          contentKey = searchKey;
          buildLifecycleFuncs = contentTypeHandlers[searchKey];
          break;
        }
      }
    }

    return {
      contentKey: contentKey,
      buildLifecycleFuncs: buildLifecycleFuncs
    };
  };

  ContentHookInner.prototype.updateCustomContent = function () {
    if (this.customContentInfo) {
      // for non-[p]react
      this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, // the element to render into
      this.customContentInfo.contentVal);
    }
  };

  return ContentHookInner;
}(BaseComponent);

var MountHook =
/** @class */
function (_super) {
  tslib.__extends(MountHook, _super);

  function MountHook() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;

      if (_this.props.elRef) {
        setRef(_this.props.elRef, rootEl);
      }
    };

    return _this;
  }

  MountHook.prototype.render = function () {
    return this.props.children(this.handleRootEl);
  };

  MountHook.prototype.componentDidMount = function () {
    var callback = this.props.didMount;

    if (callback) {
      callback(tslib.__assign(tslib.__assign({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }
  };

  MountHook.prototype.componentWillUnmount = function () {
    var callback = this.props.willUnmount;

    if (callback) {
      callback(tslib.__assign(tslib.__assign({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }
  };

  return MountHook;
}(BaseComponent);

function buildClassNameNormalizer() {
  var currentGenerator;
  var currentHookProps;
  var currentClassNames = [];
  return function (generator, hookProps) {
    if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
      currentGenerator = generator;
      currentHookProps = hookProps;
      currentClassNames = normalizeClassNames(generator, hookProps);
    }

    return currentClassNames;
  };
}

function normalizeClassNames(classNames, hookProps) {
  if (typeof classNames === 'function') {
    classNames = classNames(hookProps);
  }

  return parseClassNames(classNames);
}

function normalizeContent(input, hookProps) {
  if (typeof input === 'function') {
    return input(hookProps, vdom_cjs.createElement); // give the function the vdom-creation func
  }

  return input;
}

var ViewRoot =
/** @class */
function (_super) {
  tslib.__extends(ViewRoot, _super);

  function ViewRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }

  ViewRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = {
      view: context.viewApi
    };
    var customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
    return vdom_cjs.createElement(MountHook, {
      hookProps: hookProps,
      didMount: options.viewDidMount,
      willUnmount: options.viewWillUnmount,
      elRef: props.elRef
    }, function (rootElRef) {
      return props.children(rootElRef, ["fc-" + props.viewSpec.type + "-view", 'fc-view'].concat(customClassNames));
    });
  };

  return ViewRoot;
}(BaseComponent);

function parseViewConfigs(inputs) {
  return mapHash(inputs, parseViewConfig);
}

function parseViewConfig(input) {
  var rawOptions = typeof input === 'function' ? {
    component: input
  } : input;
  var component = rawOptions.component;

  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions); // TODO: remove content/classNames/didMount/etc from options?
  }

  return {
    superType: rawOptions.type,
    component: component,
    rawOptions: rawOptions
  };
}

function createViewHookComponent(options) {
  return function (viewProps) {
    return vdom_cjs.createElement(ViewContextType.Consumer, null, function (context) {
      return vdom_cjs.createElement(ViewRoot, {
        viewSpec: context.viewSpec
      }, function (viewElRef, viewClassNames) {
        var hookProps = tslib.__assign(tslib.__assign({}, viewProps), {
          nextDayThreshold: context.options.nextDayThreshold
        });

        return vdom_cjs.createElement(RenderHook, {
          hookProps: hookProps,
          classNames: options.classNames,
          content: options.content,
          didMount: options.didMount,
          willUnmount: options.willUnmount,
          elRef: viewElRef
        }, function (rootElRef, customClassNames, innerElRef, innerContent) {
          return vdom_cjs.createElement("div", {
            className: viewClassNames.concat(customClassNames).join(' '),
            ref: rootElRef
          }, innerContent);
        });
      });
    });
  };
}

function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var defaultConfigs = parseViewConfigs(defaultInputs);
  var overrideConfigs = parseViewConfigs(optionOverrides.views);
  var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash(viewDefs, function (viewDef) {
    return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults);
  });
}

function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  var duration = null;
  var durationUnit = '';
  var singleUnit = '';
  var singleUnitOverrides = {};

  if (durationInput) {
    duration = createDurationCached(durationInput);

    if (duration) {
      // valid?
      var denom = greatestDurationDenominator(duration);
      durationUnit = denom.unit;

      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }

  var queryButtonText = function (optionsSubset) {
    var buttonTextMap = optionsSubset.buttonText || {};
    var buttonTextKey = viewDef.defaults.buttonTextKey;

    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }

    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }

    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }

    return null;
  };

  return {
    type: viewDef.type,
    component: viewDef.component,
    duration: duration,
    durationUnit: durationUnit,
    singleUnit: singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: tslib.__assign(tslib.__assign({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
    viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type // fall back to given view name

  };
} // hack to get memoization working


var durationInputMap = {};

function createDurationCached(durationInput) {
  var json = JSON.stringify(durationInput);
  var res = durationInputMap[json];

  if (res === undefined) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }

  return res;
}

var DateProfileGenerator =
/** @class */
function () {
  function DateProfileGenerator(props) {
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.


  DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(prevDate, -1, forceToValid);
  }; // Builds a structure with info about what the dates/ranges will be for the "next" view.


  DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(nextDate, 1, forceToValid);
  }; // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).


  DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
    if (forceToValid === void 0) {
      forceToValid = true;
    }

    var props = this.props;
    var validRange;
    var currentInfo;
    var isRangeAllDay;
    var renderRange;
    var activeRange;
    var isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);

    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }

    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;

    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }

    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange); // might return null
    // it's invalid if the originally requested date is not contained,
    // or if the range is completely outside of the valid range.

    isValid = rangesIntersect(currentInfo.range, validRange);
    return {
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: validRange,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: currentInfo.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay: isRangeAllDay,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: activeRange,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: renderRange,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: props.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: props.slotMaxTime,
      isValid: isValid,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(currentInfo.duration) // pass a fallback (might be null) ^

    };
  }; // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.


  DateProfileGenerator.prototype.buildValidRange = function () {
    var input = this.props.validRangeInput;
    var simpleInput = typeof input === 'function' ? input.call(this.props.calendarApi, this.nowDate) : input;
    return this.refineRange(simpleInput) || {
      start: null,
      end: null
    }; // completely open-ended
  }; // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.


  DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
    var props = this.props;
    var duration = null;
    var unit = null;
    var range = null;
    var dayCount;

    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = 'day';
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }

    return {
      duration: duration,
      unit: unit,
      range: range
    };
  };

  DateProfileGenerator.prototype.getFallbackDuration = function () {
    return createDuration({
      day: 1
    });
  }; // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.


  DateProfileGenerator.prototype.adjustActiveRange = function (range) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        usesMinMaxTime = _a.usesMinMaxTime,
        slotMinTime = _a.slotMinTime,
        slotMaxTime = _a.slotMaxTime;
    var start = range.start,
        end = range.end;

    if (usesMinMaxTime) {
      // expand active range if slotMinTime is negative (why not when positive?)
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay(start); // necessary?

        start = dateEnv.add(start, slotMinTime);
      } // expand active range if slotMaxTime is beyond one day (why not when negative?)


      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end); // necessary?

        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }

    return {
      start: start,
      end: end
    };
  }; // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.


  DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        dateAlignment = _a.dateAlignment;
    var start;
    var end;
    var res; // compute what the alignment should be

    if (!dateAlignment) {
      var dateIncrement = this.props.dateIncrement;

      if (dateIncrement) {
        // use the smaller of the two units
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    } // if the view displays a single day or smaller


    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay(start);
      }
    }

    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = {
        start: start,
        end: end
      };
    }

    computeRes(); // if range is completely enveloped by hidden days, go past the hidden days

    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }

    return res;
  }; // Builds the "current" range when a dayCount is specified.


  DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        dateAlignment = _a.dateAlignment;
    var runningCount = 0;
    var start = date;
    var end;

    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }

    start = startOfDay(start);
    start = this.skipHiddenDays(start, direction);
    end = start;

    do {
      end = addDays(end, 1);

      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);

    return {
      start: start,
      end: end
    };
  }; // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.


  DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
    var props = this.props;
    var input = props.visibleRangeInput;
    var simpleInput = typeof input === 'function' ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    var range = this.refineRange(simpleInput);

    if (range && (range.start == null || range.end == null)) {
      return null;
    }

    return range;
  }; // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.


  DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  }; // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.


  DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
    var dateIncrement = this.props.dateIncrement;
    var customAlignment;

    if (dateIncrement) {
      return dateIncrement;
    }

    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }

    if (fallback) {
      return fallback;
    }

    return createDuration({
      days: 1
    });
  };

  DateProfileGenerator.prototype.refineRange = function (rangeInput) {
    if (rangeInput) {
      var range = parseRange(rangeInput, this.props.dateEnv);

      if (range) {
        range = computeVisibleDayRange(range);
      }

      return range;
    }

    return null;
  };
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week


  DateProfileGenerator.prototype.initHiddenDays = function () {
    var hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden

    var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)

    var dayCnt = 0;
    var i;

    if (this.props.weekends === false) {
      hiddenDays.push(0, 6); // 0=sunday, 6=saturday
    }

    for (i = 0; i < 7; i += 1) {
      if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
        dayCnt += 1;
      }
    }

    if (!dayCnt) {
      throw new Error('invalid hiddenDays'); // all days were hidden? bad.
    }

    this.isHiddenDayHash = isHiddenDayHash;
  }; // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null


  DateProfileGenerator.prototype.trimHiddenDays = function (range) {
    var start = range.start,
        end = range.end;

    if (start) {
      start = this.skipHiddenDays(start);
    }

    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }

    if (start == null || end == null || start < end) {
      return {
        start: start,
        end: end
      };
    }

    return null;
  }; // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)


  DateProfileGenerator.prototype.isHiddenDay = function (day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }

    return this.isHiddenDayHash[day];
  }; // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)


  DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
    if (inc === void 0) {
      inc = 1;
    }

    if (isExclusive === void 0) {
      isExclusive = false;
    }

    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }

    return date;
  };

  return DateProfileGenerator;
}();

function reduceViewType(viewType, action) {
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      viewType = action.viewType;
  }

  return viewType;
}

function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  var _a;

  switch (action.type) {
    case 'SET_OPTION':
      return tslib.__assign(tslib.__assign({}, dynamicOptionOverrides), (_a = {}, _a[action.optionName] = action.rawOptionValue, _a));

    default:
      return dynamicOptionOverrides;
  }
}

function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  var dp;

  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return dateProfileGenerator.build(action.dateMarker || currentDate);

    case 'CHANGE_DATE':
      return dateProfileGenerator.build(action.dateMarker);

    case 'PREV':
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;

    case 'NEXT':
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;
  }

  return currentDateProfile;
}

function initEventSources(calendarOptions, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}

function reduceEventSources(eventSources, action, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  switch (action.type) {
    case 'ADD_EVENT_SOURCES':
      // already parsed
      return addSources(eventSources, action.sources, activeRange, context);

    case 'REMOVE_EVENT_SOURCE':
      return removeSource(eventSources, action.sourceId);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }

      return eventSources;

    case 'FETCH_EVENT_SOURCES':
      return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
      arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);

    case 'RECEIVE_EVENTS':
    case 'RECEIVE_EVENT_ERROR':
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return {};

    default:
      return eventSources;
  }
}

function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}

function computeEventSourcesLoading(eventSources) {
  for (var sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }

  return false;
}

function addSources(eventSourceHash, sources, fetchRange, context) {
  var hash = {};

  for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
    var source = sources_1[_i];
    hash[source.sourceId] = source;
  }

  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }

  return tslib.__assign(tslib.__assign({}, eventSourceHash), hash);
}

function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, function (eventSource) {
    return eventSource.sourceId !== sourceId;
  });
}

function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
    return isSourceDirty(eventSource, fetchRange, context);
  }), fetchRange, false, context);
}

function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }

  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || // always cancel outdated in-progress fetches
  fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}

function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  var nextSources = {};

  for (var sourceId in prevSources) {
    var source = prevSources[sourceId];

    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }

  return nextSources;
}

function fetchSource(eventSource, fetchRange, isRefetch, context) {
  var options = context.options,
      calendarApi = context.calendarApi;
  var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  var fetchId = guid();
  sourceDef.fetch({
    eventSource: eventSource,
    range: fetchRange,
    isRefetch: isRefetch,
    context: context
  }, function (res) {
    var rawEvents = res.rawEvents;

    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    context.dispatch({
      type: 'RECEIVE_EVENTS',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      rawEvents: rawEvents
    });
  }, function (error) {
    console.warn(error.message, error);

    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
    }

    if (eventSource.failure) {
      eventSource.failure(error);
    }

    context.dispatch({
      type: 'RECEIVE_EVENT_ERROR',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      error: error
    });
  });
  return tslib.__assign(tslib.__assign({}, eventSource), {
    isFetching: true,
    latestFetchId: fetchId
  });
}

function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  var _a;

  var eventSource = sourceHash[sourceId];

  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    return tslib.__assign(tslib.__assign({}, sourceHash), (_a = {}, _a[sourceId] = tslib.__assign(tslib.__assign({}, eventSource), {
      isFetching: false,
      fetchRange: fetchRange
    }), _a));
  }

  return sourceHash;
}

function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, function (eventSource) {
    return doesSourceNeedRange(eventSource, context);
  });
}

function parseInitialSources(rawOptions, context) {
  var refiners = buildEventSourceRefiners(context);
  var rawSources = [].concat(rawOptions.eventSources || []);
  var sources = []; // parsed

  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }

  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }

  for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
    var rawSource = rawSources_1[_i];
    var source = parseEventSource(rawSource, context, refiners);

    if (source) {
      sources.push(source);
    }
  }

  return sources;
}

function doesSourceNeedRange(eventSource, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}

function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      // raw
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);

    case 'ADD_EVENTS':
      // already parsed, but not expanded
      return addEvent(eventStore, action.eventStore, // new ones
      dateProfile ? dateProfile.activeRange : null, context);

    case 'RESET_EVENTS':
      return action.eventStore;

    case 'MERGE_EVENTS':
      // already parsed and expanded
      return mergeEventStores(eventStore, action.eventStore);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }

      return eventStore;

    case 'REMOVE_EVENTS':
      return excludeSubEventStore(eventStore, action.eventStore);

    case 'REMOVE_EVENT_SOURCE':
      return excludeEventsBySourceId(eventStore, action.sourceId);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return filterEventStoreDefs(eventStore, function (eventDef) {
        return !eventDef.sourceId // only keep events with no source id
        ;
      });

    case 'REMOVE_ALL_EVENTS':
      return createEmptyEventStore();

    default:
      return eventStore;
  }
}

function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
  ) {
      var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);

      if (fetchRange) {
        subset = expandRecurring(subset, fetchRange, context);
      }

      return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
    }

  return eventStore;
}

function transformRawEvents(rawEvents, eventSource, context) {
  var calEachTransform = context.options.eventDataTransform;
  var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;

  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }

  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }

  return rawEvents;
}

function transformEachRawEvent(rawEvents, func) {
  var refinedEvents;

  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];

    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
      var rawEvent = rawEvents_1[_i];
      var refinedEvent = func(rawEvent);

      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      } // if a different falsy value, do nothing

    }
  }

  return refinedEvents;
}

function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }

  return mergeEventStores(eventStore, subset);
}

function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  var defs = eventStore.defs;
  var instances = mapHash(eventStore.instances, function (instance) {
    var def = defs[instance.defId];

    if (def.allDay || def.recurringDef) {
      return instance; // isn't dependent on timezone
    }

    return tslib.__assign(tslib.__assign({}, instance), {
      range: {
        start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
        end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
      },
      forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo,
      forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo
    });
  });
  return {
    defs: defs,
    instances: instances
  };
}

function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, function (eventDef) {
    return eventDef.sourceId !== sourceId;
  });
} // QUESTION: why not just return instances? do a general object-property-exclusion util


function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, function (instance) {
      return !removals[instance.instanceId];
    })
  };
}

function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case 'UNSELECT_DATES':
      return null;

    case 'SELECT_DATES':
      return action.selection;

    default:
      return currentSelection;
  }
}

function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case 'UNSELECT_EVENT':
      return '';

    case 'SELECT_EVENT':
      return action.eventInstanceId;

    default:
      return currentInstanceId;
  }
}

function reduceEventDrag(currentDrag, action) {
  var newDrag;

  switch (action.type) {
    case 'UNSET_EVENT_DRAG':
      return null;

    case 'SET_EVENT_DRAG':
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };

    default:
      return currentDrag;
  }
}

function reduceEventResize(currentResize, action) {
  var newResize;

  switch (action.type) {
    case 'UNSET_EVENT_RESIZE':
      return null;

    case 'SET_EVENT_RESIZE':
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };

    default:
      return currentResize;
  }
}

function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var viewsWithButtons = [];
  var headerToolbar = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) : null;
  var footerToolbar = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) : null;
  return {
    headerToolbar: headerToolbar,
    footerToolbar: footerToolbar,
    viewsWithButtons: viewsWithButtons
  };
}

function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) {
  return mapHash(sectionStrHash, function (sectionStr) {
    return parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons);
  });
}
/*
BAD: querying icons and text here. should be done at render time
*/


function parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) {
  var isRtl = calendarOptions.direction === 'rtl';
  var calendarCustomButtons = calendarOptions.customButtons || {};
  var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  var calendarButtonText = calendarOptions.buttonText || {};
  var sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
  return sectionSubstrs.map(function (buttonGroupStr) {
    return buttonGroupStr.split(',').map(function (buttonName) {
      if (buttonName === 'title') {
        return {
          buttonName: buttonName
        };
      }

      var customButtonProps;
      var viewSpec;
      var buttonClick;
      var buttonIcon; // only one of these will be set

      var buttonText; // "

      if (customButtonProps = calendarCustomButtons[buttonName]) {
        buttonClick = function (ev) {
          if (customButtonProps.click) {
            customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
          }
        };

        (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
      } else if (viewSpec = viewSpecs[buttonName]) {
        viewsWithButtons.push(buttonName);

        buttonClick = function () {
          calendarApi.changeView(buttonName);
        };

        (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
      } else if (calendarApi[buttonName]) {
        // a calendarApi method
        buttonClick = function () {
          calendarApi[buttonName]();
        };

        (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]); //            ^ everything else is considered default
      }

      return {
        buttonName: buttonName,
        buttonClick: buttonClick,
        buttonIcon: buttonIcon,
        buttonText: buttonText
      };
    });
  });
}

var eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta: function (refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }

    return null;
  },
  fetch: function (arg, success) {
    success({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$2]
});
var eventSourceDef$1 = {
  parseMeta: function (refined) {
    if (typeof refined.events === 'function') {
      return refined.events;
    }

    return null;
  },
  fetch: function (arg, success, failure) {
    var dateEnv = arg.context.dateEnv;
    var func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function (rawEvents) {
      success({
        rawEvents: rawEvents
      }); // needs an object response
    }, failure);
  }
};
var funcEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$1]
});

function requestJson(method, url, params, successCallback, failureCallback) {
  method = method.toUpperCase();
  var body = null;

  if (method === 'GET') {
    url = injectQueryStringParams(url, params);
  } else {
    body = encodeParams(params);
  }

  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  if (method !== 'GET') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      var parsed = false;
      var res = void 0;

      try {
        res = JSON.parse(xhr.responseText);
        parsed = true;
      } catch (err) {// will handle parsed=false
      }

      if (parsed) {
        successCallback(res, xhr);
      } else {
        failureCallback('Failure parsing JSON', xhr);
      }
    } else {
      failureCallback('Request failed', xhr);
    }
  };

  xhr.onerror = function () {
    failureCallback('Request failed', xhr);
  };

  xhr.send(body);
}

function injectQueryStringParams(url, params) {
  return url + (url.indexOf('?') === -1 ? '?' : '&') + encodeParams(params);
}

function encodeParams(params) {
  var parts = [];

  for (var key in params) {
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
  }

  return parts.join('&');
}

var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef = {
  parseMeta: function (refined) {
    if (refined.url && (refined.format === 'json' || !refined.format)) {
      return {
        url: refined.url,
        format: 'json',
        method: (refined.method || 'GET').toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }

    return null;
  },
  fetch: function (arg, success, failure) {
    var meta = arg.eventSource.meta;
    var requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
      success({
        rawEvents: rawEvents,
        xhr: xhr
      });
    }, function (errorMessage, xhr) {
      failure({
        message: errorMessage,
        xhr: xhr
      });
    });
  }
};
var jsonFeedEventSourcePlugin = createPlugin({
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});

function buildRequestParams(meta, range, context) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var startParam;
  var endParam;
  var timeZoneParam;
  var customRequestParams;
  var params = {};
  startParam = meta.startParam;

  if (startParam == null) {
    startParam = options.startParam;
  }

  endParam = meta.endParam;

  if (endParam == null) {
    endParam = options.endParam;
  }

  timeZoneParam = meta.timeZoneParam;

  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  } // retrieve any outbound GET/POST data from the options


  if (typeof meta.extraParams === 'function') {
    // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
  } else {
    // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {};
  }

  tslib.__assign(params, customRequestParams);

  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);

  if (dateEnv.timeZone !== 'local') {
    params[timeZoneParam] = dateEnv.timeZone;
  }

  return params;
}

var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
var recurring = {
  parse: function (refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      var recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      var duration = void 0;

      if (refined.duration) {
        duration = refined.duration;
      }

      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }

      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration: duration,
        typeData: recurringData // doesn't need endTime anymore but oh well

      };
    }

    return null;
  },
  expand: function (typeData, framingRange, dateEnv) {
    var clippedFramingRange = intersectRanges(framingRange, {
      start: typeData.startRecur,
      end: typeData.endRecur
    });

    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    }

    return [];
  }
};
var simpleRecurringEventsPlugin = createPlugin({
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});

function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  var dayMarker = startOfDay(framingRange.start);
  var endMarker = framingRange.end;
  var instanceStarts = [];

  while (dayMarker < endMarker) {
    var instanceStart // if everyday, or this particular day-of-week
    = void 0; // if everyday, or this particular day-of-week

    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }

      instanceStarts.push(instanceStart);
    }

    dayMarker = addDays(dayMarker, 1);
  }

  return instanceStarts;
}

var changeHandlerPlugin = createPlugin({
  optionChangeHandlers: {
    events: function (events, context) {
      handleEventSources([events], context);
    },
    eventSources: handleEventSources
  }
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/

function handleEventSources(inputs, context) {
  var unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  var newInputs = [];

  for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
    var input = inputs_1[_i];
    var inputFound = false;

    for (var i = 0; i < unfoundSources.length; i += 1) {
      if (unfoundSources[i]._raw === input) {
        unfoundSources.splice(i, 1); // delete

        inputFound = true;
        break;
      }
    }

    if (!inputFound) {
      newInputs.push(input);
    }
  }

  for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
    var unfoundSource = unfoundSources_1[_a];
    context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: unfoundSource.sourceId
    });
  }

  for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
    var newInput = newInputs_1[_b];
    context.calendarApi.addEventSource(newInput);
  }
}

function handleDateProfile(dateProfile, context) {
  context.emitter.trigger('datesSet', tslib.__assign(tslib.__assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), {
    view: context.viewApi
  }));
}

function handleEventStore(eventStore, context) {
  var emitter = context.emitter;

  if (emitter.hasHandlers('eventsSet')) {
    emitter.trigger('eventsSet', buildEventApis(eventStore, context));
  }
}
/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/


var globalPlugins = [arrayEventSourcePlugin, funcEventSourcePlugin, jsonFeedEventSourcePlugin, simpleRecurringEventsPlugin, changeHandlerPlugin, createPlugin({
  isLoadingFuncs: [function (state) {
    return computeEventSourcesLoading(state.eventSources);
  }],
  contentTypeHandlers: {
    html: function () {
      return {
        render: injectHtml
      };
    },
    domNodes: function () {
      return {
        render: injectDomNodes
      };
    }
  },
  propSetHandlers: {
    dateProfile: handleDateProfile,
    eventStore: handleEventStore
  }
})];

function injectHtml(el, html) {
  el.innerHTML = html;
}

function injectDomNodes(el, domNodes) {
  var oldNodes = Array.prototype.slice.call(el.childNodes); // TODO: use array util

  var newNodes = Array.prototype.slice.call(domNodes); // TODO: use array util

  if (!isArraysEqual(oldNodes, newNodes)) {
    for (var _i = 0, newNodes_1 = newNodes; _i < newNodes_1.length; _i++) {
      var newNode = newNodes_1[_i];
      el.appendChild(newNode);
    }

    oldNodes.forEach(removeElement);
  }
}

var DelayedRunner =
/** @class */
function () {
  function DelayedRunner(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }

  DelayedRunner.prototype.request = function (delay) {
    this.isDirty = true;

    if (!this.isPaused()) {
      this.clearTimeout();

      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout( // NOT OPTIMAL! TODO: look at debounce
        this.tryDrain.bind(this), delay);
      }
    }
  };

  DelayedRunner.prototype.pause = function (scope) {
    if (scope === void 0) {
      scope = '';
    }

    var pauseDepths = this.pauseDepths;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  };

  DelayedRunner.prototype.resume = function (scope, force) {
    if (scope === void 0) {
      scope = '';
    }

    var pauseDepths = this.pauseDepths;

    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        var depth = pauseDepths[scope];

        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }

      this.tryDrain();
    }
  };

  DelayedRunner.prototype.isPaused = function () {
    return Object.keys(this.pauseDepths).length;
  };

  DelayedRunner.prototype.tryDrain = function () {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;

      while (this.isDirty) {
        this.isDirty = false;
        this.drained(); // might set isDirty to true again
      }

      this.isRunning = false;
    }
  };

  DelayedRunner.prototype.clear = function () {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  };

  DelayedRunner.prototype.clearTimeout = function () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  };

  DelayedRunner.prototype.drained = function () {
    if (this.drainedOption) {
      this.drainedOption();
    }
  };

  return DelayedRunner;
}();

var TaskRunner =
/** @class */
function () {
  function TaskRunner(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new DelayedRunner(this.drain.bind(this));
  }

  TaskRunner.prototype.request = function (task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  };

  TaskRunner.prototype.pause = function (scope) {
    this.delayedRunner.pause(scope);
  };

  TaskRunner.prototype.resume = function (scope, force) {
    this.delayedRunner.resume(scope, force);
  };

  TaskRunner.prototype.drain = function () {
    var queue = this.queue;

    while (queue.length) {
      var completedTasks = [];
      var task = void 0;

      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }

      this.drained(completedTasks);
    } // keep going, in case new tasks were added in the drained handler

  };

  TaskRunner.prototype.runTask = function (task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  };

  TaskRunner.prototype.drained = function (completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  };

  return TaskRunner;
}(); // Computes what the title at the top of the calendarApi should be for this view


function buildTitle(dateProfile, viewOptions, dateEnv) {
  var range; // for views that span a large unit of time, show the proper interval, ignoring stray days before and after

  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    // for day units or smaller, use the actual day range
    range = dateProfile.activeRange;
  }

  return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
} // Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.


function buildTitleFormat(dateProfile) {
  var currentRangeUnit = dateProfile.currentRangeUnit;

  if (currentRangeUnit === 'year') {
    return {
      year: 'numeric'
    };
  }

  if (currentRangeUnit === 'month') {
    return {
      year: 'numeric',
      month: 'long'
    }; // like "September 2014"
  }

  var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);

  if (days !== null && days > 1) {
    // multi-day range. shorter, like "Sep 9 - 10 2014"
    return {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
  } // one day. longer, like "September 9 2014"


  return {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
} // in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too


var CalendarDataManager =
/** @class */
function () {
  function CalendarDataManager(props) {
    var _this = this;

    this.computeOptionsData = memoize(this._computeOptionsData);
    this.computeCurrentViewData = memoize(this._computeCurrentViewData);
    this.organizeRawLocales = memoize(organizeRawLocales);
    this.buildLocale = memoize(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize(buildDateEnv);
    this.buildTheme = memoize(buildTheme);
    this.parseToolbars = memoize(parseToolbars);
    this.buildViewSpecs = memoize(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
    this.buildEventUiBases = memoize(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildTitle = memoize(buildTitle);
    this.emitter = new Emitter();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};

    this.getCurrentData = function () {
      return _this.data;
    };

    this.dispatch = function (action) {
      _this.actionRunner.request(action); // protects against recursive calls to _handleAction

    };

    this.props = props;
    this.actionRunner.pause();
    var dynamicOptionOverrides = {};
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    var currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
    var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);

    if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }; // needs to be after setThisContext

    for (var _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback(calendarContext);
    } // NOT DRY


    var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    var initialState = {
      dynamicOptionOverrides: dynamicOptionOverrides,
      currentViewType: currentViewType,
      currentDate: currentDate,
      dateProfile: dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources: eventSources,
      eventUiBases: {},
      eventStore: createEmptyEventStore(),
      renderableEventStore: createEmptyEventStore(),
      dateSelection: null,
      eventSelection: '',
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };

    var contextAndState = tslib.__assign(tslib.__assign({}, calendarContext), initialState);

    for (var _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++) {
      var reducer = _c[_b];

      tslib.__assign(initialState, reducer(null, null, contextAndState));
    }

    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger('loading', true); // NOT DRY
    }

    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }

  CalendarDataManager.prototype.resetOptions = function (optionOverrides, append) {
    var props = this.props;
    props.optionOverrides = append ? tslib.__assign(tslib.__assign({}, props.optionOverrides), optionOverrides) : optionOverrides;
    this.actionRunner.request({
      type: 'NOTHING'
    });
  };

  CalendarDataManager.prototype._handleAction = function (action) {
    var _a = this,
        props = _a.props,
        state = _a.state,
        emitter = _a.emitter;

    var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = reduceViewType(state.currentViewType, action);
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: emitter,
      getCurrentData: this.getCurrentData
    };
    var currentDate = state.currentDate,
        dateProfile = state.dateProfile;

    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      // hack
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }

    currentDate = reduceCurrentDate(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);

    if (action.type === 'PREV' || // TODO: move this logic into DateProfileGenerator
    action.type === 'NEXT' || // "
    !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
    var eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
    var isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading

    var renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : // try from previous state
    eventStore;

    var _b = this.buildViewUiProps(calendarContext),
        eventUiSingleBase = _b.eventUiSingleBase,
        selectionConfig = _b.selectionConfig; // will memoize obj


    var eventUiBySource = this.buildEventUiBySource(eventSources);
    var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    var newState = {
      dynamicOptionOverrides: dynamicOptionOverrides,
      currentViewType: currentViewType,
      currentDate: currentDate,
      dateProfile: dateProfile,
      eventSources: eventSources,
      eventStore: eventStore,
      renderableEventStore: renderableEventStore,
      selectionConfig: selectionConfig,
      eventUiBases: eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };

    var contextAndState = tslib.__assign(tslib.__assign({}, calendarContext), newState);

    for (var _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++) {
      var reducer = _c[_i];

      tslib.__assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value

    }

    var wasLoading = computeIsLoading(state, calendarContext);
    var isLoading = computeIsLoading(newState, calendarContext); // TODO: use propSetHandlers in plugin system

    if (!wasLoading && isLoading) {
      emitter.trigger('loading', true);
    } else if (wasLoading && !isLoading) {
      emitter.trigger('loading', false);
    }

    this.state = newState;

    if (props.onAction) {
      props.onAction(action);
    }
  };

  CalendarDataManager.prototype.updateData = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    var oldData = this.data;
    var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);

    var data = this.data = tslib.__assign(tslib.__assign(tslib.__assign({
      viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv),
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, optionsData), currentViewData), state);

    var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    var oldCalendarOptions = oldData && oldData.calendarOptions;
    var newCalendarOptions = optionsData.calendarOptions;

    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        // hack
        state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
        state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
      }

      for (var optionName in changeHandlers) {
        if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
      }
    }

    if (props.onData) {
      props.onData(data);
    }
  };

  CalendarDataManager.prototype._computeOptionsData = function (optionOverrides, dynamicOptionOverrides, calendarApi) {
    // TODO: blacklist options that are handled by optionChangeHandlers
    var _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides),
        refinedOptions = _a.refinedOptions,
        pluginHooks = _a.pluginHooks,
        localeDefaults = _a.localeDefaults,
        availableLocaleData = _a.availableLocaleData,
        extra = _a.extra;

    warnUnknownOptions(extra);
    var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    var viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
    var theme = this.buildTheme(refinedOptions, pluginHooks);
    var toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
    return {
      calendarOptions: refinedOptions,
      pluginHooks: pluginHooks,
      dateEnv: dateEnv,
      viewSpecs: viewSpecs,
      theme: theme,
      toolbarConfig: toolbarConfig,
      localeDefaults: localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  }; // always called from behind a memoizer


  CalendarDataManager.prototype.processRawCalendarOptions = function (optionOverrides, dynamicOptionOverrides) {
    var _a = mergeRawOptions([BASE_OPTION_DEFAULTS, optionOverrides, dynamicOptionOverrides]),
        locales = _a.locales,
        locale = _a.locale;

    var availableLocaleData = this.organizeRawLocales(locales);
    var availableRawLocales = availableLocaleData.map;
    var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);

    var refiners = this.currentCalendarOptionsRefiners = tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);

    var extra = {};
    var raw = mergeRawOptions([BASE_OPTION_DEFAULTS, localeDefaults, optionOverrides, dynamicOptionOverrides]);
    var refined = {};
    var currentRaw = this.currentCalendarOptionsInput;
    var currentRefined = this.currentCalendarOptionsRefined;
    var anyChanges = false;

    for (var optionName in raw) {
      if (optionName !== 'plugins') {
        // because plugins is special-cased
        if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
    }

    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: pluginHooks,
      availableLocaleData: availableLocaleData,
      localeDefaults: localeDefaults,
      extra: extra
    };
  };

  CalendarDataManager.prototype._computeCurrentViewData = function (viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    var viewSpec = optionsData.viewSpecs[viewType];

    if (!viewSpec) {
      throw new Error("viewType \"" + viewType + "\" is not available. Please make sure you've loaded all neccessary plugins");
    }

    var _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides),
        refinedOptions = _a.refinedOptions,
        extra = _a.extra;

    warnUnknownOptions(extra);
    var dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      nowInput: refinedOptions.now,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      monthMode: refinedOptions.monthMode,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return {
      viewSpec: viewSpec,
      options: refinedOptions,
      dateProfileGenerator: dateProfileGenerator,
      viewApi: viewApi
    };
  };

  CalendarDataManager.prototype.processRawViewOptions = function (viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    var raw = mergeRawOptions([BASE_OPTION_DEFAULTS, viewSpec.optionDefaults, localeDefaults, optionOverrides, viewSpec.optionOverrides, dynamicOptionOverrides]);

    var refiners = tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);

    var refined = {};
    var currentRaw = this.currentViewOptionsInput;
    var currentRefined = this.currentViewOptionsRefined;
    var anyChanges = false;
    var extra = {};

    for (var optionName in raw) {
      if (raw[optionName] === currentRaw[optionName]) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName]) {
          if (optionName in this.currentCalendarOptionsRefined) {
            // might be an "extra" prop
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }

        anyChanges = true;
      }
    }

    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: extra
    };
  };

  return CalendarDataManager;
}();

function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: 'gregory',
    timeZone: timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale: locale,
    weekNumberCalculation: weekNumberCalculation,
    firstDay: firstDay,
    weekText: weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator: defaultSeparator
  });
}

function buildTheme(options, pluginHooks) {
  var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}

function buildDateProfileGenerator(props) {
  var DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}

function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewApi(type, getCurrentData, dateEnv);
}

function buildEventUiBySource(eventSources) {
  return mapHash(eventSources, function (eventSource) {
    return eventSource.ui;
  });
}

function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  var eventUiBases = {
    '': eventUiSingleBase
  };

  for (var defId in eventDefs) {
    var def = eventDefs[defId];

    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }

  return eventUiBases;
}

function buildViewUiProps(calendarContext) {
  var options = calendarContext.options;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor // classNames: options.eventClassNames // render hook will handle this

    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
      allow: options.selectAllow
    }, calendarContext)
  };
}

function computeIsLoading(state, context) {
  for (var _i = 0, _a = context.pluginHooks.isLoadingFuncs; _i < _a.length; _i++) {
    var isLoadingFunc = _a[_i];

    if (isLoadingFunc(state)) {
      return true;
    }
  }

  return false;
}

function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}

function warnUnknownOptions(options, viewName) {
  for (var optionName in options) {
    console.warn("Unknown option '" + optionName + "'" + (viewName ? " for view '" + viewName + "'" : ''));
  }
} // TODO: move this to react plugin?


var CalendarDataProvider =
/** @class */
function (_super) {
  tslib.__extends(CalendarDataProvider, _super);

  function CalendarDataProvider(props) {
    var _this = _super.call(this, props) || this;

    _this.handleData = function (data) {
      if (!_this.dataManager) {
        // still within initial run, before assignment in constructor
        // eslint-disable-next-line react/no-direct-mutation-state
        _this.state = data; // can't use setState yet
      } else {
        _this.setState(data);
      }
    };

    _this.dataManager = new CalendarDataManager({
      optionOverrides: props.optionOverrides,
      calendarApi: props.calendarApi,
      onData: _this.handleData
    });
    return _this;
  }

  CalendarDataProvider.prototype.render = function () {
    return this.props.children(this.state);
  };

  CalendarDataProvider.prototype.componentDidUpdate = function (prevProps) {
    var newOptionOverrides = this.props.optionOverrides;

    if (newOptionOverrides !== prevProps.optionOverrides) {
      // prevent recursive handleData
      this.dataManager.resetOptions(newOptionOverrides);
    }
  };

  return CalendarDataProvider;
}(vdom_cjs.Component); // HELPERS

/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/


function sliceEvents(props, allDay) {
  return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}

var NamedTimeZoneImpl =
/** @class */
function () {
  function NamedTimeZoneImpl(timeZoneName) {
    this.timeZoneName = timeZoneName;
  }

  return NamedTimeZoneImpl;
}();

var SegHierarchy =
/** @class */
function () {
  function SegHierarchy() {
    // settings
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1; // -1 means no max

    this.maxStackCnt = -1; // -1 means no max

    this.levelCoords = []; // ordered

    this.entriesByLevel = []; // parallel with levelCoords

    this.stackCnts = {}; // TODO: use better technique!?
  }

  SegHierarchy.prototype.addSegs = function (inputs) {
    var hiddenEntries = [];

    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
      var input = inputs_1[_i];
      this.insertEntry(input, hiddenEntries);
    }

    return hiddenEntries;
  };

  SegHierarchy.prototype.insertEntry = function (entry, hiddenEntries) {
    var insertion = this.findInsertion(entry);

    if (this.isInsertionValid(insertion, entry)) {
      this.insertEntryAt(entry, insertion);
      return 1;
    }

    return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
  };

  SegHierarchy.prototype.isInsertionValid = function (insertion, entry) {
    return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
  }; // returns number of new entries inserted


  SegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
    if (this.allowReslicing && insertion.touchingEntry) {
      return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
    }

    hiddenEntries.push(entry);
    return 0;
  };

  SegHierarchy.prototype.splitEntry = function (entry, barrier, hiddenEntries) {
    var partCnt = 0;
    var splitHiddenEntries = [];
    var entrySpan = entry.span;
    var barrierSpan = barrier.span;

    if (entrySpan.start < barrierSpan.start) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: entrySpan.start,
          end: barrierSpan.start
        }
      }, splitHiddenEntries);
    }

    if (entrySpan.end > barrierSpan.end) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: barrierSpan.end,
          end: entrySpan.end
        }
      }, splitHiddenEntries);
    }

    if (partCnt) {
      hiddenEntries.push.apply(hiddenEntries, tslib.__spreadArray([{
        index: entry.index,
        thickness: entry.thickness,
        span: intersectSpans(barrierSpan, entrySpan) // guaranteed to intersect

      }], splitHiddenEntries));
      return partCnt;
    }

    hiddenEntries.push(entry);
    return 0;
  };

  SegHierarchy.prototype.insertEntryAt = function (entry, insertion) {
    var _a = this,
        entriesByLevel = _a.entriesByLevel,
        levelCoords = _a.levelCoords;

    if (insertion.lateral === -1) {
      // create a new level
      insertAt(levelCoords, insertion.level, insertion.levelCoord);
      insertAt(entriesByLevel, insertion.level, [entry]);
    } else {
      // insert into existing level
      insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
    }

    this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
  };

  SegHierarchy.prototype.findInsertion = function (newEntry) {
    var _a = this,
        levelCoords = _a.levelCoords,
        entriesByLevel = _a.entriesByLevel,
        strictOrder = _a.strictOrder,
        stackCnts = _a.stackCnts;

    var levelCnt = levelCoords.length;
    var candidateCoord = 0;
    var touchingLevel = -1;
    var touchingLateral = -1;
    var touchingEntry = null;
    var stackCnt = 0;

    for (var trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
      var trackingCoord = levelCoords[trackingLevel]; // if the current level is past the placed entry, we have found a good empty space and can stop.
      // if strictOrder, keep finding more lateral intersections.

      if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
        break;
      }

      var trackingEntries = entriesByLevel[trackingLevel];
      var trackingEntry = void 0;
      var searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end

      var lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one

      while ( // loop through entries that horizontally intersect
      (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
      trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
      ) {
        var trackingEntryBottom = trackingCoord + trackingEntry.thickness; // intersects into the top of the candidate?

        if (trackingEntryBottom > candidateCoord) {
          candidateCoord = trackingEntryBottom;
          touchingEntry = trackingEntry;
          touchingLevel = trackingLevel;
          touchingLateral = lateralIndex;
        } // butts up against top of candidate? (will happen if just intersected as well)


        if (trackingEntryBottom === candidateCoord) {
          // accumulate the highest possible stackCnt of the trackingEntries that butt up
          stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
        }

        lateralIndex += 1;
      }
    } // the destination level will be after touchingEntry's level. find it


    var destLevel = 0;

    if (touchingEntry) {
      destLevel = touchingLevel + 1;

      while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
        destLevel += 1;
      }
    } // if adding to an existing level, find where to insert


    var destLateral = -1;

    if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
      destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
    }

    return {
      touchingLevel: touchingLevel,
      touchingLateral: touchingLateral,
      touchingEntry: touchingEntry,
      stackCnt: stackCnt,
      levelCoord: candidateCoord,
      level: destLevel,
      lateral: destLateral
    };
  }; // sorted by levelCoord (lowest to highest)


  SegHierarchy.prototype.toRects = function () {
    var _a = this,
        entriesByLevel = _a.entriesByLevel,
        levelCoords = _a.levelCoords;

    var levelCnt = entriesByLevel.length;
    var rects = [];

    for (var level = 0; level < levelCnt; level += 1) {
      var entries = entriesByLevel[level];
      var levelCoord = levelCoords[level];

      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        rects.push(tslib.__assign(tslib.__assign({}, entry), {
          levelCoord: levelCoord
        }));
      }
    }

    return rects;
  };

  return SegHierarchy;
}();

function getEntrySpanEnd(entry) {
  return entry.span.end;
}

function buildEntryKey(entry) {
  return entry.index + ':' + entry.span.start;
} // returns groups with entries sorted by input order


function groupIntersectingEntries(entries) {
  var merges = [];

  for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
    var entry = entries_2[_i];
    var filteredMerges = [];
    var hungryMerge = {
      span: entry.span,
      entries: [entry]
    };

    for (var _a = 0, merges_1 = merges; _a < merges_1.length; _a++) {
      var merge = merges_1[_a];

      if (intersectSpans(merge.span, hungryMerge.span)) {
        hungryMerge = {
          entries: merge.entries.concat(hungryMerge.entries),
          span: joinSpans(merge.span, hungryMerge.span)
        };
      } else {
        filteredMerges.push(merge);
      }
    }

    filteredMerges.push(hungryMerge);
    merges = filteredMerges;
  }

  return merges;
}

function joinSpans(span0, span1) {
  return {
    start: Math.min(span0.start, span1.start),
    end: Math.max(span0.end, span1.end)
  };
}

function intersectSpans(span0, span1) {
  var start = Math.max(span0.start, span1.start);
  var end = Math.min(span0.end, span1.end);

  if (start < end) {
    return {
      start: start,
      end: end
    };
  }

  return null;
} // general util
// ---------------------------------------------------------------------------------------------------------------------


function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
}

function binarySearch(a, searchVal, getItemVal) {
  var startIndex = 0;
  var endIndex = a.length; // exclusive

  if (!endIndex || searchVal < getItemVal(a[startIndex])) {
    // no items OR before first item
    return [0, 0];
  }

  if (searchVal > getItemVal(a[endIndex - 1])) {
    // after last item
    return [endIndex, 0];
  }

  while (startIndex < endIndex) {
    var middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    var middleVal = getItemVal(a[middleIndex]);

    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      // equal!
      return [middleIndex, 1];
    }
  }

  return [startIndex, 0];
}

var Interaction =
/** @class */
function () {
  function Interaction(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }

  Interaction.prototype.destroy = function () {};

  return Interaction;
}();

function parseInteractionSettings(component, input) {
  return {
    component: component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}

function interactionSettingsToStore(settings) {
  var _a;

  return _a = {}, _a[settings.component.uid] = settings, _a;
} // global state


var interactionSettingsStore = {};
/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/

var ElementDragging =
/** @class */
function () {
  function ElementDragging(el, selector) {
    this.emitter = new Emitter();
  }

  ElementDragging.prototype.destroy = function () {};

  ElementDragging.prototype.setMirrorIsVisible = function (bool) {// optional if subclass doesn't want to support a mirror
  };

  ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {// optional if subclass doesn't want to support a mirror
  };

  ElementDragging.prototype.setAutoScrollEnabled = function (bool) {// optional
  };

  return ElementDragging;
}(); // TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.


var config = {};
/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/

var DRAG_META_REFINERS = {
  startTime: createDuration,
  duration: createDuration,
  create: Boolean,
  sourceId: String
};

function parseDragMeta(raw) {
  var _a = refineProps(raw, DRAG_META_REFINERS),
      refined = _a.refined,
      extra = _a.extra;

  return {
    startTime: refined.startTime || null,
    duration: refined.duration || null,
    create: refined.create != null ? refined.create : true,
    sourceId: refined.sourceId,
    leftoverProps: extra
  };
}

var ToolbarSection =
/** @class */
function (_super) {
  tslib.__extends(ToolbarSection, _super);

  function ToolbarSection() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ToolbarSection.prototype.render = function () {
    var _this = this;

    var children = this.props.widgetGroups.map(function (widgetGroup) {
      return _this.renderWidgetGroup(widgetGroup);
    });
    return vdom_cjs.createElement.apply(void 0, tslib.__spreadArray(['div', {
      className: 'fc-toolbar-chunk'
    }], children));
  };

  ToolbarSection.prototype.renderWidgetGroup = function (widgetGroup) {
    var props = this.props;
    var theme = this.context.theme;
    var children = [];
    var isOnlyButtons = true;

    for (var _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++) {
      var widget = widgetGroup_1[_i];
      var buttonName = widget.buttonName,
          buttonClick = widget.buttonClick,
          buttonText = widget.buttonText,
          buttonIcon = widget.buttonIcon;

      if (buttonName === 'title') {
        isOnlyButtons = false;
        children.push(vdom_cjs.createElement("h2", {
          className: "fc-toolbar-title"
        }, props.title));
      } else {
        var ariaAttrs = buttonIcon ? {
          'aria-label': buttonName
        } : {};
        var buttonClasses = ["fc-" + buttonName + "-button", theme.getClass('button')];

        if (buttonName === props.activeButton) {
          buttonClasses.push(theme.getClass('buttonActive'));
        }

        var isDisabled = !props.isTodayEnabled && buttonName === 'today' || !props.isPrevEnabled && buttonName === 'prev' || !props.isNextEnabled && buttonName === 'next';
        children.push(vdom_cjs.createElement("button", tslib.__assign({
          disabled: isDisabled,
          className: buttonClasses.join(' '),
          onClick: buttonClick,
          type: "button"
        }, ariaAttrs), buttonText || (buttonIcon ? vdom_cjs.createElement("span", {
          className: buttonIcon
        }) : '')));
      }
    }

    if (children.length > 1) {
      var groupClassName = isOnlyButtons && theme.getClass('buttonGroup') || '';
      return vdom_cjs.createElement.apply(void 0, tslib.__spreadArray(['div', {
        className: groupClassName
      }], children));
    }

    return children[0];
  };

  return ToolbarSection;
}(BaseComponent);

var Toolbar =
/** @class */
function (_super) {
  tslib.__extends(Toolbar, _super);

  function Toolbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Toolbar.prototype.render = function () {
    var _a = this.props,
        model = _a.model,
        extraClassName = _a.extraClassName;
    var forceLtr = false;
    var startContent;
    var endContent;
    var centerContent = model.center;

    if (model.left) {
      forceLtr = true;
      startContent = model.left;
    } else {
      startContent = model.start;
    }

    if (model.right) {
      forceLtr = true;
      endContent = model.right;
    } else {
      endContent = model.end;
    }

    var classNames = [extraClassName || '', 'fc-toolbar', forceLtr ? 'fc-toolbar-ltr' : ''];
    return vdom_cjs.createElement("div", {
      className: classNames.join(' ')
    }, this.renderSection('start', startContent || []), this.renderSection('center', centerContent || []), this.renderSection('end', endContent || []));
  };

  Toolbar.prototype.renderSection = function (key, widgetGroups) {
    var props = this.props;
    return vdom_cjs.createElement(ToolbarSection, {
      key: key,
      widgetGroups: widgetGroups,
      title: props.title,
      activeButton: props.activeButton,
      isTodayEnabled: props.isTodayEnabled,
      isPrevEnabled: props.isPrevEnabled,
      isNextEnabled: props.isNextEnabled
    });
  };

  return Toolbar;
}(BaseComponent); // TODO: do function component?


var ViewContainer =
/** @class */
function (_super) {
  tslib.__extends(ViewContainer, _super);

  function ViewContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      availableWidth: null
    };

    _this.handleEl = function (el) {
      _this.el = el;
      setRef(_this.props.elRef, el);

      _this.updateAvailableWidth();
    };

    _this.handleResize = function () {
      _this.updateAvailableWidth();
    };

    return _this;
  }

  ViewContainer.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    var aspectRatio = props.aspectRatio;
    var classNames = ['fc-view-harness', aspectRatio || props.liquid || props.height ? 'fc-view-harness-active' // harness controls the height
    : 'fc-view-harness-passive' // let the view do the height
    ];
    var height = '';
    var paddingBottom = '';

    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        // while waiting to know availableWidth, we can't set height to *zero*
        // because will cause lots of unnecessary scrollbars within scrollgrid.
        // BETTER: don't start rendering ANYTHING yet until we know container width
        // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
        paddingBottom = 1 / aspectRatio * 100 + "%";
      }
    } else {
      height = props.height || '';
    }

    return vdom_cjs.createElement("div", {
      ref: this.handleEl,
      onClick: props.onClick,
      className: classNames.join(' '),
      style: {
        height: height,
        paddingBottom: paddingBottom
      }
    }, props.children);
  };

  ViewContainer.prototype.componentDidMount = function () {
    this.context.addResizeHandler(this.handleResize);
  };

  ViewContainer.prototype.componentWillUnmount = function () {
    this.context.removeResizeHandler(this.handleResize);
  };

  ViewContainer.prototype.updateAvailableWidth = function () {
    if (this.el && // needed. but why?
    this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
    ) {
        this.setState({
          availableWidth: this.el.offsetWidth
        });
      }
  };

  return ViewContainer;
}(BaseComponent);
/*
Detects when the user clicks on an event within a DateComponent
*/


var EventClicking =
/** @class */
function (_super) {
  tslib.__extends(EventClicking, _super);

  function EventClicking(settings) {
    var _this = _super.call(this, settings) || this;

    _this.handleSegClick = function (ev, segEl) {
      var component = _this.component;
      var context = component.context;
      var seg = getElSeg(segEl);

      if (seg && // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        // our way to simulate a link click for elements that can't be <a> tags
        // grab before trigger fired in case trigger trashes DOM thru rerendering
        var hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
        var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
        context.emitter.trigger('eventClick', {
          el: segEl,
          event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });

        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };

    _this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
    _this.handleSegClick);
    return _this;
  }

  return EventClicking;
}(Interaction);
/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/


var EventHovering =
/** @class */
function (_super) {
  tslib.__extends(EventHovering, _super);

  function EventHovering(settings) {
    var _this = _super.call(this, settings) || this; // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it


    _this.handleEventElRemove = function (el) {
      if (el === _this.currentSegEl) {
        _this.handleSegLeave(null, _this.currentSegEl);
      }
    };

    _this.handleSegEnter = function (ev, segEl) {
      if (getElSeg(segEl)) {
        // TODO: better way to make sure not hovering over more+ link or its wrapper
        _this.currentSegEl = segEl;

        _this.triggerEvent('eventMouseEnter', ev, segEl);
      }
    };

    _this.handleSegLeave = function (ev, segEl) {
      if (_this.currentSegEl) {
        _this.currentSegEl = null;

        _this.triggerEvent('eventMouseLeave', ev, segEl);
      }
    };

    _this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
    _this.handleSegEnter, _this.handleSegLeave);
    return _this;
  }

  EventHovering.prototype.destroy = function () {
    this.removeHoverListeners();
  };

  EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
    var component = this.component;
    var context = component.context;
    var seg = getElSeg(segEl);

    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  };

  return EventHovering;
}(Interaction);

var CalendarContent =
/** @class */
function (_super) {
  tslib.__extends(CalendarContent, _super);

  function CalendarContent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildViewContext = memoize(buildViewContext);
    _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
    _this.buildToolbarProps = memoize(buildToolbarProps);
    _this.handleNavLinkClick = buildDelegationHandler('a[data-navlink]', _this._handleNavLinkClick.bind(_this));
    _this.headerRef = vdom_cjs.createRef();
    _this.footerRef = vdom_cjs.createRef();
    _this.interactionsStore = {}; // Component Registration
    // -----------------------------------------------------------------------------------------------------------------

    _this.registerInteractiveComponent = function (component, settingsInput) {
      var settings = parseInteractionSettings(component, settingsInput);
      var DEFAULT_INTERACTIONS = [EventClicking, EventHovering];
      var interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
      var interactions = interactionClasses.map(function (TheInteractionClass) {
        return new TheInteractionClass(settings);
      });
      _this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };

    _this.unregisterInteractiveComponent = function (component) {
      for (var _i = 0, _a = _this.interactionsStore[component.uid]; _i < _a.length; _i++) {
        var listener = _a[_i];
        listener.destroy();
      }

      delete _this.interactionsStore[component.uid];
      delete interactionSettingsStore[component.uid];
    }; // Resizing
    // -----------------------------------------------------------------------------------------------------------------


    _this.resizeRunner = new DelayedRunner(function () {
      _this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?


      _this.props.emitter.trigger('windowResize', {
        view: _this.props.viewApi
      });
    });

    _this.handleWindowResize = function (ev) {
      var options = _this.props.options;

      if (options.handleWindowResize && ev.target === window // avoid jqui events
      ) {
          _this.resizeRunner.request(options.windowResizeDelay);
        }
    };

    return _this;
  }
  /*
  renders INSIDE of an outer div
  */


  CalendarContent.prototype.render = function () {
    var props = this.props;
    var toolbarConfig = props.toolbarConfig,
        options = props.options;
    var toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
    props.viewTitle);
    var viewVGrow = false;
    var viewHeight = '';
    var viewAspectRatio;

    if (props.isHeightAuto || props.forPrint) {
      viewHeight = '';
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
    }

    var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    return vdom_cjs.createElement(ViewContextType.Provider, {
      value: viewContext
    }, toolbarConfig.headerToolbar && vdom_cjs.createElement(Toolbar, tslib.__assign({
      ref: this.headerRef,
      extraClassName: "fc-header-toolbar",
      model: toolbarConfig.headerToolbar
    }, toolbarProps)), vdom_cjs.createElement(ViewContainer, {
      liquid: viewVGrow,
      height: viewHeight,
      aspectRatio: viewAspectRatio,
      onClick: this.handleNavLinkClick
    }, this.renderView(props), this.buildAppendContent()), toolbarConfig.footerToolbar && vdom_cjs.createElement(Toolbar, tslib.__assign({
      ref: this.footerRef,
      extraClassName: "fc-footer-toolbar",
      model: toolbarConfig.footerToolbar
    }, toolbarProps)));
  };

  CalendarContent.prototype.componentDidMount = function () {
    var props = this.props;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map(function (CalendarInteractionClass) {
      return new CalendarInteractionClass(props);
    });
    window.addEventListener('resize', this.handleWindowResize);
    var propSetHandlers = props.pluginHooks.propSetHandlers;

    for (var propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  };

  CalendarContent.prototype.componentDidUpdate = function (prevProps) {
    var props = this.props;
    var propSetHandlers = props.pluginHooks.propSetHandlers;

    for (var propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  };

  CalendarContent.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.handleWindowResize);
    this.resizeRunner.clear();

    for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
      var interaction = _a[_i];
      interaction.destroy();
    }

    this.props.emitter.trigger('_unmount');
  };

  CalendarContent.prototype._handleNavLinkClick = function (ev, anchorEl) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        options = _a.options,
        calendarApi = _a.calendarApi;
    var navLinkOptions = anchorEl.getAttribute('data-navlink');
    navLinkOptions = navLinkOptions ? JSON.parse(navLinkOptions) : {};
    var dateMarker = dateEnv.createMarker(navLinkOptions.date);
    var viewType = navLinkOptions.type;
    var customAction = viewType === 'day' ? options.navLinkDayClick : viewType === 'week' ? options.navLinkWeekClick : null;

    if (typeof customAction === 'function') {
      customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
    } else {
      if (typeof customAction === 'string') {
        viewType = customAction;
      }

      calendarApi.zoomTo(dateMarker, viewType);
    }
  };

  CalendarContent.prototype.buildAppendContent = function () {
    var props = this.props;
    var children = props.pluginHooks.viewContainerAppends.map(function (buildAppendContent) {
      return buildAppendContent(props);
    });
    return vdom_cjs.createElement.apply(void 0, tslib.__spreadArray([vdom_cjs.Fragment, {}], children));
  };

  CalendarContent.prototype.renderView = function (props) {
    var pluginHooks = props.pluginHooks;
    var viewSpec = props.viewSpec;
    var viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);

    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
      var transformer = transformers_1[_i];

      tslib.__assign(viewProps, transformer.transform(viewProps, props));
    }

    var ViewComponent = viewSpec.component;
    return vdom_cjs.createElement(ViewComponent, tslib.__assign({}, viewProps));
  };

  return CalendarContent;
}(PureComponent);

function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
  var todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason

  var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title: title,
    activeButton: viewSpec.type,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
} // Plugin
// -----------------------------------------------------------------------------------------------------------------


function buildViewPropTransformers(theClasses) {
  return theClasses.map(function (TheClass) {
    return new TheClass();
  });
}

var CalendarRoot =
/** @class */
function (_super) {
  tslib.__extends(CalendarRoot, _super);

  function CalendarRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      forPrint: false
    };

    _this.handleBeforePrint = function () {
      _this.setState({
        forPrint: true
      });
    };

    _this.handleAfterPrint = function () {
      _this.setState({
        forPrint: false
      });
    };

    return _this;
  }

  CalendarRoot.prototype.render = function () {
    var props = this.props;
    var options = props.options;
    var forPrint = this.state.forPrint;
    var isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
    var height = !isHeightAuto && options.height != null ? options.height : '';
    var classNames = ['fc', forPrint ? 'fc-media-print' : 'fc-media-screen', "fc-direction-" + options.direction, props.theme.getClass('root')];

    if (!getCanVGrowWithinCell()) {
      classNames.push('fc-liquid-hack');
    }

    return props.children(classNames, height, isHeightAuto, forPrint);
  };

  CalendarRoot.prototype.componentDidMount = function () {
    var emitter = this.props.emitter;
    emitter.on('_beforeprint', this.handleBeforePrint);
    emitter.on('_afterprint', this.handleAfterPrint);
  };

  CalendarRoot.prototype.componentWillUnmount = function () {
    var emitter = this.props.emitter;
    emitter.off('_beforeprint', this.handleBeforePrint);
    emitter.off('_afterprint', this.handleAfterPrint);
  };

  return CalendarRoot;
}(BaseComponent); // Computes a default column header formatting string if `colFormat` is not explicitly defined


function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  // if more than one week row, or if there are a lot of columns with not much space,
  // put just the day numbers will be in each cell
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({
      weekday: 'short'
    }); // "Sat"
  }

  if (dayCnt > 1) {
    return createFormatter({
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      omitCommas: true
    }); // "Sat 11/12"
  }

  return createFormatter({
    weekday: 'long'
  }); // "Saturday"
}

var CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no

function renderInner$1(hookProps) {
  return hookProps.text;
}

var TableDateCell =
/** @class */
function (_super) {
  tslib.__extends(TableDateCell, _super);

  function TableDateCell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableDateCell.prototype.render = function () {
    var _a = this.context,
        dateEnv = _a.dateEnv,
        options = _a.options,
        theme = _a.theme,
        viewApi = _a.viewApi;
    var props = this.props;
    var date = props.date,
        dateProfile = props.dateProfile;
    var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    var classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    var text = dateEnv.format(date, props.dayHeaderFormat); // if colCnt is 1, we are already in a day-view and don't need a navlink

    var navLinkAttrs = options.navLinks && !dayMeta.isDisabled && props.colCnt > 1 ? {
      'data-navlink': buildNavLinkData(date),
      tabIndex: 0
    } : {};

    var hookProps = tslib.__assign(tslib.__assign(tslib.__assign({
      date: dateEnv.toDate(date),
      view: viewApi
    }, props.extraHookProps), {
      text: text
    }), dayMeta);

    return vdom_cjs.createElement(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner$1,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return vdom_cjs.createElement("th", tslib.__assign({
        ref: rootElRef,
        className: classNames.concat(customClassNames).join(' '),
        "data-date": !dayMeta.isDisabled ? formatDayString(date) : undefined,
        colSpan: props.colSpan
      }, props.extraDataAttrs), vdom_cjs.createElement("div", {
        className: "fc-scrollgrid-sync-inner"
      }, !dayMeta.isDisabled && vdom_cjs.createElement("a", tslib.__assign({
        ref: innerElRef,
        className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' ')
      }, navLinkAttrs), innerContent)));
    });
  };

  return TableDateCell;
}(BaseComponent);

var TableDowCell =
/** @class */
function (_super) {
  tslib.__extends(TableDowCell, _super);

  function TableDowCell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableDowCell.prototype.render = function () {
    var props = this.props;
    var _a = this.context,
        dateEnv = _a.dateEnv,
        theme = _a.theme,
        viewApi = _a.viewApi,
        options = _a.options;
    var date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT

    var dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    var classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
    var text = dateEnv.format(date, props.dayHeaderFormat);

    var hookProps = tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({
      // TODO: make this public?
      date: date
    }, dateMeta), {
      view: viewApi
    }), props.extraHookProps), {
      text: text
    });

    return vdom_cjs.createElement(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner$1,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return vdom_cjs.createElement("th", tslib.__assign({
        ref: rootElRef,
        className: classNames.concat(customClassNames).join(' '),
        colSpan: props.colSpan
      }, props.extraDataAttrs), vdom_cjs.createElement("div", {
        className: "fc-scrollgrid-sync-inner"
      }, vdom_cjs.createElement("a", {
        className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' '),
        ref: innerElRef
      }, innerContent)));
    });
  };

  return TableDowCell;
}(BaseComponent);

var NowTimer =
/** @class */
function (_super) {
  tslib.__extends(NowTimer, _super);

  function NowTimer(props, context) {
    var _this = _super.call(this, props, context) || this;

    _this.initialNowDate = getNow(context.options.now, context.dateEnv);
    _this.initialNowQueriedMs = new Date().valueOf();
    _this.state = _this.computeTiming().currentState;
    return _this;
  }

  NowTimer.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    return props.children(state.nowDate, state.todayRange);
  };

  NowTimer.prototype.componentDidMount = function () {
    this.setTimeout();
  };

  NowTimer.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.unit !== this.props.unit) {
      this.clearTimeout();
      this.setTimeout();
    }
  };

  NowTimer.prototype.componentWillUnmount = function () {
    this.clearTimeout();
  };

  NowTimer.prototype.computeTiming = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
    var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
    var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
    var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf(); // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
    // ensure no longer than a day

    waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
    return {
      currentState: {
        nowDate: currentUnitStart,
        todayRange: buildDayRange(currentUnitStart)
      },
      nextState: {
        nowDate: nextUnitStart,
        todayRange: buildDayRange(nextUnitStart)
      },
      waitMs: waitMs
    };
  };

  NowTimer.prototype.setTimeout = function () {
    var _this = this;

    var _a = this.computeTiming(),
        nextState = _a.nextState,
        waitMs = _a.waitMs;

    this.timeoutId = setTimeout(function () {
      _this.setState(nextState, function () {
        _this.setTimeout();
      });
    }, waitMs);
  };

  NowTimer.prototype.clearTimeout = function () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  };

  NowTimer.contextType = ViewContextType;
  return NowTimer;
}(vdom_cjs.Component);

function buildDayRange(date) {
  var start = startOfDay(date);
  var end = addDays(start, 1);
  return {
    start: start,
    end: end
  };
}

var DayHeader =
/** @class */
function (_super) {
  tslib.__extends(DayHeader, _super);

  function DayHeader() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
    return _this;
  }

  DayHeader.prototype.render = function () {
    var context = this.context;
    var _a = this.props,
        dates = _a.dates,
        dateProfile = _a.dateProfile,
        datesRepDistinctDays = _a.datesRepDistinctDays,
        renderIntro = _a.renderIntro;
    var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return vdom_cjs.createElement(NowTimer, {
      unit: "day"
    }, function (nowDate, todayRange) {
      return vdom_cjs.createElement("tr", null, renderIntro && renderIntro('day'), dates.map(function (date) {
        return datesRepDistinctDays ? vdom_cjs.createElement(TableDateCell, {
          key: date.toISOString(),
          date: date,
          dateProfile: dateProfile,
          todayRange: todayRange,
          colCnt: dates.length,
          dayHeaderFormat: dayHeaderFormat
        }) : vdom_cjs.createElement(TableDowCell, {
          key: date.getUTCDay(),
          dow: date.getUTCDay(),
          dayHeaderFormat: dayHeaderFormat
        });
      }));
    });
  };

  return DayHeader;
}(BaseComponent);

function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}

var DaySeriesModel =
/** @class */
function () {
  function DaySeriesModel(range, dateProfileGenerator) {
    var date = range.start;
    var end = range.end;
    var indices = [];
    var dates = [];
    var dayIndex = -1;

    while (date < end) {
      // loop each day from start to end
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5); // mark that it's between indices
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }

      date = addDays(date, 1);
    }

    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }

  DaySeriesModel.prototype.sliceRange = function (range) {
    var firstIndex = this.getDateDayIndex(range.start); // inclusive first index

    var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index

    var clippedFirstIndex = Math.max(0, firstIndex);
    var clippedLastIndex = Math.min(this.cnt - 1, lastIndex); // deal with in-between indices

    clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell

    clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell

    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    }

    return null;
  }; // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.


  DaySeriesModel.prototype.getDateDayIndex = function (date) {
    var indices = this.indices;
    var dayOffset = Math.floor(diffDays(this.dates[0], date));

    if (dayOffset < 0) {
      return indices[0] - 1;
    }

    if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    }

    return indices[dayOffset];
  };

  return DaySeriesModel;
}();

var DayTableModel =
/** @class */
function () {
  function DayTableModel(daySeries, breakOnWeeks) {
    var dates = daySeries.dates;
    var daysPerRow;
    var firstDay;
    var rowCnt;

    if (breakOnWeeks) {
      // count columns until the day-of-week repeats
      firstDay = dates[0].getUTCDay();

      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }

      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }

    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }

  DayTableModel.prototype.buildCells = function () {
    var rows = [];

    for (var row = 0; row < this.rowCnt; row += 1) {
      var cells = [];

      for (var col = 0; col < this.colCnt; col += 1) {
        cells.push(this.buildCell(row, col));
      }

      rows.push(cells);
    }

    return rows;
  };

  DayTableModel.prototype.buildCell = function (row, col) {
    var date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date: date
    };
  };

  DayTableModel.prototype.buildHeaderDates = function () {
    var dates = [];

    for (var col = 0; col < this.colCnt; col += 1) {
      dates.push(this.cells[0][col].date);
    }

    return dates;
  };

  DayTableModel.prototype.sliceRange = function (range) {
    var colCnt = this.colCnt;
    var seriesSeg = this.daySeries.sliceRange(range);
    var segs = [];

    if (seriesSeg) {
      var firstIndex = seriesSeg.firstIndex,
          lastIndex = seriesSeg.lastIndex;
      var index = firstIndex;

      while (index <= lastIndex) {
        var row = Math.floor(index / colCnt);
        var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row: row,
          firstCol: index % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index = nextIndex;
      }
    }

    return segs;
  };

  return DayTableModel;
}();

var Slicer =
/** @class */
function () {
  function Slicer() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false; // hack
  }

  Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    var eventUiBases = props.eventUiBases;
    var eventSegs = this.sliceEventStore.apply(this, tslib.__spreadArray([props.eventStore, eventUiBases, dateProfile, nextDayThreshold], extraArgs));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, tslib.__spreadArray([props.dateSelection, eventUiBases, context], extraArgs)),
      businessHourSegs: this.sliceBusinessHours.apply(this, tslib.__spreadArray([props.businessHours, dateProfile, nextDayThreshold, context], extraArgs)),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag.apply(this, tslib.__spreadArray([props.eventDrag, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventResize: this.sliceEventResize.apply(this, tslib.__spreadArray([props.eventResize, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventSelection: props.eventSelection
    }; // TODO: give interactionSegs?
  };

  Slicer.prototype.sliceNowDate = function ( // does not memoize
  date, context) {
    var extraArgs = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      extraArgs[_i - 2] = arguments[_i];
    }

    return this._sliceDateSpan.apply(this, tslib.__spreadArray([{
      range: {
        start: date,
        end: addMs(date, 1)
      },
      allDay: false
    }, {}, context], extraArgs));
  };

  Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (!businessHours) {
      return [];
    }

    return this._sliceEventStore.apply(this, tslib.__spreadArray([expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold], extraArgs)).bg;
  };

  Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (eventStore) {
      var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }

    return {
      bg: [],
      fg: []
    };
  };

  Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (!interaction) {
      return null;
    }

    var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  };

  Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, context) {
    var extraArgs = [];

    for (var _i = 3; _i < arguments.length; _i++) {
      extraArgs[_i - 3] = arguments[_i];
    }

    if (!dateSpan) {
      return [];
    }

    var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
    var segs = this.sliceRange.apply(this, tslib.__spreadArray([dateSpan.range], extraArgs));

    for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
      var seg = segs_1[_a];
      seg.eventRange = eventRange;
    }

    return segs;
  };
  /*
  "complete" seg means it has component and eventRange
  */


  Slicer.prototype.sliceEventRanges = function (eventRanges, extraArgs) {
    var segs = [];

    for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
      var eventRange = eventRanges_1[_i];
      segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
    }

    return segs;
  };
  /*
  "complete" seg means it has component and eventRange
  */


  Slicer.prototype.sliceEventRange = function (eventRange, extraArgs) {
    var dateRange = eventRange.range; // hack to make multi-day events that are being force-displayed as list-items to take up only one day

    if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }

    var segs = this.sliceRange.apply(this, tslib.__spreadArray([dateRange], extraArgs));

    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
      var seg = segs_2[_i];
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }

    return segs;
  };

  return Slicer;
}();
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/


function computeActiveRange(dateProfile, isComponentAllDay) {
  var range = dateProfile.activeRange;

  if (isComponentAllDay) {
    return range;
  }

  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5) // 864e5 = ms in a day

  };
} // high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionValid(interaction, dateProfile, context) {
  var instances = interaction.mutatedEvents.instances;

  for (var instanceId in instances) {
    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
      return false;
    }
  }

  return isNewPropsValid({
    eventDrag: interaction
  }, context); // HACK: the eventDrag props is used for ALL interactions
}

function isDateSelectionValid(dateSelection, dateProfile, context) {
  if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
    return false;
  }

  return isNewPropsValid({
    dateSelection: dateSelection
  }, context);
}

function isNewPropsValid(newProps, context) {
  var calendarState = context.getCurrentData();

  var props = tslib.__assign({
    businessHours: calendarState.businessHours,
    dateSelection: '',
    eventStore: calendarState.eventStore,
    eventUiBases: calendarState.eventUiBases,
    eventSelection: '',
    eventDrag: null,
    eventResize: null
  }, newProps);

  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}

function isPropsValid(state, context, dateSpanMeta, filterConfig) {
  if (dateSpanMeta === void 0) {
    dateSpanMeta = {};
  }

  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  return true;
} // Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var currentState = context.getCurrentData();
  var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions

  var subjectEventStore = interaction.mutatedEvents;
  var subjectDefs = subjectEventStore.defs;
  var subjectInstances = subjectEventStore.instances;
  var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : {
    '': currentState.selectionConfig
  });

  if (filterConfig) {
    subjectConfigs = mapHash(subjectConfigs, filterConfig);
  } // exclude the subject events. TODO: exclude defs too?


  var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
  var otherDefs = otherEventStore.defs;
  var otherInstances = otherEventStore.instances;
  var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);

  for (var subjectInstanceId in subjectInstances) {
    var subjectInstance = subjectInstances[subjectInstanceId];
    var subjectRange = subjectInstance.range;
    var subjectConfig = subjectConfigs[subjectInstance.defId];
    var subjectDef = subjectDefs[subjectInstance.defId]; // constraint

    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    } // overlap


    var eventOverlap = context.options.eventOverlap;
    var eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;

    for (var otherInstanceId in otherInstances) {
      var otherInstance = otherInstances[otherInstanceId]; // intersect! evaluate

      if (rangesIntersect(subjectRange, otherInstance.range)) {
        var otherOverlap = otherConfigs[otherInstance.defId].overlap; // consider the other event's overlap. only do this if the subject event is a "real" event

        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }

        if (subjectConfig.overlap === false) {
          return false;
        }

        if (eventOverlapFunc && !eventOverlapFunc(new EventApi(context, otherDefs[otherInstance.defId], otherInstance), // still event
        new EventApi(context, subjectDef, subjectInstance))) {
          return false;
        }
      }
    } // allow (a function)


    var calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state

    for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
      var subjectAllow = _a[_i];

      var subjectDateSpan = tslib.__assign(tslib.__assign({}, dateSpanMeta), {
        range: subjectInstance.range,
        allDay: subjectDef.allDay
      });

      var origDef = calendarEventStore.defs[subjectDef.defId];
      var origInstance = calendarEventStore.instances[subjectInstanceId];
      var eventApi = void 0;

      if (origDef) {
        // was previously in the calendar
        eventApi = new EventApi(context, origDef, origInstance);
      } else {
        // was an external event
        eventApi = new EventApi(context, subjectDef); // no instance, because had no dates
      }

      if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
        return false;
      }
    }
  }

  return true;
} // Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------


function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var relevantEventStore = state.eventStore;
  var relevantDefs = relevantEventStore.defs;
  var relevantInstances = relevantEventStore.instances;
  var selection = state.dateSelection;
  var selectionRange = selection.range;
  var selectionConfig = context.getCurrentData().selectionConfig;

  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  } // constraint


  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  } // overlap


  var selectOverlap = context.options.selectOverlap;
  var selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;

  for (var relevantInstanceId in relevantInstances) {
    var relevantInstance = relevantInstances[relevantInstanceId]; // intersect! evaluate

    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }

      if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  } // allow (a function)


  for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
    var selectionAllow = _a[_i];

    var fullDateSpan = tslib.__assign(tslib.__assign({}, dateSpanMeta), selection);

    if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
      return false;
    }
  }

  return true;
} // Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------


function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
    var constraint = constraints_1[_i];

    if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
      return false;
    }
  }

  return true;
}

function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
otherEventStore, // for if constraint is an even group ID
businessHoursUnexpanded, // for if constraint is 'businessHours'
context) {
  if (constraint === 'businessHours') {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  }

  if (typeof constraint === 'string') {
    // an group ID
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
      return eventDef.groupId === constraint;
    }));
  }

  if (typeof constraint === 'object' && constraint) {
    // non-null object
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }

  return []; // if it's false
} // TODO: move to event-store file?


function eventStoreToRanges(eventStore) {
  var instances = eventStore.instances;
  var ranges = [];

  for (var instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }

  return ranges;
} // TODO: move to geom file?


function anyRangesContainRange(outerRanges, innerRange) {
  for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
    var outerRange = outerRanges_1[_i];

    if (rangeContainsRange(outerRange, innerRange)) {
      return true;
    }
  }

  return false;
}

var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;

var Scroller =
/** @class */
function (_super) {
  tslib.__extends(Scroller, _super);

  function Scroller() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleEl = function (el) {
      _this.el = el;
      setRef(_this.props.elRef, el);
    };

    return _this;
  }

  Scroller.prototype.render = function () {
    var props = this.props;
    var liquid = props.liquid,
        liquidIsAbsolute = props.liquidIsAbsolute;
    var isAbsolute = liquid && liquidIsAbsolute;
    var className = ['fc-scroller'];

    if (liquid) {
      if (liquidIsAbsolute) {
        className.push('fc-scroller-liquid-absolute');
      } else {
        className.push('fc-scroller-liquid');
      }
    }

    return vdom_cjs.createElement("div", {
      ref: this.handleEl,
      className: className.join(' '),
      style: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        left: isAbsolute && -(props.overcomeLeft || 0) || '',
        right: isAbsolute && -(props.overcomeRight || 0) || '',
        bottom: isAbsolute && -(props.overcomeBottom || 0) || '',
        marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || '',
        marginRight: !isAbsolute && -(props.overcomeRight || 0) || '',
        marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || '',
        maxHeight: props.maxHeight || ''
      }
    }, props.children);
  };

  Scroller.prototype.needsXScrolling = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    } // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    var el = this.el;
    var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    var children = el.children;

    for (var i = 0; i < children.length; i += 1) {
      var childEl = children[i];

      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }

    return false;
  };

  Scroller.prototype.needsYScrolling = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    } // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    var el = this.el;
    var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    var children = el.children;

    for (var i = 0; i < children.length; i += 1) {
      var childEl = children[i];

      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }

    return false;
  };

  Scroller.prototype.getXScrollbarWidth = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    }

    return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
  };

  Scroller.prototype.getYScrollbarWidth = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    }

    return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
  };

  return Scroller;
}(BaseComponent);
/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/


var RefMap =
/** @class */
function () {
  function RefMap(masterCallback) {
    var _this = this;

    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};

    this.handleValue = function (val, key) {
      var _a = _this,
          depths = _a.depths,
          currentMap = _a.currentMap;
      var removed = false;
      var added = false;

      if (val !== null) {
        // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;

        if (!depths[key]) {
          delete currentMap[key];
          delete _this.callbackMap[key];
          removed = true;
        }
      }

      if (_this.masterCallback) {
        if (removed) {
          _this.masterCallback(null, String(key));
        }

        if (added) {
          _this.masterCallback(val, String(key));
        }
      }
    };
  }

  RefMap.prototype.createRef = function (key) {
    var _this = this;

    var refCallback = this.callbackMap[key];

    if (!refCallback) {
      refCallback = this.callbackMap[key] = function (val) {
        _this.handleValue(val, String(key));
      };
    }

    return refCallback;
  }; // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"


  RefMap.prototype.collect = function (startIndex, endIndex, step) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step);
  };

  RefMap.prototype.getAll = function () {
    return hashValuesToArray(this.currentMap);
  };

  return RefMap;
}();

function computeShrinkWidth(chunkEls) {
  var shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
  var largestWidth = 0;

  for (var _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++) {
    var shrinkCell = shrinkCells_1[_i];
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }

  return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}

function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}

function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
} // TODO: ONLY use `arg`. force out internal function to use same API


function renderChunkContent(sectionConfig, chunkConfig, arg) {
  var expandRows = arg.expandRows;
  var content = typeof chunkConfig.content === 'function' ? chunkConfig.content(arg) : vdom_cjs.createElement('table', {
    className: [chunkConfig.tableClassName, sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(' '),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : '' // css `height` on a <table> serves as a min-height

    }
  }, arg.tableColGroupNode, vdom_cjs.createElement('tbody', {}, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}

function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}

function renderMicroColGroup(cols, shrinkWidth) {
  var colNodes = [];
  /*
  for ColProps with spans, it would have been great to make a single <col span="">
  HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
  SOLUTION: making individual <col> elements makes Chrome behave.
  */

  for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
    var colProps = cols_1[_i];
    var span = colProps.span || 1;

    for (var i = 0; i < span; i += 1) {
      colNodes.push(vdom_cjs.createElement("col", {
        style: {
          width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || '',
          minWidth: colProps.minWidth || ''
        }
      }));
    }
  }

  return vdom_cjs.createElement.apply(void 0, tslib.__spreadArray(['colgroup', {}], colNodes));
}

function sanitizeShrinkWidth(shrinkWidth) {
  /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
  4 accounts for 2 2-pixel borders. TODO: better solution? */
  return shrinkWidth == null ? 4 : shrinkWidth;
}

function hasShrinkWidth(cols) {
  for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
    var col = cols_2[_i];

    if (col.width === 'shrink') {
      return true;
    }
  }

  return false;
}

function getScrollGridClassNames(liquid, context) {
  var classNames = ['fc-scrollgrid', context.theme.getClass('table')];

  if (liquid) {
    classNames.push('fc-scrollgrid-liquid');
  }

  return classNames;
}

function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  var classNames = ['fc-scrollgrid-section', "fc-scrollgrid-section-" + sectionConfig.type, sectionConfig.className // used?
  ];

  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push('fc-scrollgrid-section-liquid');
  }

  if (sectionConfig.isSticky) {
    classNames.push('fc-scrollgrid-section-sticky');
  }

  return classNames;
}

function renderScrollShim(arg) {
  return vdom_cjs.createElement("div", {
    className: "fc-scrollgrid-sticky-shim",
    style: {
      width: arg.clientWidth,
      minWidth: arg.tableMinWidth
    }
  });
}

function getStickyHeaderDates(options) {
  var stickyHeaderDates = options.stickyHeaderDates;

  if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
    stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyHeaderDates;
}

function getStickyFooterScrollbar(options) {
  var stickyFooterScrollbar = options.stickyFooterScrollbar;

  if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
    stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyFooterScrollbar;
}

var SimpleScrollGrid =
/** @class */
function (_super) {
  tslib.__extends(SimpleScrollGrid, _super);

  function SimpleScrollGrid() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.processCols = memoize(function (a) {
      return a;
    }, isColPropsEqual); // so we get same `cols` props every time
    // yucky to memoize VNodes, but much more efficient for consumers

    _this.renderMicroColGroup = memoize(renderMicroColGroup);
    _this.scrollerRefs = new RefMap();
    _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
    _this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }; // TODO: can do a really simple print-view. dont need to join rows

    _this.handleSizing = function () {
      _this.setState(tslib.__assign({
        shrinkWidth: _this.computeShrinkWidth()
      }, _this.computeScrollerDims()));
    };

    return _this;
  }

  SimpleScrollGrid.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state,
        context = _a.context;

    var sectionConfigs = props.sections || [];
    var cols = this.processCols(props.cols);
    var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    var classNames = getScrollGridClassNames(props.liquid, context);

    if (props.collapsibleWidth) {
      classNames.push('fc-scrollgrid-collapsible');
    } // TODO: make DRY


    var configCnt = sectionConfigs.length;
    var configI = 0;
    var currentConfig;
    var headSectionNodes = [];
    var bodySectionNodes = [];
    var footSectionNodes = [];

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
      headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode));
      configI += 1;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
      bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode));
      configI += 1;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
      footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode));
      configI += 1;
    } // firefox bug: when setting height on table and there is a thead or tfoot,
    // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
    // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
    // if so, use a simpler dom structure, jam everything into a lone tbody.


    var isBuggy = !getCanVGrowWithinCell();
    return vdom_cjs.createElement('table', {
      className: classNames.join(' '),
      style: {
        height: props.height
      }
    }, Boolean(!isBuggy && headSectionNodes.length) && vdom_cjs.createElement.apply(void 0, tslib.__spreadArray(['thead', {}], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && vdom_cjs.createElement.apply(void 0, tslib.__spreadArray(['tbody', {}], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && vdom_cjs.createElement.apply(void 0, tslib.__spreadArray(['tfoot', {}], footSectionNodes)), isBuggy && vdom_cjs.createElement.apply(void 0, tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray(['tbody', {}], headSectionNodes), bodySectionNodes), footSectionNodes)));
  };

  SimpleScrollGrid.prototype.renderSection = function (sectionConfig, microColGroupNode) {
    if ('outerContent' in sectionConfig) {
      return vdom_cjs.createElement(vdom_cjs.Fragment, {
        key: sectionConfig.key
      }, sectionConfig.outerContent);
    }

    return vdom_cjs.createElement("tr", {
      key: sectionConfig.key,
      className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ')
    }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk));
  };

  SimpleScrollGrid.prototype.renderChunkTd = function (sectionConfig, microColGroupNode, chunkConfig) {
    if ('outerContent' in chunkConfig) {
      return chunkConfig.outerContent;
    }

    var props = this.props;
    var _a = this.state,
        forceYScrollbars = _a.forceYScrollbars,
        scrollerClientWidths = _a.scrollerClientWidths,
        scrollerClientHeights = _a.scrollerClientHeights;
    var needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?

    var isLiquid = getSectionHasLiquidHeight(props, sectionConfig); // for `!props.liquid` - is WHOLE scrollgrid natural height?
    // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars

    var overflowY = !props.liquid ? 'visible' : forceYScrollbars ? 'scroll' : !needsYScrolling ? 'hidden' : 'auto';
    var sectionKey = sectionConfig.key;
    var content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: '',
      clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined ? scrollerClientWidths[sectionKey] : null,
      clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: function () {}
    });
    return vdom_cjs.createElement("td", {
      ref: chunkConfig.elRef
    }, vdom_cjs.createElement("div", {
      className: "fc-scroller-harness" + (isLiquid ? ' fc-scroller-harness-liquid' : '')
    }, vdom_cjs.createElement(Scroller, {
      ref: this.scrollerRefs.createRef(sectionKey),
      elRef: this.scrollerElRefs.createRef(sectionKey),
      overflowY: overflowY,
      overflowX: !props.liquid ? 'visible' : 'hidden'
      /* natural height? */
      ,
      maxHeight: sectionConfig.maxHeight,
      liquid: isLiquid,
      liquidIsAbsolute // because its within a harness
      : true
    }, content)));
  };

  SimpleScrollGrid.prototype._handleScrollerEl = function (scrollerEl, key) {
    var section = getSectionByKey(this.props.sections, key);

    if (section) {
      setRef(section.chunk.scrollerElRef, scrollerEl);
    }
  };

  SimpleScrollGrid.prototype.componentDidMount = function () {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  };

  SimpleScrollGrid.prototype.componentDidUpdate = function () {
    // TODO: need better solution when state contains non-sizing things
    this.handleSizing();
  };

  SimpleScrollGrid.prototype.componentWillUnmount = function () {
    this.context.removeResizeHandler(this.handleSizing);
  };

  SimpleScrollGrid.prototype.computeShrinkWidth = function () {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  };

  SimpleScrollGrid.prototype.computeScrollerDims = function () {
    var scrollbarWidth = getScrollbarWidths();

    var _a = this,
        scrollerRefs = _a.scrollerRefs,
        scrollerElRefs = _a.scrollerElRefs;

    var forceYScrollbars = false;
    var scrollerClientWidths = {};
    var scrollerClientHeights = {};

    for (var sectionKey in scrollerRefs.currentMap) {
      var scroller = scrollerRefs.currentMap[sectionKey];

      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }

    for (var _i = 0, _b = this.props.sections; _i < _b.length; _i++) {
      var section = _b[_i];
      var sectionKey = section.key;
      var scrollerEl = scrollerElRefs.currentMap[sectionKey];

      if (scrollerEl) {
        var harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders

        scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
        : 0));
        scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
      }
    }

    return {
      forceYScrollbars: forceYScrollbars,
      scrollerClientWidths: scrollerClientWidths,
      scrollerClientHeights: scrollerClientHeights
    };
  };

  return SimpleScrollGrid;
}(BaseComponent);

SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});

function getSectionByKey(sections, key) {
  for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
    var section = sections_1[_i];

    if (section.key === key) {
      return section;
    }
  }

  return null;
}

var EventRoot =
/** @class */
function (_super) {
  tslib.__extends(EventRoot, _super);

  function EventRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.elRef = vdom_cjs.createRef();
    return _this;
  }

  EventRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var seg = props.seg;
    var eventRange = seg.eventRange;
    var ui = eventRange.ui;
    var hookProps = {
      event: new EventApi(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    var standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
    return vdom_cjs.createElement(RenderHook, {
      hookProps: hookProps,
      classNames: options.eventClassNames,
      content: options.eventContent,
      defaultContent: props.defaultContent,
      didMount: options.eventDidMount,
      willUnmount: options.eventWillUnmount,
      elRef: this.elRef
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps);
    });
  };

  EventRoot.prototype.componentDidMount = function () {
    setElSeg(this.elRef.current, this.props.seg);
  };
  /*
  need to re-assign seg to the element if seg changes, even if the element is the same
  */


  EventRoot.prototype.componentDidUpdate = function (prevProps) {
    var seg = this.props.seg;

    if (seg !== prevProps.seg) {
      setElSeg(this.elRef.current, seg);
    }
  };

  return EventRoot;
}(BaseComponent); // should not be a purecomponent


var StandardEvent =
/** @class */
function (_super) {
  tslib.__extends(StandardEvent, _super);

  function StandardEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  StandardEvent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var seg = props.seg;
    var timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
    var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return vdom_cjs.createElement(EventRoot, {
      seg: seg,
      timeText: timeText,
      disableDragging: props.disableDragging,
      disableResizing: props.disableResizing,
      defaultContent: props.defaultContent || renderInnerContent$1,
      isDragging: props.isDragging,
      isResizing: props.isResizing,
      isDateSelecting: props.isDateSelecting,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) {
      return vdom_cjs.createElement("a", tslib.__assign({
        className: props.extraClassNames.concat(classNames).join(' '),
        style: {
          borderColor: hookProps.borderColor,
          backgroundColor: hookProps.backgroundColor
        },
        ref: rootElRef
      }, getSegAnchorAttrs(seg)), vdom_cjs.createElement("div", {
        className: "fc-event-main",
        ref: innerElRef,
        style: {
          color: hookProps.textColor
        }
      }, innerContent), hookProps.isStartResizable && vdom_cjs.createElement("div", {
        className: "fc-event-resizer fc-event-resizer-start"
      }), hookProps.isEndResizable && vdom_cjs.createElement("div", {
        className: "fc-event-resizer fc-event-resizer-end"
      }));
    });
  };

  return StandardEvent;
}(BaseComponent);

function renderInnerContent$1(innerProps) {
  return vdom_cjs.createElement("div", {
    className: "fc-event-main-frame"
  }, innerProps.timeText && vdom_cjs.createElement("div", {
    className: "fc-event-time"
  }, innerProps.timeText), vdom_cjs.createElement("div", {
    className: "fc-event-title-container"
  }, vdom_cjs.createElement("div", {
    className: "fc-event-title fc-sticky"
  }, innerProps.event.title || vdom_cjs.createElement(vdom_cjs.Fragment, null, "\u00A0"))));
}

function getSegAnchorAttrs(seg) {
  var url = seg.eventRange.def.url;
  return url ? {
    href: url
  } : {};
}

var NowIndicatorRoot = function (props) {
  return vdom_cjs.createElement(ViewContextType.Consumer, null, function (context) {
    var options = context.options;
    var hookProps = {
      isAxis: props.isAxis,
      date: context.dateEnv.toDate(props.date),
      view: context.viewApi
    };
    return vdom_cjs.createElement(RenderHook, {
      hookProps: hookProps,
      classNames: options.nowIndicatorClassNames,
      content: options.nowIndicatorContent,
      didMount: options.nowIndicatorDidMount,
      willUnmount: options.nowIndicatorWillUnmount
    }, props.children);
  });
};

var DAY_NUM_FORMAT = createFormatter({
  day: 'numeric'
});

var DayCellContent =
/** @class */
function (_super) {
  tslib.__extends(DayCellContent, _super);

  function DayCellContent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DayCellContent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = refineDayCellHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    return vdom_cjs.createElement(ContentHook, {
      hookProps: hookProps,
      content: options.dayCellContent,
      defaultContent: props.defaultContent
    }, props.children);
  };

  return DayCellContent;
}(BaseComponent);

function refineDayCellHookProps(raw) {
  var date = raw.date,
      dateEnv = raw.dateEnv;
  var dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
  return tslib.__assign(tslib.__assign(tslib.__assign({
    date: dateEnv.toDate(date),
    view: raw.viewApi
  }, dayMeta), {
    dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : ''
  }), raw.extraProps);
}

var DayCellRoot =
/** @class */
function (_super) {
  tslib.__extends(DayCellRoot, _super);

  function DayCellRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }

  DayCellRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = this.refineHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    var classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled ? [] // don't use custom classNames if disabled
    : this.normalizeClassNames(options.dayCellClassNames, hookProps));
    var dataAttrs = hookProps.isDisabled ? {} : {
      'data-date': formatDayString(props.date)
    };
    return vdom_cjs.createElement(MountHook, {
      hookProps: hookProps,
      didMount: options.dayCellDidMount,
      willUnmount: options.dayCellWillUnmount,
      elRef: props.elRef
    }, function (rootElRef) {
      return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled);
    });
  };

  return DayCellRoot;
}(BaseComponent);

function renderFill(fillType) {
  return vdom_cjs.createElement("div", {
    className: "fc-" + fillType
  });
}

var BgEvent = function (props) {
  return vdom_cjs.createElement(EventRoot, {
    defaultContent: renderInnerContent,
    seg: props.seg
    /* uselesss i think */
    ,
    timeText: "",
    disableDragging: true,
    disableResizing: true,
    isDragging: false,
    isResizing: false,
    isDateSelecting: false,
    isSelected: false,
    isPast: props.isPast,
    isFuture: props.isFuture,
    isToday: props.isToday
  }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) {
    return vdom_cjs.createElement("div", {
      ref: rootElRef,
      className: ['fc-bg-event'].concat(classNames).join(' '),
      style: {
        backgroundColor: hookProps.backgroundColor
      }
    }, innerContent);
  });
};

function renderInnerContent(props) {
  var title = props.event.title;
  return title && vdom_cjs.createElement("div", {
    className: "fc-event-title"
  }, props.event.title);
}

var WeekNumberRoot = function (props) {
  return vdom_cjs.createElement(ViewContextType.Consumer, null, function (context) {
    var dateEnv = context.dateEnv,
        options = context.options;
    var date = props.date;
    var format = options.weekNumberFormat || props.defaultFormat;
    var num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?

    var text = dateEnv.format(date, format);
    var hookProps = {
      num: num,
      text: text,
      date: date
    };
    return vdom_cjs.createElement(RenderHook, {
      hookProps: hookProps,
      classNames: options.weekNumberClassNames,
      content: options.weekNumberContent,
      defaultContent: renderInner,
      didMount: options.weekNumberDidMount,
      willUnmount: options.weekNumberWillUnmount
    }, props.children);
  });
};

function renderInner(innerProps) {
  return innerProps.text;
}

var PADDING_FROM_VIEWPORT = 10;

var Popover =
/** @class */
function (_super) {
  tslib.__extends(Popover, _super);

  function Popover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (el) {
      _this.rootEl = el;

      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    }; // Triggered when the user clicks *anywhere* in the document, for the autoHide feature


    _this.handleDocumentMousedown = function (ev) {
      // only hide the popover if the click happened outside the popover
      var target = getEventTargetViaRoot(ev);

      if (!_this.rootEl.contains(target)) {
        _this.handleCloseClick();
      }
    };

    _this.handleCloseClick = function () {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    };

    return _this;
  }

  Popover.prototype.render = function () {
    var theme = this.context.theme;
    var props = this.props;
    var classNames = ['fc-popover', theme.getClass('popover')].concat(props.extraClassNames || []);
    return vdom_cjs.createPortal(vdom_cjs.createElement("div", tslib.__assign({
      className: classNames.join(' ')
    }, props.extraAttrs, {
      ref: this.handleRootEl
    }), vdom_cjs.createElement("div", {
      className: 'fc-popover-header ' + theme.getClass('popoverHeader')
    }, vdom_cjs.createElement("span", {
      className: "fc-popover-title"
    }, props.title), vdom_cjs.createElement("span", {
      className: 'fc-popover-close ' + theme.getIconClass('close'),
      onClick: this.handleCloseClick
    })), vdom_cjs.createElement("div", {
      className: 'fc-popover-body ' + theme.getClass('popoverContent')
    }, props.children)), props.parentEl);
  };

  Popover.prototype.componentDidMount = function () {
    document.addEventListener('mousedown', this.handleDocumentMousedown);
    this.updateSize();
  };

  Popover.prototype.componentWillUnmount = function () {
    document.removeEventListener('mousedown', this.handleDocumentMousedown);
  };

  Popover.prototype.updateSize = function () {
    var isRtl = this.context.isRtl;
    var _a = this.props,
        alignmentEl = _a.alignmentEl,
        alignGridTop = _a.alignGridTop;
    var rootEl = this.rootEl;
    var alignmentRect = computeClippedClientRect(alignmentEl);

    if (alignmentRect) {
      var popoverDims = rootEl.getBoundingClientRect(); // position relative to viewport

      var popoverTop = alignGridTop ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top : alignmentRect.top;
      var popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left; // constrain

      popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
      popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
      popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
      var origin_1 = rootEl.offsetParent.getBoundingClientRect();
      applyStyle(rootEl, {
        top: popoverTop - origin_1.top,
        left: popoverLeft - origin_1.left
      });
    }
  };

  return Popover;
}(BaseComponent);

var MorePopover =
/** @class */
function (_super) {
  tslib.__extends(MorePopover, _super);

  function MorePopover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;

      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  MorePopover.prototype.render = function () {
    var _a = this.context,
        options = _a.options,
        dateEnv = _a.dateEnv;
    var props = this.props;
    var startDate = props.startDate,
        todayRange = props.todayRange,
        dateProfile = props.dateProfile;
    var title = dateEnv.format(startDate, options.dayPopoverFormat);
    return vdom_cjs.createElement(DayCellRoot, {
      date: startDate,
      dateProfile: dateProfile,
      todayRange: todayRange,
      elRef: this.handleRootEl
    }, function (rootElRef, dayClassNames, dataAttrs) {
      return vdom_cjs.createElement(Popover, {
        elRef: rootElRef,
        title: title,
        extraClassNames: ['fc-more-popover'].concat(dayClassNames),
        extraAttrs: dataAttrs
        /* TODO: make these time-based when not whole-day? */
        ,
        parentEl: props.parentEl,
        alignmentEl: props.alignmentEl,
        alignGridTop: props.alignGridTop,
        onClose: props.onClose
      }, vdom_cjs.createElement(DayCellContent, {
        date: startDate,
        dateProfile: dateProfile,
        todayRange: todayRange
      }, function (innerElRef, innerContent) {
        return innerContent && vdom_cjs.createElement("div", {
          className: "fc-more-popover-misc",
          ref: innerElRef
        }, innerContent);
      }), props.children);
    });
  };

  MorePopover.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
    var _a = this,
        rootEl = _a.rootEl,
        props = _a.props;

    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: tslib.__assign({
          allDay: true,
          range: {
            start: props.startDate,
            end: props.endDate
          }
        }, props.extraDateSpan),
        dayEl: rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1 // important when comparing with hits from other components

      };
    }

    return null;
  };

  return MorePopover;
}(DateComponent);

var MoreLinkRoot =
/** @class */
function (_super) {
  tslib.__extends(MoreLinkRoot, _super);

  function MoreLinkRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.linkElRef = vdom_cjs.createRef();
    _this.state = {
      isPopoverOpen: false
    };

    _this.handleClick = function (ev) {
      var _a = _this,
          props = _a.props,
          context = _a.context;
      var moreLinkClick = context.options.moreLinkClick;
      var date = computeRange(props).start;

      function buildPublicSeg(seg) {
        var _a = seg.eventRange,
            def = _a.def,
            instance = _a.instance,
            range = _a.range;
        return {
          event: new EventApi(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }

      if (typeof moreLinkClick === 'function') {
        moreLinkClick = moreLinkClick({
          date: date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }

      if (!moreLinkClick || moreLinkClick === 'popover') {
        _this.setState({
          isPopoverOpen: true
        });
      } else if (typeof moreLinkClick === 'string') {
        // a view name
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };

    _this.handlePopoverClose = function () {
      _this.setState({
        isPopoverOpen: false
      });
    };

    return _this;
  }

  MoreLinkRoot.prototype.render = function () {
    var _this = this;

    var props = this.props;
    return vdom_cjs.createElement(ViewContextType.Consumer, null, function (context) {
      var viewApi = context.viewApi,
          options = context.options,
          calendarApi = context.calendarApi;
      var moreLinkText = options.moreLinkText;
      var moreCnt = props.moreCnt;
      var range = computeRange(props);
      var hookProps = {
        num: moreCnt,
        shortText: "+" + moreCnt,
        text: typeof moreLinkText === 'function' ? moreLinkText.call(calendarApi, moreCnt) : "+" + moreCnt + " " + moreLinkText,
        view: viewApi
      };
      return vdom_cjs.createElement(vdom_cjs.Fragment, null, Boolean(props.moreCnt) && vdom_cjs.createElement(RenderHook, {
        elRef: _this.linkElRef,
        hookProps: hookProps,
        classNames: options.moreLinkClassNames,
        content: options.moreLinkContent,
        defaultContent: props.defaultContent || renderMoreLinkInner,
        didMount: options.moreLinkDidMount,
        willUnmount: options.moreLinkWillUnmount
      }, function (rootElRef, customClassNames, innerElRef, innerContent) {
        return props.children(rootElRef, ['fc-more-link'].concat(customClassNames), innerElRef, innerContent, _this.handleClick);
      }), _this.state.isPopoverOpen && vdom_cjs.createElement(MorePopover, {
        startDate: range.start,
        endDate: range.end,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        extraDateSpan: props.extraDateSpan,
        parentEl: _this.parentEl,
        alignmentEl: props.alignmentElRef.current,
        alignGridTop: props.alignGridTop,
        onClose: _this.handlePopoverClose
      }, props.popoverContent()));
    });
  };

  MoreLinkRoot.prototype.componentDidMount = function () {
    this.updateParentEl();
  };

  MoreLinkRoot.prototype.componentDidUpdate = function () {
    this.updateParentEl();
  };

  MoreLinkRoot.prototype.updateParentEl = function () {
    if (this.linkElRef.current) {
      this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
    }
  };

  return MoreLinkRoot;
}(BaseComponent);

function renderMoreLinkInner(props) {
  return props.text;
}

function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }

  var hiddenSegs = props.hiddenSegs;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}

function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}

function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}

function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}

function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
} // exports
// --------------------------------------------------------------------------------------------------


var version = '5.9.0'; // important to type it, so .d.ts has generic string

exports.BASE_OPTION_DEFAULTS = BASE_OPTION_DEFAULTS;
exports.BASE_OPTION_REFINERS = BASE_OPTION_REFINERS;
exports.BaseComponent = BaseComponent;
exports.BgEvent = BgEvent;
exports.CalendarApi = CalendarApi;
exports.CalendarContent = CalendarContent;
exports.CalendarDataManager = CalendarDataManager;
exports.CalendarDataProvider = CalendarDataProvider;
exports.CalendarRoot = CalendarRoot;
exports.ContentHook = ContentHook;
exports.CustomContentRenderContext = CustomContentRenderContext;
exports.DateComponent = DateComponent;
exports.DateEnv = DateEnv;
exports.DateProfileGenerator = DateProfileGenerator;
exports.DayCellContent = DayCellContent;
exports.DayCellRoot = DayCellRoot;
exports.DayHeader = DayHeader;
exports.DaySeriesModel = DaySeriesModel;
exports.DayTableModel = DayTableModel;
exports.DelayedRunner = DelayedRunner;
exports.ElementDragging = ElementDragging;
exports.ElementScrollController = ElementScrollController;
exports.Emitter = Emitter;
exports.EventApi = EventApi;
exports.EventRoot = EventRoot;
exports.EventSourceApi = EventSourceApi;
exports.Interaction = Interaction;
exports.MoreLinkRoot = MoreLinkRoot;
exports.MountHook = MountHook;
exports.NamedTimeZoneImpl = NamedTimeZoneImpl;
exports.NowIndicatorRoot = NowIndicatorRoot;
exports.NowTimer = NowTimer;
exports.PositionCache = PositionCache;
exports.RefMap = RefMap;
exports.RenderHook = RenderHook;
exports.ScrollController = ScrollController;
exports.ScrollResponder = ScrollResponder;
exports.Scroller = Scroller;
exports.SegHierarchy = SegHierarchy;
exports.SimpleScrollGrid = SimpleScrollGrid;
exports.Slicer = Slicer;
exports.Splitter = Splitter;
exports.StandardEvent = StandardEvent;
exports.TableDateCell = TableDateCell;
exports.TableDowCell = TableDowCell;
exports.Theme = Theme;
exports.ViewApi = ViewApi;
exports.ViewContextType = ViewContextType;
exports.ViewRoot = ViewRoot;
exports.WeekNumberRoot = WeekNumberRoot;
exports.WindowScrollController = WindowScrollController;
exports.addDays = addDays;
exports.addDurations = addDurations;
exports.addMs = addMs;
exports.addWeeks = addWeeks;
exports.allowContextMenu = allowContextMenu;
exports.allowSelection = allowSelection;
exports.applyMutationToEventStore = applyMutationToEventStore;
exports.applyStyle = applyStyle;
exports.applyStyleProp = applyStyleProp;
exports.asCleanDays = asCleanDays;
exports.asRoughMinutes = asRoughMinutes;
exports.asRoughMs = asRoughMs;
exports.asRoughSeconds = asRoughSeconds;
exports.binarySearch = binarySearch;
exports.buildClassNameNormalizer = buildClassNameNormalizer;
exports.buildEntryKey = buildEntryKey;
exports.buildEventApis = buildEventApis;
exports.buildEventRangeKey = buildEventRangeKey;
exports.buildHashFromArray = buildHashFromArray;
exports.buildIsoString = buildIsoString;
exports.buildNavLinkData = buildNavLinkData;
exports.buildSegCompareObj = buildSegCompareObj;
exports.buildSegTimeText = buildSegTimeText;
exports.collectFromHash = collectFromHash;
exports.combineEventUis = combineEventUis;
exports.compareByFieldSpec = compareByFieldSpec;
exports.compareByFieldSpecs = compareByFieldSpecs;
exports.compareNumbers = compareNumbers;
exports.compareObjs = compareObjs;
exports.computeEarliestSegStart = computeEarliestSegStart;
exports.computeEdges = computeEdges;
exports.computeFallbackHeaderFormat = computeFallbackHeaderFormat;
exports.computeHeightAndMargins = computeHeightAndMargins;
exports.computeInnerRect = computeInnerRect;
exports.computeRect = computeRect;
exports.computeSegDraggable = computeSegDraggable;
exports.computeSegEndResizable = computeSegEndResizable;
exports.computeSegStartResizable = computeSegStartResizable;
exports.computeShrinkWidth = computeShrinkWidth;
exports.computeSmallestCellWidth = computeSmallestCellWidth;
exports.computeVisibleDayRange = computeVisibleDayRange;
exports.config = config;
exports.constrainPoint = constrainPoint;
exports.createDuration = createDuration;
exports.createEmptyEventStore = createEmptyEventStore;
exports.createEventInstance = createEventInstance;
exports.createEventUi = createEventUi;
exports.createFormatter = createFormatter;
exports.createPlugin = createPlugin;
exports.diffDates = diffDates;
exports.diffDayAndTime = diffDayAndTime;
exports.diffDays = diffDays;
exports.diffPoints = diffPoints;
exports.diffWeeks = diffWeeks;
exports.diffWholeDays = diffWholeDays;
exports.diffWholeWeeks = diffWholeWeeks;
exports.disableCursor = disableCursor;
exports.elementClosest = elementClosest;
exports.elementMatches = elementMatches;
exports.enableCursor = enableCursor;
exports.eventTupleToStore = eventTupleToStore;
exports.filterEventStoreDefs = filterEventStoreDefs;
exports.filterHash = filterHash;
exports.findDirectChildren = findDirectChildren;
exports.findElements = findElements;
exports.flexibleCompare = flexibleCompare;
exports.formatDate = formatDate;
exports.formatDayString = formatDayString;
exports.formatIsoTimeString = formatIsoTimeString;
exports.formatRange = formatRange;
exports.getAllowYScrolling = getAllowYScrolling;
exports.getCanVGrowWithinCell = getCanVGrowWithinCell;
exports.getClippingParents = getClippingParents;
exports.getDateMeta = getDateMeta;
exports.getDayClassNames = getDayClassNames;
exports.getDefaultEventEnd = getDefaultEventEnd;
exports.getElRoot = getElRoot;
exports.getElSeg = getElSeg;
exports.getEntrySpanEnd = getEntrySpanEnd;
exports.getEventClassNames = getEventClassNames;
exports.getEventTargetViaRoot = getEventTargetViaRoot;
exports.getIsRtlScrollbarOnLeft = getIsRtlScrollbarOnLeft;
exports.getRectCenter = getRectCenter;
exports.getRelevantEvents = getRelevantEvents;
exports.getScrollGridClassNames = getScrollGridClassNames;
exports.getScrollbarWidths = getScrollbarWidths;
exports.getSectionClassNames = getSectionClassNames;
exports.getSectionHasLiquidHeight = getSectionHasLiquidHeight;
exports.getSegMeta = getSegMeta;
exports.getSlotClassNames = getSlotClassNames;
exports.getStickyFooterScrollbar = getStickyFooterScrollbar;
exports.getStickyHeaderDates = getStickyHeaderDates;
exports.getUnequalProps = getUnequalProps;
exports.globalLocales = globalLocales;
exports.globalPlugins = globalPlugins;
exports.greatestDurationDenominator = greatestDurationDenominator;
exports.groupIntersectingEntries = groupIntersectingEntries;
exports.guid = guid;
exports.hasBgRendering = hasBgRendering;
exports.hasShrinkWidth = hasShrinkWidth;
exports.identity = identity;
exports.interactionSettingsStore = interactionSettingsStore;
exports.interactionSettingsToStore = interactionSettingsToStore;
exports.intersectRanges = intersectRanges;
exports.intersectRects = intersectRects;
exports.intersectSpans = intersectSpans;
exports.isArraysEqual = isArraysEqual;
exports.isColPropsEqual = isColPropsEqual;
exports.isDateSelectionValid = isDateSelectionValid;
exports.isDateSpansEqual = isDateSpansEqual;
exports.isInt = isInt;
exports.isInteractionValid = isInteractionValid;
exports.isMultiDayRange = isMultiDayRange;
exports.isPropsEqual = isPropsEqual;
exports.isPropsValid = isPropsValid;
exports.isValidDate = isValidDate;
exports.joinSpans = joinSpans;
exports.listenBySelector = listenBySelector;
exports.mapHash = mapHash;
exports.memoize = memoize;
exports.memoizeArraylike = memoizeArraylike;
exports.memoizeHashlike = memoizeHashlike;
exports.memoizeObjArg = memoizeObjArg;
exports.mergeEventStores = mergeEventStores;
exports.multiplyDuration = multiplyDuration;
exports.padStart = padStart;
exports.parseBusinessHours = parseBusinessHours;
exports.parseClassNames = parseClassNames;
exports.parseDragMeta = parseDragMeta;
exports.parseEventDef = parseEventDef;
exports.parseFieldSpecs = parseFieldSpecs;
exports.parseMarker = parse;
exports.pointInsideRect = pointInsideRect;
exports.preventContextMenu = preventContextMenu;
exports.preventDefault = preventDefault;
exports.preventSelection = preventSelection;
exports.rangeContainsMarker = rangeContainsMarker;
exports.rangeContainsRange = rangeContainsRange;
exports.rangesEqual = rangesEqual;
exports.rangesIntersect = rangesIntersect;
exports.refineEventDef = refineEventDef;
exports.refineProps = refineProps;
exports.removeElement = removeElement;
exports.removeExact = removeExact;
exports.renderChunkContent = renderChunkContent;
exports.renderFill = renderFill;
exports.renderMicroColGroup = renderMicroColGroup;
exports.renderScrollShim = renderScrollShim;
exports.requestJson = requestJson;
exports.sanitizeShrinkWidth = sanitizeShrinkWidth;
exports.setElSeg = setElSeg;
exports.setRef = setRef;
exports.sliceEventStore = sliceEventStore;
exports.sliceEvents = sliceEvents;
exports.sortEventSegs = sortEventSegs;
exports.startOfDay = startOfDay;
exports.translateRect = translateRect;
exports.triggerDateSelect = triggerDateSelect;
exports.unpromisify = unpromisify;
exports.version = version;
exports.whenTransitionDone = whenTransitionDone;
exports.wholeDivideDurations = wholeDivideDurations;
Object.keys(vdom_cjs).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return vdom_cjs[k];
    }
  });
});

/***/ }),

/***/ "./node_modules/@fullcalendar/common/vdom.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/common/vdom.cjs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
})); /// <reference types="@fullcalendar/core-preact" />

if (typeof FullCalendarVDom === 'undefined') {
  throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');
}

var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var createPortal = FullCalendarVDom.createPortal;
var flushToDom = FullCalendarVDom.flushToDom;
var unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;
/* eslint-enable */

exports.Component = Component;
exports.Fragment = Fragment;
exports.createContext = createContext;
exports.createElement = createElement;
exports.createPortal = createPortal;
exports.createRef = createRef;
exports.flushToDom = flushToDom;
exports.render = render;
exports.unmountComponentAtNode = unmountComponentAtNode;

/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.cjs.js":
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.cjs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
FullCalendar v5.9.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var common = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.cjs.js");

var tslib = __webpack_require__(/*! tslib */ "tslib");

;
/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

var TableView =
/** @class */
function (_super) {
  tslib.__extends(TableView, _super);

  function TableView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.headerElRef = common.createRef();
    return _this;
  }

  TableView.prototype.renderSimpleLayout = function (headerRowContent, bodyContent) {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var sections = [];
    var stickyHeaderDates = common.getStickyHeaderDates(context.options);

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return common.createElement(common.ViewRoot, {
      viewSpec: context.viewSpec
    }, function (rootElRef, classNames) {
      return common.createElement("div", {
        ref: rootElRef,
        className: ['fc-daygrid'].concat(classNames).join(' ')
      }, common.createElement(common.SimpleScrollGrid, {
        liquid: !props.isHeightAuto && !props.forPrint,
        collapsibleWidth: props.forPrint,
        cols: []
        /* TODO: make optional? */
        ,
        sections: sections
      }));
    });
  };

  TableView.prototype.renderHScrollLayout = function (headerRowContent, bodyContent, colCnt, dayMinWidth) {
    var ScrollGrid = this.context.pluginHooks.scrollGridImpl;

    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }

    var _a = this,
        props = _a.props,
        context = _a.context;

    var stickyHeaderDates = !props.forPrint && common.getStickyHeaderDates(context.options);
    var stickyFooterScrollbar = !props.forPrint && common.getStickyFooterScrollbar(context.options);
    var sections = [];

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunks: [{
          key: 'main',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunks: [{
        key: 'main',
        content: bodyContent
      }]
    });

    if (stickyFooterScrollbar) {
      sections.push({
        type: 'footer',
        key: 'footer',
        isSticky: true,
        chunks: [{
          key: 'main',
          content: common.renderScrollShim
        }]
      });
    }

    return common.createElement(common.ViewRoot, {
      viewSpec: context.viewSpec
    }, function (rootElRef, classNames) {
      return common.createElement("div", {
        ref: rootElRef,
        className: ['fc-daygrid'].concat(classNames).join(' ')
      }, common.createElement(ScrollGrid, {
        liquid: !props.isHeightAuto && !props.forPrint,
        collapsibleWidth: props.forPrint,
        colGroups: [{
          cols: [{
            span: colCnt,
            minWidth: dayMinWidth
          }]
        }],
        sections: sections
      }));
    });
  };

  return TableView;
}(common.DateComponent);

function splitSegsByRow(segs, rowCnt) {
  var byRow = [];

  for (var i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }

  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    byRow[seg.row].push(seg);
  }

  return byRow;
}

function splitSegsByFirstCol(segs, colCnt) {
  var byCol = [];

  for (var i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }

  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    byCol[seg.firstCol].push(seg);
  }

  return byCol;
}

function splitInteractionByRow(ui, rowCnt) {
  var byRow = [];

  if (!ui) {
    for (var i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (var i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }

    for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
      var seg = _a[_i];
      byRow[seg.row].segs.push(seg);
    }
  }

  return byRow;
}

var TableCellTop =
/** @class */
function (_super) {
  tslib.__extends(TableCellTop, _super);

  function TableCellTop() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableCellTop.prototype.render = function () {
    var props = this.props;
    var navLinkAttrs = this.context.options.navLinks ? {
      'data-navlink': common.buildNavLinkData(props.date),
      tabIndex: 0
    } : {};
    return common.createElement(common.DayCellContent, {
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      defaultContent: renderTopInner
    }, function (innerElRef, innerContent) {
      return (innerContent || props.forceDayTop) && common.createElement("div", {
        className: "fc-daygrid-day-top",
        ref: innerElRef
      }, common.createElement("a", tslib.__assign({
        className: "fc-daygrid-day-number"
      }, navLinkAttrs), innerContent || common.createElement(common.Fragment, null, "\u00A0")));
    });
  };

  return TableCellTop;
}(common.BaseComponent);

function renderTopInner(props) {
  return props.dayNumberText;
}

var DEFAULT_TABLE_EVENT_TIME_FORMAT = common.createFormatter({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});

function hasListItemDisplay(seg) {
  var display = seg.eventRange.ui.display;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && // can't be multi-day
  seg.isStart && // "
  seg.isEnd // "
  ;
}

var TableBlockEvent =
/** @class */
function (_super) {
  tslib.__extends(TableBlockEvent, _super);

  function TableBlockEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableBlockEvent.prototype.render = function () {
    var props = this.props;
    return common.createElement(common.StandardEvent, tslib.__assign({}, props, {
      extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  };

  return TableBlockEvent;
}(common.BaseComponent);

var TableListItemEvent =
/** @class */
function (_super) {
  tslib.__extends(TableListItemEvent, _super);

  function TableListItemEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableListItemEvent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    var timeText = common.buildSegTimeText(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return common.createElement(common.EventRoot, {
      seg: props.seg,
      timeText: timeText,
      defaultContent: renderInnerContent,
      isDragging: props.isDragging,
      isResizing: false,
      isDateSelecting: false,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, function (rootElRef, classNames, innerElRef, innerContent) {
      return (// we don't use styles!
        common.createElement("a", tslib.__assign({
          className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '),
          ref: rootElRef
        }, getSegAnchorAttrs(props.seg)), innerContent)
      );
    });
  };

  return TableListItemEvent;
}(common.BaseComponent);

function renderInnerContent(innerProps) {
  return common.createElement(common.Fragment, null, common.createElement("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: innerProps.borderColor || innerProps.backgroundColor
    }
  }), innerProps.timeText && common.createElement("div", {
    className: "fc-event-time"
  }, innerProps.timeText), common.createElement("div", {
    className: "fc-event-title"
  }, innerProps.event.title || common.createElement(common.Fragment, null, "\u00A0")));
}

function getSegAnchorAttrs(seg) {
  var url = seg.eventRange.def.url;
  return url ? {
    href: url
  } : {};
}

var TableCellMoreLink =
/** @class */
function (_super) {
  tslib.__extends(TableCellMoreLink, _super);

  function TableCellMoreLink() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.compileSegs = common.memoize(compileSegs);
    return _this;
  }

  TableCellMoreLink.prototype.render = function () {
    var props = this.props;

    var _a = this.compileSegs(props.singlePlacements),
        allSegs = _a.allSegs,
        invisibleSegs = _a.invisibleSegs;

    return common.createElement(common.MoreLinkRoot, {
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      allDayDate: props.allDayDate,
      moreCnt: props.moreCnt,
      allSegs: allSegs,
      hiddenSegs: invisibleSegs,
      alignmentElRef: props.alignmentElRef,
      alignGridTop: props.alignGridTop,
      extraDateSpan: props.extraDateSpan,
      popoverContent: function () {
        var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
        return common.createElement(common.Fragment, null, allSegs.map(function (seg) {
          var instanceId = seg.eventRange.instance.instanceId;
          return common.createElement("div", {
            className: "fc-daygrid-event-harness",
            key: instanceId,
            style: {
              visibility: isForcedInvisible[instanceId] ? 'hidden' : ''
            }
          }, hasListItemDisplay(seg) ? common.createElement(TableListItemEvent, tslib.__assign({
            seg: seg,
            isDragging: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, common.getSegMeta(seg, props.todayRange))) : common.createElement(TableBlockEvent, tslib.__assign({
            seg: seg,
            isDragging: false,
            isResizing: false,
            isDateSelecting: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, common.getSegMeta(seg, props.todayRange))));
        }));
      }
    }, function (rootElRef, classNames, innerElRef, innerContent, handleClick) {
      return common.createElement("a", {
        ref: rootElRef,
        className: ['fc-daygrid-more-link'].concat(classNames).join(' '),
        onClick: handleClick
      }, innerContent);
    });
  };

  return TableCellMoreLink;
}(common.BaseComponent);

function compileSegs(singlePlacements) {
  var allSegs = [];
  var invisibleSegs = [];

  for (var _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++) {
    var placement = singlePlacements_1[_i];
    allSegs.push(placement.seg);

    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }

  return {
    allSegs: allSegs,
    invisibleSegs: invisibleSegs
  };
}

var DEFAULT_WEEK_NUM_FORMAT = common.createFormatter({
  week: 'narrow'
});

var TableCell =
/** @class */
function (_super) {
  tslib.__extends(TableCell, _super);

  function TableCell() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.rootElRef = common.createRef();

    _this.handleRootEl = function (el) {
      common.setRef(_this.rootElRef, el);
      common.setRef(_this.props.elRef, el);
    };

    return _this;
  }

  TableCell.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context,
        rootElRef = _a.rootElRef;

    var options = context.options;
    var date = props.date,
        dateProfile = props.dateProfile;
    var navLinkAttrs = options.navLinks ? {
      'data-navlink': common.buildNavLinkData(date, 'week'),
      tabIndex: 0
    } : {};
    return common.createElement(common.DayCellRoot, {
      date: date,
      dateProfile: dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      elRef: this.handleRootEl
    }, function (dayElRef, dayClassNames, rootDataAttrs, isDisabled) {
      return common.createElement("td", tslib.__assign({
        ref: dayElRef,
        className: ['fc-daygrid-day'].concat(dayClassNames, props.extraClassNames || []).join(' ')
      }, rootDataAttrs, props.extraDataAttrs), common.createElement("div", {
        className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
        ref: props.innerElRef
        /* different from hook system! RENAME */

      }, props.showWeekNumber && common.createElement(common.WeekNumberRoot, {
        date: date,
        defaultFormat: DEFAULT_WEEK_NUM_FORMAT
      }, function (weekElRef, weekClassNames, innerElRef, innerContent) {
        return common.createElement("a", tslib.__assign({
          ref: weekElRef,
          className: ['fc-daygrid-week-number'].concat(weekClassNames).join(' ')
        }, navLinkAttrs), innerContent);
      }), !isDisabled && common.createElement(TableCellTop, {
        date: date,
        dateProfile: dateProfile,
        showDayNumber: props.showDayNumber,
        forceDayTop: props.forceDayTop,
        todayRange: props.todayRange,
        extraHookProps: props.extraHookProps
      }), common.createElement("div", {
        className: "fc-daygrid-day-events",
        ref: props.fgContentElRef
      }, props.fgContent, common.createElement("div", {
        className: "fc-daygrid-day-bottom",
        style: {
          marginTop: props.moreMarginTop
        }
      }, common.createElement(TableCellMoreLink, {
        allDayDate: date,
        singlePlacements: props.singlePlacements,
        moreCnt: props.moreCnt,
        alignmentElRef: rootElRef,
        alignGridTop: !props.showDayNumber,
        extraDateSpan: props.extraDateSpan,
        dateProfile: props.dateProfile,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        todayRange: props.todayRange
      }))), common.createElement("div", {
        className: "fc-daygrid-day-bg"
      }, props.bgContent)));
    });
  };

  return TableCell;
}(common.DateComponent);

function computeFgSegPlacement(segs, // assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
  var hierarchy = new DayGridSegHierarchy();
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;

  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === 'number') {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === 'number') {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  } // create segInputs only for segs with known heights


  var segInputs = [];
  var unknownHeightSegs = [];

  for (var i = 0; i < segs.length; i += 1) {
    var seg = segs[i];
    var instanceId = seg.eventRange.instance.instanceId;
    var eventHeight = eventInstanceHeights[instanceId];

    if (eventHeight != null) {
      segInputs.push({
        index: i,
        thickness: eventHeight,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }

  var hiddenEntries = hierarchy.addSegs(segInputs);
  var segRects = hierarchy.toRects();

  var _a = placeRects(segRects, segs, cells),
      singleColPlacements = _a.singleColPlacements,
      multiColPlacements = _a.multiColPlacements,
      leftoverMargins = _a.leftoverMargins;

  var moreCnts = [];
  var moreMarginTops = []; // add segs with unknown heights

  for (var _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++) {
    var seg = unknownHeightSegs_1[_i];
    multiColPlacements[seg.firstCol].push({
      seg: seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });

    for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  } // add the hidden entries


  for (var col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }

  for (var _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++) {
    var hiddenEntry = hiddenEntries_1[_b];
    var seg = segs[hiddenEntry.index];
    var hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });

    for (var col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  } // deal with leftover margins


  for (var col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }

  return {
    singleColPlacements: singleColPlacements,
    multiColPlacements: multiColPlacements,
    moreCnts: moreCnts,
    moreMarginTops: moreMarginTops
  };
} // rects ordered by top coord, then left


function placeRects(allRects, segs, cells) {
  var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  var singleColPlacements = [];
  var multiColPlacements = [];
  var leftoverMargins = [];

  for (var col = 0; col < cells.length; col += 1) {
    var rects = rectsByEachCol[col]; // compute all static segs in singlePlacements

    var singlePlacements = [];
    var currentHeight = 0;
    var currentMarginTop = 0;

    for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
      var rect = rects_1[_i];
      var seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    } // compute mixed static/absolute segs in multiPlacements


    var multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;

    for (var _a = 0, rects_2 = rects; _a < rects_2.length; _a++) {
      var rect = rects_2[_a];
      var seg = segs[rect.index];
      var isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?

      var isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg

      currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg

      if (isAbsolute) {
        currentMarginTop += rect.thickness;

        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop // claim the margin

        });
        currentMarginTop = 0;
      }
    }

    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }

  return {
    singleColPlacements: singleColPlacements,
    multiColPlacements: multiColPlacements,
    leftoverMargins: leftoverMargins
  };
}

function groupRectsByEachCol(rects, colCnt) {
  var rectsByEachCol = [];

  for (var col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }

  for (var _i = 0, rects_3 = rects; _i < rects_3.length; _i++) {
    var rect = rects_3[_i];

    for (var col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }

  return rectsByEachCol;
}

function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }

  var eventRange = seg.eventRange;
  var origRange = eventRange.range;
  var slicedRange = common.intersectRanges(origRange, {
    start: cells[spanStart].date,
    end: common.addDays(cells[spanEnd - 1].date, 1)
  });
  return tslib.__assign(tslib.__assign({}, seg), {
    firstCol: spanStart,
    lastCol: spanEnd - 1,
    eventRange: {
      def: eventRange.def,
      ui: tslib.__assign(tslib.__assign({}, eventRange.ui), {
        durationEditable: false
      }),
      instance: eventRange.instance,
      range: slicedRange
    },
    isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
    isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
  });
}

var DayGridSegHierarchy =
/** @class */
function (_super) {
  tslib.__extends(DayGridSegHierarchy, _super);

  function DayGridSegHierarchy() {
    var _this = _super !== null && _super.apply(this, arguments) || this; // config


    _this.hiddenConsumes = false; // allows us to keep hidden entries in the hierarchy so they take up space

    _this.forceHidden = {};
    return _this;
  }

  DayGridSegHierarchy.prototype.addSegs = function (segInputs) {
    var _this = this;

    var hiddenSegs = _super.prototype.addSegs.call(this, segInputs);

    var entriesByLevel = this.entriesByLevel;

    var excludeHidden = function (entry) {
      return !_this.forceHidden[common.buildEntryKey(entry)];
    }; // remove the forced-hidden segs


    for (var level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }

    return hiddenSegs;
  };

  DayGridSegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
    var _a = this,
        entriesByLevel = _a.entriesByLevel,
        forceHidden = _a.forceHidden;

    var touchingEntry = insertion.touchingEntry,
        touchingLevel = insertion.touchingLevel,
        touchingLateral = insertion.touchingLateral;

    if (this.hiddenConsumes && touchingEntry) {
      var touchingEntryId = common.buildEntryKey(touchingEntry); // if not already hidden

      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          var placeholderEntry = tslib.__assign(tslib.__assign({}, touchingEntry), {
            span: common.intersectSpans(touchingEntry.span, entry.span)
          });

          var placeholderEntryId = common.buildEntryKey(placeholderEntry);
          forceHidden[placeholderEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder

          this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }

    return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
  };

  return DayGridSegHierarchy;
}(common.SegHierarchy);

var TableRow =
/** @class */
function (_super) {
  tslib.__extends(TableRow, _super);

  function TableRow() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.cellElRefs = new common.RefMap(); // the <td>

    _this.frameElRefs = new common.RefMap(); // the fc-daygrid-day-frame

    _this.fgElRefs = new common.RefMap(); // the fc-daygrid-day-events

    _this.segHarnessRefs = new common.RefMap(); // indexed by "instanceId:firstCol"

    _this.rootElRef = common.createRef();
    _this.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    };
    return _this;
  }

  TableRow.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        state = _a.state,
        context = _a.context;

    var options = context.options;
    var colCnt = props.cells.length;
    var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);

    var _b = computeFgSegPlacement(common.sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells),
        singleColPlacements = _b.singleColPlacements,
        multiColPlacements = _b.multiColPlacements,
        moreCnts = _b.moreCnts,
        moreMarginTops = _b.moreMarginTops;

    var isForcedInvisible = // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return common.createElement("tr", {
      ref: this.rootElRef
    }, props.renderIntro && props.renderIntro(), props.cells.map(function (cell, col) {
      var normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);

      var mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);

      return common.createElement(TableCell, {
        key: cell.key,
        elRef: _this.cellElRefs.createRef(cell.key),
        innerElRef: _this.frameElRefs.createRef(cell.key)
        /* FF <td> problem, but okay to use for left/right. TODO: rename prop */
        ,
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers
        /* even displaying weeknum for row, not necessarily day */
        ,
        todayRange: props.todayRange,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        extraHookProps: cell.extraHookProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        extraDateSpan: cell.extraDateSpan,
        moreCnt: moreCnts[col],
        moreMarginTop: moreMarginTops[col],
        singlePlacements: singleColPlacements[col],
        fgContentElRef: _this.fgElRefs.createRef(cell.key),
        fgContent: // Fragment scopes the keys
        common.createElement(common.Fragment, null, common.createElement(common.Fragment, null, normalFgNodes), common.createElement(common.Fragment, null, mirrorFgNodes)),
        bgContent: // Fragment scopes the keys
        common.createElement(common.Fragment, null, _this.renderFillSegs(highlightSegsByCol[col], 'highlight'), _this.renderFillSegs(businessHoursByCol[col], 'non-business'), _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))
      });
    }));
  };

  TableRow.prototype.componentDidMount = function () {
    this.updateSizing(true);
  };

  TableRow.prototype.componentDidUpdate = function (prevProps, prevState) {
    var currentProps = this.props;
    this.updateSizing(!common.isPropsEqual(prevProps, currentProps));
  };

  TableRow.prototype.getHighlightSegs = function () {
    var props = this.props;

    if (props.eventDrag && props.eventDrag.segs.length) {
      // messy check
      return props.eventDrag.segs;
    }

    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }

    return props.dateSelectionSegs;
  };

  TableRow.prototype.getMirrorSegs = function () {
    var props = this.props;

    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }

    return [];
  };

  TableRow.prototype.renderFgSegs = function (col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    var context = this.context;
    var eventSelection = this.props.eventSelection;
    var framePositions = this.state.framePositions;
    var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1

    var isMirror = isDragging || isResizing || isDateSelecting;
    var nodes = [];

    if (framePositions) {
      for (var _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++) {
        var placement = segPlacements_1[_i];
        var seg = placement.seg;
        var instanceId = seg.eventRange.instance.instanceId;
        var key = instanceId + ':' + col;
        var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        var isAbsolute = placement.isAbsolute;
        var left = '';
        var right = '';

        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        /*
        known bug: events that are force to be list-item but span multiple days still take up space in later columns
        todo: in print view, for multi-day events, don't display title within non-start/end segs
        */


        nodes.push(common.createElement("div", {
          className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
          key: key,
          ref: isMirror ? null : this.segHarnessRefs.createRef(key),
          style: {
            visibility: isVisible ? '' : 'hidden',
            marginTop: isAbsolute ? '' : placement.marginTop,
            top: isAbsolute ? placement.absoluteTop : '',
            left: left,
            right: right
          }
        }, hasListItemDisplay(seg) ? common.createElement(TableListItemEvent, tslib.__assign({
          seg: seg,
          isDragging: isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, common.getSegMeta(seg, todayRange))) : common.createElement(TableBlockEvent, tslib.__assign({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, common.getSegMeta(seg, todayRange)))));
      }
    }

    return nodes;
  };

  TableRow.prototype.renderFillSegs = function (segs, fillType) {
    var isRtl = this.context.isRtl;
    var todayRange = this.props.todayRange;
    var framePositions = this.state.framePositions;
    var nodes = [];

    if (framePositions) {
      for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        var leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push(common.createElement("div", {
          key: common.buildEventRangeKey(seg.eventRange),
          className: "fc-daygrid-bg-harness",
          style: leftRightCss
        }, fillType === 'bg-event' ? common.createElement(common.BgEvent, tslib.__assign({
          seg: seg
        }, common.getSegMeta(seg, todayRange))) : common.renderFill(fillType)));
      }
    }

    return common.createElement.apply(void 0, tslib.__spreadArray([common.Fragment, {}], nodes));
  };

  TableRow.prototype.updateSizing = function (isExternalSizingChange) {
    var _a = this,
        props = _a.props,
        frameElRefs = _a.frameElRefs;

    if (!props.forPrint && props.clientWidth !== null // positioning ready?
    ) {
        if (isExternalSizingChange) {
          var frameEls = props.cells.map(function (cell) {
            return frameElRefs.currentMap[cell.key];
          });

          if (frameEls.length) {
            var originEl = this.rootElRef.current;
            this.setState({
              framePositions: new common.PositionCache(originEl, frameEls, true, // isHorizontal
              false)
            });
          }
        }

        var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
        this.setState({
          eventInstanceHeights: this.queryEventInstanceHeights(),
          maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
        });
      }
  };

  TableRow.prototype.queryEventInstanceHeights = function () {
    var segElMap = this.segHarnessRefs.currentMap;
    var eventInstanceHeights = {}; // get the max height amongst instance segs

    for (var key in segElMap) {
      var height = Math.round(segElMap[key].getBoundingClientRect().height);
      var instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key

      eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
    }

    return eventInstanceHeights;
  };

  TableRow.prototype.computeMaxContentHeight = function () {
    var firstKey = this.props.cells[0].key;
    var cellEl = this.cellElRefs.currentMap[firstKey];
    var fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  };

  TableRow.prototype.getCellEls = function () {
    var elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(function (cell) {
      return elMap[cell.key];
    });
  };

  return TableRow;
}(common.DateComponent);

TableRow.addStateEquality({
  eventInstanceHeights: common.isPropsEqual
});

function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }

  var topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?

  return mirrorSegs.map(function (seg) {
    return {
      seg: seg,
      isVisible: true,
      isAbsolute: true,
      absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}

function buildAbsoluteTopHash(colPlacements) {
  var topsByInstanceId = {};

  for (var _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++) {
    var placements = colPlacements_1[_i];

    for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
      var placement = placements_1[_a];
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }

  return topsByInstanceId;
}

var Table =
/** @class */
function (_super) {
  tslib.__extends(Table, _super);

  function Table() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.splitBusinessHourSegs = common.memoize(splitSegsByRow);
    _this.splitBgEventSegs = common.memoize(splitSegsByRow);
    _this.splitFgEventSegs = common.memoize(splitSegsByRow);
    _this.splitDateSelectionSegs = common.memoize(splitSegsByRow);
    _this.splitEventDrag = common.memoize(splitInteractionByRow);
    _this.splitEventResize = common.memoize(splitInteractionByRow);
    _this.rowRefs = new common.RefMap();

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;

      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl,
          isHitComboAllowed: _this.props.isHitComboAllowed
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  Table.prototype.render = function () {
    var _this = this;

    var props = this.props;
    var dateProfile = props.dateProfile,
        dayMaxEventRows = props.dayMaxEventRows,
        dayMaxEvents = props.dayMaxEvents,
        expandRows = props.expandRows;
    var rowCnt = props.cells.length;
    var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true; // if rows can't expand to fill fixed height, can't do balanced-height event limit
    // TODO: best place to normalize these options?

    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }

    var classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural' // will height of one row depend on the others?
    ];
    return common.createElement("div", {
      className: classNames.join(' '),
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, common.createElement(common.NowTimer, {
      unit: "day"
    }, function (nowDate, todayRange) {
      return common.createElement(common.Fragment, null, common.createElement("table", {
        className: "fc-scrollgrid-sync-table",
        style: {
          width: props.clientWidth,
          minWidth: props.tableMinWidth,
          height: expandRows ? props.clientHeight : ''
        }
      }, props.colGroupNode, common.createElement("tbody", null, props.cells.map(function (cells, row) {
        return common.createElement(TableRow, {
          ref: _this.rowRefs.createRef(row),
          key: cells.length ? cells[0].date.toISOString()
          /* best? or put key on cell? or use diff formatter? */
          : row // in case there are no cells (like when resource view is loading)
          ,
          showDayNumbers: rowCnt > 1,
          showWeekNumbers: props.showWeekNumbers,
          todayRange: todayRange,
          dateProfile: dateProfile,
          cells: cells,
          renderIntro: props.renderRowIntro,
          businessHourSegs: businessHourSegsByRow[row],
          eventSelection: props.eventSelection,
          bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay)
          /* hack */
          ,
          fgEventSegs: fgEventSegsByRow[row],
          dateSelectionSegs: dateSelectionSegsByRow[row],
          eventDrag: eventDragByRow[row],
          eventResize: eventResizeByRow[row],
          dayMaxEvents: dayMaxEvents,
          dayMaxEventRows: dayMaxEventRows,
          clientWidth: props.clientWidth,
          clientHeight: props.clientHeight,
          forPrint: props.forPrint
        });
      }))));
    }));
  }; // Hit System
  // ----------------------------------------------------------------------------------------------------


  Table.prototype.prepareHits = function () {
    this.rowPositions = new common.PositionCache(this.rootEl, this.rowRefs.collect().map(function (rowObj) {
      return rowObj.getCellEls()[0];
    }), // first cell el in each row. TODO: not optimal
    false, true);
    this.colPositions = new common.PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
    true, // horizontal
    false);
  };

  Table.prototype.queryHit = function (positionLeft, positionTop) {
    var _a = this,
        colPositions = _a.colPositions,
        rowPositions = _a.rowPositions;

    var col = colPositions.leftToIndex(positionLeft);
    var row = rowPositions.topToIndex(positionTop);

    if (row != null && col != null) {
      var cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: tslib.__assign({
          range: this.getCellRange(row, col),
          allDay: true
        }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }

    return null;
  };

  Table.prototype.getCellEl = function (row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
  };

  Table.prototype.getCellRange = function (row, col) {
    var start = this.props.cells[row][col].date;
    var end = common.addDays(start, 1);
    return {
      start: start,
      end: end
    };
  };

  return Table;
}(common.DateComponent);

function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}

var DayTableSlicer =
/** @class */
function (_super) {
  tslib.__extends(DayTableSlicer, _super);

  function DayTableSlicer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.forceDayIfListItem = true;
    return _this;
  }

  DayTableSlicer.prototype.sliceRange = function (dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  };

  return DayTableSlicer;
}(common.Slicer);

var DayTable =
/** @class */
function (_super) {
  tslib.__extends(DayTable, _super);

  function DayTable() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.slicer = new DayTableSlicer();
    _this.tableRef = common.createRef();
    return _this;
  }

  DayTable.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    return common.createElement(Table, tslib.__assign({
      ref: this.tableRef
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  };

  return DayTable;
}(common.DateComponent);

var DayTableView =
/** @class */
function (_super) {
  tslib.__extends(DayTableView, _super);

  function DayTableView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildDayTableModel = common.memoize(buildDayTableModel);
    _this.headerRef = common.createRef();
    _this.tableRef = common.createRef();
    return _this;
  }

  DayTableView.prototype.render = function () {
    var _this = this;

    var _a = this.context,
        options = _a.options,
        dateProfileGenerator = _a.dateProfileGenerator;
    var props = this.props;
    var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    var headerContent = options.dayHeaders && common.createElement(common.DayHeader, {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });

    var bodyContent = function (contentArg) {
      return common.createElement(DayTable, {
        ref: _this.tableRef,
        dateProfile: props.dateProfile,
        dayTableModel: dayTableModel,
        businessHours: props.businessHours,
        dateSelection: props.dateSelection,
        eventStore: props.eventStore,
        eventUiBases: props.eventUiBases,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        nextDayThreshold: options.nextDayThreshold,
        colGroupNode: contentArg.tableColGroupNode,
        tableMinWidth: contentArg.tableMinWidth,
        dayMaxEvents: options.dayMaxEvents,
        dayMaxEventRows: options.dayMaxEventRows,
        showWeekNumbers: options.weekNumbers,
        expandRows: !props.isHeightAuto,
        headerAlignElRef: _this.headerElRef,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        forPrint: props.forPrint
      });
    };

    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  };

  return DayTableView;
}(TableView);

function buildDayTableModel(dateProfile, dateProfileGenerator) {
  var daySeries = new common.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
  return new common.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var TableDateProfileGenerator =
/** @class */
function (_super) {
  tslib.__extends(TableDateProfileGenerator, _super);

  function TableDateProfileGenerator() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // Computes the date range that will be rendered.


  TableDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
    var dateEnv = this.props.dateEnv;

    var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);

    var start = renderRange.start;
    var end = renderRange.end;
    var endOfWeek; // year and month views should be aligned with weeks. this is already done for week

    if (/^(year|month)$/.test(currentRangeUnit)) {
      start = dateEnv.startOfWeek(start); // make end-of-week if not already

      endOfWeek = dateEnv.startOfWeek(end);

      if (endOfWeek.valueOf() !== end.valueOf()) {
        end = common.addWeeks(endOfWeek, 1);
      }
    } // ensure 6 weeks


    if (this.props.monthMode && this.props.fixedWeekCount) {
      var rowCnt = Math.ceil( // could be partial weeks due to hiddenDays
      common.diffWeeks(start, end));
      end = common.addWeeks(end, 6 - rowCnt);
    }

    return {
      start: start,
      end: end
    };
  };

  return TableDateProfileGenerator;
}(common.DateProfileGenerator);

var main = common.createPlugin({
  initialView: 'dayGridMonth',
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      monthMode: true,
      fixedWeekCount: true
    }
  }
});
exports.DayGridView = DayTableView;
exports.DayTable = DayTable;
exports.DayTableSlicer = DayTableSlicer;
exports.Table = Table;
exports.TableView = TableView;
exports.buildDayTableModel = buildDayTableModel;
exports.default = main;

/***/ }),

/***/ "./node_modules/@fullcalendar/react/dist/main.cjs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@fullcalendar/react/dist/main.cjs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var tslib = __webpack_require__(/*! tslib */ "tslib");

__webpack_require__(/*! ./vdom.cjs */ "./node_modules/@fullcalendar/react/dist/vdom.cjs.js");

var React = __webpack_require__(/*! react */ "react");

var common = __webpack_require__(/*! @fullcalendar/common */ "./node_modules/@fullcalendar/common/main.cjs.js");

var FullCalendar =
/** @class */
function (_super) {
  tslib.__extends(FullCalendar, _super);

  function FullCalendar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._calendarApi = new common.CalendarApi();
    return _this;
  }

  FullCalendar.prototype.render = function () {
    return React.createElement(common.CalendarDataProvider, {
      optionOverrides: this.props,
      calendarApi: this._calendarApi
    }, function (data) {
      return React.createElement(common.CalendarRoot, {
        options: data.calendarOptions,
        theme: data.theme,
        emitter: data.emitter
      }, function (classNames, height, isHeightAuto, forPrint) {
        return React.createElement("div", {
          className: classNames.join(' '),
          style: {
            height: height
          }
        }, React.createElement(common.CalendarContent, tslib.__assign({
          isHeightAuto: isHeightAuto,
          forPrint: forPrint
        }, data)));
      });
    });
  };

  FullCalendar.prototype.getApi = function () {
    return this._calendarApi;
  };

  return FullCalendar;
}(React.Component);

Object.keys(common).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return common[k];
    }
  });
});
exports.default = FullCalendar;

/***/ }),

/***/ "./node_modules/@fullcalendar/react/dist/vdom.cjs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@fullcalendar/react/dist/vdom.cjs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var React = __webpack_require__(/*! react */ "react");

var reactDom = __webpack_require__(/*! react-dom */ "react-dom");

(typeof globalThis !== 'undefined' ? globalThis : window).FullCalendarVDom = {
  Component: React.Component,
  createElement: React.createElement,
  render: reactDom.render,
  createRef: React.createRef,
  Fragment: React.Fragment,
  createContext: React.createContext,
  createPortal: reactDom.createPortal,
  flushToDom: flushToDom,
  unmountComponentAtNode: reactDom.unmountComponentAtNode
};

function flushToDom() {// always sync from top-level
}

exports.flushToDom = flushToDom;

/***/ }),

/***/ "./styles/Calendar.module.css":
/*!************************************!*\
  !*** ./styles/Calendar.module.css ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Calendar_container__1zshw",
	"calendar": "Calendar_calendar__1z1lc"
};


/***/ }),

/***/ "./styles/Navbar.module.css":
/*!**********************************!*\
  !*** ./styles/Navbar.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__Wwf_G",
	"navbar": "Navbar_navbar__3KWoz",
	"button": "Navbar_button__1SFqt",
	"listeButton": "Navbar_listeButton__2nYz4"
};


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

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

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/planning.js"));
module.exports = __webpack_exports__;

})();