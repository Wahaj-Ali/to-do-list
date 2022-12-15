import getAddedTodos from '../../src/modules/newtask.js';
import { todo } from '../../src/modules/displaytasks.js';
import createMockDocument from '../mocks/mockDocument.js';
import delTask from '../../src/modules/deltask.js';
import clearCompletedTasks from '../../src/modules/clearCompletedTasks.js';

function addTaskDescription(val, input) {
  input.value = val;
}

describe('This test', () => {
  test('creates a container element inside the listSection', () => {
    createMockDocument('description-1');
    localStorage.clear();
    const listSection = document.querySelector('.tasks');

    getAddedTodos();

    expect(listSection.children[0].className).toEqual(
      'item',
    );
  });

  test('creates a task list element inside the list container', () => {
    todo.allTodos = [];
    createMockDocument('description-2');
    const listSection = document.querySelector('.tasks');

    getAddedTodos();

    expect(
      listSection.children[0].children[0].className,
    ).toEqual('itme-desc');
  });

  test('should remove 1st task in the list container', () => {
    todo.allTasks = [];
    createMockDocument('task1');

    const listSection = document.querySelector('.tasks');
    getAddedTodos();
    delTask(1);
    expect(listSection.children.length).toEqual(0);
  });

  test('adds the exact number of task elements to the list container ', () => {
    todo.allTasks = [];
    createMockDocument('task1');
    const listSection = document.querySelector('.tasks');
    const newTodo = document.getElementById('task-info');

    getAddedTodos();
    addTaskDescription('description-4', newTodo);
    getAddedTodos();
    addTaskDescription('description-5', newTodo);
    getAddedTodos();
    expect(listSection.children[0].children.length).toEqual(
      3,
    );
  });

  test('edits the 1st task description', () => {
    todo.allTasks = [];
    createMockDocument('task1');
    const listSection = document.querySelector('.tasks');
    const newTodo = document.getElementById('task-info');
    getAddedTodos();
    addTaskDescription('task2', newTodo);
    getAddedTodos();
    addTaskDescription('task3', newTodo);
    getAddedTodos();
    const completedTaskIndex = 1;
    const newDesc = 'task1 edited';
    // const descContainer = document.querySelector('#taskLabel');
    // const para = listSection.children[0].children[completedTaskIndex].querySelector('#taskLabel');
    const para1 = listSection.children[0].children[completedTaskIndex].children[0].children[1];
    para1.textContent = newDesc;
    todo.editTask(para1, completedTaskIndex);
    expect(todo.allTasks[completedTaskIndex-1].description).toEqual(newDesc);
  });

  test('checks given item status', () => {
    todo.allTasks = [];
    createMockDocument('task1');
    const listSection = document.querySelector('.tasks');
    const newTodo = document.getElementById('task-info');
    getAddedTodos();
    addTaskDescription('task2', newTodo);
    getAddedTodos();
    addTaskDescription('task3', newTodo);
    getAddedTodos();
    const checkAtIndex = 1;
    const checkbox = listSection.children[0].children[checkAtIndex].children[0].children[0];
    checkbox.checked = true;
    todo.completedTask(checkbox.checked, checkAtIndex);
    expect(todo.allTasks[checkAtIndex-1].completed).toEqual(checkbox.checked);
  });

  test('clears completed tasks', () => {
    todo.allTasks = [];
    createMockDocument('task1');
    const listSection = document.querySelector('.tasks');
    const newTodo = document.getElementById('task-info');
    getAddedTodos();
    addTaskDescription('task2', newTodo);
    getAddedTodos();
    addTaskDescription('task3', newTodo);
    getAddedTodos();
    const clearatIndex = 1;
    const completedTask = listSection.querySelector('.item').querySelector('.itme-desc').querySelector('#checkbox');
    completedTask.checked = true;
    todo.completedTask(completedTask.checked, clearatIndex);
    clearCompletedTasks();
    expect(todo.allTasks.length).toEqual(2);
  });
});
