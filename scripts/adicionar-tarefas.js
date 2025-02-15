document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDate = document.getElementById('task-date').value;

    const selectedCategories = Array.from(document.querySelectorAll('#task-categories input:checked')).map(checkbox => checkbox.value);

    const task = {
        name: taskName,
        description: taskDesc,
        date: taskDate,
        categories: selectedCategories
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('task-form').reset();
    window.location.href = 'listar-tarefas.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    const categoriesContainer = document.getElementById('task-categories');

    categories.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('categories-list');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = category;
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
