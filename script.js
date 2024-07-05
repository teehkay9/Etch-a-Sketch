const outerContainer = document.querySelector(".outer-container");
const button = document.querySelector("button");
button.addEventListener("click", createSketchpad);

// create initial 16x16 grid
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);

    // add event listener for hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    });
  }
  outerContainer.appendChild(row);
}

function createSketchpad() {
  let numOfRows = prompt("How many squares per side?");
  numOfRows = parseInt(numOfRows);

  if (isNaN(numOfRows) || numOfRows < 0 || numOfRows > 64) {
    alert("Please enter a valid number between 0 and 64.");
    return;
  }

  // delete the current grid
  const outerContainer = document.querySelector(".outer-container");
  const rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    outerContainer.removeChild(row);
  });

  // create a new grid
  for (let i = 0; i < numOfRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < numOfRows; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);

      // add event listener for hover effect
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "grey";
      });
    }
    outerContainer.appendChild(row);
  }
}
