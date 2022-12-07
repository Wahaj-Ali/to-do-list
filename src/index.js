/* eslint-disable */
import _, { indexOf } from 'lodash';

/* eslint-enable */
import './style.css';

class listTask {
  allTasks = [];

  addTask(description) {
    const task = {
      description,
      completed: false,
      index: this.allTasks.length + 1,
    };
    this.allTasks.push(task);
    this.saveTask();
  }

  deleteTask(index) {
    this.allTasks.splice(index - 1, 1);
    this.updateIndex();
    this.saveTask();
  }

  updateIndex() {
    this.allTasks.map((a) => {
      a.index = this.allTasks.indexOf(a) + 1;
      return a;
    });
  }

  saveTask() {
    const tasks = JSON.stringify(this.allTasks);
    localStorage.setItem('tasks', tasks);
  }

  getStoredTodos() {
    this.allTasks = JSON.parse(localStorage.getItem('tasks'));
  }

  completedTask(status, index) {
    this.allTasks[index - 1].completed = status;
    this.saveTask();
  }

  editTask(paragraph, index) {
    this.allTasks[index - 1].description = paragraph.textContent;
    this.saveTask();
  }

  getStoredTasks() {
    this.allTasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

/* eslint-disable */
const todo = new listTask();
/* eslint-enable */

const listSection = document.querySelector('.tasks');
const form = document.getElementById('form');

//  show tasks

const displayTasks = () => {
  listSection.replaceChildren();
  if (todo.allTasks.length > 0) {
    listSection.style.display = 'block';
    const listContainer = document.createElement('ul');
    listContainer.className = 'item';
    listSection.appendChild(listContainer);
    todo.allTasks.map((a) => {
      const list = document.createElement('li');
      list.className = 'itme-desc';

      const descrptContainer = document.createElement('div');
      descrptContainer.className = 'task-div';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox';
      if (a.completed === true) {
        checkbox.checked = 'checked';
      }

      checkbox.onclick = (e) => {
        todo.completedTask(e.target.checked, a.index);
      };
      descrptContainer.appendChild(checkbox);

      const descrpt = document.createElement('p');
      descrpt.id = 'taskLabel';
      descrpt.textContent = a.description;
      descrptContainer.appendChild(descrpt);
      list.appendChild(descrptContainer);

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa-solid fa-xmark';
      deleteIcon.id = a.index;
      list.appendChild(deleteIcon);

      list.onclick = () => {
        descrpt.contentEditable = 'true';
      };
      listContainer.append(list);
      return list;
    });
    document.createElement('p').addEventListener('keyup', (e) => {
      if (e.target.id === 'task-description') {
        if (e.key === 'Enter') {
          displayTasks();
        } else {
          /* eslint-disable */
          todo.editTask(e.target, a.index);
          /* eslint-enable */
        }
      }
    });
    listSection.appendChild(listContainer);
  }
};

//  add a task

const getAddedTodos = () => {
  const newTodo = document.getElementById('task-info');
  const description = newTodo.value;
  if (description !== '') {
    todo.addTask(description);
    displayTasks();
    newTodo.value = '';
  }
};
form.addEventListener('submit', getAddedTodos);

//  delete a task

const delTask = (index) => {
  todo.deleteTask(index);
  todo.saveTask();
  displayTasks();
};

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-xmark') {
    delTask(e.target.id);
  }
});

//  get tasks from localstorage

const populate = () => {
  if (localStorage.getItem('tasks')) {
    todo.getStoredTasks();
    displayTasks();
  } else {
    displayTasks();
  }
};

populate();
