import _ from 'lodash';
import './style.css';
import Refresh from './refresh.png';
import Menu from './menu.png';
import Check from './check.png';
import Trash from './trash.png';


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.classList.add('hello');

  // Add the image to our existing div.
  const refreshIcon = new Image();
  refreshIcon.src = Refresh;

  element.appendChild(refreshIcon);

  return element;

  const container = document.createElement('div');
  container.classList.add('list-container');

  const menuIcon = new Image();
  menuIcon.src = Menu;

  container.appendChild(menuIcon);

  return container;
}

document.body.appendChild(component());
