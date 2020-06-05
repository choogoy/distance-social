'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const dropdown = document.querySelector('.share-dropdown'),
        arrow = document.querySelector('.arrow'),
        share = document.getElementById('share'),
        like = document.getElementById('like'),
        likeBtn = document.querySelector('.like'),
        likeCounter = document.getElementById('like-counter'),
        options = document.getElementById('options'),
        optionsModal = document.querySelector('.your-page-options'),
        iconLinkDropdown = document.querySelector('.icon-link-dropdown'),
        menuSidebar = document.querySelector('.menu-sidebar');

    // Это для визуальной работы =) побаловался немного
    const toggleLike = () => {
        
        like.classList.toggle('active');

        if (like.classList.contains('active')) {
            likeCounter.textContent = '24';
            likeCounter.style.fontWeight = '600';
            likeCounter.style.color = 'red';
        } else {
            likeCounter.textContent = '23';
            likeCounter.style.fontWeight = '';
            likeCounter.style.color = '';
        }

    };

    const toggleDropdown = () => {
        dropdown.classList.toggle('hide');
        dropdown.classList.toggle('show');
        arrow.classList.toggle('hide');        
        arrow.classList.toggle('show');
    };

    const toggleOptions = () => {
        optionsModal.classList.toggle('hide');
        optionsModal.classList.toggle('show');
    };

    options.addEventListener('click', toggleOptions);
    share.addEventListener('click', toggleDropdown);

    iconLinkDropdown.addEventListener('click', event => {

        const target = event.target;

        console.log(target.closest('.icon-link-dropdown'));

        if (target.closest('.icon-link-dropdown')) {
            menuSidebar.classList.toggle('hide');
            menuSidebar.classList.toggle('show');
            console.log('click');
        }

    });

    window.addEventListener('resize', event => {

        const width = event.target.innerWidth;

        if (width < 850) {
            menuSidebar.classList.add('hide');
            menuSidebar.classList.remove('show');
        } else {
            menuSidebar.classList.remove('hide');
            menuSidebar.classList.add('show');
        }

    });

    likeBtn.addEventListener('click', toggleLike);

});