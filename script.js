let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}