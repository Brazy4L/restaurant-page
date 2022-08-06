import headerFooter from './header';
import theRestaurant from './the-restaurant';
import menu from './menu';
import about from './about';

if (localStorage.getItem('page') === 'main') {
    headerFooter()
    theRestaurant();
} else if (localStorage.getItem('page') === 'menu') {
    headerFooter()
    menu();
} else if (localStorage.getItem('page') === 'about') {
    headerFooter()
    about();
} else {
    headerFooter()
    theRestaurant();
}

let wrapper = document.getElementById('wrapper');

const pageChanger = () => {
    document.querySelector('#header > :nth-child(1)').addEventListener('click', () => {
        wrapper.innerHTML = '';
        headerFooter();
        theRestaurant();
        localStorage.setItem('page', 'main');
        pageChanger();
    });
    
    document.querySelector('#header > :nth-child(2)').addEventListener('click', () => {
        wrapper.innerHTML = '';
        headerFooter();
        menu();
        localStorage.setItem('page', 'menu');
        pageChanger();
    });
    
    document.querySelector('#header > :nth-child(3)').addEventListener('click', () => {
        wrapper.innerHTML = '';
        headerFooter();
        about();
        localStorage.setItem('page', 'about');
        pageChanger();
    });
}

pageChanger();