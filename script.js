// Get the elements from the DOM
const countElement = document.getElementById("count");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Variables for the timer
let timerInterval;
let timeInSeconds = 25 * 60; // Set initial time to 25 minutes

// Format the time as mm:ss
function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// Update the timer display
function updateTimer() {
  countElement.textContent = formatTime(timeInSeconds);
}

// Start the timer
function startTimer() {
  updateTimer(); // Update the initial display
  timerInterval = setInterval(() => {
    timeInSeconds--;
    updateTimer();
    if (timeInSeconds === 0) {
      stopTimer();
    }
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Reset the timer
function resetTimer() {
  stopTimer();
  timeInSeconds = 25 * 60; // Reset time to 25 minutes
  updateTimer();
}

// Add event listeners to the buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);