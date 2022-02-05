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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  display: flex;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  width: 100%;\r\n  background: linear-gradient(\r\n      to right bottom,\r\n      rgba(3, 105, 92, 0.8),\r\n      rgba(117, 216, 213, 0.9)\r\n    ),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  font-family: Tahoma, sans-serif;\r\n  font-size: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: fit-content;\r\n}\r\n@media (min-width: 490px) {\r\n  main {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\np {\r\n  font-size: 16px;\r\n}\r\nimg {\r\n  color: white;\r\n}\r\n.header-div {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-size: 24px;\r\n  align-items: center;\r\n}\r\n.header-div,\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n}\r\n.header-div > p,\r\n.newTaskHeader > div {\r\n  color: white;\r\n  padding: 0.3em 1em 0.4em;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-size: 20px;\r\n  align-items: center;\r\n  margin: 0.5em 1em;\r\n  color: white;\r\n}\r\n\r\n#github:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.planner {\r\n  display: flex;\r\n}\r\n.tabs {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #eeeeee;\r\n  border-right: 1px solid black;\r\n  justify-content: space-between;\r\n  padding: 0 0.5em;\r\n}\r\n.tab {\r\n  padding-bottom: 0.8em;\r\n}\r\n.tab-btn,\r\n.details > button,\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  color: #501f3a;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 28px;\r\n  padding: 6px 24px;\r\n  text-decoration: none;\r\n}\r\n#generalButton {\r\n  margin-top: 1em;\r\n  border-radius: 5px;\r\n  transform: scale(1.1);\r\n}\r\n#projects,\r\n.newButton {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n#projects > .project {\r\n  text-align: center;\r\n  padding: 6px 24px;\r\n}\r\n\r\n.tab-btn:hover,\r\n.project:hover {\r\n  border-right: 10px solid #d38d9e;\r\n}\r\n.tab-btn:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n.tab-btn + .project {\r\n  margin-top: 16px;\r\n}\r\n\r\n#newButton {\r\n  height: 2.5em;\r\n  width: 2.5em;\r\n  background-color: #c38d9e;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 30px;\r\n  padding: 6px 24px;\r\n  border-radius: 50%;\r\n  margin-bottom: 1em;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n#newButton:hover {\r\n  transform: scale(1.3);\r\n}\r\n#newButton:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n.blur {\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n}\r\n\r\n.display {\r\n  flex: 4;\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#content {\r\n  margin: 0 0 0.5em 0.1em;\r\n}\r\n\r\n#content > div {\r\n  padding: 0.2em;\r\n}\r\n.lowPriority {\r\n  border-left: 10px solid #1d8e1d;\r\n  border-right: 10px solid #1d8e1d;\r\n}\r\n.mediumPriority {\r\n  border-left: 10px solid#FFA500;\r\n  border-right: 10px solid#FFA500;\r\n}\r\n.highPriority {\r\n  border-left: 10px solid #ff0000;\r\n  border-right: 10px solid #ff0000;\r\n}\r\n\r\n.spread {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid black;\r\n  margin: 1px;\r\n  align-items: center;\r\n}\r\n.spread > p {\r\n  color: #501f3a;\r\n  margin-right: 3em;\r\n}\r\n.details {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.details > button {\r\n  font-size: 0.5em;\r\n  margin: 0em 1em;\r\n  background-color: white;\r\n}\r\n.details > button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* aqui vai entrar os styles da aba de detalhes e da div que faz o main inteiro dar blur */\r\n\r\n.newTaskWindow,\r\n.taskDetailsDiv {\r\n  background-color: #fff;\r\n  width: 70%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 15px 5px #222;\r\n}\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n  width: 100%;\r\n  border-radius: 10px 10px 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.newTaskHeader > div {\r\n  padding: 10px;\r\n}\r\n\r\n.closingDiv {\r\n  border-radius: 0px 10px 3px 20px;\r\n  cursor: pointer;\r\n}\r\n.closingDiv:hover {\r\n  transform: scale(1.1);\r\n}\r\n.newTaskContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.newTaskSideBar {\r\n  margin: 0.2em;\r\n}\r\n\r\n.projectOrTask {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.projectOrTask > button {\r\n  margin: 5px;\r\n}\r\n\r\n.active,\r\n.inactive {\r\n  margin: 2px 5px;\r\n}\r\n.inactive {\r\n  background: 0;\r\n  background-color: gray;\r\n  transform: scale(0.9);\r\n}\r\n.active {\r\n  border-right: 10px solid #c38d9e;\r\n}\r\n\r\n.activeBtn {\r\n  background-color: #c38d9e;\r\n  color: #eee;\r\n}\r\n.activeBtn:hover,\r\n.inactiveBtn:hover {\r\n  border-right: 2px solid rgb(118, 118, 118);\r\n}\r\n\r\n.newTaskFormContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 4px solid #c38d9e;\r\n  border-radius: 8px;\r\n  padding: 0.5em;\r\n  margin: 1em;\r\n}\r\n#newTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n#newTaskForm > input,\r\n#newProjectForm {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 20%);\r\n  border-width: 5px;\r\n  border-radius: 12px;\r\n}\r\n#title,\r\n#date,\r\n#details,\r\n#newProjectForm {\r\n  margin: 1em;\r\n  width: 80%;\r\n  height: 2em;\r\n  border: 3px inset #c38d9e;\r\n  /* border-radius: 5px; */\r\n}\r\n.details > p {\r\n  border-radius: 10px;\r\n  padding: 6px 24px;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 25%);\r\n  margin: 0em 1em;\r\n}\r\n.details > button,\r\n.details > p {\r\n  border: 3px solid #3ba395;\r\n  color: #3ba395;\r\n  transform: scale(0.8);\r\n}\r\n#priorityButton {\r\n  height: 6em;\r\n  width: 6em;\r\n  border-radius: 50%;\r\n  border-top: 3px inset #c38d9e;\r\n  border-bottom: 3px inset #c38d9e;\r\n  margin-bottom: 1em;\r\n  font-size: 12px;\r\n}\r\n#details {\r\n  height: 5em;\r\n}\r\n.taskDetailsDiv {\r\n  width: 50%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 30%;\r\n}\r\n.taskDetailsHandler {\r\n  padding: 0.5em;\r\n  text-align: center;\r\n  margin-right: 0.8em;\r\n}\r\n.taskDetailsHandler > p {\r\n  border: 0px solid black;\r\n  border-bottom-width: 1px;\r\n  text-decoration: underline;\r\n  color: #3ba395;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n/* próximo passo mexer com o createbutton (id=submit) deixar quadrado e bem estiloso, bora  */\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  display: flex;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  width: 100%;\r\n  background: linear-gradient(\r\n      to right bottom,\r\n      rgba(3, 105, 92, 0.8),\r\n      rgba(117, 216, 213, 0.9)\r\n    ),\r\n    url('woodbackground.jpg');\r\n  font-family: Tahoma, sans-serif;\r\n  font-size: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: fit-content;\r\n}\r\n@media (min-width: 490px) {\r\n  main {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\np {\r\n  font-size: 16px;\r\n}\r\nimg {\r\n  color: white;\r\n}\r\n.header-div {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  font-size: 24px;\r\n  align-items: center;\r\n}\r\n.header-div,\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n}\r\n.header-div > p,\r\n.newTaskHeader > div {\r\n  color: white;\r\n  padding: 0.3em 1em 0.4em;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-size: 20px;\r\n  align-items: center;\r\n  margin: 0.5em 1em;\r\n  color: white;\r\n}\r\n\r\n#github:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.planner {\r\n  display: flex;\r\n}\r\n.tabs {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #eeeeee;\r\n  border-right: 1px solid black;\r\n  justify-content: space-between;\r\n  padding: 0 0.5em;\r\n}\r\n.tab {\r\n  padding-bottom: 0.8em;\r\n}\r\n.tab-btn,\r\n.details > button,\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  color: #501f3a;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 28px;\r\n  padding: 6px 24px;\r\n  text-decoration: none;\r\n}\r\n#generalButton {\r\n  margin-top: 1em;\r\n  border-radius: 5px;\r\n  transform: scale(1.1);\r\n}\r\n#projects,\r\n.newButton {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n#projects > .project {\r\n  text-align: center;\r\n  padding: 6px 24px;\r\n}\r\n\r\n.tab-btn:hover,\r\n.project:hover {\r\n  border-right: 10px solid #d38d9e;\r\n}\r\n.tab-btn:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n.tab-btn + .project {\r\n  margin-top: 16px;\r\n}\r\n\r\n#newButton {\r\n  height: 2.5em;\r\n  width: 2.5em;\r\n  background-color: #c38d9e;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 30px;\r\n  padding: 6px 24px;\r\n  border-radius: 50%;\r\n  margin-bottom: 1em;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n#newButton:hover {\r\n  transform: scale(1.3);\r\n}\r\n#newButton:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n.blur {\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n}\r\n\r\n.display {\r\n  flex: 4;\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#content {\r\n  margin: 0 0 0.5em 0.1em;\r\n}\r\n\r\n#content > div {\r\n  padding: 0.2em;\r\n}\r\n.lowPriority {\r\n  border-left: 10px solid #1d8e1d;\r\n  border-right: 10px solid #1d8e1d;\r\n}\r\n.mediumPriority {\r\n  border-left: 10px solid#FFA500;\r\n  border-right: 10px solid#FFA500;\r\n}\r\n.highPriority {\r\n  border-left: 10px solid #ff0000;\r\n  border-right: 10px solid #ff0000;\r\n}\r\n\r\n.spread {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid black;\r\n  margin: 1px;\r\n  align-items: center;\r\n}\r\n.spread > p {\r\n  color: #501f3a;\r\n  margin-right: 3em;\r\n}\r\n.details {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.details > button {\r\n  font-size: 0.5em;\r\n  margin: 0em 1em;\r\n  background-color: white;\r\n}\r\n.details > button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* aqui vai entrar os styles da aba de detalhes e da div que faz o main inteiro dar blur */\r\n\r\n.newTaskWindow,\r\n.taskDetailsDiv {\r\n  background-color: #fff;\r\n  width: 70%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 15px 5px #222;\r\n}\r\n.newTaskHeader {\r\n  background-color: #c38d9e;\r\n  width: 100%;\r\n  border-radius: 10px 10px 0 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.newTaskHeader > div {\r\n  padding: 10px;\r\n}\r\n\r\n.closingDiv {\r\n  border-radius: 0px 10px 3px 20px;\r\n  cursor: pointer;\r\n}\r\n.closingDiv:hover {\r\n  transform: scale(1.1);\r\n}\r\n.newTaskContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.newTaskSideBar {\r\n  margin: 0.2em;\r\n}\r\n\r\n.projectOrTask {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.projectOrTask > button {\r\n  margin: 5px;\r\n}\r\n\r\n.active,\r\n.inactive {\r\n  margin: 2px 5px;\r\n}\r\n.inactive {\r\n  background: 0;\r\n  background-color: gray;\r\n  transform: scale(0.9);\r\n}\r\n.active {\r\n  border-right: 10px solid #c38d9e;\r\n}\r\n\r\n.activeBtn {\r\n  background-color: #c38d9e;\r\n  color: #eee;\r\n}\r\n.activeBtn:hover,\r\n.inactiveBtn:hover {\r\n  border-right: 2px solid rgb(118, 118, 118);\r\n}\r\n\r\n.newTaskFormContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 4px solid #c38d9e;\r\n  border-radius: 8px;\r\n  padding: 0.5em;\r\n  margin: 1em;\r\n}\r\n#newTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n#newTaskForm > input,\r\n#newProjectForm {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 20%);\r\n  border-width: 5px;\r\n  border-radius: 12px;\r\n}\r\n#title,\r\n#date,\r\n#details,\r\n#newProjectForm {\r\n  margin: 1em;\r\n  width: 80%;\r\n  height: 2em;\r\n  border: 3px inset #c38d9e;\r\n  /* border-radius: 5px; */\r\n}\r\n.details > p {\r\n  border-radius: 10px;\r\n  padding: 6px 24px;\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 25%);\r\n  margin: 0em 1em;\r\n}\r\n.details > button,\r\n.details > p {\r\n  border: 3px solid #3ba395;\r\n  color: #3ba395;\r\n  transform: scale(0.8);\r\n}\r\n#priorityButton {\r\n  height: 6em;\r\n  width: 6em;\r\n  border-radius: 50%;\r\n  border-top: 3px inset #c38d9e;\r\n  border-bottom: 3px inset #c38d9e;\r\n  margin-bottom: 1em;\r\n  font-size: 12px;\r\n}\r\n#details {\r\n  height: 5em;\r\n}\r\n.taskDetailsDiv {\r\n  width: 50%;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 30%;\r\n}\r\n.taskDetailsHandler {\r\n  padding: 0.5em;\r\n  text-align: center;\r\n  margin-right: 0.8em;\r\n}\r\n.taskDetailsHandler > p {\r\n  border: 0px solid black;\r\n  border-bottom-width: 1px;\r\n  text-decoration: underline;\r\n  color: #3ba395;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#submit {\r\n  box-shadow: 0.2rem 0.5rem 1rem rgb(0 0 0 / 40%);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n/* próximo passo mexer com o createbutton (id=submit) deixar quadrado e bem estiloso, bora  */\r\n"],"sourceRoot":""}]);
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
  newProjectForm.minLength = '1';
  newProjectForm.maxLength = '40';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxRQUFRLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVB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Q0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVET01Gb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvcm1TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFza09yUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWZpbmVDdXJyZW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5QWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheU5ld1Rhc2tXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdENsYXNzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZ2dsZUJhY2tncm91bmRCbHVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlSGVhZGVyRm9yTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVOZXdUYXNrU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJ3b29kYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gcmlnaHQgYm90dG9tLFxcclxcbiAgICAgIHJnYmEoMywgMTA1LCA5MiwgMC44KSxcXHJcXG4gICAgICByZ2JhKDExNywgMjE2LCAyMTMsIDAuOSlcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ5MHB4KSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaGVhZGVyLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXItZGl2LFxcclxcbi5uZXdUYXNrSGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxyXFxufVxcclxcbi5oZWFkZXItZGl2ID4gcCxcXHJcXG4ubmV3VGFza0hlYWRlciA+IGRpdiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAwLjNlbSAxZW0gMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC41ZW0gMWVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2l0aHViOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnRhYnMge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAwLjVlbTtcXHJcXG59XFxyXFxuLnRhYiB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XFxyXFxufVxcclxcbi50YWItYnRuLFxcclxcbi5kZXRhaWxzID4gYnV0dG9uLFxcclxcbiNzdWJtaXQge1xcclxcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDQwJSk7XFxyXFxuICBjb2xvcjogIzUwMWYzYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuI2dlbmVyYWxCdXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4jcHJvamVjdHMsXFxyXFxuLm5ld0J1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNwcm9qZWN0cyA+IC5wcm9qZWN0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWJ0bjpob3ZlcixcXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2QzOGQ5ZTtcXHJcXG59XFxyXFxuLnRhYi1idG46YWN0aXZlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMXB4O1xcclxcbn1cXHJcXG4udGFiLWJ0biArIC5wcm9qZWN0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNuZXdCdXR0b24ge1xcclxcbiAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gIHdpZHRoOiAyLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDQwJSk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3QnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuI25ld0J1dHRvbjphY3RpdmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gIGZpbHRlcjogYmx1cig4cHgpO1xcclxcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZmxleDogNDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIG1hcmdpbjogMCAwIDAuNWVtIDAuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCA+IGRpdiB7XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG59XFxyXFxuLmxvd1ByaW9yaXR5IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMxZDhlMWQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzFkOGUxZDtcXHJcXG59XFxyXFxuLm1lZGl1bVByaW9yaXR5IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkI0ZGQTUwMDtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCNGRkE1MDA7XFxyXFxufVxcclxcbi5oaWdoUHJpb3JpdHkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmMDAwMDtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZmYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ByZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW46IDFweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcHJlYWQgPiBwIHtcXHJcXG4gIGNvbG9yOiAjNTAxZjNhO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzZW07XFxyXFxufVxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyA+IGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDAuNWVtO1xcclxcbiAgbWFyZ2luOiAwZW0gMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5kZXRhaWxzID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYXF1aSB2YWkgZW50cmFyIG9zIHN0eWxlcyBkYSBhYmEgZGUgZGV0YWxoZXMgZSBkYSBkaXYgcXVlIGZheiBvIG1haW4gaW50ZWlybyBkYXIgYmx1ciAqL1xcclxcblxcclxcbi5uZXdUYXNrV2luZG93LFxcclxcbi50YXNrRGV0YWlsc0RpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDVweCAjMjIyO1xcclxcbn1cXHJcXG4ubmV3VGFza0hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm5ld1Rhc2tIZWFkZXIgPiBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NpbmdEaXYge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggM3B4IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jbG9zaW5nRGl2OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuLm5ld1Rhc2tDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5ld1Rhc2tTaWRlQmFyIHtcXHJcXG4gIG1hcmdpbjogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0T3JUYXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucHJvamVjdE9yVGFzayA+IGJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSxcXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgbWFyZ2luOiAycHggNXB4O1xcclxcbn1cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNjMzhkOWU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcXHJcXG4gIGNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG4uYWN0aXZlQnRuOmhvdmVyLFxcclxcbi5pbmFjdGl2ZUJ0bjpob3ZlciB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCk7XFxyXFxufVxcclxcblxcclxcbi5uZXdUYXNrRm9ybUNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2MzOGQ5ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcbiNuZXdUYXNrRm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI25ld1Rhc2tGb3JtID4gaW5wdXQsXFxyXFxuI25ld1Byb2plY3RGb3JtIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAyMCUpO1xcclxcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG4jdGl0bGUsXFxyXFxuI2RhdGUsXFxyXFxuI2RldGFpbHMsXFxyXFxuI25ld1Byb2plY3RGb3JtIHtcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMmVtO1xcclxcbiAgYm9yZGVyOiAzcHggaW5zZXQgI2MzOGQ5ZTtcXHJcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cXHJcXG59XFxyXFxuLmRldGFpbHMgPiBwIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAyNSUpO1xcclxcbiAgbWFyZ2luOiAwZW0gMWVtO1xcclxcbn1cXHJcXG4uZGV0YWlscyA+IGJ1dHRvbixcXHJcXG4uZGV0YWlscyA+IHAge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgIzNiYTM5NTtcXHJcXG4gIGNvbG9yOiAjM2JhMzk1O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG4jcHJpb3JpdHlCdXR0b24ge1xcclxcbiAgaGVpZ2h0OiA2ZW07XFxyXFxuICB3aWR0aDogNmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXRvcDogM3B4IGluc2V0ICNjMzhkOWU7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggaW5zZXQgI2MzOGQ5ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuI2RldGFpbHMge1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxufVxcclxcbi50YXNrRGV0YWlsc0RpdiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxufVxcclxcbi50YXNrRGV0YWlsc0hhbmRsZXIge1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xcclxcbn1cXHJcXG4udGFza0RldGFpbHNIYW5kbGVyID4gcCB7XFxyXFxuICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICMzYmEzOTU7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyA0MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHLDs3hpbW8gcGFzc28gbWV4ZXIgY29tIG8gY3JlYXRlYnV0dG9uIChpZD1zdWJtaXQpIGRlaXhhciBxdWFkcmFkbyBlIGJlbSBlc3RpbG9zbywgYm9yYSAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJw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QUNmLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLDZGQUE2RlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgdG8gcmlnaHQgYm90dG9tLFxcclxcbiAgICAgIHJnYmEoMywgMTA1LCA5MiwgMC44KSxcXHJcXG4gICAgICByZ2JhKDExNywgMjE2LCAyMTMsIDAuOSlcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKCd3b29kYmFja2dyb3VuZC5qcGcnKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ5MHB4KSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaGVhZGVyLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXItZGl2LFxcclxcbi5uZXdUYXNrSGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxyXFxufVxcclxcbi5oZWFkZXItZGl2ID4gcCxcXHJcXG4ubmV3VGFza0hlYWRlciA+IGRpdiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAwLjNlbSAxZW0gMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC41ZW0gMWVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2l0aHViOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnRhYnMge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAwLjVlbTtcXHJcXG59XFxyXFxuLnRhYiB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XFxyXFxufVxcclxcbi50YWItYnRuLFxcclxcbi5kZXRhaWxzID4gYnV0dG9uLFxcclxcbiNzdWJtaXQge1xcclxcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDQwJSk7XFxyXFxuICBjb2xvcjogIzUwMWYzYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuI2dlbmVyYWxCdXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4jcHJvamVjdHMsXFxyXFxuLm5ld0J1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNwcm9qZWN0cyA+IC5wcm9qZWN0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWJ0bjpob3ZlcixcXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2QzOGQ5ZTtcXHJcXG59XFxyXFxuLnRhYi1idG46YWN0aXZlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMXB4O1xcclxcbn1cXHJcXG4udGFiLWJ0biArIC5wcm9qZWN0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNuZXdCdXR0b24ge1xcclxcbiAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gIHdpZHRoOiAyLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAyNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDQwJSk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3QnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuI25ld0J1dHRvbjphY3RpdmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gIGZpbHRlcjogYmx1cig4cHgpO1xcclxcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZmxleDogNDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIG1hcmdpbjogMCAwIDAuNWVtIDAuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCA+IGRpdiB7XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG59XFxyXFxuLmxvd1ByaW9yaXR5IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMxZDhlMWQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzFkOGUxZDtcXHJcXG59XFxyXFxuLm1lZGl1bVByaW9yaXR5IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkI0ZGQTUwMDtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCNGRkE1MDA7XFxyXFxufVxcclxcbi5oaWdoUHJpb3JpdHkge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmMDAwMDtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZmYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ByZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW46IDFweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcHJlYWQgPiBwIHtcXHJcXG4gIGNvbG9yOiAjNTAxZjNhO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzZW07XFxyXFxufVxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyA+IGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDAuNWVtO1xcclxcbiAgbWFyZ2luOiAwZW0gMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5kZXRhaWxzID4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYXF1aSB2YWkgZW50cmFyIG9zIHN0eWxlcyBkYSBhYmEgZGUgZGV0YWxoZXMgZSBkYSBkaXYgcXVlIGZheiBvIG1haW4gaW50ZWlybyBkYXIgYmx1ciAqL1xcclxcblxcclxcbi5uZXdUYXNrV2luZG93LFxcclxcbi50YXNrRGV0YWlsc0RpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDVweCAjMjIyO1xcclxcbn1cXHJcXG4ubmV3VGFza0hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm5ld1Rhc2tIZWFkZXIgPiBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NpbmdEaXYge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggM3B4IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jbG9zaW5nRGl2OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuLm5ld1Rhc2tDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5ld1Rhc2tTaWRlQmFyIHtcXHJcXG4gIG1hcmdpbjogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0T3JUYXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucHJvamVjdE9yVGFzayA+IGJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSxcXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgbWFyZ2luOiAycHggNXB4O1xcclxcbn1cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNjMzhkOWU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcXHJcXG4gIGNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG4uYWN0aXZlQnRuOmhvdmVyLFxcclxcbi5pbmFjdGl2ZUJ0bjpob3ZlciB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCk7XFxyXFxufVxcclxcblxcclxcbi5uZXdUYXNrRm9ybUNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2MzOGQ5ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcbiNuZXdUYXNrRm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI25ld1Rhc2tGb3JtID4gaW5wdXQsXFxyXFxuI25ld1Byb2plY3RGb3JtIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAyMCUpO1xcclxcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG4jdGl0bGUsXFxyXFxuI2RhdGUsXFxyXFxuI2RldGFpbHMsXFxyXFxuI25ld1Byb2plY3RGb3JtIHtcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMmVtO1xcclxcbiAgYm9yZGVyOiAzcHggaW5zZXQgI2MzOGQ5ZTtcXHJcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cXHJcXG59XFxyXFxuLmRldGFpbHMgPiBwIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMjRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAyNSUpO1xcclxcbiAgbWFyZ2luOiAwZW0gMWVtO1xcclxcbn1cXHJcXG4uZGV0YWlscyA+IGJ1dHRvbixcXHJcXG4uZGV0YWlscyA+IHAge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgIzNiYTM5NTtcXHJcXG4gIGNvbG9yOiAjM2JhMzk1O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG4jcHJpb3JpdHlCdXR0b24ge1xcclxcbiAgaGVpZ2h0OiA2ZW07XFxyXFxuICB3aWR0aDogNmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXRvcDogM3B4IGluc2V0ICNjMzhkOWU7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggaW5zZXQgI2MzOGQ5ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuI2RldGFpbHMge1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxufVxcclxcbi50YXNrRGV0YWlsc0RpdiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxufVxcclxcbi50YXNrRGV0YWlsc0hhbmRsZXIge1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xcclxcbn1cXHJcXG4udGFza0RldGFpbHNIYW5kbGVyID4gcCB7XFxyXFxuICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6ICMzYmEzOTU7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyA0MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHLDs3hpbW8gcGFzc28gbWV4ZXIgY29tIG8gY3JlYXRlYnV0dG9uIChpZD1zdWJtaXQpIGRlaXhhciBxdWFkcmFkbyBlIGJlbSBlc3RpbG9zbywgYm9yYSAgKi9cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRm9ybShmb3JtKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlLmlkID0gJ3RpdGxlJztcclxuICB0aXRsZS50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcclxuICB0aXRsZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgdGl0bGUubWluTGVuZ3RoID0gJzEnO1xyXG4gIHRpdGxlLm1heExlbmd0aCA9ICc0MCc7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZS5pZCA9ICdkYXRlJztcclxuICBkYXRlLnR5cGUgPSAnZGF0ZSc7XHJcbiAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkZXRhaWxzLmlkID0gJ2RldGFpbHMnO1xyXG4gIGRldGFpbHMudHlwZSA9ICd0ZXh0JztcclxuICBkZXRhaWxzLnBsYWNlaG9sZGVyID0gJ0RldGFpbCB5b3VyIHRhc2suJztcclxuICBkZXRhaWxzLm1heExlbmd0aCA9ICcxNDAnO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBwcmlvcml0eS50eXBlID0gJ2J1dHRvbic7XHJcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcclxuICBwcmlvcml0eS5pZCA9ICdwcmlvcml0eUJ1dHRvbic7XHJcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b25zJywgJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgcHJpb3JpdHkub25jbGljayA9ICgpID0+IGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkobm9kZSkge1xyXG4gIGlmIChub2RlLnRleHRDb250ZW50ID09ICdMb3cnKSB7XHJcbiAgICBub2RlLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgfSBlbHNlIGlmIChub2RlLnRleHRDb250ZW50ID09ICdNZWRpdW0nKSB7XHJcbiAgICBub2RlLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcclxuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtUHJpb3JpdHknKTtcclxuICB9IGVsc2UgaWYgKG5vZGUudGV4dENvbnRlbnQgPT0gJ0hpZ2gnKSB7XHJcbiAgICBub2RlLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hQcmlvcml0eScpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrT3JQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGVUYXNrT3JQcm9qZWN0JztcclxuaW1wb3J0IHsgdGFza09yUHJvamVjdCB9IGZyb20gJy4vZGlzcGxheU5ld1Rhc2tXaW5kb3cnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1TdWJtaXQod2luZG93KSB7XHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSc7XHJcbiAgc3VibWl0QnV0dG9uLmlkID0gJ3N1Ym1pdCc7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9ucycpO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcbiAgICBjcmVhdGVUYXNrT3JQcm9qZWN0KHRhc2tPclByb2plY3QpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnO1xyXG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLi9kZWZpbmVDdXJyZW50UHJvamVjdCc7XHJcblxyXG5pbXBvcnQgeyBjbG9zZU5ld1Rhc2tTaWRlQmFyIH0gZnJvbSAnLi93cml0ZUhlYWRlckZvck5ld1Rhc2snO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tPclByb2plY3QodGFza09yUHJvamVjdCkge1xyXG4gIGlmICh0YXNrT3JQcm9qZWN0ID09ICdUYXNrJykge1xyXG4gICAgY29uc3QgZGVmaW5lZERhdGUgPSBtb21lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSkuZm9ybWF0KFxyXG4gICAgICAnREQvTU0vWVlZWSdcclxuICAgICk7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpLnZhbHVlLFxyXG4gICAgICBkZWZpbmVkRGF0ZSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5QnV0dG9uJykudGV4dENvbnRlbnQsXHJcbiAgICAgIGFjdGl2ZVByb2plY3QsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgbmV3VGFzay5pbml0aWFsaXplKCk7XHJcbiAgICBjbG9zZU5ld1Rhc2tTaWRlQmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrV2luZG93JyksICduZXdUYXNrJyk7XHJcbiAgfVxyXG4gIGlmICh0YXNrT3JQcm9qZWN0ID09ICdQcm9qZWN0Jykge1xyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZSlcclxuICAgICkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZSA9XHJcbiAgICAgICAgJ0Vycm9yLCBkdXBsaWNhdGUgcHJvamVjdCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykudmFsdWUgPT1cclxuICAgICAgICAnRXJyb3IsIGR1cGxpY2F0ZSBwcm9qZWN0J1xyXG4gICAgICApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykudmFsdWVcclxuICAgICAgKTtcclxuICAgICAgbmV3UHJvamVjdC5pbml0aWFsaXplKCk7XHJcbiAgICAgIGNsb3NlTmV3VGFza1NpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tXaW5kb3cnKSwgJ25ld1Rhc2snKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuaWQ7XHJcbmV4cG9ydCB7IGFjdGl2ZVByb2plY3QgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVBY3RpdmUoKSB7XHJcbiAgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5pZDtcclxuICByZXR1cm4gYWN0aXZlUHJvamVjdDtcclxufVxyXG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKVxyXG4gICAgLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBnZW5lcmFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApKSB7XHJcbiAgICAgIHRhc2tzW2ldLnJlbW92ZVRhc2soXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICB0YXNrc1tpXS5kZXRhaWxzRXhpc3QgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgd3JpdGVIZWFkZXIgfSBmcm9tICcuL3dyaXRlSGVhZGVyRm9yTmV3VGFzayc7XHJcbmltcG9ydCB7IHdyaXRlTmV3VGFza1NpZGViYXIgfSBmcm9tICcuL3dyaXRlTmV3VGFza1NpZGViYXInO1xyXG5pbXBvcnQgeyBuZXdGb3JtIH0gZnJvbSAnLi9uZXdUYXNrRm9ybSc7XHJcbmltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSAnLi90b2dnbGVCYWNrZ3JvdW5kQmx1cic7XHJcbmNvbnN0IG5ld1Rhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubGV0IG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSBmYWxzZTtcclxubGV0IHRhc2tPclByb2plY3QgPSAnVGFzayc7XHJcbmV4cG9ydCB7IHRhc2tPclByb2plY3QgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TmV3VGFza1dpbmRvdyh3aW5kb3cpIHtcclxuICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xyXG4gIGlmICghbmV3VGFza1dpbmRvd0V4aXN0cykge1xyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCduZXdUYXNrV2luZG93Jyk7XHJcbiAgICBuZXdUYXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCduZXdUYXNrQ29udGVudCcpO1xyXG4gICAgd3JpdGVIZWFkZXIobmV3VGFza1dpbmRvdywgJ25ld1Rhc2snKTtcclxuICAgIHdyaXRlTmV3VGFza1NpZGViYXIobmV3VGFza0NvbnRlbnQpO1xyXG4gICAgbmV3Rm9ybShuZXdUYXNrQ29udGVudCk7XHJcbiAgICBuZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250ZW50KTtcclxuICAgIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrV2luZG93KTtcclxuICAgIG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSB0cnVlO1xyXG4gICAgYWRkQnV0dG9uTGlzdGVuZXJzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5Rm9ybSgnVGFzaycpKTtcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlGb3JtKCdQcm9qZWN0JykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybShpc1Rhc2tPclByb2plY3QpIHtcclxuICBpZiAoaXNUYXNrT3JQcm9qZWN0ID09ICdUYXNrJykge1xyXG4gICAgdGFza09yUHJvamVjdCA9ICdUYXNrJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCdG4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFza09yUHJvamVjdCA9ICdQcm9qZWN0JztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCdG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCdG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCdG4nKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGlzcGxheU5ld1Rhc2tXaW5kb3cgfSBmcm9tICcuL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzJztcclxuaW1wb3J0IHsgd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50IH0gZnJvbSAnLi93cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tICcuL2Rpc3BsYXlBbGxUYXNrcy5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCB0YXNrcyA9IFtdO1xyXG5leHBvcnQgeyB0YXNrcyB9O1xyXG5leHBvcnQgeyBwcm9qZWN0cyB9O1xyXG5cclxuY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0J1dHRvbicpO1xyXG5uZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG4gIGRpc3BsYXlOZXdUYXNrV2luZG93KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykpXHJcbik7XHJcblxyXG5jb25zdCBnZW5lcmFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYWxCdXR0b24nKTtcclxuZ2VuZXJhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBbGxUYXNrcyk7XHJcblxyXG53cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQoKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRE9NRm9ybSB9IGZyb20gJy4vY3JlYXRlRE9NRm9ybSc7XHJcbmltcG9ydCB7IGNyZWF0ZUZvcm1TdWJtaXQgfSBmcm9tICcuL2NyZWF0ZUZvcm1TdWJtaXQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0Zvcm0od2luZG93LCB0YXNrT3JQcm9qZWN0ID0gJ1Rhc2snKSB7XHJcbiAgY29uc3QgbmV3VGFza1dpbmRvd0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrV2luZG93Q29udGVudC5jbGFzc0xpc3QuYWRkKCduZXdUYXNrRm9ybUNvbnRlbnQnKTtcclxuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBuZXdUYXNrRm9ybS5pZCA9ICduZXdUYXNrRm9ybSc7XHJcbiAgY3JlYXRlRE9NRm9ybShuZXdUYXNrRm9ybSk7XHJcbiAgbmV3VGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBuZXdQcm9qZWN0Rm9ybS5pZCA9ICduZXdQcm9qZWN0Rm9ybSc7XHJcbiAgbmV3UHJvamVjdEZvcm0udHlwZSA9ICd0ZXh0JztcclxuICBuZXdQcm9qZWN0Rm9ybS5wbGFjZWhvbGRlciA9ICdOYW1lIHlvdXIgcHJvamVjdCc7XHJcbiAgbmV3UHJvamVjdEZvcm0ubWluTGVuZ3RoID0gJzEnO1xyXG4gIG5ld1Byb2plY3RGb3JtLm1heExlbmd0aCA9ICc0MCc7XHJcbiAgbmV3VGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG5cclxuICBjcmVhdGVGb3JtU3VibWl0KG5ld1Rhc2tXaW5kb3dDb250ZW50KTtcclxuICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1dpbmRvd0NvbnRlbnQpO1xyXG59XHJcbiIsImltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IGRlZmluZUFjdGl2ZSB9IGZyb20gJy4vZGVmaW5lQ3VycmVudFByb2plY3QuanMnO1xyXG5pbXBvcnQgeyB3cml0ZUhlYWRlciB9IGZyb20gJy4vd3JpdGVIZWFkZXJGb3JOZXdUYXNrLmpzJztcclxuaW1wb3J0IHsgdG9nZ2xlQmFja2dyb3VuZEJsdXIgfSBmcm9tICcuL3RvZ2dsZUJhY2tncm91bmRCbHVyLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcihub21lRG9Qcm9qZXRvKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBub21lRG9Qcm9qZXRvO1xyXG4gICAgcHJvamVjdHMucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG4gIHR1cm5BY3RpdmUoYnV0dG9uKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpXHJcbiAgICAgIC5mb3JFYWNoKChhY3RpdmUpID0+IGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBzb3J0UHJvamVjdCgpIHtcclxuICAgIHRoaXMudHVybkFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb2plY3ROYW1lKSk7XHJcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZGVmaW5lQWN0aXZlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApKSB7XHJcbiAgICAgICAgdGFza3NbaV0ucmVtb3ZlVGFzayhcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCksXHJcbiAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRhc2tzW2ldLnByb2plY3QgPT0gYWN0aXZlUHJvamVjdCkge1xyXG4gICAgICAgIHRhc2tzW2ldLndyaXRlVG9ET00oKTtcclxuICAgICAgICB0YXNrc1tpXS5kZXRhaWxzRXhpc3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB3cml0ZVRvRE9NKCkge1xyXG4gICAgY29uc3QgdGhpc1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXNQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYi1idG4nLCAncHJvamVjdCcpO1xyXG4gICAgdGhpc1Byb2plY3RCdXR0b24uaWQgPSB0aGlzLnByb2plY3ROYW1lO1xyXG4gICAgdGhpc1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3ROYW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJykuYXBwZW5kQ2hpbGQodGhpc1Byb2plY3RCdXR0b24pO1xyXG4gICAgdGhpcy50dXJuQWN0aXZlKHRoaXNQcm9qZWN0QnV0dG9uKTtcclxuICAgIHRoaXNQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zb3J0UHJvamVjdCgpKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLndyaXRlVG9ET00oKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9qZWN0TmFtZSkucmVtb3ZlKCk7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZih0aGlzKSwgMSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXRhaWxzLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIHByaW9yaXR5ID0gJ0xvdycsXHJcbiAgICBwcm9qZWN0ID0gJycsXHJcbiAgICBjb21wbGV0ZWQgPSBmYWxzZVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0YXNrcy5wdXNoKHRoaXMpO1xyXG4gICAgdGhpcy5kZXRhaWxzRXhpc3QgPSBmYWxzZTtcclxuICB9XHJcbiAgc2V0IGRlZmluZVByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBhZGRQcmlvcml0eVN0eWxlKGl0ZW0pIHtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gdGhpcy5wcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5ICsgJ1ByaW9yaXR5Jyk7XHJcbiAgfVxyXG4gIHJlbW92ZVRhc2sod2hhdFRvRGVsZXRlLCBzcGxpY2VPck5vdCA9IHRydWUpIHtcclxuICAgIGlmIChzcGxpY2VPck5vdCkge1xyXG4gICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0aGlzKSwgMSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9XHJcbiAgICB3aGF0VG9EZWxldGUucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVRvRE9NKCkge1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdzcHJlYWQnKTtcclxuICAgIHRhc2suaWQgPSBgJHt0aGlzLnRpdGxlfS50YXNrYDtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb25zdCBldmVyeXRoaW5nRWxzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZXZlcnl0aGluZ0Vsc2UuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0aGlzLmR1ZURhdGU7XHJcbiAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSAnRGV0YWlscyc7XHJcbiAgICBkZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVEZXRhaWxzKHRpdGxlKSk7XHJcbiAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuICAgIHRoaXMuYWRkUHJpb3JpdHlTdHlsZSh0YXNrKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbW92ZVRhc2sodGFzaykpO1xyXG4gICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoZXZlcnl0aGluZ0Vsc2UpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICB9XHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMud3JpdGVUb0RPTSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURldGFpbHMoKSB7XHJcbiAgICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBjb25zdCB0YXNrRGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWYgKCF0aGlzLmRldGFpbHNFeGlzdCkge1xyXG4gICAgICB0YXNrRGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGV0YWlsc0RpdicpO1xyXG4gICAgICB3cml0ZUhlYWRlcih0YXNrRGV0YWlsc0RpdiwgJ0RldGFpbHNQb3B1cCcsIHRhc2tEZXRhaWxzRGl2KTtcclxuICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndGFza0RldGFpbHNIYW5kbGVyJyk7XHJcbiAgICAgIHRhc2tEZXRhaWxzRGl2LmlkID0gYCR7dGhpcy50aXRsZX0uZGV0YWlsc2A7XHJcbiAgICAgIGNvbnN0IHRhc2tEZXRhaWxzUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgdGhpcy5wcm9qZWN0ID09ICdnZW5lcmFsQnV0dG9uJ1xyXG4gICAgICAgID8gKHRhc2tEZXRhaWxzUHJvamVjdC50ZXh0Q29udGVudCA9IGBObyBwcm9qZWN0IGFzc2lnbm1lbnRgKVxyXG4gICAgICAgIDogKHRhc2tEZXRhaWxzUHJvamVjdC50ZXh0Q29udGVudCA9IGBQcm9qZWN0IG5hbWU6ICR7dGhpcy5wcm9qZWN0fWApO1xyXG4gICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc1Byb2plY3QpO1xyXG4gICAgICBjb25zdCB0YXNrRGV0YWlsc0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHRhc2tEZXRhaWxzRGV0YWlscy50ZXh0Q29udGVudCA9IGBEZXRhaWxzOiAke3RoaXMuZGV0YWlsc31gO1xyXG4gICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc0RldGFpbHMpO1xyXG4gICAgICBjb25zdCB0YXNrRGV0YWlsc1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YDtcclxuICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNQcmlvcml0eSk7XHJcbiAgICAgIHRhc2tEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcclxuICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc0Rpdik7XHJcbiAgICAgIHRoaXMuZGV0YWlsc0V4aXN0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGV0YWlsc0RpdicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlQmFja2dyb3VuZEJsdXIoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1kaXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdibHVyJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5uZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdibHVyJyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9nZ2xlQmFja2dyb3VuZEJsdXIgfSBmcm9tICcuL3RvZ2dsZUJhY2tncm91bmRCbHVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUhlYWRlcih3aW5kb3csIG5ld1Rhc2tPckRldGFpbHMsIHdob3NlVGFza0RldGFpbHMpIHtcclxuICBjb25zdCBuZXdUYXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKCduZXdUYXNrSGVhZGVyJyk7XHJcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlmIChuZXdUYXNrT3JEZXRhaWxzID09ICduZXdUYXNrJykge1xyXG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdDcmVhdGUgbmV3Li4uJztcclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdTaG93aW5nIGRldGFpbHMnO1xyXG4gIH1cclxuICBjb25zdCBjbG9zaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2xvc2luZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nRGl2Jyk7XHJcbiAgY2xvc2luZ0Rpdi50ZXh0Q29udGVudCA9ICd4JztcclxuICBjbG9zaW5nRGl2Lm9uY2xpY2sgPSAoKSA9PlxyXG4gICAgY2xvc2VOZXdUYXNrU2lkZUJhcihcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tXaW5kb3cnKSxcclxuICAgICAgbmV3VGFza09yRGV0YWlscyxcclxuICAgICAgd2hvc2VUYXNrRGV0YWlsc1xyXG4gICAgKTtcclxuICBuZXdUYXNrSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xyXG4gIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2luZ0Rpdik7XHJcbiAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tIZWFkZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VOZXdUYXNrU2lkZUJhcih0YWIsIG5ld1Rhc2tPckRldGFpbHMsIHdob3NlVGFza0RldGFpbHMpIHtcclxuICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xyXG4gIGlmIChuZXdUYXNrT3JEZXRhaWxzID09PSAnbmV3VGFzaycpIHtcclxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2hvc2VUYXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSAnLi9kZWZpbmVDdXJyZW50UHJvamVjdCc7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tICcuL3Byb2plY3RDbGFzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50KCkge1xyXG4gIGNvbnN0IGxvY2FsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcclxuICAgICAgbG9jYWxUYXNrc1tpXS50aXRsZSxcclxuICAgICAgbG9jYWxUYXNrc1tpXS5kZXRhaWxzLFxyXG4gICAgICBsb2NhbFRhc2tzW2ldLmR1ZURhdGUsXHJcbiAgICAgIGxvY2FsVGFza3NbaV0ucHJpb3JpdHksXHJcbiAgICAgIGxvY2FsVGFza3NbaV0ucHJvamVjdCxcclxuICAgICAgbG9jYWxUYXNrc1tpXS5jb21wbGV0ZWRcclxuICAgICk7XHJcbiAgICBuZXdUYXNrLmluaXRpYWxpemUoKTtcclxuICB9XHJcbiAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGxvY2FsUHJvamVjdHNbaV0ubmFtZSk7XHJcbiAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIGRlZmluZUFjdGl2ZSgpO1xyXG59XHJcblxyXG4vL0FUVUFMOiBQT1IgQUxHVU0gTU9USVZPIEEgTElOSEEgOSBOw4NPIEZVTkNJT05BLCBGSVggVEhBVCBBTkQgWU9VIFdJTlxyXG4iLCJleHBvcnQgZnVuY3Rpb24gd3JpdGVOZXdUYXNrU2lkZWJhcih3aW5kb3cpIHtcclxuICBjb25zdCBuZXdUYXNrU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tTaWRlQmFyJyk7XHJcbiAgY29uc3QgcHJvamVjdE9yVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByb2plY3RPclRhc2suY2xhc3NMaXN0LmFkZCgncHJvamVjdE9yVGFzaycpO1xyXG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYi1idG4nLCAnYWN0aXZlQnRuJyk7XHJcbiAgdGFza0J1dHRvbi5pZCA9ICd0YXNrQnRuJztcclxuICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1Rhc2snO1xyXG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYi1idG4nLCAnaW5hY3RpdmVCdG4nKTtcclxuICBwcm9qZWN0QnV0dG9uLmlkID0gJ3Byb2plY3RCdG4nO1xyXG4gIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XHJcbiAgcHJvamVjdE9yVGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcclxuICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xyXG4gIG5ld1Rhc2tTaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RPclRhc2spO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrU2lkZWJhcik7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==