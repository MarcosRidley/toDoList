let activeProject = document.querySelector('.active').id;
export { activeProject };

export function defineActive() {
  activeProject = document.querySelector('.active').id;
  return activeProject;
}
