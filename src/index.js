import _ from 'lodash';
import './style.css';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
//     element.classList.add('body');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

const simpleTasks = [
  {
    description : "Complete the structure of To-do-list",
    completed : false,
    index : 1,
  },
  {
    description : "Complete setting up webpack",
    completed : true,
    index : 2,
  },
  {
    description : "Complete the all pending tasks. Also complete other pending tasks. Make sure ton complete on time. Also define what you did",
    completed : false,
    index : 3,
  },
]
function displayTasks() {
  let result = '';
  simpleTasks.filter((task) => task.index > 0).forEach((task) => {
    result += `
    <div class="item">
    <div class="itme-desc">
    <input type="checkbox"  name="${task}" >
    <label for="task"> ${task.description}</label><br>
    </div>
    <div class="item-btn">
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div> `;
  });
  document.querySelector('.tasks').innerHTML = result;
}

displayTasks();
