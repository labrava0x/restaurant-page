// ==========================================
// LE GRAND MENU: GUSTEAU - RENDER LOGIC
// ==========================================

import { menuData } from './data/menudata.js';

const TOTAL_PAGES = 12;

// Reusable luxury button styling string
const BTN_STYLE = "background: linear-gradient(135deg, #5c060d 0%, #210205 100%); color: #ffd700; border: 2px solid #ffd700; padding: 10px 22px; font-family: 'Cinzel', serif; font-size: 0.95rem; font-weight: bold; border-radius: 4px; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); transition: all 0.3s ease;";

function createEl(tag, className, html = '') {
    const el = document.createElement(tag);
    if (className) {
        if (Array.isArray(className)) el.classList.add(...className);
        else el.className = className;
    }
    if (html) el.innerHTML = html;
    if (tag === 'button') el.type = 'button';
    return el;
}

// Render Page 2 Table of Contents
function populateTOC(container) {
    const tocContainer = createEl('div', 'toc-container');
    tocContainer.style.cssText = "display: flex; flex-direction: column; gap: 10px; margin-top: 10px;";
    
    const sections = [
        { title: "Le Chariot de Pains & Entrées", page: "3" },
        { title: "Les Entrées", page: "4" },
        { title: "Les Soupes", page: "5" },
        { title: "Poissons & Fruits de Mer", page: "6" },
        { title: "Plats Principaux & Ratatouille", page: "7" },
        { title: "Viandes & Flambé", page: "8" },
        { title: "Menu Enfant & Options Sans Gluten", page: "9" },
        { title: "Les Fromages", page: "10" },
        { title: "Les Desserts, Vins & Cafés", page: "11" },
        { title: "Quatrième de Couverture", page: "12" }
    ];

    sections.forEach(sec => {
        const itemEl = createEl('div', 'toc-item');
        itemEl.style.cssText = "display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px dotted #d9c5b2; padding-bottom: 6px; font-family: 'Cinzel', serif;";
        itemEl.innerHTML = `
            <span style="font-weight: bold; color: #b8860b; font-size: 0.95rem;">${sec.title}</span>
            <span style="color: #8b0000; font-weight: bold; font-size: 0.9rem;">PAGE ${sec.page}</span>
        `;
        tocContainer.append(itemEl);
    });
    container.append(tocContainer);
}

// Render Standard Menu Items
function populateStandardPage(container, pageData) {
    const list = createEl('div', 'menu-items-list');
    pageData.items.forEach(item => {
        const itemEl = createEl('div', 'menu-item');
        itemEl.style.cssText = "border-bottom: 1px dashed #d9c5b2; padding-bottom: 12px; margin-bottom: 15px;";
        itemEl.innerHTML = `
            <div class="item-header-row" style="display: flex; justify-content: space-between; align-items: baseline; font-family: 'Cinzel', serif; font-weight: bold; margin-bottom: 4px;">
                <h3 class="item-name" style="font-size: 1.05rem; color: #b8860b; margin: 0;">${item.name}</h3>
                <span class="item-price" style="color: #8b0000;">${item.price}</span>
            </div>
            <p class="item-desc" style="color: #3b2c24; font-size: 0.9rem; line-height: 1.6; margin: 5px 0 0 0; font-style: italic;">${item.description}</p>
        `;
        list.append(itemEl);
    });
    container.append(list);
}

// Populate individual parchment page content & footer number
function populatePage(pageEl, pageNum, pages) {
    const inner = createEl('div', 'page-content');
    inner.style.cssText = "position: relative; height: 100%; box-sizing: border-box; padding-bottom: 50px; overflow-y: auto;";
    
    const pageData = pages.find(p => p.pageNumber === pageNum);
    if (!pageData) {
        inner.innerHTML = `<p class="page-empty" style="text-align: center; margin-top: 50px; font-family: 'Cinzel', serif; color: #b8860b;">End of Menu</p>`;
    } else {
        const header = createEl('div', 'page-header');
        header.innerHTML = `<span class="page-category-title" style="color: #b8860b; font-family: 'Cinzel', serif; font-size: 1.4rem; font-weight: bold; border-bottom: 2px solid #b8860b; padding-bottom: 8px; margin-bottom: 20px; display: block;">${pageData.category}</span>`;
        inner.append(header);

        if (pageNum === 2) {
            populateTOC(inner);
        } else {
            populateStandardPage(inner, pageData);
        }
    }

    // Standalone golden page number centered at the bottom
    const pageNumFooter = createEl('div', 'page-number-footer', pageNum);
    pageNumFooter.style.cssText = "position: absolute; bottom: 15px; left: 0; right: 0; text-align: center; color: #d4af37; font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 600; letter-spacing: 1px; pointer-events: none;";
    inner.append(pageNumFooter);

    pageEl.append(inner);
}

export default function loadMenu() {
    const content = document.getElementById('content');
    if (!content) return;

    content.innerHTML = '';
    let currentPage = 1;
    const pages = menuData[0].pages;

    // Core layout skeletons
    const wrapper = createEl('div', 'menu-book-wrapper');
    const book = createEl('div', 'menu-book');
    const spread = createEl('div', 'menu-spread');
    const navBar = createEl('div', 'menu-nav-bar');

    const prevBtn = createEl('button', ['menu-nav-btn', 'external-action-btn'], '◄ Previous');
    const closeBtn = createEl('button', ['menu-nav-btn', 'external-action-btn'], '✕ Close Book');
    const pageIndicator = createEl('span', 'menu-page-indicator');
    const nextBtn = createEl('button', ['menu-nav-btn', 'external-action-btn'], 'Next ►');

    navBar.append(prevBtn, closeBtn, pageIndicator, nextBtn);
    book.append(spread);
    wrapper.append(book, navBar);
    content.append(wrapper);

    function render() {
        spread.innerHTML = '';
        spread.className = 'menu-spread';
        book.classList.remove('is-closed');

        // --- PAGE 1: CLOSED FRONT COVER ---
        if (currentPage === 1) {
            book.classList.add("is-closed");
            spread.classList.add("single-cover-page");
            
            const coverEl = createEl('div', 'menu-cover-overlay single-cover-page');
            coverEl.style.cssText = "width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; box-sizing: border-box; padding: 60px; cursor: pointer; position: relative;";
            coverEl.innerHTML = `
                <div class="cover-badge" style="color: #ffd700; font-size: 1.6rem; letter-spacing: 5px; margin-bottom: 15px; text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);">★ ★ ★ ★ ★</div>
                <h1 class="cover-title" style="color: #ffd700; font-family: 'Cinzel', serif; font-size: 3.2rem; font-weight: bold; margin: 0 0 10px 0; text-shadow: 0 0 14px rgba(255, 215, 0, 0.7);">Le Grand Menu</h1>
                <div class="cover-divider" style="width: 140px; height: 3px; background: #ffd700; margin: 20px auto; box-shadow: 0 0 12px rgba(255, 215, 0, 0.7);"></div>
                <h2 class="cover-subtitle" style="color: #ffd700; font-family: 'Cinzel', serif; font-size: 2.2rem; font-weight: bold; margin: 0 0 25px 0; text-shadow: 0 0 18px rgba(255, 215, 0, 0.8);">Gusteau's</h2>
                <p class="cover-tagline" style="color: #ffd700 !important; font-style: italic; font-size: 1.1rem; margin: 0; font-family: 'Cinzel', serif; text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);">“Where food and dreams are savoured together.”</p>
            `;
            
            coverEl.addEventListener('click', () => { currentPage = 2; render(); });
            spread.append(coverEl);

            pageIndicator.textContent = '';
            prevBtn.style.display = 'none';
            closeBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = 'OPEN';
            nextBtn.style.cssText = BTN_STYLE + " display: inline-block; margin: 0 auto;";
            navBar.style.cssText = "display: flex; justify-content: center; align-items: center; width: 100%; max-width: 1250px; margin-top: 20px;";
            return;
        } 

        // --- PAGE 12: CLOSED BACK COVER ---
        if (currentPage === 12) {
            book.classList.add("is-closed");
            spread.classList.add("single-cover-page");
            
            const backEl = createEl('div', 'menu-cover-overlay full-cover-back');
            backEl.style.cssText = "width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; border: 3px solid #ffd700; box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 215, 0, 0.4); box-sizing: border-box; padding: 60px; position: relative;";
            spread.append(backEl);

            pageIndicator.textContent = `Back Cover (Page 12)`;
            pageIndicator.style.cssText = "color: #ffd700; font-family: 'Cinzel', serif; font-size: 0.95rem; font-weight: bold;";
            
            prevBtn.style.display = 'inline-block';
            prevBtn.style.cssText = BTN_STYLE;
            closeBtn.style.display = 'inline-block';
            closeBtn.style.cssText = BTN_STYLE;
            nextBtn.style.display = 'none';
            
            navBar.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1250px; margin-top: 20px; box-sizing: border-box;";
            return;
        }

        // --- PAGES 2 TO 11: OPEN BOOK SPREAD ---
        book.classList.remove("is-closed");
        spread.classList.add("open-book-spread");

        const spine = createEl("div", "golden-spine-thread");
        spine.style.cssText = "width: 8px; background: linear-gradient(to bottom, #cca300, #ffd700, #b8860b); box-shadow: 0 0 15px rgba(255, 215, 0, 0.8); z-index: 5;";
        
        const leftPage = createEl("div", ["book-page", "left-page"]);
        leftPage.style.cssText = "flex: 1; height: 100%; background: #fcf8f2; color: #2c221e; box-sizing: border-box; position: relative; border-right: 1px solid #e0d3c1; box-shadow: inset -15px 0 20px -10px rgba(0, 0, 0, 0.1);";
        populatePage(leftPage, currentPage, pages);

        const rightNum = currentPage + 1;
        const rightPage = createEl("div", ["book-page", "right-page"]);
        rightPage.style.cssText = "flex: 1; height: 100%; background: #fcf8f2; color: #2c221e; box-sizing: border-box; position: relative; border-left: 1px solid #e0d3c1; box-shadow: inset 15px 0 20px -10px rgba(0, 0, 0, 0.1);";
        
        if (rightNum <= TOTAL_PAGES) {
            populatePage(rightPage, rightNum, pages);
        }

        spread.append(leftPage, spine, rightPage);

        prevBtn.style.display = 'inline-block';
        prevBtn.style.cssText = BTN_STYLE;
        closeBtn.style.display = 'inline-block';
        closeBtn.style.cssText = BTN_STYLE;

        if (currentPage >= 10) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = 'Next ►';
            nextBtn.style.cssText = BTN_STYLE;
        }
        
        pageIndicator.textContent = `Pages ${currentPage} & ${currentPage + 1} of ${TOTAL_PAGES}`;
        pageIndicator.style.cssText = "color: #ffd700; font-family: 'Cinzel', serif; font-size: 0.95rem; font-weight: bold;";
        navBar.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1250px; margin-top: 20px; box-sizing: border-box;";
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage === 12) {
            currentPage = 10;
        } else if (currentPage > 1) {
            currentPage -= 2;
            if (currentPage < 1) currentPage = 1;
        }
        render();
    });

    closeBtn.addEventListener('click', () => {
        currentPage = 1;
        render();
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage === 1) {
            currentPage = 2;
        } else if (currentPage < 10) {
            currentPage += 2;
        } else {
            currentPage = 12;
        }
        render();
    });

    render();
}