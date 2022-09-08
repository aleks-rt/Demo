// открыть бургерное меню
var isOpenMenu = false;
menu = document.querySelector('.menu');
burger_menu = document.querySelector('.submenu');
burger_line = document.querySelectorAll('.burger-line')

menu.addEventListener('click', function() {
    isOpenMenu = !isOpenMenu;
    if (isOpenMenu) {
        burger_menu.style.display = 'block'
        // burger_menu.classList.remove("hide");
        // burger_menu.classList.add("open-menu");
        burger_line[0].style.display = 'none';
        burger_line[1].style.transform = 'rotate(45deg)';
        burger_line[2].style.transform = 'rotate(-45deg)';
        burger_line[3].style.display = 'none';
    } else {
        burger_menu.style.display = 'none'
        // burger_menu.classList.remove("open-menu");
        // burger_menu.classList.add("hide");
        burger_line[0].style.display = 'block';
        burger_line[1].style.transform = 'rotate(0deg)';
        burger_line[2].style.transform = 'rotate(0deg)';
        burger_line[3].style.display = 'block';
    }
});