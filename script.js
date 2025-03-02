const completeButtons = document.querySelectorAll(".btn");
const taskAssignedElement = document.querySelector(".task-assigned");
const numberAssignedElement = document.querySelector(".number-assigned");
const messageContainer = document.querySelector(".messageContainer");
const clearButton = document.querySelector(".clear-btn");
const dateElement = document.querySelector(".date");

const taskNames = [
  "Fix Mobile Button Issue",
  "Add Pay Success Modal",
  "Add New Reaction",
  "Fix Video Loading Issue",
  "Integrate AI Search",
  "Review Ami Probashi Site",
];

let completedTasks = 0;

const today = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

completeButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    alert("Board updated Successfully");
    this.disabled = true;

    let taskAssigned = parseInt(taskAssignedElement.innerText);
    let numberAssigned = parseInt(numberAssignedElement.innerText);

    if (taskAssigned > 0) {
      taskAssignedElement.innerText = taskAssigned - 1;
    }
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
      setTimeout(() => {
        alert(" Congrats!!! You have completed all the current tasks!");
      }, 500);
    }
  });
});

clearButton.addEventListener("click", function () {
  messageContainer.innerHTML = "";
  completedTasks = 0;
});
