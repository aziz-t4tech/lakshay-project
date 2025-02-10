// JavaScript for filtering projects by category
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = button.getAttribute('data-filter');

        // Remove 'active' class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active-category'));

        // Add 'active' class to the clicked button
        button.classList.add('active-category');

        // Hide all project items
        document.querySelectorAll('.project-item').forEach(item => item.style.display = 'none');

        // Show projects that match the selected category
        document.querySelectorAll(`.project-item.${filter}`).forEach(item => item.style.display = 'block');
    });
});

// search bar slider code
$(document).ready(function() {
    $('#searchSlider').click(() => {
        $('#searchBar').slideToggle();
    });
});
