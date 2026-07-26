console.log('hello, world!');

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


// create divs that CSS styles will arrange into a grid

const container = document.querySelector(".container");

createGrid(container, 12, '8px');
