/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bin/core.js":
/*!*********************!*\
  !*** ./bin/core.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./bin/utils.js\");\n\r\n\r\n\r\n\r\n// !兼容系统，把  \\  统一成   /\r\nfunction formatPath(p) {\r\n  if (p && typeof p === 'string') {\r\n    // console.log(path.sep) // !windows系统返回\\  mac返回/\r\n    if ((path__WEBPACK_IMPORTED_MODULE_0___default().sep) === '/') {\r\n      return p\r\n    } else {\r\n      return p.replace(/\\\\/g, '/')\r\n    }\r\n  }\r\n  return p\r\n}\r\n\r\nconsole.log(path__WEBPACK_IMPORTED_MODULE_0___default().resolve('.'))\r\nconsole.log(process.cwd())\r\n\r\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_1__.exists)(`D:\\\\web\\\\vue\\\\lwj\\\\lwj-cli`)) // !手动输入的这种注意要  转义\r\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_1__.exists)(`D:/web/vue/lwj/lwj-cli`)) \r\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_1__.exists)(path__WEBPACK_IMPORTED_MODULE_0___default().resolve('.'))); // !非手动输入的D:\\web\\vue\\lwj\\lwj-cli  可以\r\nconsole.log(formatPath(path__WEBPACK_IMPORTED_MODULE_0___default().resolve('.')))\r\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_1__.exists)(formatPath(path__WEBPACK_IMPORTED_MODULE_0___default().resolve('.'))));\r\n\r\nconst LwjLib = __webpack_require__(/*! lwj-lib */ \"../lwj-lib/lib/index.js\")\r\nconsole.log(LwjLib.add(1,2))\r\n\r\n;(async function() {\r\n  await new Promise((resolve) => {\r\n    setTimeout(resolve,1000)\r\n  })\r\n  console.log(111111)\r\n})()\n\n//# sourceURL=webpack://lwjmzla-cli/./bin/core.js?");

/***/ }),

/***/ "./bin/utils.js":
/*!**********************!*\
  !*** ./bin/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exists\": () => (/* binding */ exists)\n/* harmony export */ });\n/* harmony import */ var path_exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-exists */ \"./node_modules/path-exists/index.js\");\n\r\n\r\n\r\nfunction exists(path) {\r\n    return (0,path_exists__WEBPACK_IMPORTED_MODULE_0__.pathExistsSync)(path)\r\n}\n\n//# sourceURL=webpack://lwjmzla-cli/./bin/utils.js?");

/***/ }),

/***/ "../lwj-lib/lib/index.js":
/*!*******************************!*\
  !*** ../lwj-lib/lib/index.js ***!
  \*******************************/
/***/ ((module) => {

eval("console.log('lwj-lib-----6')\r\nmodule.exports= {\r\n  add(x,y) {\r\n    return x + y\r\n  },\r\n  create({option,param}) {\r\n    console.log(option,param)\r\n  }\r\n}\n\n//# sourceURL=webpack://lwjmzla-cli/../lwj-lib/lib/index.js?");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./node_modules/path-exists/index.js":
/*!*******************************************!*\
  !*** ./node_modules/path-exists/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pathExists\": () => (/* binding */ pathExists),\n/* harmony export */   \"pathExistsSync\": () => (/* binding */ pathExistsSync)\n/* harmony export */ });\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n\n\nasync function pathExists(path) {\n\ttry {\n\t\tawait node_fs__WEBPACK_IMPORTED_MODULE_0__.promises.access(path);\n\t\treturn true;\n\t} catch {\n\t\treturn false;\n\t}\n}\n\nfunction pathExistsSync(path) {\n\ttry {\n\t\tnode_fs__WEBPACK_IMPORTED_MODULE_0__.accessSync(path);\n\t\treturn true;\n\t} catch {\n\t\treturn false;\n\t}\n}\n\n\n//# sourceURL=webpack://lwjmzla-cli/./node_modules/path-exists/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./bin/core.js");
/******/ 	
/******/ })()
;