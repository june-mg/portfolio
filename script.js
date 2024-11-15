document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project__buttons--anchor-primary');
    const projects = document.querySelectorAll('.project');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all projects
            projects.forEach(project => project.classList.remove('active'));
            
            // Add 'active' class to the clicked project
            projects[index].classList.add('active');
        });
    });

    // Set the first project as active by default
    if (projects.length > 0) {
        projects[0].classList.add('active');
    }
});