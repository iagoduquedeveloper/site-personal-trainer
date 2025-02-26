let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Aptidão física', 'Ganho de peso', 'Treinamento de força', 'Perda de gordura', 'Levantamento de peso', 'Corrida'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });