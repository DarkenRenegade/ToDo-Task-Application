class Task {
}
let myTask = new Task();
myTask.taskName = "Shop for groceries";
myTask.isComplete = true;
console.log(myTask);
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.onclick = processTask;
};
function processTask() {
    console.log("processTask was called");
    let userTask = getTask();
    if (userTask != null) {
        addTask(userTask);
    }
}
function getTask() {
    let taskNameTextBox = document.querySelector("#taskname");
    let isValidData = true;
    let taskName = taskNameTextBox.value;
    if (!isValidTaskName(taskName)) {
        isValidData = false;
        taskNameTextBox.nextElementSibling.textContent = "The name must be 1000 characters or less.";
    }
}
function isValidTaskName(data) {
    if (data.length > 1000) {
        return false;
    }
    else {
        return true;
    }
}
function addTask(t) { }
