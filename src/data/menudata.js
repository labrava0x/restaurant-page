// ==========================================
// LE GRAND MENU: GUSTEAU - MENU DATA
// ==========================================

export const pricingTiers = {
    solo: "1p",
    duo: "2p",
    group: "4p+"
};

function p(soloPrice, duoPrice, groupPrice) {
    return `${soloPrice} € (1p) / ${duoPrice} € (2p) / ${groupPrice} € (4p+)`;
}

export const menuData = [
    {
        restaurant: "Le Grand Restaurant Gusteau",
        pages: [
            {
                pageNumber: 1,
                category: "Cover",
                items: []
            },
            {
                pageNumber: 2,
                category: "Sommaire du Livre",
                items: [
                    {
                        name: "Table of Contents",
                        price: "—",
                        description: "Page 3 — Le Chariot de Pains & Entrées\n• Le Chariot de Pains Artisanaux\n• Salade Niçoise au Thon Rouge\n• Salade de Chèvre Chaud au Miel de Lavande\n\nPage 4 — Les Entrées\n• Amuse-Bouche du Chef\n• Foie Gras Poêlé au Chutney de Figues\n• Gougères au Comté AOP\n\nPage 5 — Les Soupes\n• Bouillabaisse\n• Soupe à la Gusteau\n• Vichyssoise Glacée\n• Soupe de Poireaux et Pommes de Terre\n• La Soupe Suprême\n\nPage 6 — Poissons & Fruits de Mer\n• Poisson Flambé\n• Filet de Sole Meunière\n• Homard Rôti au Beurre Blanc\n\nPage 7 — Plats Principaux & Ratatouille\n• Ratatouille\n• Gigot d'Agneau de Sept Heures\n• Confit de Canard\n• Blanquette de Veau\n\nPage 8 — Viandes & Flambé\n• Viande Flambée\n• Bœuf Bourguignon\n• Entrecôte Café de Paris\n\nPage 9 — Menu Enfant, Options Sans Gluten [GF] & Le Menu Amoureux\n• Le Petit Chef\n• Poulet Rôti aux Herbes [GF]\n• Le Menu Amoureux\n\nPage 10 — Les Fromages\n• Sélection de Finissants Fromages\n• Fontaine de Fondu de Fromage\n\nPage 11 — Les Desserts & Flambé, Vins, Cafés & Thés\n• Dessert Flambé\n• Tarte Tatin à la Gusteau\n• Fontaine de Chocolat avec Fraises Éco\n• Le Dessert du Jour\n• La Sélection des Vins\n• Cafés & Thés\n\nPage 12 — Quatrième de Couverture"
                    }
                ]
            },
            {
                pageNumber: 3,
                category: "Le Chariot de Pains & Entrées",
                items: [
                    {
                        name: "Le Chariot de Pains Artisanaux",
                        price: "Offert / Compris",
                        description: "Presented tableside—an exquisite selection of freshly baked baguettes, rustic sourdough bâtards, olive fougasse, and country breads served with cultured butter and Maldon sea salt flakes. [V, DF, NF]"
                    },
                    {
                        name: "Salade Niçoise au Thon Rouge",
                        price: "22 € (1p) / 40 € (2p) / 76 € (4p+)",
                        description: "Baby gem lettuce, line-caught seared bluefin tuna, heirloom cherry tomatoes, soft quail eggs, niçoise olives, and lemon-herb vinaigrette. [GF, DF]"
                    },
                    {
                        name: "Salade de Chèvre Chaud au Miel de Lavande",
                        price: "19 € (1p) / 34 € (2p) / 64 € (4p+)",
                        description: "Warm goat cheese crostini over mixed field greens, toasted walnuts, and a delicate lavender-infused honey drizzle. [V, GF]"
                    }
                ]
            },
            {
                pageNumber: 4,
                category: "Les Entrées",
                items: [
                    {
                        name: "Amuse-Bouche du Chef",
                        price: "16 € (1p) / 30 € (2p) / 58 € (4p+)",
                        description: "A delicate surprise creation from the kitchen to awaken the palate. [Chef's Daily Selection]"
                    },
                    {
                        name: "Foie Gras Poêlé au Chutney de Figues",
                        price: "28 € (1p) / 52 € (2p) / 98 € (4p+)",
                        description: "Pan-seared duck foie gras served with spiced fig chutney and toasted brioche. [NF]"
                    },
                    {
                        name: "Gougères au Comté AOP",
                        price: "15 € (1p) / 28 € (2p) / 52 € (4p+)",
                        description: "Warm, airy choux pastry puffs baked with aged Comté cheese. [V]"
                    }
                ]
            },
            {
                pageNumber: 5,
                category: "Les Soupes",
                items: [
                    {
                        name: "Bouillabaisse",
                        price: "28 € (1p) / 52 € (2p) / 98 € (4p+)",
                        description: "Classic coastal seafood soup featuring daily catch, shellfish, aromatic saffron broth, and garlic rouille."
                    },
                    {
                        name: "Soupe à la Gusteau",
                        price: "18 € (1p) / 32 € (2p) / 60 € (4p+)",
                        description: "The legendary, rich signature vegetable and broth creation that inspires dreams. [V, GF]"
                    },
                    {
                        name: "Vichyssoise Glacée",
                        price: "15 € (1p) / 28 € (2p) / 52 € (4p+)",
                        description: "Chilled creamy leek and potato velouté finished with fresh chives. [V, GF]"
                    },
                    {
                        name: "Soupe de Poireaux et Pommes de Terre",
                        price: "14 € (1p) / 26 € (2p) / 48 € (4p+)",
                        description: "Hearty, comforting leek and potato soup simmered in vegetable broth with fresh herbs. [V, GF]"
                    },
                    {
                        name: "La Soupe Suprême",
                        price: "22 € (1p) / 40 € (2p) / 75 € (4p+)",
                        description: "An opulent velvety broth enriched with cream, seasonal mushrooms, and white truffle oil. [V, GF]"
                    }
                ]
            },
            {
                pageNumber: 6,
                category: "Poissons & Fruits de Mer",
                items: [
                    {
                        name: "Poisson Flambé",
                        price: "42 € (1p) / 78 € (2p) / 150 € (4p+)",
                        description: "Whole catch of the day flambéed tableside with fine champagne and rich house beurre blanc. [GF, NF]"
                    },
                    {
                        name: "Filet de Sole Meunière",
                        price: "38 € (1p) / 72 € (2p) / 140 € (4p+)",
                        description: "Fresh Dover sole sautéed in browned butter, lemon juice, and chopped parsley, deboned tableside."
                    },
                    {
                        name: "Homard Rôti au Beurre Blanc",
                        price: "48 € (1p) / 92 € (2p) / 180 € (4p+)",
                        description: "Whole roasted Atlantic lobster glazed with a silky white wine and shallot beurre blanc."
                    }
                ]
            },
            {
                pageNumber: 7,
                category: "Plats Principaux & Ratatouille",
                items: [
                    {
                        name: "Ratatouille",
                        price: "26 € (1p) / 48 € (2p) / 90 € (4p+)",
                        description: "Thinly sliced heirloom vegetables layered to perfection, slow-baked with infused olive oil, garlic, and aromatic herbs. [V, GF, DF]"
                    },
                    {
                        name: "Gigot d'Agneau de Sept Heures",
                        price: "38 € (1p) / 72 € (2p) / 138 € (4p+)",
                        description: "Seven-hour slow-roasted leg of lamb infused with garlic, rosemary, and thyme until fork-tender."
                    },
                    {
                        name: "Confit de Canard",
                        price: "32 € (1p) / 60 € (2p) / 115 € (4p+)",
                        description: "Crispy slow-cooked duck leg confit served with golden sarladaise potatoes and garlic confit."
                    },
                    {
                        name: "Blanquette de Veau",
                        price: "34 € (1p) / 64 € (2p) / 120 € (4p+)",
                        description: "Tender veal breast braised in a creamy white velouté sauce with button mushrooms and pearl onions."
                    }
                ]
            },
            {
                pageNumber: 8,
                category: "Viandes & Flambé",
                items: [
                    {
                        name: "Viande Flambée",
                        price: "44 € (1p) / 82 € (2p) / 160 € (4p+)",
                        description: "Prime cut selection flambéed tableside with cognac and herb-infused pan juices. [GF, NF]"
                    },
                    {
                        name: "Bœuf Bourguignon",
                        price: "34 € (1p) / 64 € (2p) / 120 € (4p+)",
                        description: "Tender chunks of prime beef simmered in rich red wine sauce with carrots, mushrooms, and caramelized onions."
                    },
                    {
                        name: "Entrecôte Café de Paris",
                        price: "36 € (1p) / 68 € (2p) / 130 € (4p+)",
                        description: "Prime ribeye steak grilled to perfection, generously topped with the legendary house herb-and-butter sauce."
                    }
                ]
            },
            {
                pageNumber: 9,
                category: "Menu Enfant, Sans Gluten & Menu Amoureux",
                items: [
                    {
                        name: "Le Petit Chef",
                        price: "18 €",
                        description: "Adapted from our main menu for younger palates: tender portions of our signature dishes served with a delicate reduction sauce artfully shaped in the likeness of a rat. Includes a special children's dessert. [NF]"
                    },
                    {
                        name: "Poulet Rôti aux Herbes [GF]",
                        price: "24 € (1p) / 45 € (2p) / 85 € (4p+)",
                        description: "Certified gluten-free herb-roasted chicken breast served with steamed seasonal vegetables and olive oil mash. [GF, DF]"
                    },
                    {
                        name: "Le Menu Amoureux",
                        price: "95 € (Pour Deux)",
                        description: "An intimate, romantic dining experience for two featuring courses crafted with dishes shaped like a heart and finished with an exquisite heart drawn in rich reduction sauce."
                    }
                ]
            },
            {
                pageNumber: 10,
                category: "Les Fromages",
                items: [
                    {
                        name: "Sélection de Finissants Fromages",
                        price: "22 € (1p) / 40 € (2p) / 75 € (4p+)",
                        description: "An exquisite curation of the finest artisan cheeses served with crackers, grapes, and fruit preserves."
                    },
                    {
                        name: "Fontaine de Fondu de Fromage",
                        price: "28 € (1p) / 52 € (2p) / 98 € (4p+)",
                        description: "A cascading warm cheese fondue fountain served with artisanal breads and crisp accompaniments for dipping."
                    }
                ]
            },
            {
                pageNumber: 11,
                category: "Les Desserts & Flambé, Vins, Cafés & Thés",
                items: [
                    {
                        name: "Dessert Flambé",
                        price: "22 € (1p) / 40 € (2p) / 75 € (4p+)",
                        description: "Exquisite tableside flambéed dessert prepared with Grand Marnier liqueur, citrus caramel reduction, and vanilla bean ice cream."
                    },
                    {
                        name: "Tarte Tatin à la Gusteau",
                        price: "16 € (1p) / 30 € (2p) / 58 € (4p+)",
                        description: "Our signature caramelized upside-down apple tart served warm with rich crème fraîche."
                    },
                    {
                        name: "Fontaine de Chocolat avec Fraises Éco",
                        price: "20 € (1p) / 38 € (2p) / 70 € (4p+)",
                        description: "A flowing chocolate fountain paired with fresh organic eco strawberries and sweet dippers."
                    },
                    {
                        name: "Le Dessert du Jour",
                        price: "18 € (1p) / 32 € (2p) / 60 € (4p+)",
                        description: "A daily chef's surprise creation, ensuring something new and delightful for our guests every single day."
                    },
                    {
                        name: "La Sélection des Vins",
                        price: "Sur Demande",
                        description: "An exclusive cellar curation of fine French vintages. For a fully customized wine-pairing experience tailored to your palate, please consult our sommelier on request."
                    },
                    {
                        name: "Cafés & Thés",
                        price: "6 €",
                        description: "Selection of freshly brewed artisanal espresso, café au lait, and fine loose-leaf teas."
                    }
                ]
            },
            {
                pageNumber: 12,
                category: "Cover",
                items: []
            }
        ]
    }
];