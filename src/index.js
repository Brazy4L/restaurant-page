import headerFooter from './header';
import theRestaurant from './the-restaurant';
import menu from './menu';
import about from './about';

if (localStorage.getItem('page') === 'main') {
    headerFooter()
    document.querySelector('#header > :nth-child(1)').classList.add('active');
    theRestaurant();
} else if (localStorage.getItem('page') === 'menu') {
    headerFooter()
    document.querySelector('#header > :nth-child(2)').classList.add('active');
    menu();
} else if (localStorage.getItem('page') === 'about') {
    headerFooter()
    document.querySelector('#header > :nth-child(3)').classList.add('active');
    about();
} else {
    headerFooter()
    document.querySelector('#header > :nth-child(1)').classList.add('active');
    theRestaurant();
}

let wrapper = document.getElementById('wrapper');

const pageChanger = () => {
    document.querySelector('#header > :nth-child(1)').addEventListener('click', () => {
        wrapper.innerHTML = '';
        headerFooter();
        document.querySelector('#header > :nth-child(1)').classList.add('active');
        document.querySelector('#header > :nth-child(2)').classList.remove('active');
        document.querySelector('#header > :nth-child(3)').classList.remove('active');
        theRestaurant();
        localStorage.setItem('page', 'main');
        pageChanger();
    });
    
    document.querySelector('#header > :nth-child(2)').addEventListener('click', () => {
        wrapper.innerHTML = '';
        headerFooter();
        document.querySelector('#header > :nth-child(2)').classList.add('active');
        document.querySelector('#header > :nth-child(1)').classList.remove('active');
        document.querySelector('#header > :nth-child(3)').classList.remove('active');
        menu();
        localStorage.setItem('page', 'menu');
        pageChanger();
    });
    
    document.querySelector('#header > :nth-child(3)').addEventListener('click', () => {
        wrapper.innerHTML = '';
        headerFooter();
        document.querySelector('#header > :nth-child(3)').classList.add('active');
        document.querySelector('#header > :nth-child(1)').classList.remove('active');
        document.querySelector('#header > :nth-child(2)').classList.remove('active');
        about();
        localStorage.setItem('page', 'about');
        pageChanger();
    });
}

pageChanger();