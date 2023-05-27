const button = document.getElementById('bars');
const closeButton = document.getElementById('close');
const navBar = document.getElementById('showNav');


button.addEventListener('click', () => {
    navBar.classList.toggle('showNav');
    button.classList.toggle('hideBtn');
    closeButton.classList.toggle('showBtn');
    closeButton.style.animation = 'rotate .5s ease'
})
closeButton.addEventListener('click', () => {
    navBar.classList.toggle('showNav');
    button.classList.toggle('hideBtn');
    closeButton.classList.toggle('showBtn');
})