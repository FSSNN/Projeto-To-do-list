
// Function to get URL parameter by name
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load category data into the form
function loadCategoryData() {
    const id = getUrlParameter('id');
    if (id !== null) {
        const categories = JSON.parse(localStorage.getItem('categories')) || [];
        const category = categories[id];
        if (category) {
            document.getElementById('task-name').value = category.name;
            document.getElementById('task-desc').value = category.description;
            document.getElementById('task-date').value = category.date;
        }
    }
}

// Function to save edited category
function saveCategory() {
    const id = getUrlParameter('id');
    if (id !== null) {
        const categories = JSON.parse(localStorage.getItem('categories')) || [];
        const categoryName = document.getElementById('task-name').value;
        const categorydescription = document.getElementById('task-desc').value;
        const categorydate = document.getElementById('task-date').value;
        if (categoryName && categories[id]) {
            categories[id].name = categoryName;
            categories[id].description = categorydescription;
            categories[id].date = categorydate;
            localStorage.setItem('categories', JSON.stringify(categories));
            window.location.href = 'listar-categorias.html';
        } else {
            alert('Category not found or invalid name.');
        }
    }
}

// Event listener for form submission
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    saveCategory();
});

// Load category data when the page loads
window.onload = loadCategoryData;
