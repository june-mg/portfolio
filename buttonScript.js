document.addEventListener("DOMContentLoaded", function() {
    const websitesButton = document.getElementById("websites");
    const modelsButton = document.getElementById("models");
    const webProjectsContainer = document.querySelector(".web-projects--container");
    const modelsProjectsContainer = document.querySelector(".models-projects--container");

    websitesButton.addEventListener("click", function() {
        webProjectsContainer.style.display = "block";
        modelsProjectsContainer.style.display = "none";
    });

    modelsButton.addEventListener("click", function() {
        webProjectsContainer.style.display = "none";
        modelsProjectsContainer.style.display = "block";
    });
});
