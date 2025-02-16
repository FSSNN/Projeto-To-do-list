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

    // Marcar categorias já selecionadas
    const selectedCategories = task.categories || [];
    selectedCategories.forEach(category => {
        const checkbox = document.getElementById(category);
        if (checkbox) {
            checkbox.checked = true;
        }
    });
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
        date: document.getElementById('task-date').value,
        categories: Array.from(document.querySelectorAll('input[name="categories"]:checked')).map(cb => cb.id)
    };
    saveTask(id, updatedTask);
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
            window.location.href = 'login.html'; // Redirect to the main page
        }
    } else {
        alert('Invalid task ID!');
        window.location.href = 'login.html'; // Redirect to the main page
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const categoriesContainer = document.getElementById('task-categories');

    categories.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('categories-list');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = category.name;
        checkbox.name = 'categories';
        checkbox.value = category.name;

        const label = document.createElement('label');
        label.htmlFor = category.name;
        label.textContent = category.name;

        div.appendChild(checkbox);
        div.appendChild(label);
        categoriesContainer.appendChild(div);
        categoriesContainer.appendChild(document.createElement('br'));
    });
});
// Initialize the edit task functionality when the page loads
window.onload = initEditTask;
