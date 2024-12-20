
const Btn = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu-icon i')
const dropdowMenu = document.querySelector('.dropdown_menu')

Btn.onclick = function () {
    dropdowMenu.classList.toggle('open')
    const isOpen = dropdowMenu.classList.contains('open')

    menu.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
