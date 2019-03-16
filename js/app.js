// Get navigation menu.
const nav = document.querySelector('.main-menu');
// Get navigation menu list.
const ul = document.querySelector('.menu-ul');
// Get menu button ( the plus button ).
const menuBtn = document.querySelector('.menu-btn');
// Get menu button icon.
const menuBtnIcon = menuBtn.querySelector('i');
let sticky = nav.offsetTop;
// Get the project section of the website.
const sectionTwo = document.querySelector('.section-2');

// Hide the mobile / tablet menu.
function hideMenu() {
  menuBtn.style.transform = "rotate(0deg)";
  menuBtn.style.backgroundColor = "deepskyblue";
  menuBtnIcon.style.transform = "scale(1.0)";
  nav.className += " curtainReverse";
  setTimeout(() => {
    nav.style.display = "none";
    nav.classList.remove("curtainReverse");
  }, 400);
}

// When the window gets scrolled, add animation effects. Sticky menu when the viewport is in mobile or tablet size.
window.onscroll = () => {
  addAnimation();
  if (window.innerWidth < 1024) {
    wickedStick();
  } else {
    nav.classList.remove("sticky");
    menuBtn.classList.remove("sticky");
  }
};

// Get section two projects headline.
const headlineProject = document.querySelectorAll('h2')[0];
headlineProject.style.opacity = 0;
// Get all project divs.
let project = document.querySelectorAll('.project');
// Make them invisible.
for(let i = 0; i < project.length; i++) {
  project[i].style.opacity = 0;
}

// Add animation when the window get to a specific height.
function addAnimation() {
    let scrollVertical = window.pageYOffset;
    if(scrollVertical > 20 && scrollVertical < 100) {
      // Projects headline animation
      headlineProject.className = "bounce";
    }
    if(scrollVertical > 333 && scrollVertical < 360) {
      for(let i = 0; i < 3; i++) {
        if(project[i].className === "project") {
          // First three project divs gets faded in, animation.
          project[i].className += " fadeIn";
        }
      }
    }
    if(scrollVertical > 550 && scrollVertical < 600) {
      for(let i = 3; i < project.length; i++) {
        if(project[i].className === "project") {
          // Last three project divs gets faded in, animation.
          project[i].className += " fadeIn";
        }
      }
    }
}

// Sticky menu functionality.
// Source: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
function wickedStick() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    menuBtn.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
    menuBtn.classList.remove("sticky");
  }
}

// Show or Hide menu in mobile or tablet screen sizes.
function showHideMenu() {
    if (nav.style.display === "none") {
        nav.style.display = "block";
        menuBtn.style.transform = "rotate(45deg)";
        menuBtn.style.backgroundColor = "midnightblue";
        menuBtnIcon.style.transform = "scale(1.5)";
    } else {
      hideMenu();
    }
}

// Hide mobile / tablet menu when one of the list items gets clicked.
ul.addEventListener('click', (e) => {
  let tag = e.target;
  if(window.innerWidth < 1024) {
    if (tag.tagName === 'SPAN') {
      hideMenu();
    }
  }
});

// The top right plus button to Show or Hide the menu.
menuBtn.addEventListener('click', () => showHideMenu() );

// The whole Projects section listens for clicks. Functionality added to the plus button, images and times icon.
// Overlay gets added to the specific div that gets clicked.
sectionTwo.addEventListener('click', (e) => {
    let tag = e.target;
    if (tag.className === 'plus-btn') {
      tag.parentNode.parentNode.previousElementSibling.classList.remove('slideBack');
      tag.parentNode.parentNode.previousElementSibling.classList.add('slide');
    }
    if (tag.tagName === 'IMG') {
      tag.nextElementSibling.classList.remove('slideBack');
      tag.nextElementSibling.classList.add('slide');
    }
    if (tag.className === 'p-btn') {
      tag.parentNode.parentNode.classList.add('slideBack');
      tag.parentNode.parentNode.classList.remove('slide');
    }
});
