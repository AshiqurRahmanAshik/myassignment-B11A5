const completeButtons = document.querySelectorAll(".btn");
const taskAssignedElement = document.querySelector(".task-assigned");
const numberAssignedElement = document.querySelector(".number-assigned");
const messageContainer = document.querySelector(".messageContainer");
const clearButton = document.querySelector(".clear-btn");
const dateElement = document.querySelector(".date");
const themeButton = document.querySelector(".theme-button");

const taskNames = [
  "Fix Mobile Button Issue",
  "Add Pay Success Modal",
  "Add New Reaction",
  "Fix Video Loading Issue",
  "Integrate AI Search",
  "Review Ami Probashi Site",
];

let completedTasks = 0;

// Set current date
const today = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Task completed button functionality
completeButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    alert("Board updated Successfully");
    this.disabled = true;

    let taskAssigned = parseInt(taskAssignedElement.innerText);
    let numberAssigned = parseInt(numberAssignedElement.innerText);

    if (taskAssigned > 0) taskAssignedElement.innerText = taskAssigned - 1;
    numberAssignedElement.innerText = numberAssigned + 1;

    const message = document.createElement("p");
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    message.innerText = `${taskNames[index]} is solved at ${currentTime}`;
    messageContainer.appendChild(message);

    completedTasks++;
    if (completedTasks === taskNames.length) {
      setTimeout(
        () => alert("Congrats!!! You have completed all the current tasks!"),
        500
      );
    }
  });
});

// Clear history button
clearButton.addEventListener("click", function () {
  messageContainer.innerHTML = "";
  completedTasks = 0;
});

// Function to generate random RGB color
function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Theme button to change **entire page background**
themeButton.addEventListener("click", function () {
  const randomColor = getRandomRGBColor();
  document.documentElement.style.backgroundColor = randomColor; // changes full page
  document.body.style.backgroundColor = randomColor; // ensure body also changes
});
