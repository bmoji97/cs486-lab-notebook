// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input1 = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector(".output");

// add an event listener on the target element
copy.addEventListener("click", clickHandler);

// callback function to handle event
function clickHandler(event) {
  output.textContent = input1.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input2 = document.querySelector("#userInput2");
let section = document.querySelector("#inputEventExample");
let division = document.createElement("div");
division.setAttribute("class", "output");
section.append(division);

// add an event listener on the target element
input2.addEventListener("input", inputHandler);

// callback function to handle event
function inputHandler(event) {
  division.textContent = input2.value;
}
