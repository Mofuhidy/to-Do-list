const tasksList = JSON.parse(localStorage.getItem('todo')) || [];

const listContainer = document.querySelector('.tasks-container');
const submit = document.querySelector('#addDo');

export default class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static addTask = () => {
    const task = new Tasks(submit.value, false, tasksList.length + 1);
    if (submit.value !== '') {
      tasksList.push(task);
      localStorage.setItem('todo', JSON.stringify(tasksList));
    }
  }

  static displayTasks = () => {
    let singleTask = '';
    tasksList.forEach((task) => {
      singleTask += `<li class="task-item" id='${task.index}'>
                      <div class="checkList"> <input type="checkbox" name="check" class="chcek"> ${task.description}</div>
                      <i class="fa-solid fa-trash delete"></i>
                  </li>`;
      listContainer.innerHTML = singleTask;
    });
  };

  
}

export { submit, listContainer };