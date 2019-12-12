(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["formwell"] = factory(require("React"), require("ReactDOM"));
	else
		root["formwell"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./test/App.js":
/*!*********************!*\
  !*** ./test/App.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/Formwell'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./test/utils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\nvar _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'persisted'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n    List = _require.List,\n    Group = _require.Group,\n    Record = _require.Record,\n    Head = _require.Head; // ============================================================================\n\n\nvar optionTypes = {\n  entry: 'String'\n};\nvar optionHead = new Head(optionTypes),\n    optionGenerated = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(optionTypes, {\n  length: 40\n});\nvar options = optionHead.createTableFromColumnLists(optionGenerated);\nconsole.log(options);\noptions = options.cascade(function (rec) {\n  return rec.get('entry').length;\n}, function (desc, ances) {\n  var descCode = desc.get('entry'),\n      ancesCode = ances.get('entry');\n  return descCode.slice(0, ancesCode.length).includes(ancesCode);\n});\nconsole.log(optionGenerated, options); // ============================================================================\n\nvar entryTypes = {\n  entry: 'String',\n  accrual: 'Float',\n  corrCategory: 'Path',\n  year: 'Integer',\n  month: 'Integer'\n};\nvar entryHead = new Head(entryTypes);\n\nfunction entries(entryHead, year, month) {\n  var entryGenerated = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(entryTypes, {\n    length: 80,\n    cascadedOptions: options\n  }, {\n    year: year,\n    month: month\n  }),\n      entries = entryHead.createTableFromColumnLists(entryGenerated);\n  return entries;\n}\n\nvar annualEntries = new List(0);\n\nfor (var year = 2001; year < 2010; year++) {\n  for (var month = 1; month <= 12; month++) {\n    var _annualEntries;\n\n    (_annualEntries = annualEntries).push.apply(_annualEntries, _toConsumableArray(entries(entryHead, year, month)));\n  }\n} // ============================================================================\n\n\nannualEntries = annualEntries.grip(function (e) {\n  return e.get('year');\n}, {\n  desc: '年',\n  style: 'tabs'\n}).iter(function (k, v) {\n  return v.grip(function (e) {\n    return e.get('month');\n  }, {\n    desc: '月'\n  }).iter(function (k, v) {\n    return v.cascade(function (rec) {\n      return rec.get('entry').length;\n    }, function (desc, ances) {\n      var descCode = desc.get('entry'),\n          ancesCode = ances.get('entry');\n      return descCode.slice(0, ancesCode.length).includes(ancesCode);\n    });\n  });\n});\nentryHead.setColProp({\n  colDesc: '索引',\n  isExpandToggler: true\n}, 'entry');\nentryHead.setColProp({\n  colDesc: '年'\n}, 'year');\nentryHead.setColProp({\n  colDesc: '对应项',\n  options: options,\n  displayKey: 'entry'\n}, 'corrCategory');\nentryHead.setColProp({\n  colDesc: '月'\n}, 'month');\nentryHead.setColProp({\n  colDesc: '金额',\n  editable: true\n}, 'accrual'); // ============================================================================\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var tableAttr = {\n        expandable: true,\n        controllable: true,\n        sortable: true,\n        savable: true\n      };\n      var props = {\n        data: annualEntries,\n        head: entryHead,\n        tableAttr: tableAttr\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          flex: true\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/Formwell'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), props));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));\n\n//# sourceURL=webpack://formwell/./test/App.js?");

/***/ }),

/***/ "./test/utils.js":
/*!***********************!*\
  !*** ./test/utils.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return genCols; });\nfunction randomVowel() {\n  var vowels = ['ch', 'ma', 'po', 're', 'ly', 'se', 'ta', 'ki', 'te', 'co', 'mu'];\n  var index = (Math.random() * (vowels.length - 1)).toFixed(0);\n  return vowels[index];\n}\n\nvar gen = {\n  String: function String(_ref) {\n    var _ref$length = _ref.length,\n        length = _ref$length === void 0 ? 20 : _ref$length,\n        _ref$newRate = _ref.newRate,\n        newRate = _ref$newRate === void 0 ? 1.8 : _ref$newRate;\n    var dict = [];\n\n    while (dict.length < length) {\n      var index = parseInt((Math.random() * dict.length * newRate).toFixed(0)),\n          vowel = \"\".concat(index < dict.length ? dict[index] : '').concat(randomVowel());\n\n      if (dict.indexOf(vowel) === -1) {\n        dict.push(vowel);\n      }\n    }\n\n    return dict;\n  },\n  Integer: function Integer(_ref2) {\n    var _ref2$length = _ref2.length,\n        length = _ref2$length === void 0 ? 20 : _ref2$length,\n        _ref2$range = _ref2.range,\n        range = _ref2$range === void 0 ? [0, 100] : _ref2$range;\n    var list = [];\n\n    for (var i = 0; i < length; i++) {\n      list.push((range[0] + Math.random() * (range[1] - range[0])).toFixed(0));\n    }\n\n    return list;\n  },\n  Float: function Float(_ref3) {\n    var _ref3$length = _ref3.length,\n        length = _ref3$length === void 0 ? 20 : _ref3$length,\n        _ref3$range = _ref3.range,\n        range = _ref3$range === void 0 ? [0, 100] : _ref3$range;\n    var list = [];\n\n    for (var i = 0; i < length; i++) {\n      list.push(range[0] + Math.random() * (range[1] - range[0]));\n    }\n\n    return list;\n  },\n  Date: function (_Date) {\n    function Date(_x) {\n      return _Date.apply(this, arguments);\n    }\n\n    Date.toString = function () {\n      return _Date.toString();\n    };\n\n    return Date;\n  }(function (_ref4) {\n    var _ref4$length = _ref4.length,\n        length = _ref4$length === void 0 ? 20 : _ref4$length;\n    return Array(length).fill(0).map(function (e) {\n      return new Date(Math.random() * 2e5);\n    });\n  }),\n  Interval: function Interval(_ref5) {\n    var _ref5$length = _ref5.length,\n        length = _ref5$length === void 0 ? 20 : _ref5$length;\n    return Array(length).fill(0).map(function (e) {\n      var head = new Date(Math.random() * 2e5),\n          tail = new Date(Math.random() * 2e5);\n      return [head, tail];\n    });\n  },\n  Path: function Path(_ref6) {\n    var _ref6$length = _ref6.length,\n        length = _ref6$length === void 0 ? 20 : _ref6$length,\n        _ref6$cascadedOptions = _ref6.cascadedOptions,\n        cascadedOptions = _ref6$cascadedOptions === void 0 ? [] : _ref6$cascadedOptions,\n        _ref6$optionKey = _ref6.optionKey,\n        optionKey = _ref6$optionKey === void 0 ? 'entry' : _ref6$optionKey;\n    var res = [];\n\n    for (var i = 0; i < length; i++) {\n      var path = [0];\n      var ref = cascadedOptions;\n\n      while (ref.length !== 0) {\n        var index = (Math.random() * (ref.length - 1)).toFixed(0);\n        path.push(ref[index].get(optionKey).valueOf());\n        ref = ref[index].heir;\n      }\n\n      res.push(path);\n    }\n\n    return res;\n  }\n};\nfunction genCols(typeSpec, options) {\n  var defVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var _options$length = options.length,\n      length = _options$length === void 0 ? 20 : _options$length;\n  var table = {};\n\n  for (var key in typeSpec) {\n    var type = typeSpec[key];\n\n    if (key in defVal) {\n      table[key] = Array(length).fill(defVal[key]);\n    } else {\n      table[key] = gen[type](options);\n    }\n  }\n\n  return {\n    length: length,\n    table: table\n  };\n}\n\n//# sourceURL=webpack://formwell/./test/utils.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://formwell/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://formwell/external_%22ReactDOM%22?");

/***/ })

/******/ });
});