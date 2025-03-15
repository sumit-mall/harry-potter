window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() { 
        window.location.href = href;
    }, 500);
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').style.opacity = 1;

    document.querySelectorAll('a.slyt-btn').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation
            transitionToPage(this.href); // Use the href attribute
        });
    });
});
