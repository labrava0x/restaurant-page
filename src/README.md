Le Grand Restaurant Gusteau 🐀🍽️

An immersive, single-page application (SPA) culinary experience inspired by Pixar's Ratatouille, built from the ground up using vanilla JavaScript and Webpack. Step inside Auguste Gusteau's world, where high cuisine meets interactive storytelling.
🏗️ Architecture & Technology Stack

This project is architected as a modular Single Page Application (SPA) without heavy front-end frameworks, demonstrating pure DOM manipulation, dynamic component rendering, and custom CSS engineering.

    Core Language: JavaScript (ES6+ Modules)

    Bundler & Dev Server: Webpack 5 with CSS Loader / Style Loader

    Styling: Custom CSS3 leveraging CSS Variables, Flexbox, Grid, custom clip-paths, and hardware-accelerated keyframe animations

    Asset & State Management: Dynamic DOM injection, event delegation, and modular view controllers (home.js, about.js, menu.js)

✨ Key Features & Pages
1. The Home Page (home.js / home.css)

    Neon Façade: Features a glowing, multi-layered neon restaurant sign complete with CSS box-shadow glow effects and custom typography (Cinzel).

    Bistro Architecture: Hand-crafted CSS layout depicting the classic Parisian bistro entrance, glowing windows, and a traditional red-and-gold striped awning.

    Typographic Harmony: Styled with rich gold accents (#ffd700) across headings and welcome descriptions to establish an upscale ambiance.

2. The Menu Page (menu.js / menu.css)

    Showcases the restaurant's exquisite offerings with structured layout and refined culinary presentation.

3. The About Page — The Kitchen Workstation (about.js / about.css)

Transformed into an interactive, behind-the-scenes culinary workstation with rich atmospheric storytelling:

    Overhead Copper & Steel Pot Rack: Positioned at the top of the viewport using absolute positioning and flexbox, featuring gradient-rendered copper pots and polished steel pans.

    The Parchment Recipe Card: An authentically styled parchment card featuring Gusteau's legendary philosophy and subtle drop-shadow depth.

    The Wooden Prep Counter: A textured butcher-block counter anchoring the workspace at the base of the screen.

    The Butcher's Cleaver Input Puzzle:

        A custom-shaped butcher's cleaver rendered with a polished steel blade (using CSS clip-path), an embedded input field, and a dark wooden handle.

        Real-time input validation that listens for the secret culinary keyword "COOK".

        Dynamic shake animations (@keyframes shake) triggered upon incorrect attempts.

    The Secret Remy Reveal:

        Upon solving the puzzle, the cleaver animates smoothly out of view, and a custom SVG vector illustration of Remy fades in alongside a service unlock confirmation.

📁 Project Structure
Plaintext

restaurant-page/
├── dist/                  # Production build output
├── src/
│   ├── assets/            # Images and vector graphics
│   ├── styles/            # Modular CSS stylesheets
│   │   ├── about.css      # Kitchen station & puzzle styles
│   │   ├── home.css       # Neon sign & bistro façade styles
│   │   ├── menu.css       # Menu layout styles
│   │   └── global.css     # Global resets and typography
│   ├── about.js           # About view & cleaver puzzle controller
│   ├── home.js            # Home view controller
│   ├── menu.js            # Menu view controller
│   └── index.js           # Main SPA entry point & router
├── package.json           # Dependencies and scripts
└── webpack.config.js      # Webpack configuration