const calculator = document.querySelector("#calculator");

const buttons = [
  "%",
  "C",
  "<-",
  "/",
  "7",
  "8",
  "9",
  "*",
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

buttons.forEach((key) => {
  const btn = document.createElement("input");
  btn.setAttribute("type", "button");
  btn.setAttribute("value", key);
  btn.classList.add("btn");
  btn.onclick = handleClick;
  calculator.append(btn);
});

//Calculator functionality
const display = document.querySelector("#display");
let operand1 = null;
let operand2 = null;
let operator = null;

// Functions
function handleClick() {
  let value = this.getAttribute("value");
  //   console.log(value);
  switch (value) {
    case "C":
      operand1 = null;
      operand2 = null;
      operator = null;
      display.value = "";
      break;

    case "+":
    case "-":
    case "*":
    case "/":
      if (operator === null) {
        operator = value;
        display.value += value;
      }
      break;

    case ".":
      if (operator === null) {
        if (operand1 === null) {
          operand1 = "0.";
        } else if (operand1.indexOf(".") === -1) {
          operand1 += ".";
        }
      } else {
        if (operand2 === null) {
          operand2 = "0.";
        } else if (operand2.indexOf(".") === -1) {
          operand2 += ".";
        }
      }
      display.value += ".";
      break;

    case "=":
      if (operator !== null && operand1 !== null && operand2 !== null) {
        let result = getResult(
          parseFloat(operand1),
          operator,
          parseFloat(operand2)
        );
        display.value = result;
        operand1 = result.toString();
        operator = null;
        operand2 = null;
      }
      break;

    default:
      if (operator === null) {
        if (operand1 === null) {
          operand1 = value;
        } else {
          operand1 += value;
        }
      } else {
        if (operand2 === null) {
          operand2 = value;
        } else {
          operan2 += value;
        }
      }
      display.value += value;
  }
}

function getResult(operand1, operator, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      return null;
  }
}
