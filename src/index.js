// src/index.js
import './styles/style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    const buttons = document.querySelectorAll('nav button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const text = e.target.textContent.trim().toLowerCase();
            
            if (text === 'home') {
                loadHome();
            } else if (text === 'menu') {
                loadMenu();
            } else if (text === 'about') {
                loadAbout();
            }
        });
    });
});