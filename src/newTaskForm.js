import { createDOMForm } from "./createDOMForm";
import { createFormSubmit } from "./createFormSubmit";

export function newForm(window, taskOrProject = "Task") {
    const newTaskWindowContent = document.createElement("div");
    newTaskWindowContent.classList.add("newTaskContent");
    if(taskOrProject == "Task") {
            const newTaskForm = document.createElement("form");
               createDOMForm(newTaskForm)
               newTaskWindowContent.appendChild(newTaskForm)
    } else {
        const newProjectForm = document.createElement("input");
            newProjectForm.type = "text";
            newProjectForm.id = "newProjectForm";
            newProjectForm.placeholder = "What shall we call your new project?"
            newTaskWindowContent.appendChild(newProjectForm);
    }
    createFormSubmit(newTaskWindowContent)
    window.appendChild(newTaskWindowContent)
}   
