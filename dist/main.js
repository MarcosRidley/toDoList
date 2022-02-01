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
/* harmony import */ var _defineCurrentProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineCurrentProject */ "./src/defineCurrentProject.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




function displayAllTasks() {
    console.log("clicado")
    document.querySelectorAll(".active").forEach((active) => active.classList.remove("active") )
    generalButton.classList.add("active");
    for(let i = 0; i < ___WEBPACK_IMPORTED_MODULE_1__.tasks.length; i++) {
        if(document.getElementById(___WEBPACK_IMPORTED_MODULE_1__.tasks[i].title)){___WEBPACK_IMPORTED_MODULE_1__.tasks[i].removeTask(document.getElementById(___WEBPACK_IMPORTED_MODULE_1__.tasks[i].title), false);}
    }
     for(let i = 0; i < ___WEBPACK_IMPORTED_MODULE_1__.tasks.length; i++){
            ___WEBPACK_IMPORTED_MODULE_1__.tasks[i].writeToDOM();
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
        document.getElementById("projectBtn").classList.add("inactive");
        document.getElementById("taskBtn").classList.remove("inactive");
    } else {
        taskOrProject = "Project"
        document.getElementById("newTaskForm").classList.add("hidden");
        document.getElementById("newProjectForm").classList.remove("hidden");
        document.getElementById("taskBtn").classList.add("inactive");
        document.getElementById("projectBtn").classList.remove("inactive");
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
            const details = document.createElement("p");
            details.textContent = this.details;
            task.appendChild(details);
            const dueDate = document.createElement("p");
            dueDate.textContent = this.dueDate;
            task.appendChild(dueDate);
            this.addPriorityStyle(task)
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "x";
            deleteButton.addEventListener("click", () => this.removeTask(task))
            task.appendChild(deleteButton)
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
                taskButton.classList.add("tab-btn", "active")
                taskButton.id = "taskBtn"
                taskButton.textContent = "Task";
                const projectButton = document.createElement("button");
                projectButton.classList.add("tab-btn", "inactive")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVET01Gb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZUZvcm1TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVGFza09yUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWZpbmVDdXJyZW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5QWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheU5ld1Rhc2tXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdENsYXNzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlSGVhZGVyRm9yTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVOZXdUYXNrU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRm9ybShmb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGl0bGUuaWQgPSBcInRpdGxlXCJcclxuICAgICAgICB0aXRsZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCJcclxuICAgICAgICB0aXRsZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGRhdGUuaWQgPSBcImRhdGVcIjtcclxuICAgICAgICAgICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbiAgICAgICAgICAgIGRhdGUucmVxdWlyZWQgPSB0cnVlXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKVxyXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkZXRhaWxzLmlkID0gXCJkZXRhaWxzXCI7XHJcbiAgICAgICAgZGV0YWlscy50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgZGV0YWlscy5wbGFjZWhvbGRlciA9IFwiRGV0YWlscyBhYm91dCB5b3VyIHRhc2tcIlxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlscylcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBwcmlvcml0eS50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgICAgICAgcHJpb3JpdHkuaWQgPSBcInByaW9yaXR5QnV0dG9uXCI7XHJcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZvcm0tYnV0dG9uc1wiLCBcImxvd1ByaW9yaXR5XCIpO1xyXG4gICAgICAgIHByaW9yaXR5Lm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSlcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShub2RlKXtcclxuICAgIGlmKG5vZGUudGV4dENvbnRlbnQgPT0gXCJMb3dcIikge1xyXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVByaW9yaXR5XCIpO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImxvd1ByaW9yaXR5XCIpO1xyXG4gICAgfSBlbHNlIGlmKG5vZGUudGV4dENvbnRlbnQgPT0gXCJNZWRpdW1cIikge1xyXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibWVkaXVtUHJpb3JpdHlcIik7XHJcbiAgICB9ZWxzZSBpZihub2RlLnRleHRDb250ZW50ID09IFwiSGlnaFwiKXtcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gXCJMb3dcIlxyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hQcmlvcml0eVwiKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVUYXNrT3JQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlVGFza09yUHJvamVjdFwiO1xyXG5pbXBvcnQgeyB0YXNrT3JQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheU5ld1Rhc2tXaW5kb3dcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtU3VibWl0KHdpbmRvdykge1xyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xyXG5zdWJtaXRCdXR0b24uaWQ9XCJzdWJtaXRcIjtcclxuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbnNcIik7XHJcbndpbmRvdy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4gY3JlYXRlVGFza09yUHJvamVjdCh0YXNrT3JQcm9qZWN0KSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHByb2plY3RzLCB0YXNrcyB9IGZyb20gXCIuXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RDbGFzc1wiXHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIlxyXG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3RcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tPclByb2plY3QodGFza09yUHJvamVjdCkge1xyXG4gICAgaWYodGFza09yUHJvamVjdCA9PSBcIlRhc2tcIikge1xyXG4gICAgICAgIGNvbnN0IGRlZmluZWREYXRlID0gbW9tZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIikudmFsdWUsZGVmaW5lZERhdGUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlCdXR0b25cIikudGV4dENvbnRlbnQsIGFjdGl2ZVByb2plY3QsIGZhbHNlKVxyXG4gICAgICAgIG5ld1Rhc2suaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuICAgIH1cclxuICAgIGlmKHRhc2tPclByb2plY3QgPT0gXCJQcm9qZWN0XCIpIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS52YWx1ZSlcclxuICAgICAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICB9XHJcbn0iLCJsZXQgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmlkXHJcbmV4cG9ydCB7YWN0aXZlUHJvamVjdH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVBY3RpdmUoKSB7XHJcbiAgICBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuaWRcclxuICAgIHJldHVybiBhY3RpdmVQcm9qZWN0XHJcbn0iLCJpbXBvcnQgeyBkZWZpbmVBY3RpdmUgfSBmcm9tIFwiLi9kZWZpbmVDdXJyZW50UHJvamVjdFwiO1xyXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2Fkb1wiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIikuZm9yRWFjaCgoYWN0aXZlKSA9PiBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSApXHJcbiAgICBnZW5lcmFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrc1tpXS50aXRsZSkpe3Rhc2tzW2ldLnJlbW92ZVRhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza3NbaV0udGl0bGUpLCBmYWxzZSk7fVxyXG4gICAgfVxyXG4gICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRhc2tzW2ldLndyaXRlVG9ET00oKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHdyaXRlSGVhZGVyIH0gZnJvbSBcIi4vd3JpdGVIZWFkZXJGb3JOZXdUYXNrXCI7XHJcbmltcG9ydCB7IHdyaXRlTmV3VGFza1NpZGViYXIgfSBmcm9tIFwiLi93cml0ZU5ld1Rhc2tTaWRlYmFyXCI7XHJcbmltcG9ydCB7IG5ld0Zvcm0gfSBmcm9tIFwiLi9uZXdUYXNrRm9ybVwiO1xyXG5sZXQgbmV3VGFza1dpbmRvd0V4aXN0cyA9IGZhbHNlO1xyXG5jb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgbmV3VGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZXQgdGFza09yUHJvamVjdCA9IFwiVGFza1wiO1xyXG5leHBvcnQge3Rhc2tPclByb2plY3R9XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlOZXdUYXNrV2luZG93KHdpbmRvdykge1xyXG4gICAgaWYoIW5ld1Rhc2tXaW5kb3dFeGlzdHMpIHtcclxuICAgICAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrV2luZG93XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrQ29udGVudFwiKVxyXG4gICAgICAgICAgICB3cml0ZUhlYWRlcihuZXdUYXNrV2luZG93KTtcclxuICAgICAgICAgICAgd3JpdGVOZXdUYXNrU2lkZWJhcihuZXdUYXNrQ29udGVudCk7XHJcbiAgICAgICAgICAgIG5ld0Zvcm0obmV3VGFza0NvbnRlbnQpO1xyXG4gICAgICAgICAgICBuZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250ZW50KVxyXG4gICAgICAgICAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1dpbmRvdylcclxuICAgICAgICAgICAgbmV3VGFza1dpbmRvd0V4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXJzKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5Rm9ybShcIlRhc2tcIikpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5Rm9ybShcIlByb2plY3RcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybShpc1Rhc2tPclByb2plY3QpIHtcclxuICAgIGlmKGlzVGFza09yUHJvamVjdCA9PSBcIlRhc2tcIikge1xyXG4gICAgICAgIHRhc2tPclByb2plY3QgPSBcIlRhc2tcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrT3JQcm9qZWN0ID0gXCJQcm9qZWN0XCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIiBpbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3QuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheU5ld1Rhc2tXaW5kb3d9IGZyb20gXCIuL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzXCI7XHJcbiBpbXBvcnQge3dyaXRlTG9jYWxTdG9yYWdlQ29udGVudH0gZnJvbSBcIi4vd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50LmpzXCJcclxuIGltcG9ydCB7ZGlzcGxheUFsbFRhc2tzfSBmcm9tIFwiLi9kaXNwbGF5QWxsVGFza3MuanNcIlxyXG5sZXQgcHJvamVjdHMgPSBbXVxyXG5sZXQgdGFza3MgPSBbXTtcclxuZXhwb3J0IHt0YXNrc307XHJcbmV4cG9ydCB7cHJvamVjdHN9O1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdCdXR0b25cIik7XHJcbm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheU5ld1Rhc2tXaW5kb3coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpKSk7XHJcblxyXG5jb25zdCBnZW5lcmFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmFsQnV0dG9uXCIpO1xyXG5nZW5lcmFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVGFza3MpXHJcblxyXG5cclxuXHJcbndyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpXHJcblxyXG5cclxuY29uc29sZS5sb2coYWN0aXZlUHJvamVjdCkiLCJpbXBvcnQgeyBjcmVhdGVET01Gb3JtIH0gZnJvbSBcIi4vY3JlYXRlRE9NRm9ybVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtU3VibWl0IH0gZnJvbSBcIi4vY3JlYXRlRm9ybVN1Ym1pdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0Zvcm0od2luZG93LCB0YXNrT3JQcm9qZWN0ID0gXCJUYXNrXCIpIHtcclxuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRm9ybUNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLmlkID0gXCJuZXdUYXNrRm9ybVwiXHJcbiAgICAgICAgICAgICAgIGNyZWF0ZURPTUZvcm0obmV3VGFza0Zvcm0pXHJcbiAgICAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLmlkID0gXCJuZXdQcm9qZWN0Rm9ybVwiOyAgIFxyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0udHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0ucGxhY2Vob2xkZXIgPSBcIk5hbWUgeW91ciBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcclxuXHJcbiAgICBjcmVhdGVGb3JtU3VibWl0KG5ld1Rhc2tXaW5kb3dDb250ZW50KVxyXG4gICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tXaW5kb3dDb250ZW50KVxyXG59ICAgXHJcblxyXG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3QuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vbWVEb1Byb2pldG8pe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5vbWVEb1Byb2pldG9cclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXHJcbiAgICB9XHJcbiAgICB0dXJuQWN0aXZlKGJ1dHRvbikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikgKVxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRQcm9qZWN0KCkge1xyXG4gICAgICAgIHRoaXMudHVybkFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb2plY3ROYW1lKSlcclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZGVmaW5lQWN0aXZlKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tzW2ldLnRpdGxlKSl7dGFza3NbaV0ucmVtb3ZlVGFzayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrc1tpXS50aXRsZSksIGZhbHNlKTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0YXNrc1tpXS5wcm9qZWN0ID09IGFjdGl2ZVByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzW2ldLndyaXRlVG9ET00oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdyaXRlVG9ET00oKSB7XHJcbiAgICAgICAgY29uc3QgdGhpc1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWItYnRuXCIsIFwicHJvamVjdFwiKTtcclxuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi5pZCA9IHRoaXMucHJvamVjdE5hbWU7XHJcbiAgICAgICAgdGhpc1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3ROYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIikuYXBwZW5kQ2hpbGQodGhpc1Byb2plY3RCdXR0b24pO1xyXG4gICAgICAgIHRoaXMudHVybkFjdGl2ZSh0aGlzUHJvamVjdEJ1dHRvbik7XHJcbiAgICAgICAgdGhpc1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydFByb2plY3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLndyaXRlVG9ET00oKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvamVjdE5hbWUpLnJlbW92ZSgpXHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YodGhpcyksIDEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSA9IFwiTG93XCIsIHByb2plY3QgPSBcIlwiLCBjb21wbGV0ZWQgPSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgICAgICB0YXNrcy5wdXNoKHRoaXMpXHJcbiAgICB9XHJcbiAgICBzZXQgZGVmaW5lUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcmlvcml0eVN0eWxlKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMucHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5ICsgXCJQcmlvcml0eVwiKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlVGFzayh3aGF0VG9EZWxldGUsIHNwbGljZU9yTm90ID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmKHNwbGljZU9yTm90KSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRoaXMpLCAxKVxyXG4gICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGF0VG9EZWxldGUucmVtb3ZlKClcclxuICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB3cml0ZVRvRE9NKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInNwcmVhZFwiKTtcclxuICAgICAgICB0YXNrLmlkID0gdGhpcy50aXRsZTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gdGhpcy5kZXRhaWxzO1xyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0aGlzLmR1ZURhdGU7XHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUHJpb3JpdHlTdHlsZSh0YXNrKVxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlbW92ZVRhc2sodGFzaykpXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0YXNrKSAgICBcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSGVhZGVyKHdpbmRvdykge1xyXG4gICAgY29uc3QgbmV3VGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tIZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3Li4uXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjbG9zaW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG9zaW5nRGl2XCIpXHJcbiAgICAgICAgICAgIGNsb3NpbmdEaXYudGV4dENvbnRlbnQgPSBcInhcIjtcclxuICAgICAgICAgICAgY2xvc2luZ0Rpdi5vbmNsaWNrID0gKCkgPT4gY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tXaW5kb3dcIikpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2luZ0Rpdik7XHJcbiAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tIZWFkZXIpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2VOZXdUYXNrU2lkZUJhcih0YWIpIHtcclxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxufSIsImltcG9ydCB7IGRlZmluZUFjdGl2ZSB9IGZyb20gXCIuL2RlZmluZUN1cnJlbnRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQoKSB7XHJcbiAgICAgY29uc3QgbG9jYWxUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhsb2NhbFRhc2tzW2ldLnRpdGxlLCBsb2NhbFRhc2tzW2ldLmRldGFpbHMsIGxvY2FsVGFza3NbaV0uZHVlRGF0ZSwgbG9jYWxUYXNrc1tpXS5wcmlvcml0eSwgbG9jYWxUYXNrc1tpXS5wcm9qZWN0LGxvY2FsVGFza3NbaV0uY29tcGxldGVkKVxyXG4gICAgICAgICAgbmV3VGFzay5pbml0aWFsaXplKClcclxuICAgICB9XHJcbiAgICAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChsb2NhbFByb2plY3RzW2ldLm5hbWUpXHJcbiAgICAgICAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgZGVmaW5lQWN0aXZlKClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0FUVUFMOiBQT1IgQUxHVU0gTU9USVZPIEEgTElOSEEgOSBOw4NPIEZVTkNJT05BLCBGSVggVEhBVCBBTkQgWU9VIFdJTiIsImV4cG9ydCBmdW5jdGlvbiB3cml0ZU5ld1Rhc2tTaWRlYmFyKHdpbmRvdykge1xyXG4gICAgY29uc3QgbmV3VGFza1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrU2lkZUJhclwiKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9yVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0T3JUYXNrXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhYi1idG5cIiwgXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uaWQgPSBcInRhc2tCdG5cIlxyXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVGFza1wiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWItYnRuXCIsIFwiaW5hY3RpdmVcIilcclxuICAgICAgICAgICAgICAgIHByb2plY3RCdXR0b24uaWQgPSBcInByb2plY3RCdG5cIlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE9yVGFzay5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICAgICAgbmV3VGFza1NpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdE9yVGFzayk7XHJcbiAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tTaWRlYmFyKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==