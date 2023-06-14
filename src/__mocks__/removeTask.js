import saveData from "../modules/saveData";
import { tasksList } from "../modules/tasks";

const removeTask = (index) => {
    const listContainer = document.querySelector('.tasks-container');
    tasksList.splice(index, 1);

    tasksList.forEach((val, i) => {
      val.index = i + 1;
    });

    listContainer.innerHTML = '';
    saveData(tasksList);
  }

export default removeTask;