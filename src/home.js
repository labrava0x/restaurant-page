// src/home.js
export default function loadHome() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = ""; // Clear out any existing content

    // Headline
    const headline = document.createElement("h1");
    headline.textContent = "The Legendary Chef Gusteau";

    // Neon Sign Container with 5 Stars Below
    const neonSign = document.createElement("div");
    neonSign.style.cssText = `
        background-color: #121212;
        border: 3px solid #ff4d4d;
        border-radius: 15px;
        padding: 30px;
        text-align: center;
        max-width: 400px;
        margin: 20px auto;
        box-shadow: 0 0 15px rgba(255, 77, 77, 0.4), inset 0 0 15px rgba(255, 77, 77, 0.2);
    `;
    
    neonSign.innerHTML = `
        <div style="font-size: 35px; margin-bottom: 5px;">👨‍🍳</div>
        <h2 style="color: #ffffff; font-family: serif; font-size: 28px; letter-spacing: 3px; text-shadow: 0 0 10px #ff8080, 0 0 20px #ff4d4d; margin: 0 0 8px 0;">GUSTEAU'S</h2>
        <div style="font-size: 22px; color: #ffeb3b; text-shadow: 0 0 10px #ffeb3b, 0 0 20px #ff9800; letter-spacing: 4px;">★★★★★</div>
    `;

    // Description Paragraphs
    const p1 = document.createElement("p");
    p1.textContent = 'You can feel the spirit in every bite, and if you figure out how the recipe was made, you might get a surprise!';

    const p2 = document.createElement("p");
    p2.textContent = "Find the puzzle, or just feel it in your mouth along the way! Which will be first?";

    // Append everything to #content
    contentDiv.appendChild(headline);
    contentDiv.appendChild(neonSign);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(p2);
}