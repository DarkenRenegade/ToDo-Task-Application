/**
 * Represents a single task that can be added.
 */
class Task {
    /**
     * The name of the task
     */
    taskname : string;

    /**
     * Checks if the task is complete
     */
    iscomplete : boolean;
}

// Task object test code
let myTask = new Task();
myTask.taskname = "Shop for groceries";
myTask.iscomplete = true;

console.log(myTask);