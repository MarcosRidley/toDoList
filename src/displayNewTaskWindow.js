import { writeHeader } from './writeHeaderForNewTask';
import { writeNewTaskSidebar } from './writeNewTaskSidebar';
import { newForm } from './newTaskForm';
import { toggleBackgroundBlur } from './toggleBackgroundBlur';
let newTaskWindowExists = false;
const newTaskWindow = document.createElement('div');
const newTaskContent = document.createElement('div');
let taskOrProject = 'Task';
export { taskOrProject };

export function displayNewTaskWindow(window) {
  toggleBackgroundBlur();
  if (!newTaskWindowExists) {
    newTaskWindow.classList.add('newTaskWindow');
    newTaskContent.classList.add('newTaskContent');
    writeHeader(newTaskWindow);
    writeNewTaskSidebar(newTaskContent);
    newForm(newTaskContent);
    newTaskWindow.appendChild(newTaskContent);
    window.appendChild(newTaskWindow);
    newTaskWindowExists = true;
    addButtonListeners();
  } else {
    newTaskWindow.classList.toggle('hidden');
  }
}

function addButtonListeners() {
  document
    .getElementById('taskBtn')
    .addEventListener('click', () => displayForm('Task'));
  document
    .getElementById('projectBtn')
    .addEventListener('click', () => displayForm('Project'));
}

function displayForm(isTaskOrProject) {
  if (isTaskOrProject == 'Task') {
    taskOrProject = 'Task';
    document.getElementById('newProjectForm').classList.add('hidden');
    document.getElementById('newTaskForm').classList.remove('hidden');
    document.getElementById('projectBtn').classList.add('inactiveBtn');
    document.getElementById('projectBtn').classList.remove('activeBtn');
    document.getElementById('taskBtn').classList.remove('inactiveBtn');
    document.getElementById('taskBtn').classList.add('activeBtn');
  } else {
    taskOrProject = 'Project';
    document.getElementById('newTaskForm').classList.add('hidden');
    document.getElementById('newProjectForm').classList.remove('hidden');
    document.getElementById('taskBtn').classList.add('inactiveBtn');
    document.getElementById('taskBtn').classList.remove('activeBtn');
    document.getElementById('projectBtn').classList.remove('inactiveBtn');
    document.getElementById('projectBtn').classList.add('activeBtn');
  }
}
