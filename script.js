// 1. SELECT ELEMENTS
const countEl = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const resetBtn = document.getElementById("resetBtn");

// 2. STATE
let count = 0;

// 3. UPDATE THE SCREEN
function updateDisplay() {

  countEl.textContent = count;


  countEl.classList.toggle("positive", count > 0);
  countEl.classList.toggle("negative", count < 0);


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

// Browsers only allow full screen after the user taps something.
function goFullscreen() {
  const page = document.documentElement;
  if (!document.fullscreenElement && page.requestFullscreen) {
    page.requestFullscreen().catch(function () {
    });
  }
}
document.addEventListener("click", goFullscreen, { once: true });

// 4. HANDLE CLICKS
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