// DOM elements
const domElements = {
  count: document.getElementById("count"),
  startButton: document.getElementById("start"),
  stopButton: document.getElementById("stop"),
  resetButton: document.getElementById("reset")
};

// Timer settings
const timerSettings = {
  interval: null,
  defaultTime: 25 * 60,  // 25 minutes
  currentTime: 25 * 60
};

// Format the time as mm:ss
function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// Update the timer display
function updateDisplay() {
  domElements.count.textContent = formatTime(timerSettings.currentTime);
}

// Start the timer
function startTimer() {
  updateDisplay();
  timerSettings.interval = setInterval(() => {
      timerSettings.currentTime--;
      updateDisplay();
      if (timerSettings.currentTime === 0) {
          stopTimer();
      }
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timerSettings.interval);
}

// Reset the timer
function resetTimer() {
  stopTimer();
  timerSettings.currentTime = timerSettings.defaultTime;
  updateDisplay();
}

// Initialize event listeners
function initListeners() {
  domElements.startButton.addEventListener("click", startTimer);
  domElements.stopButton.addEventListener("click", stopTimer);
  domElements.resetButton.addEventListener("click", resetTimer);
}

// Initialize the timer application
function initTimerApp() {
  updateDisplay();
  initListeners();
}

initTimerApp();

