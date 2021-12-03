import _ from 'lodash';
import './style.css';

const TASKS = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
  {
    description: 'Task 4',
    completed: false,
    index: 4,
  },
  {
    description: 'Task 5',
    completed: false,
    index: 5,
  },
];

const todoList = document.querySelector('.tasks');
// Iterate through the array of todo-list tasks
const renderTasks = (todoList) => {
  TASKS.forEach((task) => {
    // Create a new list item
    const listItem = document.createElement('div');
    // Add classname to the list item
    listItem.classList.add('task');

    // Add HTML to the list item
    listItem.innerHTML = `
    <input
      type="checkbox"
      id="task-${task.index}"
    />
    <label for="task-${task.index}">
      <span class="custom-checkbox"></span>
      ${task.description}
    </label>
    <i class="fas fa-ellipsis-v"></i>
    `;
    // Add the list item to the todo-list
    todoList.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', renderTasks(todoList));
