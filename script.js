const body = document.querySelector('body');

// user input button
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('buttonDiv');

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Create Grid';
button.addEventListener('click', () => {
  // Get user input for rows and columns
  let rows = prompt('Rows');
  let columns = prompt('Columns');

  // parent div
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('parentDiv');
  body.appendChild(parentDiv);

  // create children div for grids
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      let childDiv = document.createElement('div');
      childDiv.classList.add('childDiv');
      parentDiv.appendChild(childDiv);

      childDiv.addEventListener('mouseover', () => {
        childDiv.style.backgroundColor = 'red';
      });
    }
  }
});

buttonDiv.appendChild(button);
body.appendChild(buttonDiv);


