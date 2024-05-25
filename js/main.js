class Task {
}
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.onclick = processTask;
};
function processTask() {
    let userTask = getTask();
    if (userTask != null) {
        const taskCompleteCheckbox = document.querySelector("#taskComplete");
        userTask.isComplete = taskCompleteCheckbox.checked;
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
    if (taskName.trim() == "") {
        isValidData = false;
        let taskErrorSpan = taskNameTextBox.nextElementSibling;
        taskErrorSpan.textContent = "You must provide a name for your task";
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
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.id = "taskCheckbox";
    taskCheckbox.textContent = `${t.taskName}`;
    taskDiv.appendChild(taskCheckbox);
    document.querySelector("#task-display").appendChild(taskDiv);
}
function addTaskToStorage(t) {
    const TaskStorageKey = "Tasks";
    let taskData = localStorage.getItem(TaskStorageKey);
    let tasks = taskData ? JSON.parse(taskData) : [];
    tasks.push(t);
    taskData = JSON.stringify(tasks);
    localStorage.setItem(TaskStorageKey, taskData);
}
function clearAllErrorMessages() {
    let allSpans = document.querySelectorAll("form span.error-msg");
    for (let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}
