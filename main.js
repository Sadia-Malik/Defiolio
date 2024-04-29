window.onload = function() {
    // Get all the navigation menu items
    var menuItems = document.querySelectorAll('.nav-menu li a');
    
    // Add event listener to each menu item
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Add active class to the clicked menu item
            this.classList.add('active');
        });
    });
};
// Menu open by icon
function toggleMenu() {
    var menu = document.querySelector('.nav-menu ul');
    menu.classList.toggle('open');
}

// Tab Function
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".nav-menu-icon");
    const sideVer = document.querySelector(".side-ver");

    menuIcon.addEventListener("click", function() {
        if (sideVer.style.display === "block") {
            sideVer.style.display = "none";
        } else {
            sideVer.style.display = "block";
        }
    });
});

// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// const marqueeContent = document.querySelector("section.marquee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);


var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


