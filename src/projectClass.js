import { tasks } from "./index.js";
import { projects } from "./index.js";
import { defineActive } from "./defineCurrentProject.js";

export class Project {
    constructor(nomeDoProjeto){
        this.name = nomeDoProjeto
        projects.push(this);
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
        const activeProject = defineActive();
        for(let i = 0; i < tasks.length; i++) {
            if(document.getElementById(`${tasks[i].title}.task`)){tasks[i].removeTask(document.getElementById(`${tasks[i].title}.task`), false);}
        }
         for(let i = 0; i < tasks.length; i++){
            if(tasks[i].project == activeProject) {
                tasks[i].writeToDOM();
                tasks[i].detailsExist = false;
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
        localStorage.setItem("projects", JSON.stringify(projects))
    }

    removeProject() {
        document.getElementById(this.projectName).remove()
        projects.splice(projects.indexOf(this), 1)
        localStorage.setItem("projects", JSON.stringify(projects))
    }
}

export class Task {
    constructor(title, details, dueDate, priority = "Low", project = "", completed = false){
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.completed = completed;
        tasks.push(this)
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
            tasks.splice(tasks.indexOf(this), 1)
           localStorage.setItem("tasks", JSON.stringify(tasks))
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
        localStorage.setItem("tasks", JSON.stringify(tasks))
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