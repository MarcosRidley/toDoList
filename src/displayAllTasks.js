import { defineActive } from "./defineCurrentProject";
import { tasks } from ".";


export function displayAllTasks() {
    console.log("clicado")
    document.querySelectorAll(".active").forEach((active) => active.classList.remove("active") )
    generalButton.classList.add("active");
    for(let i = 0; i < tasks.length; i++) {
        if(document.getElementById(tasks[i].title)){tasks[i].removeTask(document.getElementById(tasks[i].title), false);}
    }
     for(let i = 0; i < tasks.length; i++){
            tasks[i].writeToDOM();
    }
}