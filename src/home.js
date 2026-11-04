// src/home.js
export default function loadHome() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("home-container");

    // Rooftop Neon Sign
    const neonSign = document.createElement("div");
    neonSign.classList.add("neon-sign");
    neonSign.innerHTML = `
        <div class="chef-icon">👨‍🍳</div>
        <h1 class="sign-title">GUSTEAU'S</h1>
        <div class="five-stars">★★★★★</div>
    `;

    // Building Structure Underneath
    const buildingBody = document.createElement("div");
    buildingBody.classList.add("building-body");
    buildingBody.innerHTML = `
        <div class="window-row">
            <div class="bistro-window"></div>
            <div class="bistro-window"></div>
            <div class="bistro-window"></div>
        </div>
        <div class="window-row">
            <div class="bistro-window"></div>
            <div class="bistro-window"></div>
            <div class="bistro-window"></div>
        </div>
        <div class="restaurant-entrance">
            <div class="red-awning"></div>
            <div class="entrance-sign">Grand Entrance</div>
        </div>
    `;

    // Your Exact Homepage Text Box
    const infoBox = document.createElement("div");
    infoBox.classList.add("info-box");

    const headline = document.createElement("h2");
    headline.classList.add("restaurant-title");
    headline.textContent = "Welcome to Gusteau's";

    const p1 = document.createElement("p");
    p1.classList.add("intro-text");
    p1.textContent = "Welcome, Monsieurs and madams to the main Parisian Gusteau's restaurant! Where food and dreams are savoured together. The highest cuisine, the highest standards for those seeking the ultimate craft.";

    infoBox.appendChild(headline);
    infoBox.appendChild(p1);

    container.appendChild(neonSign);
    container.appendChild(buildingBody);
    container.appendChild(infoBox);
    contentDiv.appendChild(container);
}