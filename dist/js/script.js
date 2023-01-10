const navBar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active",windowPosition);
})

const toggle = document.querySelector('.navbar-toggler')
toggle.addEventListener('click',()=>{
    navBar.classList.toggle('button-active');
})