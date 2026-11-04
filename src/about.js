// src/about.js
export default function loadAbout() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "About Gusteau's";

    const aboutSection = document.createElement("div");
    aboutSection.style.cssText = `
        max-width: 600px;
        margin: 30px auto;
        padding: 25px;
        background-color: #fff9f0;
        border-left: 5px solid #ff4d4d;
        font-family: serif;
        font-size: 18px;
        line-height: 1.6;
        color: #333;
        box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        border-radius: 4px;
    `;

    aboutSection.innerHTML = `
        <p style="margin-bottom: 15px; font-style: italic; font-size: 20px;">
          "You must be imaginative, strong-hearted. You must try things that may not work. And, you must not let anyone define your limits because of where you come from. Your only limit is your soul. What I say is true: Anyone can cook. But only the fearless can be great."
        </p>
        <p style="font-weight: bold; text-align: right; color: #b30000; margin: 0; font-size: 18px;">
          — Chef Auguste Gusteau
        </p>
    `;

    contentDiv.appendChild(headline);
    contentDiv.appendChild(aboutSection);
}