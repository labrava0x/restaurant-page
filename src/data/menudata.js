// Inside src/data/menu.js
import menudata from "./menudata.js";
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
    closeMenuBtn.textContent = "✕ Close Menu";
    closeMenuBtn.addEventListener("click", () => {
        currentPage = 1; // Snap shut instantly to front cover
        renderMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const orderBtn = document.createElement("button");
    orderBtn.classList.add("external-action-btn", "order-btn");
    orderBtn.textContent = "🍽 Place Order";
    orderBtn.addEventListener("click", () => {
        alert("Thank you! Your order has been placed and sent straight to Chef Remy's kitchen! Bon appétit!");
    });

    externalControls.appendChild(closeMenuBtn);
    externalControls.appendChild(orderBtn);
    menuContainer.appendChild(externalControls);

    // --- THE MENU BOOK ---
    const menuBook = document.createElement("div");
    menuBook.classList.add("menu-book");

    let currentPage = 1; // 1 = Front Cover (Closed), 2-25 = Open Spreads, 26 = Back Cover (Closed)
    const BACK_COVER_PAGE = totalPages + 1; // 26

    function renderMenu() {
        menuBook.innerHTML = "";
        const activeSpread = document.createElement("div");

        // --- 1. FRONT COVER (Closed State) ---
        if (currentPage === 1) {
            menuBook.classList.add("is-closed");
            activeSpread.classList.add("active-page-sheet", "single-cover-page");
            activeSpread.innerHTML = `
                <div class="menu-cover-overlay">
                    <div class="cover-badge">★ ★ ★ ★ ★</div>
                    <h1 class="cover-title">The Main Menu</h1>
                    <h2 class="cover-subtitle">GUSTEAU'S</h2>
                    <p class="cover-tagline">"Where food and dreams are savoured together."</p>
                    <div class="cover-divider"></div>
                    <p class="cover-instructions">Click 'Next ►' below to open the menu booklet.</p>
                </div>
            `;
        } 
        // --- 2. BACK COVER (Closed State at the End) ---
        else if (currentPage >= BACK_COVER_PAGE) {
            menuBook.classList.add("is-closed");
            activeSpread.classList.add("active-page-sheet", "single-cover-page");
            activeSpread.innerHTML = `
                <div class="menu-cover-overlay">
                    <div class="cover-badge">END</div>
                    <h2 class="cover-subtitle" style="margin-top: 20px;">GUSTEAU'S</h2>
                    <p class="cover-tagline">"Anyone can cook, but only the fearless find true greatness."</p>
                    <div class="cover-divider"></div>
                    <p class="cover-instructions">You have reached the back cover. Click 'Close Menu' to exit.</p>
                </div>
            `;
        }
        // --- 3. OPEN BOOK SPREAD (Pages 2 to 25) ---
        else {
            menuBook.classList.remove("is-closed");
            activeSpread.classList.add("active-page-sheet", "open-book-spread");

            // Golden spine thread down the center gutter
            const goldenSpine = document.createElement("div");
            goldenSpine.classList.add("golden-spine-thread");

            // Left Page
            const leftPage = document.createElement("div");
            leftPage.classList.add("book-page", "left-page");
            populatePageContent(leftPage, currentPage);

            // Right Page
            const rightPageIndex = currentPage + 1;
            const rightPage = document.createElement("div");
            rightPage.classList.add("book-page", "right-page");
            
            if (rightPageIndex <= totalPages) {
                populatePageContent(rightPage, rightPageIndex);
            } else {
                rightPage.innerHTML = `<div class="end-page-notice" style="text-align: center; padding-top: 100px;"><h3 style="font-family: 'Cinzel', serif; color: #8b0000;">End of Menu</h3><p style="color: #666; font-style: italic; margin-top: 10px;">Turn forward to view the back cover.</p></div>`;
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
        prevBtn.textContent = "◄ Previous";
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                if (currentPage === 2) {
                    currentPage = 1; // Back to front cover
                } else if (currentPage === BACK_COVER_PAGE) {
                    currentPage = totalPages - 1; // Go back to last spread
                } else {
                    currentPage -= 2;
                }
                renderMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        const pageNumbering = document.createElement("span");
        pageNumbering.classList.add("page-numbering-bottom");
        if (currentPage === 1) {
            pageNumbering.textContent = `— Front Cover —`;
        } else if (currentPage >= BACK_COVER_PAGE) {
            pageNumbering.textContent = `— Back Cover —`;
        } else {
            const rightNum = currentPage + 1 <= totalPages ? currentPage + 1 : totalPages;
            pageNumbering.textContent = `— Pages ${currentPage} & ${rightNum} of ${totalPages} —`;
        }

        const nextBtn = document.createElement("button");
        nextBtn.classList.add("book-nav-btn");
        nextBtn.textContent = "Next ►";
        nextBtn.addEventListener("click", () => {
            if (currentPage === 1) {
                currentPage = 2; // Open book from front cover to pages 2 & 3
            } else if (currentPage >= totalPages - 1) {
                currentPage = BACK_COVER_PAGE; // Move to back cover
            } else {
                currentPage += 2; // Flip spread forward
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
                <h2 class="menu-title">Table of Contents</h2>
                <p class="toc-intro">Explore our curated culinary sections:</p>
                <div class="toc-list">
                    <div class="toc-item"><span>I. Regular Menu</span><span>Pages 4–9</span></div>
                    <div class="toc-item"><span>II. Special Course Menu</span><span>Page 10</span></div>
                    <div class="toc-item"><span>III. Lovers' Menu</span><span>Page 11</span></div>
                    <div class="toc-item"><span>IV. Gluten-Free Menu</span><span>Page 12</span></div>
                    <div class="toc-item"><span>V. Children's Menu</span><span>Page 13</span></div>
                    <div class="toc-item"><span>VI. Desserts & Valrhona</span><span>Page 14</span></div>
                    <div class="toc-item"><span>VII. Fine Wines & Champagne</span><span>Pages 15–19</span></div>
                    <div class="toc-item"><span>VIII. Coffees, Teas & Waters</span><span>Pages 20–25</span></div>
                </div>
            `;
        } else if (pageNum === 3) {
            pageContainer.innerHTML = `
                <h2 class="menu-title">The Chef's Challenge</h2>
                <div class="puzzle-box">
                    <h3 class="puzzle-heading">The Chef's Challenge</h3>
                    <p class="puzzle-text">You can feel the spirit in every bite, and if you figure out how the recipe was made, you might get a surprise!</p>
                </div>
                <p style="text-align: center; font-style: italic; color: #555; margin-top: 20px;">Turn the page to enter our fine dining selections.</p>
            `;
        } else {
            const title = document.createElement("h3");
            title.classList.add("spread-page-header");
            title.textContent = "Gusteau's Grand Menu";
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