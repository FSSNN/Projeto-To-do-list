
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const categoryName = document.getElementById('task-name').value;
    const categoryDesc = document.getElementById('task-desc').value;
    const categoryDate = document.getElementById('task-date').value;

    const category = {
        name: categoryName,
        description: categoryDesc,
        date: categoryDate
    };

    let categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));

    window.location.href = 'listar-categorias.html';
    document.getElementById('task-form').reset();
});
