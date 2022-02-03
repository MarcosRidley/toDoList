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
                _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].detailsExist = false;
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
            details.addEventListener("click", () => this.toggleDetails(title))
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
                    thisTask.append(taskDetailsDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDSDhEO0FBQzlEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxJQUFJLDJFQUFvQjtBQUN4QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNEO0FBQ1A7QUFDL0M7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyw4QkFBOEIsK0NBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QyxpQ0FBaUMsa0RBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSyxtRUFBWTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZURPTUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUYXNrT3JQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RlZmluZUN1cnJlbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlBbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5TmV3VGFza1dpbmRvdy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uZXdUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9nZ2xlQmFja2dyb3VuZEJsdXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVIZWFkZXJGb3JOZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlTG9jYWxTdG9yYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZU5ld1Rhc2tTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVET01Gb3JtKGZvcm0pIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICB0aXRsZS5pZCA9IFwidGl0bGVcIlxyXG4gICAgICAgIHRpdGxlLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIlxyXG4gICAgICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgZGF0ZS5pZCA9IFwiZGF0ZVwiO1xyXG4gICAgICAgICAgICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgICAgICAgZGF0ZS5yZXF1aXJlZCA9IHRydWVcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpXHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGRldGFpbHMuaWQgPSBcImRldGFpbHNcIjtcclxuICAgICAgICBkZXRhaWxzLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBkZXRhaWxzLnBsYWNlaG9sZGVyID0gXCJEZXRhaWxzIGFib3V0IHlvdXIgdGFza1wiXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzKVxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHByaW9yaXR5LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICAgICAgICBwcmlvcml0eS5pZCA9IFwicHJpb3JpdHlCdXR0b25cIjtcclxuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idXR0b25zXCIsIFwibG93UHJpb3JpdHlcIik7XHJcbiAgICAgICAgcHJpb3JpdHkub25jbGljayA9ICgpID0+IGNoYW5nZVByaW9yaXR5KHByaW9yaXR5KVxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KG5vZGUpe1xyXG4gICAgaWYobm9kZS50ZXh0Q29udGVudCA9PSBcIkxvd1wiKSB7XHJcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtUHJpb3JpdHlcIik7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibG93UHJpb3JpdHlcIik7XHJcbiAgICB9IGVsc2UgaWYobm9kZS50ZXh0Q29udGVudCA9PSBcIk1lZGl1bVwiKSB7XHJcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImhpZ2hQcmlvcml0eVwiKTtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJtZWRpdW1Qcmlvcml0eVwiKTtcclxuICAgIH1lbHNlIGlmKG5vZGUudGV4dENvbnRlbnQgPT0gXCJIaWdoXCIpe1xyXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBcIkxvd1wiXHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG93UHJpb3JpdHlcIik7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaFByaW9yaXR5XCIpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IGNyZWF0ZVRhc2tPclByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGVUYXNrT3JQcm9qZWN0XCI7XHJcbmltcG9ydCB7IHRhc2tPclByb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5TmV3VGFza1dpbmRvd1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1TdWJtaXQod2luZG93KSB7XHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XHJcbnN1Ym1pdEJ1dHRvbi5pZD1cInN1Ym1pdFwiO1xyXG5zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImZvcm0tYnV0dG9uc1wiKTtcclxud2luZG93LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiBjcmVhdGVUYXNrT3JQcm9qZWN0KHRhc2tPclByb2plY3QpKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIHRhc2tzIH0gZnJvbSBcIi5cIlxyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdENsYXNzXCJcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Byb2plY3RDbGFzc1wiXHJcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi9kZWZpbmVDdXJyZW50UHJvamVjdFwiXHJcblxyXG5pbXBvcnQgeyBjbG9zZU5ld1Rhc2tTaWRlQmFyIH0gZnJvbSBcIi4vd3JpdGVIZWFkZXJGb3JOZXdUYXNrXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrT3JQcm9qZWN0KHRhc2tPclByb2plY3QpIHtcclxuICAgIFxyXG4gICAgaWYodGFza09yUHJvamVjdCA9PSBcIlRhc2tcIikge1xyXG4gICAgICAgIGNvbnN0IGRlZmluZWREYXRlID0gbW9tZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIikudmFsdWUsZGVmaW5lZERhdGUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlCdXR0b25cIikudGV4dENvbnRlbnQsIGFjdGl2ZVByb2plY3QsIGZhbHNlKVxyXG4gICAgICAgIG5ld1Rhc2suaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGNsb3NlTmV3VGFza1NpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrV2luZG93XCIpKVxyXG4gICAgfVxyXG4gICAgaWYodGFza09yUHJvamVjdCA9PSBcIlByb2plY3RcIikge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikudmFsdWUpKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS52YWx1ZSA9IFwiRXJyb3IsIGR1cGxpY2F0ZSBwcm9qZWN0XCJcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS52YWx1ZSA9PSBcIkVycm9yLCBkdXBsaWNhdGUgcHJvamVjdFwiKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLnZhbHVlKVxyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tXaW5kb3dcIikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKS5pZFxyXG5leHBvcnQge2FjdGl2ZVByb2plY3R9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lQWN0aXZlKCkge1xyXG4gICAgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmlkXHJcbiAgICByZXR1cm4gYWN0aXZlUHJvamVjdFxyXG59IiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tIFwiLlwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKS5mb3JFYWNoKChhY3RpdmUpID0+IGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpIClcclxuICAgIGdlbmVyYWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCkpe3Rhc2tzW2ldLnJlbW92ZVRhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSwgZmFsc2UpO31cclxuICAgIH1cclxuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgICAgIHRhc2tzW2ldLmRldGFpbHNFeGlzdCA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgd3JpdGVIZWFkZXIgfSBmcm9tIFwiLi93cml0ZUhlYWRlckZvck5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgd3JpdGVOZXdUYXNrU2lkZWJhciB9IGZyb20gXCIuL3dyaXRlTmV3VGFza1NpZGViYXJcIjtcclxuaW1wb3J0IHsgbmV3Rm9ybSB9IGZyb20gXCIuL25ld1Rhc2tGb3JtXCI7XHJcbmltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSBcIi4vdG9nZ2xlQmFja2dyb3VuZEJsdXJcIjtcclxubGV0IG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSBmYWxzZTtcclxuY29uc3QgbmV3VGFza1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5ld1Rhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubGV0IHRhc2tPclByb2plY3QgPSBcIlRhc2tcIjtcclxuZXhwb3J0IHt0YXNrT3JQcm9qZWN0fVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TmV3VGFza1dpbmRvdyh3aW5kb3cpIHtcclxuICAgIHRvZ2dsZUJhY2tncm91bmRCbHVyKClcclxuICAgIGlmKCFuZXdUYXNrV2luZG93RXhpc3RzKSB7XHJcbiAgICAgICAgbmV3VGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKFwibmV3VGFza1dpbmRvd1wiKTtcclxuICAgICAgICBuZXdUYXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibmV3VGFza0NvbnRlbnRcIilcclxuICAgICAgICAgICAgd3JpdGVIZWFkZXIobmV3VGFza1dpbmRvdyk7XHJcbiAgICAgICAgICAgIHdyaXRlTmV3VGFza1NpZGViYXIobmV3VGFza0NvbnRlbnQpO1xyXG4gICAgICAgICAgICBuZXdGb3JtKG5ld1Rhc2tDb250ZW50KTtcclxuICAgICAgICAgICAgbmV3VGFza1dpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGVudClcclxuICAgICAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tXaW5kb3cpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICBhZGRCdXR0b25MaXN0ZW5lcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheUZvcm0oXCJUYXNrXCIpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheUZvcm0oXCJQcm9qZWN0XCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZvcm0oaXNUYXNrT3JQcm9qZWN0KSB7XHJcbiAgICBpZihpc1Rhc2tPclByb2plY3QgPT0gXCJUYXNrXCIpIHtcclxuICAgICAgICB0YXNrT3JQcm9qZWN0ID0gXCJUYXNrXCJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVCdG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVCdG5cIilcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlQnRuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQnRuXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tPclByb2plY3QgPSBcIlByb2plY3RcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZUJ0blwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUJ0blwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVCdG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVCdG5cIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIiBpbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3QuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheU5ld1Rhc2tXaW5kb3d9IGZyb20gXCIuL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzXCI7XHJcbiBpbXBvcnQge3dyaXRlTG9jYWxTdG9yYWdlQ29udGVudH0gZnJvbSBcIi4vd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50LmpzXCJcclxuIGltcG9ydCB7ZGlzcGxheUFsbFRhc2tzfSBmcm9tIFwiLi9kaXNwbGF5QWxsVGFza3MuanNcIlxyXG5sZXQgcHJvamVjdHMgPSBbXVxyXG5sZXQgdGFza3MgPSBbXTtcclxuZXhwb3J0IHt0YXNrc307XHJcbmV4cG9ydCB7cHJvamVjdHN9O1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdCdXR0b25cIik7XHJcbm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlzcGxheU5ld1Rhc2tXaW5kb3coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpKSk7XHJcblxyXG5jb25zdCBnZW5lcmFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmFsQnV0dG9uXCIpO1xyXG5nZW5lcmFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVGFza3MpXHJcblxyXG5cclxuXHJcbndyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpXHJcblxyXG5cclxuY29uc29sZS5sb2coYWN0aXZlUHJvamVjdCkiLCJpbXBvcnQgeyBjcmVhdGVET01Gb3JtIH0gZnJvbSBcIi4vY3JlYXRlRE9NRm9ybVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtU3VibWl0IH0gZnJvbSBcIi4vY3JlYXRlRm9ybVN1Ym1pdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld0Zvcm0od2luZG93LCB0YXNrT3JQcm9qZWN0ID0gXCJUYXNrXCIpIHtcclxuICAgIGNvbnN0IG5ld1Rhc2tXaW5kb3dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrRm9ybUNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLmlkID0gXCJuZXdUYXNrRm9ybVwiXHJcbiAgICAgICAgICAgICAgIGNyZWF0ZURPTUZvcm0obmV3VGFza0Zvcm0pXHJcbiAgICAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLmlkID0gXCJuZXdQcm9qZWN0Rm9ybVwiOyAgIFxyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0udHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0ucGxhY2Vob2xkZXIgPSBcIk5hbWUgeW91ciBwcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcclxuXHJcbiAgICBjcmVhdGVGb3JtU3VibWl0KG5ld1Rhc2tXaW5kb3dDb250ZW50KVxyXG4gICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tXaW5kb3dDb250ZW50KVxyXG59ICAgXHJcblxyXG4iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3QuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5vbWVEb1Byb2pldG8pe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5vbWVEb1Byb2pldG9cclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXHJcbiAgICB9XHJcbiAgICB0dXJuQWN0aXZlKGJ1dHRvbikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikgKVxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRQcm9qZWN0KCkge1xyXG4gICAgICAgIHRoaXMudHVybkFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb2plY3ROYW1lKSlcclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZGVmaW5lQWN0aXZlKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCkpe3Rhc2tzW2ldLnJlbW92ZVRhc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFza3NbaV0udGl0bGV9LnRhc2tgKSwgZmFsc2UpO31cclxuICAgICAgICB9XHJcbiAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRhc2tzW2ldLnByb2plY3QgPT0gYWN0aXZlUHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGFza3NbaV0ud3JpdGVUb0RPTSgpO1xyXG4gICAgICAgICAgICAgICAgdGFza3NbaV0uZGV0YWlsc0V4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3cml0ZVRvRE9NKCkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFiLWJ0blwiLCBcInByb2plY3RcIik7XHJcbiAgICAgICAgdGhpc1Byb2plY3RCdXR0b24uaWQgPSB0aGlzLnByb2plY3ROYW1lO1xyXG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0TmFtZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpLmFwcGVuZENoaWxkKHRoaXNQcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICB0aGlzLnR1cm5BY3RpdmUodGhpc1Byb2plY3RCdXR0b24pO1xyXG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNvcnRQcm9qZWN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvamVjdCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb2plY3ROYW1lKS5yZW1vdmUoKVxyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHRoaXMpLCAxKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHkgPSBcIkxvd1wiLCBwcm9qZWN0ID0gXCJcIiwgY29tcGxldGVkID0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICAgICAgdGFza3MucHVzaCh0aGlzKVxyXG4gICAgICAgIHRoaXMuZGV0YWlsc0V4aXN0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVmaW5lUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcmlvcml0eVN0eWxlKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMucHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5ICsgXCJQcmlvcml0eVwiKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlVGFzayh3aGF0VG9EZWxldGUsIHNwbGljZU9yTm90ID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmKHNwbGljZU9yTm90KSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRoaXMpLCAxKVxyXG4gICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGF0VG9EZWxldGUucmVtb3ZlKClcclxuICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB3cml0ZVRvRE9NKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInNwcmVhZFwiKTtcclxuICAgICAgICB0YXNrLmlkID0gYCR7dGhpcy50aXRsZX0udGFza2A7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5dGhpbmdFbHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcclxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xyXG4gICAgICAgICAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcclxuICAgICAgICAgICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy50b2dnbGVEZXRhaWxzKHRpdGxlKSlcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUHJpb3JpdHlTdHlsZSh0YXNrKVxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMucmVtb3ZlVGFzayh0YXNrKSlcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGV2ZXJ5dGhpbmdFbHNlKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0YXNrKSAgICBcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVRvRE9NKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGV0YWlscygpIHtcclxuICAgICAgICBpZighdGhpcy5kZXRhaWxzRXhpc3Qpe1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMudGl0bGV9LnRhc2tgKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGV0YWlsc0hhbmRsZXJcIilcclxuICAgICAgICAgICAgdGFza0RldGFpbHNEaXYuaWQgPSBgJHt0aGlzLnRpdGxlfS5kZXRhaWxzYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdCA9PSBcImdlbmVyYWxCdXR0b25cIj8gdGFza0RldGFpbHNQcm9qZWN0LnRleHRDb250ZW50ID0gYE5vIHByb2plY3QgYXNzaWdubWVudGAgOiB0YXNrRGV0YWlsc1Byb2plY3QudGV4dENvbnRlbnQgPSBgUHJvamVjdCBuYW1lOiAke3RoaXMucHJvamVjdH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzUHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGV0YWlsc0RldGFpbHMudGV4dENvbnRlbnQgPSBgRGV0YWlsczogJHt0aGlzLmRldGFpbHN9YDtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc0RldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHNQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGhpcy5wcmlvcml0eX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzUHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzVGFzay5hcHBlbmQodGFza0RldGFpbHNEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlsc0V4aXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLnRpdGxlfS5kZXRhaWxzYCkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUJhY2tncm91bmRCbHVyKCl7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWRpdlwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYmx1clwiKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFubmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJibHVyXCIpO1xyXG59IiwiaW1wb3J0IHsgdG9nZ2xlQmFja2dyb3VuZEJsdXIgfSBmcm9tIFwiLi90b2dnbGVCYWNrZ3JvdW5kQmx1clwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSGVhZGVyKHdpbmRvdykge1xyXG4gICAgY29uc3QgbmV3VGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tIZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgbmV3Li4uXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjbG9zaW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJjbG9zaW5nRGl2XCIpXHJcbiAgICAgICAgICAgIGNsb3NpbmdEaXYudGV4dENvbnRlbnQgPSBcInhcIjtcclxuICAgICAgICAgICAgY2xvc2luZ0Rpdi5vbmNsaWNrID0gKCkgPT4gY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tXaW5kb3dcIikpXHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2luZ0Rpdik7XHJcbiAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tIZWFkZXIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTmV3VGFza1NpZGVCYXIodGFiKSB7XHJcbiAgICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xyXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG59IiwiaW1wb3J0IHsgZGVmaW5lQWN0aXZlIH0gZnJvbSBcIi4vZGVmaW5lQ3VycmVudFByb2plY3RcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgVGFzayB9IGZyb20gXCIuL3Byb2plY3RDbGFzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTG9jYWxTdG9yYWdlQ29udGVudCgpIHtcclxuICAgICBjb25zdCBsb2NhbFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcclxuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGxvY2FsVGFza3NbaV0udGl0bGUsIGxvY2FsVGFza3NbaV0uZGV0YWlscywgbG9jYWxUYXNrc1tpXS5kdWVEYXRlLCBsb2NhbFRhc2tzW2ldLnByaW9yaXR5LCBsb2NhbFRhc2tzW2ldLnByb2plY3QsbG9jYWxUYXNrc1tpXS5jb21wbGV0ZWQpXHJcbiAgICAgICAgICBuZXdUYXNrLmluaXRpYWxpemUoKVxyXG4gICAgIH1cclxuICAgICBjb25zdCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcclxuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGxvY2FsUHJvamVjdHNbaV0ubmFtZSlcclxuICAgICAgICAgIG5ld1Byb2plY3QuaW5pdGlhbGl6ZSgpO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBkZWZpbmVBY3RpdmUoKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vQVRVQUw6IFBPUiBBTEdVTSBNT1RJVk8gQSBMSU5IQSA5IE7Dg08gRlVOQ0lPTkEsIEZJWCBUSEFUIEFORCBZT1UgV0lOIiwiZXhwb3J0IGZ1bmN0aW9uIHdyaXRlTmV3VGFza1NpZGViYXIod2luZG93KSB7XHJcbiAgICBjb25zdCBuZXdUYXNrU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3VGFza1NpZGViYXIuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tTaWRlQmFyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T3JUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RPclRhc2suY2xhc3NMaXN0LmFkZChcInByb2plY3RPclRhc2tcIilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFiLWJ0blwiLCBcImFjdGl2ZUJ0blwiKVxyXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi5pZCA9IFwidGFza0J0blwiXHJcbiAgICAgICAgICAgICAgICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJUYXNrXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhYi1idG5cIiwgXCJpbmFjdGl2ZUJ0blwiKVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5pZCA9IFwicHJvamVjdEJ0blwiXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgIHByb2plY3RPclRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xyXG4gICAgICAgICAgICBuZXdUYXNrU2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0T3JUYXNrKTtcclxuICAgICAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1NpZGViYXIpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9