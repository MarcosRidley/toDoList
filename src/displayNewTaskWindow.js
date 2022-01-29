import { writeHeader } from "./writeHeaderForNewTask";
import { writeNewTaskSidebar } from "./writeNewTaskSidebar";
import { newForm } from "./newTaskForm";
let newTaskWindowExists = false;
const newTaskWindow = document.createElement("div");
const newTaskContent = document.createElement("div");


export function displayNewTaskWindow(window) {
    if(!newTaskWindowExists) {
        newTaskWindow.classList.add("newTaskWindow");
        newTaskContent.classList.add("newTaskContent")
            writeHeader(newTaskWindow);
            writeNewTaskSidebar(newTaskContent);
            newForm(newTaskContent);
            newTaskWindow.appendChild(newTaskContent)
        window.appendChild(newTaskWindow)
        newTaskWindowExists = true;
    } else {
        newTaskWindow.classList.remove("hidden");
    }


}
