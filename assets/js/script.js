// script.js

function createGrid(parent, squaresPerSide = 16, gap = '2px') {
  const numDivs = squaresPerSide ** 2;

  // set the CSS variables used to calculate the grid spacing
  document.documentElement.style.setProperty('--grid-width', squaresPerSide);
  document.documentElement.style.setProperty('--grid-gap', gap);

  for (let i = 0; i < numDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    parent.appendChild(div);
  }
}

// initialize canvas
const canvas = document.querySelector(".container");
const userControls = document.querySelector('.ui-container');
const newCanvasBtn = document.querySelector('#reset-canvas-btn');

createGrid(canvas, 16, '0px');

canvas.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'green';
});

newCanvasBtn.addEventListener('click', () => {
  let squaresPerSide = undefined;

  do {
    const input = prompt('How many squares per side? (Max 100)', 16);
    squaresPerSide = Number(input);
  } while (isNaN(squaresPerSide) || squaresPerSide > 100);

  canvas.replaceChildren();
  createGrid(canvas, squaresPerSide, '0px');
});
