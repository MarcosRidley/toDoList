import { defineActive } from './defineCurrentProject';
import { Project, Task } from './projectClass';

export function writeLocalStorageContent() {
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < localTasks.length; i++) {
    const newTask = new Task(
      localTasks[i].title,
      localTasks[i].details,
      localTasks[i].dueDate,
      localTasks[i].priority,
      localTasks[i].project,
      localTasks[i].completed
    );
    newTask.initialize();
  }
  const localProjects = JSON.parse(localStorage.getItem('projects')) || [];
  for (let i = 0; i < localProjects.length; i++) {
    const newProject = new Project(localProjects[i].name);
    newProject.initialize();
  }

  defineActive();
}

//ATUAL: POR ALGUM MOTIVO A LINHA 9 NÃO FUNCIONA, FIX THAT AND YOU WIN
