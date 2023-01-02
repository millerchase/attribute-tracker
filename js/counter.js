// counter buttons
const addButtons = document.querySelectorAll(".add");
const subtractButtons = document.querySelectorAll(".subtract");

// addition function for add buttons
const add = (event) => {
  const counter = document.getElementById(
    event.target.getAttribute("data-target")
  );
  counter.innerText = parseInt(counter.innerText) + 1;
  console.log(counter);
};

// subtraction function for subtraction buttons
const subtract = (event) => {
  const counter = document.getElementById(
    event.target.getAttribute("data-target")
  );

  if (parseInt(counter.innerText) > 0) {
    counter.innerText = parseInt(counter.innerText) - 1;
  }
};

// assign add function to add buttons
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", add);
}

// assign subtract function to subtract buttons
for (let i = 0; i < subtractButtons.length; i++) {
  subtractButtons[i].addEventListener("click", subtract);
}
