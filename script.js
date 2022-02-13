// Sidebar
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
// Main
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    // Sidebar
    sidebar.classList.toggle("small-sidebar");
    // Main
    container.classList.toggle("large-container")
}



