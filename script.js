"use strict"
const burger = document.querySelector('.btn_burger');
burger.addEventListener('click', () => {
    document.querySelector('.mobile_menu').classList.toggle('is-active');
})
document.addEventListener('DOMContentLoaded', function() {

    function calculateAge(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    const ageElement = document.getElementById('age-value');
    if (ageElement) {
        const myBirthDate = '1993-11-17';
        ageElement.textContent = calculateAge(myBirthDate);
    }

    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }



    const skillsList = document.querySelector('.hard-list');
    const softSkills = document.querySelectorAll('.soft-list');


    const createListObserver = (listElement) => {
        if (!listElement) return;

        const listItems = listElement.querySelectorAll('li');
        if (listItems.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    listItems.forEach((item, index) => {
                        const delay = index * 100;
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, delay);
                    });
                } else {
                    listItems.forEach(item => {
                        item.classList.remove('visible');
                    });
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(listElement);
    };

    // Знаходимо всі списки, які треба анімувати
    const animatedLists = document.querySelectorAll('.hard-list, .soft-list');

    // Застосовуємо спостерігача до кожного знайденого списку
    animatedLists.forEach(createListObserver);


    // --- КОД ДЛЯ ЕФЕКТУ ЛІХТАРИКА ---
    const spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
    document.body.appendChild(spotlight);

    window.addEventListener('mousemove', (e) => {
        // Оновлюємо позицію ліхтарика через CSS змінні
        spotlight.style.setProperty('--cursorX', e.clientX + 'px');
        spotlight.style.setProperty('--cursorY', e.clientY + 'px');
    });


});