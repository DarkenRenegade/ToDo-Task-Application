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
    clearAllErrorMessages();
    let taskNameTextBox = document.querySelector("#taskName");
    let isValidData = true;
    let taskName = taskNameTextBox.value;
    if (!isValidTaskName(taskName)) {
        isValidData = false;
        taskNameTextBox.nextElementSibling.textContent = "The name must be 100 characters or less.";
    }
}
function isValidTaskName(data) {
    if (data.length > 100) {
        return false;
    }
    else {
        return true;
    }
}
function addTask(t) { }
function clearAllErrorMessages() {
    let allSpans = document.querySelectorAll("form span.error-msg");
    for (let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}
