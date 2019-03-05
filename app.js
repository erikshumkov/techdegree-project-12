// APP
const nav = document.querySelector('.main-menu');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcon = menuBtn.querySelector('i');

const li = document.querySelectorAll('li')[0];
const li2 = document.querySelectorAll('li')[1];
const li3 = document.querySelectorAll('li')[2];

window.onscroll = () => { wickedStick() };

let sticky = nav.offsetTop;

function wickedStick() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    menuBtn.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
    menuBtn.classList.remove("sticky");
  }
}

function showHideMenu() {

    if (nav.style.display === "none") {
        nav.style.display = "block";
        li.classList.add('intro');
        li2.classList.add('intro2');
        li3.classList.add('intro3');
        menuBtn.style.transform = "rotate(45deg)";
        menuBtnIcon.style.transform = "scale(1.5)";

        setTimeout(() => {
          li.classList.remove('intro');
          li2.classList.remove('intro2');
          li3.classList.remove('intro3');
        }, 510);
    } else {
        li.classList.add('hide1');
        li2.classList.add('hide2');
        li3.classList.add('hide3');
        menuBtn.style.transform = "rotate(0deg)";
        menuBtnIcon.style.transform = "scale(1.0)";
        setTimeout(() => {
          nav.style.display = "none";
          li.classList.remove('hide1');
          li2.classList.remove('hide2');
          li3.classList.remove('hide3');
        }, 350);
    }
}

menuBtn.addEventListener('click', () => showHideMenu() );

const wrapperTwo = document.querySelector('.wrapper-2');

wrapperTwo.addEventListener('click', (e) => {
    let tag = e.target;
    if (tag.className === 'plus-btn') {
      tag.parentNode.parentNode.previousElementSibling.classList.remove('slideBack');
      tag.parentNode.parentNode.previousElementSibling.classList.add('slide');
    }
    if (tag.className === 'p-btn') {
      tag.parentNode.parentNode.classList.add('slideBack');
      tag.parentNode.parentNode.classList.remove('slide');
    }
});
