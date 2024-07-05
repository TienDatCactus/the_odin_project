const btn = document.querySelectorAll("button");
const num1 = document.querySelector(".number1");
const num2 = document.querySelector(".number2");
const op = document.querySelector(".op");
let number1 = 0;
let oper = "";
let number2 = 0;

[...btn].forEach((e) => {
  e.addEventListener("click", () => {
    const buttonText = e.textContent;
    if (e.textContent == "Del") {
      num2.value = "";
      num1.value = "";
      op.textContent = "";
      number1 = 0;
      number2 = 0;
      oper = "";
    } else if (
      !buttonText.match(/^[0-9]$/) &&
      buttonText !== "=" &&
      buttonText !== "Del"
    ) {
      if (num1.value != "") {
        op.textContent = buttonText;
        oper = op.textContent;
      }
    } else if (buttonText.match(/^[0-9]$/)) {
      if (num1.value == "") {
        num1.value = buttonText;
        number1 = num1.value;
      } else {
        num2.value = buttonText;
        number2 = num2.value;
      }
    }
  });
});

const displayer = document.querySelector(".result");
document.querySelector(".eq").addEventListener("click", () => {
  let num1 = parseInt(number1);
  let num2 = parseInt(number2);
  console.log(number2);
  switch (oper) {
    case "+":
      displayer.textContent = num1 + num2;
      break;
    case "-":
      displayer.textContent = num1 - num2;
      break;
    case "*":
      displayer.textContent = num1 * num2;
      break;
    case "%":
      displayer.textContent = num1 / num2;
      break;
  }
});
