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





function createTaskOrProject(taskOrProject) {
    if(taskOrProject == "Task") {
        const definedDate = moment(document.getElementById("date").value).format("DD/MM/YYYY")
        const newTask = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Task(document.getElementById("title").value, document.getElementById("details").value,definedDate, document.getElementById("priorityButton").textContent, _defineCurrentProject__WEBPACK_IMPORTED_MODULE_2__.activeProject, false)
        newTask.initialize();
        console.log(___WEBPACK_IMPORTED_MODULE_0__.tasks);
    }
    if(taskOrProject == "Project") {
        const newProject = new _projectClass__WEBPACK_IMPORTED_MODULE_1__.Project(document.getElementById("newProjectForm").value)
        newProject.initialize();
        console.log(___WEBPACK_IMPORTED_MODULE_0__.projects);
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
        if(document.getElementById(___WEBPACK_IMPORTED_MODULE_0__.tasks[i].title)){___WEBPACK_IMPORTED_MODULE_0__.tasks[i].removeTask(document.getElementById(___WEBPACK_IMPORTED_MODULE_0__.tasks[i].title), false);}
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



let newTaskWindowExists = false;
const newTaskWindow = document.createElement("div");
const newTaskContent = document.createElement("div");
let taskOrProject = "Task";



function displayNewTaskWindow(window) {
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
            if(document.getElementById(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title)){_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].removeTask(document.getElementById(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title), false);}
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
        task.id = this.title;
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
            details.addEventListener("click", () => console.log("detalhes"))
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

}

/***/ }),

/***/ "./src/writeHeaderForNewTask.js":
/*!**************************************!*\
  !*** ./src/writeHeaderForNewTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeHeader": () => (/* binding */ writeHeader)
/* harmony export */ });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRE9NRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVGb3JtU3VibWl0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2tPclByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGVmaW5lQ3VycmVudFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheUFsbFRhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZUhlYWRlckZvck5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlTmV3VGFza1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURPTUZvcm0oZm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRpdGxlLmlkID0gXCJ0aXRsZVwiXHJcbiAgICAgICAgdGl0bGUudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiXHJcbiAgICAgICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBkYXRlLmlkID0gXCJkYXRlXCI7XHJcbiAgICAgICAgICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgICAgICAgICBkYXRlLnJlcXVpcmVkID0gdHJ1ZVxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSlcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZGV0YWlscy5pZCA9IFwiZGV0YWlsc1wiO1xyXG4gICAgICAgIGRldGFpbHMudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGRldGFpbHMucGxhY2Vob2xkZXIgPSBcIkRldGFpbHMgYWJvdXQgeW91ciB0YXNrXCJcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcHJpb3JpdHkudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgICAgIHByaW9yaXR5LmlkID0gXCJwcmlvcml0eUJ1dHRvblwiO1xyXG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbnNcIiwgXCJsb3dQcmlvcml0eVwiKTtcclxuICAgICAgICBwcmlvcml0eS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlUHJpb3JpdHkocHJpb3JpdHkpXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkobm9kZSl7XHJcbiAgICBpZihub2RlLnRleHRDb250ZW50ID09IFwiTG93XCIpIHtcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Qcmlvcml0eVwiKTtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3dQcmlvcml0eVwiKTtcclxuICAgIH0gZWxzZSBpZihub2RlLnRleHRDb250ZW50ID09IFwiTWVkaXVtXCIpIHtcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIm1lZGl1bVByaW9yaXR5XCIpO1xyXG4gICAgfWVsc2UgaWYobm9kZS50ZXh0Q29udGVudCA9PSBcIkhpZ2hcIil7XHJcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiTG93XCJcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb3dQcmlvcml0eVwiKTtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoUHJpb3JpdHlcIik7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgY3JlYXRlVGFza09yUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tPclByb2plY3RcIjtcclxuaW1wb3J0IHsgdGFza09yUHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlOZXdUYXNrV2luZG93XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVN1Ym1pdCh3aW5kb3cpIHtcclxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcclxuc3VibWl0QnV0dG9uLmlkPVwic3VibWl0XCI7XHJcbnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idXR0b25zXCIpO1xyXG53aW5kb3cuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IGNyZWF0ZVRhc2tPclByb2plY3QodGFza09yUHJvamVjdCkpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgdGFza3MgfSBmcm9tIFwiLlwiXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIlxyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vcHJvamVjdENsYXNzXCJcclxuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gXCIuL2RlZmluZUN1cnJlbnRQcm9qZWN0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrT3JQcm9qZWN0KHRhc2tPclByb2plY3QpIHtcclxuICAgIGlmKHRhc2tPclByb2plY3QgPT0gXCJUYXNrXCIpIHtcclxuICAgICAgICBjb25zdCBkZWZpbmVkRGF0ZSA9IG1vbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUpLmZvcm1hdChcIkREL01NL1lZWVlcIilcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzXCIpLnZhbHVlLGRlZmluZWREYXRlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5QnV0dG9uXCIpLnRleHRDb250ZW50LCBhY3RpdmVQcm9qZWN0LCBmYWxzZSlcclxuICAgICAgICBuZXdUYXNrLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcbiAgICB9XHJcbiAgICBpZih0YXNrT3JQcm9qZWN0ID09IFwiUHJvamVjdFwiKSB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikudmFsdWUpXHJcbiAgICAgICAgbmV3UHJvamVjdC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgfVxyXG59IiwibGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5pZFxyXG5leHBvcnQge2FjdGl2ZVByb2plY3R9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lQWN0aXZlKCkge1xyXG4gICAgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmlkXHJcbiAgICByZXR1cm4gYWN0aXZlUHJvamVjdFxyXG59IiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLlwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKS5mb3JFYWNoKChhY3RpdmUpID0+IGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpIClcclxuICAgIGdlbmVyYWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tzW2ldLnRpdGxlKSl7dGFza3NbaV0ucmVtb3ZlVGFzayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrc1tpXS50aXRsZSksIGZhbHNlKTt9XHJcbiAgICB9XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGFza3NbaV0ud3JpdGVUb0RPTSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgd3JpdGVIZWFkZXIgfSBmcm9tIFwiLi93cml0ZUhlYWRlckZvck5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgd3JpdGVOZXdUYXNrU2lkZWJhciB9IGZyb20gXCIuL3dyaXRlTmV3VGFza1NpZGViYXJcIjtcclxuaW1wb3J0IHsgbmV3Rm9ybSB9IGZyb20gXCIuL25ld1Rhc2tGb3JtXCI7XHJcbmxldCBuZXdUYXNrV2luZG93RXhpc3RzID0gZmFsc2U7XHJcbmNvbnN0IG5ld1Rhc2tXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBuZXdUYXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmxldCB0YXNrT3JQcm9qZWN0ID0gXCJUYXNrXCI7XHJcbmV4cG9ydCB7dGFza09yUHJvamVjdH1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU5ld1Rhc2tXaW5kb3cod2luZG93KSB7XHJcbiAgICBpZighbmV3VGFza1dpbmRvd0V4aXN0cykge1xyXG4gICAgICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tXaW5kb3dcIik7XHJcbiAgICAgICAgbmV3VGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tDb250ZW50XCIpXHJcbiAgICAgICAgICAgIHdyaXRlSGVhZGVyKG5ld1Rhc2tXaW5kb3cpO1xyXG4gICAgICAgICAgICB3cml0ZU5ld1Rhc2tTaWRlYmFyKG5ld1Rhc2tDb250ZW50KTtcclxuICAgICAgICAgICAgbmV3Rm9ybShuZXdUYXNrQ29udGVudCk7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRlbnQpXHJcbiAgICAgICAgICAgIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrV2luZG93KVxyXG4gICAgICAgICAgICBuZXdUYXNrV2luZG93RXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWRkQnV0dG9uTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlGb3JtKFwiVGFza1wiKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlGb3JtKFwiUHJvamVjdFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKGlzVGFza09yUHJvamVjdCkge1xyXG4gICAgaWYoaXNUYXNrT3JQcm9qZWN0ID09IFwiVGFza1wiKSB7XHJcbiAgICAgICAgdGFza09yUHJvamVjdCA9IFwiVGFza1wiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RCdG5cIikuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlQnRuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlQnRuXCIpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZUJ0blwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZUJ0blwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrT3JQcm9qZWN0ID0gXCJQcm9qZWN0XCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVCdG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVCdG5cIilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlQnRuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQnRuXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIgaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gXCIuL2RlZmluZUN1cnJlbnRQcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlOZXdUYXNrV2luZG93fSBmcm9tIFwiLi9kaXNwbGF5TmV3VGFza1dpbmRvdy5qc1wiO1xyXG4gaW1wb3J0IHt3cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnR9IGZyb20gXCIuL3dyaXRlTG9jYWxTdG9yYWdlQ29udGVudC5qc1wiXHJcbiBpbXBvcnQge2Rpc3BsYXlBbGxUYXNrc30gZnJvbSBcIi4vZGlzcGxheUFsbFRhc2tzLmpzXCJcclxubGV0IHByb2plY3RzID0gW11cclxubGV0IHRhc2tzID0gW107XHJcbmV4cG9ydCB7dGFza3N9O1xyXG5leHBvcnQge3Byb2plY3RzfTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3QnV0dG9uXCIpO1xyXG5uZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpc3BsYXlOZXdUYXNrV2luZG93KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKSkpO1xyXG5cclxuY29uc3QgZ2VuZXJhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VuZXJhbEJ1dHRvblwiKTtcclxuZ2VuZXJhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUFsbFRhc2tzKVxyXG5cclxuXHJcblxyXG53cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQoKVxyXG5cclxuXHJcbmNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QpIiwiaW1wb3J0IHsgY3JlYXRlRE9NRm9ybSB9IGZyb20gXCIuL2NyZWF0ZURPTUZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9ybVN1Ym1pdCB9IGZyb20gXCIuL2NyZWF0ZUZvcm1TdWJtaXRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdGb3JtKHdpbmRvdywgdGFza09yUHJvamVjdCA9IFwiVGFza1wiKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrV2luZG93Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdUYXNrV2luZG93Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0Zvcm1Db250ZW50XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5pZCA9IFwibmV3VGFza0Zvcm1cIlxyXG4gICAgICAgICAgICAgICBjcmVhdGVET01Gb3JtKG5ld1Rhc2tGb3JtKVxyXG4gICAgICAgICAgICAgICBuZXdUYXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSlcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXHJcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybS5pZCA9IFwibmV3UHJvamVjdEZvcm1cIjsgICBcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLnBsYWNlaG9sZGVyID0gXCJOYW1lIHlvdXIgcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICBuZXdUYXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XHJcblxyXG4gICAgY3JlYXRlRm9ybVN1Ym1pdChuZXdUYXNrV2luZG93Q29udGVudClcclxuICAgIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrV2luZG93Q29udGVudClcclxufSAgIFxyXG5cclxuIiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGRlZmluZUFjdGl2ZSB9IGZyb20gXCIuL2RlZmluZUN1cnJlbnRQcm9qZWN0LmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub21lRG9Qcm9qZXRvKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBub21lRG9Qcm9qZXRvXHJcbiAgICAgICAgcHJvamVjdHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvamVjdE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxyXG4gICAgfVxyXG4gICAgdHVybkFjdGl2ZShidXR0b24pIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKS5mb3JFYWNoKChhY3RpdmUpID0+IGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpIClcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0UHJvamVjdCgpIHtcclxuICAgICAgICB0aGlzLnR1cm5BY3RpdmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9qZWN0TmFtZSkpXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRlZmluZUFjdGl2ZSgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrc1tpXS50aXRsZSkpe3Rhc2tzW2ldLnJlbW92ZVRhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza3NbaV0udGl0bGUpLCBmYWxzZSk7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGFza3NbaV0ucHJvamVjdCA9PSBhY3RpdmVQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3cml0ZVRvRE9NKCkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFiLWJ0blwiLCBcInByb2plY3RcIik7XHJcbiAgICAgICAgdGhpc1Byb2plY3RCdXR0b24uaWQgPSB0aGlzLnByb2plY3ROYW1lO1xyXG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0TmFtZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpLmFwcGVuZENoaWxkKHRoaXNQcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICB0aGlzLnR1cm5BY3RpdmUodGhpc1Byb2plY3RCdXR0b24pO1xyXG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNvcnRQcm9qZWN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvamVjdCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb2plY3ROYW1lKS5yZW1vdmUoKVxyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHRoaXMpLCAxKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHkgPSBcIkxvd1wiLCBwcm9qZWN0ID0gXCJcIiwgY29tcGxldGVkID0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICAgICAgdGFza3MucHVzaCh0aGlzKVxyXG4gICAgfVxyXG4gICAgc2V0IGRlZmluZVByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJpb3JpdHlTdHlsZShpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0aGlzLnByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSArIFwiUHJpb3JpdHlcIilcclxuICAgIH1cclxuICAgIHJlbW92ZVRhc2sod2hhdFRvRGVsZXRlLCBzcGxpY2VPck5vdCA9IHRydWUpIHtcclxuICAgICAgICBpZihzcGxpY2VPck5vdCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0aGlzKSwgMSlcclxuICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hhdFRvRGVsZXRlLnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgd3JpdGVUb0RPTSgpIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJzcHJlYWRcIik7XHJcbiAgICAgICAgdGFzay5pZCA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5dGhpbmdFbHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcclxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xyXG4gICAgICAgICAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcclxuICAgICAgICAgICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJkZXRhbGhlc1wiKSlcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUHJpb3JpdHlTdHlsZSh0YXNrKVxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMucmVtb3ZlVGFzayh0YXNrKSlcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGV2ZXJ5dGhpbmdFbHNlKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0YXNrKSAgICBcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSGVhZGVyKHdpbmRvdykge1xyXG4gICAgY29uc3QgbmV3VGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tIZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3Li4uXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjbG9zaW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG9zaW5nRGl2XCIpXHJcbiAgICAgICAgICAgIGNsb3NpbmdEaXYudGV4dENvbnRlbnQgPSBcInhcIjtcclxuICAgICAgICAgICAgY2xvc2luZ0Rpdi5vbmNsaWNrID0gKCkgPT4gY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tXaW5kb3dcIikpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2luZ0Rpdik7XHJcbiAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tIZWFkZXIpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2VOZXdUYXNrU2lkZUJhcih0YWIpIHtcclxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxufSIsImltcG9ydCB7IGRlZmluZUFjdGl2ZSB9IGZyb20gXCIuL2RlZmluZUN1cnJlbnRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQoKSB7XHJcbiAgICAgY29uc3QgbG9jYWxUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhsb2NhbFRhc2tzW2ldLnRpdGxlLCBsb2NhbFRhc2tzW2ldLmRldGFpbHMsIGxvY2FsVGFza3NbaV0uZHVlRGF0ZSwgbG9jYWxUYXNrc1tpXS5wcmlvcml0eSwgbG9jYWxUYXNrc1tpXS5wcm9qZWN0LGxvY2FsVGFza3NbaV0uY29tcGxldGVkKVxyXG4gICAgICAgICAgbmV3VGFzay5pbml0aWFsaXplKClcclxuICAgICB9XHJcbiAgICAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChsb2NhbFByb2plY3RzW2ldLm5hbWUpXHJcbiAgICAgICAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgZGVmaW5lQWN0aXZlKClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0FUVUFMOiBQT1IgQUxHVU0gTU9USVZPIEEgTElOSEEgOSBOw4NPIEZVTkNJT05BLCBGSVggVEhBVCBBTkQgWU9VIFdJTiIsImV4cG9ydCBmdW5jdGlvbiB3cml0ZU5ld1Rhc2tTaWRlYmFyKHdpbmRvdykge1xyXG4gICAgY29uc3QgbmV3VGFza1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrU2lkZUJhclwiKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9yVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0T3JUYXNrXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhYi1idG5cIiwgXCJhY3RpdmVCdG5cIilcclxuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uaWQgPSBcInRhc2tCdG5cIlxyXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVGFza1wiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWItYnRuXCIsIFwiaW5hY3RpdmVCdG5cIilcclxuICAgICAgICAgICAgICAgIHByb2plY3RCdXR0b24uaWQgPSBcInByb2plY3RCdG5cIlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE9yVGFzay5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICAgICAgbmV3VGFza1NpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdE9yVGFzayk7XHJcbiAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tTaWRlYmFyKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==