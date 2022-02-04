import { toggleBackgroundBlur } from './toggleBackgroundBlur';

export function writeHeader(window, newTaskOrDetails, whoseTaskDetails) {
  const newTaskHeader = document.createElement('div');
  newTaskHeader.classList.add('newTaskHeader');
  const headerText = document.createElement('div');
  if (newTaskOrDetails == 'newTask') {
    headerText.textContent = 'Create new...';
  } else {
    headerText.textContent = 'Showing details';
  }
  const closingDiv = document.createElement('div');
  closingDiv.classList.add('closingDiv');
  closingDiv.textContent = 'x';
  closingDiv.onclick = () =>
    closeNewTaskSideBar(
      document.querySelector('.newTaskWindow'),
      newTaskOrDetails,
      whoseTaskDetails
    );
  newTaskHeader.appendChild(headerText);
  newTaskHeader.appendChild(closingDiv);
  window.appendChild(newTaskHeader);
}

export function closeNewTaskSideBar(tab, newTaskOrDetails, whoseTaskDetails) {
  toggleBackgroundBlur();
  if (newTaskOrDetails === 'newTask') {
    tab.classList.add('hidden');
  } else {
    whoseTaskDetails.classList.add('hidden');
  }
}
