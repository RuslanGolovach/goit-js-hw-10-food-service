import menuCardsTps from '../templates/menu-cards.hbs';
import menuCards from '../menu.json';
const markup = menuCardsTps(menuCards);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
