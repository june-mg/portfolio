document.addEventListener("DOMContentLoaded", function() {
    const projectsButton = document.getElementById("websites--projects");
    const certificationsButton = document.getElementById("websites--certifications");
    const publicationsButton = document.getElementById("websites--publications");

    const webProjectsContainer = document.querySelector(".web-projects--container");
    const certificationsContainer = document.querySelector(".certifications--container");
    const publicationsContainer = document.querySelector(".publications--container");

    const containers = [webProjectsContainer, certificationsContainer, publicationsContainer];

    function showContainer(containerToShow) {
        containers.forEach(container => {
            container.style.display = "none";
        });
        containerToShow.style.display = "block";
    }

    projectsButton.addEventListener("click", function() {
        showContainer(webProjectsContainer);
    });

    certificationsButton.addEventListener("click", function() {
        showContainer(certificationsContainer);
    });

    publicationsButton.addEventListener("click", function() {
        showContainer(publicationsContainer);
    });
    // Show web projects by default
    showContainer(webProjectsContainer);
});

