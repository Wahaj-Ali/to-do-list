import getAddedTodos from '../../src/modules/newtask.js';
import { todo } from '../../src/modules/displaytasks.js';
import createMockDocument from '../mocks/mockDocument.js';
import delTask from '../../src/modules/deltask.js';

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
});