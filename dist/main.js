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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNEQ7QUFDTDtBQUN2RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBbUIsQ0FBQyxnRUFBYTtBQUNyQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUM7QUFDSDtBQUNpQjtBQUN2RDtBQUM4RDtBQUM5RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0NBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLElBQUksMkVBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyRUFBbUI7QUFDekI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ3lCO0FBQ3pCO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDMUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkNBQVksRUFBRTtBQUNwQyxtQ0FBbUMsb0NBQUssVUFBVTtBQUNsRCxNQUFNLG9DQUFLO0FBQ1gsbUNBQW1DLG9DQUFLLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSwyQ0FBWSxFQUFFO0FBQ3BDLElBQUksb0NBQUs7QUFDVCxJQUFJLG9DQUFLO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnNEO0FBQ007QUFDcEI7QUFDc0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDeUI7QUFDekI7QUFDTztBQUNQLEVBQUUsMkVBQW9CO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQVc7QUFDZixJQUFJLHlFQUFtQjtBQUN2QixJQUFJLHFEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERpRTtBQUNRO0FBQ2xCO0FBQ3ZEO0FBQ0E7QUFDaUI7QUFDRztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhFQUFvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0VBQWU7QUFDdkQ7QUFDQSxzRkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ3QjtBQUNNO0FBQ3REO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRUFBZ0I7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1DO0FBQ0c7QUFDbUI7QUFDQTtBQUNRO0FBQ2pFO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNFQUFZO0FBQ3RDLG9CQUFvQixJQUFJLG1EQUFZLEVBQUU7QUFDdEMscUNBQXFDLDRDQUFLLFVBQVU7QUFDcEQsUUFBUSw0Q0FBSztBQUNiLHFDQUFxQyw0Q0FBSyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksbURBQVksRUFBRTtBQUN0QyxVQUFVLDRDQUFLO0FBQ2YsUUFBUSw0Q0FBSztBQUNiLFFBQVEsNENBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsK0NBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFlLENBQUMsdURBQWdCO0FBQ3BDLG9EQUFvRCwrQ0FBUTtBQUM1RDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBWSxDQUFDLG9EQUFhO0FBQ2hDLG1EQUFtRCw0Q0FBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDRDQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLElBQUksOEVBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBVztBQUNqQjtBQUNBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGFBQWE7QUFDMUU7QUFDQTtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekpPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0g4RDtBQUM5RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsRUFBRSwyRUFBb0I7QUFDdEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENzRDtBQUNQO0FBQy9DO0FBQ087QUFDUDtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekMsd0JBQXdCLCtDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QywyQkFBMkIsa0RBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRUFBWTtBQUNkO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZURPTUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUYXNrT3JQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RlZmluZUN1cnJlbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlBbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5TmV3VGFza1dpbmRvdy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uZXdUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9nZ2xlQmFja2dyb3VuZEJsdXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVIZWFkZXJGb3JOZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlTG9jYWxTdG9yYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZU5ld1Rhc2tTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVET01Gb3JtKGZvcm0pIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gIHRpdGxlLnR5cGUgPSAndGV4dCc7XHJcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xyXG4gIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlLmlkID0gJ2RhdGUnO1xyXG4gIGRhdGUudHlwZSA9ICdkYXRlJztcclxuICBkYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRldGFpbHMuaWQgPSAnZGV0YWlscyc7XHJcbiAgZGV0YWlscy50eXBlID0gJ3RleHQnO1xyXG4gIGRldGFpbHMucGxhY2Vob2xkZXIgPSAnRGV0YWlscyBhYm91dCB5b3VyIHRhc2snO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBwcmlvcml0eS50eXBlID0gJ2J1dHRvbic7XHJcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcclxuICBwcmlvcml0eS5pZCA9ICdwcmlvcml0eUJ1dHRvbic7XHJcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b25zJywgJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgcHJpb3JpdHkub25jbGljayA9ICgpID0+IGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkobm9kZSkge1xyXG4gIGlmIChub2RlLnRleHRDb250ZW50ID09ICdMb3cnKSB7XHJcbiAgICBub2RlLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgfSBlbHNlIGlmIChub2RlLnRleHRDb250ZW50ID09ICdNZWRpdW0nKSB7XHJcbiAgICBub2RlLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcclxuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtUHJpb3JpdHknKTtcclxuICB9IGVsc2UgaWYgKG5vZGUudGV4dENvbnRlbnQgPT0gJ0hpZ2gnKSB7XHJcbiAgICBub2RlLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hQcmlvcml0eScpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrT3JQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGVUYXNrT3JQcm9qZWN0JztcclxuaW1wb3J0IHsgdGFza09yUHJvamVjdCB9IGZyb20gJy4vZGlzcGxheU5ld1Rhc2tXaW5kb3cnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1TdWJtaXQod2luZG93KSB7XHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSc7XHJcbiAgc3VibWl0QnV0dG9uLmlkID0gJ3N1Ym1pdCc7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9ucycpO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XHJcbiAgICBjcmVhdGVUYXNrT3JQcm9qZWN0KHRhc2tPclByb2plY3QpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnO1xyXG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLi9kZWZpbmVDdXJyZW50UHJvamVjdCc7XHJcblxyXG5pbXBvcnQgeyBjbG9zZU5ld1Rhc2tTaWRlQmFyIH0gZnJvbSAnLi93cml0ZUhlYWRlckZvck5ld1Rhc2snO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tPclByb2plY3QodGFza09yUHJvamVjdCkge1xyXG4gIGlmICh0YXNrT3JQcm9qZWN0ID09ICdUYXNrJykge1xyXG4gICAgY29uc3QgZGVmaW5lZERhdGUgPSBtb21lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSkuZm9ybWF0KFxyXG4gICAgICAnREQvTU0vWVlZWSdcclxuICAgICk7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpLnZhbHVlLFxyXG4gICAgICBkZWZpbmVkRGF0ZSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5QnV0dG9uJykudGV4dENvbnRlbnQsXHJcbiAgICAgIGFjdGl2ZVByb2plY3QsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgbmV3VGFzay5pbml0aWFsaXplKCk7XHJcbiAgICBjbG9zZU5ld1Rhc2tTaWRlQmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrV2luZG93JyksICduZXdUYXNrJyk7XHJcbiAgfVxyXG4gIGlmICh0YXNrT3JQcm9qZWN0ID09ICdQcm9qZWN0Jykge1xyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZSlcclxuICAgICkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKS52YWx1ZSA9XHJcbiAgICAgICAgJ0Vycm9yLCBkdXBsaWNhdGUgcHJvamVjdCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykudmFsdWUgPT1cclxuICAgICAgICAnRXJyb3IsIGR1cGxpY2F0ZSBwcm9qZWN0J1xyXG4gICAgICApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykudmFsdWVcclxuICAgICAgKTtcclxuICAgICAgbmV3UHJvamVjdC5pbml0aWFsaXplKCk7XHJcbiAgICAgIGNsb3NlTmV3VGFza1NpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tXaW5kb3cnKSwgJ25ld1Rhc2snKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuaWQ7XHJcbmV4cG9ydCB7IGFjdGl2ZVByb2plY3QgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVBY3RpdmUoKSB7XHJcbiAgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5pZDtcclxuICByZXR1cm4gYWN0aXZlUHJvamVjdDtcclxufVxyXG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKVxyXG4gICAgLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICBnZW5lcmFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApKSB7XHJcbiAgICAgIHRhc2tzW2ldLnJlbW92ZVRhc2soXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICB0YXNrc1tpXS5kZXRhaWxzRXhpc3QgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgd3JpdGVIZWFkZXIgfSBmcm9tICcuL3dyaXRlSGVhZGVyRm9yTmV3VGFzayc7XHJcbmltcG9ydCB7IHdyaXRlTmV3VGFza1NpZGViYXIgfSBmcm9tICcuL3dyaXRlTmV3VGFza1NpZGViYXInO1xyXG5pbXBvcnQgeyBuZXdGb3JtIH0gZnJvbSAnLi9uZXdUYXNrRm9ybSc7XHJcbmltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSAnLi90b2dnbGVCYWNrZ3JvdW5kQmx1cic7XHJcbmNvbnN0IG5ld1Rhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubGV0IG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSBmYWxzZTtcclxubGV0IHRhc2tPclByb2plY3QgPSAnVGFzayc7XHJcbmV4cG9ydCB7IHRhc2tPclByb2plY3QgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TmV3VGFza1dpbmRvdyh3aW5kb3cpIHtcclxuICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xyXG4gIGlmICghbmV3VGFza1dpbmRvd0V4aXN0cykge1xyXG4gICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCduZXdUYXNrV2luZG93Jyk7XHJcbiAgICBuZXdUYXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCduZXdUYXNrQ29udGVudCcpO1xyXG4gICAgd3JpdGVIZWFkZXIobmV3VGFza1dpbmRvdywgJ25ld1Rhc2snKTtcclxuICAgIHdyaXRlTmV3VGFza1NpZGViYXIobmV3VGFza0NvbnRlbnQpO1xyXG4gICAgbmV3Rm9ybShuZXdUYXNrQ29udGVudCk7XHJcbiAgICBuZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250ZW50KTtcclxuICAgIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrV2luZG93KTtcclxuICAgIG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSB0cnVlO1xyXG4gICAgYWRkQnV0dG9uTGlzdGVuZXJzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwbGF5Rm9ybSgnVGFzaycpKTtcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QnRuJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlGb3JtKCdQcm9qZWN0JykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybShpc1Rhc2tPclByb2plY3QpIHtcclxuICBpZiAoaXNUYXNrT3JQcm9qZWN0ID09ICdUYXNrJykge1xyXG4gICAgdGFza09yUHJvamVjdCA9ICdUYXNrJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCdG4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFza09yUHJvamVjdCA9ICdQcm9qZWN0JztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlQnRuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0J0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCdG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZUJ0bicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCdG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCdG4nKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGlzcGxheU5ld1Rhc2tXaW5kb3cgfSBmcm9tICcuL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzJztcclxuaW1wb3J0IHsgd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50IH0gZnJvbSAnLi93cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tICcuL2Rpc3BsYXlBbGxUYXNrcy5qcyc7XHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgdGFza3MgPSBbXTtcclxuZXhwb3J0IHsgdGFza3MgfTtcclxuZXhwb3J0IHsgcHJvamVjdHMgfTtcclxuXHJcbmNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdCdXR0b24nKTtcclxubmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxuICBkaXNwbGF5TmV3VGFza1dpbmRvdyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKVxyXG4pO1xyXG5cclxuY29uc3QgZ2VuZXJhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmFsQnV0dG9uJyk7XHJcbmdlbmVyYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpO1xyXG5cclxud3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50KCk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZURPTUZvcm0gfSBmcm9tICcuL2NyZWF0ZURPTUZvcm0nO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtU3VibWl0IH0gZnJvbSAnLi9jcmVhdGVGb3JtU3VibWl0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdGb3JtKHdpbmRvdywgdGFza09yUHJvamVjdCA9ICdUYXNrJykge1xyXG4gIGNvbnN0IG5ld1Rhc2tXaW5kb3dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza1dpbmRvd0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbmV3VGFza0Zvcm1Db250ZW50Jyk7XHJcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgbmV3VGFza0Zvcm0uaWQgPSAnbmV3VGFza0Zvcm0nO1xyXG4gIGNyZWF0ZURPTUZvcm0obmV3VGFza0Zvcm0pO1xyXG4gIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgbmV3UHJvamVjdEZvcm0uaWQgPSAnbmV3UHJvamVjdEZvcm0nO1xyXG4gIG5ld1Byb2plY3RGb3JtLnR5cGUgPSAndGV4dCc7XHJcbiAgbmV3UHJvamVjdEZvcm0ucGxhY2Vob2xkZXIgPSAnTmFtZSB5b3VyIHByb2plY3QnO1xyXG4gIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcclxuXHJcbiAgY3JlYXRlRm9ybVN1Ym1pdChuZXdUYXNrV2luZG93Q29udGVudCk7XHJcbiAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tXaW5kb3dDb250ZW50KTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyBkZWZpbmVBY3RpdmUgfSBmcm9tICcuL2RlZmluZUN1cnJlbnRQcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgd3JpdGVIZWFkZXIgfSBmcm9tICcuL3dyaXRlSGVhZGVyRm9yTmV3VGFzay5qcyc7XHJcbmltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSAnLi90b2dnbGVCYWNrZ3JvdW5kQmx1ci5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3Iobm9tZURvUHJvamV0bykge1xyXG4gICAgdGhpcy5uYW1lID0gbm9tZURvUHJvamV0bztcclxuICAgIHByb2plY3RzLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJvamVjdE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuICB0dXJuQWN0aXZlKGJ1dHRvbikge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKVxyXG4gICAgICAuZm9yRWFjaCgoYWN0aXZlKSA9PiBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgc29ydFByb2plY3QoKSB7XHJcbiAgICB0aGlzLnR1cm5BY3RpdmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9qZWN0TmFtZSkpO1xyXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRlZmluZUFjdGl2ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSkge1xyXG4gICAgICAgIHRhc2tzW2ldLnJlbW92ZVRhc2soXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApLFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YXNrc1tpXS5wcm9qZWN0ID09IGFjdGl2ZVByb2plY3QpIHtcclxuICAgICAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgdGFza3NbaV0uZGV0YWlsc0V4aXN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgd3JpdGVUb0RPTSgpIHtcclxuICAgIGNvbnN0IHRoaXNQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWItYnRuJywgJ3Byb2plY3QnKTtcclxuICAgIHRoaXNQcm9qZWN0QnV0dG9uLmlkID0gdGhpcy5wcm9qZWN0TmFtZTtcclxuICAgIHRoaXNQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0TmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpLmFwcGVuZENoaWxkKHRoaXNQcm9qZWN0QnV0dG9uKTtcclxuICAgIHRoaXMudHVybkFjdGl2ZSh0aGlzUHJvamVjdEJ1dHRvbik7XHJcbiAgICB0aGlzUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc29ydFByb2plY3QoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvamVjdCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvamVjdE5hbWUpLnJlbW92ZSgpO1xyXG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRpdGxlLFxyXG4gICAgZGV0YWlscyxcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eSA9ICdMb3cnLFxyXG4gICAgcHJvamVjdCA9ICcnLFxyXG4gICAgY29tcGxldGVkID0gZmFsc2VcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGFza3MucHVzaCh0aGlzKTtcclxuICAgIHRoaXMuZGV0YWlsc0V4aXN0ID0gZmFsc2U7XHJcbiAgfVxyXG4gIHNldCBkZWZpbmVQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgYWRkUHJpb3JpdHlTdHlsZShpdGVtKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMucHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSArICdQcmlvcml0eScpO1xyXG4gIH1cclxuICByZW1vdmVUYXNrKHdoYXRUb0RlbGV0ZSwgc3BsaWNlT3JOb3QgPSB0cnVlKSB7XHJcbiAgICBpZiAoc3BsaWNlT3JOb3QpIHtcclxuICAgICAgdGFza3Muc3BsaWNlKHRhc2tzLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgfVxyXG4gICAgd2hhdFRvRGVsZXRlLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVUb0RPTSgpIHtcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnc3ByZWFkJyk7XHJcbiAgICB0YXNrLmlkID0gYCR7dGhpcy50aXRsZX0udGFza2A7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29uc3QgZXZlcnl0aGluZ0Vsc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGV2ZXJ5dGhpbmdFbHNlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xyXG4gICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJ0RldGFpbHMnO1xyXG4gICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlRGV0YWlscyh0aXRsZSkpO1xyXG4gICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICB0aGlzLmFkZFByaW9yaXR5U3R5bGUodGFzayk7XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmVUYXNrKHRhc2spKTtcclxuICAgIGV2ZXJ5dGhpbmdFbHNlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKGV2ZXJ5dGhpbmdFbHNlKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgfVxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLndyaXRlVG9ET00oKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEZXRhaWxzKCkge1xyXG4gICAgdG9nZ2xlQmFja2dyb3VuZEJsdXIoKTtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgY29uc3QgdGFza0RldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGlmICghdGhpcy5kZXRhaWxzRXhpc3QpIHtcclxuICAgICAgdGFza0RldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RldGFpbHNEaXYnKTtcclxuICAgICAgd3JpdGVIZWFkZXIodGFza0RldGFpbHNEaXYsICdEZXRhaWxzUG9wdXAnLCB0YXNrRGV0YWlsc0Rpdik7XHJcbiAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXRhaWxzSGFuZGxlcicpO1xyXG4gICAgICB0YXNrRGV0YWlsc0Rpdi5pZCA9IGAke3RoaXMudGl0bGV9LmRldGFpbHNgO1xyXG4gICAgICBjb25zdCB0YXNrRGV0YWlsc1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHRoaXMucHJvamVjdCA9PSAnZ2VuZXJhbEJ1dHRvbidcclxuICAgICAgICA/ICh0YXNrRGV0YWlsc1Byb2plY3QudGV4dENvbnRlbnQgPSBgTm8gcHJvamVjdCBhc3NpZ25tZW50YClcclxuICAgICAgICA6ICh0YXNrRGV0YWlsc1Byb2plY3QudGV4dENvbnRlbnQgPSBgUHJvamVjdCBuYW1lOiAke3RoaXMucHJvamVjdH1gKTtcclxuICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNQcm9qZWN0KTtcclxuICAgICAgY29uc3QgdGFza0RldGFpbHNEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICB0YXNrRGV0YWlsc0RldGFpbHMudGV4dENvbnRlbnQgPSBgRGV0YWlsczogJHt0aGlzLmRldGFpbHN9YDtcclxuICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNEZXRhaWxzKTtcclxuICAgICAgY29uc3QgdGFza0RldGFpbHNQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWA7XHJcbiAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzUHJpb3JpdHkpO1xyXG4gICAgICB0YXNrRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0RldGFpbHNEaXYpO1xyXG4gICAgICB0aGlzLmRldGFpbHNFeGlzdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0RldGFpbHNEaXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUJhY2tncm91bmRCbHVyKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItZGl2JykuY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFubmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnYmx1cicpO1xyXG59XHJcbiIsImltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSAnLi90b2dnbGVCYWNrZ3JvdW5kQmx1cic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVIZWFkZXIod2luZG93LCBuZXdUYXNrT3JEZXRhaWxzLCB3aG9zZVRhc2tEZXRhaWxzKSB7XHJcbiAgY29uc3QgbmV3VGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbmV3VGFza0hlYWRlcicpO1xyXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpZiAobmV3VGFza09yRGV0YWlscyA9PSAnbmV3VGFzaycpIHtcclxuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIG5ldy4uLic7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnU2hvd2luZyBkZXRhaWxzJztcclxuICB9XHJcbiAgY29uc3QgY2xvc2luZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNsb3NpbmdEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2luZ0RpdicpO1xyXG4gIGNsb3NpbmdEaXYudGV4dENvbnRlbnQgPSAneCc7XHJcbiAgY2xvc2luZ0Rpdi5vbmNsaWNrID0gKCkgPT5cclxuICAgIGNsb3NlTmV3VGFza1NpZGVCYXIoXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrV2luZG93JyksXHJcbiAgICAgIG5ld1Rhc2tPckRldGFpbHMsXHJcbiAgICAgIHdob3NlVGFza0RldGFpbHNcclxuICAgICk7XHJcbiAgbmV3VGFza0hlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcclxuICBuZXdUYXNrSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NpbmdEaXYpO1xyXG4gIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrSGVhZGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTmV3VGFza1NpZGVCYXIodGFiLCBuZXdUYXNrT3JEZXRhaWxzLCB3aG9zZVRhc2tEZXRhaWxzKSB7XHJcbiAgdG9nZ2xlQmFja2dyb3VuZEJsdXIoKTtcclxuICBpZiAobmV3VGFza09yRGV0YWlscyA9PT0gJ25ld1Rhc2snKSB7XHJcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdob3NlVGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGRlZmluZUFjdGl2ZSB9IGZyb20gJy4vZGVmaW5lQ3VycmVudFByb2plY3QnO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrIH0gZnJvbSAnLi9wcm9qZWN0Q2xhc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpIHtcclxuICBjb25zdCBsb2NhbFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXHJcbiAgICAgIGxvY2FsVGFza3NbaV0udGl0bGUsXHJcbiAgICAgIGxvY2FsVGFza3NbaV0uZGV0YWlscyxcclxuICAgICAgbG9jYWxUYXNrc1tpXS5kdWVEYXRlLFxyXG4gICAgICBsb2NhbFRhc2tzW2ldLnByaW9yaXR5LFxyXG4gICAgICBsb2NhbFRhc2tzW2ldLnByb2plY3QsXHJcbiAgICAgIGxvY2FsVGFza3NbaV0uY29tcGxldGVkXHJcbiAgICApO1xyXG4gICAgbmV3VGFzay5pbml0aWFsaXplKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGxvY2FsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChsb2NhbFByb2plY3RzW2ldLm5hbWUpO1xyXG4gICAgbmV3UHJvamVjdC5pbml0aWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVBY3RpdmUoKTtcclxufVxyXG5cclxuLy9BVFVBTDogUE9SIEFMR1VNIE1PVElWTyBBIExJTkhBIDkgTsODTyBGVU5DSU9OQSwgRklYIFRIQVQgQU5EIFlPVSBXSU5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTmV3VGFza1NpZGViYXIod2luZG93KSB7XHJcbiAgY29uc3QgbmV3VGFza1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrU2lkZWJhci5jbGFzc0xpc3QuYWRkKCduZXdUYXNrU2lkZUJhcicpO1xyXG4gIGNvbnN0IHByb2plY3RPclRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9qZWN0T3JUYXNrLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RPclRhc2snKTtcclxuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWItYnRuJywgJ2FjdGl2ZUJ0bicpO1xyXG4gIHRhc2tCdXR0b24uaWQgPSAndGFza0J0bic7XHJcbiAgdGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdUYXNrJztcclxuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWItYnRuJywgJ2luYWN0aXZlQnRuJyk7XHJcbiAgcHJvamVjdEJ1dHRvbi5pZCA9ICdwcm9qZWN0QnRuJztcclxuICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xyXG4gIHByb2plY3RPclRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XHJcbiAgcHJvamVjdE9yVGFzay5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcclxuICBuZXdUYXNrU2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0T3JUYXNrKTtcclxuICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1NpZGViYXIpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=