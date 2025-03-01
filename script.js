const completeButtons = document.querySelectorAll(".btn");
const taskAssignedElement = document.querySelector(".task-assigned");
const numberAssignedElement = document.querySelector(".number-assigned");

for (let btn of completeButtons) {
  btn.addEventListener("click", function () {
    alert("Board updated Successfully");

    this.disabled = true;

    let taskAssigned = parseInt(taskAssignedElement.innerText);
    let numberAssigned = parseInt(numberAssignedElement.innerText);

    if (taskAssigned > 0) {
      taskAssignedElement.innerText = taskAssigned - 1;
    }
    numberAssignedElement.innerHTML = numberAssigned + 1;
    const messageContainer = document.querySelector(".messageContainer");
    const message = document.createElement("p");
    message.innerText = `You have completed the task ${todayDate}`;
    messageContainer.appendChild(message);
  });
}

// Live Date
const date = new Date();
const todayDate = (document.querySelector(".date").innerHTML =
  date.toLocaleString());

// Random Background
const themeButton = document.querySelector(".theme-button");

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

themeButton.addEventListener("click", function () {
  const randomRGBColor = getRandomRGBColor();
  document.body.style.backgroundColor = randomRGBColor;
});
