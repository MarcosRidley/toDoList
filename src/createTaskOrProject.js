import { projects, tasks } from "."
import { Project } from "./projectClass"
import { Task } from "./projectClass"
import { activeProject } from "./defineCurrentProject"

export function createTaskOrProject(taskOrProject) {
    if(taskOrProject == "Task") {
        const definedDate = moment(document.getElementById("date").value).format("DD/MM/YYYY")
        const newTask = new Task(document.getElementById("title").value, document.getElementById("details").value,definedDate, document.getElementById("priorityButton").textContent, activeProject, false)
        newTask.initialize();
        console.log(tasks);
    }
    if(taskOrProject == "Project") {
        const newProject = new Project(document.getElementById("newProjectForm").value)
        newProject.initialize();
        console.log(projects);
    }
}