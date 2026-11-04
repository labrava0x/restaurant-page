import menudata from "./data/menudata.js";
const { pagesData, totalPages } = menudata;


export default function loadMenu() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    // --- EXTERNAL CONTROLS (Outside the Book) ---
    const externalControls = document.createElement("div");
    externalControls.classList.add("menu-external-controls");

    const closeMenuBtn = document.createElement("button");
    closeMenuBtn.classList.add("external-action-btn", "close-btn");
    closeMenuBtn.textContent = "✕ Fermer le Menu (Close)";
    closeMenuBtn.addEventListener("click", () => {
        currentPage = 1;
        renderMenu();
    });

    const orderBtn = document.createElement("button");
    orderBtn.classList.add("external-action-btn", "order-btn");
    orderBtn.textContent = "🍽 Make an Order, Ready to Eat";
    orderBtn.addEventListener("click", () => {
        alert("Merci! Your order has been placed and sent straight to Chef Remy's kitchen! Bon appétit!");
    });

    externalControls.appendChild(closeMenuBtn);
    externalControls.appendChild(orderBtn);
    menuContainer.appendChild(externalControls);

    // --- THE MENU BOOK ---
    const menuBook = document.createElement("div");
    menuBook.classList.add("menu-book");

    let currentPage = 1; // Page 1 is the front cover

    function renderMenu() {
        menuBook.innerHTML = "";

        const activeSpread = document.createElement("div");
        
        // --- PAGE 1: CLOSED COVER (Single View) ---
        if (currentPage === 1) {
            menuBook.classList.add("is-closed");
            activeSpread.classList.add("active-page-sheet", "single-cover-page");
            activeSpread.innerHTML = `
                <div class="menu-cover-overlay">
                    <div class="cover-badge">★ ★ ★ ★ ★</div>
                    <h1 class="cover-title">Le Grand Menu</h1>
                    <h2 class="cover-subtitle">GUSTEAU'S</h2>
                    <p class="cover-tagline">"Where food and dreams are savoured together."</p>
                    <div class="cover-divider"></div>
                    <p class="cover-instructions">Click 'Suivante' below to open the physical menu booklet.</p>
                </div>
            `;
        } 
        // --- PAGES 2 & BEYOND: OPEN BOOK SPREAD (Left & Right Pages with Golden Spine) ---
        else {
            menuBook.classList.remove("is-closed");
            activeSpread.classList.add("active-page-sheet", "open-book-spread");

            // Golden spine thread element down the middle
            const goldenSpine = document.createElement("div");
            goldenSpine.classList.add("golden-spine-thread");

            // Left Page
            const leftPage = document.createElement("div");
            leftPage.classList.add("book-page", "left-page");
            populatePageContent(leftPage, currentPage);

            // Right Page (Next page number, capped at totalPages)
            const rightPageIndex = currentPage + 1 <= totalPages ? currentPage + 1 : null;
            const rightPage = document.createElement("div");
            rightPage.classList.add("book-page", "right-page");
            if (rightPageIndex) {
                populatePageContent(rightPage, rightPageIndex);
            } else {
                rightPage.innerHTML = `<div class="end-page-notice"><p>Fin du Menu</p></div>`;
            }

            activeSpread.appendChild(leftPage);
            activeSpread.appendChild(goldenSpine);
            activeSpread.appendChild(rightPage);
        }

        menuBook.appendChild(activeSpread);

        // --- BOTTOM PAGE FOOTER (Spread Navigation) ---
        const pageFooter = document.createElement("div");
        pageFooter.classList.add("menu-page-footer");

        const prevBtn = document.createElement("button");
        prevBtn.classList.add("book-nav-btn");
        prevBtn.textContent = "◄ Précédente";
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                // If on page 2, go back to cover (1). Otherwise step back by 2 pages in spread view.
                currentPage = currentPage === 2 ? 1 : currentPage - 2;
                renderMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        const pageNumbering = document.createElement("span");
        pageNumbering.classList.add("page-numbering-bottom");
        if (currentPage === 1) {
            pageNumbering.textContent = `— Front Cover —`;
        } else {
            const rightNum = currentPage + 1 <= totalPages ? currentPage + 1 : totalPages;
            pageNumbering.textContent = `— Pages ${currentPage} & ${rightNum} of ${totalPages} —`;
        }

        const nextBtn = document.createElement("button");
        nextBtn.classList.add("book-nav-btn");
        nextBtn.textContent = "Suivante ►";
        nextBtn.disabled = currentPage >= totalPages - 1;
        prevBtn.disabled = currentPage === 1;
        nextBtn.addEventListener("click", () => {
            if (currentPage === 1) {
                currentPage = 2; // Open to TOC & Puzzle spread
            } else if (currentPage + 2 <= totalPages) {
                currentPage += 2;
            }
            renderMenu();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        pageFooter.appendChild(prevBtn);
        pageFooter.appendChild(pageNumbering);
        pageFooter.appendChild(nextBtn);

        menuBook.appendChild(pageFooter);
    }

    function populatePageContent(pageContainer, pageNum) {
        if (pageNum === 2) {
            pageContainer.innerHTML = `
                <h2 class="menu-title">Table des Matières</h2>
                <p class="toc-intro">Explore our curated culinary sections:</p>
                <div class="toc-list">
                    <div class="toc-item"><span>I. Le Menu Régulier</span><span>Pages 4–9</span></div>
                    <div class="toc-item"><span>II. Le Menu Spécial</span><span>Page 10</span></div>
                    <div class="toc-item"><span>III. Le Menu des Amoureux</span><span>Page 11</span></div>
                    <div class="toc-item"><span>IV. Le Menu Sans Gluten</span><span>Page 12</span></div>
                    <div class="toc-item"><span>V. Le Menu des Petits Gourmets</span><span>Page 13</span></div>
                    <div class="toc-item"><span>VI. Desserts & Valrhona</span><span>Page 14</span></div>
                    <div class="toc-item"><span>VII. Vins & Grands Crus</span><span>Pages 15–19</span></div>
                    <div class="toc-item"><span>VIII. Boissons & Eaux</span><span>Pages 20–25</span></div>
                </div>
            `;
        } else if (pageNum === 3) {
            pageContainer.innerHTML = `
                <h2 class="menu-title">Le Défi du Chef</h2>
                <div class="puzzle-box">
                    <h3 class="puzzle-heading">The Chef's Challenge</h3>
                    <p class="puzzle-text">You can feel the spirit in every bite, and if you figure out how the recipe was made, you might get a surprise!</p>
                </div>
                <p style="text-align: center; font-style: italic; color: #555; margin-top: 20px;">Turn the page to enter our fine dining selections.</p>
            `;
        } else {
            const title = document.createElement("h3");
            title.classList.add("spread-page-header");
            title.textContent = "Le Grand Menu de Gusteau";
            pageContainer.appendChild(title);

            const menuList = document.createElement("div");
            menuList.classList.add("menu-list");

            if (pagesData[pageNum]) {
                pagesData[pageNum].forEach(cat => {
                    const catHeader = document.createElement("h4");
                    catHeader.classList.add("menu-category-title");
                    catHeader.textContent = cat.categoryName;
                    menuList.appendChild(catHeader);

                    cat.items.forEach(dish => {
                        const item = document.createElement("div");
                        item.classList.add("menu-item");
                        item.innerHTML = `
                            <div class="dish-header">
                                <span class="dish-name">${dish.name}</span>
                                <span class="dish-price">${dish.price}</span>
                            </div>
                            <p class="dish-desc">${dish.desc}</p>
                        `;
                        menuList.appendChild(item);
                    });
                });
            }
            pageContainer.appendChild(menuList);
        }

        const pageNumIndicator = document.createElement("div");
        pageNumIndicator.classList.add("page-corner-number");
        pageNumIndicator.textContent = pageNum;
        pageContainer.appendChild(pageNumIndicator);
    }

    renderMenu();
    menuWrapper.appendChild(menuBook);
    menuContainer.appendChild(menuWrapper);
    contentDiv.appendChild(menuContainer);
}