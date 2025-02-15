
document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('table tbody');

    function loadCategories() {
        const categories = JSON.parse(localStorage.getItem('categories')) || [];
        tbody.innerHTML = '';

        categories.forEach((category, index) => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = index + 1;
            row.appendChild(idCell);

            const categorieCell = document.createElement('td');
            categorieCell.textContent = category.name;
            row.appendChild(categorieCell);

            const descriptioncell = document.createElement('td');
            descriptioncell.textContent = category.description;
            row.appendChild(descriptioncell);

            const datecell = document.createElement('td');
            datecell.textContent = category.date;
            row.appendChild(datecell);

            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn-delete');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteCategory(index));
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            tbody.appendChild(row);
        });
    }

    function deleteCategory(index) {
        const categories = JSON.parse(localStorage.getItem('categories')) || [];
        categories.splice(index, 1);
        localStorage.setItem('categories', JSON.stringify(categories));
        loadCategories();
    }

    loadCategories();
});
