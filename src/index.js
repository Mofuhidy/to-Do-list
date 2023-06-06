import './style.css';
import tasksList from './modules/list.js';

const listContainer = document.querySelector('.tasks-container');

const displayTasks = () => {
  let singleTask = '';
  tasksList.forEach((task) => {
    singleTask += `<li class="task-item" id='${task.index}'>
                    <div class="checkList"> <input type="checkbox" name="check"> ${task.description}</div>
                    <i class="fa-solid fa-trash"></i>
                </li>`;
    listContainer.innerHTML = singleTask;
  });
};

window.onload = displayTasks();