"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: bisque;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 2px 20px;\\r\\n  width: 305px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.heading h1 {\\r\\n  font-weight: 100;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.tasklist {\\r\\n  width: 325px;\\r\\n}\\r\\n\\r\\n#tasks {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#taskchk {\\r\\n  display: flex;\\r\\n  gap: 5px;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n#taskdiv {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 2px 20px;\\r\\n  margin-bottom: 1px;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  display: flex;\\r\\n  gap: 10%;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.item label {\\r\\n  width: 325px;\\r\\n}\\r\\n\\r\\n.list-head {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.list-head input {\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 2px 20px;\\r\\n  width: 305px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.list-head button {\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.clear button {\\r\\n  border: none;\\r\\n  width: 325px;\\r\\n  height: 50px;\\r\\n  border-radius: 4px;\\r\\n  font-size: 15px;\\r\\n  box-shadow: 0 2px 20px;\\r\\n}\\r\\n\\r\\n.itme-desc {\\r\\n  width: 267px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.task-div {\\r\\n  display: flex;\\r\\n  gap: 6px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_deltask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/deltask.js */ \"./src/modules/deltask.js\");\n/* harmony import */ var _modules_newtask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newtask.js */ \"./src/modules/newtask.js\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/populate.js */ \"./src/modules/populate.js\");\n/* harmony import */ var _modules_clearCompletedTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearCompletedTasks.js */ \"./src/modules/clearCompletedTasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* eslint-disable */\r\n// import _, { indexOf } from 'lodash';\r\n\r\n/* eslint-enable */\r\n\r\nconst form = document.getElementById('form');\r\n\r\n//  add a task\r\n\r\nform.addEventListener('submit', _modules_newtask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n//  delete a task\r\n\r\ndocument.addEventListener('click', (e) => {\r\n  if (e.target.className === 'fa-solid fa-xmark') {\r\n    (0,_modules_deltask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id);\r\n  }\r\n});\r\n\r\n//  get tasks from localstorage\r\n\r\n(0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\nconst clearTasks = document.getElementById('clear-btn');\r\n\r\n// Clear completed tasks\r\n\r\nclearTasks.addEventListener('click', _modules_clearCompletedTasks_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n\r\n// edit task\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/clearCompletedTasks.js":
/*!********************************************!*\
  !*** ./src/modules/clearCompletedTasks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaytasks.js */ \"./src/modules/displaytasks.js\");\n\r\n\r\nconst clearCompletedTasks = () => {\r\n  _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.todo.clearCompleted();\r\n  (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTasks);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearCompletedTasks.js?");

/***/ }),

/***/ "./src/modules/deltask.js":
/*!********************************!*\
  !*** ./src/modules/deltask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaytasks.js */ \"./src/modules/displaytasks.js\");\n\r\n\r\nconst delTask = (index) => {\r\n  _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.todo.deleteTask(index);\r\n  _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.todo.saveTask();\r\n  (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delTask);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/deltask.js?");

/***/ }),

/***/ "./src/modules/displaytasks.js":
/*!*************************************!*\
  !*** ./src/modules/displaytasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\n/* harmony import */ var _listTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listTask.js */ \"./src/modules/listTask.js\");\n\r\n/* eslint-disable */\r\nconst todo = new _listTask_js__WEBPACK_IMPORTED_MODULE_0__.listTask();\r\n/* eslint-enable */\r\n\r\nconst listSection = document.querySelector('.tasks');\r\n\r\n//  show tasks\r\n\r\nconst displayTasks = () => {\r\n  listSection.replaceChildren();\r\n  if (todo.allTasks.length > 0) {\r\n    listSection.style.display = 'block';\r\n    const listContainer = document.createElement('ul');\r\n    listContainer.className = 'item';\r\n    listSection.appendChild(listContainer);\r\n    todo.allTasks.map((a) => {\r\n      const list = document.createElement('li');\r\n      list.className = 'itme-desc';\r\n\r\n      const descrptContainer = document.createElement('div');\r\n      descrptContainer.className = 'task-div';\r\n      const checkbox = document.createElement('input');\r\n      checkbox.type = 'checkbox';\r\n      checkbox.id = 'checkbox';\r\n      if (a.completed === true) {\r\n        checkbox.checked = 'checked';\r\n      }\r\n\r\n      checkbox.onclick = (e) => {\r\n        todo.completedTask(e.target.checked, a.index);\r\n      };\r\n      descrptContainer.appendChild(checkbox);\r\n\r\n      const descrpt = document.createElement('p');\r\n      descrpt.id = 'taskLabel';\r\n      descrpt.textContent = a.description;\r\n      descrptContainer.appendChild(descrpt);\r\n      list.appendChild(descrptContainer);\r\n\r\n      const deleteIcon = document.createElement('i');\r\n      deleteIcon.className = 'fa-solid fa-xmark';\r\n      deleteIcon.id = a.index;\r\n      list.appendChild(deleteIcon);\r\n\r\n      list.onclick = () => {\r\n        descrpt.contentEditable = 'true';\r\n      };\r\n      listContainer.append(list);\r\n      return list;\r\n    });\r\n    document.createElement('p').addEventListener('keyup', (e) => {\r\n      if (e.target === 'taskLabel') {\r\n        if (e.key === 'Enter') {\r\n          displayTasks();\r\n        } else {\r\n          /* eslint-disable */\r\n          todo.editTask(e.target, a.index);\r\n          /* eslint-enable */\r\n        }\r\n      }\r\n    });\r\n    listSection.appendChild(listContainer);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/displaytasks.js?");

/***/ }),

/***/ "./src/modules/listTask.js":
/*!*********************************!*\
  !*** ./src/modules/listTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listTask)\n/* harmony export */ });\nclass listTask {\r\n  allTasks = [];\r\n\r\n  saveTask() {\r\n    const tasks = JSON.stringify(this.allTasks);\r\n    localStorage.setItem('tasks', tasks);\r\n  }\r\n\r\n  addTask(description) {\r\n    const task = {\r\n      description,\r\n      completed: false,\r\n      index: this.allTasks.length + 1,\r\n    };\r\n    this.allTasks.push(task);\r\n    this.saveTask();\r\n  }\r\n\r\n  deleteTask(index) {\r\n    this.allTasks.splice(index - 1, 1);\r\n    this.updateIndex();\r\n    this.saveTask();\r\n  }\r\n\r\n  getStoredTasks() {\r\n    this.allTasks = JSON.parse(localStorage.getItem('tasks'));\r\n  }\r\n\r\n  editTask(paragraph, index) {\r\n    this.allTasks[index - 1].description = paragraph.textContent;\r\n    this.saveTask();\r\n  }\r\n\r\n  completedTask(status, index) {\r\n    this.allTasks[index - 1].completed = status;\r\n    this.saveTask();\r\n  }\r\n\r\n  clearCompleted() {\r\n    this.allTasks = this.allTasks.filter((b) => b.completed === false);\r\n    this.updateIndex();\r\n    this.saveTask();\r\n  }\r\n\r\n  updateIndex() {\r\n    this.allTasks.map((a) => {\r\n      a.index = this.allTasks.indexOf(a) + 1;\r\n      return a;\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/listTask.js?");

/***/ }),

/***/ "./src/modules/newtask.js":
/*!********************************!*\
  !*** ./src/modules/newtask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaytasks.js */ \"./src/modules/displaytasks.js\");\n\r\n\r\nconst getAddedTodos = () => {\r\n  const newTodo = document.getElementById('task-info');\r\n  const description = newTodo.value;\r\n  if (description !== '') {\r\n    _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.todo.addTask(description);\r\n    (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();\r\n    newTodo.value = '';\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAddedTodos);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/newtask.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaytasks.js */ \"./src/modules/displaytasks.js\");\n\r\n\r\nconst populate = () => {\r\n  if (localStorage.getItem('tasks')) {\r\n    _displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.todo.getStoredTasks();\r\n    (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();\r\n  } else {\r\n    (0,_displaytasks_js__WEBPACK_IMPORTED_MODULE_0__.displayTasks)();\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/populate.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);