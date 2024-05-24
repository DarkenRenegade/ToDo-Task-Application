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

// Task object test code
let myTask = new Task();
myTask.taskName = "Shop for groceries";
myTask.isComplete = true;

console.log(myTask);


window.onload = function() {
    // Set up button click for add task form
    let addTaskBtn:HTMLButtonElement = document.querySelector("#add-task") as HTMLButtonElement;
    addTaskBtn.onclick = processTask;
}

function processTask() {
    console.log("processTask was called");

    let userTask = getTask();
    if (userTask != null) {
        addTask(userTask);
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
    // Get the input
    let taskNameTextBox = document.querySelector("#taskname") as HTMLInputElement;

    // Validate data
    let isValidData:boolean = true;

    // Validate the task name
    let taskName:string = taskNameTextBox.value;
    if (!isValidTaskName(taskName)) {
        isValidData = false;
        taskNameTextBox.nextElementSibling.textContent = "The name must be 1000 characters or less."
    }
}

/**
 * This validates a task name. Returns true
 * if the name consists of an expression pattern
 * for valid task names.
 * @param data The string to be validated
 * @returns True if data is a valid task pattern
 */
function isValidTaskName(data:string) {
    if (data.length > 1000) {
        return false;
    } else {
        return true;
    }
}

/**
 * Adds a Task objext to web storage. Assumes
 * all data is valid.
 * @param t The Task containing valid data will be added
 */
function addTask(t:Task):void {}