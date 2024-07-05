const button = document.querySelector("button");

button.addEventListener("click", () => {
  let squaresPerSide = prompt("How many squares per side?");

  alert(`${squaresPerSide}`);
});

const outerContainer = document.querySelector(".outer-container");

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
