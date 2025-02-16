
// Function to get query parameter by name
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load task data into the form
function loadTaskData(task) {
    document.getElementById('task-name').value = task.name;
    document.getElementById('task-desc').value = task.description;
    document.getElementById('task-date').value = task.date;
}

// Function to save edited task to local storage
function saveTask(id, updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[id] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const id = getQueryParam('id');
    const updatedTask = {
        name: document.getElementById('task-name').value,
        description: document.getElementById('task-desc').value,
        date: document.getElementById('task-date').value
    };
    saveTask(id, updatedTask);
    alert('Task updated successfully!');
    window.location.href = 'listar-tarefas.html'; // Redirect to the main page
}

// Main function to initialize the edit task functionality
function initEditTask() {
    const id = getQueryParam('id');
    if (id !== null) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const task = tasks[id];
        if (task) {
            loadTaskData(task);
            document.getElementById('task-form').addEventListener('submit', handleFormSubmit);
        } else {
            alert('Task not found!');
            window.location.href = 'index.html'; // Redirect to the main page
        }
    } else {
        alert('Invalid task ID!');
        window.location.href = 'index.html'; // Redirect to the main page
    }
}

// Initialize the edit task functionality when the page loads
window.onload = initEditTask;
