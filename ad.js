const headerBurgerBtn = document.querySelector('.header_burger-btn')
const header = document.querySelector('.header')
headerBurgerBtn.addEventListener('click', () => {
    header.classList.toggle('open')
})