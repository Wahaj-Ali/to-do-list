import { displayTasks, todo } from './displaytasks';

const populate = () => {
  if (localStorage.getItem('tasks')) {
    todo.getStoredTasks();
    displayTasks();
  } else {
    displayTasks();
  }
};

export default populate;
