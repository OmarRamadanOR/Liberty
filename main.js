const droppToggle = document.querySelector('.toggle-menu');
const droopToggleI = document.querySelector('.toggle-menu i');
const dropMenu = document.querySelector('.drop-menu');

droppToggle.onclick = function () {
    dropMenu.classList.toggle('open');
    const isOpen = dropMenu.classList.contains('open')

    droopToggleI.classList = isOpen
        ? 'fa fa-xmark fa-2x'
        : 'fa fa-bars fa-2x'
}

// change direction of a image

let rightIcon = document.querySelector('.right-icon');
let leftIcon = document.querySelector('.left-icon');
let bannerOne = document.getElementById("banner1");

rightIcon.addEventListener('click', () => {
    bannerOne.src = "images/banner-02.png";
})

leftIcon.addEventListener('click', () => {
    bannerOne.src = "images/banner-01.png";
})
