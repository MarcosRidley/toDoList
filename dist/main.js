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
        const title = document.createElement("input");
        title.id = "title"
        title.type = "text";
        title.placeholder = "Title"
        title.required = true;
        form.appendChild(title)
    const date = document.createElement("input");
            date.id = "date";
            date.type = "date";
            date.required = true
        form.appendChild(date)
    const details = document.createElement("input");
        details.id = "details";
        details.type = "text";
        details.placeholder = "Details about your task"
        form.appendChild(details)
    const priority = document.createElement("button");
        priority.type = "button";
        priority.textContent = "Low";
        priority.id = "priorityButton";
        priority.classList.add("form-buttons", "lowPriority");
        priority.onclick = () => changePriority(priority)
        form.appendChild(priority);
}



function changePriority(node){
    if(node.textContent == "Low") {
        node.textContent = "Medium";
        node.classList.add("mediumPriority");
        node.classList.remove("lowPriority");
    } else if(node.textContent == "Medium") {
        node.textContent = "High";
        node.classList.add("highPriority");
        node.classList.remove("mediumPriority");
    }else if(node.textContent == "High"){
        node.textContent = "Low"
        node.classList.add("lowPriority");
        node.classList.remove("highPriority");
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
const submitButton = document.createElement("button");
submitButton.textContent = "Create";
submitButton.id="submit";
submitButton.classList.add("form-buttons");
window.appendChild(submitButton);
submitButton.addEventListener("click",() => (0,_createTaskOrProject__WEBPACK_IMPORTED_MODULE_0__.createTaskOrProject)(_displayNewTaskWindow__WEBPACK_IMPORTED_MODULE_1__.taskOrProject));
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClass */ "./src/projectClass.js");
/* harmony import */ var _defineCurrentProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defineCurrentProject */ "./src/defineCurrentProject.js");
/* harmony import */ var _writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writeHeaderForNewTask */ "./src/writeHeaderForNewTask.js");







function createTaskOrProject(taskOrProject) {
    
    if(taskOrProject == "Task") {
        const definedDate = moment(document.getElementById("date").value).format("DD/MM/YYYY")
        const newTask = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Task(document.getElementById("title").value, document.getElementById("details").value,definedDate, document.getElementById("priorityButton").textContent, _defineCurrentProject__WEBPACK_IMPORTED_MODULE_2__.activeProject, false)
        newTask.initialize();
        (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_3__.closeNewTaskSideBar)(document.querySelector(".newTaskWindow"))
    }
    if(taskOrProject == "Project") {
        if(document.getElementById(document.getElementById("newProjectForm").value)){
            document.getElementById("newProjectForm").value = "Error, duplicate project"

        } else {
            if(document.getElementById("newProjectForm").value == "Error, duplicate project") return;
            const newProject = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project(document.getElementById("newProjectForm").value)
            newProject.initialize();
            (0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_3__.closeNewTaskSideBar)(document.querySelector(".newTaskWindow"))
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
let activeProject = document.querySelector(".active").id


function defineActive() {
    activeProject = document.querySelector(".active").id
    return activeProject
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
    document.querySelectorAll(".active").forEach((active) => active.classList.remove("active") )
    generalButton.classList.add("active");
    for(let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {
        if(document.getElementById(`${___WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`)){___WEBPACK_IMPORTED_MODULE_0__.tasks[i].removeTask(document.getElementById(`${___WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`), false);}
    }
     for(let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++){
            ___WEBPACK_IMPORTED_MODULE_0__.tasks[i].writeToDOM();
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
const newTaskWindow = document.createElement("div");
const newTaskContent = document.createElement("div");
let taskOrProject = "Task";



function displayNewTaskWindow(window) {
    ;(0,_toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_3__.toggleBackgroundBlur)()
    if(!newTaskWindowExists) {
        newTaskWindow.classList.add("newTaskWindow");
        newTaskContent.classList.add("newTaskContent")
            ;(0,_writeHeaderForNewTask__WEBPACK_IMPORTED_MODULE_0__.writeHeader)(newTaskWindow);
            (0,_writeNewTaskSidebar__WEBPACK_IMPORTED_MODULE_1__.writeNewTaskSidebar)(newTaskContent);
            (0,_newTaskForm__WEBPACK_IMPORTED_MODULE_2__.newForm)(newTaskContent);
            newTaskWindow.appendChild(newTaskContent)
            window.appendChild(newTaskWindow)
            newTaskWindowExists = true;
            addButtonListeners();
        } else {
            newTaskWindow.classList.toggle("hidden");
        }
}



function addButtonListeners() {
    document.getElementById("taskBtn").addEventListener("click", () => displayForm("Task"));
    document.getElementById("projectBtn").addEventListener("click", () => displayForm("Project"));
}

function displayForm(isTaskOrProject) {
    if(isTaskOrProject == "Task") {
        taskOrProject = "Task"
        document.getElementById("newProjectForm").classList.add("hidden");
        document.getElementById("newTaskForm").classList.remove("hidden");
        document.getElementById("projectBtn").classList.add("inactiveBtn");
        document.getElementById("projectBtn").classList.remove("activeBtn")
        document.getElementById("taskBtn").classList.remove("inactiveBtn");
        document.getElementById("taskBtn").classList.add("activeBtn")
    } else {
        taskOrProject = "Project"
        document.getElementById("newTaskForm").classList.add("hidden");
        document.getElementById("newProjectForm").classList.remove("hidden");
        document.getElementById("taskBtn").classList.add("inactiveBtn");
        document.getElementById("taskBtn").classList.remove("activeBtn")
        document.getElementById("projectBtn").classList.remove("inactiveBtn");
        document.getElementById("projectBtn").classList.add("activeBtn")
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
/* harmony import */ var _defineCurrentProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineCurrentProject.js */ "./src/defineCurrentProject.js");
/* harmony import */ var _displayNewTaskWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayNewTaskWindow.js */ "./src/displayNewTaskWindow.js");
/* harmony import */ var _writeLocalStorageContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeLocalStorageContent.js */ "./src/writeLocalStorageContent.js");
/* harmony import */ var _displayAllTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayAllTasks.js */ "./src/displayAllTasks.js");
 

 
 
let projects = []
let tasks = [];






const newButton = document.getElementById("newButton");
newButton.addEventListener("click", () => (0,_displayNewTaskWindow_js__WEBPACK_IMPORTED_MODULE_1__.displayNewTaskWindow)(document.getElementById("main")));

const generalButton = document.getElementById("generalButton");
generalButton.addEventListener("click", _displayAllTasks_js__WEBPACK_IMPORTED_MODULE_3__.displayAllTasks)



;(0,_writeLocalStorageContent_js__WEBPACK_IMPORTED_MODULE_2__.writeLocalStorageContent)()


console.log(_defineCurrentProject_js__WEBPACK_IMPORTED_MODULE_0__.activeProject)

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



function newForm(window, taskOrProject = "Task") {
    const newTaskWindowContent = document.createElement("div");
    newTaskWindowContent.classList.add("newTaskFormContent");
            const newTaskForm = document.createElement("form");
            newTaskForm.id = "newTaskForm"
               ;(0,_createDOMForm__WEBPACK_IMPORTED_MODULE_0__.createDOMForm)(newTaskForm)
               newTaskWindowContent.appendChild(newTaskForm)
            const newProjectForm = document.createElement("input");
                newProjectForm.classList.add("hidden")
                newProjectForm.id = "newProjectForm";   
                newProjectForm.type = "text";
                newProjectForm.placeholder = "Name your project"
                newTaskWindowContent.appendChild(newProjectForm);

    (0,_createFormSubmit__WEBPACK_IMPORTED_MODULE_1__.createFormSubmit)(newTaskWindowContent)
    window.appendChild(newTaskWindowContent)
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
    constructor(nomeDoProjeto){
        this.name = nomeDoProjeto
        _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(this);
    }

    get projectName() {
        return this.name
    }
    turnActive(button) {
        document.querySelectorAll(".active").forEach((active) => active.classList.remove("active") )
        button.classList.add("active");
    }

    sortProject() {
        this.turnActive(document.getElementById(this.projectName))
        const activeProject = (0,_defineCurrentProject_js__WEBPACK_IMPORTED_MODULE_1__.defineActive)();
        for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++) {
            if(document.getElementById(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`)){_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].removeTask(document.getElementById(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`), false);}
        }
         for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i++){
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].project == activeProject) {
                _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].writeToDOM();
            }
        }
    }
    writeToDOM() {
        const thisProjectButton = document.createElement("button");
        thisProjectButton.classList.add("tab-btn", "project");
        thisProjectButton.id = this.projectName;
        thisProjectButton.textContent = this.projectName;
        document.getElementById("projects").appendChild(thisProjectButton);
        this.turnActive(thisProjectButton);
        thisProjectButton.addEventListener("click", () => this.sortProject());
    }

    initialize() {
        this.writeToDOM();
        localStorage.setItem("projects", JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects))
    }

    removeProject() {
        document.getElementById(this.projectName).remove()
        _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(this), 1)
        localStorage.setItem("projects", JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects))
    }
}

class Task {
    constructor(title, details, dueDate, priority = "Low", project = "", completed = false){
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.completed = completed;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push(this)
        this.detailsExist = false;
    }
    set definePriority(priority) {
        this.priority = priority
    }

    addPriorityStyle(item) {
        const priority = this.priority.toLowerCase();
            item.classList.add(priority + "Priority")
    }
    removeTask(whatToDelete, spliceOrNot = true) {
        if(spliceOrNot) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks.indexOf(this), 1)
           localStorage.setItem("tasks", JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks))
        }
        whatToDelete.remove()
    }
            
    writeToDOM() {
        const task = document.createElement("div");
        task.classList.add("spread");
        task.id = `${this.title}.task`;
            const title = document.createElement("p");
            title.textContent = this.title;
            task.appendChild(title);
            const everythingElse = document.createElement("div");
            everythingElse.classList.add("details")
            const dueDate = document.createElement("p");
            dueDate.textContent = this.dueDate;
            everythingElse.appendChild(dueDate);
            const details = document.createElement("button");
            details.textContent = "Details";
            details.addEventListener("click", () => this.toggleDetails())
            everythingElse.appendChild(details);
            this.addPriorityStyle(task)
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => this.removeTask(task))
            everythingElse.appendChild(deleteButton)
            task.appendChild(everythingElse)
        document.getElementById("content").appendChild(task)    
    }
    initialize() {
        this.writeToDOM();
        localStorage.setItem("tasks", JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks))
    }

    toggleDetails() {
        if(!this.detailsExist){
            const thisTask = document.getElementById(`${this.title}.task`);
            const taskDetailsDiv = document.createElement("div");
            const taskDetails = document.createElement("div");
            taskDetails.classList.add("taskDetailsHandler")
            taskDetailsDiv.id = `${this.title}.details`;
                const taskDetailsProject = document.createElement("p");
                    this.project == "generalButton"? taskDetailsProject.textContent = `No project assignment` : taskDetailsProject.textContent = `Project name: ${this.project}`;
                    taskDetails.appendChild(taskDetailsProject);
                const taskDetailsDetails = document.createElement("p");
                    taskDetailsDetails.textContent = `Details: ${this.details}`;
                    taskDetails.appendChild(taskDetailsDetails);
                const taskDetailsPriority = document.createElement("p");
                    taskDetailsPriority.textContent = `Priority: ${this.priority}`;
                    taskDetails.appendChild(taskDetailsPriority);
                    taskDetailsDiv.appendChild(taskDetails);
                    thisTask.appendChild(taskDetailsDiv);
                    this.detailsExist = true;
        } else {
            document.getElementById(`${this.title}.details`).classList.toggle("hidden");
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
function toggleBackgroundBlur(){
document.querySelector(".header-div").classList.toggle("blur");
document.querySelector(".planner").classList.toggle("blur");
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
    const newTaskHeader = document.createElement("div");
            newTaskHeader.classList.add("newTaskHeader");
            const headerText = document.createElement("div");
            headerText.textContent = "Create new...";
            const closingDiv = document.createElement("div");
            closingDiv.classList.add("closingDiv")
            closingDiv.textContent = "x";
            closingDiv.onclick = () => closeNewTaskSideBar(document.querySelector(".newTaskWindow"))
            newTaskHeader.appendChild(headerText);
            newTaskHeader.appendChild(closingDiv);
        window.appendChild(newTaskHeader);
}


function closeNewTaskSideBar(tab) {
    (0,_toggleBackgroundBlur__WEBPACK_IMPORTED_MODULE_0__.toggleBackgroundBlur)();
    tab.classList.add("hidden");

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
     const localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
     for(let i = 0; i < localTasks.length; i++) {
          const newTask = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Task(localTasks[i].title, localTasks[i].details, localTasks[i].dueDate, localTasks[i].priority, localTasks[i].project,localTasks[i].completed)
          newTask.initialize()
     }
     const localProjects = JSON.parse(localStorage.getItem("projects")) || [];
     for(let i = 0; i < localProjects.length; i++) {
          const newProject = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project(localProjects[i].name)
          newProject.initialize();
     }
     
     (0,_defineCurrentProject__WEBPACK_IMPORTED_MODULE_0__.defineActive)()

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
    const newTaskSidebar = document.createElement("div");
        newTaskSidebar.classList.add("newTaskSideBar");
            const projectOrTask = document.createElement("div");
                projectOrTask.classList.add("projectOrTask")
                const taskButton = document.createElement("button");
                taskButton.classList.add("tab-btn", "activeBtn")
                taskButton.id = "taskBtn"
                taskButton.textContent = "Task";
                const projectButton = document.createElement("button");
                projectButton.classList.add("tab-btn", "inactiveBtn")
                projectButton.id = "projectBtn"
                projectButton.textContent = "Project"
                projectOrTask.appendChild(taskButton);
                projectOrTask.appendChild(projectButton);
            newTaskSidebar.appendChild(projectOrTask);
        window.appendChild(newTaskSidebar)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0M0RDtBQUNMO0FBQ3ZEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlFQUFtQixDQUFDLGdFQUFhO0FBQzdFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYbUM7QUFDSztBQUNIO0FBQ2lCO0FBQ3REO0FBQzZEO0FBQzdEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQUksc0pBQXNKLGdFQUFhO0FBQ25NO0FBQ0EsUUFBUSwyRUFBbUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLG1DQUFtQyxrREFBTztBQUMxQztBQUNBLFlBQVksMkVBQW1CO0FBQy9CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ3NCO0FBQ3RCO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUMxQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLElBQUksMkNBQVksRUFBRTtBQUNyQyxzQ0FBc0Msb0NBQUssVUFBVSxTQUFTLG9DQUFLLDBDQUEwQyxvQ0FBSyxVQUFVO0FBQzVIO0FBQ0Esb0JBQW9CLElBQUksMkNBQVksRUFBRTtBQUN0QyxZQUFZLG9DQUFLO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNac0Q7QUFDTTtBQUNwQjtBQUNzQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNzQjtBQUN0QjtBQUNBO0FBQ087QUFDUCxJQUFJLDRFQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFXO0FBQ3ZCLFlBQVkseUVBQW1CO0FBQy9CLFlBQVkscURBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQSxDQUEyRDtBQUNLO0FBQ2hFLENBQXVFO0FBQ3ZFLENBQXFEO0FBQ3JEO0FBQ0E7QUFDZTtBQUNHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsOEVBQW9CO0FBQzlEO0FBQ0E7QUFDQSx3Q0FBd0MsZ0VBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsdUZBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLG1FQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ1QjtBQUNNO0FBQ3REO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQWdCO0FBQ3BCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJtQztBQUNHO0FBQ21CO0FBQ3pEO0FBQ087QUFDUDtBQUNBO0FBQ0EsUUFBUSxvREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0VBQVk7QUFDMUMsdUJBQXVCLElBQUksbURBQVksRUFBRTtBQUN6QywwQ0FBMEMsNENBQUssVUFBVSxTQUFTLDRDQUFLLDBDQUEwQyw0Q0FBSyxVQUFVO0FBQ2hJO0FBQ0Esd0JBQXdCLElBQUksbURBQVksRUFBRTtBQUMxQyxlQUFlLDRDQUFLO0FBQ3BCLGdCQUFnQiw0Q0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsK0NBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFlLENBQUMsdURBQWdCO0FBQ3hDLHdEQUF3RCwrQ0FBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFZLENBQUMsb0RBQWE7QUFDdEMsd0RBQXdELDRDQUFLO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsNENBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsV0FBVztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBLGtLQUFrSyxhQUFhO0FBQy9LO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBO0FBQ0EsbUVBQW1FLGNBQWM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25JTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0g4RDtBQUM5RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSwyRUFBb0I7QUFDeEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJzRDtBQUNQO0FBQy9DO0FBQ087QUFDUDtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0MsOEJBQThCLCtDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUMsaUNBQWlDLGtEQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUssbUVBQVk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVET01Gb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvcm1TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFza09yUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWZpbmVDdXJyZW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5QWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheU5ld1Rhc2tXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdENsYXNzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZ2dsZUJhY2tncm91bmRCbHVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlSGVhZGVyRm9yTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVOZXdUYXNrU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRm9ybShmb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGl0bGUuaWQgPSBcInRpdGxlXCJcclxuICAgICAgICB0aXRsZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCJcclxuICAgICAgICB0aXRsZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGRhdGUuaWQgPSBcImRhdGVcIjtcclxuICAgICAgICAgICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbiAgICAgICAgICAgIGRhdGUucmVxdWlyZWQgPSB0cnVlXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKVxyXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkZXRhaWxzLmlkID0gXCJkZXRhaWxzXCI7XHJcbiAgICAgICAgZGV0YWlscy50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgZGV0YWlscy5wbGFjZWhvbGRlciA9IFwiRGV0YWlscyBhYm91dCB5b3VyIHRhc2tcIlxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlscylcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcmlvcml0eS50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgICAgICAgcHJpb3JpdHkuaWQgPSBcInByaW9yaXR5QnV0dG9uXCI7XHJcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZvcm0tYnV0dG9uc1wiLCBcImxvd1ByaW9yaXR5XCIpO1xyXG4gICAgICAgIHByaW9yaXR5Lm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSlcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShub2RlKXtcclxuICAgIGlmKG5vZGUudGV4dENvbnRlbnQgPT0gXCJMb3dcIikge1xyXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVByaW9yaXR5XCIpO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImxvd1ByaW9yaXR5XCIpO1xyXG4gICAgfSBlbHNlIGlmKG5vZGUudGV4dENvbnRlbnQgPT0gXCJNZWRpdW1cIikge1xyXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibWVkaXVtUHJpb3JpdHlcIik7XHJcbiAgICB9ZWxzZSBpZihub2RlLnRleHRDb250ZW50ID09IFwiSGlnaFwiKXtcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gXCJMb3dcIlxyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hQcmlvcml0eVwiKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVUYXNrT3JQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlVGFza09yUHJvamVjdFwiO1xyXG5pbXBvcnQgeyB0YXNrT3JQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheU5ld1Rhc2tXaW5kb3dcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtU3VibWl0KHdpbmRvdykge1xyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xyXG5zdWJtaXRCdXR0b24uaWQ9XCJzdWJtaXRcIjtcclxuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbnNcIik7XHJcbndpbmRvdy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4gY3JlYXRlVGFza09yUHJvamVjdCh0YXNrT3JQcm9qZWN0KSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHByb2plY3RzLCB0YXNrcyB9IGZyb20gXCIuXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RDbGFzc1wiXHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIlxyXG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3RcIlxyXG5cclxuaW1wb3J0IHsgY2xvc2VOZXdUYXNrU2lkZUJhciB9IGZyb20gXCIuL3dyaXRlSGVhZGVyRm9yTmV3VGFza1wiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza09yUHJvamVjdCh0YXNrT3JQcm9qZWN0KSB7XHJcbiAgICBcclxuICAgIGlmKHRhc2tPclByb2plY3QgPT0gXCJUYXNrXCIpIHtcclxuICAgICAgICBjb25zdCBkZWZpbmVkRGF0ZSA9IG1vbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUpLmZvcm1hdChcIkREL01NL1lZWVlcIilcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzXCIpLnZhbHVlLGRlZmluZWREYXRlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5QnV0dG9uXCIpLnRleHRDb250ZW50LCBhY3RpdmVQcm9qZWN0LCBmYWxzZSlcclxuICAgICAgICBuZXdUYXNrLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjbG9zZU5ld1Rhc2tTaWRlQmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VGFza1dpbmRvd1wiKSlcclxuICAgIH1cclxuICAgIGlmKHRhc2tPclByb2plY3QgPT0gXCJQcm9qZWN0XCIpIHtcclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLnZhbHVlKSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikudmFsdWUgPSBcIkVycm9yLCBkdXBsaWNhdGUgcHJvamVjdFwiXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikudmFsdWUgPT0gXCJFcnJvciwgZHVwbGljYXRlIHByb2plY3RcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS52YWx1ZSlcclxuICAgICAgICAgICAgbmV3UHJvamVjdC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIGNsb3NlTmV3VGFza1NpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrV2luZG93XCIpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImxldCBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuaWRcclxuZXhwb3J0IHthY3RpdmVQcm9qZWN0fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUFjdGl2ZSgpIHtcclxuICAgIGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5pZFxyXG4gICAgcmV0dXJuIGFjdGl2ZVByb2plY3RcclxufSIsImltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi5cIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIikuZm9yRWFjaCgoYWN0aXZlKSA9PiBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSApXHJcbiAgICBnZW5lcmFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrc1tpXS50aXRsZX0udGFza2ApKXt0YXNrc1tpXS5yZW1vdmVUYXNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCksIGZhbHNlKTt9XHJcbiAgICB9XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGFza3NbaV0ud3JpdGVUb0RPTSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgd3JpdGVIZWFkZXIgfSBmcm9tIFwiLi93cml0ZUhlYWRlckZvck5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgd3JpdGVOZXdUYXNrU2lkZWJhciB9IGZyb20gXCIuL3dyaXRlTmV3VGFza1NpZGViYXJcIjtcclxuaW1wb3J0IHsgbmV3Rm9ybSB9IGZyb20gXCIuL25ld1Rhc2tGb3JtXCI7XHJcbmltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSBcIi4vdG9nZ2xlQmFja2dyb3VuZEJsdXJcIjtcclxubGV0IG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSBmYWxzZTtcclxuY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5ld1Rhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGV0IHRhc2tPclByb2plY3QgPSBcIlRhc2tcIjtcclxuZXhwb3J0IHt0YXNrT3JQcm9qZWN0fVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TmV3VGFza1dpbmRvdyh3aW5kb3cpIHtcclxuICAgIHRvZ2dsZUJhY2tncm91bmRCbHVyKClcclxuICAgIGlmKCFuZXdUYXNrV2luZG93RXhpc3RzKSB7XHJcbiAgICAgICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKFwibmV3VGFza1dpbmRvd1wiKTtcclxuICAgICAgICBuZXdUYXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0NvbnRlbnRcIilcclxuICAgICAgICAgICAgd3JpdGVIZWFkZXIobmV3VGFza1dpbmRvdyk7XHJcbiAgICAgICAgICAgIHdyaXRlTmV3VGFza1NpZGViYXIobmV3VGFza0NvbnRlbnQpO1xyXG4gICAgICAgICAgICBuZXdGb3JtKG5ld1Rhc2tDb250ZW50KTtcclxuICAgICAgICAgICAgbmV3VGFza1dpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGVudClcclxuICAgICAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tXaW5kb3cpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICBhZGRCdXR0b25MaXN0ZW5lcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheUZvcm0oXCJUYXNrXCIpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheUZvcm0oXCJQcm9qZWN0XCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZvcm0oaXNUYXNrT3JQcm9qZWN0KSB7XHJcbiAgICBpZihpc1Rhc2tPclByb2plY3QgPT0gXCJUYXNrXCIpIHtcclxuICAgICAgICB0YXNrT3JQcm9qZWN0ID0gXCJUYXNrXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVCdG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVCdG5cIilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlQnRuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQnRuXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tPclByb2plY3QgPSBcIlByb2plY3RcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZUJ0blwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUJ0blwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVCdG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVCdG5cIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIiBpbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3QuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheU5ld1Rhc2tXaW5kb3d9IGZyb20gXCIuL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzXCI7XHJcbiBpbXBvcnQge3dyaXRlTG9jYWxTdG9yYWdlQ29udGVudH0gZnJvbSBcIi4vd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50LmpzXCJcclxuIGltcG9ydCB7ZGlzcGxheUFsbFRhc2tzfSBmcm9tIFwiLi9kaXNwbGF5QWxsVGFza3MuanNcIlxyXG5sZXQgcHJvamVjdHMgPSBbXVxyXG5sZXQgdGFza3MgPSBbXTtcclxuZXhwb3J0IHt0YXNrc307XHJcbmV4cG9ydCB7cHJvamVjdHN9O1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdCdXR0b25cIik7XHJcbm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheU5ld1Rhc2tXaW5kb3coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpKSk7XHJcblxyXG5jb25zdCBnZW5lcmFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmFsQnV0dG9uXCIpO1xyXG5nZW5lcmFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVGFza3MpXHJcblxyXG5cclxuXHJcbndyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpXHJcblxyXG5cclxuY29uc29sZS5sb2coYWN0aXZlUHJvamVjdCkiLCJpbXBvcnQgeyBjcmVhdGVET01Gb3JtIH0gZnJvbSBcIi4vY3JlYXRlRE9NRm9ybVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtU3VibWl0IH0gZnJvbSBcIi4vY3JlYXRlRm9ybVN1Ym1pdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0Zvcm0od2luZG93LCB0YXNrT3JQcm9qZWN0ID0gXCJUYXNrXCIpIHtcclxuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRm9ybUNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLmlkID0gXCJuZXdUYXNrRm9ybVwiXHJcbiAgICAgICAgICAgICAgIGNyZWF0ZURPTUZvcm0obmV3VGFza0Zvcm0pXHJcbiAgICAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLmlkID0gXCJuZXdQcm9qZWN0Rm9ybVwiOyAgIFxyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0udHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0ucGxhY2Vob2xkZXIgPSBcIk5hbWUgeW91ciBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcclxuXHJcbiAgICBjcmVhdGVGb3JtU3VibWl0KG5ld1Rhc2tXaW5kb3dDb250ZW50KVxyXG4gICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tXaW5kb3dDb250ZW50KVxyXG59ICAgXHJcblxyXG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3QuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vbWVEb1Byb2pldG8pe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5vbWVEb1Byb2pldG9cclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXHJcbiAgICB9XHJcbiAgICB0dXJuQWN0aXZlKGJ1dHRvbikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikgKVxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRQcm9qZWN0KCkge1xyXG4gICAgICAgIHRoaXMudHVybkFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb2plY3ROYW1lKSlcclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZGVmaW5lQWN0aXZlKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCkpe3Rhc2tzW2ldLnJlbW92ZVRhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSwgZmFsc2UpO31cclxuICAgICAgICB9XHJcbiAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRhc2tzW2ldLnByb2plY3QgPT0gYWN0aXZlUHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGFza3NbaV0ud3JpdGVUb0RPTSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3JpdGVUb0RPTSgpIHtcclxuICAgICAgICBjb25zdCB0aGlzUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpc1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhYi1idG5cIiwgXCJwcm9qZWN0XCIpO1xyXG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLmlkID0gdGhpcy5wcm9qZWN0TmFtZTtcclxuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdE5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKS5hcHBlbmRDaGlsZCh0aGlzUHJvamVjdEJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy50dXJuQWN0aXZlKHRoaXNQcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zb3J0UHJvamVjdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMud3JpdGVUb0RPTSgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9qZWN0TmFtZSkucmVtb3ZlKClcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZih0aGlzKSwgMSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5ID0gXCJMb3dcIiwgcHJvamVjdCA9IFwiXCIsIGNvbXBsZXRlZCA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgICAgIHRhc2tzLnB1c2godGhpcylcclxuICAgICAgICB0aGlzLmRldGFpbHNFeGlzdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlZmluZVByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJpb3JpdHlTdHlsZShpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0aGlzLnByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSArIFwiUHJpb3JpdHlcIilcclxuICAgIH1cclxuICAgIHJlbW92ZVRhc2sod2hhdFRvRGVsZXRlLCBzcGxpY2VPck5vdCA9IHRydWUpIHtcclxuICAgICAgICBpZihzcGxpY2VPck5vdCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0aGlzKSwgMSlcclxuICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hhdFRvRGVsZXRlLnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgd3JpdGVUb0RPTSgpIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJzcHJlYWRcIik7XHJcbiAgICAgICAgdGFzay5pZCA9IGAke3RoaXMudGl0bGV9LnRhc2tgO1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zdCBldmVyeXRoaW5nRWxzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGV2ZXJ5dGhpbmdFbHNlLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRoaXMuZHVlRGF0ZTtcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XHJcbiAgICAgICAgICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlRGV0YWlscygpKVxyXG4gICAgICAgICAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRQcmlvcml0eVN0eWxlKHRhc2spXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5yZW1vdmVUYXNrKHRhc2spKVxyXG4gICAgICAgICAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZXZlcnl0aGluZ0Vsc2UpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHRhc2spICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLndyaXRlVG9ET00oKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEZXRhaWxzKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmRldGFpbHNFeGlzdCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy50aXRsZX0udGFza2ApO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZChcInRhc2tEZXRhaWxzSGFuZGxlclwiKVxyXG4gICAgICAgICAgICB0YXNrRGV0YWlsc0Rpdi5pZCA9IGAke3RoaXMudGl0bGV9LmRldGFpbHNgO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID09IFwiZ2VuZXJhbEJ1dHRvblwiPyB0YXNrRGV0YWlsc1Byb2plY3QudGV4dENvbnRlbnQgPSBgTm8gcHJvamVjdCBhc3NpZ25tZW50YCA6IHRhc2tEZXRhaWxzUHJvamVjdC50ZXh0Q29udGVudCA9IGBQcm9qZWN0IG5hbWU6ICR7dGhpcy5wcm9qZWN0fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNQcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzRGV0YWlscy50ZXh0Q29udGVudCA9IGBEZXRhaWxzOiAke3RoaXMuZGV0YWlsc31gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlsc1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNQcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0RldGFpbHNEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNUYXNrLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHNFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy50aXRsZX0uZGV0YWlsc2ApLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUJhY2tncm91bmRCbHVyKCl7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWRpdlwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYmx1clwiKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFubmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJibHVyXCIpO1xyXG59IiwiaW1wb3J0IHsgdG9nZ2xlQmFja2dyb3VuZEJsdXIgfSBmcm9tIFwiLi90b2dnbGVCYWNrZ3JvdW5kQmx1clwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSGVhZGVyKHdpbmRvdykge1xyXG4gICAgY29uc3QgbmV3VGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tIZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3Li4uXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjbG9zaW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG9zaW5nRGl2XCIpXHJcbiAgICAgICAgICAgIGNsb3NpbmdEaXYudGV4dENvbnRlbnQgPSBcInhcIjtcclxuICAgICAgICAgICAgY2xvc2luZ0Rpdi5vbmNsaWNrID0gKCkgPT4gY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tXaW5kb3dcIikpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2luZ0Rpdik7XHJcbiAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tIZWFkZXIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTmV3VGFza1NpZGVCYXIodGFiKSB7XHJcbiAgICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xyXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG59IiwiaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3RcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgVGFzayB9IGZyb20gXCIuL3Byb2plY3RDbGFzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpIHtcclxuICAgICBjb25zdCBsb2NhbFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcclxuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGxvY2FsVGFza3NbaV0udGl0bGUsIGxvY2FsVGFza3NbaV0uZGV0YWlscywgbG9jYWxUYXNrc1tpXS5kdWVEYXRlLCBsb2NhbFRhc2tzW2ldLnByaW9yaXR5LCBsb2NhbFRhc2tzW2ldLnByb2plY3QsbG9jYWxUYXNrc1tpXS5jb21wbGV0ZWQpXHJcbiAgICAgICAgICBuZXdUYXNrLmluaXRpYWxpemUoKVxyXG4gICAgIH1cclxuICAgICBjb25zdCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcclxuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGxvY2FsUHJvamVjdHNbaV0ubmFtZSlcclxuICAgICAgICAgIG5ld1Byb2plY3QuaW5pdGlhbGl6ZSgpO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBkZWZpbmVBY3RpdmUoKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vQVRVQUw6IFBPUiBBTEdVTSBNT1RJVk8gQSBMSU5IQSA5IE7Dg08gRlVOQ0lPTkEsIEZJWCBUSEFUIEFORCBZT1UgV0lOIiwiZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTmV3VGFza1NpZGViYXIod2luZG93KSB7XHJcbiAgICBjb25zdCBuZXdUYXNrU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3VGFza1NpZGViYXIuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tTaWRlQmFyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T3JUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RPclRhc2suY2xhc3NMaXN0LmFkZChcInByb2plY3RPclRhc2tcIilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFiLWJ0blwiLCBcImFjdGl2ZUJ0blwiKVxyXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi5pZCA9IFwidGFza0J0blwiXHJcbiAgICAgICAgICAgICAgICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJUYXNrXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhYi1idG5cIiwgXCJpbmFjdGl2ZUJ0blwiKVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5pZCA9IFwicHJvamVjdEJ0blwiXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgIHByb2plY3RPclRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xyXG4gICAgICAgICAgICBuZXdUYXNrU2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0T3JUYXNrKTtcclxuICAgICAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1NpZGViYXIpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9