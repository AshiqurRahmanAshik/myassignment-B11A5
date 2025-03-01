const completeButtons = document.querySelectorAll(".btn");
const taskAssignedElement = document.querySelector(".task-assigned");
const numberAssignedElement = document.querySelector(".number-assigned");

for (let btn of completeButtons) {
  btn.addEventListener("click", function () {
    alert("Board updated Successfully");

    let taskAssigned = parseInt(taskAssignedElement.innerText);
    let numberAssigned = parseInt(numberAssignedElement.innerText);

    if (taskAssigned > 0) {
      taskAssignedElement.innerText = taskAssigned - 1;
    }
    numberAssignedElement.innerHTML = numberAssigned + 1;
  });
}
const date = new Date();
const todayDate = (document.querySelector(".date").innerHTML = date);
