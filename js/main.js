(function () {
    const header = document.querySelector('.header')
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    }
}())

(function () {
    const burger_btn = document.querySelector('.header__burger')
    const header_panel = document.querySelector('.header__nav')
    const burger_close = document.querySelector('.header__close-btn')
    burger_btn.addEventListener('click', () => {header_panel.classList.add('header__nav_active')})
    burger_close.addEventListener('click', () => {header_panel.classList.remove('header__nav_active')})
}())