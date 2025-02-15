document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('tbody');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tbody.innerHTML = ''; // Clear existing rows

        tasks.forEach((task, index) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = task.name;
            row.appendChild(nameCell);

            const descCell = document.createElement('td');
            descCell.textContent = task.description;
            row.appendChild(descCell);

            const categoriesCell = document.createElement('td');
            categoriesCell.textContent = task.categories;
            row.appendChild(categoriesCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = task.date;
            row.appendChild(dateCell);

            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.classList.add( 'btn-delete');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteTask(index);
            });
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            tbody.appendChild(row);
        });
    }

    function deleteTask(index) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }

    const addButton = document.querySelector('#add-task-button');
    addButton.addEventListener('click', () => {
        window.location.href = 'adicionar-tarefas.html';
    });

    loadTasks();
});
