import _ from 'lodash';
import './style.css';
import Refresh from './refresh.png';



function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.classList.add('hello');

  // Add the image to our existing div.
  const refreshIcon = new Image();
  refreshIcon.src = Refresh;

  element.appendChild(refreshIcon);


  return element;
}

document.body.appendChild(component());
