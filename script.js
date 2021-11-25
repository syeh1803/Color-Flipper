// generate all hex color
const hex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7];
const button = document.querySelector("#button");
const color = document.querySelector(".color");

// click event listener for button
button.addEventListener("click", () => {
  // hex color starts with #
  let hexColor = "#";
  // made out of 6 values
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// color flipper with limited colors
// const colors = ["#32CD32", "#3CB371", "#40E0D0", "#4169E1"];
// const button = document.querySelector("#button");
// const color = document.querySelector(".color");

// button.addEventListener("click", () => {
//   // get random number between 0 - 3
//   const randomNumber = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
