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

    static clearCompleted = () => {
      const clrCompleted = document.querySelector('.clrBtn');
      clrCompleted.addEventListener('click', () => {
        const filterd = tasksList.filter((task) => task.completed !== true);
        const notCompleted = filterd.forEach((e, i) => {
          e.index = i + 1;
        });
        localStorage.setItem('todo', JSON.stringify(notCompleted));
        window.location.reload();
      });
    }
}
