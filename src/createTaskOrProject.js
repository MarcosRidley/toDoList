import { projects, tasks } from "."
import { Project } from "./projectClass"
import { Task } from "./projectClass"
import { activeProject } from "./defineCurrentProject"

import { closeNewTaskSideBar } from "./writeHeaderForNewTask"

export function createTaskOrProject(taskOrProject) {
    
    if(taskOrProject == "Task") {
        const definedDate = moment(document.getElementById("date").value).format("DD/MM/YYYY")
        const newTask = new Task(document.getElementById("title").value, document.getElementById("details").value,definedDate, document.getElementById("priorityButton").textContent, activeProject, false)
        newTask.initialize();
        closeNewTaskSideBar(document.querySelector(".newTaskWindow"))
    }
    if(taskOrProject == "Project") {
        if(document.getElementById(document.getElementById("newProjectForm").value)){
            document.getElementById("newProjectForm").value = "Error, duplicate project"

        } else {
            if(document.getElementById("newProjectForm").value == "Error, duplicate project") return;
            const newProject = new Project(document.getElementById("newProjectForm").value)
            newProject.initialize();
            closeNewTaskSideBar(document.querySelector(".newTaskWindow"))
        }
    }
}