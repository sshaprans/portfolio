"use strict"
const burger = document.querySelector('.btn_burger');
burger.addEventListener('click', () => {
    document.querySelector('.mobile_menu').classList.toggle('is-active');
})