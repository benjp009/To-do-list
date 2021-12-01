function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  /*global someFunction, a*/
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
