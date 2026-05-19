/**
 * Niebla Gourmet - Multilingual System
 * Handles translations, language modal, and floating control
 */

const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
];

const translations = {
    es: {
        select_language: "Seleccione su Idioma",
        subtitle: "Alta cocina con Alma de Monteverde",
        view_menu: "Ver Menú de Desayunos",
        chef_service: "Servicio de Chef Personal",
        whatsapp_label: "WhatsApp",
        whatsapp_sub: "Reservas e información",
        install_app: "Instalar Aplicación",
        copyright: "© 2026 Niebla Gourmet. Todos los derechos reservados.",
        // menu.html keys
        menu_subtitle: "Menu Desayunos",
        menu_desc: '"Desayunos en la Niebla – incluye café de especialidad, fruta fresca y jugo natural de temporada."',
        your_order: "Tu Pedido",
        empty_cart: "Tu pedido está vacío.<br>Agrega delicias del menú.",
        place_order: "Realizar Pedido",
        taxes_included: "* Impuestos incluidos",
        subtotal: "Subtotal",
        service_charge: "Servicio (10%)",
        total: "Total",
        add_to_order: "Añadir al Pedido",
        edit: "Editar",
        remove: "Eliminar",
        quantity: "Cantidad",
        observations: "Observaciones",
        obs_placeholder: "Ej. Sin cebolla, natilla extra...",
        cancel: "Cancelar",
        add: "Agregar",
        save: "Guardar",
        new_order_header: "*Nuevo Pedido - Niebla Gourmet* 🌫️\n",
        sent_from_digital_menu: "_Enviado desde el Menú Digital_",
        // products
        prod_1_name: "Amanecer Típico",
        prod_1_desc: "Una celebración de la tradición costarricense: gallo pinto, huevos al gusto, plátano maduro frito, tortillas de maíz y una cremosa natilla.",
        prod_2_name: "Omelette",
        prod_2_desc: "Huevos frescos de gallina feliz con tu combinación favorita: espinaca, hongos, queso mozzarella, jamón artesanal, tomate cherry y más. Acompañado de pan masa madre y ensalada verde del bosque.",
        prod_3_name: "Huevos del Bosque",
        prod_3_desc: "Huevos al gusto (fritos, revueltos o pochados), servidos con tocineta crujiente o ensalada de arúgula y kale, más pan masa madre. Simpleza elevada con ingredientes locales.",
        prod_4_name: "Niebla Crocante",
        prod_4_desc: "Granola artesanal con yogur casero y frutas frescas de temporada. Un desayuno ligero, lleno de textura, frescura y equilibrio natural.",
        prod_5_name: "Tostadas",
        prod_5_desc: "Pan brioche artesanal en baño de canela y vainilla, dorado al punto justo. Servidas con frutas frescas, sirope de maple y azúcar glas. Un dulce despertar en el corazón del bosque."
    },
    en: {
        select_language: "Select Your Language",
        subtitle: "Haute Cuisine with the Soul of Monteverde",
        view_menu: "View Breakfast Menu",
        chef_service: "Personal Chef Service",
        whatsapp_label: "WhatsApp",
        whatsapp_sub: "Reservations and information",
        install_app: "Install Application",
        copyright: "© 2026 Niebla Gourmet. All rights reserved.",
        // menu.html keys
        menu_subtitle: "Breakfast Menu",
        menu_desc: '"Breakfast in the Mist – includes specialty coffee, fresh fruit, and seasonal natural juice."',
        your_order: "Your Order",
        empty_cart: "Your order is empty.<br>Add delicacies from the menu.",
        place_order: "Place Order",
        taxes_included: "* Taxes included",
        subtotal: "Subtotal",
        service_charge: "Service (10%)",
        total: "Total",
        add_to_order: "Add to Order",
        edit: "Edit",
        remove: "Remove",
        quantity: "Quantity",
        observations: "Special Requests",
        obs_placeholder: "E.g. No onions, extra cream...",
        cancel: "Cancel",
        add: "Add",
        save: "Save",
        new_order_header: "*New Order - Niebla Gourmet* 🌫️\n",
        sent_from_digital_menu: "_Sent from the Digital Menu_",
        // products
        prod_1_name: "Typical Sunrise",
        prod_1_desc: "A celebration of Costa Rican tradition: gallo pinto (rice and beans), eggs cooked to your style, fried sweet plantain, corn tortillas, and sour cream.",
        prod_2_name: "Omelette",
        prod_2_desc: "Fresh farm-raised eggs with your favorite combination: spinach, mushrooms, mozzarella cheese, artisanal ham, cherry tomato, and more. Accompanied by sourdough bread and green forest salad.",
        prod_3_name: "Forest Eggs",
        prod_3_desc: "Eggs to your liking (fried, scrambled, or poached), served with crispy bacon or an arugula and kale salad, plus sourdough bread. Simplicity elevated with local ingredients.",
        prod_4_name: "Crispy Mist",
        prod_4_desc: "Artisanal granola with homemade yogurt and fresh seasonal fruits. A light breakfast, full of texture, freshness, and natural balance.",
        prod_5_name: "French Toast",
        prod_5_desc: "Artisanal brioche bread dipped in cinnamon and vanilla, perfectly golden. Served with fresh fruits, maple syrup, and powdered sugar. A sweet awakening in the heart of the forest."
    },
    fr: {
        select_language: "Choisissez votre langue",
        subtitle: "Haute Cuisine avec l'Âme de Monteverde",
        view_menu: "Voir le Menu du Petit-Déjeuner",
        chef_service: "Service de Chef Personnel",
        whatsapp_label: "WhatsApp",
        whatsapp_sub: "Réservations et informations",
        install_app: "Installer l'Application",
        copyright: "© 2026 Niebla Gourmet. Tous droits réservés.",
        // menu.html keys
        menu_subtitle: "Menu du Petit-Déjeuner",
        menu_desc: '"Petit-déjeuner dans la Brume – comprend du café de spécialité, des fruits frais et un jus de fruits frais de saison."',
        your_order: "Votre Commande",
        empty_cart: "Votre commande est vide.<br>Ajoutez des délices du menu.",
        place_order: "Passer la Commande",
        taxes_included: "* Taxes incluses",
        subtotal: "Sous-total",
        service_charge: "Frais de service (10%)",
        total: "Total",
        add_to_order: "Ajouter à la Commande",
        edit: "Modifier",
        remove: "Supprimer",
        quantity: "Quantité",
        observations: "Observations",
        obs_placeholder: "Ex. Sans oignon, crème supplémentaire...",
        cancel: "Annuler",
        add: "Ajouter",
        save: "Enregistrer",
        new_order_header: "*Nouvelle Commande - Niebla Gourmet* 🌫️\n",
        sent_from_digital_menu: "_Envoyé depuis le Menu Numérique_",
        // products
        prod_1_name: "Aurore Typique",
        prod_1_desc: "Une célébration de la tradition costaricienne : gallo pinto, œufs à votre goût, banane plantain mûre frite, tortillas de maïs et crème fraîche.",
        prod_2_name: "Omelette",
        prod_2_desc: "Œufs frais de poule heureuse avec votre combinaison préférée : épinards, champignons, mozzarella, jambon artisanal, tomates cerises et plus encore. Accompagné de pain au levain et salade verte de la forêt.",
        prod_3_name: "Œufs de la Forêt",
        prod_3_desc: "Œufs au goût (frits, brouillés ou pochés), servis avec du bacon croustillant ou une salade de roquette et chou kale, plus pain au levain. La simplicité sublimée par des ingrédients locaux.",
        prod_4_name: "Brume Croustillante",
        prod_4_desc: "Granola artisanale avec yaourt maison et fruits frais de saison. Un petit-déjeuner léger, plein de textures, de fraîcheur et d'équilibre naturel.",
        prod_5_name: "Pain Perdu",
        prod_5_desc: "Pain brioche artisanal trempé dans de la cannelle et de la vanille, doré à point. Servi avec des fruits frais, du sirop d'érable et du sucre glace. Un réveil en douceur au cœur de la forêt."
    },
    de: {
        select_language: "Wählen Sie Ihre Sprache",
        subtitle: "Spitzenküche mit der Seele von Monteverde",
        view_menu: "Frühstücksmenü ansehen",
        chef_service: "Persönlicher Chefkoch-Service",
        whatsapp_label: "WhatsApp",
        whatsapp_sub: "Reservierungen und Informationen",
        install_app: "Anwendung installieren",
        copyright: "© 2026 Niebla Gourmet. Alle Rechte vorbehalten.",
        // menu.html keys
        menu_subtitle: "Frühstücksmenü",
        menu_desc: '"Frühstück im Nebel – inklusive Kaffeespezialitäten, frischem Obst und natürlichem Fruchtsaft der Saison."',
        your_order: "Ihre Bestellung",
        empty_cart: "Ihre Bestellung ist leer.<br>Fügen Sie Köstlichkeiten aus der Speisekarte hinzu.",
        place_order: "Bestellung aufgeben",
        taxes_included: "* Inklusive Steuern",
        subtotal: "Zwischensumme",
        service_charge: "Servicegebühr (10%)",
        total: "Gesamtsumme",
        add_to_order: "Zur Bestellung hinzufügen",
        edit: "Bearbeiten",
        remove: "Löschen",
        quantity: "Menge",
        observations: "Anmerkungen",
        obs_placeholder: "Z.B. Keine Zwiebeln, extra saure Sahne...",
        cancel: "Abbrechen",
        add: "Hinzufügen",
        save: "Speichern",
        new_order_header: "*Neue Bestellung - Niebla Gourmet* 🌫️\n",
        sent_from_digital_menu: "_Gesendet aus dem digitalen Menü_",
        // products
        prod_1_name: "Typischer Sonnenaufgang",
        prod_1_desc: "Eine Hommage an die costa-ricanische Tradition: Gallo Pinto (Reis und Bohnen), Eier nach Wunsch, gebratene reife Kochbananen, Maistortillas und saure Sahne.",
        prod_2_name: "Omelett",
        prod_2_desc: "Frische Eier von glücklichen Hühnern mit Ihrer Lieblingskombination: Spinat, Pilze, Mozzarella, hausgemachter Schinken, Kirschtomaten und mehr. Serviert mit Sauerteigbrot und grünem Waldsalat.",
        prod_3_name: "Waldeier",
        prod_3_desc: "Eier nach Wunsch (Spiegel-, Rühreier oder pochierte Eier), serviert mit knusprigem Speck oder Rucola-Grünkohl-Salat, dazu Sauerteigbrot. Einfachheit verfeinert mit lokalen Zutaten.",
        prod_4_name: "Knuspriger Nebel",
        prod_4_desc: "Hausgemachtes Granola mit Joghurt und frischem Obst der Saison. Ein leichtes Frühstück voller Textur, Frische und natürlicher Balance.",
        prod_5_name: "Arme Ritter",
        prod_5_desc: "Hausgemachtes Briochebrot in Zimt und Vanille gewendet, perfekt goldbraun gebraten. Serviert mit frischem Obst, Ahornsirup und Puderzucker. Ein süßes Erwachen im Herzen des Waldes."
    },
    pt: {
        select_language: "Selecione o seu idioma",
        subtitle: "Alta Cozinha com Alma de Monteverde",
        view_menu: "Ver Menu de Café da Manhã",
        chef_service: "Serviço de Chef Pessoal",
        whatsapp_label: "WhatsApp",
        whatsapp_sub: "Reservas e informações",
        install_app: "Instalar Aplicativo",
        copyright: "© 2026 Niebla Gourmet. Todos os direitos reservados.",
        // menu.html keys
        menu_subtitle: "Menu de Café da Manhã",
        menu_desc: '"Café da Manhã na Névoa – inclui café especial, frutas frescas e suco natural da estação."',
        your_order: "Seu Pedido",
        empty_cart: "Seu pedido está vazio.<br>Adicione delícias do menu.",
        place_order: "Fazer Pedido",
        taxes_included: "* Impostos incluídos",
        subtotal: "Subtotal",
        service_charge: "Serviço (10%)",
        total: "Total",
        add_to_order: "Adicionar ao Pedido",
        edit: "Editar",
        remove: "Excluir",
        quantity: "Quantidade",
        observations: "Observações",
        obs_placeholder: "Ex. Sem cebola, nata extra...",
        cancel: "Cancelar",
        add: "Adicionar",
        save: "Salvar",
        new_order_header: "*Novo Pedido - Niebla Gourmet* 🌫️\n",
        sent_from_digital_menu: "_Enviado do Menu Digital_",
        // products
        prod_1_name: "Amanhecer Típico",
        prod_1_desc: "Uma celebração da tradição costarriquenha: gallo pinto, ovos ao seu gosto, banana-da-terra madura frita, tortilhas de milho e uma cremosa nata.",
        prod_2_name: "Omelete",
        prod_2_desc: "Ovos frescos de galinha feliz com sua combinação favorita: espinafre, cogumelos, queijo mussarela, presunto artesanal, tomate cereja e mais. Acompanhado de pão de fermentação natural e salada verde da floresta.",
        prod_3_name: "Ovos do Bosque",
        prod_3_desc: "Ovos ao seu gosto (fritos, mexidos ou pochê), servidos com bacon crocante ou salada de rúcula e couve, além de pão de fermentação natural. Simplicidade elevada com ingredientes locais.",
        prod_4_name: "Névoa Crocante",
        prod_4_desc: "Granola artesanal com iogurte caseiro e frutas frescas da estação. Um café da manhã leve, cheio de textura, frescor e equilíbrio natural.",
        prod_5_name: "Rabanadas",
        prod_5_desc: "Pão brioche artesanal banhado em canela e baunilha, dourado no ponto certo. Servido com frutas frescas, xarope de bordo (maple) e açúcar de confeiteiro. Um doce despertar no coração da floresta."
    }
};

let currentLang = 'es';

// Get translated version of products array
function getTranslatedProducts(langCode) {
    const list = [
        { id: 1, name: "Amanecer Típico", price: 20.00, description: "Una celebración de la tradición costarricense: gallo pinto, huevos al gusto, plátano maduro frito, tortillas de maíz y una cremosa natilla.", img: "./img/menu/desayunotipico.jpg" },
        { id: 2, name: "Omelette", price: 20.00, description: "Huevos frescos de gallina feliz con tu combinación favorita: espinaca, hongos, queso mozzarella, jamón artesanal, tomate cherry y más. Acompañado de pan masa madre y ensalada verde del bosque.", img: "./img/menu/omelette.jpeg" },
        { id: 3, name: "Huevos del Bosque", price: 20.00, description: "Huevos al gusto (fritos, revueltos o pochados), servidos con tocineta crujiente o ensalada de arúgula y kale, más pan masa madre. Simpleza elevada con ingredientes locales.", img: "./img/menu/huevos.jpg" },
        { id: 4, name: "Niebla Crocante", price: 20.00, description: "Granola artesanal con yogur casero y frutas frescas de temporada. Un desayuno ligero, lleno de textura, frescura y equilibrio natural.", img: "./img/menu/crocante.jpg" },
        { id: 5, name: "Tostadas", price: 20.00, description: "Pan brioche artesanal en baño de canela y vainilla, dorado al punto justo. Servidas con frutas frescas, sirope de maple y azúcar glas. Un dulce despertar en el corazón del bosque.", img: "./img/menu/tostadas.jpeg" }
    ];
    return list.map(prod => {
        const nameKey = `prod_${prod.id}_name`;
        const descKey = `prod_${prod.id}_desc`;
        return {
            ...prod,
            name: translations[langCode]?.[nameKey] || prod.name,
            description: translations[langCode]?.[descKey] || prod.description
        };
    });
}

// Injects the floating button and modal markup dynamically
function injectLanguageMarkup() {
    // 1. Create Modal Container
    if (!document.getElementById('languageModalOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'languageModalOverlay';
        overlay.className = 'fixed inset-0 bg-black/75 backdrop-blur-md z-[10000] flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none invisible';
        overlay.innerHTML = `
            <div id="languageModal" class="bg-[#0a2419]/98 border border-tertiary/20 rounded-xl overflow-hidden w-full max-w-sm transform scale-95 transition-all duration-300 shadow-2xl flex flex-col max-h-[90vh] backdrop-blur-md">
                <!-- Header -->
                <div class="p-5 border-b border-antique-gold/20 flex justify-between items-center bg-surface-container/50">
                    <h3 class="font-sans font-bold text-primary text-lg tracking-wide flex items-center gap-2">
                        <i class="fa-solid fa-globe text-antique-gold text-lg"></i>
                        <span id="langModalTitle" data-translate-key="select_language">Seleccione su Idioma</span>
                    </h3>
                    <button id="closeLanguageModalBtn" class="text-secondary hover:text-tertiary transition p-2 -mr-2 hidden rounded-full hover:bg-surface-container-high w-8 h-8 flex items-center justify-center">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>
                <!-- Language List -->
                <div class="p-5 overflow-y-auto flex-1 space-y-3" id="languageListContainer"></div>
            </div>
        `;
        document.body.appendChild(overlay);

        // Click outside modal to close (if allowed)
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay && !document.getElementById('closeLanguageModalBtn').classList.contains('hidden')) {
                closeLanguageModal();
            }
        });
    }

    // 2. Create Floating Language Control Button
    if (!document.getElementById('floatingLangBtn')) {
        const btn = document.createElement('button');
        btn.id = 'floatingLangBtn';
        btn.className = 'fixed w-12 h-12 rounded-full glass-card border border-antique-gold/30 flex items-center justify-center text-antique-gold hover:border-antique-gold active:scale-95 transition-all shadow-lg cursor-pointer';
        
        // Inline CSS styling to handle environment safe area inset top
        btn.style.position = 'fixed';
        btn.style.top = 'calc(16px + env(safe-area-inset-top, 0px))';
        btn.style.right = '16px';
        btn.style.zIndex = '990';
        
        btn.innerHTML = `
            <i class="fa-solid fa-globe text-lg"></i>
            <span id="floatingLangBadge" class="absolute -bottom-1 -right-1 bg-antique-gold text-[#00180d] text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow border border-[#00180d]/20">ES</span>
        `;
        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            openLanguageModal();
        });
    }

    // 3. Populate language buttons
    const container = document.getElementById('languageListContainer');
    if (container && container.children.length === 0) {
        languages.forEach(lang => {
            const btn = document.createElement('button');
            btn.className = 'w-full flex items-center justify-between p-4 rounded-xl border border-secondary/20 hover:border-antique-gold/80 bg-[#152f23]/40 hover:bg-antique-gold/10 active:scale-[0.98] transition-all group text-left';
            btn.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="text-2xl select-none text-antique-gold group-hover:text-primary transition-colors">${lang.flag}</span>
                    <span class="font-sans font-semibold text-on-surface group-hover:text-antique-gold transition-colors">${lang.name}</span>
                </div>
                <i class="fa-solid fa-chevron-right text-secondary/30 group-hover:text-antique-gold group-hover:translate-x-1 transition-all text-xs"></i>
            `;
            btn.addEventListener('click', () => {
                selectLanguage(lang.code);
            });
            container.appendChild(btn);
        });
    }

    // Bind Close Button Click
    const closeBtn = document.getElementById('closeLanguageModalBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeLanguageModal();
        });
    }
}

function openLanguageModal() {
    const overlay = document.getElementById('languageModalOverlay');
    const modal = document.getElementById('languageModal');
    const closeBtn = document.getElementById('closeLanguageModalBtn');
    
    // Check if we already have a language URL parameter to allow closing it
    const urlParams = new URLSearchParams(window.location.search);
    const hasLang = urlParams.get('lang') && languages.some(l => l.code === urlParams.get('lang'));

    if (hasLang) {
        closeBtn.classList.remove('hidden');
    } else {
        closeBtn.classList.add('hidden');
    }

    // Translate modal elements in-place based on current selection or default
    const tempLang = hasLang ? urlParams.get('lang') : 'es';
    const titleText = translations[tempLang]?.select_language || "Seleccione su Idioma";
    document.getElementById('langModalTitle').textContent = titleText;

    overlay.classList.remove('invisible', 'pointer-events-none');
    overlay.classList.add('active');
    overlay.style.opacity = '1';
    modal.classList.remove('scale-95', 'opacity-0');
    modal.classList.add('scale-100', 'opacity-100');
}

function closeLanguageModal() {
    const overlay = document.getElementById('languageModalOverlay');
    const modal = document.getElementById('languageModal');
    
    overlay.style.opacity = '0';
    modal.classList.remove('scale-100', 'opacity-100');
    modal.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        overlay.classList.add('invisible', 'pointer-events-none');
        overlay.classList.remove('active');
    }, 300);
}

function selectLanguage(langCode) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', langCode);
    window.location.href = url.toString();
}

// Function to translate all marked elements in the DOM
function applyTranslations(langCode) {
    currentLang = langCode;

    // Update the floating language badge
    const badge = document.getElementById('floatingLangBadge');
    if (badge) {
        badge.textContent = langCode.toUpperCase();
    }

    // Update document HTML lang attribute
    document.documentElement.setAttribute('lang', langCode);

    // 1. Translate elements with data-translate-key attribute
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key');
        if (translations[langCode] && translations[langCode][key]) {
            el.innerHTML = translations[langCode][key];
        }
    });

    // 2. Auto-translate link parameters so navigating keeps the selected language
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel') && !href.startsWith('javascript:')) {
            try {
                // Split url into parts to prevent URL constructor errors for local pages
                const parts = href.split('?');
                const path = parts[0];
                const searchParams = new URLSearchParams(parts[1] || '');
                searchParams.set('lang', langCode);
                link.setAttribute('href', path + '?' + searchParams.toString());
            } catch (e) {
                console.error("Error setting href lang parameter:", e);
            }
        }
    });
}

// Main execution on script load
document.addEventListener('DOMContentLoaded', () => {
    // Inject components
    injectLanguageMarkup();

    // Check URL GET parameter
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam && languages.some(l => l.code === langParam)) {
        currentLang = langParam;
        applyTranslations(currentLang);
    } else {
        // No valid GET parameter - force open modal
        openLanguageModal();
    }
});
