/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  form.appendChild(title);
  const date = document.createElement('input');
  date.id = 'date';
  date.type = 'date';
  date.required = true;
  form.appendChild(date);
  const details = document.createElement('input');
  details.id = 'details';
  details.type = 'text';
  details.placeholder = 'Details about your task';
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
    (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_2__.closeNewTaskSideBar)(document.querySelector('.newTaskWindow'));
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
      (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_2__.closeNewTaskSideBar)(document.querySelector('.newTaskWindow'));
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




let newTaskWindowExists = false;
const newTaskWindow = document.createElement('div');
const newTaskContent = document.createElement('div');
let taskOrProject = 'Task';


function displayNewTaskWindow(window) {
  (0,_toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_3__.toggleBackgroundBlur)();
  if (!newTaskWindowExists) {
    newTaskWindow.classList.add('newTaskWindow');
    newTaskContent.classList.add('newTaskContent');
    (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_0__.writeHeader)(newTaskWindow);
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
    if (!this.detailsExist) {
      const thisTask = document.getElementById(`${this.title}.task`);
      const taskDetailsDiv = document.createElement('div');
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
      thisTask.append(taskDetailsDiv);
      this.detailsExist = true;
    } else {
      document
        .getElementById(`${this.title}.details`)
        .classList.toggle('hidden');
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


function writeHeader(window) {
  const newTaskHeader = document.createElement('div');
  newTaskHeader.classList.add('newTaskHeader');
  const headerText = document.createElement('div');
  headerText.textContent = 'Create new...';
  const closingDiv = document.createElement('div');
  closingDiv.classList.add('closingDiv');
  closingDiv.textContent = 'x';
  closingDiv.onclick = () =>
    closeNewTaskSideBar(document.querySelector('.newTaskWindow'));
  newTaskHeader.appendChild(headerText);
  newTaskHeader.appendChild(closingDiv);
  window.appendChild(newTaskHeader);
}

function closeNewTaskSideBar(tab) {
  (0,_toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_0__.toggleBackgroundBlur)();
  tab.classList.add('hidden');
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Sk87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDhEO0FBQzlEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxFQUFFLDJFQUFvQjtBQUN0QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCc0Q7QUFDUDtBQUMvQztBQUNPO0FBQ1A7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDLHdCQUF3QiwrQ0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQkFBMEI7QUFDNUMsMkJBQTJCLGtEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUVBQVk7QUFDZDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVET01Gb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvcm1TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFza09yUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWZpbmVDdXJyZW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5QWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheU5ld1Rhc2tXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdENsYXNzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZ2dsZUJhY2tncm91bmRCbHVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlSGVhZGVyRm9yTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVOZXdUYXNrU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRm9ybShmb3JtKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlLmlkID0gJ3RpdGxlJztcclxuICB0aXRsZS50eXBlID0gJ3RleHQnO1xyXG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcclxuICB0aXRsZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZS5pZCA9ICdkYXRlJztcclxuICBkYXRlLnR5cGUgPSAnZGF0ZSc7XHJcbiAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkZXRhaWxzLmlkID0gJ2RldGFpbHMnO1xyXG4gIGRldGFpbHMudHlwZSA9ICd0ZXh0JztcclxuICBkZXRhaWxzLnBsYWNlaG9sZGVyID0gJ0RldGFpbHMgYWJvdXQgeW91ciB0YXNrJztcclxuICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcHJpb3JpdHkudHlwZSA9ICdidXR0b24nO1xyXG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgcHJpb3JpdHkuaWQgPSAncHJpb3JpdHlCdXR0b24nO1xyXG4gIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9ucycsICdsb3dQcmlvcml0eScpO1xyXG4gIHByaW9yaXR5Lm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KG5vZGUpIHtcclxuICBpZiAobm9kZS50ZXh0Q29udGVudCA9PSAnTG93Jykge1xyXG4gICAgbm9kZS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Qcmlvcml0eScpO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdsb3dQcmlvcml0eScpO1xyXG4gIH0gZWxzZSBpZiAobm9kZS50ZXh0Q29udGVudCA9PSAnTWVkaXVtJykge1xyXG4gICAgbm9kZS50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bVByaW9yaXR5Jyk7XHJcbiAgfSBlbHNlIGlmIChub2RlLnRleHRDb250ZW50ID09ICdIaWdoJykge1xyXG4gICAgbm9kZS50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoUHJpb3JpdHknKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza09yUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlVGFza09yUHJvamVjdCc7XHJcbmltcG9ydCB7IHRhc2tPclByb2plY3QgfSBmcm9tICcuL2Rpc3BsYXlOZXdUYXNrV2luZG93JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtU3VibWl0KHdpbmRvdykge1xyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xyXG4gIHN1Ym1pdEJ1dHRvbi5pZCA9ICdzdWJtaXQnO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbnMnKTtcclxuICB3aW5kb3cuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxyXG4gICAgY3JlYXRlVGFza09yUHJvamVjdCh0YXNrT3JQcm9qZWN0KVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdENsYXNzJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vcHJvamVjdENsYXNzJztcclxuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4vZGVmaW5lQ3VycmVudFByb2plY3QnO1xyXG5cclxuaW1wb3J0IHsgY2xvc2VOZXdUYXNrU2lkZUJhciB9IGZyb20gJy4vd3JpdGVIZWFkZXJGb3JOZXdUYXNrJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrT3JQcm9qZWN0KHRhc2tPclByb2plY3QpIHtcclxuICBpZiAodGFza09yUHJvamVjdCA9PSAnVGFzaycpIHtcclxuICAgIGNvbnN0IGRlZmluZWREYXRlID0gbW9tZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUpLmZvcm1hdChcclxuICAgICAgJ0REL01NL1lZWVknXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKS52YWx1ZSxcclxuICAgICAgZGVmaW5lZERhdGUsXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eUJ1dHRvbicpLnRleHRDb250ZW50LFxyXG4gICAgICBhY3RpdmVQcm9qZWN0LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIG5ld1Rhc2suaW5pdGlhbGl6ZSgpO1xyXG4gICAgY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza1dpbmRvdycpKTtcclxuICB9XHJcbiAgaWYgKHRhc2tPclByb2plY3QgPT0gJ1Byb2plY3QnKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLnZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLnZhbHVlID1cclxuICAgICAgICAnRXJyb3IsIGR1cGxpY2F0ZSBwcm9qZWN0JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZSA9PVxyXG4gICAgICAgICdFcnJvciwgZHVwbGljYXRlIHByb2plY3QnXHJcbiAgICAgIClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICAgICAgY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza1dpbmRvdycpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuaWQ7XHJcbmV4cG9ydCB7IGFjdGl2ZVByb2plY3QgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVBY3RpdmUoKSB7XHJcbiAgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5pZDtcclxuICByZXR1cm4gYWN0aXZlUHJvamVjdDtcclxufVxyXG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKVxyXG4gICAgLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBnZW5lcmFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApKSB7XHJcbiAgICAgIHRhc2tzW2ldLnJlbW92ZVRhc2soXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICB0YXNrc1tpXS5kZXRhaWxzRXhpc3QgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgd3JpdGVIZWFkZXIgfSBmcm9tICcuL3dyaXRlSGVhZGVyRm9yTmV3VGFzayc7XHJcbmltcG9ydCB7IHdyaXRlTmV3VGFza1NpZGViYXIgfSBmcm9tICcuL3dyaXRlTmV3VGFza1NpZGViYXInO1xyXG5pbXBvcnQgeyBuZXdGb3JtIH0gZnJvbSAnLi9uZXdUYXNrRm9ybSc7XHJcbmltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSAnLi90b2dnbGVCYWNrZ3JvdW5kQmx1cic7XHJcbmxldCBuZXdUYXNrV2luZG93RXhpc3RzID0gZmFsc2U7XHJcbmNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgbmV3VGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubGV0IHRhc2tPclByb2plY3QgPSAnVGFzayc7XHJcbmV4cG9ydCB7IHRhc2tPclByb2plY3QgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TmV3VGFza1dpbmRvdyh3aW5kb3cpIHtcclxuICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xyXG4gIGlmICghbmV3VGFza1dpbmRvd0V4aXN0cykge1xyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCduZXdUYXNrV2luZG93Jyk7XHJcbiAgICBuZXdUYXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCduZXdUYXNrQ29udGVudCcpO1xyXG4gICAgd3JpdGVIZWFkZXIobmV3VGFza1dpbmRvdyk7XHJcbiAgICB3cml0ZU5ld1Rhc2tTaWRlYmFyKG5ld1Rhc2tDb250ZW50KTtcclxuICAgIG5ld0Zvcm0obmV3VGFza0NvbnRlbnQpO1xyXG4gICAgbmV3VGFza1dpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGVudCk7XHJcbiAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1dpbmRvdyk7XHJcbiAgICBuZXdUYXNrV2luZG93RXhpc3RzID0gdHJ1ZTtcclxuICAgIGFkZEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXJzKCkge1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheUZvcm0oJ1Rhc2snKSk7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5Rm9ybSgnUHJvamVjdCcpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZvcm0oaXNUYXNrT3JQcm9qZWN0KSB7XHJcbiAgaWYgKGlzVGFza09yUHJvamVjdCA9PSAnVGFzaycpIHtcclxuICAgIHRhc2tPclByb2plY3QgPSAnVGFzayc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCdG4nKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCdG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVCdG4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmVCdG4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQnRuJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlQnRuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2tPclByb2plY3QgPSAnUHJvamVjdCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVCdG4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmVCdG4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QnRuJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlQnRuJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGRpc3BsYXlOZXdUYXNrV2luZG93IH0gZnJvbSAnLi9kaXNwbGF5TmV3VGFza1dpbmRvdy5qcyc7XHJcbmltcG9ydCB7IHdyaXRlTG9jYWxTdG9yYWdlQ29udGVudCB9IGZyb20gJy4vd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50LmpzJztcclxuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSAnLi9kaXNwbGF5QWxsVGFza3MuanMnO1xyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRhc2tzID0gW107XHJcbmV4cG9ydCB7IHRhc2tzIH07XHJcbmV4cG9ydCB7IHByb2plY3RzIH07XHJcblxyXG5jb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QnV0dG9uJyk7XHJcbm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcbiAgZGlzcGxheU5ld1Rhc2tXaW5kb3coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSlcclxuKTtcclxuXHJcbmNvbnN0IGdlbmVyYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhbEJ1dHRvbicpO1xyXG5nZW5lcmFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUFsbFRhc2tzKTtcclxuXHJcbndyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVET01Gb3JtIH0gZnJvbSAnLi9jcmVhdGVET01Gb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlRm9ybVN1Ym1pdCB9IGZyb20gJy4vY3JlYXRlRm9ybVN1Ym1pdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3Rm9ybSh3aW5kb3csIHRhc2tPclByb2plY3QgPSAnVGFzaycpIHtcclxuICBjb25zdCBuZXdUYXNrV2luZG93Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tXaW5kb3dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tGb3JtQ29udGVudCcpO1xyXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIG5ld1Rhc2tGb3JtLmlkID0gJ25ld1Rhc2tGb3JtJztcclxuICBjcmVhdGVET01Gb3JtKG5ld1Rhc2tGb3JtKTtcclxuICBuZXdUYXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIG5ld1Byb2plY3RGb3JtLmlkID0gJ25ld1Byb2plY3RGb3JtJztcclxuICBuZXdQcm9qZWN0Rm9ybS50eXBlID0gJ3RleHQnO1xyXG4gIG5ld1Byb2plY3RGb3JtLnBsYWNlaG9sZGVyID0gJ05hbWUgeW91ciBwcm9qZWN0JztcclxuICBuZXdUYXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XHJcblxyXG4gIGNyZWF0ZUZvcm1TdWJtaXQobmV3VGFza1dpbmRvd0NvbnRlbnQpO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrV2luZG93Q29udGVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL2luZGV4LmpzJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL2luZGV4LmpzJztcclxuaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSAnLi9kZWZpbmVDdXJyZW50UHJvamVjdC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3Iobm9tZURvUHJvamV0bykge1xyXG4gICAgdGhpcy5uYW1lID0gbm9tZURvUHJvamV0bztcclxuICAgIHByb2plY3RzLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvamVjdE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuICB0dXJuQWN0aXZlKGJ1dHRvbikge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKVxyXG4gICAgICAuZm9yRWFjaCgoYWN0aXZlKSA9PiBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgc29ydFByb2plY3QoKSB7XHJcbiAgICB0aGlzLnR1cm5BY3RpdmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9qZWN0TmFtZSkpO1xyXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRlZmluZUFjdGl2ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSkge1xyXG4gICAgICAgIHRhc2tzW2ldLnJlbW92ZVRhc2soXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApLFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YXNrc1tpXS5wcm9qZWN0ID09IGFjdGl2ZVByb2plY3QpIHtcclxuICAgICAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgdGFza3NbaV0uZGV0YWlsc0V4aXN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgd3JpdGVUb0RPTSgpIHtcclxuICAgIGNvbnN0IHRoaXNQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWItYnRuJywgJ3Byb2plY3QnKTtcclxuICAgIHRoaXNQcm9qZWN0QnV0dG9uLmlkID0gdGhpcy5wcm9qZWN0TmFtZTtcclxuICAgIHRoaXNQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0TmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLmFwcGVuZENoaWxkKHRoaXNQcm9qZWN0QnV0dG9uKTtcclxuICAgIHRoaXMudHVybkFjdGl2ZSh0aGlzUHJvamVjdEJ1dHRvbik7XHJcbiAgICB0aGlzUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc29ydFByb2plY3QoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvamVjdCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvamVjdE5hbWUpLnJlbW92ZSgpO1xyXG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRpdGxlLFxyXG4gICAgZGV0YWlscyxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSA9ICdMb3cnLFxyXG4gICAgcHJvamVjdCA9ICcnLFxyXG4gICAgY29tcGxldGVkID0gZmFsc2VcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGFza3MucHVzaCh0aGlzKTtcclxuICAgIHRoaXMuZGV0YWlsc0V4aXN0ID0gZmFsc2U7XHJcbiAgfVxyXG4gIHNldCBkZWZpbmVQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgYWRkUHJpb3JpdHlTdHlsZShpdGVtKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMucHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSArICdQcmlvcml0eScpO1xyXG4gIH1cclxuICByZW1vdmVUYXNrKHdoYXRUb0RlbGV0ZSwgc3BsaWNlT3JOb3QgPSB0cnVlKSB7XHJcbiAgICBpZiAoc3BsaWNlT3JOb3QpIHtcclxuICAgICAgdGFza3Muc3BsaWNlKHRhc2tzLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgfVxyXG4gICAgd2hhdFRvRGVsZXRlLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVUb0RPTSgpIHtcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnc3ByZWFkJyk7XHJcbiAgICB0YXNrLmlkID0gYCR7dGhpcy50aXRsZX0udGFza2A7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29uc3QgZXZlcnl0aGluZ0Vsc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGV2ZXJ5dGhpbmdFbHNlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xyXG4gICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJ0RldGFpbHMnO1xyXG4gICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlRGV0YWlscyh0aXRsZSkpO1xyXG4gICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICB0aGlzLmFkZFByaW9yaXR5U3R5bGUodGFzayk7XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmVUYXNrKHRhc2spKTtcclxuICAgIGV2ZXJ5dGhpbmdFbHNlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKGV2ZXJ5dGhpbmdFbHNlKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgfVxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLndyaXRlVG9ET00oKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEZXRhaWxzKCkge1xyXG4gICAgaWYgKCF0aGlzLmRldGFpbHNFeGlzdCkge1xyXG4gICAgICBjb25zdCB0aGlzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMudGl0bGV9LnRhc2tgKTtcclxuICAgICAgY29uc3QgdGFza0RldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndGFza0RldGFpbHNIYW5kbGVyJyk7XHJcbiAgICAgIHRhc2tEZXRhaWxzRGl2LmlkID0gYCR7dGhpcy50aXRsZX0uZGV0YWlsc2A7XHJcbiAgICAgIGNvbnN0IHRhc2tEZXRhaWxzUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgdGhpcy5wcm9qZWN0ID09ICdnZW5lcmFsQnV0dG9uJ1xyXG4gICAgICAgID8gKHRhc2tEZXRhaWxzUHJvamVjdC50ZXh0Q29udGVudCA9IGBObyBwcm9qZWN0IGFzc2lnbm1lbnRgKVxyXG4gICAgICAgIDogKHRhc2tEZXRhaWxzUHJvamVjdC50ZXh0Q29udGVudCA9IGBQcm9qZWN0IG5hbWU6ICR7dGhpcy5wcm9qZWN0fWApO1xyXG4gICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc1Byb2plY3QpO1xyXG4gICAgICBjb25zdCB0YXNrRGV0YWlsc0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHRhc2tEZXRhaWxzRGV0YWlscy50ZXh0Q29udGVudCA9IGBEZXRhaWxzOiAke3RoaXMuZGV0YWlsc31gO1xyXG4gICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc0RldGFpbHMpO1xyXG4gICAgICBjb25zdCB0YXNrRGV0YWlsc1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICB0YXNrRGV0YWlsc1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YDtcclxuICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNQcmlvcml0eSk7XHJcbiAgICAgIHRhc2tEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcclxuICAgICAgdGhpc1Rhc2suYXBwZW5kKHRhc2tEZXRhaWxzRGl2KTtcclxuICAgICAgdGhpcy5kZXRhaWxzRXhpc3QgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy50aXRsZX0uZGV0YWlsc2ApXHJcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlQmFja2dyb3VuZEJsdXIoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1kaXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdibHVyJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW5uZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdibHVyJyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9nZ2xlQmFja2dyb3VuZEJsdXIgfSBmcm9tICcuL3RvZ2dsZUJhY2tncm91bmRCbHVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUhlYWRlcih3aW5kb3cpIHtcclxuICBjb25zdCBuZXdUYXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKCduZXdUYXNrSGVhZGVyJyk7XHJcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIG5ldy4uLic7XHJcbiAgY29uc3QgY2xvc2luZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNsb3NpbmdEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2luZ0RpdicpO1xyXG4gIGNsb3NpbmdEaXYudGV4dENvbnRlbnQgPSAneCc7XHJcbiAgY2xvc2luZ0Rpdi5vbmNsaWNrID0gKCkgPT5cclxuICAgIGNsb3NlTmV3VGFza1NpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tXaW5kb3cnKSk7XHJcbiAgbmV3VGFza0hlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcclxuICBuZXdUYXNrSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NpbmdEaXYpO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrSGVhZGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTmV3VGFza1NpZGVCYXIodGFiKSB7XHJcbiAgdG9nZ2xlQmFja2dyb3VuZEJsdXIoKTtcclxuICB0YWIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSAnLi9kZWZpbmVDdXJyZW50UHJvamVjdCc7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tICcuL3Byb2plY3RDbGFzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50KCkge1xyXG4gIGNvbnN0IGxvY2FsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcclxuICAgICAgbG9jYWxUYXNrc1tpXS50aXRsZSxcclxuICAgICAgbG9jYWxUYXNrc1tpXS5kZXRhaWxzLFxyXG4gICAgICBsb2NhbFRhc2tzW2ldLmR1ZURhdGUsXHJcbiAgICAgIGxvY2FsVGFza3NbaV0ucHJpb3JpdHksXHJcbiAgICAgIGxvY2FsVGFza3NbaV0ucHJvamVjdCxcclxuICAgICAgbG9jYWxUYXNrc1tpXS5jb21wbGV0ZWRcclxuICAgICk7XHJcbiAgICBuZXdUYXNrLmluaXRpYWxpemUoKTtcclxuICB9XHJcbiAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGxvY2FsUHJvamVjdHNbaV0ubmFtZSk7XHJcbiAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIGRlZmluZUFjdGl2ZSgpO1xyXG59XHJcblxyXG4vL0FUVUFMOiBQT1IgQUxHVU0gTU9USVZPIEEgTElOSEEgOSBOw4NPIEZVTkNJT05BLCBGSVggVEhBVCBBTkQgWU9VIFdJTlxyXG4iLCJleHBvcnQgZnVuY3Rpb24gd3JpdGVOZXdUYXNrU2lkZWJhcih3aW5kb3cpIHtcclxuICBjb25zdCBuZXdUYXNrU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tTaWRlQmFyJyk7XHJcbiAgY29uc3QgcHJvamVjdE9yVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByb2plY3RPclRhc2suY2xhc3NMaXN0LmFkZCgncHJvamVjdE9yVGFzaycpO1xyXG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYi1idG4nLCAnYWN0aXZlQnRuJyk7XHJcbiAgdGFza0J1dHRvbi5pZCA9ICd0YXNrQnRuJztcclxuICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1Rhc2snO1xyXG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RhYi1idG4nLCAnaW5hY3RpdmVCdG4nKTtcclxuICBwcm9qZWN0QnV0dG9uLmlkID0gJ3Byb2plY3RCdG4nO1xyXG4gIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XHJcbiAgcHJvamVjdE9yVGFzay5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcclxuICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xyXG4gIG5ld1Rhc2tTaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RPclRhc2spO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrU2lkZWJhcik7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==