// Attribute 1 setup
const atr1 = document.getElementById("atr1");
const atr1Counter = document.getElementById("atr1-counter");

// Attribute 2 setup
const atr2 = document.getElementById("atr2");
const atr2Counter = document.getElementById("atr2-counter");

// Attribute 3 setup
const atr3 = document.getElementById("atr3");
const atr3Counter = document.getElementById("atr3-counter");

const save = () => {
  localStorage.setItem("atr1", atr1.value);
  localStorage.setItem("atr1-counter", atr1Counter.innerText);

  localStorage.setItem("atr2", atr2.value);
  localStorage.setItem("atr2-counter", atr2Counter.innerText);

  localStorage.setItem("atr3", atr3.value);
  localStorage.setItem("atr3-counter", atr3Counter.innerText);
};

const load = () => {
  atr1.value = localStorage.getItem("atr1") || "";
  atr1Counter.innerText = localStorage.getItem("atr1-counter") || "0";

  atr2.value = localStorage.getItem("atr2") || "";
  atr2Counter.innerText = localStorage.getItem("atr2-counter") || "0";

  atr3.value = localStorage.getItem("atr3") || "";
  atr3Counter.innerText = localStorage.getItem("atr3-counter") || "0";
};

const reset = () => {
  localStorage.clear();

  atr1.value = "";
  atr1Counter.innerText = "0";

  atr2.value = "";
  atr2Counter.innerText = "0";

  atr3.value = "";
  atr3Counter.innerText = "0";
};

load();

document.getElementById("save-btn").addEventListener("click", save);
document.getElementById("load-btn").addEventListener("click", load);
document.getElementById("reset-btn").addEventListener("click", reset);
