import { displayTasks, todo } from './displaytasks';

const clearCompletedTasks = () => {
  todo.clearCompleted();
  displayTasks();
};

export default clearCompletedTasks;
