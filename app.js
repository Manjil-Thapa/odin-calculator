const container = document.querySelector("#main-div");

const buttons = [
  "%",
  "CE",
  "C",
  "&#8678;",
  "<sup>1</sup>/<sub>2</sub>",
  "x<sup>2</sup>",
  "&radic;",
  "/",
  "7",
  "8",
  "9",
  "&#215;",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ".",
  "=",
];
buttons.forEach((btn) => {
  const keys = document.createElement("button");
  keys.classList.add("btn");
  keys.innerHTML = btn;
  container.append(keys);
});

//Keys selection
const keys = document.querySelectorAll(".btn");
keys.addEventListener("click", function () {});

// Functions

// add
const add = function (num1, num2) {
  return num1 + num2;
};

// subtract
const subtract = function (num1, num2) {
  return num1 - num2;
};

// summation
const sum = function (nums) {
  return nums.reduce((total, current) => total + current, 0);
};
