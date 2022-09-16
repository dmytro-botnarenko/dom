// const html = document.html;
const rootElement = document.documentElement;
const body = document.body;
const modeSwitcher = document.querySelector('.switcher');
const modeSwitcherImage = document.querySelector('.switcher__image');
const menu = document.querySelector('.main__navigation__menu__list');
const modeImages = ["./img/sun-icon.svg", "./img/moon-icon-fde988.svg"];
const burger = document.querySelectorAll('.main__navigation__menu__burger');
let modeCounter = 0;

function changeImg() {
      modeCounter = (modeCounter + 1) % modeImages.length;
      modeSwitcherImage.src = modeImages[modeCounter];
    }
function spanMode() {
      for (let element of burger) {
        element.classList.toggle("dark-burger-mode");
      }
}

const darkMode = document.querySelector('.switcher')
  .addEventListener('click', function darkMode() {
    rootElement.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    modeSwitcher.classList.toggle("dark-mode");
    menu.classList.toggle("antidark-mode");
    changeImg();
    spanMode();
});
