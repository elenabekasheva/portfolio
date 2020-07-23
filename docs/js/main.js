$(document).ready(function () {
    /* 
    1) получить кнопку, по которой будем делать клик
    2) получить мобильное меню
    3) прослушать клик по кнопке и по клику то добавлять, то удалять класс active у моб меню
    4) то добавлять то удалять класс active у кнопки, по кторой кликаем
    5) получить оверлей
    6) при клике по кнопке то добавить, то удалить класс active
    
    1) прослушать собитые ресайз у окна
    2) у всех дивов убраит класс activе */     

    const mobileMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header-menu');
    const overlay = document.querySelector('#overlay');

    mobileMenuToggle.addEventListener('click', function() {
        mobMenu.classList.toggle('active');
        this.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    window.addEventListener('resize', function(){
        mobMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
    })
})