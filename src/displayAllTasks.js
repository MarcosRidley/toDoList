import { tasks } from ".";


export function displayAllTasks() {
    document.querySelectorAll(".active").forEach((active) => active.classList.remove("active") )
    generalButton.classList.add("active");
    for(let i = 0; i < tasks.length; i++) {
        if(document.getElementById(`${tasks[i].title}.task`)){tasks[i].removeTask(document.getElementById(`${tasks[i].title}.task`), false);}
    }
     for(let i = 0; i < tasks.length; i++){
            tasks[i].writeToDOM();
            tasks[i].detailsExist = false;
    }
}