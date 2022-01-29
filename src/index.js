 import { displayNewTaskWindow} from "./displayNewTaskWindow";


 const newButton = document.getElementById("newButton");

 newButton.addEventListener("click", () => displayNewTaskWindow(document.getElementById("main")));