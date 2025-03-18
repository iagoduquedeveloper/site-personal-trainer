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
