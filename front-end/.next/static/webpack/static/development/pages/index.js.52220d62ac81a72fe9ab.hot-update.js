webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Branchbutton/index.js":
/*!******************************************!*\
  !*** ./components/Branchbutton/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);










var ContainerDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Branchbutton__ContainerDiv",
  componentId: "sc-17awsnh-0"
})(["display:flex;align-items:center;cursor:pointer;@media screen and (min-width:992px){background-color:", ";width:237px;justify-content:space-evenly;height:54px;}"], function (props) {
  return props.theme.colorPrimary;
});
var MenuDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Branchbutton__MenuDiv",
  componentId: "sc-17awsnh-1"
})(["transition:all 0.2s ease;width:100%;position:fixed;left:0;top:0;overflow-y:scroll;display:flex;padding:85px 0 0 0;flex-direction:column;z-index:-1;height:100vh;@media screen and (min-width:992px){padding:54px 0 0 0;width:236px;height:100vh;background-color:rgba(224,224,224,0.98);position:fixed;}"]);
var BranchesDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Branchbutton__BranchesDiv",
  componentId: "sc-17awsnh-2"
})(["display:flex;flex-direction:column;overflow:hidden;"]);
var BranchLink = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "Branchbutton__BranchLink",
  componentId: "sc-17awsnh-3"
})(["width:100%;margin:0;height:63px;color:black;display:flex;align-items:center;padding:0 0 0 25px;cursor:pointer;img{margin:0 15px 0 0;}"]);
var NoMobile = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Branchbutton__NoMobile",
  componentId: "sc-17awsnh-4"
})(["@media screen and (max-width:992px){display:none;}"]);
/* MenuButton.jsx */

var BranchButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BranchButton, _React$Component);

  function BranchButton(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BranchButton);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BranchButton).call(this, props));
    _this.state = {
      open: _this.props.open ? _this.props.open : false,
      branches: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BranchButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('http://localhost:8888/wp-json/wp/v2/branches').then(function (response) {
        // handle success
        console.log(response.data);

        _this2.setState({
          branches: response.data
        });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var styles = {
        menu: {
          height: this.state.open ? "100vh" : "0",
          maxHeight: this.state.open ? "1100px" : "0"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContainerDiv, {
        onClick: this.props.onClick ? this.props.onClick : function () {
          _this3.handleClick();
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "V\xE4lj Stad"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "15",
        height: "8",
        viewBox: "0 0 15 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M1 1L7.5 7L14 0.999998",
        stroke: "white",
        strokeWidth: "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuDiv, {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.menu)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BranchesDiv, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NoMobile, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BranchLink, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        height: "16",
        width: "16",
        src: "https://image.flaticon.com/icons/svg/25/25694.svg"
      }), "Startsida"))), this.state.branches.map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: key,
          href: "/branches/".concat(item.slug, "?slug=").concat(item.slug, "}"),
          as: "/branches/".concat(item.slug)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BranchLink, {
          style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, {
            backgroundColor: key % 2 == 0 ? 'rgba(238, 238, 238, 0.97)' : 'rgba(224, 224, 224, 0.98)'
          })
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          height: "16",
          width: "16",
          src: "https://image.flaticon.com/icons/svg/447/447031.svg"
        }), item.acf.name));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BranchLink, {
        href: "https://instagram.com"
      }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BranchLink, {
        href: "https://facebook.com"
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BranchLink, null, "Contact us")))));
    }
  }]);

  return BranchButton;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BranchButton);

/***/ })

})
//# sourceMappingURL=index.js.52220d62ac81a72fe9ab.hot-update.js.map