/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/css/index.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/css/index.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \"html,\\nbody\\n{\\n\\tmargin:0;\\n\\tpadding:0;\\n}\\n\\nbody\\n{\\n  padding-bottom: 60px;\\n  font-size:16px !important;\\n\\toverflow-x: hidden;\\n\\tbackground: #fff;\\n}\\n\\nul\\n{\\n\\tpadding:0px;\\n\\tmargin:0px;\\n}\\n\\nul li\\n{\\n    list-style-type:none;\\n}\\n\\n.content-container\\n{\\n}\\n.toggle-box li{display: none;}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/comment/index.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/comment/index.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".content-container  li.comment-list {\\n  clear: both;\\n  padding-top: 10px;\\n  z-index: 500;\\n  position: relative;\\n}\\n\\n.comment-list .code-view\\n{\\n  position:absolute;\\n  left:50%;\\n  top:20px;\\n  -webkit-transform:translateX(-50%);\\n      -ms-transform:translateX(-50%);\\n          transform:translateX(-50%);\\n}\\n\\n\\n\\n.comment-container .comment-row\\n{\\n  background: rgba(0, 0, 0, 0.3);\\n  border-radius: 0.106667rem;\\n  position: relative;\\n  text-shadow: 0 0.013333rem 0.013333rem #000000;\\n  -webkit-filter:shadow(Color=rgba(0, 0, 0, 0.5),Direction=0.026667rem,Strength=0);\\n          filter:shadow(Color=rgba(0, 0, 0, 0.5),Direction=0.026667rem,Strength=0);\\n  margin-bottom:0.053333rem;\\n  float: left;\\n  clear: both;\\n  padding-left: 0.133333rem;\\n  padding-right: 0.133333rem;\\n  margin-left: 0.133333rem;\\n  margin-right: 0.133333rem;\\n}\\n\\n.comment-row .comment-left\\n{\\n  color:#DBDBDB;\\n  line-height: 0.8rem;\\n  vertical-align: top;\\n}\\n\\nhtml[data-dpr=\\\"1\\\"] .comment-row .comment-left\\n{\\n  font-size:14px;\\n}\\n\\nhtml[data-dpr=\\\"2\\\"] .comment-row .comment-left\\n{\\n   font-size: 28px;\\n}\\nhtml[data-dpr=\\\"3\\\"] .comment-row .comment-left{\\n  font-size: 42px;\\n}\\n\\n@media all and (min-device-width:980px)\\n{\\n  .comment-row .comment-left\\n  {\\n    font-size: 28px;\\n  }\\n}\\n\\n\\n\\n.comment-row .comment-right\\n{\\n  line-height: 0.8rem;\\n  margin-left:0.133333rem;\\n}\\n\\n\\nhtml[data-dpr=\\\"1\\\"] .comment-row .comment-right\\n{\\n  font-size:14px;\\n}\\n\\nhtml[data-dpr=\\\"2\\\"] .comment-row .comment-right\\n{\\n   font-size: 28px;\\n}\\nhtml[data-dpr=\\\"3\\\"] .comment-row .comment-right{\\n  font-size: 42px;\\n}\\n\\n@media all and (min-device-width:980px)\\n{\\n  .comment-row .comment-right\\n  {\\n    font-size: 28px;\\n  }\\n}\\n\\n.comment-color1\\n{\\n  color: rgba(255, 216, 142, 1);\\n}\\n\\n.comment-color2\\n{\\n  color: rgba(205, 243, 249, 1);\\n}\\n\\n.comment-color3\\n{\\n  color: rgba(182, 159, 255, 1);\\n}\\n\\n.comment-color4\\n{\\n  color: rgba(255, 255, 255, 1);\\n}\\n\\r\\n\\r\\n.comment-list .code-view {\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  top: 20px;\\r\\n  -webkit-transform: translateX(-50%);\\r\\n      -ms-transform: translateX(-50%);\\r\\n          transform: translateX(-50%);\\r\\n}\\r\\n\\r\\n.comment-list .comment-container {\\r\\n  height: auto;\\r\\n  overflow: auto;\\r\\n  top: 10px;\\r\\n  padding: 0 15px 0;\\r\\n  -webkit-box-sizing: border-box;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.comment-container .comment-row {\\r\\n  background: rgba(0, 0, 0, 0.3);\\r\\n  border-radius: 0.106667rem;\\r\\n  position: relative;\\r\\n  text-shadow: 0 0.013333rem 0.013333rem #000000;\\r\\n  -webkit-filter: shadow(Color=rgba(0, 0, 0, 0.5), Direction=0.026667rem, Strength=0);\\r\\n          filter: shadow(Color=rgba(0, 0, 0, 0.5), Direction=0.026667rem, Strength=0);\\r\\n  margin-bottom: 0.053333rem;\\r\\n  float: left;\\r\\n  clear: both;\\r\\n  padding-left: 0.133333rem;\\r\\n  padding-right: 0.133333rem;\\r\\n  margin-left: 0.133333rem;\\r\\n  margin-right: 0.133333rem;\\r\\n}\\r\\n\\r\\n.comment-row .comment-left {\\r\\n  color: #DBDBDB;\\r\\n  line-height: 0.8rem;\\r\\n  vertical-align: top;\\r\\n}\\r\\n\\r\\nhtml[data-dpr=\\\"1\\\"] .comment-row .comment-left {\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\nhtml[data-dpr=\\\"2\\\"] .comment-row .comment-left {\\r\\n  font-size: 28px;\\r\\n}\\r\\n\\r\\nhtml[data-dpr=\\\"3\\\"] .comment-row .comment-left {\\r\\n  font-size: 42px;\\r\\n}\\r\\n\\r\\n@media all and (min-device-width:980px) {\\r\\n  .comment-row .comment-left {\\r\\n    font-size: 28px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.comment-row .comment-right {\\r\\n  line-height: 0.8rem;\\r\\n  margin-left: 0.133333rem;\\r\\n}\\r\\n\\r\\nhtml[data-dpr=\\\"1\\\"] .comment-row .comment-right {\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\nhtml[data-dpr=\\\"2\\\"] .comment-row .comment-right {\\r\\n  font-size: 28px;\\r\\n}\\r\\n\\r\\nhtml[data-dpr=\\\"3\\\"] .comment-row .comment-right {\\r\\n  font-size: 42px;\\r\\n}\\r\\n\\r\\n@media all and (min-device-width:980px) {\\r\\n  .comment-row .comment-right {\\r\\n    font-size: 28px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.comment-color1 {\\r\\n  color: rgba(255, 216, 142, 1);\\r\\n}\\r\\n\\r\\n.comment-color2 {\\r\\n  color: rgba(205, 243, 249, 1);\\r\\n}\\r\\n\\r\\n.comment-color3 {\\r\\n  color: rgba(182, 159, 255, 1);\\r\\n}\\r\\n\\r\\n.comment-color4 {\\r\\n  color: rgba(255, 255, 255, 1);\\r\\n}\\r\\n\\r\\n.comment-list-item {\\r\\n  margin-bottom: 20px;\\r\\n  overflow: hidden;\\r\\n  padding-left: 50px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.upic {\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  background: url(\" + __webpack_require__(/*! ../../images/upic-bg.png */ \"./src/images/upic-bg.png\") + \");\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.upic img {\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border-radius: 50%;\\r\\n  border:none;\\r\\n}\\r\\n\\r\\n.utxt {\\r\\n  font-size: 15px;\\r\\n  line-height: 25px;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n.uname {\\r\\n  color: #999;\\r\\n}\\r\\n\\r\\n.utalk {\\r\\n  color: #333;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/comment/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/commentsender/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/commentsender/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".comment-textbox {\\r\\n  height: 50px;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  display: none;\\r\\n  background: #fdfdfd;\\r\\n  padding: 0 15px;\\r\\n  -webkit-box-sizing: border-box;\\r\\n          box-sizing: border-box;\\r\\n  -webkit-box-shadow: 1px 8px 15px 2px #666;\\r\\n          box-shadow: 1px 8px 15px 2px #666;\\r\\n  z-index: 999;\\r\\n}\\r\\n\\r\\n.comment-textbox .send-container {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-pack: justify;\\r\\n      -ms-flex-pack: justify;\\r\\n          justify-content: space-between;\\r\\n}\\r\\n\\r\\n.back-to {\\r\\n  margin-right: 15px;\\r\\n}\\r\\n\\r\\n.back-to img {\\r\\n  height: 16px;\\r\\n  margin-top: 17px;\\r\\n}\\r\\n\\r\\n.write-pl {\\r\\n  height: 30px;\\r\\n  line-height: 30px;\\r\\n  background: #f4f9f9;\\r\\n  border: 1px solid #bdbfc0;\\r\\n  font-size: 14px;\\r\\n  width: 100%;\\r\\n  -webkit-box-sizing: border-box;\\r\\n  box-sizing: border-box;\\r\\n  color: #b8babb;\\r\\n  letter-spacing: 0.01px;\\r\\n  text-align: left;\\r\\n  margin-top: 9px;\\r\\n  padding: 0 8px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.share-btn img {\\r\\n  margin-top: 13px;\\r\\n  height: 24px;\\r\\n}\\r\\n\\r\\n.send-container .send-txt {\\r\\n  float: left;\\r\\n  width: 68%;\\r\\n  height: 0.933333rem;\\r\\n  line-height: 0.933333rem;\\r\\n  background: #fff;\\r\\n  border: 0;\\r\\n  border-radius: 0.106667rem 0 0 0.106667rem;\\r\\n  resize: none;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.send-container .send-btn {\\r\\n  width: 15%;\\r\\n  height: 0.933333rem;\\r\\n  background: #343B59;\\r\\n  line-height: 0.933333rem;\\r\\n  text-align: center;\\r\\n  border-radius: 0 0.106667rem 0.106667rem 0;\\r\\n  cursor: pointer;\\r\\n  color: #ffffff;\\r\\n  padding-right: 0.133333rem;\\r\\n  padding-left: 0.133333rem;\\r\\n}\\r\\n\\r\\n.send-container .send-btn:hover {\\r\\n  background: #343445;\\r\\n}\\r\\n\\r\\n.send-container .favoriate-send {\\r\\n  margin: 0 0 0 15px;\\r\\n}\\r\\n\\r\\n.send-container .favoriate-send img {\\r\\n  height: 24px;\\r\\n  margin-top: 13px;\\r\\n}\\r\\n\\r\\n.send-container .favoriate-send:hover {\\r\\n  opacity: 0.8;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/commentsender/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/favoriate/index.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/favoriate/index.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".favorite-animation-container {\\r\\n  height: 2px;\\r\\n    right: 0;\\r\\n    bottom: 53px;\\r\\n    width: 2.4rem;\\r\\n    margin-left: 0.133333rem;\\r\\n    position: fixed;\\r\\n}\\r\\n\\r\\n.favorite-animation-container img {\\r\\n  position: absolute;\\r\\n  bottom: 0px;\\r\\n  left: 45%;\\r\\n}\\r\\n\\r\\n.favorite-animation {\\r\\n  -webkit-animation-name: appear-from-bottom;\\r\\n          animation-name: appear-from-bottom;\\r\\n  -webkit-animation-duration: 2s;\\r\\n          animation-duration: 2s;\\r\\n  -webkit-animation-fill-mode: forwards;\\r\\n          animation-fill-mode: forwards;\\r\\n  -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\\r\\n          animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\\r\\n}\\r\\n\\r\\n/*easeInSine: cubic-bezier(0.47, 0, 0.745, 0.715);*/\\r\\n\\r\\n@-webkit-keyframes appear-from-bottom {\\r\\n  0% {\\r\\n    opacity: 0.5;\\r\\n    width: 0.56rem;\\r\\n    height: 0.533333rem;\\r\\n    display: block;\\r\\n  }\\r\\n  10% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  20% {\\r\\n    width: 1.12rem;\\r\\n    height: 1.066667rem;\\r\\n  }\\r\\n  66% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  100% {\\r\\n    /*900*/\\r\\n    -webkit-transform: translateY(-5.6rem);\\r\\n            transform: translateY(-5.6rem);\\r\\n    opacity: 0;\\r\\n    width: 0.56rem;\\r\\n    height: 0.533333rem;\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes appear-from-bottom {\\r\\n  0% {\\r\\n    opacity: 0.5;\\r\\n    width: 0.56rem;\\r\\n    height: 0.533333rem;\\r\\n    display: block;\\r\\n  }\\r\\n  10% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  20% {\\r\\n    width: 1.12rem;\\r\\n    height: 1.066667rem;\\r\\n  }\\r\\n  66% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  100% {\\r\\n    /*900*/\\r\\n    -webkit-transform: translateY(-5.6rem);\\r\\n            transform: translateY(-5.6rem);\\r\\n    opacity: 0;\\r\\n    width: 0.56rem;\\r\\n    height: 0.533333rem;\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/favoriate/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/header/index.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/header/index.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".header {\\r\\n  display: -webkit-box;\\r\\n  display: -ms-flexbox;\\r\\n  display: flex;\\r\\n  -webkit-box-pack: justify;\\r\\n      -ms-flex-pack: justify;\\r\\n          justify-content: space-between;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.header-upic {\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.header-upic img {\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.header-udata {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.header-udata h1 {\\r\\n  font-size: 16px;\\r\\n  font-weight: normal;\\r\\n  margin-top: -1px;\\r\\n}\\r\\n\\r\\n.header-udata p {\\r\\n  font-size: 12px;\\r\\n  color: #969696;\\r\\n  overflow: hidden;\\r\\n  -o-text-overflow: ellipsis;\\r\\n     text-overflow: ellipsis;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n\\r\\n.careBtn {\\r\\n  min-width: 52px;\\r\\n  text-align: center;\\r\\n  margin-left: 10px;\\r\\n  border: 1px solid #c4c4c4;\\r\\n  border-radius: 5px;\\r\\n  color: #c4c4c4;\\r\\n  font-size: 15px;\\r\\n  height: 22px;\\r\\n  margin-top: 8px;\\r\\n  line-height: 22px;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/header/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videolist/index.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/videolist/index.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".video-list-wrapper\\n{\\n  margin-top: 0.266667rem;\\n\\tz-index:1000;\\n}\\n\\n.video-list-wrapper .video-list\\n{\\n}\\n\\n.video-list .video-list-item\\n{\\n  margin-bottom: 15px;\\n  border-bottom: 1px solid #ccc;\\n  padding-bottom: 5px;\\n}\\n\\n.video-list-item img\\n{\\n    max-height: 2.666667rem;\\n    border-radius: 0.026667rem;\\n}\\n\\n.video-list-item img:hover\\n{\\n    opacity:0.8;\\n    cursor: pointer;\\n}\\n\\n.video-list-item p\\n{\\n\\tmargin: 0;\\n    font-size: 4px;\\n}\\n.live-data {\\r\\n  padding: 10px 15px 0;\\r\\n}\\r\\n\\r\\n.live-title {\\r\\n  color: #1a1a1a;\\r\\n  font-size: 20px;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n.live-count {\\r\\n  padding: 15px 0;\\r\\n  font-size: 12px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.live-time {\\r\\n  float: left;\\r\\n  color: #cdcdcd;\\r\\n}\\r\\n\\r\\n.live-time-count {\\r\\n  float: left;\\r\\n  color: #1a1a1a;\\r\\n}\\r\\n\\r\\n.live-view {\\r\\n  float: right;\\r\\n  color: #cdcdcd;\\r\\n}\\r\\n\\r\\n.live-view-count {\\r\\n  float: right;\\r\\n  color: #1a1a1a;\\r\\n}\\r\\n\\r\\n.live-txt {\\r\\n  font-size: 15px;\\r\\n  line-height: 25px;\\r\\n  color: #000;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/videolist/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videoplayer/index.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2!./src/js/videoplayer/index.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \".enter-x5-player video.center\\n{\\n\\t-o-object-position:50% 50% !important;\\n\\t   object-position:50% 50% !important;\\n}\\n\\n.prism-progress-cursor\\n{\\n  margin-left:0px !important;\\n}\\n\\n/*.enter-x5-player video\\n{\\n\\tobject-position: 0px 10px;\\n\\t/*height:auto !important;*/\\n\\n/*}*/\\n\\n\\nvideo::-webkit-media-controls {\\n  display:none !important;\\n}\\n#poster{\\n\\tposition: absolute;\\n\\tz-index: 998;\\n\\tleft:0;\\n\\ttop:0;\\n\\twidth:100%;\\n\\theight:250px;\\n}\\n#playBtn{\\n\\tposition: absolute;\\n\\twidth:70px;\\n\\theight:70px;\\n\\tbackground: url(\" + __webpack_require__(/*! ../../images/play-btn.png */ \"./src/images/play-btn.png\") + \") center center;\\n\\tbackground-size: 100% 100%;\\n\\tleft:50%;\\n\\ttop:50%;\\n\\tmargin-left: -35px;\\n\\tmargin-top: -35px;\\n\\tz-index: 999;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/js/videoplayer/index.css?./node_modules/css-loader!./node_modules/postcss-loader/src??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function() {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\tvar result = [];\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar item = this[i];\n\t\t\tif(item[2]) {\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\n\t\t\t} else {\n\t\t\t\tresult.push(item[1]);\n\t\t\t}\n\t\t}\n\t\treturn result.join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nvar stylesInDom = {},\n\tmemoize = function(fn) {\n\t\tvar memo;\n\t\treturn function () {\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\t\treturn memo;\n\t\t};\n\t},\n\tisOldIE = memoize(function() {\n\t\treturn /msie [6-9]\\b/.test(self.navigator.userAgent.toLowerCase());\n\t}),\n\tgetHeadElement = memoize(function () {\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\n\t}),\n\tsingletonElement = null,\n\tsingletonCounter = 0,\n\tstyleElementsInsertedAtTop = [];\n\nmodule.exports = function(list, options) {\n\tif(typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the bottom of <head>.\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list);\n\taddStylesToDom(styles, options);\n\n\treturn function update(newList) {\n\t\tvar mayRemove = [];\n\t\tfor(var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\n\t\t\t\t\tdomStyle.parts[j]();\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction addStylesToDom(styles, options) {\n\tfor(var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles(list) {\n\tvar styles = [];\n\tvar newStyles = {};\n\tfor(var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\t\tif(!newStyles[id])\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse\n\t\t\tnewStyles[id].parts.push(part);\n\t}\n\treturn styles;\n}\n\nfunction insertStyleElement(options, styleElement) {\n\tvar head = getHeadElement();\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\n\tif (options.insertAt === \"top\") {\n\t\tif(!lastStyleElementInsertedAtTop) {\n\t\t\thead.insertBefore(styleElement, head.firstChild);\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\thead.appendChild(styleElement);\n\t\t}\n\t\tstyleElementsInsertedAtTop.push(styleElement);\n\t} else if (options.insertAt === \"bottom\") {\n\t\thead.appendChild(styleElement);\n\t} else {\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n\t}\n}\n\nfunction removeStyleElement(styleElement) {\n\tstyleElement.parentNode.removeChild(styleElement);\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\n\tif(idx >= 0) {\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement(options) {\n\tvar styleElement = document.createElement(\"style\");\n\tstyleElement.type = \"text/css\";\n\tinsertStyleElement(options, styleElement);\n\treturn styleElement;\n}\n\nfunction createLinkElement(options) {\n\tvar linkElement = document.createElement(\"link\");\n\tlinkElement.rel = \"stylesheet\";\n\tinsertStyleElement(options, linkElement);\n\treturn linkElement;\n}\n\nfunction addStyle(obj, options) {\n\tvar styleElement, update, remove;\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\n\t} else if(obj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\") {\n\t\tstyleElement = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t\tif(styleElement.href)\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\n\t\t};\n\t} else {\n\t\tstyleElement = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle(newObj) {\n\t\tif(newObj) {\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\n\t\t\t\treturn;\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = styleElement.childNodes;\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\n\t\tif (childNodes.length) {\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyleElement.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag(styleElement, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyleElement.setAttribute(\"media\", media)\n\t}\n\n\tif(styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = css;\n\t} else {\n\t\twhile(styleElement.firstChild) {\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\n\t\t}\n\t\tstyleElement.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink(linkElement, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\tif(sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = linkElement.href;\n\n\tlinkElement.href = URL.createObjectURL(blob);\n\n\tif(oldSrc)\n\t\tURL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/addStyles.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/css/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/images/play-btn.png":
/*!*********************************!*\
  !*** ./src/images/play-btn.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/images/play-btn.png?");

/***/ }),

/***/ "./src/images/upic-bg.png":
/*!********************************!*\
  !*** ./src/images/upic-bg.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADSklEQVRYR+2YS1LbQBCGu41YeBW8oUo9C5ITBE4QOAHhBJATBJ8g5ASBEyScAHICzAlwThBYqFXFBrNiAaZT7RopYz08I0tUsWCqvEEzPZ/68XcLhFe+sC3f7e3t5nQ6fQcA7+1PTV7rb2Vl5X59fX3c5o6lAJMk2UXEbQD47EDVcSjsuYiMjDG/m8I2AkzTdF9EjgKgamER8SiO49NQ0CBADePT09MPAFCvdbFGURQNQ8LvBUzT9EBEfnZB5doQkUmv1xvGcfxrke2FgMysXjvsGq5g75iIhnV31AImSXKEiN8C4G40rwBgFMexFgSkaaoVvW3zdcNnQ0S+G2PURmlVAjYI6wkRLfQwMx8DwFcfJCJ+qQp3CVAL4vHx8QIR1zxGvXDZ+RBIzcnV1dWdYuGUAJn5IqBaL4moUUUnSTJGxI+elx4R0Y67Zw4wTVPNGwX0rT0iOvdtcp8zs4r6me8MIu7EcTzK9s0BBnoPiMgrT1UgzCw+QC0214v5RVaMr3wGROSPMWbTt6/qeWCYIYqirSwXc8AGstI4/5xi0dB98r2cKzsu4BUiej2j1WaMGfguaRFiEJGxMWZLbeSAgfkxu9cNQShoaApl9rI8nwE2PQwAp0R0EAqn+5hZe+5+6JnMCTPABvKS2y/KwaKL29ifAYZqlAthp5E9V7OqIBXu+fn5LKAzFY/PtHZpDzrWjhHxJBsUsr/rwCAi2oOXmoayCC0LeA8A+q2RS4ZWHiJOFFBE1gqKcGmncO9kk3cQ21EyQH3bv4EJfNrv9w8Hg8HEhk89WNljVdR7vd6hpsHd3d3aw8ODjlTeycZVikYyUzcSWRXQl5zpKCKOoyi6rhrpQ0e5OZmxhaLNf7fOi3VwgV6f2xZQlHm3cj2oyawjfmktmniXAbQOqb0PAIZEpIPu/05iq66Uh22GAx88M1f25sphoU7tmwiyD6j4vEbA54aR4sBarOYbItIPoBdbxRGs2OerRn63Z+a58FKEzOzmYqnHlwCtXqkIbyDih2KH6BrUyf2bfr+/qfrq3lE5ultd09Hb92XXCS8zT6Io2q7SzdpvC4UM+d9JF4SL7lrq46cLqFAbb4ChnqptsW0NvPT5txC39fCr9+A/PPO3OHaq3ZAAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/images/upic-bg.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header */ \"./src/js/header/index.js\");\n/* harmony import */ var _js_videoplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/videoplayer */ \"./src/js/videoplayer/index.js\");\n/* harmony import */ var _js_videolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/videolist */ \"./src/js/videolist/index.js\");\n/* harmony import */ var _js_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/comment */ \"./src/js/comment/index.js\");\n/* harmony import */ var _js_favoriate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/favoriate */ \"./src/js/favoriate/index.js\");\n/* harmony import */ var _js_commentsender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/commentsender */ \"./src/js/commentsender/index.js\");\n/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/util */ \"./src/js/util.js\");\n\n\n\n\n\n\n\n\n__webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\nvar comment, favoriate;\n$(function () {\n  var player = new _js_videoplayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    id: 'J_prismPlayer',\n    autoplay: true,\n    isLive: false,\n    playsinline: true,\n    width: '100%',\n    height: '250px',\n    controlBarVisibility: 'hover',\n    source: \"http://sv.cyol.com/record/2019-01-02/zqlive/front-0d6743775e03e5d67b5fd819d2fc1ae6/front-0d6743775e03e5d67b5fd819d2fc1ae6.m3u8\",\n    useH5Prism: true,\n    useFlashPrism: false,\n    // x5_video_position: 'normal',\n    //prismplayer 2.0.1版本支持的属性，主要用户实现在android 微信上的同层播放\n    // x5_type: 'h5', //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html\n    // x5_video_position: 'top',\n    // x5_fullscreen: true,\n    // x5_orientation: 'landscape',\n    // x5LandscapeAsFullScreen: true,\n    cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',\n    \"skinLayout\": [{\n      \"name\": \"H5Loading\",\n      \"align\": \"cc\"\n    }, {\n      \"name\": \"errorDisplay\",\n      \"align\": \"tlabs\",\n      \"x\": 0,\n      \"y\": 0\n    }, {\n      \"name\": \"infoDisplay\"\n    }, {\n      \"name\": \"tooltip\",\n      \"align\": \"blabs\",\n      \"x\": 0,\n      \"y\": 56\n    }, {\n      \"name\": \"thumbnail\"\n    }, {\n      \"name\": \"controlBar\",\n      \"align\": \"blabs\",\n      \"x\": 0,\n      \"y\": 0,\n      \"children\": [{\n        \"name\": \"playButton\",\n        \"align\": \"tl\",\n        \"x\": 15,\n        \"y\": 12\n      }, {\n        \"name\": \"fullScreenButton\",\n        \"align\": \"tr\",\n        \"x\": 10,\n        \"y\": 12\n      }]\n    }]\n  });\n\n  function getUserHeader() {\n    var user;\n    $.ajax({\n      url: \"json/user.json\",\n      async: false,\n      success: function success(data) {\n        user = data;\n      }\n    });\n    return user;\n  }\n\n  var user = getUserHeader();\n  _js_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setUp(user);\n\n  function getLiveData() {\n    var liveData;\n    $.ajax({\n      url: \"json/live.json\",\n      async: false,\n      success: function success(data) {\n        liveData = data;\n      }\n    });\n    return liveData;\n  }\n\n  var liveDatas = getLiveData();\n  _js_videolist__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setup(liveDatas);\n  _js_commentsender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].setup();\n  var wrapper = $('.comment-list');\n\n  function getUser() {\n    var result;\n    $.ajax({\n      url: \"json/index.json\",\n      async: false,\n      success: function success(data) {\n        result = data;\n      }\n    });\n    return result;\n  }\n\n  var userDatas = getUser();\n  _js_comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setUp($('.comment-container'), userDatas);\n  favoriate = new _js_favoriate__WEBPACK_IMPORTED_MODULE_4__[\"default\"]($('body'));\n  $('.comment-textbox').show(); //   let adjustLayout = () => {\n  //     let offset = $('.ui-tab .ui-tab-nav').offset();\n  //     let remainHeight = util.screenHeight() - offset.top - offset.height - $('.comment-textbox').height();\n  //     $('.ui-tab-content').height(remainHeight);\n  //     $('.comment-list .comment-container').css('max-height', remainHeight);\n  //   };\n  //   adjustLayout();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/comment/comment-list-item.html":
/*!***********************************************!*\
  !*** ./src/js/comment/comment-list-item.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"comment-list-item\\\">\\n  <div class=\\\"upic\\\">\\n    <img src=\\\"xxxHTMLLINKxxx0.71350036065781390.36133286952183963xxx\\\" />\\n  </div>\\n  <div class=\\\"utxt\\\">\\n    <h1 class=\\\"uname\\\"></h1>\\n    <div class=\\\"utalk\\\"></div>\\n  </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./src/js/comment/comment-list-item.html?");

/***/ }),

/***/ "./src/js/comment/index.css":
/*!**********************************!*\
  !*** ./src/js/comment/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/comment/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/comment/index.css?");

/***/ }),

/***/ "./src/js/comment/index.js":
/*!*********************************!*\
  !*** ./src/js/comment/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comment; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar itemHtml2 = __webpack_require__(/*! ./comment-list-item.html */ \"./src/js/comment/comment-list-item.html\");\n\n__webpack_require__(/*! ./index.css */ \"./src/js/comment/index.css\");\n\nvar Comment =\n/*#__PURE__*/\nfunction () {\n  function Comment() {\n    _classCallCheck(this, Comment);\n  }\n\n  _createClass(Comment, null, [{\n    key: \"setUp\",\n    value: function setUp($wrapper, list) {\n      list.forEach(function (item, index) {\n        var $item2 = $(itemHtml2);\n        var $upic = $item2.find('img');\n        var $uname = $item2.find('.uname');\n        var $utalk = $item2.find('.utalk');\n        $upic.attr('src', item.upic);\n        $uname.html(item.uname);\n        $utalk.html(item.utalk);\n        $wrapper.append($item2);\n      });\n    }\n  }]);\n\n  return Comment;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/comment/index.js?");

/***/ }),

/***/ "./src/js/commentsender/index.css":
/*!****************************************!*\
  !*** ./src/js/commentsender/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/commentsender/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/commentsender/index.css?");

/***/ }),

/***/ "./src/js/commentsender/index.js":
/*!***************************************!*\
  !*** ./src/js/commentsender/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CommentSender; });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ \"./src/js/events.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n__webpack_require__(/*! ./index.css */ \"./src/js/commentsender/index.css\");\n\nvar CommentSender =\n/*#__PURE__*/\nfunction () {\n  function CommentSender() {\n    _classCallCheck(this, CommentSender);\n  }\n\n  _createClass(CommentSender, null, [{\n    key: \"setup\",\n    value: function setup() {\n      // $('.comment-textbox .send-btn').click(() => {\n      //   let $text = $('.comment-textbox .send-txt');\n      //   let msg = $text.val();\n      //   Event.trigger(Event.EventConstant.Comments_Sended, {\n      //     name: '小鱼儿',\n      //     comment: msg\n      //   });\n      //   $text.val(\"\");\n      // });\n      $('.write-pl').click(function () {\n        alert(\"下载中国青年报App，参与评论。\");\n      });\n      $('.comment-textbox .favoriate-send').click(function () {\n        _events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trigger(_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].EventConstant.Favoriation_Sended);\n      });\n    }\n  }]);\n\n  return CommentSender;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/commentsender/index.js?");

/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventConstant = {\n  Comments_Sended: 'commentSended',\n  Favoriation_Sended: 'FavoriationSended'\n};\n\nvar Event =\n/*#__PURE__*/\nfunction () {\n  function Event() {\n    _classCallCheck(this, Event);\n  }\n\n  _createClass(Event, null, [{\n    key: \"on\",\n    value: function on(eventName, func) {\n      $(document).on(eventName, func);\n    }\n  }, {\n    key: \"trigger\",\n    value: function trigger(eventName, data) {\n      $(document).trigger(eventName, data);\n    }\n  }, {\n    key: \"off\",\n    value: function off(eventName, func) {\n      $(document).off(eventName, func);\n    }\n  }, {\n    key: \"EventConstant\",\n    get: function get() {\n      return EventConstant;\n    }\n  }]);\n\n  return Event;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/events.js?");

/***/ }),

/***/ "./src/js/favoriate/index.css":
/*!************************************!*\
  !*** ./src/js/favoriate/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/favoriate/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/favoriate/index.css?");

/***/ }),

/***/ "./src/js/favoriate/index.html":
/*!*************************************!*\
  !*** ./src/js/favoriate/index.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"favorite-animation-container\\\">\\n</div>\";\n\n//# sourceURL=webpack:///./src/js/favoriate/index.html?");

/***/ }),

/***/ "./src/js/favoriate/index.js":
/*!***********************************!*\
  !*** ./src/js/favoriate/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Favoriate; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/js/util.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ \"./src/js/events.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n__webpack_require__(/*! ./index.css */ \"./src/js/favoriate/index.css\");\n\nvar html = __webpack_require__(/*! ./index.html */ \"./src/js/favoriate/index.html\");\n\nvar Favoriate =\n/*#__PURE__*/\nfunction () {\n  function Favoriate(wrapper) {\n    var images = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png'];\n\n    _classCallCheck(this, Favoriate);\n\n    this.animateContainer = $(html);\n    wrapper.append(this.animateContainer);\n    this.imgNames = images;\n    this.index = 0;\n    var that = this;\n    _events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(_events__WEBPACK_IMPORTED_MODULE_1__[\"default\"].EventConstant.Favoriation_Sended, function () {\n      that.favoriate();\n    });\n  }\n\n  _createClass(Favoriate, [{\n    key: \"favoriate\",\n    value: function favoriate() {\n      var length = this.imgNames.length;\n      this.index = this.index < length ? this.index : 0;\n      name = this.imgNames[this.index];\n      var $img = $(\"<img src=\\\"./images/\".concat(name, \"\\\" class=\\\"favorite-animation\\\">\"));\n      this.animateContainer.append($img);\n      this.index++;\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prefixedEvent($img[0], 'animationend', function () {\n        $img.remove();\n      });\n    }\n  }]);\n\n  return Favoriate;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/favoriate/index.js?");

/***/ }),

/***/ "./src/js/header/index.css":
/*!*********************************!*\
  !*** ./src/js/header/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/header/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/header/index.css?");

/***/ }),

/***/ "./src/js/header/index.js":
/*!********************************!*\
  !*** ./src/js/header/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n__webpack_require__(/*! ./index.css */ \"./src/js/header/index.css\");\n\nvar Header =\n/*#__PURE__*/\nfunction () {\n  function Header() {\n    _classCallCheck(this, Header);\n  }\n\n  _createClass(Header, null, [{\n    key: \"setUp\",\n    value: function setUp(user) {\n      var $upic = $('.header-upic img');\n      var $uname = $('.header-udata h1');\n      var $uintro = $('.header-udata p');\n      $upic.attr('src', user.upic);\n      $uname.html(user.uname);\n      $uintro.html(user.uintro);\n    }\n  }]);\n\n  return Header;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/header/index.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Util; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Util =\n/*#__PURE__*/\nfunction () {\n  function Util() {\n    _classCallCheck(this, Util);\n  }\n\n  _createClass(Util, null, [{\n    key: \"prefixedEvent\",\n    value: function prefixedEvent(element, type, callback) {\n      var pfx = [\"webkit\", \"moz\", \"MS\", \"o\", \"\"];\n\n      for (var p = 0; p < pfx.length; p++) {\n        if (!pfx[p]) type = type.toLowerCase();\n        Util.addEvent(element, pfx[p] + type, callback);\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent(ele, type, hander) {\n      if (ele.addEventListener) {\n        ele.addEventListener(type, hander, false);\n      }\n\n      if (ele.attachEvent) {\n        ele.attachEvent('on' + type, hander);\n      }\n    }\n  }, {\n    key: \"screenHeight\",\n    value: function screenHeight() {\n      return document.documentElement.clientHeight || document.body.clientHeight || window.screen.height || window.innerHeight;\n    }\n  }]);\n\n  return Util;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/util.js?");

/***/ }),

/***/ "./src/js/videolist/index.css":
/*!************************************!*\
  !*** ./src/js/videolist/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videolist/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/videolist/index.css?");

/***/ }),

/***/ "./src/js/videolist/index.js":
/*!***********************************!*\
  !*** ./src/js/videolist/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoList; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar itemHtml = __webpack_require__(/*! ./itemlist.html */ \"./src/js/videolist/itemlist.html\");\n\n__webpack_require__(/*! ./index.css */ \"./src/js/videolist/index.css\");\n\nvar VideoList =\n/*#__PURE__*/\nfunction () {\n  function VideoList() {\n    _classCallCheck(this, VideoList);\n  }\n\n  _createClass(VideoList, null, [{\n    key: \"setup\",\n    value: function setup(list) {\n      var $liveTitle = list.liveTitle;\n      var $liveTimeCount = list.liveTimeCount;\n      var $liveViewCount = list.liveViewCount;\n      var $liveTxt = list.liveTxt;\n      $('.live-title').html($liveTitle);\n      $('.live-time-count').html($liveTimeCount);\n      $('.live-view-count').html($liveViewCount);\n      $('.live-txt').html($liveTxt);\n    }\n  }]);\n\n  return VideoList;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/videolist/index.js?");

/***/ }),

/***/ "./src/js/videolist/itemlist.html":
/*!****************************************!*\
  !*** ./src/js/videolist/itemlist.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<li class='video-list-item'>\\n  <h1 class=\\\"title\\\"></h1>\\n  <span class=\\\"name\\\"></span>\\n  <p class=\\\"desc\\\"></p>\\n</li>\\n\";\n\n//# sourceURL=webpack:///./src/js/videolist/itemlist.html?");

/***/ }),

/***/ "./src/js/videoplayer/index.css":
/*!**************************************!*\
  !*** ./src/js/videoplayer/index.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--4-2!./index.css */ \"./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./src/js/videoplayer/index.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ \"./node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/videoplayer/index.css?");

/***/ }),

/***/ "./src/js/videoplayer/index.js":
/*!*************************************!*\
  !*** ./src/js/videoplayer/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoPlayer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n__webpack_require__(/*! ./index.css */ \"./src/js/videoplayer/index.css\");\n\nvar num = 0;\n\nvar VideoPlayer =\n/*#__PURE__*/\nfunction () {\n  function VideoPlayer(props) {\n    _classCallCheck(this, VideoPlayer);\n\n    this.player;\n    this.props = props;\n\n    this._setup();\n\n    this._bindEvent(); // this._unbindEvent();\n\n\n    this._firstFullscreen = true;\n  }\n\n  _createClass(VideoPlayer, [{\n    key: \"loadByUrl\",\n    value: function loadByUrl(url) {\n      if (this.player) {\n        this.player.loadByUrl(url);\n      }\n    }\n  }, {\n    key: \"dispose\",\n    value: function dispose() {\n      if (this.player) {\n        this.player.dispose();\n        Zepto('#' + this.props.id).empty();\n      }\n    }\n  }, {\n    key: \"_setup\",\n    value: function _setup() {\n      this.player = new Aliplayer(this.props);\n    }\n  }, {\n    key: \"_bindEvent\",\n    value: function _bindEvent() {\n      var that = this;\n      this.player.on('ready', function (e) {\n        $('#poster,#playBtn').click(function () {\n          $('#poster,#playBtn').hide();\n          that.player.play();\n        });\n      });\n      this.player.on('play', function (e) {\n        $('#poster,#playBtn').hide();\n      });\n      this.player.on('ended', function (e) {\n        console.log('ended');\n        endedHandle();\n      });\n      this.player.on('pause', function (e) {\n        console.log('pause');\n      });\n\n      function endedHandle() {\n        num++;\n        $.get(\"http://jsonplaceholder.typicode.com/posts\", function (data) {\n          console.log(data);\n        });\n\n        if (num > 3) {\n          that.loadByUrl(\"http://sv.cyol.com/record/2018-12-31/zqlive/front-360923307ed4e5ab00bc7f3ed43fc39a/front-360923307ed4e5ab00bc7f3ed43fc39a.m3u8\");\n        } else {\n          setTimeout(function () {\n            endedHandle();\n          }, 5000);\n        }\n      } // this.player.on('requestFullScreen', (e)=>{\n      // \t    let video=$(that.player.tag);\n      // \t    video.addClass('center');\n      // });\n      // this.player.on('x5cancelFullScreen',(e)=>{\n      // \tlet service = that.player.fullscreenService;\n      // \tif(service.getIsFullScreen())\n      // \t{\n      // \t\tservice.cancelFullScreen()\n      // \t}\n      //     $(that.player.el()).removeClass('enter-x5-player');\n      // });\n      // this.player.on('x5requestFullScreen',(e)=>{\n      //     //调整视频的位置\n      //     $(that.player.el()).addClass('enter-x5-player');\n      //     var screenHeight = document.body.clientHeight*(window.devicePixelRatio||1)+ \"px\";\n      //     that.player.tag.style.height = screenHeight;\n      //     let video=$(that.player.tag);\n      //     setTimeout(()=>{\n      //         video.removeClass('x5-top-left');\n      //     });\n      // });\n      // this.player.on('cancelFullScreen', (e)=>{\n      // \tlet video=$(that.player.tag);\n      //     setTimeout(()=>{\n      //         alert(video.length());\n      //        video.removeClass('center');\n      //        video.removeClass('x5-top-left');\n      //     });\n      // });\n      //微信左上角退出按钮触发是，关闭页面\n      // this.player.tag.addEventListener(\"x5videoexitfullscreen\", ()=>{\n      //     if(WeixinJSBridge)\n      //         WeixinJSBridge.call('closeWindow');\n      //     else\n      //     {\n      //         try\n      //         {\n      //             window.location.refresh();\n      //         }catch(e)\n      //         {}\n      //     }\n      // });\n\n\n      $(document).on('WeixinJSBridgeReady', function () {\n        var video = $(that.player.el()).find('video')[0];\n        video.play();\n      });\n    }\n  }, {\n    key: \"_unbindEvent\",\n    value: function _unbindEvent() {\n      var that = this;\n      this.player.off('ready', function (e) {\n        // 解决ios不自动播放的问题\n        if ($.os.ios) that._autoPlay();\n        console.log('ready');\n      });\n      this.player.off('play', function (e) {\n        console.log('play');\n      });\n      this.player.off('ended', function (e) {\n        console.log('ended');\n      });\n      this.player.off('pause', function (e) {\n        console.log('pause');\n      });\n    }\n  }]);\n\n  return VideoPlayer;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/videoplayer/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\XAMPP\\htdocs\\h5VodDemo\\src\\index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });