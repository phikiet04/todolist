function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");

    
    var listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = taskText;

    // Create edit and delete buttons
    var editButton = document.createElement("button");
    editButton.className = "btn btn-warning btn-sm";
    editButton.innerText = "Edit";
    editButton.onclick = function() {
        editTask(listItem);
    };

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    // Append edit and delete buttons to list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Function to edit a task
function editTask(listItem) {
    var updatedText = prompt("Edit task:", listItem.innerText);

    if (updatedText !== null) {
        listItem.innerText = updatedText;
    }
}