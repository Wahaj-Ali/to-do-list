import './style.css';
import { displayTasks, todo } from './modules/displaytasks.js';
import delTask from './modules/deltask.js';
import getAddedTodos from './modules/newtask';
import populate from './modules/populate';
import clearCompletedTasks from './modules/clearCompletedTasks';

/* eslint-disable */
import _, { indexOf } from 'lodash';

/* eslint-enable */

const form = document.getElementById('form');

//  add a task

form.addEventListener('submit', getAddedTodos);

//  delete a task

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-xmark') {
    delTask(e.target.id);
  }
});

//  get tasks from localstorage

populate();

const clearTasks = document.getElementById('clear-btn');

// Clear completed tasks

clearTasks.addEventListener('click', clearCompletedTasks);
