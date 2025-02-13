$(document).ready(function () {
    // Get the current page URL
    let currentPath = window.location.pathname.split("/").pop(); 

    // Remove active class from all links
    $("header .nav-link").removeClass("active");

    // Add active class to the link that matches the current URL
    $("header .nav-link").each(function () {
        if ($(this).attr("href") === currentPath) {
            $(this).addClass("active");
        }
    });
});

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

// jQuery Filtering Script
$(document).ready(function(){
    $(".nav-link").click(function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
        let filter = $(this).data("filter");
        $(".project-item").hide();
        if (filter == "all") {
            $(".project-item").fadeIn();
        } else {
            $("." + filter).fadeIn();
        }
    });
});

// service code
