import { createTaskOrProject } from "./createTaskOrProject";
import { taskOrProject } from "./displayNewTaskWindow";

export function createFormSubmit(window) {
const submitButton = document.createElement("button");
submitButton.textContent = "Create";
submitButton.id="submit";
submitButton.classList.add("form-buttons");
window.appendChild(submitButton);
submitButton.addEventListener("click",() => createTaskOrProject(taskOrProject));
}

