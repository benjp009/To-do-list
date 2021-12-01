function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  /* global _.join, ' ' */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
