import './style.css';
import delTask from './modules/deltask.js';
import getAddedTodos from './modules/newtask.js';
import populate from './modules/populate.js';
import clearCompletedTasks from './modules/clearCompletedTasks.js';

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
