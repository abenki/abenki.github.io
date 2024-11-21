// Get all the nav items
const navItems = document.querySelectorAll('.nav-item');

// Add event listener for each nav item
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked nav item
        this.classList.add('active');
    });
});
