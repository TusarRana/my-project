document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filterSelect');
    const productItems = document.querySelectorAll('.product-card');

    function filterProducts() {
        const selectedCategory = filterSelect.value;
        productItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            item.style.display = (selectedCategory === 'All' || selectedCategory === itemCategory) ? 'block' : 'none';
        });
    }

    filterSelect.addEventListener('change', filterProducts);
    filterProducts(); // Initial load filter
});
