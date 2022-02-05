/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! woodbackground.jpg */ "./src/woodbackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  display: flex;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  width: 100%;\r\n  background: linear-gradient(\r\n      to right bottom,\r\n      rgba(3, 105, 92, 0.8),\r\n      rgba(117, 216, 213, 0.9)\r\n    ),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  font-family: Tahoma, sans-serif;\r\n  font-size: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: fit-content;\r\n}\r\n@media (min-width: 490px) {\r\n  main {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\np {\r\n  font-size: 16px;\r\n}\r\nimg {\r\n  color: white;\r\n}\r\n.header-div {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-size: 24px;\r\n  align-items: center;\r\n}\r\n.header-div,\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n}\r\n.header-div > p,\r\n.newTaskHeader > div {\r\n  color: white;\r\n  padding: 0.3em 1em 0.4em;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-size: 20px;\r\n  align-items: center;\r\n  margin: 0.5em 1em;\r\n  color: white;\r\n}\r\n\r\n#github:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.planner {\r\n  display: flex;\r\n}\r\n.tabs {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #eeeeee;\r\n  border-right: 1px solid black;\r\n  justify-content: space-between;\r\n  padding: 0 0.5em;\r\n}\r\n.tab {\r\n  padding-bottom: 0.8em;\r\n}\r\n.tab-btn,\r\n.details > button,\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  color: #501f3a;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 28px;\r\n  padding: 6px 24px;\r\n  text-decoration: none;\r\n}\r\n#generalButton {\r\n  margin-top: 1em;\r\n  border-radius: 5px;\r\n  transform: scale(1.1);\r\n}\r\n#projects,\r\n.newButton {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n#projects > .project {\r\n  text-align: center;\r\n  padding: 6px 24px;\r\n}\r\n\r\n.tab-btn:hover,\r\n.project:hover {\r\n  border-right: 10px solid #d38d9e;\r\n}\r\n.tab-btn:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n.tab-btn + .project {\r\n  margin-top: 16px;\r\n}\r\n\r\n#newButton {\r\n  height: 2.5em;\r\n  width: 2.5em;\r\n  background-color: #c38d9e;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 30px;\r\n  padding: 6px 24px;\r\n  border-radius: 50%;\r\n  margin-bottom: 1em;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n#newButton:hover {\r\n  transform: scale(1.3);\r\n}\r\n#newButton:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n.blur {\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n}\r\n\r\n.display {\r\n  flex: 4;\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#content {\r\n  margin: 0 0 0.5em 0.1em;\r\n}\r\n\r\n#content > div {\r\n  padding: 0.2em;\r\n}\r\n.lowPriority {\r\n  border-left: 10px solid #1d8e1d;\r\n  border-right: 10px solid #1d8e1d;\r\n}\r\n.mediumPriority {\r\n  border-left: 10px solid#FFA500;\r\n  border-right: 10px solid#FFA500;\r\n}\r\n.highPriority {\r\n  border-left: 10px solid #ff0000;\r\n  border-right: 10px solid #ff0000;\r\n}\r\n\r\n.spread {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid black;\r\n  margin: 1px;\r\n  align-items: center;\r\n}\r\n.spread > p {\r\n  color: #501f3a;\r\n  margin-right: 3em;\r\n}\r\n.details {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.details > button {\r\n  font-size: 0.5em;\r\n  margin: 0em 1em;\r\n  background-color: white;\r\n}\r\n.details > button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* aqui vai entrar os styles da aba de detalhes e da div que faz o main inteiro dar blur */\r\n\r\n.newTaskWindow,\r\n.taskDetailsDiv {\r\n  background-color: #fff;\r\n  width: 70%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 15px 5px #222;\r\n}\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n  width: 100%;\r\n  border-radius: 10px 10px 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.newTaskHeader > div {\r\n  padding: 10px;\r\n}\r\n\r\n.closingDiv {\r\n  border-radius: 0px 10px 3px 20px;\r\n  cursor: pointer;\r\n}\r\n.closingDiv:hover {\r\n  transform: scale(1.1);\r\n}\r\n.newTaskContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.newTaskSideBar {\r\n  margin: 0.2em;\r\n}\r\n\r\n.projectOrTask {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.projectOrTask > button {\r\n  margin: 5px;\r\n}\r\n\r\n.active,\r\n.inactive {\r\n  margin: 2px 5px;\r\n}\r\n.inactive {\r\n  background: 0;\r\n  background-color: gray;\r\n  transform: scale(0.9);\r\n}\r\n.active {\r\n  border-right: 10px solid #c38d9e;\r\n}\r\n\r\n.activeBtn {\r\n  background-color: #c38d9e;\r\n  color: #eee;\r\n}\r\n.activeBtn:hover,\r\n.inactiveBtn:hover {\r\n  border-right: 2px solid rgb(118, 118, 118);\r\n}\r\n\r\n.newTaskFormContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 4px solid #c38d9e;\r\n  border-radius: 8px;\r\n  padding: 0.5em;\r\n  margin: 1em;\r\n}\r\n#newTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n#newTaskForm > input,\r\n#newProjectForm {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 20%);\r\n  border-width: 5px;\r\n  border-radius: 12px;\r\n}\r\n#title,\r\n#date,\r\n#details,\r\n#newProjectForm {\r\n  margin: 1em;\r\n  width: 80%;\r\n  height: 2em;\r\n  border: 3px inset #c38d9e;\r\n  /* border-radius: 5px; */\r\n}\r\n.details > p {\r\n  border-radius: 10px;\r\n  padding: 6px 24px;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 25%);\r\n}\r\n.details > button,\r\n.details > p {\r\n  border: 3px solid #3ba395;\r\n  color: #3ba395;\r\n  transform: scale(0.8);\r\n}\r\n#priorityButton {\r\n  height: 6em;\r\n  width: 6em;\r\n  border-radius: 50%;\r\n  border-top: 3px inset #c38d9e;\r\n  border-bottom: 3px inset #c38d9e;\r\n  margin-bottom: 1em;\r\n  font-size: 12px;\r\n}\r\n#details {\r\n  height: 5em;\r\n}\r\n.taskDetailsDiv {\r\n  width: 50%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 30%;\r\n}\r\n.taskDetailsHandler {\r\n  padding: 0.5em;\r\n  text-align: center;\r\n  margin-right: 0.8em;\r\n}\r\n.taskDetailsHandler > p {\r\n  border: 0px solid black;\r\n  border-bottom-width: 1px;\r\n  text-decoration: underline;\r\n  color: #3ba395;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n/* próximo passo mexer com o createbutton (id=submit) deixar quadrado e bem estiloso, bora  */\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  display: flex;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  width: 100%;\r\n  background: linear-gradient(\r\n      to right bottom,\r\n      rgba(3, 105, 92, 0.8),\r\n      rgba(117, 216, 213, 0.9)\r\n    ),\r\n    url('woodbackground.jpg');\r\n  font-family: Tahoma, sans-serif;\r\n  font-size: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: fit-content;\r\n}\r\n@media (min-width: 490px) {\r\n  main {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\np {\r\n  font-size: 16px;\r\n}\r\nimg {\r\n  color: white;\r\n}\r\n.header-div {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-size: 24px;\r\n  align-items: center;\r\n}\r\n.header-div,\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n}\r\n.header-div > p,\r\n.newTaskHeader > div {\r\n  color: white;\r\n  padding: 0.3em 1em 0.4em;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-size: 20px;\r\n  align-items: center;\r\n  margin: 0.5em 1em;\r\n  color: white;\r\n}\r\n\r\n#github:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.planner {\r\n  display: flex;\r\n}\r\n.tabs {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #eeeeee;\r\n  border-right: 1px solid black;\r\n  justify-content: space-between;\r\n  padding: 0 0.5em;\r\n}\r\n.tab {\r\n  padding-bottom: 0.8em;\r\n}\r\n.tab-btn,\r\n.details > button,\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  color: #501f3a;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 28px;\r\n  padding: 6px 24px;\r\n  text-decoration: none;\r\n}\r\n#generalButton {\r\n  margin-top: 1em;\r\n  border-radius: 5px;\r\n  transform: scale(1.1);\r\n}\r\n#projects,\r\n.newButton {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n#projects > .project {\r\n  text-align: center;\r\n  padding: 6px 24px;\r\n}\r\n\r\n.tab-btn:hover,\r\n.project:hover {\r\n  border-right: 10px solid #d38d9e;\r\n}\r\n.tab-btn:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n.tab-btn + .project {\r\n  margin-top: 16px;\r\n}\r\n\r\n#newButton {\r\n  height: 2.5em;\r\n  width: 2.5em;\r\n  background-color: #c38d9e;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 30px;\r\n  padding: 6px 24px;\r\n  border-radius: 50%;\r\n  margin-bottom: 1em;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n#newButton:hover {\r\n  transform: scale(1.3);\r\n}\r\n#newButton:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n.blur {\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n}\r\n\r\n.display {\r\n  flex: 4;\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#content {\r\n  margin: 0 0 0.5em 0.1em;\r\n}\r\n\r\n#content > div {\r\n  padding: 0.2em;\r\n}\r\n.lowPriority {\r\n  border-left: 10px solid #1d8e1d;\r\n  border-right: 10px solid #1d8e1d;\r\n}\r\n.mediumPriority {\r\n  border-left: 10px solid#FFA500;\r\n  border-right: 10px solid#FFA500;\r\n}\r\n.highPriority {\r\n  border-left: 10px solid #ff0000;\r\n  border-right: 10px solid #ff0000;\r\n}\r\n\r\n.spread {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid black;\r\n  margin: 1px;\r\n  align-items: center;\r\n}\r\n.spread > p {\r\n  color: #501f3a;\r\n  margin-right: 3em;\r\n}\r\n.details {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.details > button {\r\n  font-size: 0.5em;\r\n  margin: 0em 1em;\r\n  background-color: white;\r\n}\r\n.details > button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* aqui vai entrar os styles da aba de detalhes e da div que faz o main inteiro dar blur */\r\n\r\n.newTaskWindow,\r\n.taskDetailsDiv {\r\n  background-color: #fff;\r\n  width: 70%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 15px 5px #222;\r\n}\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n  width: 100%;\r\n  border-radius: 10px 10px 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.newTaskHeader > div {\r\n  padding: 10px;\r\n}\r\n\r\n.closingDiv {\r\n  border-radius: 0px 10px 3px 20px;\r\n  cursor: pointer;\r\n}\r\n.closingDiv:hover {\r\n  transform: scale(1.1);\r\n}\r\n.newTaskContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.newTaskSideBar {\r\n  margin: 0.2em;\r\n}\r\n\r\n.projectOrTask {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.projectOrTask > button {\r\n  margin: 5px;\r\n}\r\n\r\n.active,\r\n.inactive {\r\n  margin: 2px 5px;\r\n}\r\n.inactive {\r\n  background: 0;\r\n  background-color: gray;\r\n  transform: scale(0.9);\r\n}\r\n.active {\r\n  border-right: 10px solid #c38d9e;\r\n}\r\n\r\n.activeBtn {\r\n  background-color: #c38d9e;\r\n  color: #eee;\r\n}\r\n.activeBtn:hover,\r\n.inactiveBtn:hover {\r\n  border-right: 2px solid rgb(118, 118, 118);\r\n}\r\n\r\n.newTaskFormContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 4px solid #c38d9e;\r\n  border-radius: 8px;\r\n  padding: 0.5em;\r\n  margin: 1em;\r\n}\r\n#newTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n#newTaskForm > input,\r\n#newProjectForm {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 20%);\r\n  border-width: 5px;\r\n  border-radius: 12px;\r\n}\r\n#title,\r\n#date,\r\n#details,\r\n#newProjectForm {\r\n  margin: 1em;\r\n  width: 80%;\r\n  height: 2em;\r\n  border: 3px inset #c38d9e;\r\n  /* border-radius: 5px; */\r\n}\r\n.details > p {\r\n  border-radius: 10px;\r\n  padding: 6px 24px;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 25%);\r\n}\r\n.details > button,\r\n.details > p {\r\n  border: 3px solid #3ba395;\r\n  color: #3ba395;\r\n  transform: scale(0.8);\r\n}\r\n#priorityButton {\r\n  height: 6em;\r\n  width: 6em;\r\n  border-radius: 50%;\r\n  border-top: 3px inset #c38d9e;\r\n  border-bottom: 3px inset #c38d9e;\r\n  margin-bottom: 1em;\r\n  font-size: 12px;\r\n}\r\n#details {\r\n  height: 5em;\r\n}\r\n.taskDetailsDiv {\r\n  width: 50%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 30%;\r\n}\r\n.taskDetailsHandler {\r\n  padding: 0.5em;\r\n  text-align: center;\r\n  margin-right: 0.8em;\r\n}\r\n.taskDetailsHandler > p {\r\n  border: 0px solid black;\r\n  border-bottom-width: 1px;\r\n  text-decoration: underline;\r\n  color: #3ba395;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n/* próximo passo mexer com o createbutton (id=submit) deixar quadrado e bem estiloso, bora  */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createDOMForm.js":
/*!******************************!*\
  !*** ./src/createDOMForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMForm": () => (/* binding */ createDOMForm)
/* harmony export */ });
function createDOMForm(form) {
  const title = document.createElement('input');
  title.id = 'title';
  title.type = 'text';
  title.placeholder = 'Title';
  title.required = true;
  title.minLength = '1';
  title.maxLength = '40';
  form.appendChild(title);
  const date = document.createElement('input');
  date.id = 'date';
  date.type = 'date';
  date.required = true;
  form.appendChild(date);
  const details = document.createElement('input');
  details.id = 'details';
  details.type = 'text';
  details.placeholder = 'Detail your task.';
  details.maxLength = '140';
  form.appendChild(details);
  const priority = document.createElement('button');
  priority.type = 'button';
  priority.textContent = 'Low';
  priority.id = 'priorityButton';
  priority.classList.add('form-buttons', 'lowPriority');
  priority.onclick = () => changePriority(priority);
  form.appendChild(priority);
}

function changePriority(node) {
  if (node.textContent == 'Low') {
    node.textContent = 'Medium';
    node.classList.add('mediumPriority');
    node.classList.remove('lowPriority');
  } else if (node.textContent == 'Medium') {
    node.textContent = 'High';
    node.classList.add('highPriority');
    node.classList.remove('mediumPriority');
  } else if (node.textContent == 'High') {
    node.textContent = 'Low';
    node.classList.add('lowPriority');
    node.classList.remove('highPriority');
  }
}


/***/ }),

/***/ "./src/createFormSubmit.js":
/*!*********************************!*\
  !*** ./src/createFormSubmit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFormSubmit": () => (/* binding */ createFormSubmit)
/* harmony export */ });
/* harmony import */ var _createTaskOrProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskOrProject */ "./src/createTaskOrProject.js");
/* harmony import */ var _displayNewTaskWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayNewTaskWindow */ "./src/displayNewTaskWindow.js");



function createFormSubmit(window) {
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Create';
  submitButton.id = 'submit';
  submitButton.classList.add('form-buttons');
  window.appendChild(submitButton);
  submitButton.addEventListener('click', () =>
    (0,_createTaskOrProject__WEBPACK_IMPORTED_MODULE_0__.createTaskOrProject)(_displayNewTaskWindow__WEBPACK_IMPORTED_MODULE_1__.taskOrProject)
  );
}


/***/ }),

/***/ "./src/createTaskOrProject.js":
/*!************************************!*\
  !*** ./src/createTaskOrProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskOrProject": () => (/* binding */ createTaskOrProject)
/* harmony export */ });
/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectClass */ "./src/projectClass.js");
/* harmony import */ var _defineCurrentProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineCurrentProject */ "./src/defineCurrentProject.js");
/* harmony import */ var _writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeHeaderForNewTask */ "./src/writeHeaderForNewTask.js");






function createTaskOrProject(taskOrProject) {
  if (taskOrProject == 'Task') {
    const definedDate = moment(document.getElementById('date').value).format(
      'DD/MM/YYYY'
    );
    const newTask = new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Task(
      document.getElementById('title').value,
      document.getElementById('details').value,
      definedDate,
      document.getElementById('priorityButton').textContent,
      _defineCurrentProject__WEBPACK_IMPORTED_MODULE_1__.activeProject,
      false
    );
    newTask.initialize();
    (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_2__.closeNewTaskSideBar)(document.querySelector('.newTaskWindow'), 'newTask');
  }
  if (taskOrProject == 'Project') {
    if (
      document.getElementById(document.getElementById('newProjectForm').value)
    ) {
      document.getElementById('newProjectForm').value =
        'Error, duplicate project';
    } else {
      if (
        document.getElementById('newProjectForm').value ==
        'Error, duplicate project'
      )
        return;
      const newProject = new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Project(
        document.getElementById('newProjectForm').value
      );
      newProject.initialize();
      (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_2__.closeNewTaskSideBar)(document.querySelector('.newTaskWindow'), 'newTask');
    }
  }
}


/***/ }),

/***/ "./src/defineCurrentProject.js":
/*!*************************************!*\
  !*** ./src/defineCurrentProject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "defineActive": () => (/* binding */ defineActive)
/* harmony export */ });
let activeProject = document.querySelector('.active').id;


function defineActive() {
  activeProject = document.querySelector('.active').id;
  return activeProject;
}


/***/ }),

/***/ "./src/displayAllTasks.js":
/*!********************************!*\
  !*** ./src/displayAllTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function displayAllTasks() {
  document
    .querySelectorAll('.active')
    .forEach((active) => active.classList.remove('active'));
  generalButton.classList.add('active');
  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {
    if (document.getElementById(`${___WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`)) {
      ___WEBPACK_IMPORTED_MODULE_0__.tasks[i].removeTask(
        document.getElementById(`${___WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`),
        false
      );
    }
  }
  for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {
    ___WEBPACK_IMPORTED_MODULE_0__.tasks[i].writeToDOM();
    ___WEBPACK_IMPORTED_MODULE_0__.tasks[i].detailsExist = false;
  }
}


/***/ }),

/***/ "./src/displayNewTaskWindow.js":
/*!*************************************!*\
  !*** ./src/displayNewTaskWindow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskOrProject": () => (/* binding */ taskOrProject),
/* harmony export */   "displayNewTaskWindow": () => (/* binding */ displayNewTaskWindow)
/* harmony export */ });
/* harmony import */ var _writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writeHeaderForNewTask */ "./src/writeHeaderForNewTask.js");
/* harmony import */ var _writeNewTaskSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writeNewTaskSidebar */ "./src/writeNewTaskSidebar.js");
/* harmony import */ var _newTaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTaskForm */ "./src/newTaskForm.js");
/* harmony import */ var _toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleBackgroundBlur */ "./src/toggleBackgroundBlur.js");




const newTaskContent = document.createElement('div');
const newTaskWindow = document.createElement('div');
let newTaskWindowExists = false;
let taskOrProject = 'Task';


function displayNewTaskWindow(window) {
  (0,_toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_3__.toggleBackgroundBlur)();
  if (!newTaskWindowExists) {
    newTaskWindow.classList.add('newTaskWindow');
    newTaskContent.classList.add('newTaskContent');
    (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_0__.writeHeader)(newTaskWindow, 'newTask');
    (0,_writeNewTaskSidebar__WEBPACK_IMPORTED_MODULE_1__.writeNewTaskSidebar)(newTaskContent);
    (0,_newTaskForm__WEBPACK_IMPORTED_MODULE_2__.newForm)(newTaskContent);
    newTaskWindow.appendChild(newTaskContent);
    window.appendChild(newTaskWindow);
    newTaskWindowExists = true;
    addButtonListeners();
  } else {
    newTaskWindow.classList.toggle('hidden');
  }
}

function addButtonListeners() {
  document
    .getElementById('taskBtn')
    .addEventListener('click', () => displayForm('Task'));
  document
    .getElementById('projectBtn')
    .addEventListener('click', () => displayForm('Project'));
}

function displayForm(isTaskOrProject) {
  if (isTaskOrProject == 'Task') {
    taskOrProject = 'Task';
    document.getElementById('newProjectForm').classList.add('hidden');
    document.getElementById('newTaskForm').classList.remove('hidden');
    document.getElementById('projectBtn').classList.add('inactiveBtn');
    document.getElementById('projectBtn').classList.remove('activeBtn');
    document.getElementById('taskBtn').classList.remove('inactiveBtn');
    document.getElementById('taskBtn').classList.add('activeBtn');
  } else {
    taskOrProject = 'Project';
    document.getElementById('newTaskForm').classList.add('hidden');
    document.getElementById('newProjectForm').classList.remove('hidden');
    document.getElementById('taskBtn').classList.add('inactiveBtn');
    document.getElementById('taskBtn').classList.remove('activeBtn');
    document.getElementById('projectBtn').classList.remove('inactiveBtn');
    document.getElementById('projectBtn').classList.add('activeBtn');
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _displayNewTaskWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayNewTaskWindow.js */ "./src/displayNewTaskWindow.js");
/* harmony import */ var _writeLocalStorageContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writeLocalStorageContent.js */ "./src/writeLocalStorageContent.js");
/* harmony import */ var _displayAllTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayAllTasks.js */ "./src/displayAllTasks.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




let projects = [];
let tasks = [];



const newButton = document.getElementById('newButton');
newButton.addEventListener('click', () =>
  (0,_displayNewTaskWindow_js__WEBPACK_IMPORTED_MODULE_0__.displayNewTaskWindow)(document.getElementById('main'))
);

const generalButton = document.getElementById('generalButton');
generalButton.addEventListener('click', _displayAllTasks_js__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks);

(0,_writeLocalStorageContent_js__WEBPACK_IMPORTED_MODULE_1__.writeLocalStorageContent)();


/***/ }),

/***/ "./src/newTaskForm.js":
/*!****************************!*\
  !*** ./src/newTaskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newForm": () => (/* binding */ newForm)
/* harmony export */ });
/* harmony import */ var _createDOMForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOMForm */ "./src/createDOMForm.js");
/* harmony import */ var _createFormSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFormSubmit */ "./src/createFormSubmit.js");



function newForm(window, taskOrProject = 'Task') {
  const newTaskWindowContent = document.createElement('div');
  newTaskWindowContent.classList.add('newTaskFormContent');
  const newTaskForm = document.createElement('form');
  newTaskForm.id = 'newTaskForm';
  (0,_createDOMForm__WEBPACK_IMPORTED_MODULE_0__.createDOMForm)(newTaskForm);
  newTaskWindowContent.appendChild(newTaskForm);
  const newProjectForm = document.createElement('input');
  newProjectForm.classList.add('hidden');
  newProjectForm.id = 'newProjectForm';
  newProjectForm.type = 'text';
  newProjectForm.placeholder = 'Name your project';
  newTaskWindowContent.appendChild(newProjectForm);

  (0,_createFormSubmit__WEBPACK_IMPORTED_MODULE_1__.createFormSubmit)(newTaskWindowContent);
  window.appendChild(newTaskWindowContent);
}


/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _defineCurrentProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineCurrentProject.js */ "./src/defineCurrentProject.js");
/* harmony import */ var _writeHeaderForNewTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeHeaderForNewTask.js */ "./src/writeHeaderForNewTask.js");
/* harmony import */ var _toggleBackgroundBlur_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleBackgroundBlur.js */ "./src/toggleBackgroundBlur.js");






class Project {
  constructor(nomeDoProjeto) {
    this.name = nomeDoProjeto;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(this);
  }

  get projectName() {
    return this.name;
  }
  turnActive(button) {
    document
      .querySelectorAll('.active')
      .forEach((active) => active.classList.remove('active'));
    button.classList.add('active');
  }

  sortProject() {
    this.turnActive(document.getElementById(this.projectName));
    const activeProject = (0,_defineCurrentProject_js__WEBPACK_IMPORTED_MODULE_1__.defineActive)();
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {
      if (document.getElementById(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`)) {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].removeTask(
          document.getElementById(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`),
          false
        );
      }
    }
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].project == activeProject) {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].writeToDOM();
        _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].detailsExist = false;
      }
    }
  }
  writeToDOM() {
    const thisProjectButton = document.createElement('button');
    thisProjectButton.classList.add('tab-btn', 'project');
    thisProjectButton.id = this.projectName;
    thisProjectButton.textContent = this.projectName;
    document.getElementById('projects').appendChild(thisProjectButton);
    this.turnActive(thisProjectButton);
    thisProjectButton.addEventListener('click', () => this.sortProject());
  }

  initialize() {
    this.writeToDOM();
    localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects));
  }

  removeProject() {
    document.getElementById(this.projectName).remove();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(this), 1);
    localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects));
  }
}

class Task {
  constructor(
    title,
    details,
    dueDate,
    priority = 'Low',
    project = '',
    completed = false
  ) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = completed;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push(this);
    this.detailsExist = false;
  }
  set definePriority(priority) {
    this.priority = priority;
  }

  addPriorityStyle(item) {
    const priority = this.priority.toLowerCase();
    item.classList.add(priority + 'Priority');
  }
  removeTask(whatToDelete, spliceOrNot = true) {
    if (spliceOrNot) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.indexOf(this), 1);
      localStorage.setItem('tasks', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks));
    }
    whatToDelete.remove();
  }

  writeToDOM() {
    const task = document.createElement('div');
    task.classList.add('spread');
    task.id = `${this.title}.task`;
    const title = document.createElement('p');
    title.textContent = this.title;
    task.appendChild(title);
    const everythingElse = document.createElement('div');
    everythingElse.classList.add('details');
    const dueDate = document.createElement('p');
    dueDate.textContent = this.dueDate;
    everythingElse.appendChild(dueDate);
    const details = document.createElement('button');
    details.textContent = 'Details';
    details.addEventListener('click', () => this.toggleDetails(title));
    everythingElse.appendChild(details);
    this.addPriorityStyle(task);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => this.removeTask(task));
    everythingElse.appendChild(deleteButton);
    task.appendChild(everythingElse);
    document.getElementById('content').appendChild(task);
  }
  initialize() {
    this.writeToDOM();
    localStorage.setItem('tasks', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks));
  }

  toggleDetails() {
    (0,_toggleBackgroundBlur_js__WEBPACK_IMPORTED_MODULE_3__.toggleBackgroundBlur)();
    const main = document.getElementById('main');
    const taskDetailsDiv = document.createElement('div');
    if (!this.detailsExist) {
      taskDetailsDiv.classList.add('taskDetailsDiv');
      (0,_writeHeaderForNewTask_js__WEBPACK_IMPORTED_MODULE_2__.writeHeader)(taskDetailsDiv, 'DetailsPopup', taskDetailsDiv);
      const taskDetails = document.createElement('div');
      taskDetails.classList.add('taskDetailsHandler');
      taskDetailsDiv.id = `${this.title}.details`;
      const taskDetailsProject = document.createElement('p');
      this.project == 'generalButton'
        ? (taskDetailsProject.textContent = `No project assignment`)
        : (taskDetailsProject.textContent = `Project name: ${this.project}`);
      taskDetails.appendChild(taskDetailsProject);
      const taskDetailsDetails = document.createElement('p');
      taskDetailsDetails.textContent = `Details: ${this.details}`;
      taskDetails.appendChild(taskDetailsDetails);
      const taskDetailsPriority = document.createElement('p');
      taskDetailsPriority.textContent = `Priority: ${this.priority}`;
      taskDetails.appendChild(taskDetailsPriority);
      taskDetailsDiv.appendChild(taskDetails);
      main.appendChild(taskDetailsDiv);
      this.detailsExist = true;
    } else {
      document.querySelector('.taskDetailsDiv').classList.toggle('hidden');
    }
  }
}


/***/ }),

/***/ "./src/toggleBackgroundBlur.js":
/*!*************************************!*\
  !*** ./src/toggleBackgroundBlur.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleBackgroundBlur": () => (/* binding */ toggleBackgroundBlur)
/* harmony export */ });
function toggleBackgroundBlur() {
  document.querySelector('.header-div').classList.toggle('blur');
  document.querySelector('.planner').classList.toggle('blur');
}


/***/ }),

/***/ "./src/writeHeaderForNewTask.js":
/*!**************************************!*\
  !*** ./src/writeHeaderForNewTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeHeader": () => (/* binding */ writeHeader),
/* harmony export */   "closeNewTaskSideBar": () => (/* binding */ closeNewTaskSideBar)
/* harmony export */ });
/* harmony import */ var _toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleBackgroundBlur */ "./src/toggleBackgroundBlur.js");


function writeHeader(window, newTaskOrDetails, whoseTaskDetails) {
  const newTaskHeader = document.createElement('div');
  newTaskHeader.classList.add('newTaskHeader');
  const headerText = document.createElement('div');
  if (newTaskOrDetails == 'newTask') {
    headerText.textContent = 'Create new...';
  } else {
    headerText.textContent = 'Showing details';
  }
  const closingDiv = document.createElement('div');
  closingDiv.classList.add('closingDiv');
  closingDiv.textContent = 'x';
  closingDiv.onclick = () =>
    closeNewTaskSideBar(
      document.querySelector('.newTaskWindow'),
      newTaskOrDetails,
      whoseTaskDetails
    );
  newTaskHeader.appendChild(headerText);
  newTaskHeader.appendChild(closingDiv);
  window.appendChild(newTaskHeader);
}

function closeNewTaskSideBar(tab, newTaskOrDetails, whoseTaskDetails) {
  (0,_toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_0__.toggleBackgroundBlur)();
  if (newTaskOrDetails === 'newTask') {
    tab.classList.add('hidden');
  } else {
    whoseTaskDetails.classList.add('hidden');
  }
}


/***/ }),

/***/ "./src/writeLocalStorageContent.js":
/*!*****************************************!*\
  !*** ./src/writeLocalStorageContent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeLocalStorageContent": () => (/* binding */ writeLocalStorageContent)
/* harmony export */ });
/* harmony import */ var _defineCurrentProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineCurrentProject */ "./src/defineCurrentProject.js");
/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClass */ "./src/projectClass.js");



function writeLocalStorageContent() {
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < localTasks.length; i++) {
    const newTask = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Task(
      localTasks[i].title,
      localTasks[i].details,
      localTasks[i].dueDate,
      localTasks[i].priority,
      localTasks[i].project,
      localTasks[i].completed
    );
    newTask.initialize();
  }
  const localProjects = JSON.parse(localStorage.getItem('projects')) || [];
  for (let i = 0; i < localProjects.length; i++) {
    const newProject = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project(localProjects[i].name);
    newProject.initialize();
  }

  (0,_defineCurrentProject__WEBPACK_IMPORTED_MODULE_0__.defineActive)();
}

//ATUAL: POR ALGUM MOTIVO A LINHA 9 NÃO FUNCIONA, FIX THAT AND YOU WIN


/***/ }),

/***/ "./src/writeNewTaskSidebar.js":
/*!************************************!*\
  !*** ./src/writeNewTaskSidebar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeNewTaskSidebar": () => (/* binding */ writeNewTaskSidebar)
/* harmony export */ });
function writeNewTaskSidebar(window) {
  const newTaskSidebar = document.createElement('div');
  newTaskSidebar.classList.add('newTaskSideBar');
  const projectOrTask = document.createElement('div');
  projectOrTask.classList.add('projectOrTask');
  const taskButton = document.createElement('button');
  taskButton.classList.add('tab-btn', 'activeBtn');
  taskButton.id = 'taskBtn';
  taskButton.textContent = 'Task';
  const projectButton = document.createElement('button');
  projectButton.classList.add('tab-btn', 'inactiveBtn');
  projectButton.id = 'projectBtn';
  projectButton.textContent = 'Project';
  projectOrTask.appendChild(taskButton);
  projectOrTask.appendChild(projectButton);
  newTaskSidebar.appendChild(projectOrTask);
  window.appendChild(newTaskSidebar);
}


/***/ }),

/***/ "./src/woodbackground.jpg":
/*!********************************!*\
  !*** ./src/woodbackground.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de84c900f7d252d48065.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFFBQVEsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFL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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRE9NRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVGb3JtU3VibWl0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2tPclByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGVmaW5lQ3VycmVudFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheUFsbFRhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2dnbGVCYWNrZ3JvdW5kQmx1ci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZUhlYWRlckZvck5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlTmV3VGFza1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwid29vZGJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIHJpZ2h0IGJvdHRvbSxcXHJcXG4gICAgICByZ2JhKDMsIDEwNSwgOTIsIDAuOCksXFxyXFxuICAgICAgcmdiYSgxMTcsIDIxNiwgMjEzLCAwLjkpXFxyXFxuICAgICksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBmb250LWZhbWlseTogVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0OTBweCkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlci1kaXYge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyLWRpdixcXHJcXG4ubmV3VGFza0hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xcclxcbn1cXHJcXG4uaGVhZGVyLWRpdiA+IHAsXFxyXFxuLm5ld1Rhc2tIZWFkZXIgPiBkaXYge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMC4zZW0gMWVtIDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAuNWVtIDFlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2dpdGh1Yjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5wbGFubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi50YWJzIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMC41ZW07XFxyXFxufVxcclxcbi50YWIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xcclxcbn1cXHJcXG4udGFiLWJ0bixcXHJcXG4uZGV0YWlscyA+IGJ1dHRvbixcXHJcXG4jc3VibWl0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyA0MCUpO1xcclxcbiAgY29sb3I6ICM1MDFmM2E7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbiNnZW5lcmFsQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLFxcclxcbi5uZXdCdXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4jcHJvamVjdHMgPiAucHJvamVjdCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1idG46aG92ZXIsXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNkMzhkOWU7XFxyXFxufVxcclxcbi50YWItYnRuOmFjdGl2ZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDFweDtcXHJcXG59XFxyXFxuLnRhYi1idG4gKyAucHJvamVjdCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3QnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMi41ZW07XFxyXFxuICB3aWR0aDogMi41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyA0MCUpO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXHJcXG59XFxyXFxuXFxyXFxuI25ld0J1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcbiNuZXdCdXR0b246YWN0aXZlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ciB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGZsZXg6IDQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICBtYXJnaW46IDAgMCAwLjVlbSAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgPiBkaXYge1xcclxcbiAgcGFkZGluZzogMC4yZW07XFxyXFxufVxcclxcbi5sb3dQcmlvcml0eSB7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMWQ4ZTFkO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMxZDhlMWQ7XFxyXFxufVxcclxcbi5tZWRpdW1Qcmlvcml0eSB7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCNGRkE1MDA7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQjRkZBNTAwO1xcclxcbn1cXHJcXG4uaGlnaFByaW9yaXR5IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmZjAwMDA7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwcmVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luOiAxcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc3ByZWFkID4gcCB7XFxyXFxuICBjb2xvcjogIzUwMWYzYTtcXHJcXG4gIG1hcmdpbi1yaWdodDogM2VtO1xcclxcbn1cXHJcXG4uZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgPiBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAwLjVlbTtcXHJcXG4gIG1hcmdpbjogMGVtIDFlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uZGV0YWlscyA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi8qIGFxdWkgdmFpIGVudHJhciBvcyBzdHlsZXMgZGEgYWJhIGRlIGRldGFsaGVzIGUgZGEgZGl2IHF1ZSBmYXogbyBtYWluIGludGVpcm8gZGFyIGJsdXIgKi9cXHJcXG5cXHJcXG4ubmV3VGFza1dpbmRvdyxcXHJcXG4udGFza0RldGFpbHNEaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCA1cHggIzIyMjtcXHJcXG59XFxyXFxuLm5ld1Rhc2tIZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5uZXdUYXNrSGVhZGVyID4gZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zaW5nRGl2IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDNweCAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2xvc2luZ0Rpdjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcbi5uZXdUYXNrQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5uZXdUYXNrU2lkZUJhciB7XFxyXFxuICBtYXJnaW46IDAuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdE9yVGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnByb2plY3RPclRhc2sgPiBidXR0b24ge1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUsXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gIG1hcmdpbjogMnB4IDVweDtcXHJcXG59XFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjYzM4ZDllO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlQnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxyXFxuICBjb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuLmFjdGl2ZUJ0bjpob3ZlcixcXHJcXG4uaW5hY3RpdmVCdG46aG92ZXIge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDExOCwgMTE4LCAxMTgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3VGFza0Zvcm1Db250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNjMzhkOWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG4jbmV3VGFza0Zvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiNuZXdUYXNrRm9ybSA+IGlucHV0LFxcclxcbiNuZXdQcm9qZWN0Rm9ybSB7XFxyXFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gMjAlKTtcXHJcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuI3RpdGxlLFxcclxcbiNkYXRlLFxcclxcbiNkZXRhaWxzLFxcclxcbiNuZXdQcm9qZWN0Rm9ybSB7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIGJvcmRlcjogM3B4IGluc2V0ICNjMzhkOWU7XFxyXFxuICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxyXFxufVxcclxcbi5kZXRhaWxzID4gcCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxyXFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gMjUlKTtcXHJcXG59XFxyXFxuLmRldGFpbHMgPiBidXR0b24sXFxyXFxuLmRldGFpbHMgPiBwIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzYmEzOTU7XFxyXFxuICBjb2xvcjogIzNiYTM5NTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuI3ByaW9yaXR5QnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNmVtO1xcclxcbiAgd2lkdGg6IDZlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci10b3A6IDNweCBpbnNldCAjYzM4ZDllO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IGluc2V0ICNjMzhkOWU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbiNkZXRhaWxzIHtcXHJcXG4gIGhlaWdodDogNWVtO1xcclxcbn1cXHJcXG4udGFza0RldGFpbHNEaXYge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogMzAlO1xcclxcbn1cXHJcXG4udGFza0RldGFpbHNIYW5kbGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcXHJcXG59XFxyXFxuLnRhc2tEZXRhaWxzSGFuZGxlciA+IHAge1xcclxcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGNvbG9yOiAjM2JhMzk1O1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gNDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHByw7N4aW1vIHBhc3NvIG1leGVyIGNvbSBvIGNyZWF0ZWJ1dHRvbiAoaWQ9c3VibWl0KSBkZWl4YXIgcXVhZHJhZG8gZSBiZW0gZXN0aWxvc28sIGJvcmEgICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpc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QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUEsNkZBQTZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICB0byByaWdodCBib3R0b20sXFxyXFxuICAgICAgcmdiYSgzLCAxMDUsIDkyLCAwLjgpLFxcclxcbiAgICAgIHJnYmEoMTE3LCAyMTYsIDIxMywgMC45KVxcclxcbiAgICApLFxcclxcbiAgICB1cmwoJ3dvb2RiYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDkwcHgpIHtcXHJcXG4gIG1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5oZWFkZXItZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlci1kaXYsXFxyXFxuLm5ld1Rhc2tIZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcXHJcXG59XFxyXFxuLmhlYWRlci1kaXYgPiBwLFxcclxcbi5uZXdUYXNrSGVhZGVyID4gZGl2IHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtIDFlbSAwLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwLjVlbSAxZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNnaXRodWI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4udGFicyB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDAuNWVtO1xcclxcbn1cXHJcXG4udGFiIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcXHJcXG59XFxyXFxuLnRhYi1idG4sXFxyXFxuLmRldGFpbHMgPiBidXR0b24sXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gNDAlKTtcXHJcXG4gIGNvbG9yOiAjNTAxZjNhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4jZ2VuZXJhbEJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcbiNwcm9qZWN0cyxcXHJcXG4ubmV3QnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI3Byb2plY3RzID4gLnByb2plY3Qge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuOmhvdmVyLFxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZDM4ZDllO1xcclxcbn1cXHJcXG4udGFiLWJ0bjphY3RpdmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxcHg7XFxyXFxufVxcclxcbi50YWItYnRuICsgLnByb2plY3Qge1xcclxcbiAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ld0J1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDIuNWVtO1xcclxcbiAgd2lkdGg6IDIuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gNDAlKTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbiNuZXdCdXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbn1cXHJcXG4jbmV3QnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXIge1xcclxcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxyXFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICBmbGV4OiA0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMC4xZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50ID4gZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtO1xcclxcbn1cXHJcXG4ubG93UHJpb3JpdHkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzFkOGUxZDtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjMWQ4ZTFkO1xcclxcbn1cXHJcXG4ubWVkaXVtUHJpb3JpdHkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQjRkZBNTAwO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkI0ZGQTUwMDtcXHJcXG59XFxyXFxuLmhpZ2hQcmlvcml0eSB7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZmYwMDAwO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5zcHJlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNwcmVhZCA+IHAge1xcclxcbiAgY29sb3I6ICM1MDFmM2E7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDNlbTtcXHJcXG59XFxyXFxuLmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzID4gYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxyXFxuICBtYXJnaW46IDBlbSAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmRldGFpbHMgPiBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhcXVpIHZhaSBlbnRyYXIgb3Mgc3R5bGVzIGRhIGFiYSBkZSBkZXRhbGhlcyBlIGRhIGRpdiBxdWUgZmF6IG8gbWFpbiBpbnRlaXJvIGRhciBibHVyICovXFxyXFxuXFxyXFxuLm5ld1Rhc2tXaW5kb3csXFxyXFxuLnRhc2tEZXRhaWxzRGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggNXB4ICMyMjI7XFxyXFxufVxcclxcbi5uZXdUYXNrSGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubmV3VGFza0hlYWRlciA+IGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2luZ0RpdiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAzcHggMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NpbmdEaXY6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4ubmV3VGFza0NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubmV3VGFza1NpZGVCYXIge1xcclxcbiAgbWFyZ2luOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RPclRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5wcm9qZWN0T3JUYXNrID4gYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLFxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICBtYXJnaW46IDJweCA1cHg7XFxyXFxufVxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2MzOGQ5ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xcclxcbiAgY29sb3I6ICNlZWU7XFxyXFxufVxcclxcbi5hY3RpdmVCdG46aG92ZXIsXFxyXFxuLmluYWN0aXZlQnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigxMTgsIDExOCwgMTE4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Rhc2tGb3JtQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjYzM4ZDllO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuI25ld1Rhc2tGb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jbmV3VGFza0Zvcm0gPiBpbnB1dCxcXHJcXG4jbmV3UHJvamVjdEZvcm0ge1xcclxcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDIwJSk7XFxyXFxuICBib3JkZXItd2lkdGg6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcbiN0aXRsZSxcXHJcXG4jZGF0ZSxcXHJcXG4jZGV0YWlscyxcXHJcXG4jbmV3UHJvamVjdEZvcm0ge1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBib3JkZXI6IDNweCBpbnNldCAjYzM4ZDllO1xcclxcbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcclxcbn1cXHJcXG4uZGV0YWlscyA+IHAge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDI1JSk7XFxyXFxufVxcclxcbi5kZXRhaWxzID4gYnV0dG9uLFxcclxcbi5kZXRhaWxzID4gcCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjM2JhMzk1O1xcclxcbiAgY29sb3I6ICMzYmEzOTU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcbiNwcmlvcml0eUJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDZlbTtcXHJcXG4gIHdpZHRoOiA2ZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItdG9wOiAzcHggaW5zZXQgI2MzOGQ5ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBpbnNldCAjYzM4ZDllO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG4jZGV0YWlscyB7XFxyXFxuICBoZWlnaHQ6IDVlbTtcXHJcXG59XFxyXFxuLnRhc2tEZXRhaWxzRGl2IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDMwJTtcXHJcXG59XFxyXFxuLnRhc2tEZXRhaWxzSGFuZGxlciB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC44ZW07XFxyXFxufVxcclxcbi50YXNrRGV0YWlsc0hhbmRsZXIgPiBwIHtcXHJcXG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogIzNiYTM5NTtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDQwJSk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcsOzeGltbyBwYXNzbyBtZXhlciBjb20gbyBjcmVhdGVidXR0b24gKGlkPXN1Ym1pdCkgZGVpeGFyIHF1YWRyYWRvIGUgYmVtIGVzdGlsb3NvLCBib3JhICAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVET01Gb3JtKGZvcm0pIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gIHRpdGxlLnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xyXG4gIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICB0aXRsZS5taW5MZW5ndGggPSAnMSc7XHJcbiAgdGl0bGUubWF4TGVuZ3RoID0gJzQwJztcclxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlLmlkID0gJ2RhdGUnO1xyXG4gIGRhdGUudHlwZSA9ICdkYXRlJztcclxuICBkYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRldGFpbHMuaWQgPSAnZGV0YWlscyc7XHJcbiAgZGV0YWlscy50eXBlID0gJ3RleHQnO1xyXG4gIGRldGFpbHMucGxhY2Vob2xkZXIgPSAnRGV0YWlsIHlvdXIgdGFzay4nO1xyXG4gIGRldGFpbHMubWF4TGVuZ3RoID0gJzE0MCc7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHByaW9yaXR5LnR5cGUgPSAnYnV0dG9uJztcclxuICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG4gIHByaW9yaXR5LmlkID0gJ3ByaW9yaXR5QnV0dG9uJztcclxuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbnMnLCAnbG93UHJpb3JpdHknKTtcclxuICBwcmlvcml0eS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlUHJpb3JpdHkocHJpb3JpdHkpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShub2RlKSB7XHJcbiAgaWYgKG5vZGUudGV4dENvbnRlbnQgPT0gJ0xvdycpIHtcclxuICAgIG5vZGUudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcclxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcclxuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbG93UHJpb3JpdHknKTtcclxuICB9IGVsc2UgaWYgKG5vZGUudGV4dENvbnRlbnQgPT0gJ01lZGl1bScpIHtcclxuICAgIG5vZGUudGV4dENvbnRlbnQgPSAnSGlnaCc7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZWRpdW1Qcmlvcml0eScpO1xyXG4gIH0gZWxzZSBpZiAobm9kZS50ZXh0Q29udGVudCA9PSAnSGlnaCcpIHtcclxuICAgIG5vZGUudGV4dENvbnRlbnQgPSAnTG93JztcclxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcclxuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaFByaW9yaXR5Jyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2tPclByb2plY3QgfSBmcm9tICcuL2NyZWF0ZVRhc2tPclByb2plY3QnO1xyXG5pbXBvcnQgeyB0YXNrT3JQcm9qZWN0IH0gZnJvbSAnLi9kaXNwbGF5TmV3VGFza1dpbmRvdyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVN1Ym1pdCh3aW5kb3cpIHtcclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICBzdWJtaXRCdXR0b24uaWQgPSAnc3VibWl0JztcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b25zJyk7XHJcbiAgd2luZG93LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuICAgIGNyZWF0ZVRhc2tPclByb2plY3QodGFza09yUHJvamVjdClcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RDbGFzcyc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Byb2plY3RDbGFzcyc7XHJcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tICcuL2RlZmluZUN1cnJlbnRQcm9qZWN0JztcclxuXHJcbmltcG9ydCB7IGNsb3NlTmV3VGFza1NpZGVCYXIgfSBmcm9tICcuL3dyaXRlSGVhZGVyRm9yTmV3VGFzayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza09yUHJvamVjdCh0YXNrT3JQcm9qZWN0KSB7XHJcbiAgaWYgKHRhc2tPclByb2plY3QgPT0gJ1Rhc2snKSB7XHJcbiAgICBjb25zdCBkZWZpbmVkRGF0ZSA9IG1vbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlKS5mb3JtYXQoXHJcbiAgICAgICdERC9NTS9ZWVlZJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUsXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJykudmFsdWUsXHJcbiAgICAgIGRlZmluZWREYXRlLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlCdXR0b24nKS50ZXh0Q29udGVudCxcclxuICAgICAgYWN0aXZlUHJvamVjdCxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICBuZXdUYXNrLmluaXRpYWxpemUoKTtcclxuICAgIGNsb3NlTmV3VGFza1NpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tXaW5kb3cnKSwgJ25ld1Rhc2snKTtcclxuICB9XHJcbiAgaWYgKHRhc2tPclByb2plY3QgPT0gJ1Byb2plY3QnKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLnZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLnZhbHVlID1cclxuICAgICAgICAnRXJyb3IsIGR1cGxpY2F0ZSBwcm9qZWN0JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZSA9PVxyXG4gICAgICAgICdFcnJvciwgZHVwbGljYXRlIHByb2plY3QnXHJcbiAgICAgIClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICAgICAgY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza1dpbmRvdycpLCAnbmV3VGFzaycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJsZXQgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5pZDtcclxuZXhwb3J0IHsgYWN0aXZlUHJvamVjdCB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUFjdGl2ZSgpIHtcclxuICBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmlkO1xyXG4gIHJldHVybiBhY3RpdmVQcm9qZWN0O1xyXG59XHJcbiIsImltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpXHJcbiAgICAuZm9yRWFjaCgoYWN0aXZlKSA9PiBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gIGdlbmVyYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCkpIHtcclxuICAgICAgdGFza3NbaV0ucmVtb3ZlVGFzayhcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIHRhc2tzW2ldLndyaXRlVG9ET00oKTtcclxuICAgIHRhc2tzW2ldLmRldGFpbHNFeGlzdCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB3cml0ZUhlYWRlciB9IGZyb20gJy4vd3JpdGVIZWFkZXJGb3JOZXdUYXNrJztcclxuaW1wb3J0IHsgd3JpdGVOZXdUYXNrU2lkZWJhciB9IGZyb20gJy4vd3JpdGVOZXdUYXNrU2lkZWJhcic7XHJcbmltcG9ydCB7IG5ld0Zvcm0gfSBmcm9tICcuL25ld1Rhc2tGb3JtJztcclxuaW1wb3J0IHsgdG9nZ2xlQmFja2dyb3VuZEJsdXIgfSBmcm9tICcuL3RvZ2dsZUJhY2tncm91bmRCbHVyJztcclxuY29uc3QgbmV3VGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5sZXQgbmV3VGFza1dpbmRvd0V4aXN0cyA9IGZhbHNlO1xyXG5sZXQgdGFza09yUHJvamVjdCA9ICdUYXNrJztcclxuZXhwb3J0IHsgdGFza09yUHJvamVjdCB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlOZXdUYXNrV2luZG93KHdpbmRvdykge1xyXG4gIHRvZ2dsZUJhY2tncm91bmRCbHVyKCk7XHJcbiAgaWYgKCFuZXdUYXNrV2luZG93RXhpc3RzKSB7XHJcbiAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tXaW5kb3cnKTtcclxuICAgIG5ld1Rhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tDb250ZW50Jyk7XHJcbiAgICB3cml0ZUhlYWRlcihuZXdUYXNrV2luZG93LCAnbmV3VGFzaycpO1xyXG4gICAgd3JpdGVOZXdUYXNrU2lkZWJhcihuZXdUYXNrQ29udGVudCk7XHJcbiAgICBuZXdGb3JtKG5ld1Rhc2tDb250ZW50KTtcclxuICAgIG5ld1Rhc2tXaW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRlbnQpO1xyXG4gICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tXaW5kb3cpO1xyXG4gICAgbmV3VGFza1dpbmRvd0V4aXN0cyA9IHRydWU7XHJcbiAgICBhZGRCdXR0b25MaXN0ZW5lcnMoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycygpIHtcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCd0YXNrQnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlGb3JtKCdUYXNrJykpO1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCdG4nKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUZvcm0oJ1Byb2plY3QnKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKGlzVGFza09yUHJvamVjdCkge1xyXG4gIGlmIChpc1Rhc2tPclByb2plY3QgPT0gJ1Rhc2snKSB7XHJcbiAgICB0YXNrT3JQcm9qZWN0ID0gJ1Rhc2snO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QnRuJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmVCdG4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUJ0bicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXNrT3JQcm9qZWN0ID0gJ1Byb2plY3QnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tGb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQnRuJykuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmVCdG4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUJ0bicpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkaXNwbGF5TmV3VGFza1dpbmRvdyB9IGZyb20gJy4vZGlzcGxheU5ld1Rhc2tXaW5kb3cuanMnO1xyXG5pbXBvcnQgeyB3cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQgfSBmcm9tICcuL3dyaXRlTG9jYWxTdG9yYWdlQ29udGVudC5qcyc7XHJcbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gJy4vZGlzcGxheUFsbFRhc2tzLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRhc2tzID0gW107XHJcbmV4cG9ydCB7IHRhc2tzIH07XHJcbmV4cG9ydCB7IHByb2plY3RzIH07XHJcblxyXG5jb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QnV0dG9uJyk7XHJcbm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcbiAgZGlzcGxheU5ld1Rhc2tXaW5kb3coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSlcclxuKTtcclxuXHJcbmNvbnN0IGdlbmVyYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbEJ1dHRvbicpO1xyXG5nZW5lcmFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFsbFRhc2tzKTtcclxuXHJcbndyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Gb3JtIH0gZnJvbSAnLi9jcmVhdGVET01Gb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlRm9ybVN1Ym1pdCB9IGZyb20gJy4vY3JlYXRlRm9ybVN1Ym1pdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3Rm9ybSh3aW5kb3csIHRhc2tPclByb2plY3QgPSAnVGFzaycpIHtcclxuICBjb25zdCBuZXdUYXNrV2luZG93Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tXaW5kb3dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tGb3JtQ29udGVudCcpO1xyXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIG5ld1Rhc2tGb3JtLmlkID0gJ25ld1Rhc2tGb3JtJztcclxuICBjcmVhdGVET01Gb3JtKG5ld1Rhc2tGb3JtKTtcclxuICBuZXdUYXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIG5ld1Byb2plY3RGb3JtLmlkID0gJ25ld1Byb2plY3RGb3JtJztcclxuICBuZXdQcm9qZWN0Rm9ybS50eXBlID0gJ3RleHQnO1xyXG4gIG5ld1Byb2plY3RGb3JtLnBsYWNlaG9sZGVyID0gJ05hbWUgeW91ciBwcm9qZWN0JztcclxuICBuZXdUYXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XHJcblxyXG4gIGNyZWF0ZUZvcm1TdWJtaXQobmV3VGFza1dpbmRvd0NvbnRlbnQpO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrV2luZG93Q29udGVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL2luZGV4LmpzJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL2luZGV4LmpzJztcclxuaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSAnLi9kZWZpbmVDdXJyZW50UHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IHdyaXRlSGVhZGVyIH0gZnJvbSAnLi93cml0ZUhlYWRlckZvck5ld1Rhc2suanMnO1xyXG5pbXBvcnQgeyB0b2dnbGVCYWNrZ3JvdW5kQmx1ciB9IGZyb20gJy4vdG9nZ2xlQmFja2dyb3VuZEJsdXIuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5vbWVEb1Byb2pldG8pIHtcclxuICAgIHRoaXMubmFtZSA9IG5vbWVEb1Byb2pldG87XHJcbiAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb2plY3ROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbiAgdHVybkFjdGl2ZShidXR0b24pIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJylcclxuICAgICAgLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIHNvcnRQcm9qZWN0KCkge1xyXG4gICAgdGhpcy50dXJuQWN0aXZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvamVjdE5hbWUpKTtcclxuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBkZWZpbmVBY3RpdmUoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCkpIHtcclxuICAgICAgICB0YXNrc1tpXS5yZW1vdmVUYXNrKFxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSxcclxuICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGFza3NbaV0ucHJvamVjdCA9PSBhY3RpdmVQcm9qZWN0KSB7XHJcbiAgICAgICAgdGFza3NbaV0ud3JpdGVUb0RPTSgpO1xyXG4gICAgICAgIHRhc2tzW2ldLmRldGFpbHNFeGlzdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHdyaXRlVG9ET00oKSB7XHJcbiAgICBjb25zdCB0aGlzUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpc1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiLWJ0bicsICdwcm9qZWN0Jyk7XHJcbiAgICB0aGlzUHJvamVjdEJ1dHRvbi5pZCA9IHRoaXMucHJvamVjdE5hbWU7XHJcbiAgICB0aGlzUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdE5hbWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKS5hcHBlbmRDaGlsZCh0aGlzUHJvamVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLnR1cm5BY3RpdmUodGhpc1Byb2plY3RCdXR0b24pO1xyXG4gICAgdGhpc1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNvcnRQcm9qZWN0KCkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMud3JpdGVUb0RPTSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVByb2plY3QoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb2plY3ROYW1lKS5yZW1vdmUoKTtcclxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHRoaXMpLCAxKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0aXRsZSxcclxuICAgIGRldGFpbHMsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHkgPSAnTG93JyxcclxuICAgIHByb2plY3QgPSAnJyxcclxuICAgIGNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIHRhc2tzLnB1c2godGhpcyk7XHJcbiAgICB0aGlzLmRldGFpbHNFeGlzdCA9IGZhbHNlO1xyXG4gIH1cclxuICBzZXQgZGVmaW5lUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGFkZFByaW9yaXR5U3R5bGUoaXRlbSkge1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSB0aGlzLnByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkgKyAnUHJpb3JpdHknKTtcclxuICB9XHJcbiAgcmVtb3ZlVGFzayh3aGF0VG9EZWxldGUsIHNwbGljZU9yTm90ID0gdHJ1ZSkge1xyXG4gICAgaWYgKHNwbGljZU9yTm90KSB7XHJcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRoaXMpLCAxKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH1cclxuICAgIHdoYXRUb0RlbGV0ZS5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVG9ET00oKSB7XHJcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3NwcmVhZCcpO1xyXG4gICAgdGFzay5pZCA9IGAke3RoaXMudGl0bGV9LnRhc2tgO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnN0IGV2ZXJ5dGhpbmdFbHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBldmVyeXRoaW5nRWxzZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRoaXMuZHVlRGF0ZTtcclxuICAgIGV2ZXJ5dGhpbmdFbHNlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGV0YWlscy50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcclxuICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZURldGFpbHModGl0bGUpKTtcclxuICAgIGV2ZXJ5dGhpbmdFbHNlLmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG4gICAgdGhpcy5hZGRQcmlvcml0eVN0eWxlKHRhc2spO1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVtb3ZlVGFzayh0YXNrKSk7XHJcbiAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgdGFzay5hcHBlbmRDaGlsZChldmVyeXRoaW5nRWxzZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2spO1xyXG4gIH1cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRGV0YWlscygpIHtcclxuICAgIHRvZ2dsZUJhY2tncm91bmRCbHVyKCk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgIGNvbnN0IHRhc2tEZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpZiAoIXRoaXMuZGV0YWlsc0V4aXN0KSB7XHJcbiAgICAgIHRhc2tEZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXRhaWxzRGl2Jyk7XHJcbiAgICAgIHdyaXRlSGVhZGVyKHRhc2tEZXRhaWxzRGl2LCAnRGV0YWlsc1BvcHVwJywgdGFza0RldGFpbHNEaXYpO1xyXG4gICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0YXNrRGV0YWlsc0hhbmRsZXInKTtcclxuICAgICAgdGFza0RldGFpbHNEaXYuaWQgPSBgJHt0aGlzLnRpdGxlfS5kZXRhaWxzYDtcclxuICAgICAgY29uc3QgdGFza0RldGFpbHNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICB0aGlzLnByb2plY3QgPT0gJ2dlbmVyYWxCdXR0b24nXHJcbiAgICAgICAgPyAodGFza0RldGFpbHNQcm9qZWN0LnRleHRDb250ZW50ID0gYE5vIHByb2plY3QgYXNzaWdubWVudGApXHJcbiAgICAgICAgOiAodGFza0RldGFpbHNQcm9qZWN0LnRleHRDb250ZW50ID0gYFByb2plY3QgbmFtZTogJHt0aGlzLnByb2plY3R9YCk7XHJcbiAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzUHJvamVjdCk7XHJcbiAgICAgIGNvbnN0IHRhc2tEZXRhaWxzRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgdGFza0RldGFpbHNEZXRhaWxzLnRleHRDb250ZW50ID0gYERldGFpbHM6ICR7dGhpcy5kZXRhaWxzfWA7XHJcbiAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzRGV0YWlscyk7XHJcbiAgICAgIGNvbnN0IHRhc2tEZXRhaWxzUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGhpcy5wcmlvcml0eX1gO1xyXG4gICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc1ByaW9yaXR5KTtcclxuICAgICAgdGFza0RldGFpbHNEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzRGl2KTtcclxuICAgICAgdGhpcy5kZXRhaWxzRXhpc3QgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEZXRhaWxzRGl2JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWRpdicpLmNsYXNzTGlzdC50b2dnbGUoJ2JsdXInKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbm5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ2JsdXInKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0b2dnbGVCYWNrZ3JvdW5kQmx1ciB9IGZyb20gJy4vdG9nZ2xlQmFja2dyb3VuZEJsdXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSGVhZGVyKHdpbmRvdywgbmV3VGFza09yRGV0YWlscywgd2hvc2VUYXNrRGV0YWlscykge1xyXG4gIGNvbnN0IG5ld1Rhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tIZWFkZXInKTtcclxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaWYgKG5ld1Rhc2tPckRldGFpbHMgPT0gJ25ld1Rhc2snKSB7XHJcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBuZXcuLi4nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ1Nob3dpbmcgZGV0YWlscyc7XHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjbG9zaW5nRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmdEaXYnKTtcclxuICBjbG9zaW5nRGl2LnRleHRDb250ZW50ID0gJ3gnO1xyXG4gIGNsb3NpbmdEaXYub25jbGljayA9ICgpID0+XHJcbiAgICBjbG9zZU5ld1Rhc2tTaWRlQmFyKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza1dpbmRvdycpLFxyXG4gICAgICBuZXdUYXNrT3JEZXRhaWxzLFxyXG4gICAgICB3aG9zZVRhc2tEZXRhaWxzXHJcbiAgICApO1xyXG4gIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcbiAgbmV3VGFza0hlYWRlci5hcHBlbmRDaGlsZChjbG9zaW5nRGl2KTtcclxuICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza0hlYWRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU5ld1Rhc2tTaWRlQmFyKHRhYiwgbmV3VGFza09yRGV0YWlscywgd2hvc2VUYXNrRGV0YWlscykge1xyXG4gIHRvZ2dsZUJhY2tncm91bmRCbHVyKCk7XHJcbiAgaWYgKG5ld1Rhc2tPckRldGFpbHMgPT09ICduZXdUYXNrJykge1xyXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aG9zZVRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkZWZpbmVBY3RpdmUgfSBmcm9tICcuL2RlZmluZUN1cnJlbnRQcm9qZWN0JztcclxuaW1wb3J0IHsgUHJvamVjdCwgVGFzayB9IGZyb20gJy4vcHJvamVjdENsYXNzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgbG9jYWxUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxyXG4gICAgICBsb2NhbFRhc2tzW2ldLnRpdGxlLFxyXG4gICAgICBsb2NhbFRhc2tzW2ldLmRldGFpbHMsXHJcbiAgICAgIGxvY2FsVGFza3NbaV0uZHVlRGF0ZSxcclxuICAgICAgbG9jYWxUYXNrc1tpXS5wcmlvcml0eSxcclxuICAgICAgbG9jYWxUYXNrc1tpXS5wcm9qZWN0LFxyXG4gICAgICBsb2NhbFRhc2tzW2ldLmNvbXBsZXRlZFxyXG4gICAgKTtcclxuICAgIG5ld1Rhc2suaW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuICBjb25zdCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobG9jYWxQcm9qZWN0c1tpXS5uYW1lKTtcclxuICAgIG5ld1Byb2plY3QuaW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGVmaW5lQWN0aXZlKCk7XHJcbn1cclxuXHJcbi8vQVRVQUw6IFBPUiBBTEdVTSBNT1RJVk8gQSBMSU5IQSA5IE7Dg08gRlVOQ0lPTkEsIEZJWCBUSEFUIEFORCBZT1UgV0lOXHJcbiIsImV4cG9ydCBmdW5jdGlvbiB3cml0ZU5ld1Rhc2tTaWRlYmFyKHdpbmRvdykge1xyXG4gIGNvbnN0IG5ld1Rhc2tTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza1NpZGViYXIuY2xhc3NMaXN0LmFkZCgnbmV3VGFza1NpZGVCYXInKTtcclxuICBjb25zdCBwcm9qZWN0T3JUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcHJvamVjdE9yVGFzay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T3JUYXNrJyk7XHJcbiAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiLWJ0bicsICdhY3RpdmVCdG4nKTtcclxuICB0YXNrQnV0dG9uLmlkID0gJ3Rhc2tCdG4nO1xyXG4gIHRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnVGFzayc7XHJcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFiLWJ0bicsICdpbmFjdGl2ZUJ0bicpO1xyXG4gIHByb2plY3RCdXR0b24uaWQgPSAncHJvamVjdEJ0bic7XHJcbiAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcclxuICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xyXG4gIHByb2plY3RPclRhc2suYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XHJcbiAgbmV3VGFza1NpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdE9yVGFzayk7XHJcbiAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tTaWRlYmFyKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9