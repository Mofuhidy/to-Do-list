import { tasksList } from './tasks.js';

export default class TaskStatus {
    static updateStatus = () => {
      const checkBox = document.querySelectorAll('.chcek');

      checkBox.forEach((ch, i) => {
        ch.addEventListener('change', () => {
          if (!tasksList[i].completed) {
            tasksList[i].completed = true;
            localStorage.setItem('todo', JSON.stringify(tasksList));
            ch.nextElementSibling.classList.add('completed');
          } else {
            tasksList[i].completed = false;
            localStorage.setItem('todo', JSON.stringify(tasksList));
            ch.nextElementSibling.classList.remove('completed');
          }
        });
      });
    };
}
