// 1. SELECT ELEMENTS
// getElementById finds an element by its id in the HTML.
const countEl = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const resetBtn = document.getElementById("resetBtn");

// 2. STATE
// This variable holds the current number.
let count = 0;

// 3. UPDATE THE SCREEN
function updateDisplay() {
  // Show the number
  countEl.textContent = count;

  // Change color: blue above 0, red below 0
  countEl.classList.toggle("positive", count > 0);
  countEl.classList.toggle("negative", count < 0);

  // Replay the "pop" animation
  countEl.classList.remove("pop");
  void countEl.offsetWidth; // small trick to restart the animation
  countEl.classList.add("pop");
}

// Small vibration on phones that support it (Android)
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }
}

// 4. HANDLE CLICKS
// addEventListener runs a function when the button is clicked.
addBtn.addEventListener("click", function () {
  count = count + 1;
  updateDisplay();
  vibrate();
});

subtractBtn.addEventListener("click", function () {
  count = count - 1;
  updateDisplay();
  vibrate();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
  vibrate();
});