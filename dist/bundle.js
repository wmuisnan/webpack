/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	// for(let i = 0; i < 3; i++){
	// 	console.log('inner', i);

	// }

	// console.log('outer',i);

	// 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量

	var a = [];

	var _loop = function _loop(i) {
	  a[i] = function () {
	    console.log(i);
	  };
	};

	for (var i = 0; i < 10; i++) {
	  _loop(i);
	}
	a[1](); // 6

	// sumrise
	// 1. block scope
	// 2. iteration each one is new
	// 3. 不存在变量提升

	// 不存在变量提升

	console.log(foo); // 输出undefined
	console.log(bar); // 报错ReferenceError -->没报错

	var foo = 2;
	var bar = 2;

	var tmp = 123;

	if (true) {
	  _tmp = 'abc'; // ReferenceError -->没报错
	  var _tmp = void 0;
	}

/***/ }
/******/ ]);