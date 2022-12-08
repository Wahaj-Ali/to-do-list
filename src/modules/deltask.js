import { displayTasks, todo } from './displaytasks';

const delTask = (index) => {
  todo.deleteTask(index);
  todo.saveTask();
  displayTasks();
};

export default delTask;
