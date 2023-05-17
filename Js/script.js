const mobile_Menu = document.getElementById('mobile-icon');
const navbar = document.getElementById('navbar');

mobile_Menu.addEventListener('click', () => {
    navbar.classList.toggle('hidden')
    navbar.classList.toggle('flex')
})