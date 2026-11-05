// ==========================================
// GUSTEAU'S - RATATOUILLE KITCHEN STATION
// ==========================================

import './styles/about.css';
import loadHome from './home.js';
import loadMenu from './menu.js';

export default function loadAbout() {
  const contentDiv = document.querySelector("#content");
  if (contentDiv) {
    contentDiv.innerHTML = "";
  }

  const container = document.createElement('div');
  container.className = 'kitchen-page';

  container.innerHTML = `
    <div class="hanging-rack">
      <div class="rack-bar"></div>
      <div class="pot copper-1"></div>
      <div class="pot copper-2"></div>
      <div class="pan steel"></div>
    </div>

    <div class="recipe-card">
      <h2>Gusteau's quote, and challenge</h2>
      <p>"You must be imaginative, strong-hearted. You must try things that may not work. And you must not let anyone define your limits because of where you come from!  Your only limit is your soul. What I say is true. Anyone can cook. But only the fearless can be great."</p>
      <p>"The highest cuisine demands the highest standards for those seeking the ultimate craft. It is the pinnacle ambition of a sanctuary, that longing! For both dreamers and fearless. But be warned: If you find yourself trapped by the haute cuisine of our menu, and can figure out the secret ingredient, you shall find a surprise.</p>
      <p class="small-text"> If anyone can cook, then anyone can order, and eat in here! So remember, for someone like you, it is always our greatest pleasure to have you. But tell me: will your soul be able to solve this culinary experience and set yourself apart from anyone else.</p>
    </div>

    <div class="prep-counter">
      <div class="cutting-board">
        <form id="kitchen-lock" onsubmit="event.preventDefault();">
          <label for="cook" class="cleaver">
            <span class="blade">
              <input id="cook" name="cook" autocomplete="off" aria-label="Type the secret ingredient">
            </span>
            <span class="handle" aria-hidden="true"></span>
          </label>
        </form>
      </div>
    </div>

    <div class="remy-reveal">
      <svg viewBox="0 0 100 100" class="remy-svg">
        <path d="M50,80 C20,80 10,60 20,40 C25,30 40,25 50,30 C60,25 75,30 80,40 C90,60 80,80 50,80 Z" fill="#1a1a1a"/>
        <circle cx="35" cy="25" r="10" fill="#1a1a1a"/>
        <circle cx="65" cy="25" r="10" fill="#1a1a1a"/>
        <path d="M50,85 C50,95 70,95 80,90" fill="none" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
      </svg>
      <p class="solved-text">Service Door Unlocked.</p>
    </div>
  `;

  // Bind the puzzle interaction logic safely after rendering
  setTimeout(() => {
    const input = container.querySelector('#cook');
    const page = container;
    let typingTimer;

    if (input) {
      input.addEventListener('input', (e) => {
        clearTimeout(typingTimer);
        const value = e.target.value.trim().toUpperCase();

        if (value === 'COOK') {
          page.classList.add('solved');
          input.blur();
        } else if (value.length >= 4) {
          typingTimer = setTimeout(() => {
            if (input.value.trim().toUpperCase() !== 'COOK') {
              input.classList.add('wrong-answer');
              setTimeout(() => {
                input.classList.remove('wrong-answer');
              }, 500);
            }
          }, 800);
        }
      });
    }
  }, 0);

  if (contentDiv) {
    contentDiv.appendChild(container);
  }
  return container;
}