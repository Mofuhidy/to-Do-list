import Tasks, { tasksList } from "../modules/tasks.js";
import saveData from "../modules/saveData.js";

const editTask = () => {
    // Implement the editing task
    const editTaskInput = document.querySelector('.tasks-container li');

    editTaskInput.innerHTML = 'Matching test';
  }
export default editTask;