const inputs = {
  number: "number",
  operator: "operator",
  secondSubstract: "secondSubstract",
};

let lastInput = null;
let memory = [];
let result = 0;

//Necesito transformar la cadena de manera que cuando haya varios "-" juntos,
// los transforme (SOLO PARA RESULT):
//  4----4 : 4+4
//
//
//
const resolve = () => {
  const mappedMemory = memory.join("")
    .replace(/÷/g, "/")
    .replace(/×/g, "*")
    

  const resolveFormula = (fn) => new Function("return " + fn)();

  result = resolveFormula(mappedMemory).toString();

  return result;
};

const errorStyleEffect = () => {
  const backUp = display.style;
  display.style.border = "2px solid tomato";
  setTimeout(() => {
    display.style = backUp;
  }, 500);
};

const updateDisplay = () => {
  memoryOutput.innerText = memory.join(" ");
  displayOutput.innerText = result;
};

const pressNumber = (e) => {
  const number = e.target.innerText;

  switch (lastInput) {
    case null:
      memory.push(number);
      result = number;
      break;
    case "number":
      memory[memory.length - 1] += number;
      result += number;
      break;
    case "operator":
      memory.push(number);
      result = number;
      break;
    default:
      errorEffect();
  }
  lastInput = inputs.number;
  updateDisplay();
};

const pressOperator = (e) => {
  const operator = e.target.innerText;

  switch (lastInput) {
    case "number":
      result = resolve();
      memory.push(operator);
      lastInput = inputs.operator;
      break;
    default:
      if (operator === "-") {
        memory.push(operator);
      } else {
        errorStyleEffect();
      }
  }

  updateDisplay();
};

const pressEqual = () => {
  const result = resolve();

  updateDisplay();

  memory = [result];
};

zero.onclick = pressNumber;
one.onclick = pressNumber;
two.onclick = pressNumber;
three.onclick = pressNumber;
four.onclick = pressNumber;
five.onclick = pressNumber;
six.onclick = pressNumber;
seven.onclick = pressNumber;
eight.onclick = pressNumber;
nine.onclick = pressNumber;

divide.onclick = pressOperator;
multiply.onclick = pressOperator;
substract.onclick = pressOperator;
plus.onclick = pressOperator;

equal.onclick = pressEqual;
