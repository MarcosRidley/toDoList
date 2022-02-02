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
            if(document.getElementById(_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title)){_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].removeTask(document.getElementById(`${_index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].title}.task`), false);}
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
        const thisTask = document.getElementById(`${this.title}.task`);
        const taskDetailsDiv = document.createElement("div");
        const taskDetails = document.createElement("div");
        taskDetailsDiv.id = `${this.title}.details`;
            const taskDetailsProject = document.createElement("p");
                taskDetailsProject.textContent = `Project name: ${this.project}`;
                taskDetails.appendChild(taskDetailsProject);
            const taskDetailsDetails = document.createElement("p");
                taskDetailsDetails.textContent = `Details: ${this.details}`;
                taskDetails.appendChild(taskDetailsDetails);
            const taskDetailsPriority = document.createElement("p");
                taskDetailsPriority.textContent = `Priority: ${this.priority}`;
                taskDetails.appendChild(taskDetailsPriority);
                taskDetailsDiv.appendChild(taskDetails);
                thisTask.appendChild(taskDetailsDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksMkVBQW9CO0FBQ3hCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCc0Q7QUFDUDtBQUMvQztBQUNPO0FBQ1A7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLDhCQUE4QiwrQ0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLGlDQUFpQyxrREFBTztBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLLG1FQUFZO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlRE9NRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVGb3JtU3VibWl0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRhc2tPclByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGVmaW5lQ3VycmVudFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheUFsbFRhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlOZXdUYXNrV2luZG93LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2dnbGVCYWNrZ3JvdW5kQmx1ci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy93cml0ZUhlYWRlckZvck5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvd3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3dyaXRlTmV3VGFza1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURPTUZvcm0oZm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRpdGxlLmlkID0gXCJ0aXRsZVwiXHJcbiAgICAgICAgdGl0bGUudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiXHJcbiAgICAgICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBkYXRlLmlkID0gXCJkYXRlXCI7XHJcbiAgICAgICAgICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgICAgICAgICBkYXRlLnJlcXVpcmVkID0gdHJ1ZVxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSlcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZGV0YWlscy5pZCA9IFwiZGV0YWlsc1wiO1xyXG4gICAgICAgIGRldGFpbHMudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGRldGFpbHMucGxhY2Vob2xkZXIgPSBcIkRldGFpbHMgYWJvdXQgeW91ciB0YXNrXCJcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcHJpb3JpdHkudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgICAgIHByaW9yaXR5LmlkID0gXCJwcmlvcml0eUJ1dHRvblwiO1xyXG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbnNcIiwgXCJsb3dQcmlvcml0eVwiKTtcclxuICAgICAgICBwcmlvcml0eS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlUHJpb3JpdHkocHJpb3JpdHkpXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkobm9kZSl7XHJcbiAgICBpZihub2RlLnRleHRDb250ZW50ID09IFwiTG93XCIpIHtcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Qcmlvcml0eVwiKTtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3dQcmlvcml0eVwiKTtcclxuICAgIH0gZWxzZSBpZihub2RlLnRleHRDb250ZW50ID09IFwiTWVkaXVtXCIpIHtcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIm1lZGl1bVByaW9yaXR5XCIpO1xyXG4gICAgfWVsc2UgaWYobm9kZS50ZXh0Q29udGVudCA9PSBcIkhpZ2hcIil7XHJcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiTG93XCJcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb3dQcmlvcml0eVwiKTtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdoUHJpb3JpdHlcIik7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgY3JlYXRlVGFza09yUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZVRhc2tPclByb2plY3RcIjtcclxuaW1wb3J0IHsgdGFza09yUHJvamVjdCB9IGZyb20gXCIuL2Rpc3BsYXlOZXdUYXNrV2luZG93XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybVN1Ym1pdCh3aW5kb3cpIHtcclxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcclxuc3VibWl0QnV0dG9uLmlkPVwic3VibWl0XCI7XHJcbnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idXR0b25zXCIpO1xyXG53aW5kb3cuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IGNyZWF0ZVRhc2tPclByb2plY3QodGFza09yUHJvamVjdCkpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgdGFza3MgfSBmcm9tIFwiLlwiXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIlxyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vcHJvamVjdENsYXNzXCJcclxuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gXCIuL2RlZmluZUN1cnJlbnRQcm9qZWN0XCJcclxuXHJcbmltcG9ydCB7IGNsb3NlTmV3VGFza1NpZGVCYXIgfSBmcm9tIFwiLi93cml0ZUhlYWRlckZvck5ld1Rhc2tcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tPclByb2plY3QodGFza09yUHJvamVjdCkge1xyXG4gICAgXHJcbiAgICBpZih0YXNrT3JQcm9qZWN0ID09IFwiVGFza1wiKSB7XHJcbiAgICAgICAgY29uc3QgZGVmaW5lZERhdGUgPSBtb21lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc1wiKS52YWx1ZSxkZWZpbmVkRGF0ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUJ1dHRvblwiKS50ZXh0Q29udGVudCwgYWN0aXZlUHJvamVjdCwgZmFsc2UpXHJcbiAgICAgICAgbmV3VGFzay5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY2xvc2VOZXdUYXNrU2lkZUJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Rhc2tXaW5kb3dcIikpXHJcbiAgICB9XHJcbiAgICBpZih0YXNrT3JQcm9qZWN0ID09IFwiUHJvamVjdFwiKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKS52YWx1ZSkpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLnZhbHVlID0gXCJFcnJvciwgZHVwbGljYXRlIHByb2plY3RcIlxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpLnZhbHVlID09IFwiRXJyb3IsIGR1cGxpY2F0ZSBwcm9qZWN0XCIpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikudmFsdWUpXHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICBjbG9zZU5ld1Rhc2tTaWRlQmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3VGFza1dpbmRvd1wiKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJsZXQgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmlkXHJcbmV4cG9ydCB7YWN0aXZlUHJvamVjdH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVBY3RpdmUoKSB7XHJcbiAgICBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuaWRcclxuICAgIHJldHVybiBhY3RpdmVQcm9qZWN0XHJcbn0iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gXCIuXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpLmZvckVhY2goKGFjdGl2ZSkgPT4gYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikgKVxyXG4gICAgZ2VuZXJhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza3NbaV0udGl0bGUpKXt0YXNrc1tpXS5yZW1vdmVUYXNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tzW2ldLnRpdGxlKSwgZmFsc2UpO31cclxuICAgIH1cclxuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0YXNrc1tpXS53cml0ZVRvRE9NKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB3cml0ZUhlYWRlciB9IGZyb20gXCIuL3dyaXRlSGVhZGVyRm9yTmV3VGFza1wiO1xyXG5pbXBvcnQgeyB3cml0ZU5ld1Rhc2tTaWRlYmFyIH0gZnJvbSBcIi4vd3JpdGVOZXdUYXNrU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBuZXdGb3JtIH0gZnJvbSBcIi4vbmV3VGFza0Zvcm1cIjtcclxuaW1wb3J0IHsgdG9nZ2xlQmFja2dyb3VuZEJsdXIgfSBmcm9tIFwiLi90b2dnbGVCYWNrZ3JvdW5kQmx1clwiO1xyXG5sZXQgbmV3VGFza1dpbmRvd0V4aXN0cyA9IGZhbHNlO1xyXG5jb25zdCBuZXdUYXNrV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgbmV3VGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5sZXQgdGFza09yUHJvamVjdCA9IFwiVGFza1wiO1xyXG5leHBvcnQge3Rhc2tPclByb2plY3R9XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlOZXdUYXNrV2luZG93KHdpbmRvdykge1xyXG4gICAgdG9nZ2xlQmFja2dyb3VuZEJsdXIoKVxyXG4gICAgaWYoIW5ld1Rhc2tXaW5kb3dFeGlzdHMpIHtcclxuICAgICAgICBuZXdUYXNrV2luZG93LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrV2luZG93XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrQ29udGVudFwiKVxyXG4gICAgICAgICAgICB3cml0ZUhlYWRlcihuZXdUYXNrV2luZG93KTtcclxuICAgICAgICAgICAgd3JpdGVOZXdUYXNrU2lkZWJhcihuZXdUYXNrQ29udGVudCk7XHJcbiAgICAgICAgICAgIG5ld0Zvcm0obmV3VGFza0NvbnRlbnQpO1xyXG4gICAgICAgICAgICBuZXdUYXNrV2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250ZW50KVxyXG4gICAgICAgICAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1dpbmRvdylcclxuICAgICAgICAgICAgbmV3VGFza1dpbmRvd0V4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tXaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXJzKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5Rm9ybShcIlRhc2tcIikpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5Rm9ybShcIlByb2plY3RcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybShpc1Rhc2tPclByb2plY3QpIHtcclxuICAgIGlmKGlzVGFza09yUHJvamVjdCA9PSBcIlRhc2tcIikge1xyXG4gICAgICAgIHRhc2tPclByb2plY3QgPSBcIlRhc2tcIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tGb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZUJ0blwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RCdG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZUJ0blwiKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVCdG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVCdG5cIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza09yUHJvamVjdCA9IFwiUHJvamVjdFwiXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tCdG5cIikuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlQnRuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0J0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlQnRuXCIpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZUJ0blwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RCdG5cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZUJ0blwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiIGltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi9kZWZpbmVDdXJyZW50UHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5TmV3VGFza1dpbmRvd30gZnJvbSBcIi4vZGlzcGxheU5ld1Rhc2tXaW5kb3cuanNcIjtcclxuIGltcG9ydCB7d3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50fSBmcm9tIFwiLi93cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQuanNcIlxyXG4gaW1wb3J0IHtkaXNwbGF5QWxsVGFza3N9IGZyb20gXCIuL2Rpc3BsYXlBbGxUYXNrcy5qc1wiXHJcbmxldCBwcm9qZWN0cyA9IFtdXHJcbmxldCB0YXNrcyA9IFtdO1xyXG5leHBvcnQge3Rhc2tzfTtcclxuZXhwb3J0IHtwcm9qZWN0c307XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0J1dHRvblwiKTtcclxubmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5TmV3VGFza1dpbmRvdyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikpKTtcclxuXHJcbmNvbnN0IGdlbmVyYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdlbmVyYWxCdXR0b25cIik7XHJcbmdlbmVyYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBbGxUYXNrcylcclxuXHJcblxyXG5cclxud3JpdGVMb2NhbFN0b3JhZ2VDb250ZW50KClcclxuXHJcblxyXG5jb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0KSIsImltcG9ydCB7IGNyZWF0ZURPTUZvcm0gfSBmcm9tIFwiLi9jcmVhdGVET01Gb3JtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUZvcm1TdWJtaXQgfSBmcm9tIFwiLi9jcmVhdGVGb3JtU3VibWl0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3Rm9ybSh3aW5kb3csIHRhc2tPclByb2plY3QgPSBcIlRhc2tcIikge1xyXG4gICAgY29uc3QgbmV3VGFza1dpbmRvd0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3VGFza1dpbmRvd0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm5ld1Rhc2tGb3JtQ29udGVudFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICAgICAgbmV3VGFza0Zvcm0uaWQgPSBcIm5ld1Rhc2tGb3JtXCJcclxuICAgICAgICAgICAgICAgY3JlYXRlRE9NRm9ybShuZXdUYXNrRm9ybSlcclxuICAgICAgICAgICAgICAgbmV3VGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxyXG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0uaWQgPSBcIm5ld1Byb2plY3RGb3JtXCI7ICAgXHJcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybS5wbGFjZWhvbGRlciA9IFwiTmFtZSB5b3VyIHByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgbmV3VGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG5cclxuICAgIGNyZWF0ZUZvcm1TdWJtaXQobmV3VGFza1dpbmRvd0NvbnRlbnQpXHJcbiAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobmV3VGFza1dpbmRvd0NvbnRlbnQpXHJcbn0gICBcclxuXHJcbiIsImltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBkZWZpbmVBY3RpdmUgfSBmcm9tIFwiLi9kZWZpbmVDdXJyZW50UHJvamVjdC5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3Iobm9tZURvUHJvamV0byl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbm9tZURvUHJvamV0b1xyXG4gICAgICAgIHByb2plY3RzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3ROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcclxuICAgIH1cclxuICAgIHR1cm5BY3RpdmUoYnV0dG9uKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIikuZm9yRWFjaCgoYWN0aXZlKSA9PiBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSApXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydFByb2plY3QoKSB7XHJcbiAgICAgICAgdGhpcy50dXJuQWN0aXZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvamVjdE5hbWUpKVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBkZWZpbmVBY3RpdmUoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza3NbaV0udGl0bGUpKXt0YXNrc1tpXS5yZW1vdmVUYXNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tzW2ldLnRpdGxlfS50YXNrYCksIGZhbHNlKTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0YXNrc1tpXS5wcm9qZWN0ID09IGFjdGl2ZVByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzW2ldLndyaXRlVG9ET00oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdyaXRlVG9ET00oKSB7XHJcbiAgICAgICAgY29uc3QgdGhpc1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXNQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWItYnRuXCIsIFwicHJvamVjdFwiKTtcclxuICAgICAgICB0aGlzUHJvamVjdEJ1dHRvbi5pZCA9IHRoaXMucHJvamVjdE5hbWU7XHJcbiAgICAgICAgdGhpc1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3ROYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIikuYXBwZW5kQ2hpbGQodGhpc1Byb2plY3RCdXR0b24pO1xyXG4gICAgICAgIHRoaXMudHVybkFjdGl2ZSh0aGlzUHJvamVjdEJ1dHRvbik7XHJcbiAgICAgICAgdGhpc1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc29ydFByb2plY3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLndyaXRlVG9ET00oKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvamVjdE5hbWUpLnJlbW92ZSgpXHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YodGhpcyksIDEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSA9IFwiTG93XCIsIHByb2plY3QgPSBcIlwiLCBjb21wbGV0ZWQgPSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgICAgICB0YXNrcy5wdXNoKHRoaXMpXHJcbiAgICB9XHJcbiAgICBzZXQgZGVmaW5lUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcmlvcml0eVN0eWxlKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMucHJpb3JpdHkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5ICsgXCJQcmlvcml0eVwiKVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlVGFzayh3aGF0VG9EZWxldGUsIHNwbGljZU9yTm90ID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmKHNwbGljZU9yTm90KSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRoaXMpLCAxKVxyXG4gICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGF0VG9EZWxldGUucmVtb3ZlKClcclxuICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB3cml0ZVRvRE9NKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInNwcmVhZFwiKTtcclxuICAgICAgICB0YXNrLmlkID0gYCR7dGhpcy50aXRsZX0udGFza2A7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5dGhpbmdFbHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZXZlcnl0aGluZ0Vsc2UuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIilcclxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xyXG4gICAgICAgICAgICBldmVyeXRoaW5nRWxzZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcclxuICAgICAgICAgICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy50b2dnbGVEZXRhaWxzKCkpXHJcbiAgICAgICAgICAgIGV2ZXJ5dGhpbmdFbHNlLmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFByaW9yaXR5U3R5bGUodGFzaylcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlbW92ZVRhc2sodGFzaykpXHJcbiAgICAgICAgICAgIGV2ZXJ5dGhpbmdFbHNlLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChldmVyeXRoaW5nRWxzZSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodGFzaykgICAgXHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMud3JpdGVUb0RPTSgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3QgdGhpc1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLnRpdGxlfS50YXNrYCk7XHJcbiAgICAgICAgY29uc3QgdGFza0RldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YXNrRGV0YWlsc0Rpdi5pZCA9IGAke3RoaXMudGl0bGV9LmRldGFpbHNgO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlsc1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzUHJvamVjdC50ZXh0Q29udGVudCA9IGBQcm9qZWN0IG5hbWU6ICR7dGhpcy5wcm9qZWN0fWA7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc1Byb2plY3QpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzRGV0YWlscy50ZXh0Q29udGVudCA9IGBEZXRhaWxzOiAke3RoaXMuZGV0YWlsc31gO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNEZXRhaWxzKTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHNQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHNQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWA7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc1ByaW9yaXR5KTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgIHRoaXNUYXNrLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzRGl2KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpe1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1kaXZcIikuY2xhc3NMaXN0LnRvZ2dsZShcImJsdXJcIik7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhbm5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYmx1clwiKTtcclxufSIsImltcG9ydCB7IHRvZ2dsZUJhY2tncm91bmRCbHVyIH0gZnJvbSBcIi4vdG9nZ2xlQmFja2dyb3VuZEJsdXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUhlYWRlcih3aW5kb3cpIHtcclxuICAgIGNvbnN0IG5ld1Rhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBuZXdUYXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrSGVhZGVyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIG5ldy4uLlwiO1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY2xvc2luZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiY2xvc2luZ0RpdlwiKVxyXG4gICAgICAgICAgICBjbG9zaW5nRGl2LnRleHRDb250ZW50ID0gXCJ4XCI7XHJcbiAgICAgICAgICAgIGNsb3NpbmdEaXYub25jbGljayA9ICgpID0+IGNsb3NlTmV3VGFza1NpZGVCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrV2luZG93XCIpKVxyXG4gICAgICAgICAgICBuZXdUYXNrSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xyXG4gICAgICAgICAgICBuZXdUYXNrSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NpbmdEaXYpO1xyXG4gICAgICAgIHdpbmRvdy5hcHBlbmRDaGlsZChuZXdUYXNrSGVhZGVyKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU5ld1Rhc2tTaWRlQmFyKHRhYikge1xyXG4gICAgdG9nZ2xlQmFja2dyb3VuZEJsdXIoKTtcclxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxufSIsImltcG9ydCB7IGRlZmluZUFjdGl2ZSB9IGZyb20gXCIuL2RlZmluZUN1cnJlbnRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUxvY2FsU3RvcmFnZUNvbnRlbnQoKSB7XHJcbiAgICAgY29uc3QgbG9jYWxUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhsb2NhbFRhc2tzW2ldLnRpdGxlLCBsb2NhbFRhc2tzW2ldLmRldGFpbHMsIGxvY2FsVGFza3NbaV0uZHVlRGF0ZSwgbG9jYWxUYXNrc1tpXS5wcmlvcml0eSwgbG9jYWxUYXNrc1tpXS5wcm9qZWN0LGxvY2FsVGFza3NbaV0uY29tcGxldGVkKVxyXG4gICAgICAgICAgbmV3VGFzay5pbml0aWFsaXplKClcclxuICAgICB9XHJcbiAgICAgY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChsb2NhbFByb2plY3RzW2ldLm5hbWUpXHJcbiAgICAgICAgICBuZXdQcm9qZWN0LmluaXRpYWxpemUoKTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgZGVmaW5lQWN0aXZlKClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0FUVUFMOiBQT1IgQUxHVU0gTU9USVZPIEEgTElOSEEgOSBOw4NPIEZVTkNJT05BLCBGSVggVEhBVCBBTkQgWU9VIFdJTiIsImV4cG9ydCBmdW5jdGlvbiB3cml0ZU5ld1Rhc2tTaWRlYmFyKHdpbmRvdykge1xyXG4gICAgY29uc3QgbmV3VGFza1NpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJuZXdUYXNrU2lkZUJhclwiKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9yVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0T3JUYXNrXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhYi1idG5cIiwgXCJhY3RpdmVCdG5cIilcclxuICAgICAgICAgICAgICAgIHRhc2tCdXR0b24uaWQgPSBcInRhc2tCdG5cIlxyXG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiVGFza1wiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWItYnRuXCIsIFwiaW5hY3RpdmVCdG5cIilcclxuICAgICAgICAgICAgICAgIHByb2plY3RCdXR0b24uaWQgPSBcInByb2plY3RCdG5cIlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0T3JUYXNrLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE9yVGFzay5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcclxuICAgICAgICAgICAgbmV3VGFza1NpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdE9yVGFzayk7XHJcbiAgICAgICAgd2luZG93LmFwcGVuZENoaWxkKG5ld1Rhc2tTaWRlYmFyKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==