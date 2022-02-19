// Prevent dropdown menu from closing 
$(document).on('click', '.action-buttons .dropdown-menu', function(e) {
    e.stopPropagation();
});
// Carousel
$('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover'
});
// Current year for copyright
$('#year').text(new Date().getFullYear());