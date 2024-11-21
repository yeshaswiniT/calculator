const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
  display.value += input;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to calculate the expression
function calculate() {
  const expression = display.value; // Fetch expression from the display

  // Arrays to hold operators and operands
  const operators = [];
  const operands = [];
  let number = "";

  // Parse the expression
  for (let char of expression) {
    if ("0123456789.".includes(char)) {
      number += char; // Build the number
    } else if ("+-*/".includes(char)) {
      if (number === "") {
        display.value = "Error";
        return;
      }
      operands.push(parseFloat(number)); // Store number
      operators.push(char); // Store operator
      number = ""; // Reset number
    } else {
      display.value = "Error"; // Invalid character
      return;
    }
  }

  // Add the last number to operands
  if (number !== "") operands.push(parseFloat(number));

  // Validate the expression
  if (operands.length - 1 !== operators.length) {
    display.value = "Error";
    return;
  }

  // First handle '*' and '/' operators
  while (operators.includes("*") || operators.includes("/")) {
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "*" || operators[i] === "/") {
        const result =
          operators[i] === "*"
            ? operands[i] * operands[i + 1]
            : operands[i] / operands[i + 1];
        operands.splice(i, 2, result); // Replace two operands with result
        operators.splice(i, 1); // Remove the operator
        break;
      }
    }
  }

  // Then handle '+' and '-' operators
  while (operators.length > 0) {
    const result =
      operators[0] === "+"
        ? operands[0] + operands[1]
        : operands[0] - operands[1];
    operands.splice(0, 2, result); // Replace two operands with result
    operators.splice(0, 1); // Remove the operator
  }

  // Display the final result
  display.value = operands[0];
}

// Optional function for reset (if required)
function resetCalculator() {
  clearDisplay();
}
