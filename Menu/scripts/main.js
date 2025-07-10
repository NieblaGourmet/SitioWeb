// Funciones mejoradas de filtrado y búsqueda
function filterMenu() {
    const category = document.getElementById('category').value;
    const items = document.querySelectorAll('.menu-item');
    const categoryTitles = document.querySelectorAll('.category-title');

    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    categoryTitles.forEach(title => {
        if (category === 'all' || title.id.includes(category)) {
            title.style.display = 'block';
        } else {
            title.style.display = 'none';
        }
    });
}