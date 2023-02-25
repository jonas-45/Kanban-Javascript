/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: darksalmon;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: azure;\\r\\n  height: 90px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  width: 100%;\\r\\n  padding: 0 50px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  border-radius: 50%;\\r\\n  color: rgb(70, 124, 53);\\r\\n  text-decoration: none;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.container .header {\\r\\n  text-align: center;\\r\\n  font-size: 32px;\\r\\n  color: #f29191;\\r\\n  transition: color 0.4s ease-in-out;\\r\\n  cursor: pointer;\\r\\n  margin-top: -50px;\\r\\n}\\r\\n\\r\\n.loading-div {\\r\\n width: 100%;\\r\\n display: flex;\\r\\n justify-content: center;\\r\\n align-items: center;\\r\\n margin-top: 200px;\\r\\n margin-bottom: auto;\\r\\n}\\r\\n\\r\\n.nav-menu {\\r\\n  display: flex;\\r\\n  column-gap: 30px;\\r\\n  padding: 2px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.navlink {\\r\\n  margin-right: 30px;\\r\\n  color: #e60b0b;\\r\\n  font-size: 20px;\\r\\n  font-weight: 800;\\r\\n  text-decoration: none;\\r\\n  transition: all 0.1s;\\r\\n}\\r\\n\\r\\n.navlink:hover {\\r\\n  color: #c7850a;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  color: rgb(11, 98, 101);\\r\\n}\\r\\n\\r\\n/* styles for the meals display section */\\r\\n#meals {\\r\\n  padding: 50px 150px;\\r\\n}\\r\\n\\r\\n.total-meals {\\r\\n  display: none;\\r\\n  font-size: 20px;\\r\\n  color: #444;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.display-meals {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));\\r\\n  gap: 3rem;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n  background-color: #fff;\\r\\n  padding: 7px;\\r\\n  transition: all 1s ease-in-out;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  transform: scale(1.1);\\r\\n  cursor: crosshair;\\r\\n}\\r\\n\\r\\n.meal-image {\\r\\n  width: 100%;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.like-image {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  cursor: pointer;\\r\\n  transform: all 1s;\\r\\n}\\r\\n\\r\\n.like-image:active {\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n\\r\\n.meal-data {\\r\\n  width: 100%;\\r\\n  margin-top: 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-size: 18px;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.likes-text {\\r\\n  margin-left: auto;\\r\\n  font-size: 17px;\\r\\n  margin-right: 10px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  padding: 10px 20px;\\r\\n  margin-bottom: 10px;\\r\\n  cursor: pointer;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n#pop-up {\\r\\n  display: none;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  border: 1px solid blueviolet;\\r\\n  background: rgba(0, 0, 0, 0.6);\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#display-details {\\r\\n  background-color: white;\\r\\n  top: 2%;\\r\\n  bottom: 2%;\\r\\n  left: 25%;\\r\\n  right: 25%;\\r\\n  overflow-y: auto;\\r\\n  padding: 10px 70px;\\r\\n  box-shadow: 0 0.5rem 1rem rgba(218, 3, 3, 0.1);\\r\\n  border-radius: 0.5rem;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 95%;\\r\\n  flex-grow: 1;\\r\\n  height: 40%;\\r\\n}\\r\\n\\r\\n.image img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  margin: 0 10px 0 0;\\r\\n  flex-grow: 1;\\r\\n  border-radius: 6px;\\r\\n}\\r\\n\\r\\n.close-img-container {\\r\\n  position: sticky;\\r\\n  width: 100%;\\r\\n  top: 3%;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.close-popup {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  cursor: pointer;\\r\\n  \\r\\n}\\r\\n\\r\\n.image i {\\r\\n  font-size: 30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.namefood {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 10px;\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  margin-top: 10px;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.instructions {\\r\\n  font-size: 17px;\\r\\n  padding: 7px;\\r\\n  margin-bottom: 10px;\\r\\n  word-spacing: 1.5px;\\r\\n}\\r\\n\\r\\n.list-items {\\r\\n  padding: 5px;\\r\\n  border-radius: 5%;\\r\\n  margin: 5px;\\r\\n  background-color: rgb(189, 181, 181);\\r\\n  list-style: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.list-items:hover {\\r\\n  background-color: #a12e54;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.ingridient-list {\\r\\n  display: flex;\\r\\n  flex-flow: row wrap;\\r\\n  column-gap: 5%;\\r\\n}\\r\\n\\r\\n.no-comments {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n  margin: 20px 0;\\r\\n  height: 200px;\\r\\n}\\r\\n\\r\\n.addcomment {\\r\\n  font-size: 24px;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.form textarea {\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  margin-top: 10px;\\r\\n  margin-right: 20%;\\r\\n  margin-left: auto;\\r\\n  background-color: #f02;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  padding: 10px;\\r\\n  font-size: 15px;\\r\\n  box-shadow: 2px 4px 5px rgb(158, 13, 103);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comments h3 {\\r\\n  color: #fff;\\r\\n  background-color: #c70a23;\\r\\n  padding: 9px 20px;\\r\\n  font-size: 20px;\\r\\n  font-weight: 700;\\r\\n  border-top-left-radius: 10px;\\r\\n  border-top-right-radius: 10px;\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.comments h3 span {\\r\\n  text-align: center;\\r\\n  padding: 2px 10px;\\r\\n  color: #fff;\\r\\n  display: inline-block;\\r\\n  font-style: normal;\\r\\n  border-radius: 50%;\\r\\n  margin-left: 1em;\\r\\n  border: 1px dotted #fff;\\r\\n}\\r\\n\\r\\n.borderless {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.comments-list {\\r\\n  padding-left: 0;\\r\\n}\\r\\n\\r\\n.comments ul {\\r\\n  position: relative;\\r\\n  background-color: #fff;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comments ul li {\\r\\n  list-style: none;\\r\\n  padding: 20px 5px 20px 10px;\\r\\n  width: 100%;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 5px 25px rgba(20, 1, 1, 0.1);\\r\\n  transition: transform 0.5s;\\r\\n}\\r\\n\\r\\n.comments ul li:hover {\\r\\n  transform: scale(0.98);\\r\\n  z-index: 100;\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n  font-weight: 400;\\r\\n  background-color: #ee0c57;\\r\\n  box-shadow: 0 5px 25px rgba(8, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.input {\\r\\n  padding: 7px;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: azure;\\r\\n  padding: 10px 0;\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  bottom: 0;\\r\\n  color: hotpink;\\r\\n}\\r\\n\\r\\n.container-footer {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\nfooter a {\\r\\n  color: navy;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban-javascript/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban-javascript/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _images_loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/loading.gif */ \"./src/images/loading.gif\");\n/* harmony import */ var _images_like_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/like-image.png */ \"./src/images/like-image.png\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_commentCountapi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentCountapi.js */ \"./src/modules/commentCountapi.js\");\n/* harmony import */ var _modules_htmlTemplates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/htmlTemplates.js */ \"./src/modules/htmlTemplates.js\");\n/* harmony import */ var _modules_mealsCounter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/mealsCounter.js */ \"./src/modules/mealsCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst getAndDisplayLikes = async () => {\r\n  const likesArray = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\r\n  (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)(likesArray);\r\n};\r\n\r\nconst showLoading = () => {\r\n  const img = document.createElement('img');\r\n  img.src = _images_loading_gif__WEBPACK_IMPORTED_MODULE_1__;\r\n  img.alt = 'Loading image';\r\n  document.querySelector('.loading-div').appendChild(img);\r\n};\r\n\r\nconst displayComments = async (mealId) => {\r\n  const commentsArr = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.getComments)(mealId);\r\n  const commentCounterNode = document.querySelector('.comments-count');\r\n  commentCounterNode.innerText = (0,_modules_commentCountapi_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commentsArr);\r\n  commentCounterNode.classList.remove('borderless');\r\n  const ul = document.querySelector('.comments-list');\r\n  const noComments = document.querySelector('.no-comments');\r\n  if (commentsArr.length > 0) {\r\n    noComments.classList.add('hide');\r\n    ul.innerHTML = '';\r\n    commentsArr.forEach((comment) => {\r\n      if (Object.keys(comment.comment).length !== 0) {\r\n        const li = document.createElement('li');\r\n        li.innerText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\r\n        ul.appendChild(li);\r\n      }\r\n    });\r\n\r\n    return;\r\n  }\r\n\r\n  noComments.innerText = 'No comments available';\r\n};\r\n\r\nconst addCommentButtonListener = async (mealId) => {\r\n  const form = document.getElementById('form');\r\n  form.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const comment = {\r\n      item_id: mealId,\r\n      username: document.getElementById('username').value,\r\n      comment: document.getElementById('comment').value,\r\n    };\r\n    const postComment = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.sendComment)(comment);\r\n    if (postComment) {\r\n      displayComments(mealId);\r\n    }\r\n\r\n    form.reset();\r\n  });\r\n};\r\n\r\n// pop up\r\nconst displayMealIngridients = async (ul, meal) => {\r\n  const ingredients = [];\r\n  Object.keys((meal[0])).forEach((item) => {\r\n    if (item.startsWith('strIng')) {\r\n      ingredients.push(meal[0][item]);\r\n    }\r\n  });\r\n  const cleanArr = ingredients.filter((str) => str !== '' && str !== null);\r\n  cleanArr.forEach((ingridient) => {\r\n    const li = document.createElement('li');\r\n    li.classList.add('list-items');\r\n    li.innerHTML = ingridient;\r\n    ul.appendChild(li);\r\n  });\r\n};\r\n\r\nconst displayMealDetails = async (container, mealId) => {\r\n  const meal = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.getMealDetails)(mealId);\r\n  //const meal = await allMeals.find((meal) => meal.idMeal === mealId);\r\n  document.querySelector('body').style.overflow = 'hidden';\r\n  container.innerHTML = (0,_modules_htmlTemplates_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(meal[0]);\r\n  document.querySelector('.comments-count').classList.add('borderless');\r\n  addCommentButtonListener(meal.idMeal);\r\n  displayComments(meal.idMeal);\r\n  const ul = document.querySelector('.ingridient-list');\r\n  displayMealIngridients(ul, meal);\r\n};\r\n\r\nconst addClickListernersToLikeBtns = async () => {\r\n  const likeImgBtns = document.querySelectorAll('.like-image');\r\n  Array.from(likeImgBtns).forEach((imgBtn) => {\r\n    imgBtn.addEventListener('click', (e) => {\r\n      const itemId = {\r\n        item_id: e.target.getAttribute('data-index'),\r\n      };\r\n\r\n      if ((0,_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.saveLike)(itemId)) {\r\n        const likes = parseInt(e.target.parentNode.nextElementSibling.innerText, 10) + 1;\r\n        e.target.parentNode.nextElementSibling.innerHTML = `${likes} Likes`;\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nconst removePopupListener = () => {\r\n  document.querySelector('.close-popup').addEventListener('click', () => {\r\n    const popup = document.getElementById('pop-up');\r\n    popup.style.position = 'static';\r\n    popup.style.display = 'none';\r\n    document.querySelector('body').style.overflow = 'auto';\r\n  });\r\n};\r\n\r\nconst popupPage = async () => {\r\n  const commentBtns = document.querySelectorAll('.comment-button');\r\n  Array.from(commentBtns).forEach(async (btn) => {\r\n    btn.addEventListener('click', async (e) => {\r\n      const popupContainer = document.getElementById('pop-up');\r\n      const details = document.getElementById('display-details');\r\n      await displayMealDetails(details, e.target.getAttribute('data-id'));\r\n      // await displayMealIngridients(details, e.target.getAttribute('data-id'));\r\n      popupContainer.style.display = 'flex';\r\n      popupContainer.style.position = 'fixed';\r\n\r\n      removePopupListener();\r\n    });\r\n  });\r\n};\r\n\r\nconst displayMealsCounter = async (mealsArr) => {\r\n  const mealsTotal = await (0,_modules_mealsCounter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(mealsArr);\r\n  document.getElementById('Seafood').innerHTML = `Seafood: (${mealsTotal})`;\r\n};\r\n\r\nconst displayMeals = async () => {\r\n  showLoading();\r\n  const displayContainer = document.querySelector('.display-meals');\r\n\r\n  const getAllMeals = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_3__.getMeals)();\r\n  let mealsHtml = '';\r\n  getAllMeals.forEach((meal) => {\r\n    mealsHtml += `<div class=\"card\">\r\n    <img class=\"meal-image\" src=\"${meal.strMealThumb}/preview\" alt=\"meal image\">\r\n    <div class=\"meal-data\">\r\n      <label>${meal.strMeal}</label>\r\n      <img class=\"like-image\" data-index=\"${meal.idMeal}\" src=\"${_images_like_image_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"like meal button\">\r\n    </div>\r\n    <p class=\"likes-text\" id=\"${meal.idMeal}\">loading...</p>\r\n    <button type=\"button\" data-id=\"${meal.idMeal}\" class=\"comment-button\">Comments</button>\r\n  </div>`;\r\n  });\r\n\r\n  document.querySelector('.loading-div').style.display = 'none';\r\n  displayContainer.innerHTML = mealsHtml;\r\n  displayMealsCounter(getAllMeals);\r\n  getAndDisplayLikes();\r\n  addClickListernersToLikeBtns();\r\n  popupPage();\r\n};\r\n\r\ndisplayMeals();\r\n\n\n//# sourceURL=webpack://kanban-javascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getDetails\": () => (/* binding */ getDetails),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getMealDetails\": () => (/* binding */ getMealDetails),\n/* harmony export */   \"getMeals\": () => (/* binding */ getMeals),\n/* harmony export */   \"saveLike\": () => (/* binding */ saveLike),\n/* harmony export */   \"sendComment\": () => (/* binding */ sendComment)\n/* harmony export */ });\n/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ \"./src/modules/consts.js\");\n\r\n\r\nconst getMeals = async () => {\r\n  const mealsArr = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.API_URL)\r\n    .then((resp) => resp.json())\r\n    .catch((error) => error);\r\n\r\n  return mealsArr.meals;\r\n};\r\n\r\nconst getMealDetails = async (id) => {\r\n  const details = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)\r\n    .then((resp) => resp.json())\r\n    .catch((error) => error);\r\n  return details.meals;\r\n};\r\n\r\nconst getDetails = async (detailsId) => {\r\n  const mealsDetails = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.GETMEAL + detailsId);\r\n  return mealsDetails.json().meals;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const likes = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.LIKES_URL)\r\n    .then((res) => res.json())\r\n    .catch((err) => err);\r\n\r\n  return likes;\r\n};\r\n\r\nconst getItemLikes = (likesArr, itemId) => {\r\n  const likesObj = likesArr.find((itemObj) => itemObj.item_id === itemId);\r\n  return likesObj === undefined ? 0 : likesObj.likes;\r\n};\r\n\r\nconst displayLikes = (likesArr) => {\r\n  const likesTexts = document.querySelectorAll('.likes-text');\r\n  Array.from(likesTexts).forEach((likesnode) => {\r\n    likesnode.textContent = `${getItemLikes(likesArr, likesnode.getAttribute('id'))} Likes`;\r\n  });\r\n};\r\n\r\nconst saveLike = async (itemId) => {\r\n  const sendLikeStatus = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.LIKES_URL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(itemId),\r\n  }).then(() => true)\r\n    .catch(() => false);\r\n\r\n  return sendLikeStatus;\r\n};\r\n\r\nconst sendComment = async (commentObj) => {\r\n  const commentStatus = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.POST_COMMENTS_URL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(commentObj),\r\n  }).then(() => true)\r\n    .catch(() => false);\r\n  return commentStatus;\r\n};\r\n\r\nconst getComments = async (mealId) => {\r\n  const comments = await fetch(_consts_js__WEBPACK_IMPORTED_MODULE_0__.GET_COMMENTS_URL + mealId)\r\n    .then((resp) => resp.json());\r\n  return comments;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://kanban-javascript/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentCountapi.js":
/*!****************************************!*\
  !*** ./src/modules/commentCountapi.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTotalComment = (itemsArr) => (itemsArr.length === undefined ? 0 : itemsArr.length);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTotalComment);\n\n//# sourceURL=webpack://kanban-javascript/./src/modules/commentCountapi.js?");

/***/ }),

/***/ "./src/modules/consts.js":
/*!*******************************!*\
  !*** ./src/modules/consts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"BY_ID\": () => (/* binding */ BY_ID),\n/* harmony export */   \"GETMEAL\": () => (/* binding */ GETMEAL),\n/* harmony export */   \"GET_COMMENTS_URL\": () => (/* binding */ GET_COMMENTS_URL),\n/* harmony export */   \"LIKES_URL\": () => (/* binding */ LIKES_URL),\n/* harmony export */   \"POST_COMMENTS_URL\": () => (/* binding */ POST_COMMENTS_URL)\n/* harmony export */ });\nlet id;\r\nconst API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\r\nconst GETMEAL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;\r\nconst BY_ID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;\r\nconst LIKES_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vehS1XVjnLmMzjCWvntO/likes';\r\nconst POST_COMMENTS_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vehS1XVjnLmMzjCWvntO/comments';\r\nconst GET_COMMENTS_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vehS1XVjnLmMzjCWvntO/comments?item_id=';\r\n\n\n//# sourceURL=webpack://kanban-javascript/./src/modules/consts.js?");

/***/ }),

/***/ "./src/modules/htmlTemplates.js":
/*!**************************************!*\
  !*** ./src/modules/htmlTemplates.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_close_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/close.jpg */ \"./src/images/close.jpg\");\n\r\n/*eslint-disable*/\r\nconst mealDetail = (meal) => {\r\n  let results;\r\n  //meal.forEach((image) => {\r\nresults = `<div class=\"close-img-container\"><img class=\"close-popup\" src=\"${_images_close_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"popup close button\"/></div>\r\n<div class=\"image\"><img\r\nsrc=\"${meal.strMealThumb}\"\r\nalt=\"${meal.strMeal}\"/>\r\n</div>\t\r\n<div class=\"namefood\">\r\n<h1>${meal.strMeal}</h1>\r\n</div>\r\n<div class=\"food-recipe\">\r\n<h2>Ingredients</h2>\r\n<hr>\r\n<div class=\"ingredients\">\r\n</div>\r\n</div>\r\n`;\r\n    results += `\r\n<div class=\"list-container\">\r\n<ul class=\"ingridient-list\">\r\n</ul>\r\n</div>\r\n`;\r\n // meal.forEach((recipe) => {\r\nresults += `\r\n<div class=\"description\">\r\n<h2>Recipe</h2>\r\n<hr>\r\n<p class=\"instructions\">${meal.strInstructions}</p>\r\n</div>\r\n<div class=\"comments\">\r\n<h3>Comments<span class=\"comments-count\">wait..</span></h3>\r\n<p class=\"no-comments\">Loading comments...</p>\r\n<ul class=\"comments-list\">\r\n\r\n</ul>\r\n</div>\r\n<form class=\"form\" id=\"form\">\r\n<div class=\"addcomment\">Add a comment</div>\r\n<input type=\"text\" class=\"input\" id=\"username\" placeholder=\"Your name\" required/>\r\n<textarea class=\"input\" id=\"comment\" placeholder=\"Your Views...\" rows=\"5\" cols=\"20\" required></textarea>\r\n<button type=\"submit\" class=\"btn\">Comments</button>\r\n</form>\r\n`;\r\n // });\r\n\r\n  return results;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealDetail);\r\n\n\n//# sourceURL=webpack://kanban-javascript/./src/modules/htmlTemplates.js?");

/***/ }),

/***/ "./src/modules/mealsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/mealsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalMeals = (mealsArr) => mealsArr.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalMeals);\n\n//# sourceURL=webpack://kanban-javascript/./src/modules/mealsCounter.js?");

/***/ }),

/***/ "./src/images/close.jpg":
/*!******************************!*\
  !*** ./src/images/close.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad1c211225dc27d3345c.jpg\";\n\n//# sourceURL=webpack://kanban-javascript/./src/images/close.jpg?");

/***/ }),

/***/ "./src/images/like-image.png":
/*!***********************************!*\
  !*** ./src/images/like-image.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6e9a73cd6e153f52a36.png\";\n\n//# sourceURL=webpack://kanban-javascript/./src/images/like-image.png?");

/***/ }),

/***/ "./src/images/loading.gif":
/*!********************************!*\
  !*** ./src/images/loading.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34970db13a0575566878.gif\";\n\n//# sourceURL=webpack://kanban-javascript/./src/images/loading.gif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;