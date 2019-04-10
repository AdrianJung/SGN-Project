webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Menubutton___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Menubutton/ */ "./components/Menubutton/index.js");
/* harmony import */ var _Branchbutton___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Branchbutton/ */ "./components/Branchbutton/index.js");











var HeaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Header__HeaderStyle",
  componentId: "sc-15anyyl-0"
})(["display:flex;justify-content:space-between;align-items:center;position:relative;height:53px;padding:0 16px 0 0;", ";font:", ";z-index:5;@media screen and (max-width:992px){background-color:#005874;height:84px;padding:0 16px;}a{text-decoration:none;}"], function (props) {
  return props.primary ? "background-color: ".concat(props.theme.colorPrimary) : "background-color: ".concat(props.theme.colorLightGrey);
}, function (_ref) {
  var theme = _ref.theme;
  return theme.fontMobileH1;
});
var NavStyle = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Header__NavStyle",
  componentId: "sc-15anyyl-1"
})(["display:flex;justify-content:space-evenly;a{color:black;margin:0 10px;}@media screen and (max-width:992px){display:none;}"]);
var NoDesktop = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Header__NoDesktop",
  componentId: "sc-15anyyl-2"
})(["@media screen and (min-width:992px){display:none;}"]);
var BranchMenu = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Header__BranchMenu",
  componentId: "sc-15anyyl-3"
})(["display:flex;cursor:pointer;align-items:center;"]);
var BranchNav = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Header__BranchNav",
  componentId: "sc-15anyyl-4"
})(["padding:50px 0 0 0;box-sizing:border-box;height:100vh;position:fixed;top:0;left:0;display:flex;flex-direction:column;p{display:flex;align-items:center;border:black solid 1px;padding:0 5px;height:40px;font-family:sans-serif;}@keyframes appear{0%{opacity:0;}100%{opacity:1;}}@keyframes slideIn{0%{transform:translateX(-2%);}100%{transform:translateX(0);}}@keyframes shrink{0%{width:95%;}100%{width:90%;}}"]);

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      menuOpen: false,
      branchOpen: false
    };
    _this.handleBranchClick = _this.handleBranchClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleMenuClick = _this.handleMenuClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "handleMenuClick",
    value: function handleMenuClick() {
      this.setState(function (prevState) {
        return {
          menuOpen: !prevState.menuOpen
        };
      });
    }
  }, {
    key: "handleBranchClick",
    value: function handleBranchClick() {
      this.setState(function (prevState) {
        return {
          branchOpen: !prevState.branchOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeaderStyle, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NoDesktop, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Logo")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Branchbutton___WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavStyle, {
        primary: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "About Us")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/branches"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Branches")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/events"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Events")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/contribute"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Contribute")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Contact us"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NoDesktop, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Menubutton___WEBPACK_IMPORTED_MODULE_9__["default"], null)));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.dd54e9c6057a7c40fbdf.hot-update.js.map