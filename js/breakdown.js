// Attribute 1 setup
// const atr1 = document.getElementById("atr1");
// const atr1Counter = document.getElementById("atr1-counter");

// // Attribute 2 setup
// const atr2 = document.getElementById("atr2");
// const atr2Counter = document.getElementById("atr2-counter");

// // Attribute 3 setup
// const atr3 = document.getElementById("atr3");
// const atr3Counter = document.getElementById("atr3-counter");

const breakdown = () => {
  if (atr1.value != "" && atr2.value != "" && atr3.value != "") {
    // assign all count values for multiple uses
    const atr1BCount = document.getElementById("atr1-b-count");
    const atr2BCount = document.getElementById("atr2-b-count");
    const atr3BCount = document.getElementById("atr3-b-count");

    // adjust display if all attributes are selected
    document.getElementById("no-atr").style.display = "none";
    document.getElementById("atr-breakdown-lst").style.visibility = "visible";

    // breakdown first attribute
    document.getElementById("atr1-b").innerText = atr1.value;
    atr1BCount.innerText =
      10 - parseInt(atr1Counter.innerText) > 0
        ? 10 - parseInt(atr1Counter.innerText)
        : 0;
    document.getElementById("plural1").innerText =
      10 - parseInt(atr1Counter.innerText) != 1 ? "s" : "";

    // breakdown second attribute
    document.getElementById("atr2-b").innerText = atr2.value;
    atr2BCount.innerText =
      10 - parseInt(atr2Counter.innerText) > 0
        ? 10 - parseInt(atr2Counter.innerText)
        : 0;
    document.getElementById("plural2").innerText =
      10 - parseInt(atr2Counter.innerText) != 1 ? "s" : "";

    // breakdown third attribute
    document.getElementById("atr3-b").innerText = atr3.value;
    atr3BCount.innerText =
      10 - parseInt(atr3Counter.innerText) > 0
        ? 10 - parseInt(atr3Counter.innerText)
        : 0;
    document.getElementById("plural3").innerText =
      10 - parseInt(atr3Counter.innerText) != 1 ? "s" : "";

    // "to level up" countdown
    const pointsLeft =
      30 -
        (parseInt(atr1Counter.innerText) +
          parseInt(atr2Counter.innerText) +
          parseInt(atr3Counter.innerText)) >
      0
        ? 30 -
          (parseInt(atr1Counter.innerText) +
            parseInt(atr2Counter.innerText) +
            parseInt(atr3Counter.innerText))
        : 0;

    document.getElementById("countdown").innerText = pointsLeft;
    document.getElementById("plural-countdown").innerText =
      pointsLeft === 1 ? "" : "s";
  } else {
    // reset display if all attributes aren't selected
    document.getElementById("no-atr").style.display = "block";
    document.getElementById("atr-breakdown-lst").style.visibility = "hidden";
  }
};

// execute breakdown on startup
breakdown();

// execute breakdown when changes are made to attribute list
document.getElementById("attributes").addEventListener("change", breakdown);

// assign breakdown function to addition and subtraction buttons
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", breakdown);
}
for (let i = 0; i < subtractButtons.length; i++) {
  subtractButtons[i].addEventListener("click", breakdown);
}

// execute breakdown when reset and load btn are pressed
document.getElementById("reset-btn").addEventListener("click", breakdown);
document.getElementById("load-btn").addEventListener("click", breakdown);

{
  /* <p>
        <b id="atr1-b"></b> - still requires
        <b><u id="atr1-b-count"></u></b> points
    </p>
    <em id="atr1-b-desc"></em> */
}
