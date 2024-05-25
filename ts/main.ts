/**
 * Represents a single task that can be added.
 */
class Task {
    /**
     * The name of the task
     */
    taskName : string;

    /**
     * Checks if the task is complete
     */
    isComplete : boolean;
}

window.onload = function() {
    // Set up button click for add task form
    let addTaskBtn:HTMLButtonElement = document.querySelector("#add-task") as HTMLButtonElement;
    addTaskBtn.onclick = processTask;
}

function processTask() {

    let userTask = getTask();
    if (userTask != null) {
        addTaskToWebpage(userTask);
    }
}

/**
 * This function will retrieve all the task
 * data from the HTML page. If said task is
 * complete, a Task object will be returned.
 * If there is any invalid data in a Task,
 * null will be returned and error messages
 * will be shown on the web page.
 */
function getTask():Task {
    clearAllErrorMessages();

    // Get the input
    let taskNameTextBox = document.querySelector("#taskName") as HTMLInputElement;

    // Validate data
    let isValidData:boolean = true;

    // Validate the task name
    let taskName:string = taskNameTextBox.value;
    if (!isValidTaskName(taskName)) {
        isValidData = false;
        taskNameTextBox.nextElementSibling.textContent = "The name must be 100 characters or less.";
    }

    if (isValidData) {
        // Create and monitor the tasks created and checks if all data is valid
        let addedTask = new Task();
        addedTask.taskName = taskName;
    }
    return null;
}

/**
 * This validates a task name. Returns true
 * if the name consists of an expression pattern
 * for valid task names.
 * @param data The string to be validated
 * @returns True if data is a valid task pattern
 */
function isValidTaskName(data:string) {
    if (data.length > 100) {
        return false;
    } else {
        return true;
    }
}

/**
 * Adds a Task object to the web page and web storage. Assumes
 * all data is valid.
 * @param t The Task containing valid data will be added
 */
function addTaskToWebpage(t:Task):void {

    // Add task to the web page
    let taskDiv:HTMLDivElement = document.createElement("div");

    let taskHeading = document.createElement("h2");
    taskHeading.textContent = `${t.taskName}`;
    // Add h2 to task div
    taskDiv.appendChild(taskHeading);

    // Add taskDiv to web page
    document.querySelector("#task-display").appendChild(taskDiv);
}

function addTaskToStorage(t:Task) {
    const TaskStorageKey = "Tasks";
    let taskData = localStorage.getItem(TaskStorageKey);

    let tasks = taskData ? JSON.parse(taskData) : [];
    tasks.push(t);
    taskData = JSON.stringify(tasks);
    localStorage.setItem(TaskStorageKey, taskData);
}

/**
 * Clears all of the validation error message
 * spans in the form.
 */
function clearAllErrorMessages() {
    // Get all error spans
    let allSpans = document.querySelectorAll("form span.error-msg");

    // Loop through, and turn each span into an empty string
    for (let i = 0; i < allSpans.length; i++) {
        let currentSpan = allSpans[i];
        currentSpan.textContent = "";
    }
}