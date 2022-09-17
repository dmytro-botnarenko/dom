const rootElement = document.documentElement;
const body = document.body;
const modeSwitcher = document.querySelector('.switcher');
const modeSwitcherImage = document.querySelector('.switcher__image');
const menu = document.querySelector('.main__navigation__menu__list');
const modeImages = ["img/sun-icon.svg", "img/moon-icon-fde988.svg"];
const burger = document.querySelectorAll('.main__navigation__menu__burger');
let modeCounter = 0;

function changeModeImg() {
    modeCounter = (modeCounter + 1) % modeImages.length;
    modeSwitcherImage.src = modeImages[modeCounter];
}

function burgerMode() {
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
        changeModeImg();
        burgerMode();
    });

const characters = [{
        id: 'jerry',
        name: 'Jerry Mouse',
        fullname: 'Jerry Mouse',
        species: 'Mouse',
        img: 'img/jerry_mouse.webp',
        gender: 'Male',
        appearance: 'Puss Gets the Boot',
        likes: 'Cheese, escaping Tom',
        sislikes: 'Getting injured, being retaliated',
        source: 'Image from https://en.wikipedia.org/wiki/Jerry_Mouse',
        alt: 'Jerry Mouse',
        text: 'Jeremy Adam "Jerry" Mouse is a fictional character and is one of two protagonists in Metro-Goldwyn Mayer\'s series of Tom and Jerry theatrical cartoon short films. Created by William Hanna and Joseph Barbera, he is a brown house mouse, who first appeared as an unnamed mouse in the 1940 MGM animated short Puss Gets the Boot. Hanna gave the mouse\'s original name as Jinx, while Barbera claimed the mouse went unnamed in his first appearance.'
    },
    {
        id: 'tom',
        name: 'Thomas Jasper "Tom" Cat Sr.',
        species: 'Cat',
        img: 'img/tom_cat.webp',
        gender: 'Male',
        appearance: 'Puss Gets the Boot',
        likes: 'Milk, Fish, Catching Mice',
        sislikes: 'Getting injured, being retaliated',
        source: 'Image from https://tomandjerry.fandom.com/wiki/Tom_Cat',
        alt: 'Tom Cat',
        text: 'Thomas “Tom” Cat (originally known as Jasper Cat in Puss Gets the Boot) is one of the two protagonists in Tom and Jerry, created by William Hanna and Joseph Barbera. He is a bluish-gray anthropomorphic domestic short-haired cat who first appeared in the 1940 animated short Puss Gets the Boot. Tom was originally known as Jasper during his debut in that short, however, beginning from his next appearance in The Midnight Snack and onwards his current name was used. In the fighting game MultiVersus, however, Tom\'s full name is said to be Thomas Jasper "Tom" Cat, Sr.'
    }
]
//By MGM - MGM, Fair use, https://en.wikipedia.org/w/index.php?curid=39715074