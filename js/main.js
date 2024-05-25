class Task {
}
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.onclick = processTask;
};
function processTask() {
    let userTask = getTask();
    if (userTask != null) {
        addTaskToWebpage(userTask);
        addTaskToStorage(userTask);
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
    if (isValidData) {
        let addedTask = new Task();
        addedTask.taskName = taskName;
        return addedTask;
    }
    return null;
}
function isValidTaskName(data) {
    if (data.length > 100) {
        return false;
    }
    else {
        return true;
    }
}
function addTaskToWebpage(t) {
    let taskDiv = document.createElement("div");
    let taskHeading = document.createElement("h2");
    taskHeading.textContent = `${t.taskName}`;
    taskDiv.appendChild(taskHeading);
    document.querySelector("#task-display").appendChild(taskDiv);
}
function addTaskToStorage(t) {
    const TaskStorageKey = "Tasks";
    let taskData = localStorage.getItem(TaskStorageKey);
    let tasks = taskData ? JSON.parse(taskData) : [];
    tasks.push(t);
    taskData = JSON.stringify(tasks);
}
function clearAllErrorMessages() {
    let allSpans = document.querySelectorAll("form span.error-msg");
    for (let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}
