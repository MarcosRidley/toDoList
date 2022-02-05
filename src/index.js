import { displayNewTaskWindow } from './displayNewTaskWindow.js';
import { writeLocalStorageContent } from './writeLocalStorageContent.js';
import { displayAllTasks } from './displayAllTasks.js';
import './styles.css';
let projects = [];
let tasks = [];
export { tasks };
export { projects };

const newButton = document.getElementById('newButton');
newButton.addEventListener('click', () =>
  displayNewTaskWindow(document.getElementById('main'))
);

const generalButton = document.getElementById('generalButton');
generalButton.addEventListener('click', displayAllTasks);

writeLocalStorageContent();
